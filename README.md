A proof of concept: putting ClojureScript code into an HTML document. What you see here is derived from
<a href="https://github.com/kanaka/clojurescript">ClojureScript compiled in ClojureScript</a>,
though I am sure that <a href="https://github.com/kanaka">Joel Martin</a> never intended for
his code to be used as badly as I have used it. Blame me, not him :)

My thinking was as follows: if his ClojureScript REPL can compile from strings entered into a text area, why can&rsquo;t it compile from strings that are in an HTML document. I knew that sort of thing
was possible; <a href="https://github.com/jeresig/processing-js">processing-js</a> can do it. In
fact, I lifted some of their code and modified it slightly; it's in the <samp>load_ext.js</samp>
file.

I have put this all together without a thorough understanding of the original
(as will be obvious when you look
at the code). Again, it&rsquo;s a proof of concept, and, if it turns out to be useful, I leave
it to smarter and more skilled people to make it work better.</p>
