/*
 *
 *  Shameless ripooff of function loadSketchFromSources in
 *  ProcessingJS.org
 */
function loadFromSource(sources) {
  var code = [], errors = [], sourcesCount = sources.length, loaded = 0;

  function ajaxAsync(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        var error;
        if (xhr.status !== 200 && xhr.status !== 0) {
          error = "Invalid XHR status " + xhr.status;
        } else if (xhr.responseText === "") {
          // Give a hint when loading fails due to same-origin issues on file:/// urls
          if ( ("withCredentials" in new XMLHttpRequest()) &&
                (new XMLHttpRequest()).withCredentials === false &&
                window.location.protocol === "file:" ) {
            error = "XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver.";
          } else {
            error = "File is empty.";
          }
        }

        callback(xhr.responseText, error);
      }
    };
    xhr.open("GET", url, true);
    xhr.setRequestHeader("If-Modified-Since", "Fri, 01 Jan 1960 00:00:00 GMT"); // no cache
    xhr.send(null);
  }
  
  function loadBlock(index, filename) {
    function callback(block, error) {
      code[index] = block;
      ++loaded;
      if (error) {
        errors.push(filename + " ==> " + error);
      }
      if (loaded === sourcesCount) {
        if (errors.length === 0) {
          try {
            cljs.repl.evaluate_code(block)
          } catch(e) {
            console.log("Unable to compile " + filename + ".");
            throw e;
          }
        } else {
          throw "Unable to load: " + errors.join("\n");
        }
      }
    }
    if (filename.charAt(0) === '#') {
      // trying to get script from the element
      var scriptElement = document.getElementById(filename.substring(1));
      if (scriptElement) {
        callback(scriptElement.text || scriptElement.textContent);
      } else {
        callback("", "Unable to load script: element with id \'" + filename.substring(1) + "\' was not found");
      }
      return;
    }

    ajaxAsync(filename, callback);
  }

  for (var i = 0; i < sourcesCount; ++i) {
    loadBlock(i, sources[i]);
  }
}

function init_cljs() {
  var scripts = document.getElementsByTagName("script");
  var sources = [];
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].type == "text/clojurescript") {
      if (scripts[i].text != "") {
        cljs.repl.evaluate_code(scripts[i].text);
      }
      else
      {
        sources.push(scripts[i].src);
      }
    }
  }
  loadFromSource(sources);
}
