goog.provide('cljs.core');
goog.require('goog.array');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
goog.require('goog.string');
cljs.core._STAR_unchecked_if_STAR_ = false;
cljs.core._STAR_assert_STAR_ = true;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x == null);
});
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var x__$1 = (((x == null))?null:x);
if((p[goog.typeOf(x__$1)]))
{return true;
} else
{if((p["_"]))
{return true;
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x.constructor.prototype === x);
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error(["No protocol method ",proto," defined for type ",goog.typeOf(obj),": ",obj].join(""));
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return array_like.slice();
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
cljs.core.make_array = (function() {
var make_array = null;
var make_array__1 = (function (size){
return (new Array(size));
});
var make_array__2 = (function (type,size){
return make_array.call(null,size);
});
make_array = function(type,size){
switch(arguments.length){
case 1:
return make_array__1.call(this,type);
case 2:
return make_array__2.call(this,type,size);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_array.cljs$lang$arity$1 = make_array__1;
make_array.cljs$lang$arity$2 = make_array__2;
return make_array;
})()
;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__3245__delegate = function (array,i,idxs){
return cljs.core.apply.call(null,aget,aget.call(null,array,i),idxs);
};
var G__3245 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3245__delegate.call(this, array, i, idxs);
};
G__3245.cljs$lang$maxFixedArity = 2;
G__3245.cljs$lang$applyTo = (function (arglist__3246){
var array = cljs.core.first(arglist__3246);
var i = cljs.core.first(cljs.core.next(arglist__3246));
var idxs = cljs.core.rest(cljs.core.next(arglist__3246));
return G__3245__delegate(array, i, idxs);
});
G__3245.cljs$lang$arity$variadic = G__3245__delegate;
return G__3245;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case 2:
return aget__2.call(this,array,i);
default:
return aget__3.cljs$lang$arity$variadic(array,i, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.cljs$lang$arity$2 = aget__2;
aget.cljs$lang$arity$variadic = aget__3.cljs$lang$arity$variadic;
return aget;
})()
;
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.into_array = (function() {
var into_array = null;
var into_array__1 = (function (aseq){
return into_array.call(null,null,aseq);
});
var into_array__2 = (function (type,aseq){
return cljs.core.reduce.call(null,(function (a,x){
a.push(x);
return a;
}),[],aseq);
});
into_array = function(type,aseq){
switch(arguments.length){
case 1:
return into_array__1.call(this,type);
case 2:
return into_array__2.call(this,type,aseq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
into_array.cljs$lang$arity$1 = into_array__1;
into_array.cljs$lang$arity$2 = into_array__2;
return into_array;
})()
;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$1;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$1(this$);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$2(this$,a);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$3(this$,a,b);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$4;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$4(this$,a,b,c);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$5;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$5(this$,a,b,c,d);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$6;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$6(this$,a,b,c,d,e);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$7;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$7(this$,a,b,c,d,e,f);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$8;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$9;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$10;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$11;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$12;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$13;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$14;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$15;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$16;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$17;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$18;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$19;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$20;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IFn$_invoke$arity$21;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IFn$_invoke$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._invoke[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._invoke["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return _invoke__1.call(this,this$);
case 2:
return _invoke__2.call(this,this$,a);
case 3:
return _invoke__3.call(this,this$,a,b);
case 4:
return _invoke__4.call(this,this$,a,b,c);
case 5:
return _invoke__5.call(this,this$,a,b,c,d);
case 6:
return _invoke__6.call(this,this$,a,b,c,d,e);
case 7:
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case 8:
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_invoke.cljs$lang$arity$1 = _invoke__1;
_invoke.cljs$lang$arity$2 = _invoke__2;
_invoke.cljs$lang$arity$3 = _invoke__3;
_invoke.cljs$lang$arity$4 = _invoke__4;
_invoke.cljs$lang$arity$5 = _invoke__5;
_invoke.cljs$lang$arity$6 = _invoke__6;
_invoke.cljs$lang$arity$7 = _invoke__7;
_invoke.cljs$lang$arity$8 = _invoke__8;
_invoke.cljs$lang$arity$9 = _invoke__9;
_invoke.cljs$lang$arity$10 = _invoke__10;
_invoke.cljs$lang$arity$11 = _invoke__11;
_invoke.cljs$lang$arity$12 = _invoke__12;
_invoke.cljs$lang$arity$13 = _invoke__13;
_invoke.cljs$lang$arity$14 = _invoke__14;
_invoke.cljs$lang$arity$15 = _invoke__15;
_invoke.cljs$lang$arity$16 = _invoke__16;
_invoke.cljs$lang$arity$17 = _invoke__17;
_invoke.cljs$lang$arity$18 = _invoke__18;
_invoke.cljs$lang$arity$19 = _invoke__19;
_invoke.cljs$lang$arity$20 = _invoke__20;
_invoke.cljs$lang$arity$21 = _invoke__21;
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ICounted$_count$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ICounted$_count$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._count[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._count["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._empty[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._empty["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ICollection$_conj$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ICollection$_conj$arity$2(coll,o);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._conj[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._conj["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._nth[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._nth["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IIndexed$_nth$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$3(coll,n,not_found);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._nth[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._nth["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return _nth__2.call(this,coll,n);
case 3:
return _nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_nth.cljs$lang$arity$2 = _nth__2;
_nth.cljs$lang$arity$3 = _nth__3;
return _nth;
})()
;
cljs.core.ASeq = {};
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISeq$_first$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISeq$_first$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._first[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._first["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISeq$_rest$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISeq$_rest$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._rest[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._rest["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.INext = {};
cljs.core._next = (function _next(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$INext$_next$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$INext$_next$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._next[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._next["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"INext.-next",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$ILookup$_lookup$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$2(o,k);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._lookup[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._lookup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$ILookup$_lookup$arity$3;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$ILookup$_lookup$arity$3(o,k,not_found);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._lookup[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._lookup["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case 2:
return _lookup__2.call(this,o,k);
case 3:
return _lookup__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_lookup.cljs$lang$arity$2 = _lookup__2;
_lookup.cljs$lang$arity$3 = _lookup__3;
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IAssociative$_contains_key_QMARK_$arity$2(coll,k);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._contains_key_QMARK_[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._contains_key_QMARK_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IAssociative$_assoc$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,k,v);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._assoc[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._assoc["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IMap$_dissoc$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IMap$_dissoc$arity$2(coll,k);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._dissoc[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._dissoc["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IMapEntry$_key$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_key$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._key[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._key["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IMapEntry$_val$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IMapEntry$_val$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._val[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._val["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISet$_disjoin$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISet$_disjoin$arity$2(coll,v);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._disjoin[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._disjoin["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IStack$_peek$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IStack$_peek$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._peek[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._peek["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IStack$_pop$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IStack$_pop$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._pop[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._pop["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IVector$_assoc_n$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IVector$_assoc_n$arity$3(coll,n,val);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._assoc_n[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._assoc_n["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IDeref$_deref$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IDeref$_deref$arity$1(o);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._deref[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._deref["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3(o,msec,timeout_val);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._deref_with_timeout[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._deref_with_timeout["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IMeta$_meta$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IMeta$_meta$arity$1(o);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._meta[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._meta["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IWithMeta$_with_meta$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IWithMeta$_with_meta$arity$2(o,meta);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._with_meta[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._with_meta["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$2(coll,f);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._reduce[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._reduce["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IReduce$_reduce$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IReduce$_reduce$arity$3(coll,f,start);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._reduce[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._reduce["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case 2:
return _reduce__2.call(this,coll,f);
case 3:
return _reduce__3.call(this,coll,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_reduce.cljs$lang$arity$2 = _reduce__2;
_reduce.cljs$lang$arity$3 = _reduce__3;
return _reduce;
})()
;
cljs.core.IKVReduce = {};
cljs.core._kv_reduce = (function _kv_reduce(coll,f,init){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IKVReduce$_kv_reduce$arity$3(coll,f,init);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._kv_reduce[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._kv_reduce["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IKVReduce.-kv-reduce",coll);
}
}
})().call(null,coll,f,init);
}
});
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IEquiv$_equiv$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IEquiv$_equiv$arity$2(o,other);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._equiv[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._equiv["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IHash$_hash$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IHash$_hash$arity$1(o);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._hash[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._hash["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$ISeqable$_seq$arity$1;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$ISeqable$_seq$arity$1(o);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._seq[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISymbol = {};
cljs.core.ISequential = {};
cljs.core.IList = {};
cljs.core.IRecord = {};
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IReversible$_rseq$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IReversible$_rseq$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._rseq[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._rseq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ISorted = {};
cljs.core._sorted_seq = (function _sorted_seq(coll,ascending_QMARK_){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_sorted_seq$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq$arity$2(coll,ascending_QMARK_);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._sorted_seq[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._sorted_seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq",coll);
}
}
})().call(null,coll,ascending_QMARK_);
}
});
cljs.core._sorted_seq_from = (function _sorted_seq_from(coll,k,ascending_QMARK_){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_sorted_seq_from$arity$3(coll,k,ascending_QMARK_);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._sorted_seq_from[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._sorted_seq_from["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-sorted-seq-from",coll);
}
}
})().call(null,coll,k,ascending_QMARK_);
}
});
cljs.core._entry_key = (function _entry_key(coll,entry){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_entry_key$arity$2;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_entry_key$arity$2(coll,entry);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._entry_key[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._entry_key["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-entry-key",coll);
}
}
})().call(null,coll,entry);
}
});
cljs.core._comparator = (function _comparator(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$ISorted$_comparator$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$ISorted$_comparator$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._comparator[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._comparator["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISorted.-comparator",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IPrintable$_pr_seq$arity$2;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IPrintable$_pr_seq$arity$2(o,opts);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._pr_seq[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._pr_seq["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IWriter = {};
cljs.core._write = (function _write(writer,s){
if((function (){var and__3941__auto__ = writer;
if(and__3941__auto__)
{return writer.cljs$core$IWriter$_write$arity$2;
} else
{return and__3941__auto__;
}
})())
{return writer.cljs$core$IWriter$_write$arity$2(writer,s);
} else
{var x__2047__auto__ = (((writer == null))?null:writer);
return (function (){var or__3943__auto__ = (cljs.core._write[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._write["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-write",writer);
}
}
})().call(null,writer,s);
}
});
cljs.core._flush = (function _flush(writer){
if((function (){var and__3941__auto__ = writer;
if(and__3941__auto__)
{return writer.cljs$core$IWriter$_flush$arity$1;
} else
{return and__3941__auto__;
}
})())
{return writer.cljs$core$IWriter$_flush$arity$1(writer);
} else
{var x__2047__auto__ = (((writer == null))?null:writer);
return (function (){var or__3943__auto__ = (cljs.core._flush[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._flush["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWriter.-flush",writer);
}
}
})().call(null,writer);
}
});
cljs.core.IPrintWithWriter = {};
cljs.core._pr_writer = (function _pr_writer(o,writer,opts){
if((function (){var and__3941__auto__ = o;
if(and__3941__auto__)
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3;
} else
{return and__3941__auto__;
}
})())
{return o.cljs$core$IPrintWithWriter$_pr_writer$arity$3(o,writer,opts);
} else
{var x__2047__auto__ = (((o == null))?null:o);
return (function (){var or__3943__auto__ = (cljs.core._pr_writer[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._pr_writer["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintWithWriter.-pr-writer",o);
}
}
})().call(null,o,writer,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if((function (){var and__3941__auto__ = d;
if(and__3941__auto__)
{return d.cljs$core$IPending$_realized_QMARK_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return d.cljs$core$IPending$_realized_QMARK_$arity$1(d);
} else
{var x__2047__auto__ = (((d == null))?null:d);
return (function (){var or__3943__auto__ = (cljs.core._realized_QMARK_[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._realized_QMARK_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IWatchable$_notify_watches$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IWatchable$_notify_watches$arity$3(this$,oldval,newval);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._notify_watches[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._notify_watches["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IWatchable$_add_watch$arity$3;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IWatchable$_add_watch$arity$3(this$,key,f);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._add_watch[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._add_watch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if((function (){var and__3941__auto__ = this$;
if(and__3941__auto__)
{return this$.cljs$core$IWatchable$_remove_watch$arity$2;
} else
{return and__3941__auto__;
}
})())
{return this$.cljs$core$IWatchable$_remove_watch$arity$2(this$,key);
} else
{var x__2047__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3943__auto__ = (cljs.core._remove_watch[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._remove_watch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.IEditableCollection = {};
cljs.core._as_transient = (function _as_transient(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IEditableCollection$_as_transient$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._as_transient[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._as_transient["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IEditableCollection.-as-transient",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ITransientCollection = {};
cljs.core._conj_BANG_ = (function _conj_BANG_(tcoll,val){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._conj_BANG_[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._conj_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-conj!",tcoll);
}
}
})().call(null,tcoll,val);
}
});
cljs.core._persistent_BANG_ = (function _persistent_BANG_(tcoll){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientCollection$_persistent_BANG_$arity$1(tcoll);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._persistent_BANG_[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._persistent_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientCollection.-persistent!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientAssociative = {};
cljs.core._assoc_BANG_ = (function _assoc_BANG_(tcoll,key,val){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,key,val);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._assoc_BANG_[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._assoc_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientAssociative.-assoc!",tcoll);
}
}
})().call(null,tcoll,key,val);
}
});
cljs.core.ITransientMap = {};
cljs.core._dissoc_BANG_ = (function _dissoc_BANG_(tcoll,key){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientMap$_dissoc_BANG_$arity$2(tcoll,key);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._dissoc_BANG_[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._dissoc_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientMap.-dissoc!",tcoll);
}
}
})().call(null,tcoll,key);
}
});
cljs.core.ITransientVector = {};
cljs.core._assoc_n_BANG_ = (function _assoc_n_BANG_(tcoll,n,val){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,n,val);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._assoc_n_BANG_[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._assoc_n_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-assoc-n!",tcoll);
}
}
})().call(null,tcoll,n,val);
}
});
cljs.core._pop_BANG_ = (function _pop_BANG_(tcoll){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientVector$_pop_BANG_$arity$1(tcoll);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._pop_BANG_[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._pop_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientVector.-pop!",tcoll);
}
}
})().call(null,tcoll);
}
});
cljs.core.ITransientSet = {};
cljs.core._disjoin_BANG_ = (function _disjoin_BANG_(tcoll,v){
if((function (){var and__3941__auto__ = tcoll;
if(and__3941__auto__)
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2;
} else
{return and__3941__auto__;
}
})())
{return tcoll.cljs$core$ITransientSet$_disjoin_BANG_$arity$2(tcoll,v);
} else
{var x__2047__auto__ = (((tcoll == null))?null:tcoll);
return (function (){var or__3943__auto__ = (cljs.core._disjoin_BANG_[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._disjoin_BANG_["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ITransientSet.-disjoin!",tcoll);
}
}
})().call(null,tcoll,v);
}
});
cljs.core.IComparable = {};
cljs.core._compare = (function _compare(x,y){
if((function (){var and__3941__auto__ = x;
if(and__3941__auto__)
{return x.cljs$core$IComparable$_compare$arity$2;
} else
{return and__3941__auto__;
}
})())
{return x.cljs$core$IComparable$_compare$arity$2(x,y);
} else
{var x__2047__auto__ = (((x == null))?null:x);
return (function (){var or__3943__auto__ = (cljs.core._compare[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._compare["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComparable.-compare",x);
}
}
})().call(null,x,y);
}
});
cljs.core.IChunk = {};
cljs.core._drop_first = (function _drop_first(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunk$_drop_first$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunk$_drop_first$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._drop_first[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._drop_first["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunk.-drop-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedSeq = {};
cljs.core._chunked_first = (function _chunked_first(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_first$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._chunked_first[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._chunked_first["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._chunked_rest = (function _chunked_rest(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._chunked_rest[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._chunked_rest["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedSeq.-chunked-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IChunkedNext = {};
cljs.core._chunked_next = (function _chunked_next(coll){
if((function (){var and__3941__auto__ = coll;
if(and__3941__auto__)
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1;
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
} else
{var x__2047__auto__ = (((coll == null))?null:coll);
return (function (){var or__3943__auto__ = (cljs.core._chunked_next[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._chunked_next["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IChunkedNext.-chunked-next",coll);
}
}
})().call(null,coll);
}
});
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__3248 = coll;
if(G__3248)
{if((function (){var or__3943__auto__ = (G__3248.cljs$lang$protocol_mask$partition0$ & 32);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3248.cljs$core$ASeq$;
}
})())
{return true;
} else
{if((!G__3248.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__3248);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ASeq,G__3248);
}
})())
{return coll;
} else
{return cljs.core._seq.call(null,coll);
}
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__3250 = coll;
if(G__3250)
{if((function (){var or__3943__auto__ = (G__3250.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3250.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__3250.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__3250);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__3250);
}
})())
{return cljs.core._first.call(null,coll);
} else
{var s = cljs.core.seq.call(null,coll);
if((s == null))
{return null;
} else
{return cljs.core._first.call(null,s);
}
}
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
if(!((coll == null)))
{if((function (){var G__3252 = coll;
if(G__3252)
{if((function (){var or__3943__auto__ = (G__3252.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3252.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__3252.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__3252);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__3252);
}
})())
{return cljs.core._rest.call(null,coll);
} else
{var s = cljs.core.seq.call(null,coll);
if(!((s == null)))
{return cljs.core._rest.call(null,s);
} else
{return cljs.core.List.EMPTY;
}
}
} else
{return cljs.core.List.EMPTY;
}
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if((coll == null))
{return null;
} else
{if((function (){var G__3254 = coll;
if(G__3254)
{if((function (){var or__3943__auto__ = (G__3254.cljs$lang$protocol_mask$partition0$ & 128);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3254.cljs$core$INext$;
}
})())
{return true;
} else
{if((!G__3254.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__3254);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.INext,G__3254);
}
})())
{return cljs.core._next.call(null,coll);
} else
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
}
}
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
var or__3943__auto__ = (x === y);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core._equiv.call(null,x,y);
}
});
var _EQ___3 = (function() { 
var G__3255__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__3256 = y;
var G__3257 = cljs.core.first.call(null,more);
var G__3258 = cljs.core.next.call(null,more);
x = G__3256;
y = G__3257;
more = G__3258;
continue;
}
} else
{return _EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3255 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3255__delegate.call(this, x, y, more);
};
G__3255.cljs$lang$maxFixedArity = 2;
G__3255.cljs$lang$applyTo = (function (arglist__3259){
var x = cljs.core.first(arglist__3259);
var y = cljs.core.first(cljs.core.next(arglist__3259));
var more = cljs.core.rest(cljs.core.next(arglist__3259));
return G__3255__delegate(x, y, more);
});
G__3255.cljs$lang$arity$variadic = G__3255__delegate;
return G__3255;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ___1.call(this,x);
case 2:
return _EQ___2.call(this,x,y);
default:
return _EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.cljs$lang$arity$1 = _EQ___1;
_EQ_.cljs$lang$arity$2 = _EQ___2;
_EQ_.cljs$lang$arity$variadic = _EQ___3.cljs$lang$arity$variadic;
return _EQ_;
})()
;
cljs.core.type = (function type(x){
if((x == null))
{return null;
} else
{return x.constructor;
}
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__3260 = null;
var G__3260__2 = (function (o,k){
return null;
});
var G__3260__3 = (function (o,k,not_found){
return not_found;
});
G__3260 = function(o,k,not_found){
switch(arguments.length){
case 2:
return G__3260__2.call(this,o,k);
case 3:
return G__3260__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3260;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.INext["null"] = true);
(cljs.core._next["null"] = (function (_){
return null;
}));
(cljs.core.IPrintWithWriter["null"] = true);
(cljs.core._pr_writer["null"] = (function (o,writer,_){
return cljs.core._write.call(null,writer,"nil");
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__3261 = null;
var G__3261__2 = (function (_,f){
return f.call(null);
});
var G__3261__3 = (function (_,f,start){
return start;
});
G__3261 = function(_,f,start){
switch(arguments.length){
case 2:
return G__3261__2.call(this,_,f);
case 3:
return G__3261__3.call(this,_,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3261;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o == null);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__3262 = null;
var G__3262__2 = (function (_,n){
return null;
});
var G__3262__3 = (function (_,n,not_found){
return not_found;
});
G__3262 = function(_,n,not_found){
switch(arguments.length){
case 2:
return G__3262__2.call(this,_,n);
case 3:
return G__3262__3.call(this,_,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3262;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var and__3941__auto__ = cljs.core.instance_QMARK_.call(null,Date,other);
if(and__3941__auto__)
{return (o.toString() === other.toString());
} else
{return and__3941__auto__;
}
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
if((o === true))
{return 1;
} else
{return 0;
}
}));
(cljs.core.IHash["_"] = true);
(cljs.core._hash["_"] = (function (o){
return goog.getUid(o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
goog.provide('cljs.core.Reduced');

/**
* @constructor
*/
cljs.core.Reduced = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Reduced.cljs$lang$type = true;
cljs.core.Reduced.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/Reduced");
});
cljs.core.Reduced.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/Reduced");
});
cljs.core.Reduced.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
return self__.val;
});
/**
* Wraps x in a way such that a reduce will terminate with the value x
*/
cljs.core.reduced = (function reduced(x){
return (new cljs.core.Reduced(x));
});
/**
* Returns true if x is the result of a call to reduced
*/
cljs.core.reduced_QMARK_ = (function reduced_QMARK_(r){
return cljs.core.instance_QMARK_.call(null,cljs.core.Reduced,r);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2 = (function (cicoll,f){
var cnt = cljs.core._count.call(null,cicoll);
if((cnt === 0))
{return f.call(null);
} else
{var val = cljs.core._nth.call(null,cicoll,0);
var n = 1;
while(true){
if((n < cnt))
{var nval = f.call(null,val,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__3263 = nval;
var G__3264 = (n + 1);
val = G__3263;
n = G__3264;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var cnt = cljs.core._count.call(null,cicoll);
var val__$1 = val;
var n = 0;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__3265 = nval;
var G__3266 = (n + 1);
val__$1 = G__3265;
n = G__3266;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var cnt = cljs.core._count.call(null,cicoll);
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,cljs.core._nth.call(null,cicoll,n));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__3267 = nval;
var G__3268 = (n + 1);
val__$1 = G__3267;
n = G__3268;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case 2:
return ci_reduce__2.call(this,cicoll,f);
case 3:
return ci_reduce__3.call(this,cicoll,f,val);
case 4:
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ci_reduce.cljs$lang$arity$2 = ci_reduce__2;
ci_reduce.cljs$lang$arity$3 = ci_reduce__3;
ci_reduce.cljs$lang$arity$4 = ci_reduce__4;
return ci_reduce;
})()
;
cljs.core.array_reduce = (function() {
var array_reduce = null;
var array_reduce__2 = (function (arr,f){
var cnt = arr.length;
if((arr.length === 0))
{return f.call(null);
} else
{var val = (arr[0]);
var n = 1;
while(true){
if((n < cnt))
{var nval = f.call(null,val,(arr[n]));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__3269 = nval;
var G__3270 = (n + 1);
val = G__3269;
n = G__3270;
continue;
}
}
} else
{return val;
}
break;
}
}
});
var array_reduce__3 = (function (arr,f,val){
var cnt = arr.length;
var val__$1 = val;
var n = 0;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__3271 = nval;
var G__3272 = (n + 1);
val__$1 = G__3271;
n = G__3272;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
var array_reduce__4 = (function (arr,f,val,idx){
var cnt = arr.length;
var val__$1 = val;
var n = idx;
while(true){
if((n < cnt))
{var nval = f.call(null,val__$1,(arr[n]));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__3273 = nval;
var G__3274 = (n + 1);
val__$1 = G__3273;
n = G__3274;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
array_reduce = function(arr,f,val,idx){
switch(arguments.length){
case 2:
return array_reduce__2.call(this,arr,f);
case 3:
return array_reduce__3.call(this,arr,f,val);
case 4:
return array_reduce__4.call(this,arr,f,val,idx);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_reduce.cljs$lang$arity$2 = array_reduce__2;
array_reduce.cljs$lang$arity$3 = array_reduce__3;
array_reduce.cljs$lang$arity$4 = array_reduce__4;
return array_reduce;
})()
;
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var G__3276 = x;
if(G__3276)
{if((function (){var or__3943__auto__ = (G__3276.cljs$lang$protocol_mask$partition0$ & 2);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3276.cljs$core$ICounted$;
}
})())
{return true;
} else
{if((!G__3276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__3276);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,G__3276);
}
});
/**
* Returns true if coll implements nth in constant time
*/
cljs.core.indexed_QMARK_ = (function indexed_QMARK_(x){
var G__3278 = x;
if(G__3278)
{if((function (){var or__3943__auto__ = (G__3278.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3278.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__3278.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__3278);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__3278);
}
});
goog.provide('cljs.core.IndexedSeq');

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 166199550;
})
cljs.core.IndexedSeq.cljs$lang$type = true;
cljs.core.IndexedSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
if(((self__.i + 1) < self__.a.length))
{return (new cljs.core.IndexedSeq(self__.a,(self__.i + 1)));
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var c = coll.cljs$core$ICounted$_count$arity$1(coll);
if((c > 0))
{return (new cljs.core.RSeq(coll,(c - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
if(cljs.core.counted_QMARK_.call(null,self__.a))
{return cljs.core.ci_reduce.call(null,self__.a,f,(self__.a[self__.i]),(self__.i + 1));
} else
{return cljs.core.ci_reduce.call(null,coll,f,(self__.a[self__.i]),0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
if(cljs.core.counted_QMARK_.call(null,self__.a))
{return cljs.core.ci_reduce.call(null,self__.a,f,start,self__.i);
} else
{return cljs.core.ci_reduce.call(null,coll,f,start,0);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return (self__.a.length - self__.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
return (self__.a[self__.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (_){
var self__ = this;
if(((self__.i + 1) < self__.a.length))
{return (new cljs.core.IndexedSeq(self__.a,(self__.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.a.length))
{return (self__.a[i__$1]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
var i__$1 = (n + self__.i);
if((i__$1 < self__.a.length))
{return (self__.a[i__$1]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.List.EMPTY;
});
cljs.core.prim_seq = (function() {
var prim_seq = null;
var prim_seq__1 = (function (prim){
return prim_seq.call(null,prim,0);
});
var prim_seq__2 = (function (prim,i){
if((i < prim.length))
{return (new cljs.core.IndexedSeq(prim,i));
} else
{return null;
}
});
prim_seq = function(prim,i){
switch(arguments.length){
case 1:
return prim_seq__1.call(this,prim);
case 2:
return prim_seq__2.call(this,prim,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prim_seq.cljs$lang$arity$1 = prim_seq__1;
prim_seq.cljs$lang$arity$2 = prim_seq__2;
return prim_seq;
})()
;
cljs.core.array_seq = (function() {
var array_seq = null;
var array_seq__1 = (function (array){
return cljs.core.prim_seq.call(null,array,0);
});
var array_seq__2 = (function (array,i){
return cljs.core.prim_seq.call(null,array,i);
});
array_seq = function(array,i){
switch(arguments.length){
case 1:
return array_seq__1.call(this,array);
case 2:
return array_seq__2.call(this,array,i);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_seq.cljs$lang$arity$1 = array_seq__1;
array_seq.cljs$lang$arity$2 = array_seq__2;
return array_seq;
})()
;
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__3279 = null;
var G__3279__2 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3279__3 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3279 = function(array,f,start){
switch(arguments.length){
case 2:
return G__3279__2.call(this,array,f);
case 3:
return G__3279__3.call(this,array,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3279;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3280 = null;
var G__3280__2 = (function (array,k){
return (array[k]);
});
var G__3280__3 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3280 = function(array,k,not_found){
switch(arguments.length){
case 2:
return G__3280__2.call(this,array,k);
case 3:
return G__3280__3.call(this,array,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3280;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3281 = null;
var G__3281__2 = (function (array,n){
if((n < array.length))
{return (array[n]);
} else
{return null;
}
});
var G__3281__3 = (function (array,n,not_found){
if((n < array.length))
{return (array[n]);
} else
{return not_found;
}
});
G__3281 = function(array,n,not_found){
switch(arguments.length){
case 2:
return G__3281__2.call(this,array,n);
case 3:
return G__3281__3.call(this,array,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3281;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
goog.provide('cljs.core.RSeq');

/**
* @constructor
*/
cljs.core.RSeq = (function (ci,i,meta){
this.ci = ci;
this.i = i;
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.RSeq.cljs$lang$type = true;
cljs.core.RSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/RSeq");
});
cljs.core.RSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/RSeq");
});
cljs.core.RSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.RSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.RSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.RSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.RSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return (self__.i + 1);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core._nth.call(null,self__.ci,self__.i);
});
cljs.core.RSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.i > 0))
{return (new cljs.core.RSeq(self__.ci,(self__.i - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.RSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,new_meta){
var self__ = this;
return (new cljs.core.RSeq(self__.ci,self__.i,new_meta));
});
cljs.core.RSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.RSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
var sn = cljs.core.next.call(null,s);
if(!((sn == null)))
{{
var G__3282 = sn;
s = G__3282;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3 = (function() { 
var G__3283__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3284 = conj.call(null,coll,x);
var G__3285 = cljs.core.first.call(null,xs);
var G__3286 = cljs.core.next.call(null,xs);
coll = G__3284;
x = G__3285;
xs = G__3286;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3283 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3283__delegate.call(this, coll, x, xs);
};
G__3283.cljs$lang$maxFixedArity = 2;
G__3283.cljs$lang$applyTo = (function (arglist__3287){
var coll = cljs.core.first(arglist__3287);
var x = cljs.core.first(cljs.core.next(arglist__3287));
var xs = cljs.core.rest(cljs.core.next(arglist__3287));
return G__3283__delegate(coll, x, xs);
});
G__3283.cljs$lang$arity$variadic = G__3283__delegate;
return G__3283;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj__2.call(this,coll,x);
default:
return conj__3.cljs$lang$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.cljs$lang$arity$2 = conj__2;
conj.cljs$lang$arity$variadic = conj__3.cljs$lang$arity$variadic;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
cljs.core.accumulating_seq_count = (function accumulating_seq_count(coll){
var s = cljs.core.seq.call(null,coll);
var acc = 0;
while(true){
if(cljs.core.counted_QMARK_.call(null,s))
{return (acc + cljs.core._count.call(null,s));
} else
{{
var G__3288 = cljs.core.next.call(null,s);
var G__3289 = (acc + 1);
s = G__3288;
acc = G__3289;
continue;
}
}
break;
}
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
if(cljs.core.counted_QMARK_.call(null,coll))
{return cljs.core._count.call(null,coll);
} else
{return cljs.core.accumulating_seq_count.call(null,coll);
}
});
cljs.core.linear_traversal_nth = (function() {
var linear_traversal_nth = null;
var linear_traversal_nth__2 = (function (coll,n){
while(true){
if((coll == null))
{throw (new Error("Index out of bounds"));
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{throw (new Error("Index out of bounds"));
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__3290 = cljs.core.next.call(null,coll);
var G__3291 = (n - 1);
coll = G__3290;
n = G__3291;
continue;
}
} else
{if("\uFDD0'else")
{throw (new Error("Index out of bounds"));
} else
{return null;
}
}
}
}
}
break;
}
});
var linear_traversal_nth__3 = (function (coll,n,not_found){
while(true){
if((coll == null))
{return not_found;
} else
{if((n === 0))
{if(cljs.core.seq.call(null,coll))
{return cljs.core.first.call(null,coll);
} else
{return not_found;
}
} else
{if(cljs.core.indexed_QMARK_.call(null,coll))
{return cljs.core._nth.call(null,coll,n,not_found);
} else
{if(cljs.core.seq.call(null,coll))
{{
var G__3292 = cljs.core.next.call(null,coll);
var G__3293 = (n - 1);
var G__3294 = not_found;
coll = G__3292;
n = G__3293;
not_found = G__3294;
continue;
}
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
}
break;
}
});
linear_traversal_nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return linear_traversal_nth__2.call(this,coll,n);
case 3:
return linear_traversal_nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linear_traversal_nth.cljs$lang$arity$2 = linear_traversal_nth__2;
linear_traversal_nth.cljs$lang$arity$3 = linear_traversal_nth__3;
return linear_traversal_nth;
})()
;
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
if((coll == null))
{return null;
} else
{if((function (){var G__3297 = coll;
if(G__3297)
{if((function (){var or__3943__auto__ = (G__3297.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3297.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__3297.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__3297);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__3297);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n));
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n));
}
}
});
var nth__3 = (function (coll,n,not_found){
if(!((coll == null)))
{if((function (){var G__3298 = coll;
if(G__3298)
{if((function (){var or__3943__auto__ = (G__3298.cljs$lang$protocol_mask$partition0$ & 16);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3298.cljs$core$IIndexed$;
}
})())
{return true;
} else
{if((!G__3298.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__3298);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IIndexed,G__3298);
}
})())
{return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
} else
{return cljs.core.linear_traversal_nth.call(null,coll,Math.floor(n),not_found);
}
} else
{return not_found;
}
});
nth = function(coll,n,not_found){
switch(arguments.length){
case 2:
return nth__2.call(this,coll,n);
case 3:
return nth__3.call(this,coll,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nth.cljs$lang$arity$2 = nth__2;
nth.cljs$lang$arity$3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case 2:
return get__2.call(this,o,k);
case 3:
return get__3.call(this,o,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get.cljs$lang$arity$2 = get__2;
get.cljs$lang$arity$3 = get__3;
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__4 = (function() { 
var G__3299__delegate = function (coll,k,v,kvs){
while(true){
var ret = assoc.call(null,coll,k,v);
if(cljs.core.truth_(kvs))
{{
var G__3300 = ret;
var G__3301 = cljs.core.first.call(null,kvs);
var G__3302 = cljs.core.second.call(null,kvs);
var G__3303 = cljs.core.nnext.call(null,kvs);
coll = G__3300;
k = G__3301;
v = G__3302;
kvs = G__3303;
continue;
}
} else
{return ret;
}
break;
}
};
var G__3299 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3299__delegate.call(this, coll, k, v, kvs);
};
G__3299.cljs$lang$maxFixedArity = 3;
G__3299.cljs$lang$applyTo = (function (arglist__3304){
var coll = cljs.core.first(arglist__3304);
var k = cljs.core.first(cljs.core.next(arglist__3304));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3304)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3304)));
return G__3299__delegate(coll, k, v, kvs);
});
G__3299.cljs$lang$arity$variadic = G__3299__delegate;
return G__3299;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 3:
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.cljs$lang$arity$variadic(coll,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.cljs$lang$arity$3 = assoc__3;
assoc.cljs$lang$arity$variadic = assoc__4.cljs$lang$arity$variadic;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3 = (function() { 
var G__3305__delegate = function (coll,k,ks){
while(true){
var ret = dissoc.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__3306 = ret;
var G__3307 = cljs.core.first.call(null,ks);
var G__3308 = cljs.core.next.call(null,ks);
coll = G__3306;
k = G__3307;
ks = G__3308;
continue;
}
} else
{return ret;
}
break;
}
};
var G__3305 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3305__delegate.call(this, coll, k, ks);
};
G__3305.cljs$lang$maxFixedArity = 2;
G__3305.cljs$lang$applyTo = (function (arglist__3309){
var coll = cljs.core.first(arglist__3309);
var k = cljs.core.first(cljs.core.next(arglist__3309));
var ks = cljs.core.rest(cljs.core.next(arglist__3309));
return G__3305__delegate(coll, k, ks);
});
G__3305.cljs$lang$arity$variadic = G__3305__delegate;
return G__3305;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return dissoc__1.call(this,coll);
case 2:
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.cljs$lang$arity$1 = dissoc__1;
dissoc.cljs$lang$arity$2 = dissoc__2;
dissoc.cljs$lang$arity$variadic = dissoc__3.cljs$lang$arity$variadic;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if((function (){var G__3311 = o;
if(G__3311)
{if((function (){var or__3943__auto__ = (G__3311.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3311.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__3311.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__3311);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__3311);
}
})())
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3 = (function() { 
var G__3312__delegate = function (coll,k,ks){
while(true){
var ret = disj.call(null,coll,k);
if(cljs.core.truth_(ks))
{{
var G__3313 = ret;
var G__3314 = cljs.core.first.call(null,ks);
var G__3315 = cljs.core.next.call(null,ks);
coll = G__3313;
k = G__3314;
ks = G__3315;
continue;
}
} else
{return ret;
}
break;
}
};
var G__3312 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3312__delegate.call(this, coll, k, ks);
};
G__3312.cljs$lang$maxFixedArity = 2;
G__3312.cljs$lang$applyTo = (function (arglist__3316){
var coll = cljs.core.first(arglist__3316);
var k = cljs.core.first(cljs.core.next(arglist__3316));
var ks = cljs.core.rest(cljs.core.next(arglist__3316));
return G__3312__delegate(coll, k, ks);
});
G__3312.cljs$lang$arity$variadic = G__3312__delegate;
return G__3312;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case 1:
return disj__1.call(this,coll);
case 2:
return disj__2.call(this,coll,k);
default:
return disj__3.cljs$lang$arity$variadic(coll,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.cljs$lang$arity$1 = disj__1;
disj.cljs$lang$arity$2 = disj__2;
disj.cljs$lang$arity$variadic = disj__3.cljs$lang$arity$variadic;
return disj;
})()
;
cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
cljs.core.add_to_string_hash_cache = (function add_to_string_hash_cache(k){
var h = goog.string.hashCode(k);
(cljs.core.string_hash_cache[k] = h);
cljs.core.string_hash_cache_count = (cljs.core.string_hash_cache_count + 1);
return h;
});
cljs.core.check_string_hash_cache = (function check_string_hash_cache(k){
if((cljs.core.string_hash_cache_count > 255))
{cljs.core.string_hash_cache = {};
cljs.core.string_hash_cache_count = 0;
} else
{}
var h = (cljs.core.string_hash_cache[k]);
if(!((h == null)))
{return h;
} else
{return cljs.core.add_to_string_hash_cache.call(null,k);
}
});
cljs.core.hash = (function() {
var hash = null;
var hash__1 = (function (o){
return hash.call(null,o,true);
});
var hash__2 = (function (o,check_cache){
if((function (){var and__3941__auto__ = goog.isString(o);
if(and__3941__auto__)
{return check_cache;
} else
{return and__3941__auto__;
}
})())
{return cljs.core.check_string_hash_cache.call(null,o);
} else
{return cljs.core._hash.call(null,o);
}
});
hash = function(o,check_cache){
switch(arguments.length){
case 1:
return hash__1.call(this,o);
case 2:
return hash__2.call(this,o,check_cache);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash.cljs$lang$arity$1 = hash__1;
hash.cljs$lang$arity$2 = hash__2;
return hash;
})()
;
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
var or__3943__auto__ = (coll == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
}
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if((x == null))
{return false;
} else
{var G__3318 = x;
if(G__3318)
{if((function (){var or__3943__auto__ = (G__3318.cljs$lang$protocol_mask$partition0$ & 8);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3318.cljs$core$ICollection$;
}
})())
{return true;
} else
{if((!G__3318.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__3318);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,G__3318);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if((x == null))
{return false;
} else
{var G__3320 = x;
if(G__3320)
{if((function (){var or__3943__auto__ = (G__3320.cljs$lang$protocol_mask$partition0$ & 4096);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3320.cljs$core$ISet$;
}
})())
{return true;
} else
{if((!G__3320.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__3320);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,G__3320);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var G__3322 = x;
if(G__3322)
{if((function (){var or__3943__auto__ = (G__3322.cljs$lang$protocol_mask$partition0$ & 512);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3322.cljs$core$IAssociative$;
}
})())
{return true;
} else
{if((!G__3322.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__3322);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,G__3322);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var G__3324 = x;
if(G__3324)
{if((function (){var or__3943__auto__ = (G__3324.cljs$lang$protocol_mask$partition0$ & 16777216);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3324.cljs$core$ISequential$;
}
})())
{return true;
} else
{if((!G__3324.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__3324);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,G__3324);
}
});
/**
* Returns true if coll satisfies IReduce
*/
cljs.core.reduceable_QMARK_ = (function reduceable_QMARK_(x){
var G__3326 = x;
if(G__3326)
{if((function (){var or__3943__auto__ = (G__3326.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3326.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__3326.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__3326);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__3326);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if((x == null))
{return false;
} else
{var G__3328 = x;
if(G__3328)
{if((function (){var or__3943__auto__ = (G__3328.cljs$lang$protocol_mask$partition0$ & 1024);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3328.cljs$core$IMap$;
}
})())
{return true;
} else
{if((!G__3328.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__3328);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,G__3328);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var G__3330 = x;
if(G__3330)
{if((function (){var or__3943__auto__ = (G__3330.cljs$lang$protocol_mask$partition0$ & 16384);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3330.cljs$core$IVector$;
}
})())
{return true;
} else
{if((!G__3330.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__3330);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,G__3330);
}
});
cljs.core.chunked_seq_QMARK_ = (function chunked_seq_QMARK_(x){
var G__3332 = x;
if(G__3332)
{if((function (){var or__3943__auto__ = (G__3332.cljs$lang$protocol_mask$partition1$ & 512);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3332.cljs$core$IChunkedSeq$;
}
})())
{return true;
} else
{if((!G__3332.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__3332);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedSeq,G__3332);
}
});
/**
* @param {...*} var_args
*/
cljs.core.js_obj = (function() {
var js_obj = null;
var js_obj__0 = (function (){
return {};
});
var js_obj__1 = (function() { 
var G__3333__delegate = function (keyvals){
return cljs.core.apply.call(null,goog.object.create,keyvals);
};
var G__3333 = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3333__delegate.call(this, keyvals);
};
G__3333.cljs$lang$maxFixedArity = 0;
G__3333.cljs$lang$applyTo = (function (arglist__3334){
var keyvals = cljs.core.seq(arglist__3334);;
return G__3333__delegate(keyvals);
});
G__3333.cljs$lang$arity$variadic = G__3333__delegate;
return G__3333;
})()
;
js_obj = function(var_args){
var keyvals = var_args;
switch(arguments.length){
case 0:
return js_obj__0.call(this);
default:
return js_obj__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
js_obj.cljs$lang$maxFixedArity = 0;
js_obj.cljs$lang$applyTo = js_obj__1.cljs$lang$applyTo;
js_obj.cljs$lang$arity$0 = js_obj__0;
js_obj.cljs$lang$arity$variadic = js_obj__1.cljs$lang$arity$variadic;
return js_obj;
})()
;
cljs.core.js_keys = (function js_keys(obj){
var keys = [];
goog.object.forEach(obj,(function (val,key,obj__$1){
return keys.push(key);
}));
return keys;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.array_copy = (function array_copy(from,i,to,j,len){
var i__$1 = i;
var j__$1 = j;
var len__$1 = len;
while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__3335 = (i__$1 + 1);
var G__3336 = (j__$1 + 1);
var G__3337 = (len__$1 - 1);
i__$1 = G__3335;
j__$1 = G__3336;
len__$1 = G__3337;
continue;
}
}
break;
}
});
cljs.core.array_copy_downward = (function array_copy_downward(from,i,to,j,len){
var i__$1 = (i + (len - 1));
var j__$1 = (j + (len - 1));
var len__$1 = len;
while(true){
if((len__$1 === 0))
{return to;
} else
{(to[j__$1] = (from[i__$1]));
{
var G__3338 = (i__$1 - 1);
var G__3339 = (j__$1 - 1);
var G__3340 = (len__$1 - 1);
i__$1 = G__3338;
j__$1 = G__3339;
len__$1 = G__3340;
continue;
}
}
break;
}
});
cljs.core.lookup_sentinel = {};
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if((s == null))
{return false;
} else
{var G__3342 = s;
if(G__3342)
{if((function (){var or__3943__auto__ = (G__3342.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3342.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__3342.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__3342);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__3342);
}
}
});
/**
* Return true if s satisfies ISeqable
*/
cljs.core.seqable_QMARK_ = (function seqable_QMARK_(s){
var G__3344 = s;
if(G__3344)
{if((function (){var or__3943__auto__ = (G__3344.cljs$lang$protocol_mask$partition0$ & 8388608);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3344.cljs$core$ISeqable$;
}
})())
{return true;
} else
{if((!G__3344.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__3344);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,G__3344);
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3941__auto__ = goog.isString(x);
if(and__3941__auto__)
{return !((x.charAt(0) === "\uFDD0"));
} else
{return and__3941__auto__;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3941__auto__ = goog.isString(x);
if(and__3941__auto__)
{return (x.charAt(0) === "\uFDD0");
} else
{return and__3941__auto__;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var G__3346 = x;
if(G__3346)
{if(cljs.core.truth_((function (){var or__3943__auto__ = null;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return G__3346.cljs$core$ISymbol$;
}
})()))
{return true;
} else
{if((!G__3346.cljs$lang$protocol_mask$partition$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISymbol,G__3346);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISymbol,G__3346);
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber(n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction(f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3943__auto__ = cljs.core.fn_QMARK_.call(null,f);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var G__3348 = f;
if(G__3348)
{if((function (){var or__3943__auto____$1 = (G__3348.cljs$lang$protocol_mask$partition0$ & 1);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return G__3348.cljs$core$IFn$;
}
})())
{return true;
} else
{if((!G__3348.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__3348);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IFn,G__3348);
}
}
});
/**
* Returns true if n is an integer.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3941__auto__ = cljs.core.number_QMARK_.call(null,n);
if(and__3941__auto__)
{var and__3941__auto____$1 = !(isNaN(n));
if(and__3941__auto____$1)
{var and__3941__auto____$2 = !((n === Infinity));
if(and__3941__auto____$2)
{return (parseFloat(n) === parseInt(n,10));
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if((function (){var and__3941__auto__ = !((coll == null));
if(and__3941__auto__)
{var and__3941__auto____$1 = cljs.core.associative_QMARK_.call(null,coll);
if(and__3941__auto____$1)
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.call(null,coll,k)], true);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3 = (function() { 
var G__3349__delegate = function (x,y,more){
if(!(cljs.core._EQ_.call(null,x,y)))
{var s = cljs.core.PersistentHashSet.fromArray([y,x]);
var xs = more;
while(true){
var x__$1 = cljs.core.first.call(null,xs);
var etc = cljs.core.next.call(null,xs);
if(cljs.core.truth_(xs))
{if(cljs.core.contains_QMARK_.call(null,s,x__$1))
{return false;
} else
{{
var G__3350 = cljs.core.conj.call(null,s,x__$1);
var G__3351 = etc;
s = G__3350;
xs = G__3351;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__3349 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3349__delegate.call(this, x, y, more);
};
G__3349.cljs$lang$maxFixedArity = 2;
G__3349.cljs$lang$applyTo = (function (arglist__3352){
var x = cljs.core.first(arglist__3352);
var y = cljs.core.first(cljs.core.next(arglist__3352));
var more = cljs.core.rest(cljs.core.next(arglist__3352));
return G__3349__delegate(x, y, more);
});
G__3349.cljs$lang$arity$variadic = G__3349__delegate;
return G__3349;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return distinct_QMARK___1.call(this,x);
case 2:
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.cljs$lang$arity$1 = distinct_QMARK___1;
distinct_QMARK_.cljs$lang$arity$2 = distinct_QMARK___2;
distinct_QMARK_.cljs$lang$arity$variadic = distinct_QMARK___3.cljs$lang$arity$variadic;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses IComparable if available and google.array.defaultCompare for objects
* of the same type and special-cases nil to be less than any other object.
*/
cljs.core.compare = (function compare(x,y){
if((x === y))
{return 0;
} else
{if((x == null))
{return -1;
} else
{if((y == null))
{return 1;
} else
{if((cljs.core.type.call(null,x) === cljs.core.type.call(null,y)))
{if((function (){var G__3354 = x;
if(G__3354)
{if((function (){var or__3943__auto__ = (G__3354.cljs$lang$protocol_mask$partition1$ & 2048);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3354.cljs$core$IComparable$;
}
})())
{return true;
} else
{if((!G__3354.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__3354);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IComparable,G__3354);
}
})())
{return cljs.core._compare.call(null,x,y);
} else
{return goog.array.defaultCompare(x,y);
}
} else
{if("\uFDD0'else")
{throw (new Error("compare on non-nil objects of different types"));
} else
{return null;
}
}
}
}
}
});
/**
* Compare indexed collection.
*/
cljs.core.compare_indexed = (function() {
var compare_indexed = null;
var compare_indexed__2 = (function (xs,ys){
var xl = cljs.core.count.call(null,xs);
var yl = cljs.core.count.call(null,ys);
if((xl < yl))
{return -1;
} else
{if((xl > yl))
{return 1;
} else
{if("\uFDD0'else")
{return compare_indexed.call(null,xs,ys,xl,0);
} else
{return null;
}
}
}
});
var compare_indexed__4 = (function (xs,ys,len,n){
while(true){
var d = cljs.core.compare.call(null,cljs.core.nth.call(null,xs,n),cljs.core.nth.call(null,ys,n));
if((function (){var and__3941__auto__ = (d === 0);
if(and__3941__auto__)
{return ((n + 1) < len);
} else
{return and__3941__auto__;
}
})())
{{
var G__3355 = xs;
var G__3356 = ys;
var G__3357 = len;
var G__3358 = (n + 1);
xs = G__3355;
ys = G__3356;
len = G__3357;
n = G__3358;
continue;
}
} else
{return d;
}
break;
}
});
compare_indexed = function(xs,ys,len,n){
switch(arguments.length){
case 2:
return compare_indexed__2.call(this,xs,ys);
case 4:
return compare_indexed__4.call(this,xs,ys,len,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
compare_indexed.cljs$lang$arity$2 = compare_indexed__2;
compare_indexed.cljs$lang$arity$4 = compare_indexed__4;
return compare_indexed;
})()
;
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core._EQ_.call(null,f,cljs.core.compare))
{return cljs.core.compare;
} else
{return (function (x,y){
var r = f.call(null,x,y);
if(cljs.core.number_QMARK_.call(null,r))
{return r;
} else
{if(cljs.core.truth_(r))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.seq.call(null,coll))
{var a = cljs.core.to_array.call(null,coll);
goog.array.stableSort(a,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case 1:
return sort__1.call(this,comp);
case 2:
return sort__2.call(this,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort.cljs$lang$arity$1 = sort__1;
sort.cljs$lang$arity$2 = sort__2;
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case 2:
return sort_by__2.call(this,keyfn,comp);
case 3:
return sort_by__3.call(this,keyfn,comp,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sort_by.cljs$lang$arity$2 = sort_by__2;
sort_by.cljs$lang$arity$3 = sort_by__3;
return sort_by;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__4090__auto__ = cljs.core.seq.call(null,coll);
if(temp__4090__auto__)
{var s = temp__4090__auto__;
return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s),cljs.core.next.call(null,s));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__$1 = val;
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(coll__$1)
{var nval = f.call(null,val__$1,cljs.core.first.call(null,coll__$1));
if(cljs.core.reduced_QMARK_.call(null,nval))
{return cljs.core.deref.call(null,nval);
} else
{{
var G__3359 = nval;
var G__3360 = cljs.core.next.call(null,coll__$1);
val__$1 = G__3359;
coll__$1 = G__3360;
continue;
}
}
} else
{return val__$1;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return seq_reduce__2.call(this,f,val);
case 3:
return seq_reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
seq_reduce.cljs$lang$arity$2 = seq_reduce__2;
seq_reduce.cljs$lang$arity$3 = seq_reduce__3;
return seq_reduce;
})()
;
/**
* Return a random permutation of coll
*/
cljs.core.shuffle = (function shuffle(coll){
var a = cljs.core.to_array.call(null,coll);
goog.array.shuffle(a);
return cljs.core.vec.call(null,a);
});
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2 = (function (f,coll){
if((function (){var G__3363 = coll;
if(G__3363)
{if((function (){var or__3943__auto__ = (G__3363.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3363.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__3363.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__3363);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__3363);
}
})())
{return cljs.core._reduce.call(null,coll,f);
} else
{return cljs.core.seq_reduce.call(null,f,coll);
}
});
var reduce__3 = (function (f,val,coll){
if((function (){var G__3364 = coll;
if(G__3364)
{if((function (){var or__3943__auto__ = (G__3364.cljs$lang$protocol_mask$partition0$ & 524288);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3364.cljs$core$IReduce$;
}
})())
{return true;
} else
{if((!G__3364.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__3364);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReduce,G__3364);
}
})())
{return cljs.core._reduce.call(null,coll,f,val);
} else
{return cljs.core.seq_reduce.call(null,f,val,coll);
}
});
reduce = function(f,val,coll){
switch(arguments.length){
case 2:
return reduce__2.call(this,f,val);
case 3:
return reduce__3.call(this,f,val,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reduce.cljs$lang$arity$2 = reduce__2;
reduce.cljs$lang$arity$3 = reduce__3;
return reduce;
})()
;
/**
* Reduces an associative collection. f should be a function of 3
* arguments. Returns the result of applying f to init, the first key
* and the first value in coll, then applying f to that result and the
* 2nd key and value, etc. If coll contains no entries, returns init
* and f is not called. Note that reduce-kv is supported on vectors,
* where the keys will be the ordinals.
*/
cljs.core.reduce_kv = (function reduce_kv(f,init,coll){
return cljs.core._kv_reduce.call(null,coll,f,init);
});
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__3365__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3365 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3365__delegate.call(this, x, y, more);
};
G__3365.cljs$lang$maxFixedArity = 2;
G__3365.cljs$lang$applyTo = (function (arglist__3366){
var x = cljs.core.first(arglist__3366);
var y = cljs.core.first(cljs.core.next(arglist__3366));
var more = cljs.core.rest(cljs.core.next(arglist__3366));
return G__3365__delegate(x, y, more);
});
G__3365.cljs$lang$arity$variadic = G__3365__delegate;
return G__3365;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _PLUS___0.call(this);
case 1:
return _PLUS___1.call(this,x);
case 2:
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.cljs$lang$arity$0 = _PLUS___0;
_PLUS_.cljs$lang$arity$1 = _PLUS___1;
_PLUS_.cljs$lang$arity$2 = _PLUS___2;
_PLUS_.cljs$lang$arity$variadic = _PLUS___3.cljs$lang$arity$variadic;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__3367__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3367 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3367__delegate.call(this, x, y, more);
};
G__3367.cljs$lang$maxFixedArity = 2;
G__3367.cljs$lang$applyTo = (function (arglist__3368){
var x = cljs.core.first(arglist__3368);
var y = cljs.core.first(cljs.core.next(arglist__3368));
var more = cljs.core.rest(cljs.core.next(arglist__3368));
return G__3367__delegate(x, y, more);
});
G__3367.cljs$lang$arity$variadic = G__3367__delegate;
return G__3367;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return ___1.call(this,x);
case 2:
return ___2.call(this,x,y);
default:
return ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.cljs$lang$arity$1 = ___1;
_.cljs$lang$arity$2 = ___2;
_.cljs$lang$arity$variadic = ___3.cljs$lang$arity$variadic;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__3369__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3369 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3369__delegate.call(this, x, y, more);
};
G__3369.cljs$lang$maxFixedArity = 2;
G__3369.cljs$lang$applyTo = (function (arglist__3370){
var x = cljs.core.first(arglist__3370);
var y = cljs.core.first(cljs.core.next(arglist__3370));
var more = cljs.core.rest(cljs.core.next(arglist__3370));
return G__3369__delegate(x, y, more);
});
G__3369.cljs$lang$arity$variadic = G__3369__delegate;
return G__3369;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return _STAR___0.call(this);
case 1:
return _STAR___1.call(this,x);
case 2:
return _STAR___2.call(this,x,y);
default:
return _STAR___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.cljs$lang$arity$0 = _STAR___0;
_STAR_.cljs$lang$arity$1 = _STAR___1;
_STAR_.cljs$lang$arity$2 = _STAR___2;
_STAR_.cljs$lang$arity$variadic = _STAR___3.cljs$lang$arity$variadic;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__3371__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3371 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3371__delegate.call(this, x, y, more);
};
G__3371.cljs$lang$maxFixedArity = 2;
G__3371.cljs$lang$applyTo = (function (arglist__3372){
var x = cljs.core.first(arglist__3372);
var y = cljs.core.first(cljs.core.next(arglist__3372));
var more = cljs.core.rest(cljs.core.next(arglist__3372));
return G__3371__delegate(x, y, more);
});
G__3371.cljs$lang$arity$variadic = G__3371__delegate;
return G__3371;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _SLASH___1.call(this,x);
case 2:
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.cljs$lang$arity$1 = _SLASH___1;
_SLASH_.cljs$lang$arity$2 = _SLASH___2;
_SLASH_.cljs$lang$arity$variadic = _SLASH___3.cljs$lang$arity$variadic;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__3373__delegate = function (x,y,more){
while(true){
if((x < y))
{if(cljs.core.next.call(null,more))
{{
var G__3374 = y;
var G__3375 = cljs.core.first.call(null,more);
var G__3376 = cljs.core.next.call(null,more);
x = G__3374;
y = G__3375;
more = G__3376;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3373 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3373__delegate.call(this, x, y, more);
};
G__3373.cljs$lang$maxFixedArity = 2;
G__3373.cljs$lang$applyTo = (function (arglist__3377){
var x = cljs.core.first(arglist__3377);
var y = cljs.core.first(cljs.core.next(arglist__3377));
var more = cljs.core.rest(cljs.core.next(arglist__3377));
return G__3373__delegate(x, y, more);
});
G__3373.cljs$lang$arity$variadic = G__3373__delegate;
return G__3373;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT___1.call(this,x);
case 2:
return _LT___2.call(this,x,y);
default:
return _LT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.cljs$lang$arity$1 = _LT___1;
_LT_.cljs$lang$arity$2 = _LT___2;
_LT_.cljs$lang$arity$variadic = _LT___3.cljs$lang$arity$variadic;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__3378__delegate = function (x,y,more){
while(true){
if((x <= y))
{if(cljs.core.next.call(null,more))
{{
var G__3379 = y;
var G__3380 = cljs.core.first.call(null,more);
var G__3381 = cljs.core.next.call(null,more);
x = G__3379;
y = G__3380;
more = G__3381;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3378 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3378__delegate.call(this, x, y, more);
};
G__3378.cljs$lang$maxFixedArity = 2;
G__3378.cljs$lang$applyTo = (function (arglist__3382){
var x = cljs.core.first(arglist__3382);
var y = cljs.core.first(cljs.core.next(arglist__3382));
var more = cljs.core.rest(cljs.core.next(arglist__3382));
return G__3378__delegate(x, y, more);
});
G__3378.cljs$lang$arity$variadic = G__3378__delegate;
return G__3378;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _LT__EQ___1.call(this,x);
case 2:
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.cljs$lang$arity$1 = _LT__EQ___1;
_LT__EQ_.cljs$lang$arity$2 = _LT__EQ___2;
_LT__EQ_.cljs$lang$arity$variadic = _LT__EQ___3.cljs$lang$arity$variadic;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__3383__delegate = function (x,y,more){
while(true){
if((x > y))
{if(cljs.core.next.call(null,more))
{{
var G__3384 = y;
var G__3385 = cljs.core.first.call(null,more);
var G__3386 = cljs.core.next.call(null,more);
x = G__3384;
y = G__3385;
more = G__3386;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3383 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3383__delegate.call(this, x, y, more);
};
G__3383.cljs$lang$maxFixedArity = 2;
G__3383.cljs$lang$applyTo = (function (arglist__3387){
var x = cljs.core.first(arglist__3387);
var y = cljs.core.first(cljs.core.next(arglist__3387));
var more = cljs.core.rest(cljs.core.next(arglist__3387));
return G__3383__delegate(x, y, more);
});
G__3383.cljs$lang$arity$variadic = G__3383__delegate;
return G__3383;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT___1.call(this,x);
case 2:
return _GT___2.call(this,x,y);
default:
return _GT___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.cljs$lang$arity$1 = _GT___1;
_GT_.cljs$lang$arity$2 = _GT___2;
_GT_.cljs$lang$arity$variadic = _GT___3.cljs$lang$arity$variadic;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__3388__delegate = function (x,y,more){
while(true){
if((x >= y))
{if(cljs.core.next.call(null,more))
{{
var G__3389 = y;
var G__3390 = cljs.core.first.call(null,more);
var G__3391 = cljs.core.next.call(null,more);
x = G__3389;
y = G__3390;
more = G__3391;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3388 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3388__delegate.call(this, x, y, more);
};
G__3388.cljs$lang$maxFixedArity = 2;
G__3388.cljs$lang$applyTo = (function (arglist__3392){
var x = cljs.core.first(arglist__3392);
var y = cljs.core.first(cljs.core.next(arglist__3392));
var more = cljs.core.rest(cljs.core.next(arglist__3392));
return G__3388__delegate(x, y, more);
});
G__3388.cljs$lang$arity$variadic = G__3388__delegate;
return G__3388;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _GT__EQ___1.call(this,x);
case 2:
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.cljs$lang$arity$1 = _GT__EQ___1;
_GT__EQ_.cljs$lang$arity$2 = _GT__EQ___2;
_GT__EQ_.cljs$lang$arity$variadic = _GT__EQ___3.cljs$lang$arity$variadic;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__3393__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3393 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3393__delegate.call(this, x, y, more);
};
G__3393.cljs$lang$maxFixedArity = 2;
G__3393.cljs$lang$applyTo = (function (arglist__3394){
var x = cljs.core.first(arglist__3394);
var y = cljs.core.first(cljs.core.next(arglist__3394));
var more = cljs.core.rest(cljs.core.next(arglist__3394));
return G__3393__delegate(x, y, more);
});
G__3393.cljs$lang$arity$variadic = G__3393__delegate;
return G__3393;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return max__1.call(this,x);
case 2:
return max__2.call(this,x,y);
default:
return max__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.cljs$lang$arity$1 = max__1;
max.cljs$lang$arity$2 = max__2;
max.cljs$lang$arity$variadic = max__3.cljs$lang$arity$variadic;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__3395__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3395 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3395__delegate.call(this, x, y, more);
};
G__3395.cljs$lang$maxFixedArity = 2;
G__3395.cljs$lang$applyTo = (function (arglist__3396){
var x = cljs.core.first(arglist__3396);
var y = cljs.core.first(cljs.core.next(arglist__3396));
var more = cljs.core.rest(cljs.core.next(arglist__3396));
return G__3395__delegate(x, y, more);
});
G__3395.cljs$lang$arity$variadic = G__3395__delegate;
return G__3395;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return min__1.call(this,x);
case 2:
return min__2.call(this,x,y);
default:
return min__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.cljs$lang$arity$1 = min__1;
min.cljs$lang$arity$2 = min__2;
min.cljs$lang$arity$variadic = min__3.cljs$lang$arity$variadic;
return min;
})()
;
cljs.core.fix = (function fix(q){
if((q >= 0))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Coerce to int by stripping decimal places.
*/
cljs.core.int$ = (function int$(x){
return cljs.core.fix.call(null,x);
});
/**
* Coerce to long by stripping decimal places. Identical to `int'.
*/
cljs.core.long$ = (function long$(x){
return cljs.core.fix.call(null,x);
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem = (n % d);
return cljs.core.fix.call(null,((n - rem) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q = cljs.core.quot.call(null,n,d);
return (n - (d * q));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Bitwise shift right with zero fill
*/
cljs.core.bit_shift_right_zero_fill = (function bit_shift_right_zero_fill(x,n){
return (x >>> n);
});
/**
* Counts the number of bits set in n
*/
cljs.core.bit_count = (function bit_count(v){
var v__$1 = (v - ((v >> 1) & 1431655765));
var v__$2 = ((v__$1 & 858993459) + ((v__$1 >> 2) & 858993459));
return ((((v__$2 + (v__$2 >> 4)) & 252645135) * 16843009) >> 24);
});
/**
* Returns non-nil if nums all have the equivalent
* value, otherwise false. Behavior on non nums is
* undefined.
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3 = (function() { 
var G__3397__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.next.call(null,more))
{{
var G__3398 = y;
var G__3399 = cljs.core.first.call(null,more);
var G__3400 = cljs.core.next.call(null,more);
x = G__3398;
y = G__3399;
more = G__3400;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__3397 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3397__delegate.call(this, x, y, more);
};
G__3397.cljs$lang$maxFixedArity = 2;
G__3397.cljs$lang$applyTo = (function (arglist__3401){
var x = cljs.core.first(arglist__3401);
var y = cljs.core.first(cljs.core.next(arglist__3401));
var more = cljs.core.rest(cljs.core.next(arglist__3401));
return G__3397__delegate(x, y, more);
});
G__3397.cljs$lang$arity$variadic = G__3397__delegate;
return G__3397;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return _EQ__EQ___1.call(this,x);
case 2:
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.cljs$lang$arity$1 = _EQ__EQ___1;
_EQ__EQ_.cljs$lang$arity$2 = _EQ__EQ___2;
_EQ__EQ_.cljs$lang$arity$variadic = _EQ__EQ___3.cljs$lang$arity$variadic;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__$1 = n;
var xs = cljs.core.seq.call(null,coll);
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = xs;
if(and__3941__auto__)
{return (n__$1 > 0);
} else
{return and__3941__auto__;
}
})()))
{{
var G__3402 = (n__$1 - 1);
var G__3403 = cljs.core.next.call(null,xs);
n__$1 = G__3402;
xs = G__3403;
continue;
}
} else
{return xs;
}
break;
}
});
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__3404__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3405 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3406 = cljs.core.next.call(null,more);
sb = G__3405;
more = G__3406;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3404 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3404__delegate.call(this, x, ys);
};
G__3404.cljs$lang$maxFixedArity = 1;
G__3404.cljs$lang$applyTo = (function (arglist__3407){
var x = cljs.core.first(arglist__3407);
var ys = cljs.core.rest(arglist__3407);
return G__3404__delegate(x, ys);
});
G__3404.cljs$lang$arity$variadic = G__3404__delegate;
return G__3404;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str_STAR___0.call(this);
case 1:
return str_STAR___1.call(this,x);
default:
return str_STAR___2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.cljs$lang$arity$0 = str_STAR___0;
str_STAR_.cljs$lang$arity$1 = str_STAR___1;
str_STAR_.cljs$lang$arity$variadic = str_STAR___2.cljs$lang$arity$variadic;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if(cljs.core.keyword_QMARK_.call(null,x))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,x)))
{return x.source;
} else
{if((x == null))
{return "";
} else
{if("\uFDD0'else")
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__3408__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3409 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__3410 = cljs.core.next.call(null,more);
sb = G__3409;
more = G__3410;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__3408 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3408__delegate.call(this, x, ys);
};
G__3408.cljs$lang$maxFixedArity = 1;
G__3408.cljs$lang$applyTo = (function (arglist__3411){
var x = cljs.core.first(arglist__3411);
var ys = cljs.core.rest(arglist__3411);
return G__3408__delegate(x, ys);
});
G__3408.cljs$lang$arity$variadic = G__3408__delegate;
return G__3408;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case 0:
return str__0.call(this);
case 1:
return str__1.call(this,x);
default:
return str__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.cljs$lang$arity$0 = str__0;
str.cljs$lang$arity$1 = str__1;
str.cljs$lang$arity$variadic = str__2.cljs$lang$arity$variadic;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case 2:
return subs__2.call(this,s,start);
case 3:
return subs__3.call(this,s,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subs.cljs$lang$arity$2 = subs__2;
subs.cljs$lang$arity$3 = subs__3;
return subs;
})()
;
/**
* Formats a string using goog.string.format.
* @param {...*} var_args
*/
cljs.core.format = (function() { 
var format__delegate = function (fmt,args){
var args__$1 = cljs.core.map.call(null,(function (x){
if((function (){var or__3943__auto__ = cljs.core.keyword_QMARK_.call(null,x);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})())
{return [cljs.core.str(x)].join('');
} else
{return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__$1);
};
var format = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return format__delegate.call(this, fmt, args);
};
format.cljs$lang$maxFixedArity = 1;
format.cljs$lang$applyTo = (function (arglist__3412){
var fmt = cljs.core.first(arglist__3412);
var args = cljs.core.rest(arglist__3412);
return format__delegate(fmt, args);
});
format.cljs$lang$arity$variadic = format__delegate;
return format;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if(cljs.core.symbol_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.string_QMARK_.call(null,name))
{return (new cljs.core.Symbol(null,name));
} else
{if("\uFDD0'else")
{throw (new Error("Symbol name must be string or symbol"));
} else
{return null;
}
}
}
});
var symbol__2 = (function (ns,name){
return symbol.call(null,[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''));
});
symbol = function(ns,name){
switch(arguments.length){
case 1:
return symbol__1.call(this,ns);
case 2:
return symbol__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
symbol.cljs$lang$arity$1 = symbol__1;
symbol.cljs$lang$arity$2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if(cljs.core.keyword_QMARK_.call(null,name))
{return name;
} else
{if(cljs.core.symbol_QMARK_.call(null,name))
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{if("\uFDD0'else")
{return cljs.core.str_STAR_.call(null,"\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,(cljs.core.truth_(ns)?cljs.core.str_STAR_.call(null,ns,"/",name):name));
});
keyword = function(ns,name){
switch(arguments.length){
case 1:
return keyword__1.call(this,ns);
case 2:
return keyword__2.call(this,ns,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyword.cljs$lang$arity$1 = keyword__1;
keyword.cljs$lang$arity$2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,((cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null))
{return (ys == null);
} else
{if((ys == null))
{return false;
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys)))
{{
var G__3413 = cljs.core.next.call(null,xs);
var G__3414 = cljs.core.next.call(null,ys);
xs = G__3413;
ys = G__3414;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__3415_SHARP_,p2__3416_SHARP_){
return cljs.core.hash_combine.call(null,p1__3415_SHARP_,cljs.core.hash.call(null,p2__3416_SHARP_,false));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll),false),cljs.core.next.call(null,coll));
});
cljs.core.hash_imap = (function hash_imap(m){
var h = 0;
var s = cljs.core.seq.call(null,m);
while(true){
if(s)
{var e = cljs.core.first.call(null,s);
{
var G__3417 = ((h + (cljs.core.hash.call(null,cljs.core.key.call(null,e)) ^ cljs.core.hash.call(null,cljs.core.val.call(null,e)))) % 4503599627370496);
var G__3418 = cljs.core.next.call(null,s);
h = G__3417;
s = G__3418;
continue;
}
} else
{return h;
}
break;
}
});
cljs.core.hash_iset = (function hash_iset(s){
var h = 0;
var s__$1 = cljs.core.seq.call(null,s);
while(true){
if(s__$1)
{var e = cljs.core.first.call(null,s__$1);
{
var G__3419 = ((h + cljs.core.hash.call(null,e)) % 4503599627370496);
var G__3420 = cljs.core.next.call(null,s__$1);
h = G__3419;
s__$1 = G__3420;
continue;
}
} else
{return h;
}
break;
}
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3423_3425 = cljs.core.seq.call(null,fn_map);
while(true){
if(G__3423_3425)
{var vec__3424_3426 = cljs.core.first.call(null,G__3423_3425);
var key_name_3427 = cljs.core.nth.call(null,vec__3424_3426,0,null);
var f_3428 = cljs.core.nth.call(null,vec__3424_3426,1,null);
var str_name_3429 = cljs.core.name.call(null,key_name_3427);
(obj[str_name_3429] = f_3428);
{
var G__3430 = cljs.core.next.call(null,G__3423_3425);
G__3423_3425 = G__3430;
continue;
}
} else
{}
break;
}
return obj;
});
goog.provide('cljs.core.List');

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413358;
})
cljs.core.List.cljs$lang$type = true;
cljs.core.List.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/List");
});
cljs.core.List.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/List");
});
cljs.core.List.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.List.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if((self__.count === 1))
{return null;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.List(self__.meta,o,coll,(self__.count + 1),null));
});
cljs.core.List.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.List.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
cljs.core.List.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$ISeq$_rest$arity$1(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.count === 1))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.List.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.List(meta__$1,self__.first,self__.rest,self__.count,self__.__hash));
});
cljs.core.List.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.List.EMPTY;
});
goog.provide('cljs.core.EmptyList');

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65413326;
})
cljs.core.EmptyList.cljs$lang$type = true;
cljs.core.EmptyList.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/EmptyList");
});
cljs.core.EmptyList.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.List(self__.meta,o,null,1,null));
});
cljs.core.EmptyList.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
throw (new Error("Can't pop empty list"));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljs.core.List.EMPTY;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.EmptyList(meta__$1));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var G__3432 = coll;
if(G__3432)
{if((function (){var or__3943__auto__ = (G__3432.cljs$lang$protocol_mask$partition0$ & 134217728);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3432.cljs$core$IReversible$;
}
})())
{return true;
} else
{if((!G__3432.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__3432);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IReversible,G__3432);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq.call(null,coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
if(cljs.core.reversible_QMARK_.call(null,coll))
{return cljs.core.rseq.call(null,coll);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
}
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() {
var list = null;
var list__0 = (function (){
return cljs.core.List.EMPTY;
});
var list__1 = (function (x){
return cljs.core.conj.call(null,cljs.core.List.EMPTY,x);
});
var list__2 = (function (x,y){
return cljs.core.conj.call(null,list.call(null,y),x);
});
var list__3 = (function (x,y,z){
return cljs.core.conj.call(null,list.call(null,y,z),x);
});
var list__4 = (function() { 
var G__3433__delegate = function (x,y,z,items){
return cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items)),z),y),x);
};
var G__3433 = function (x,y,z,var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3433__delegate.call(this, x, y, z, items);
};
G__3433.cljs$lang$maxFixedArity = 3;
G__3433.cljs$lang$applyTo = (function (arglist__3434){
var x = cljs.core.first(arglist__3434);
var y = cljs.core.first(cljs.core.next(arglist__3434));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3434)));
var items = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3434)));
return G__3433__delegate(x, y, z, items);
});
G__3433.cljs$lang$arity$variadic = G__3433__delegate;
return G__3433;
})()
;
list = function(x,y,z,var_args){
var items = var_args;
switch(arguments.length){
case 0:
return list__0.call(this);
case 1:
return list__1.call(this,x);
case 2:
return list__2.call(this,x,y);
case 3:
return list__3.call(this,x,y,z);
default:
return list__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list.cljs$lang$maxFixedArity = 3;
list.cljs$lang$applyTo = list__4.cljs$lang$applyTo;
list.cljs$lang$arity$0 = list__0;
list.cljs$lang$arity$1 = list__1;
list.cljs$lang$arity$2 = list__2;
list.cljs$lang$arity$3 = list__3;
list.cljs$lang$arity$variadic = list__4.cljs$lang$arity$variadic;
return list;
})()
;
goog.provide('cljs.core.Cons');

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest,__hash){
this.meta = meta;
this.first = first;
this.rest = rest;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 65405164;
})
cljs.core.Cons.cljs$lang$type = true;
cljs.core.Cons.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/Cons");
});
cljs.core.Cons.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.Cons.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if((self__.rest == null))
{return null;
} else
{return cljs.core._seq.call(null,self__.rest);
}
});
cljs.core.Cons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.Cons(null,o,coll,self__.__hash));
});
cljs.core.Cons.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return self__.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.rest == null))
{return cljs.core.List.EMPTY;
} else
{return self__.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.Cons(meta__$1,self__.first,self__.rest,self__.__hash));
});
cljs.core.Cons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,coll){
if((function (){var or__3943__auto__ = (coll == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var G__3436 = coll;
if(G__3436)
{if((function (){var or__3943__auto____$1 = (G__3436.cljs$lang$protocol_mask$partition0$ & 64);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{return G__3436.cljs$core$ISeq$;
}
})())
{return true;
} else
{if((!G__3436.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__3436);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,G__3436);
}
}
})())
{return (new cljs.core.Cons(null,x,coll,null));
} else
{return (new cljs.core.Cons(null,x,cljs.core.seq.call(null,coll),null));
}
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var G__3438 = x;
if(G__3438)
{if((function (){var or__3943__auto__ = (G__3438.cljs$lang$protocol_mask$partition0$ & 33554432);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3438.cljs$core$IList$;
}
})())
{return true;
} else
{if((!G__3438.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__3438);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IList,G__3438);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3439 = null;
var G__3439__2 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3439__3 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3439 = function(string,f,start){
switch(arguments.length){
case 2:
return G__3439__2.call(this,string,f);
case 3:
return G__3439__3.call(this,string,f,start);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3439;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3440 = null;
var G__3440__2 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3440__3 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3440 = function(string,k,not_found){
switch(arguments.length){
case 2:
return G__3440__2.call(this,string,k);
case 3:
return G__3440__3.call(this,string,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3440;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3441 = null;
var G__3441__2 = (function (string,n){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return null;
}
});
var G__3441__3 = (function (string,n,not_found){
if((n < cljs.core._count.call(null,string)))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3441 = function(string,n,not_found){
switch(arguments.length){
case 2:
return G__3441__2.call(this,string,n);
case 3:
return G__3441__3.call(this,string,n,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3441;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode(o);
}));
goog.provide('cljs.core.Symbol');

/**
* @constructor
*/
cljs.core.Symbol = (function (meta,sym){
this.meta = meta;
this.sym = sym;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6684929;
})
cljs.core.Symbol.cljs$lang$type = true;
cljs.core.Symbol.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/Symbol");
});
cljs.core.Symbol.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/Symbol");
});
cljs.core.Symbol.prototype.call = (function() {
var G__3446 = null;
var G__3446__2 = (function (this_sym3444,coll){
var self__ = this;
var this_sym3444__$1 = this;
var sym__$1 = this_sym3444__$1;
if((coll == null))
{return null;
} else
{return cljs.core._lookup.call(null,coll,sym__$1,null);
}
});
var G__3446__3 = (function (this_sym3445,coll,not_found){
var self__ = this;
var this_sym3445__$1 = this;
var _ = this_sym3445__$1;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,self__.sym,not_found);
}
});
G__3446 = function(this_sym3445,coll,not_found){
switch(arguments.length){
case 2:
return G__3446__2.call(this,this_sym3445,coll);
case 3:
return G__3446__3.call(this,this_sym3445,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3446;
})()
;
cljs.core.Symbol.prototype.apply = (function (this_sym3442,args3443){
var self__ = this;
return this_sym3442.call.apply(this_sym3442,[this_sym3442].concat(args3443.slice()));
});
cljs.core.Symbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (sym__$1,new_meta){
var self__ = this;
return (new cljs.core.Symbol(new_meta,[cljs.core.str(sym__$1)].join('')));
});
cljs.core.Symbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (sym__$1){
var self__ = this;
return self__.meta;
});
cljs.core.Symbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (sym__$1,k){
var self__ = this;
return null;
});
cljs.core.Symbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (sym__$1,k,not_found){
var self__ = this;
return not_found;
});
cljs.core.Symbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var or__3943__auto__ = (o === other);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var and__3941__auto__ = cljs.core.symbol_QMARK_.call(null,other);
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,goog.string.hashCode(cljs.core.str_STAR_.call(null,"\uFDD1","'",o)),cljs.core.hash.call(null,other));
} else
{return and__3941__auto__;
}
}
});
cljs.core.Symbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (o){
var self__ = this;
return goog.string.hashCode(cljs.core.str_STAR_.call(null,"\uFDD1","'",o));
});
cljs.core.Symbol.prototype.toString = (function (){
var self__ = this;
var _ = this;
return self__.sym;
});
cljs.core.Symbol.prototype.cljs$core$ISymbol$ = true;
goog.provide('cljs.core.Keyword');

/**
* @constructor
*/
cljs.core.Keyword = (function (k){
this.k = k;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1;
})
cljs.core.Keyword.cljs$lang$type = true;
cljs.core.Keyword.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/Keyword");
});
cljs.core.Keyword.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/Keyword");
});
cljs.core.Keyword.prototype.call = (function() {
var G__3451 = null;
var G__3451__2 = (function (this_sym3449,coll){
var self__ = this;
var this_sym3449__$1 = this;
var _ = this_sym3449__$1;
if((coll == null))
{return null;
} else
{var strobj = coll.strobj;
if((strobj == null))
{return cljs.core._lookup.call(null,coll,self__.k,null);
} else
{return (strobj[self__.k]);
}
}
});
var G__3451__3 = (function (this_sym3450,coll,not_found){
var self__ = this;
var this_sym3450__$1 = this;
var _ = this_sym3450__$1;
if((coll == null))
{return not_found;
} else
{return cljs.core._lookup.call(null,coll,self__.k,not_found);
}
});
G__3451 = function(this_sym3450,coll,not_found){
switch(arguments.length){
case 2:
return G__3451__2.call(this,this_sym3450,coll);
case 3:
return G__3451__3.call(this,this_sym3450,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3451;
})()
;
cljs.core.Keyword.prototype.apply = (function (this_sym3447,args3448){
var self__ = this;
return this_sym3447.call.apply(this_sym3447,[this_sym3447].concat(args3448.slice()));
});
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__3456 = null;
var G__3456__2 = (function (this_sym3454,coll){
var this_sym3454__$1 = this;
var this$ = this_sym3454__$1;
return cljs.core._lookup.call(null,coll,this$.toString(),null);
});
var G__3456__3 = (function (this_sym3455,coll,not_found){
var this_sym3455__$1 = this;
var this$ = this_sym3455__$1;
return cljs.core._lookup.call(null,coll,this$.toString(),not_found);
});
G__3456 = function(this_sym3455,coll,not_found){
switch(arguments.length){
case 2:
return G__3456__2.call(this,this_sym3455,coll);
case 3:
return G__3456__3.call(this,this_sym3455,coll,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3456;
})()
;
String.prototype.apply = (function (this_sym3452,args3453){
return this_sym3452.call.apply(this_sym3452,[this_sym3452].concat(args3453.slice()));
});
String.prototype.apply = (function (s,args){
if((cljs.core.count.call(null,args) < 2))
{return cljs.core._lookup.call(null,(args[0]),s,null);
} else
{return cljs.core._lookup.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x = lazy_seq.x;
if(lazy_seq.realized)
{return x;
} else
{lazy_seq.x = x.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});
goog.provide('cljs.core.LazySeq');

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x,__hash){
this.meta = meta;
this.realized = realized;
this.x = x;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850700;
})
cljs.core.LazySeq.cljs$lang$type = true;
cljs.core.LazySeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/LazySeq");
});
cljs.core.LazySeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.LazySeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
return cljs.core._seq.call(null,coll.cljs$core$ISeq$_rest$arity$1(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.LazySeq(meta__$1,self__.realized,self__.x,self__.__hash));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
goog.provide('cljs.core.ChunkBuffer');

/**
* @constructor
*/
cljs.core.ChunkBuffer = (function (buf,end){
this.buf = buf;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2;
})
cljs.core.ChunkBuffer.cljs$lang$type = true;
cljs.core.ChunkBuffer.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/ChunkBuffer");
});
cljs.core.ChunkBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return self__.end;
});
cljs.core.ChunkBuffer.prototype.add = (function (o){
var self__ = this;
var _ = this;
(self__.buf[self__.end] = o);
return self__.end = (self__.end + 1);
});
cljs.core.ChunkBuffer.prototype.chunk = (function (o){
var self__ = this;
var _ = this;
var ret = (new cljs.core.ArrayChunk(self__.buf,0,self__.end));
self__.buf = null;
return ret;
});
cljs.core.chunk_buffer = (function chunk_buffer(capacity){
return (new cljs.core.ChunkBuffer(cljs.core.make_array.call(null,capacity),0));
});
goog.provide('cljs.core.ArrayChunk');

/**
* @constructor
*/
cljs.core.ArrayChunk = (function (arr,off,end){
this.arr = arr;
this.off = off;
this.end = end;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 524306;
})
cljs.core.ArrayChunk.cljs$lang$type = true;
cljs.core.ArrayChunk.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/ArrayChunk");
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
return cljs.core.array_reduce.call(null,self__.arr,f,(self__.arr[self__.off]),(self__.off + 1));
});
cljs.core.ArrayChunk.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start){
var self__ = this;
return cljs.core.array_reduce.call(null,self__.arr,f,start,self__.off);
});
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$ = true;
cljs.core.ArrayChunk.prototype.cljs$core$IChunk$_drop_first$arity$1 = (function (coll){
var self__ = this;
if((self__.off === self__.end))
{throw (new Error("-drop-first of empty chunk"));
} else
{return (new cljs.core.ArrayChunk(self__.arr,(self__.off + 1),self__.end));
}
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,i){
var self__ = this;
return (self__.arr[(self__.off + i)]);
});
cljs.core.ArrayChunk.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,i,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = (i >= 0);
if(and__3941__auto__)
{return (i < (self__.end - self__.off));
} else
{return and__3941__auto__;
}
})())
{return (self__.arr[(self__.off + i)]);
} else
{return not_found;
}
});
cljs.core.ArrayChunk.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
return (self__.end - self__.off);
});
cljs.core.array_chunk = (function() {
var array_chunk = null;
var array_chunk__1 = (function (arr){
return array_chunk.call(null,arr,0,arr.length);
});
var array_chunk__2 = (function (arr,off){
return array_chunk.call(null,arr,off,arr.length);
});
var array_chunk__3 = (function (arr,off,end){
return (new cljs.core.ArrayChunk(arr,off,end));
});
array_chunk = function(arr,off,end){
switch(arguments.length){
case 1:
return array_chunk__1.call(this,arr);
case 2:
return array_chunk__2.call(this,arr,off);
case 3:
return array_chunk__3.call(this,arr,off,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
array_chunk.cljs$lang$arity$1 = array_chunk__1;
array_chunk.cljs$lang$arity$2 = array_chunk__2;
array_chunk.cljs$lang$arity$3 = array_chunk__3;
return array_chunk;
})()
;
goog.provide('cljs.core.ChunkedCons');

/**
* @constructor
*/
cljs.core.ChunkedCons = (function (chunk,more,meta,__hash){
this.chunk = chunk;
this.more = more;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31850604;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedCons.cljs$lang$type = true;
cljs.core.ChunkedCons.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/ChunkedCons");
});
cljs.core.ChunkedCons.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this$,o){
var self__ = this;
return cljs.core.cons.call(null,o,this$);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core._nth.call(null,self__.chunk,0);
});
cljs.core.ChunkedCons.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((cljs.core._count.call(null,self__.chunk) > 1))
{return (new cljs.core.ChunkedCons(cljs.core._drop_first.call(null,self__.chunk),self__.more,self__.meta,null));
} else
{if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
if((self__.more == null))
{return null;
} else
{return self__.more;
}
});
cljs.core.ChunkedCons.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedCons.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
return (new cljs.core.ChunkedCons(self__.chunk,self__.more,m,self__.__hash));
});
cljs.core.ChunkedCons.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.ChunkedCons.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
return self__.chunk;
});
cljs.core.ChunkedCons.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.more == null))
{return cljs.core.List.EMPTY;
} else
{return self__.more;
}
});
cljs.core.chunk_cons = (function chunk_cons(chunk,rest){
if((cljs.core._count.call(null,chunk) === 0))
{return rest;
} else
{return (new cljs.core.ChunkedCons(chunk,rest,null,null));
}
});
cljs.core.chunk_append = (function chunk_append(b,x){
return b.add(x);
});
cljs.core.chunk = (function chunk(b){
return b.chunk();
});
cljs.core.chunk_first = (function chunk_first(s){
return cljs.core._chunked_first.call(null,s);
});
cljs.core.chunk_rest = (function chunk_rest(s){
return cljs.core._chunked_rest.call(null,s);
});
cljs.core.chunk_next = (function chunk_next(s){
if((function (){var G__3458 = s;
if(G__3458)
{if((function (){var or__3943__auto__ = (G__3458.cljs$lang$protocol_mask$partition1$ & 1024);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3458.cljs$core$IChunkedNext$;
}
})())
{return true;
} else
{if((!G__3458.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__3458);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IChunkedNext,G__3458);
}
})())
{return cljs.core._chunked_next.call(null,s);
} else
{return cljs.core.seq.call(null,cljs.core._chunked_rest.call(null,s));
}
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary = [];
var s__$1 = s;
while(true){
if(cljs.core.seq.call(null,s__$1))
{ary.push(cljs.core.first.call(null,s__$1));
{
var G__3459 = cljs.core.next.call(null,s__$1);
s__$1 = G__3459;
continue;
}
} else
{return ary;
}
break;
}
});
/**
* Returns a (potentially-ragged) 2-dimensional array
* containing the contents of coll.
*/
cljs.core.to_array_2d = (function to_array_2d(coll){
var ret = cljs.core.make_array.call(null,cljs.core.count.call(null,coll));
var i_3460 = 0;
var xs_3461 = cljs.core.seq.call(null,coll);
while(true){
if(xs_3461)
{(ret[i_3460] = cljs.core.to_array.call(null,cljs.core.first.call(null,xs_3461)));
{
var G__3462 = (i_3460 + 1);
var G__3463 = cljs.core.next.call(null,xs_3461);
i_3460 = G__3462;
xs_3461 = G__3463;
continue;
}
} else
{}
break;
}
return ret;
});
cljs.core.long_array = (function() {
var long_array = null;
var long_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return long_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("long-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var long_array__2 = (function (size,init_val_or_seq){
var a = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = s__$1;
if(and__3941__auto__)
{return (i < size);
} else
{return and__3941__auto__;
}
})()))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__3464 = (i + 1);
var G__3465 = cljs.core.next.call(null,s__$1);
i = G__3464;
s__$1 = G__3465;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__2209__auto___3466 = size;
var i_3467 = 0;
while(true){
if((i_3467 < n__2209__auto___3466))
{(a[i_3467] = init_val_or_seq);
{
var G__3468 = (i_3467 + 1);
i_3467 = G__3468;
continue;
}
} else
{}
break;
}
return a;
}
});
long_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return long_array__1.call(this,size);
case 2:
return long_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
long_array.cljs$lang$arity$1 = long_array__1;
long_array.cljs$lang$arity$2 = long_array__2;
return long_array;
})()
;
cljs.core.double_array = (function() {
var double_array = null;
var double_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return double_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("double-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var double_array__2 = (function (size,init_val_or_seq){
var a = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = s__$1;
if(and__3941__auto__)
{return (i < size);
} else
{return and__3941__auto__;
}
})()))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__3469 = (i + 1);
var G__3470 = cljs.core.next.call(null,s__$1);
i = G__3469;
s__$1 = G__3470;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__2209__auto___3471 = size;
var i_3472 = 0;
while(true){
if((i_3472 < n__2209__auto___3471))
{(a[i_3472] = init_val_or_seq);
{
var G__3473 = (i_3472 + 1);
i_3472 = G__3473;
continue;
}
} else
{}
break;
}
return a;
}
});
double_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return double_array__1.call(this,size);
case 2:
return double_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
double_array.cljs$lang$arity$1 = double_array__1;
double_array.cljs$lang$arity$2 = double_array__2;
return double_array;
})()
;
cljs.core.object_array = (function() {
var object_array = null;
var object_array__1 = (function (size_or_seq){
if(cljs.core.number_QMARK_.call(null,size_or_seq))
{return object_array.call(null,size_or_seq,null);
} else
{if(cljs.core.seq_QMARK_.call(null,size_or_seq))
{return cljs.core.into_array.call(null,size_or_seq);
} else
{if("\uFDD0'else")
{throw (new Error("object-array called with something other than size or ISeq"));
} else
{return null;
}
}
}
});
var object_array__2 = (function (size,init_val_or_seq){
var a = cljs.core.make_array.call(null,size);
if(cljs.core.seq_QMARK_.call(null,init_val_or_seq))
{var s = cljs.core.seq.call(null,init_val_or_seq);
var i = 0;
var s__$1 = s;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = s__$1;
if(and__3941__auto__)
{return (i < size);
} else
{return and__3941__auto__;
}
})()))
{(a[i] = cljs.core.first.call(null,s__$1));
{
var G__3474 = (i + 1);
var G__3475 = cljs.core.next.call(null,s__$1);
i = G__3474;
s__$1 = G__3475;
continue;
}
} else
{return a;
}
break;
}
} else
{var n__2209__auto___3476 = size;
var i_3477 = 0;
while(true){
if((i_3477 < n__2209__auto___3476))
{(a[i_3477] = init_val_or_seq);
{
var G__3478 = (i_3477 + 1);
i_3477 = G__3478;
continue;
}
} else
{}
break;
}
return a;
}
});
object_array = function(size,init_val_or_seq){
switch(arguments.length){
case 1:
return object_array__1.call(this,size);
case 2:
return object_array__2.call(this,size,init_val_or_seq);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object_array.cljs$lang$arity$1 = object_array__1;
object_array.cljs$lang$arity$2 = object_array__2;
return object_array;
})()
;
cljs.core.bounded_count = (function bounded_count(s,n){
if(cljs.core.counted_QMARK_.call(null,s))
{return cljs.core.count.call(null,s);
} else
{var s__$1 = s;
var i = n;
var sum = 0;
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = (i > 0);
if(and__3941__auto__)
{return cljs.core.seq.call(null,s__$1);
} else
{return and__3941__auto__;
}
})()))
{{
var G__3479 = cljs.core.next.call(null,s__$1);
var G__3480 = (i - 1);
var G__3481 = (sum + 1);
s__$1 = G__3479;
i = G__3480;
sum = G__3481;
continue;
}
} else
{return sum;
}
break;
}
}
});
cljs.core.spread = (function spread(arglist){
if((arglist == null))
{return null;
} else
{if((cljs.core.next.call(null,arglist) == null))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if("\uFDD0'else")
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
}),null));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
}),null));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s = cljs.core.seq.call(null,x);
if(s)
{if(cljs.core.chunked_seq_QMARK_.call(null,s))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,s),concat.call(null,cljs.core.chunk_rest.call(null,s),y));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),concat.call(null,cljs.core.rest.call(null,s),y));
}
} else
{return y;
}
}),null));
});
var concat__3 = (function() { 
var G__3482__delegate = function (x,y,zs){
var cat = (function cat(xys,zs__$1){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__$1 = cljs.core.seq.call(null,xys);
if(xys__$1)
{if(cljs.core.chunked_seq_QMARK_.call(null,xys__$1))
{return cljs.core.chunk_cons.call(null,cljs.core.chunk_first.call(null,xys__$1),cat.call(null,cljs.core.chunk_rest.call(null,xys__$1),zs__$1));
} else
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__$1),cat.call(null,cljs.core.rest.call(null,xys__$1),zs__$1));
}
} else
{if(cljs.core.truth_(zs__$1))
{return cat.call(null,cljs.core.first.call(null,zs__$1),cljs.core.next.call(null,zs__$1));
} else
{return null;
}
}
}),null));
});
return cat.call(null,concat.call(null,x,y),zs);
};
var G__3482 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3482__delegate.call(this, x, y, zs);
};
G__3482.cljs$lang$maxFixedArity = 2;
G__3482.cljs$lang$applyTo = (function (arglist__3483){
var x = cljs.core.first(arglist__3483);
var y = cljs.core.first(cljs.core.next(arglist__3483));
var zs = cljs.core.rest(cljs.core.next(arglist__3483));
return G__3482__delegate(x, y, zs);
});
G__3482.cljs$lang$arity$variadic = G__3482__delegate;
return G__3482;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return concat__0.call(this);
case 1:
return concat__1.call(this,x);
case 2:
return concat__2.call(this,x,y);
default:
return concat__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.cljs$lang$arity$0 = concat__0;
concat.cljs$lang$arity$1 = concat__1;
concat.cljs$lang$arity$2 = concat__2;
concat.cljs$lang$arity$variadic = concat__3.cljs$lang$arity$variadic;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___1 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___5 = (function() { 
var G__3484__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3484 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3484__delegate.call(this, a, b, c, d, more);
};
G__3484.cljs$lang$maxFixedArity = 4;
G__3484.cljs$lang$applyTo = (function (arglist__3485){
var a = cljs.core.first(arglist__3485);
var b = cljs.core.first(cljs.core.next(arglist__3485));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3485)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3485))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3485))));
return G__3484__delegate(a, b, c, d, more);
});
G__3484.cljs$lang$arity$variadic = G__3484__delegate;
return G__3484;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return list_STAR___1.call(this,a);
case 2:
return list_STAR___2.call(this,a,b);
case 3:
return list_STAR___3.call(this,a,b,c);
case 4:
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.cljs$lang$arity$variadic(a,b,c,d, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.cljs$lang$arity$1 = list_STAR___1;
list_STAR_.cljs$lang$arity$2 = list_STAR___2;
list_STAR_.cljs$lang$arity$3 = list_STAR___3;
list_STAR_.cljs$lang$arity$4 = list_STAR___4;
list_STAR_.cljs$lang$arity$variadic = list_STAR___5.cljs$lang$arity$variadic;
return list_STAR_;
})()
;
cljs.core.transient$ = (function transient$(coll){
return cljs.core._as_transient.call(null,coll);
});
cljs.core.persistent_BANG_ = (function persistent_BANG_(tcoll){
return cljs.core._persistent_BANG_.call(null,tcoll);
});
cljs.core.conj_BANG_ = (function conj_BANG_(tcoll,val){
return cljs.core._conj_BANG_.call(null,tcoll,val);
});
cljs.core.assoc_BANG_ = (function assoc_BANG_(tcoll,key,val){
return cljs.core._assoc_BANG_.call(null,tcoll,key,val);
});
cljs.core.dissoc_BANG_ = (function dissoc_BANG_(tcoll,key){
return cljs.core._dissoc_BANG_.call(null,tcoll,key);
});
cljs.core.pop_BANG_ = (function pop_BANG_(tcoll){
return cljs.core._pop_BANG_.call(null,tcoll);
});
cljs.core.disj_BANG_ = (function disj_BANG_(tcoll,val){
return cljs.core._disjoin_BANG_.call(null,tcoll,val);
});
cljs.core.apply_to = (function apply_to(f,argc,args){
var args__$1 = cljs.core.seq.call(null,args);
if((argc === 0))
{return f.call(null);
} else
{var a = cljs.core._first.call(null,args__$1);
var args__$2 = cljs.core._rest.call(null,args__$1);
if((argc === 1))
{if(f.cljs$lang$arity$1)
{return f.cljs$lang$arity$1(a);
} else
{return f.call(null,a);
}
} else
{var b = cljs.core._first.call(null,args__$2);
var args__$3 = cljs.core._rest.call(null,args__$2);
if((argc === 2))
{if(f.cljs$lang$arity$2)
{return f.cljs$lang$arity$2(a,b);
} else
{return f.call(null,a,b);
}
} else
{var c = cljs.core._first.call(null,args__$3);
var args__$4 = cljs.core._rest.call(null,args__$3);
if((argc === 3))
{if(f.cljs$lang$arity$3)
{return f.cljs$lang$arity$3(a,b,c);
} else
{return f.call(null,a,b,c);
}
} else
{var d = cljs.core._first.call(null,args__$4);
var args__$5 = cljs.core._rest.call(null,args__$4);
if((argc === 4))
{if(f.cljs$lang$arity$4)
{return f.cljs$lang$arity$4(a,b,c,d);
} else
{return f.call(null,a,b,c,d);
}
} else
{var e = cljs.core._first.call(null,args__$5);
var args__$6 = cljs.core._rest.call(null,args__$5);
if((argc === 5))
{if(f.cljs$lang$arity$5)
{return f.cljs$lang$arity$5(a,b,c,d,e);
} else
{return f.call(null,a,b,c,d,e);
}
} else
{var f__$1 = cljs.core._first.call(null,args__$6);
var args__$7 = cljs.core._rest.call(null,args__$6);
if((argc === 6))
{if(f__$1.cljs$lang$arity$6)
{return f__$1.cljs$lang$arity$6(a,b,c,d,e,f__$1);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1);
}
} else
{var g = cljs.core._first.call(null,args__$7);
var args__$8 = cljs.core._rest.call(null,args__$7);
if((argc === 7))
{if(f__$1.cljs$lang$arity$7)
{return f__$1.cljs$lang$arity$7(a,b,c,d,e,f__$1,g);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g);
}
} else
{var h = cljs.core._first.call(null,args__$8);
var args__$9 = cljs.core._rest.call(null,args__$8);
if((argc === 8))
{if(f__$1.cljs$lang$arity$8)
{return f__$1.cljs$lang$arity$8(a,b,c,d,e,f__$1,g,h);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h);
}
} else
{var i = cljs.core._first.call(null,args__$9);
var args__$10 = cljs.core._rest.call(null,args__$9);
if((argc === 9))
{if(f__$1.cljs$lang$arity$9)
{return f__$1.cljs$lang$arity$9(a,b,c,d,e,f__$1,g,h,i);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i);
}
} else
{var j = cljs.core._first.call(null,args__$10);
var args__$11 = cljs.core._rest.call(null,args__$10);
if((argc === 10))
{if(f__$1.cljs$lang$arity$10)
{return f__$1.cljs$lang$arity$10(a,b,c,d,e,f__$1,g,h,i,j);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j);
}
} else
{var k = cljs.core._first.call(null,args__$11);
var args__$12 = cljs.core._rest.call(null,args__$11);
if((argc === 11))
{if(f__$1.cljs$lang$arity$11)
{return f__$1.cljs$lang$arity$11(a,b,c,d,e,f__$1,g,h,i,j,k);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k);
}
} else
{var l = cljs.core._first.call(null,args__$12);
var args__$13 = cljs.core._rest.call(null,args__$12);
if((argc === 12))
{if(f__$1.cljs$lang$arity$12)
{return f__$1.cljs$lang$arity$12(a,b,c,d,e,f__$1,g,h,i,j,k,l);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l);
}
} else
{var m = cljs.core._first.call(null,args__$13);
var args__$14 = cljs.core._rest.call(null,args__$13);
if((argc === 13))
{if(f__$1.cljs$lang$arity$13)
{return f__$1.cljs$lang$arity$13(a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m);
}
} else
{var n = cljs.core._first.call(null,args__$14);
var args__$15 = cljs.core._rest.call(null,args__$14);
if((argc === 14))
{if(f__$1.cljs$lang$arity$14)
{return f__$1.cljs$lang$arity$14(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n);
}
} else
{var o = cljs.core._first.call(null,args__$15);
var args__$16 = cljs.core._rest.call(null,args__$15);
if((argc === 15))
{if(f__$1.cljs$lang$arity$15)
{return f__$1.cljs$lang$arity$15(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o);
}
} else
{var p = cljs.core._first.call(null,args__$16);
var args__$17 = cljs.core._rest.call(null,args__$16);
if((argc === 16))
{if(f__$1.cljs$lang$arity$16)
{return f__$1.cljs$lang$arity$16(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p);
}
} else
{var q = cljs.core._first.call(null,args__$17);
var args__$18 = cljs.core._rest.call(null,args__$17);
if((argc === 17))
{if(f__$1.cljs$lang$arity$17)
{return f__$1.cljs$lang$arity$17(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q);
}
} else
{var r = cljs.core._first.call(null,args__$18);
var args__$19 = cljs.core._rest.call(null,args__$18);
if((argc === 18))
{if(f__$1.cljs$lang$arity$18)
{return f__$1.cljs$lang$arity$18(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r);
}
} else
{var s = cljs.core._first.call(null,args__$19);
var args__$20 = cljs.core._rest.call(null,args__$19);
if((argc === 19))
{if(f__$1.cljs$lang$arity$19)
{return f__$1.cljs$lang$arity$19(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s);
}
} else
{var t = cljs.core._first.call(null,args__$20);
var args__$21 = cljs.core._rest.call(null,args__$20);
if((argc === 20))
{if(f__$1.cljs$lang$arity$20)
{return f__$1.cljs$lang$arity$20(a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
} else
{return f__$1.call(null,a,b,c,d,e,f__$1,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
}
} else
{throw (new Error("Only up to 20 arguments supported on functions"));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2 = (function (f,args){
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,args,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,args);
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3 = (function (f,x,args){
var arglist = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__4 = (function (f,x,y,args){
var arglist = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
});
var apply__6 = (function() { 
var G__3486__delegate = function (f,a,b,c,d,args){
var arglist = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity = f.cljs$lang$maxFixedArity;
if(f.cljs$lang$applyTo)
{var bc = cljs.core.bounded_count.call(null,arglist,(fixed_arity + 1));
if((bc <= fixed_arity))
{return cljs.core.apply_to.call(null,f,bc,arglist);
} else
{return f.cljs$lang$applyTo(arglist);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist));
}
};
var G__3486 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3486__delegate.call(this, f, a, b, c, d, args);
};
G__3486.cljs$lang$maxFixedArity = 5;
G__3486.cljs$lang$applyTo = (function (arglist__3487){
var f = cljs.core.first(arglist__3487);
var a = cljs.core.first(cljs.core.next(arglist__3487));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3487)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3487))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3487)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3487)))));
return G__3486__delegate(f, a, b, c, d, args);
});
G__3486.cljs$lang$arity$variadic = G__3486__delegate;
return G__3486;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return apply__2.call(this,f,a);
case 3:
return apply__3.call(this,f,a,b);
case 4:
return apply__4.call(this,f,a,b,c);
case 5:
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.cljs$lang$arity$variadic(f,a,b,c,d, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.cljs$lang$arity$2 = apply__2;
apply.cljs$lang$arity$3 = apply__3;
apply.cljs$lang$arity$4 = apply__4;
apply.cljs$lang$arity$5 = apply__5;
apply.cljs$lang$arity$variadic = apply__6.cljs$lang$arity$variadic;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__3488){
var obj = cljs.core.first(arglist__3488);
var f = cljs.core.first(cljs.core.next(arglist__3488));
var args = cljs.core.rest(cljs.core.next(arglist__3488));
return vary_meta__delegate(obj, f, args);
});
vary_meta.cljs$lang$arity$variadic = vary_meta__delegate;
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return !(cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3 = (function() { 
var G__3489__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3489 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3489__delegate.call(this, x, y, more);
};
G__3489.cljs$lang$maxFixedArity = 2;
G__3489.cljs$lang$applyTo = (function (arglist__3490){
var x = cljs.core.first(arglist__3490);
var y = cljs.core.first(cljs.core.next(arglist__3490));
var more = cljs.core.rest(cljs.core.next(arglist__3490));
return G__3489__delegate(x, y, more);
});
G__3489.cljs$lang$arity$variadic = G__3489__delegate;
return G__3489;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return not_EQ___1.call(this,x);
case 2:
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.cljs$lang$arity$1 = not_EQ___1;
not_EQ_.cljs$lang$arity$2 = not_EQ___2;
not_EQ_.cljs$lang$arity$variadic = not_EQ___3.cljs$lang$arity$variadic;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.seq.call(null,coll))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if((cljs.core.seq.call(null,coll) == null))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__3491 = pred;
var G__3492 = cljs.core.next.call(null,coll);
pred = G__3491;
coll = G__3492;
continue;
}
} else
{if("\uFDD0'else")
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return !(cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.seq.call(null,coll))
{var or__3943__auto__ = pred.call(null,cljs.core.first.call(null,coll));
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{{
var G__3493 = pred;
var G__3494 = cljs.core.next.call(null,coll);
pred = G__3493;
coll = G__3494;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.integer_QMARK_.call(null,n))
{return ((n & 1) === 0);
} else
{throw (new Error([cljs.core.str("Argument must be an integer: "),cljs.core.str(n)].join('')));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return !(cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__3495 = null;
var G__3495__0 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3495__1 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3495__2 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3495__3 = (function() { 
var G__3496__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3496 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3496__delegate.call(this, x, y, zs);
};
G__3496.cljs$lang$maxFixedArity = 2;
G__3496.cljs$lang$applyTo = (function (arglist__3497){
var x = cljs.core.first(arglist__3497);
var y = cljs.core.first(cljs.core.next(arglist__3497));
var zs = cljs.core.rest(cljs.core.next(arglist__3497));
return G__3496__delegate(x, y, zs);
});
G__3496.cljs$lang$arity$variadic = G__3496__delegate;
return G__3496;
})()
;
G__3495 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case 0:
return G__3495__0.call(this);
case 1:
return G__3495__1.call(this,x);
case 2:
return G__3495__2.call(this,x,y);
default:
return G__3495__3.cljs$lang$arity$variadic(x,y, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3495.cljs$lang$maxFixedArity = 2;
G__3495.cljs$lang$applyTo = G__3495__3.cljs$lang$applyTo;
return G__3495;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3498__delegate = function (args){
return x;
};
var G__3498 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3498__delegate.call(this, args);
};
G__3498.cljs$lang$maxFixedArity = 0;
G__3498.cljs$lang$applyTo = (function (arglist__3499){
var args = cljs.core.seq(arglist__3499);;
return G__3498__delegate(args);
});
G__3498.cljs$lang$arity$variadic = G__3498__delegate;
return G__3498;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__3500 = null;
var G__3500__0 = (function (){
return f.call(null,g.call(null));
});
var G__3500__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3500__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3500__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3500__4 = (function() { 
var G__3501__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3501 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3501__delegate.call(this, x, y, z, args);
};
G__3501.cljs$lang$maxFixedArity = 3;
G__3501.cljs$lang$applyTo = (function (arglist__3502){
var x = cljs.core.first(arglist__3502);
var y = cljs.core.first(cljs.core.next(arglist__3502));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3502)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3502)));
return G__3501__delegate(x, y, z, args);
});
G__3501.cljs$lang$arity$variadic = G__3501__delegate;
return G__3501;
})()
;
G__3500 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3500__0.call(this);
case 1:
return G__3500__1.call(this,x);
case 2:
return G__3500__2.call(this,x,y);
case 3:
return G__3500__3.call(this,x,y,z);
default:
return G__3500__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3500.cljs$lang$maxFixedArity = 3;
G__3500.cljs$lang$applyTo = G__3500__4.cljs$lang$applyTo;
return G__3500;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__3503 = null;
var G__3503__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3503__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3503__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3503__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3503__4 = (function() { 
var G__3504__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3504 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3504__delegate.call(this, x, y, z, args);
};
G__3504.cljs$lang$maxFixedArity = 3;
G__3504.cljs$lang$applyTo = (function (arglist__3505){
var x = cljs.core.first(arglist__3505);
var y = cljs.core.first(cljs.core.next(arglist__3505));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3505)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3505)));
return G__3504__delegate(x, y, z, args);
});
G__3504.cljs$lang$arity$variadic = G__3504__delegate;
return G__3504;
})()
;
G__3503 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3503__0.call(this);
case 1:
return G__3503__1.call(this,x);
case 2:
return G__3503__2.call(this,x,y);
case 3:
return G__3503__3.call(this,x,y,z);
default:
return G__3503__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3503.cljs$lang$maxFixedArity = 3;
G__3503.cljs$lang$applyTo = G__3503__4.cljs$lang$applyTo;
return G__3503;
})()
});
var comp__4 = (function() { 
var G__3506__delegate = function (f1,f2,f3,fs){
var fs__$1 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));
return (function() { 
var G__3507__delegate = function (args){
var ret = cljs.core.apply.call(null,cljs.core.first.call(null,fs__$1),args);
var fs__$2 = cljs.core.next.call(null,fs__$1);
while(true){
if(fs__$2)
{{
var G__3508 = cljs.core.first.call(null,fs__$2).call(null,ret);
var G__3509 = cljs.core.next.call(null,fs__$2);
ret = G__3508;
fs__$2 = G__3509;
continue;
}
} else
{return ret;
}
break;
}
};
var G__3507 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3507__delegate.call(this, args);
};
G__3507.cljs$lang$maxFixedArity = 0;
G__3507.cljs$lang$applyTo = (function (arglist__3510){
var args = cljs.core.seq(arglist__3510);;
return G__3507__delegate(args);
});
G__3507.cljs$lang$arity$variadic = G__3507__delegate;
return G__3507;
})()
;
};
var G__3506 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3506__delegate.call(this, f1, f2, f3, fs);
};
G__3506.cljs$lang$maxFixedArity = 3;
G__3506.cljs$lang$applyTo = (function (arglist__3511){
var f1 = cljs.core.first(arglist__3511);
var f2 = cljs.core.first(cljs.core.next(arglist__3511));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3511)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3511)));
return G__3506__delegate(f1, f2, f3, fs);
});
G__3506.cljs$lang$arity$variadic = G__3506__delegate;
return G__3506;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case 0:
return comp__0.call(this);
case 1:
return comp__1.call(this,f1);
case 2:
return comp__2.call(this,f1,f2);
case 3:
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.cljs$lang$arity$variadic(f1,f2,f3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.cljs$lang$arity$0 = comp__0;
comp.cljs$lang$arity$1 = comp__1;
comp.cljs$lang$arity$2 = comp__2;
comp.cljs$lang$arity$3 = comp__3;
comp.cljs$lang$arity$variadic = comp__4.cljs$lang$arity$variadic;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__2 = (function (f,arg1){
return (function() { 
var G__3512__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3512 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3512__delegate.call(this, args);
};
G__3512.cljs$lang$maxFixedArity = 0;
G__3512.cljs$lang$applyTo = (function (arglist__3513){
var args = cljs.core.seq(arglist__3513);;
return G__3512__delegate(args);
});
G__3512.cljs$lang$arity$variadic = G__3512__delegate;
return G__3512;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__3514__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3514 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3514__delegate.call(this, args);
};
G__3514.cljs$lang$maxFixedArity = 0;
G__3514.cljs$lang$applyTo = (function (arglist__3515){
var args = cljs.core.seq(arglist__3515);;
return G__3514__delegate(args);
});
G__3514.cljs$lang$arity$variadic = G__3514__delegate;
return G__3514;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3516__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3516 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3516__delegate.call(this, args);
};
G__3516.cljs$lang$maxFixedArity = 0;
G__3516.cljs$lang$applyTo = (function (arglist__3517){
var args = cljs.core.seq(arglist__3517);;
return G__3516__delegate(args);
});
G__3516.cljs$lang$arity$variadic = G__3516__delegate;
return G__3516;
})()
;
});
var partial__5 = (function() { 
var G__3518__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3519__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3519 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3519__delegate.call(this, args);
};
G__3519.cljs$lang$maxFixedArity = 0;
G__3519.cljs$lang$applyTo = (function (arglist__3520){
var args = cljs.core.seq(arglist__3520);;
return G__3519__delegate(args);
});
G__3519.cljs$lang$arity$variadic = G__3519__delegate;
return G__3519;
})()
;
};
var G__3518 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3518__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3518.cljs$lang$maxFixedArity = 4;
G__3518.cljs$lang$applyTo = (function (arglist__3521){
var f = cljs.core.first(arglist__3521);
var arg1 = cljs.core.first(cljs.core.next(arglist__3521));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3521)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3521))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3521))));
return G__3518__delegate(f, arg1, arg2, arg3, more);
});
G__3518.cljs$lang$arity$variadic = G__3518__delegate;
return G__3518;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return partial__2.call(this,f,arg1);
case 3:
return partial__3.call(this,f,arg1,arg2);
case 4:
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.cljs$lang$arity$variadic(f,arg1,arg2,arg3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.cljs$lang$arity$2 = partial__2;
partial.cljs$lang$arity$3 = partial__3;
partial.cljs$lang$arity$4 = partial__4;
partial.cljs$lang$arity$variadic = partial__5.cljs$lang$arity$variadic;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__2 = (function (f,x){
return (function() {
var G__3522 = null;
var G__3522__1 = (function (a){
return f.call(null,(((a == null))?x:a));
});
var G__3522__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),b);
});
var G__3522__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),b,c);
});
var G__3522__4 = (function() { 
var G__3523__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),b,c,ds);
};
var G__3523 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3523__delegate.call(this, a, b, c, ds);
};
G__3523.cljs$lang$maxFixedArity = 3;
G__3523.cljs$lang$applyTo = (function (arglist__3524){
var a = cljs.core.first(arglist__3524);
var b = cljs.core.first(cljs.core.next(arglist__3524));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3524)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3524)));
return G__3523__delegate(a, b, c, ds);
});
G__3523.cljs$lang$arity$variadic = G__3523__delegate;
return G__3523;
})()
;
G__3522 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 1:
return G__3522__1.call(this,a);
case 2:
return G__3522__2.call(this,a,b);
case 3:
return G__3522__3.call(this,a,b,c);
default:
return G__3522__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3522.cljs$lang$maxFixedArity = 3;
G__3522.cljs$lang$applyTo = G__3522__4.cljs$lang$applyTo;
return G__3522;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__3525 = null;
var G__3525__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__3525__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),c);
});
var G__3525__4 = (function() { 
var G__3526__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),c,ds);
};
var G__3526 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3526__delegate.call(this, a, b, c, ds);
};
G__3526.cljs$lang$maxFixedArity = 3;
G__3526.cljs$lang$applyTo = (function (arglist__3527){
var a = cljs.core.first(arglist__3527);
var b = cljs.core.first(cljs.core.next(arglist__3527));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3527)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3527)));
return G__3526__delegate(a, b, c, ds);
});
G__3526.cljs$lang$arity$variadic = G__3526__delegate;
return G__3526;
})()
;
G__3525 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__3525__2.call(this,a,b);
case 3:
return G__3525__3.call(this,a,b,c);
default:
return G__3525__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3525.cljs$lang$maxFixedArity = 3;
G__3525.cljs$lang$applyTo = G__3525__4.cljs$lang$applyTo;
return G__3525;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__3528 = null;
var G__3528__2 = (function (a,b){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b));
});
var G__3528__3 = (function (a,b,c){
return f.call(null,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c));
});
var G__3528__4 = (function() { 
var G__3529__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(((a == null))?x:a),(((b == null))?y:b),(((c == null))?z:c),ds);
};
var G__3529 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3529__delegate.call(this, a, b, c, ds);
};
G__3529.cljs$lang$maxFixedArity = 3;
G__3529.cljs$lang$applyTo = (function (arglist__3530){
var a = cljs.core.first(arglist__3530);
var b = cljs.core.first(cljs.core.next(arglist__3530));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3530)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3530)));
return G__3529__delegate(a, b, c, ds);
});
G__3529.cljs$lang$arity$variadic = G__3529__delegate;
return G__3529;
})()
;
G__3528 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case 2:
return G__3528__2.call(this,a,b);
case 3:
return G__3528__3.call(this,a,b,c);
default:
return G__3528__4.cljs$lang$arity$variadic(a,b,c, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3528.cljs$lang$maxFixedArity = 3;
G__3528.cljs$lang$applyTo = G__3528__4.cljs$lang$applyTo;
return G__3528;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case 2:
return fnil__2.call(this,f,x);
case 3:
return fnil__3.call(this,f,x,y);
case 4:
return fnil__4.call(this,f,x,y,z);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fnil.cljs$lang$arity$2 = fnil__2;
fnil.cljs$lang$arity$3 = fnil__3;
fnil.cljs$lang$arity$4 = fnil__4;
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi = (function mapi(idx,coll__$1){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll__$1);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__2209__auto___3531 = size;
var i_3532 = 0;
while(true){
if((i_3532 < n__2209__auto___3531))
{cljs.core.chunk_append.call(null,b,f.call(null,(idx + i_3532),cljs.core._nth.call(null,c,i_3532)));
{
var G__3533 = (i_3532 + 1);
i_3532 = G__3533;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),mapi.call(null,(idx + size),cljs.core.chunk_rest.call(null,s)));
} else
{return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s)),mapi.call(null,(idx + 1),cljs.core.rest.call(null,s)));
}
} else
{return null;
}
}),null));
});
return mapi.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__2209__auto___3534 = size;
var i_3535 = 0;
while(true){
if((i_3535 < n__2209__auto___3534))
{var x_3536 = f.call(null,cljs.core._nth.call(null,c,i_3535));
if((x_3536 == null))
{} else
{cljs.core.chunk_append.call(null,b,x_3536);
}
{
var G__3537 = (i_3535 + 1);
i_3535 = G__3537;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),keep.call(null,f,cljs.core.chunk_rest.call(null,s)));
} else
{var x = f.call(null,cljs.core.first.call(null,s));
if((x == null))
{return keep.call(null,f,cljs.core.rest.call(null,s));
} else
{return cljs.core.cons.call(null,x,keep.call(null,f,cljs.core.rest.call(null,s)));
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi = (function keepi(idx,coll__$1){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll__$1);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__2209__auto___3544 = size;
var i_3545 = 0;
while(true){
if((i_3545 < n__2209__auto___3544))
{var x_3546 = f.call(null,(idx + i_3545),cljs.core._nth.call(null,c,i_3545));
if((x_3546 == null))
{} else
{cljs.core.chunk_append.call(null,b,x_3546);
}
{
var G__3547 = (i_3545 + 1);
i_3545 = G__3547;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),keepi.call(null,(idx + size),cljs.core.chunk_rest.call(null,s)));
} else
{var x = f.call(null,idx,cljs.core.first.call(null,s));
if((x == null))
{return keepi.call(null,(idx + 1),cljs.core.rest.call(null,s));
} else
{return cljs.core.cons.call(null,x,keepi.call(null,(idx + 1),cljs.core.rest.call(null,s)));
}
}
} else
{return null;
}
}),null));
});
return keepi.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p.call(null,x);
if(cljs.core.truth_(and__3941__auto__))
{return p.call(null,y);
} else
{return and__3941__auto__;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p.call(null,x);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p.call(null,y);
if(cljs.core.truth_(and__3941__auto____$1))
{return p.call(null,z);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep1__4 = (function() { 
var G__3554__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto__ = ep1.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3941__auto__;
}
})());
};
var G__3554 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3554__delegate.call(this, x, y, z, args);
};
G__3554.cljs$lang$maxFixedArity = 3;
G__3554.cljs$lang$applyTo = (function (arglist__3555){
var x = cljs.core.first(arglist__3555);
var y = cljs.core.first(cljs.core.next(arglist__3555));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3555)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3555)));
return G__3554__delegate(x, y, z, args);
});
G__3554.cljs$lang$arity$variadic = G__3554__delegate;
return G__3554;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep1__0.call(this);
case 1:
return ep1__1.call(this,x);
case 2:
return ep1__2.call(this,x,y);
case 3:
return ep1__3.call(this,x,y,z);
default:
return ep1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.cljs$lang$arity$0 = ep1__0;
ep1.cljs$lang$arity$1 = ep1__1;
ep1.cljs$lang$arity$2 = ep1__2;
ep1.cljs$lang$arity$3 = ep1__3;
ep1.cljs$lang$arity$variadic = ep1__4.cljs$lang$arity$variadic;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto__))
{return p2.call(null,x);
} else
{return and__3941__auto__;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____$2))
{return p2.call(null,y);
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p1.call(null,z);
if(cljs.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____$3))
{var and__3941__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____$4))
{return p2.call(null,z);
} else
{return and__3941__auto____$4;
}
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep2__4 = (function() { 
var G__3556__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto__ = ep2.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.every_QMARK_.call(null,(function (p1__3538_SHARP_){
var and__3941__auto____$1 = p1.call(null,p1__3538_SHARP_);
if(cljs.core.truth_(and__3941__auto____$1))
{return p2.call(null,p1__3538_SHARP_);
} else
{return and__3941__auto____$1;
}
}),args);
} else
{return and__3941__auto__;
}
})());
};
var G__3556 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3556__delegate.call(this, x, y, z, args);
};
G__3556.cljs$lang$maxFixedArity = 3;
G__3556.cljs$lang$applyTo = (function (arglist__3557){
var x = cljs.core.first(arglist__3557);
var y = cljs.core.first(cljs.core.next(arglist__3557));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3557)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3557)));
return G__3556__delegate(x, y, z, args);
});
G__3556.cljs$lang$arity$variadic = G__3556__delegate;
return G__3556;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep2__0.call(this);
case 1:
return ep2__1.call(this,x);
case 2:
return ep2__2.call(this,x,y);
case 3:
return ep2__3.call(this,x,y,z);
default:
return ep2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.cljs$lang$arity$0 = ep2__0;
ep2.cljs$lang$arity$1 = ep2__1;
ep2.cljs$lang$arity$2 = ep2__2;
ep2.cljs$lang$arity$3 = ep2__3;
ep2.cljs$lang$arity$variadic = ep2__4.cljs$lang$arity$variadic;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____$1))
{return p3.call(null,x);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p3.call(null,x);
if(cljs.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____$3))
{var and__3941__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____$4))
{return p3.call(null,y);
} else
{return and__3941__auto____$4;
}
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto__ = p1.call(null,x);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p3.call(null,x);
if(cljs.core.truth_(and__3941__auto____$2))
{var and__3941__auto____$3 = p1.call(null,y);
if(cljs.core.truth_(and__3941__auto____$3))
{var and__3941__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(and__3941__auto____$4))
{var and__3941__auto____$5 = p3.call(null,y);
if(cljs.core.truth_(and__3941__auto____$5))
{var and__3941__auto____$6 = p1.call(null,z);
if(cljs.core.truth_(and__3941__auto____$6))
{var and__3941__auto____$7 = p2.call(null,z);
if(cljs.core.truth_(and__3941__auto____$7))
{return p3.call(null,z);
} else
{return and__3941__auto____$7;
}
} else
{return and__3941__auto____$6;
}
} else
{return and__3941__auto____$5;
}
} else
{return and__3941__auto____$4;
}
} else
{return and__3941__auto____$3;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})());
});
var ep3__4 = (function() { 
var G__3558__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto__ = ep3.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.every_QMARK_.call(null,(function (p1__3539_SHARP_){
var and__3941__auto____$1 = p1.call(null,p1__3539_SHARP_);
if(cljs.core.truth_(and__3941__auto____$1))
{var and__3941__auto____$2 = p2.call(null,p1__3539_SHARP_);
if(cljs.core.truth_(and__3941__auto____$2))
{return p3.call(null,p1__3539_SHARP_);
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
}),args);
} else
{return and__3941__auto__;
}
})());
};
var G__3558 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3558__delegate.call(this, x, y, z, args);
};
G__3558.cljs$lang$maxFixedArity = 3;
G__3558.cljs$lang$applyTo = (function (arglist__3559){
var x = cljs.core.first(arglist__3559);
var y = cljs.core.first(cljs.core.next(arglist__3559));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3559)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3559)));
return G__3558__delegate(x, y, z, args);
});
G__3558.cljs$lang$arity$variadic = G__3558__delegate;
return G__3558;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return ep3__0.call(this);
case 1:
return ep3__1.call(this,x);
case 2:
return ep3__2.call(this,x,y);
case 3:
return ep3__3.call(this,x,y,z);
default:
return ep3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.cljs$lang$arity$0 = ep3__0;
ep3.cljs$lang$arity$1 = ep3__1;
ep3.cljs$lang$arity$2 = ep3__2;
ep3.cljs$lang$arity$3 = ep3__3;
ep3.cljs$lang$arity$variadic = ep3__4.cljs$lang$arity$variadic;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__3560__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3540_SHARP_){
return p1__3540_SHARP_.call(null,x);
}),ps__$1);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3541_SHARP_){
var and__3941__auto__ = p1__3541_SHARP_.call(null,x);
if(cljs.core.truth_(and__3941__auto__))
{return p1__3541_SHARP_.call(null,y);
} else
{return and__3941__auto__;
}
}),ps__$1);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3542_SHARP_){
var and__3941__auto__ = p1__3542_SHARP_.call(null,x);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = p1__3542_SHARP_.call(null,y);
if(cljs.core.truth_(and__3941__auto____$1))
{return p1__3542_SHARP_.call(null,z);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}),ps__$1);
});
var epn__4 = (function() { 
var G__3561__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3941__auto__ = epn.call(null,x,y,z);
if(cljs.core.truth_(and__3941__auto__))
{return cljs.core.every_QMARK_.call(null,(function (p1__3543_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3543_SHARP_,args);
}),ps__$1);
} else
{return and__3941__auto__;
}
})());
};
var G__3561 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3561__delegate.call(this, x, y, z, args);
};
G__3561.cljs$lang$maxFixedArity = 3;
G__3561.cljs$lang$applyTo = (function (arglist__3562){
var x = cljs.core.first(arglist__3562);
var y = cljs.core.first(cljs.core.next(arglist__3562));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3562)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3562)));
return G__3561__delegate(x, y, z, args);
});
G__3561.cljs$lang$arity$variadic = G__3561__delegate;
return G__3561;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return epn__0.call(this);
case 1:
return epn__1.call(this,x);
case 2:
return epn__2.call(this,x,y);
case 3:
return epn__3.call(this,x,y,z);
default:
return epn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.cljs$lang$arity$0 = epn__0;
epn.cljs$lang$arity$1 = epn__1;
epn.cljs$lang$arity$2 = epn__2;
epn.cljs$lang$arity$3 = epn__3;
epn.cljs$lang$arity$variadic = epn__4.cljs$lang$arity$variadic;
return epn;
})()
};
var G__3560 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3560__delegate.call(this, p1, p2, p3, ps);
};
G__3560.cljs$lang$maxFixedArity = 3;
G__3560.cljs$lang$applyTo = (function (arglist__3563){
var p1 = cljs.core.first(arglist__3563);
var p2 = cljs.core.first(cljs.core.next(arglist__3563));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3563)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3563)));
return G__3560__delegate(p1, p2, p3, ps);
});
G__3560.cljs$lang$arity$variadic = G__3560__delegate;
return G__3560;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return every_pred__1.call(this,p1);
case 2:
return every_pred__2.call(this,p1,p2);
case 3:
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.cljs$lang$arity$1 = every_pred__1;
every_pred.cljs$lang$arity$2 = every_pred__2;
every_pred.cljs$lang$arity$3 = every_pred__3;
every_pred.cljs$lang$arity$variadic = every_pred__4.cljs$lang$arity$variadic;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3943__auto__ = p.call(null,x);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3943__auto__ = p.call(null,x);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p.call(null,y);
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__3565__delegate = function (x,y,z,args){
var or__3943__auto__ = sp1.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3565 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3565__delegate.call(this, x, y, z, args);
};
G__3565.cljs$lang$maxFixedArity = 3;
G__3565.cljs$lang$applyTo = (function (arglist__3566){
var x = cljs.core.first(arglist__3566);
var y = cljs.core.first(cljs.core.next(arglist__3566));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3566)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3566)));
return G__3565__delegate(x, y, z, args);
});
G__3565.cljs$lang$arity$variadic = G__3565__delegate;
return G__3565;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp1__0.call(this);
case 1:
return sp1__1.call(this,x);
case 2:
return sp1__2.call(this,x,y);
case 3:
return sp1__3.call(this,x,y,z);
default:
return sp1__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.cljs$lang$arity$0 = sp1__0;
sp1.cljs$lang$arity$1 = sp1__1;
sp1.cljs$lang$arity$2 = sp1__2;
sp1.cljs$lang$arity$3 = sp1__3;
sp1.cljs$lang$arity$variadic = sp1__4.cljs$lang$arity$variadic;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3943__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3943__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3943__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p1.call(null,z);
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____$3))
{return or__3943__auto____$3;
} else
{var or__3943__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____$4))
{return or__3943__auto____$4;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__3567__delegate = function (x,y,z,args){
var or__3943__auto__ = sp2.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.some.call(null,(function (p1__3548_SHARP_){
var or__3943__auto____$1 = p1.call(null,p1__3548_SHARP_);
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return p2.call(null,p1__3548_SHARP_);
}
}),args);
}
};
var G__3567 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3567__delegate.call(this, x, y, z, args);
};
G__3567.cljs$lang$maxFixedArity = 3;
G__3567.cljs$lang$applyTo = (function (arglist__3568){
var x = cljs.core.first(arglist__3568);
var y = cljs.core.first(cljs.core.next(arglist__3568));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3568)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3568)));
return G__3567__delegate(x, y, z, args);
});
G__3567.cljs$lang$arity$variadic = G__3567__delegate;
return G__3567;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp2__0.call(this);
case 1:
return sp2__1.call(this,x);
case 2:
return sp2__2.call(this,x,y);
case 3:
return sp2__3.call(this,x,y,z);
default:
return sp2__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.cljs$lang$arity$0 = sp2__0;
sp2.cljs$lang$arity$1 = sp2__1;
sp2.cljs$lang$arity$2 = sp2__2;
sp2.cljs$lang$arity$3 = sp2__3;
sp2.cljs$lang$arity$variadic = sp2__4.cljs$lang$arity$variadic;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3943__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3943__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p3.call(null,x);
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____$3))
{return or__3943__auto____$3;
} else
{var or__3943__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____$4))
{return or__3943__auto____$4;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3943__auto__ = p1.call(null,x);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p2.call(null,x);
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p3.call(null,x);
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{var or__3943__auto____$3 = p1.call(null,y);
if(cljs.core.truth_(or__3943__auto____$3))
{return or__3943__auto____$3;
} else
{var or__3943__auto____$4 = p2.call(null,y);
if(cljs.core.truth_(or__3943__auto____$4))
{return or__3943__auto____$4;
} else
{var or__3943__auto____$5 = p3.call(null,y);
if(cljs.core.truth_(or__3943__auto____$5))
{return or__3943__auto____$5;
} else
{var or__3943__auto____$6 = p1.call(null,z);
if(cljs.core.truth_(or__3943__auto____$6))
{return or__3943__auto____$6;
} else
{var or__3943__auto____$7 = p2.call(null,z);
if(cljs.core.truth_(or__3943__auto____$7))
{return or__3943__auto____$7;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__4 = (function() { 
var G__3569__delegate = function (x,y,z,args){
var or__3943__auto__ = sp3.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.some.call(null,(function (p1__3549_SHARP_){
var or__3943__auto____$1 = p1.call(null,p1__3549_SHARP_);
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = p2.call(null,p1__3549_SHARP_);
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return p3.call(null,p1__3549_SHARP_);
}
}
}),args);
}
};
var G__3569 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3569__delegate.call(this, x, y, z, args);
};
G__3569.cljs$lang$maxFixedArity = 3;
G__3569.cljs$lang$applyTo = (function (arglist__3570){
var x = cljs.core.first(arglist__3570);
var y = cljs.core.first(cljs.core.next(arglist__3570));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3570)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3570)));
return G__3569__delegate(x, y, z, args);
});
G__3569.cljs$lang$arity$variadic = G__3569__delegate;
return G__3569;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return sp3__0.call(this);
case 1:
return sp3__1.call(this,x);
case 2:
return sp3__2.call(this,x,y);
case 3:
return sp3__3.call(this,x,y,z);
default:
return sp3__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.cljs$lang$arity$0 = sp3__0;
sp3.cljs$lang$arity$1 = sp3__1;
sp3.cljs$lang$arity$2 = sp3__2;
sp3.cljs$lang$arity$3 = sp3__3;
sp3.cljs$lang$arity$variadic = sp3__4.cljs$lang$arity$variadic;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__3571__delegate = function (p1,p2,p3,ps){
var ps__$1 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);
return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some.call(null,(function (p1__3550_SHARP_){
return p1__3550_SHARP_.call(null,x);
}),ps__$1);
});
var spn__2 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3551_SHARP_){
var or__3943__auto__ = p1__3551_SHARP_.call(null,x);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return p1__3551_SHARP_.call(null,y);
}
}),ps__$1);
});
var spn__3 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3552_SHARP_){
var or__3943__auto__ = p1__3552_SHARP_.call(null,x);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = p1__3552_SHARP_.call(null,y);
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{return p1__3552_SHARP_.call(null,z);
}
}
}),ps__$1);
});
var spn__4 = (function() { 
var G__3572__delegate = function (x,y,z,args){
var or__3943__auto__ = spn.call(null,x,y,z);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.some.call(null,(function (p1__3553_SHARP_){
return cljs.core.some.call(null,p1__3553_SHARP_,args);
}),ps__$1);
}
};
var G__3572 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3572__delegate.call(this, x, y, z, args);
};
G__3572.cljs$lang$maxFixedArity = 3;
G__3572.cljs$lang$applyTo = (function (arglist__3573){
var x = cljs.core.first(arglist__3573);
var y = cljs.core.first(cljs.core.next(arglist__3573));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3573)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3573)));
return G__3572__delegate(x, y, z, args);
});
G__3572.cljs$lang$arity$variadic = G__3572__delegate;
return G__3572;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return spn__0.call(this);
case 1:
return spn__1.call(this,x);
case 2:
return spn__2.call(this,x,y);
case 3:
return spn__3.call(this,x,y,z);
default:
return spn__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.cljs$lang$arity$0 = spn__0;
spn.cljs$lang$arity$1 = spn__1;
spn.cljs$lang$arity$2 = spn__2;
spn.cljs$lang$arity$3 = spn__3;
spn.cljs$lang$arity$variadic = spn__4.cljs$lang$arity$variadic;
return spn;
})()
};
var G__3571 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3571__delegate.call(this, p1, p2, p3, ps);
};
G__3571.cljs$lang$maxFixedArity = 3;
G__3571.cljs$lang$applyTo = (function (arglist__3574){
var p1 = cljs.core.first(arglist__3574);
var p2 = cljs.core.first(cljs.core.next(arglist__3574));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3574)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3574)));
return G__3571__delegate(p1, p2, p3, ps);
});
G__3571.cljs$lang$arity$variadic = G__3571__delegate;
return G__3571;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case 1:
return some_fn__1.call(this,p1);
case 2:
return some_fn__2.call(this,p1,p2);
case 3:
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.cljs$lang$arity$variadic(p1,p2,p3, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.cljs$lang$arity$1 = some_fn__1;
some_fn.cljs$lang$arity$2 = some_fn__2;
some_fn.cljs$lang$arity$3 = some_fn__3;
some_fn.cljs$lang$arity$variadic = some_fn__4.cljs$lang$arity$variadic;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__2209__auto___3575 = size;
var i_3576 = 0;
while(true){
if((i_3576 < n__2209__auto___3575))
{cljs.core.chunk_append.call(null,b,f.call(null,cljs.core._nth.call(null,c,i_3576)));
{
var G__3577 = (i_3576 + 1);
i_3576 = G__3577;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),map.call(null,f,cljs.core.chunk_rest.call(null,s)));
} else
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s)),map.call(null,f,cljs.core.rest.call(null,s)));
}
} else
{return null;
}
}),null));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((function (){var and__3941__auto__ = s1;
if(and__3941__auto__)
{return s2;
} else
{return and__3941__auto__;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1),cljs.core.first.call(null,s2)),map.call(null,f,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2)));
} else
{return null;
}
}),null));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
var s3 = cljs.core.seq.call(null,c3);
if((function (){var and__3941__auto__ = s1;
if(and__3941__auto__)
{var and__3941__auto____$1 = s2;
if(and__3941__auto____$1)
{return s3;
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1),cljs.core.first.call(null,s2),cljs.core.first.call(null,s3)),map.call(null,f,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2),cljs.core.rest.call(null,s3)));
} else
{return null;
}
}),null));
});
var map__5 = (function() { 
var G__3578__delegate = function (f,c1,c2,c3,colls){
var step = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss = map.call(null,cljs.core.seq,cs);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss),step.call(null,map.call(null,cljs.core.rest,ss)));
} else
{return null;
}
}),null));
});
return map.call(null,(function (p1__3564_SHARP_){
return cljs.core.apply.call(null,f,p1__3564_SHARP_);
}),step.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3578 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3578__delegate.call(this, f, c1, c2, c3, colls);
};
G__3578.cljs$lang$maxFixedArity = 4;
G__3578.cljs$lang$applyTo = (function (arglist__3579){
var f = cljs.core.first(arglist__3579);
var c1 = cljs.core.first(cljs.core.next(arglist__3579));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3579)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3579))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3579))));
return G__3578__delegate(f, c1, c2, c3, colls);
});
G__3578.cljs$lang$arity$variadic = G__3578__delegate;
return G__3578;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return map__2.call(this,f,c1);
case 3:
return map__3.call(this,f,c1,c2);
case 4:
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.cljs$lang$arity$2 = map__2;
map.cljs$lang$arity$3 = map__3;
map.cljs$lang$arity$4 = map__4;
map.cljs$lang$arity$variadic = map__5.cljs$lang$arity$variadic;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if((n > 0))
{var temp__4092__auto__ = cljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return cljs.core.cons.call(null,cljs.core.first.call(null,s),take.call(null,(n - 1),cljs.core.rest.call(null,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step = (function (n__$1,coll__$1){
while(true){
var s = cljs.core.seq.call(null,coll__$1);
if(cljs.core.truth_((function (){var and__3941__auto__ = (n__$1 > 0);
if(and__3941__auto__)
{return s;
} else
{return and__3941__auto__;
}
})()))
{{
var G__3580 = (n__$1 - 1);
var G__3581 = cljs.core.rest.call(null,s);
n__$1 = G__3580;
coll__$1 = G__3581;
continue;
}
} else
{return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step.call(null,n,coll);
}),null));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case 1:
return drop_last__1.call(this,n);
case 2:
return drop_last__2.call(this,n,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_last.cljs$lang$arity$1 = drop_last__1;
drop_last.cljs$lang$arity$2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s = cljs.core.seq.call(null,coll);
var lead = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));
while(true){
if(lead)
{{
var G__3582 = cljs.core.next.call(null,s);
var G__3583 = cljs.core.next.call(null,lead);
s = G__3582;
lead = G__3583;
continue;
}
} else
{return s;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step = (function (pred__$1,coll__$1){
while(true){
var s = cljs.core.seq.call(null,coll__$1);
if(cljs.core.truth_((function (){var and__3941__auto__ = s;
if(and__3941__auto__)
{return pred__$1.call(null,cljs.core.first.call(null,s));
} else
{return and__3941__auto__;
}
})()))
{{
var G__3584 = pred__$1;
var G__3585 = cljs.core.rest.call(null,s);
pred__$1 = G__3584;
coll__$1 = G__3585;
continue;
}
} else
{return s;
}
break;
}
});
return (new cljs.core.LazySeq(null,false,(function (){
return step.call(null,pred,coll);
}),null));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return cljs.core.concat.call(null,s,cycle.call(null,s));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)], true);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
}),null));
});
var repeat__2 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case 1:
return repeat__1.call(this,n);
case 2:
return repeat__2.call(this,n,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeat.cljs$lang$arity$1 = repeat__1;
repeat.cljs$lang$arity$2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
}),null));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case 1:
return repeatedly__1.call(this,n);
case 2:
return repeatedly__2.call(this,n,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
repeatedly.cljs$lang$arity$1 = repeatedly__1;
repeatedly.cljs$lang$arity$2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}),null)));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((function (){var and__3941__auto__ = s1;
if(and__3941__auto__)
{return s2;
} else
{return and__3941__auto__;
}
})())
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),interleave.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else
{return null;
}
}),null));
});
var interleave__3 = (function() { 
var G__3586__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss)));
} else
{return null;
}
}),null));
};
var G__3586 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3586__delegate.call(this, c1, c2, colls);
};
G__3586.cljs$lang$maxFixedArity = 2;
G__3586.cljs$lang$applyTo = (function (arglist__3587){
var c1 = cljs.core.first(arglist__3587);
var c2 = cljs.core.first(cljs.core.next(arglist__3587));
var colls = cljs.core.rest(cljs.core.next(arglist__3587));
return G__3586__delegate(c1, c2, colls);
});
G__3586.cljs$lang$arity$variadic = G__3586__delegate;
return G__3586;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return interleave__2.call(this,c1,c2);
default:
return interleave__3.cljs$lang$arity$variadic(c1,c2, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.cljs$lang$arity$2 = interleave__2;
interleave.cljs$lang$arity$variadic = interleave__3.cljs$lang$arity$variadic;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat = (function cat(coll,colls__$1){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto__ = cljs.core.seq.call(null,coll);
if(temp__4090__auto__)
{var coll__$1 = temp__4090__auto__;
return cljs.core.cons.call(null,cljs.core.first.call(null,coll__$1),cat.call(null,cljs.core.rest.call(null,coll__$1),colls__$1));
} else
{if(cljs.core.seq.call(null,colls__$1))
{return cat.call(null,cljs.core.first.call(null,colls__$1),cljs.core.rest.call(null,colls__$1));
} else
{return null;
}
}
}),null));
});
return cat.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3 = (function() { 
var G__3588__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3588 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3588__delegate.call(this, f, coll, colls);
};
G__3588.cljs$lang$maxFixedArity = 2;
G__3588.cljs$lang$applyTo = (function (arglist__3589){
var f = cljs.core.first(arglist__3589);
var coll = cljs.core.first(cljs.core.next(arglist__3589));
var colls = cljs.core.rest(cljs.core.next(arglist__3589));
return G__3588__delegate(f, coll, colls);
});
G__3588.cljs$lang$arity$variadic = G__3588__delegate;
return G__3588;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.cljs$lang$arity$variadic(f,coll, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.cljs$lang$arity$2 = mapcat__2;
mapcat.cljs$lang$arity$variadic = mapcat__3.cljs$lang$arity$variadic;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s))
{var c = cljs.core.chunk_first.call(null,s);
var size = cljs.core.count.call(null,c);
var b = cljs.core.chunk_buffer.call(null,size);
var n__2209__auto___3590 = size;
var i_3591 = 0;
while(true){
if((i_3591 < n__2209__auto___3590))
{if(cljs.core.truth_(pred.call(null,cljs.core._nth.call(null,c,i_3591))))
{cljs.core.chunk_append.call(null,b,cljs.core._nth.call(null,c,i_3591));
} else
{}
{
var G__3592 = (i_3591 + 1);
i_3591 = G__3592;
continue;
}
} else
{}
break;
}
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b),filter.call(null,pred,cljs.core.chunk_rest.call(null,s)));
} else
{var f = cljs.core.first.call(null,s);
var r = cljs.core.rest.call(null,s);
if(cljs.core.truth_(pred.call(null,f)))
{return cljs.core.cons.call(null,f,filter.call(null,pred,r));
} else
{return filter.call(null,pred,r);
}
}
} else
{return null;
}
}),null));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
}),null));
});
return walk.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3593_SHARP_){
return !(cljs.core.sequential_QMARK_.call(null,p1__3593_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
if((function (){var G__3595 = to;
if(G__3595)
{if((function (){var or__3943__auto__ = (G__3595.cljs$lang$protocol_mask$partition1$ & 4);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3595.cljs$core$IEditableCollection$;
}
})())
{return true;
} else
{if((!G__3595.cljs$lang$protocol_mask$partition1$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__3595);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IEditableCollection,G__3595);
}
})())
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core.transient$.call(null,to),from));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,to,from);
}
});
/**
* Returns a vector consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.mapv = (function() {
var mapv = null;
var mapv__2 = (function (f,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
return cljs.core.conj_BANG_.call(null,v,f.call(null,o));
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
var mapv__3 = (function (f,c1,c2){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2));
});
var mapv__4 = (function (f,c1,c2,c3){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,f,c1,c2,c3));
});
var mapv__5 = (function() { 
var G__3596__delegate = function (f,c1,c2,c3,colls){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.apply.call(null,cljs.core.map,f,c1,c2,c3,colls));
};
var G__3596 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3596__delegate.call(this, f, c1, c2, c3, colls);
};
G__3596.cljs$lang$maxFixedArity = 4;
G__3596.cljs$lang$applyTo = (function (arglist__3597){
var f = cljs.core.first(arglist__3597);
var c1 = cljs.core.first(cljs.core.next(arglist__3597));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3597)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3597))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3597))));
return G__3596__delegate(f, c1, c2, c3, colls);
});
G__3596.cljs$lang$arity$variadic = G__3596__delegate;
return G__3596;
})()
;
mapv = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case 2:
return mapv__2.call(this,f,c1);
case 3:
return mapv__3.call(this,f,c1,c2);
case 4:
return mapv__4.call(this,f,c1,c2,c3);
default:
return mapv__5.cljs$lang$arity$variadic(f,c1,c2,c3, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapv.cljs$lang$maxFixedArity = 4;
mapv.cljs$lang$applyTo = mapv__5.cljs$lang$applyTo;
mapv.cljs$lang$arity$2 = mapv__2;
mapv.cljs$lang$arity$3 = mapv__3;
mapv.cljs$lang$arity$4 = mapv__4;
mapv.cljs$lang$arity$variadic = mapv__5.cljs$lang$arity$variadic;
return mapv;
})()
;
/**
* Returns a vector of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filterv = (function filterv(pred,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (v,o){
if(cljs.core.truth_(pred.call(null,o)))
{return cljs.core.conj_BANG_.call(null,v,o);
} else
{return v;
}
}),cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
var p = cljs.core.take.call(null,n,s);
if((n === cljs.core.count.call(null,p)))
{return cljs.core.cons.call(null,p,partition.call(null,n,step,cljs.core.drop.call(null,step,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
var p = cljs.core.take.call(null,n,s);
if((n === cljs.core.count.call(null,p)))
{return cljs.core.cons.call(null,p,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p,pad)));
}
} else
{return null;
}
}),null));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case 2:
return partition__2.call(this,n,step);
case 3:
return partition__3.call(this,n,step,pad);
case 4:
return partition__4.call(this,n,step,pad,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$lang$arity$2 = partition__2;
partition.cljs$lang$arity$3 = partition__3;
partition.cljs$lang$arity$4 = partition__4;
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of keys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__2 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel = cljs.core.lookup_sentinel;
var m__$1 = m;
var ks__$1 = cljs.core.seq.call(null,ks);
while(true){
if(ks__$1)
{var m__$2 = cljs.core._lookup.call(null,m__$1,cljs.core.first.call(null,ks__$1),sentinel);
if((sentinel === m__$2))
{return not_found;
} else
{{
var G__3598 = sentinel;
var G__3599 = m__$2;
var G__3600 = cljs.core.next.call(null,ks__$1);
sentinel = G__3598;
m__$1 = G__3599;
ks__$1 = G__3600;
continue;
}
}
} else
{return m__$1;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case 2:
return get_in__2.call(this,m,ks);
case 3:
return get_in__3.call(this,m,ks,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_in.cljs$lang$arity$2 = get_in__2;
get_in.cljs$lang$arity$3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3601,v){
var vec__3603 = p__3601;
var k = cljs.core.nth.call(null,vec__3603,0,null);
var ks = cljs.core.nthnext.call(null,vec__3603,1);
if(cljs.core.truth_(ks))
{return cljs.core.assoc.call(null,m,k,assoc_in.call(null,cljs.core._lookup.call(null,m,k,null),ks,v));
} else
{return cljs.core.assoc.call(null,m,k,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3604,f,args){
var vec__3606 = p__3604;
var k = cljs.core.nth.call(null,vec__3606,0,null);
var ks = cljs.core.nthnext.call(null,vec__3606,1);
if(cljs.core.truth_(ks))
{return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,update_in,cljs.core._lookup.call(null,m,k,null),ks,f,args));
} else
{return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core._lookup.call(null,m,k,null),args));
}
};
var update_in = function (m,p__3604,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3604, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3607){
var m = cljs.core.first(arglist__3607);
var p__3604 = cljs.core.first(cljs.core.next(arglist__3607));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3607)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3607)));
return update_in__delegate(m, p__3604, f, args);
});
update_in.cljs$lang$arity$variadic = update_in__delegate;
return update_in;
})()
;
goog.provide('cljs.core.Vector');

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array,__hash){
this.meta = meta;
this.array = array;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Vector.cljs$lang$type = true;
cljs.core.Vector.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/Vector");
});
cljs.core.Vector.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var new_array = self__.array.slice();
(new_array[k] = v);
return (new cljs.core.Vector(self__.meta,new_array,null));
});
cljs.core.Vector.prototype.call = (function() {
var G__3612 = null;
var G__3612__2 = (function (this_sym3610,k){
var self__ = this;
var this_sym3610__$1 = this;
var coll = this_sym3610__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3612__3 = (function (this_sym3611,k,not_found){
var self__ = this;
var this_sym3611__$1 = this;
var coll = this_sym3611__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3612 = function(this_sym3611,k,not_found){
switch(arguments.length){
case 2:
return G__3612__2.call(this,this_sym3611,k);
case 3:
return G__3612__3.call(this,this_sym3611,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3612;
})()
;
cljs.core.Vector.prototype.apply = (function (this_sym3608,args3609){
var self__ = this;
return this_sym3608.call.apply(this_sym3608,[this_sym3608].concat(args3609.slice()));
});
cljs.core.Vector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
var new_array = self__.array.slice();
new_array.push(o);
return (new cljs.core.Vector(self__.meta,new_array,null));
});
cljs.core.Vector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
return cljs.core.ci_reduce.call(null,self__.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var self__ = this;
return cljs.core.ci_reduce.call(null,self__.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.array.length > 0))
{var vector_seq = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < self__.array.length))
{return cljs.core.cons.call(null,(self__.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
}),null));
});
return vector_seq.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
var count = self__.array.length;
if((count > 0))
{return (self__.array[(count - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.array.length > 0))
{var new_array = self__.array.slice();
new_array.pop();
return (new cljs.core.Vector(self__.meta,new_array,null));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.Vector(meta__$1,self__.array,self__.__hash));
});
cljs.core.Vector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.array.length);
} else
{return and__3941__auto__;
}
})())
{return (self__.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.array.length);
} else
{return and__3941__auto__;
}
})())
{return (self__.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,self__.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[],0));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs,null));
});
goog.provide('cljs.core.VectorNode');

/**
* @constructor
*/
cljs.core.VectorNode = (function (edit,arr){
this.edit = edit;
this.arr = arr;
})
cljs.core.VectorNode.cljs$lang$type = true;
cljs.core.VectorNode.cljs$lang$ctorPrSeq = (function (this__1990__auto__){
return cljs.core.list.call(null,"cljs.core/VectorNode");
});
cljs.core.VectorNode.cljs$lang$ctorPrWriter = (function (this__1990__auto__,writer__1991__auto__,opts__1992__auto__){
return cljs.core._write.call(null,writer__1991__auto__,"cljs.core/VectorNode");
});
cljs.core.pv_fresh_node = (function pv_fresh_node(edit){
return (new cljs.core.VectorNode(edit,cljs.core.make_array.call(null,32)));
});
cljs.core.pv_aget = (function pv_aget(node,idx){
return (node.arr[idx]);
});
cljs.core.pv_aset = (function pv_aset(node,idx,val){
return (node.arr[idx] = val);
});
cljs.core.pv_clone_node = (function pv_clone_node(node){
return (new cljs.core.VectorNode(node.edit,node.arr.slice()));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt = pv.cnt;
if((cnt < 32))
{return 0;
} else
{return (((cnt - 1) >>> 5) << 5);
}
});
cljs.core.new_path = (function new_path(edit,level,node){
var ll = level;
var ret = node;
while(true){
if((ll === 0))
{return ret;
} else
{var embed = ret;
var r = cljs.core.pv_fresh_node.call(null,edit);
var _ = cljs.core.pv_aset.call(null,r,0,embed);
{
var G__3613 = (ll - 5);
var G__3614 = r;
ll = G__3613;
ret = G__3614;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret = cljs.core.pv_clone_node.call(null,parent);
var subidx = (((pv.cnt - 1) >>> level) & 31);
if((5 === level))
{cljs.core.pv_aset.call(null,ret,subidx,tailnode);
return ret;
} else
{var child = cljs.core.pv_aget.call(null,parent,subidx);
if(!((child == null)))
{var node_to_insert = push_tail.call(null,pv,(level - 5),child,tailnode);
cljs.core.pv_aset.call(null,ret,subidx,node_to_insert);
return ret;
} else
{var node_to_insert = cljs.core.new_path.call(null,null,(level - 5),tailnode);
cljs.core.pv_aset.call(null,ret,subidx,node_to_insert);
return ret;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if((function (){var and__3941__auto__ = (0 <= i);
if(and__3941__auto__)
{return (i < pv.cnt);
} else
{return and__3941__auto__;
}
})())
{if((i >= cljs.core.tail_off.call(null,pv)))
{return pv.tail;
} else
{var node = pv.root;
var level = pv.shift;
while(true){
if((level > 0))
{{
var G__3615 = cljs.core.pv_aget.call(null,node,((i >>> level) & 31));
var G__3616 = (level - 5);
node = G__3615;
level = G__3616;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in vector of length "),cljs.core.str(pv.cnt)].join('')));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret = cljs.core.pv_clone_node.call(null,node);
if((level === 0))
{cljs.core.pv_aset.call(null,ret,(i & 31),val);
return ret;
} else
{var subidx = ((i >>> level) & 31);
cljs.core.pv_aset.call(null,ret,subidx,do_assoc.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx),i,val));
return ret;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx = (((pv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child = pop_tail.call(null,pv,(level - 5),cljs.core.pv_aget.call(null,node,subidx));
if((function (){var and__3941__auto__ = (new_child == null);
if(and__3941__auto__)
{return (subidx === 0);
} else
{return and__3941__auto__;
}
})())
{return null;
} else
{var ret = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret,subidx,new_child);
return ret;
}
} else
{if((subidx === 0))
{return null;
} else
{if("\uFDD0'else")
{var ret = cljs.core.pv_clone_node.call(null,node);
cljs.core.pv_aset.call(null,ret,subidx,null);
return ret;
} else
{return null;
}
}
}
});
goog.provide('cljs.core.PersistentVector');

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail,__hash){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 167668511;
})
cljs.core.PersistentVector.cljs$lang$type = true;
cljs.core.PersistentVector.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljs.core.TransientVector(self__.cnt,self__.shift,cljs.core.tv_editable_root.call(null,self__.root),cljs.core.tv_editable_tail.call(null,self__.tail)));
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= k);
if(and__3941__auto__)
{return (k < self__.cnt);
} else
{return and__3941__auto__;
}
})())
{if((cljs.core.tail_off.call(null,coll) <= k))
{var new_tail = self__.tail.slice();
(new_tail[(k & 31)] = v);
return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,self__.root,new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,self__.cnt,self__.shift,cljs.core.do_assoc.call(null,coll,self__.shift,self__.root,k,v),self__.tail,null));
}
} else
{if((k === self__.cnt))
{return coll.cljs$core$ICollection$_conj$arity$2(coll,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(k),cljs.core.str(" out of bounds  [0,"),cljs.core.str(self__.cnt),cljs.core.str("]")].join('')));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.call = (function() {
var G__3621 = null;
var G__3621__2 = (function (this_sym3619,k){
var self__ = this;
var this_sym3619__$1 = this;
var coll = this_sym3619__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3621__3 = (function (this_sym3620,k,not_found){
var self__ = this;
var this_sym3620__$1 = this;
var coll = this_sym3620__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3621 = function(this_sym3620,k,not_found){
switch(arguments.length){
case 2:
return G__3621__2.call(this,this_sym3620,k);
case 3:
return G__3621__3.call(this,this_sym3620,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3621;
})()
;
cljs.core.PersistentVector.prototype.apply = (function (this_sym3617,args3618){
var self__ = this;
return this_sym3617.call.apply(this_sym3617,[this_sym3617].concat(args3618.slice()));
});
cljs.core.PersistentVector.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (v,f,init){
var self__ = this;
var step_init = [0,init];
var i = 0;
while(true){
if((i < self__.cnt))
{var arr = cljs.core.array_for.call(null,v,i);
var len = arr.length;
var init__$1 = (function (){var j = 0;
var init__$1 = (step_init[1]);
while(true){
if((j < len))
{var init__$2 = f.call(null,init__$1,(j + i),(arr[j]));
if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return init__$2;
} else
{{
var G__3622 = (j + 1);
var G__3623 = init__$2;
j = G__3622;
init__$1 = G__3623;
continue;
}
}
} else
{(step_init[0] = len);
(step_init[1] = init__$1);
return init__$1;
}
break;
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{{
var G__3624 = (i + (step_init[0]));
i = G__3624;
continue;
}
}
} else
{return (step_init[1]);
}
break;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
if(((self__.cnt - cljs.core.tail_off.call(null,coll)) < 32))
{var new_tail = self__.tail.slice();
new_tail.push(o);
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + 1),self__.shift,self__.root,new_tail,null));
} else
{var root_overflow_QMARK_ = ((self__.cnt >>> 5) > (1 << self__.shift));
var new_shift = ((root_overflow_QMARK_)?(self__.shift + 5):self__.shift);
var new_root = ((root_overflow_QMARK_)?(function (){var n_r = cljs.core.pv_fresh_node.call(null,null);
cljs.core.pv_aset.call(null,n_r,0,self__.root);
cljs.core.pv_aset.call(null,n_r,1,cljs.core.new_path.call(null,null,self__.shift,(new cljs.core.VectorNode(null,self__.tail))));
return n_r;
})():cljs.core.push_tail.call(null,coll,self__.shift,self__.root,(new cljs.core.VectorNode(null,self__.tail))));
return (new cljs.core.PersistentVector(self__.meta,(self__.cnt + 1),new_shift,new_root,[o],null));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return (new cljs.core.RSeq(coll,(self__.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (coll){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (v,f){
var self__ = this;
return cljs.core.ci_reduce.call(null,v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (v,f,start){
var self__ = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt === 0))
{return null;
} else
{return cljs.core.chunked_seq.call(null,coll,0,0);
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,(self__.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
} else
{if((1 < (self__.cnt - cljs.core.tail_off.call(null,coll))))
{return (new cljs.core.PersistentVector(self__.meta,(self__.cnt - 1),self__.shift,self__.root,self__.tail.slice(0,-1),null));
} else
{if("\uFDD0'else")
{var new_tail = cljs.core.array_for.call(null,coll,(self__.cnt - 2));
var nr = cljs.core.pop_tail.call(null,coll,self__.shift,self__.root);
var new_root = (((nr == null))?cljs.core.PersistentVector.EMPTY_NODE:nr);
var cnt_1 = (self__.cnt - 1);
if((function (){var and__3941__auto__ = (5 < self__.shift);
if(and__3941__auto__)
{return (cljs.core.pv_aget.call(null,new_root,1) == null);
} else
{return and__3941__auto__;
}
})())
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,(self__.shift - 5),cljs.core.pv_aget.call(null,new_root,0),new_tail,null));
} else
{return (new cljs.core.PersistentVector(self__.meta,cnt_1,self__.shift,new_root,new_tail,null));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentVector(meta__$1,self__.cnt,self__.shift,self__.root,self__.tail,self__.__hash));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.cnt);
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.pv_fresh_node.call(null,null);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[],0));
cljs.core.PersistentVector.fromArray = (function (xs,no_clone){
var l = xs.length;
var xs__$1 = (((no_clone === true))?xs:xs.slice());
if((l < 32))
{return (new cljs.core.PersistentVector(null,l,5,cljs.core.PersistentVector.EMPTY_NODE,xs__$1,null));
} else
{var node = xs__$1.slice(0,32);
var v = (new cljs.core.PersistentVector(null,32,5,cljs.core.PersistentVector.EMPTY_NODE,node,null));
var i = 32;
var out = cljs.core._as_transient.call(null,v);
while(true){
if((i < l))
{{
var G__3625 = (i + 1);
var G__3626 = cljs.core.conj_BANG_.call(null,out,(xs__$1[i]));
i = G__3625;
out = G__3626;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
}
});
cljs.core.vec = (function vec(coll){
return cljs.core._persistent_BANG_.call(null,cljs.core.reduce.call(null,cljs.core._conj_BANG_,cljs.core._as_transient.call(null,cljs.core.PersistentVector.EMPTY),coll));
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3627){
var args = cljs.core.seq(arglist__3627);;
return vector__delegate(args);
});
vector.cljs$lang$arity$variadic = vector__delegate;
return vector;
})()
;
goog.provide('cljs.core.ChunkedSeq');

/**
* @constructor
*/
cljs.core.ChunkedSeq = (function (vec,node,i,off,meta,__hash){
this.vec = vec;
this.node = node;
this.i = i;
this.off = off;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 31719660;
this.cljs$lang$protocol_mask$partition1$ = 1536;
})
cljs.core.ChunkedSeq.cljs$lang$type = true;
cljs.core.ChunkedSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/ChunkedSeq");
});
cljs.core.ChunkedSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$INext$_next$arity$1 = (function (coll){
var self__ = this;
if(((self__.off + 1) < self__.node.length))
{var s = cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));
if((s == null))
{return null;
} else
{return s;
}
} else
{return coll.cljs$core$IChunkedNext$_chunked_next$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return (self__.node[self__.off]);
});
cljs.core.ChunkedSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if(((self__.off + 1) < self__.node.length))
{var s = cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,(self__.off + 1));
if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
} else
{return coll.cljs$core$IChunkedSeq$_chunked_rest$arity$1(coll);
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedNext$_chunked_next$arity$1 = (function (coll){
var self__ = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?cljs.core.chunked_seq.call(null,self__.vec,(self__.i + l),0):null);
if((s == null))
{return null;
} else
{return s;
}
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,m){
var self__ = this;
return cljs.core.chunked_seq.call(null,self__.vec,self__.node,self__.i,self__.off,m);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IWithMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.ChunkedSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,self__.meta);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core.array_chunk.call(null,self__.node,self__.off);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IChunkedSeq$_chunked_rest$arity$1 = (function (coll){
var self__ = this;
var l = self__.node.length;
var s = ((((self__.i + l) < cljs.core._count.call(null,self__.vec)))?cljs.core.chunked_seq.call(null,self__.vec,(self__.i + l),0):null);
if((s == null))
{return cljs.core.List.EMPTY;
} else
{return s;
}
});
cljs.core.chunked_seq = (function() {
var chunked_seq = null;
var chunked_seq__3 = (function (vec,i,off){
return chunked_seq.call(null,vec,cljs.core.array_for.call(null,vec,i),i,off,null);
});
var chunked_seq__4 = (function (vec,node,i,off){
return chunked_seq.call(null,vec,node,i,off,null);
});
var chunked_seq__5 = (function (vec,node,i,off,meta){
return (new cljs.core.ChunkedSeq(vec,node,i,off,meta,null));
});
chunked_seq = function(vec,node,i,off,meta){
switch(arguments.length){
case 3:
return chunked_seq__3.call(this,vec,node,i);
case 4:
return chunked_seq__4.call(this,vec,node,i,off);
case 5:
return chunked_seq__5.call(this,vec,node,i,off,meta);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chunked_seq.cljs$lang$arity$3 = chunked_seq__3;
chunked_seq.cljs$lang$arity$4 = chunked_seq__4;
chunked_seq.cljs$lang$arity$5 = chunked_seq__5;
return chunked_seq;
})()
;
goog.provide('cljs.core.Subvec');

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end,__hash){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32400159;
})
cljs.core.Subvec.cljs$lang$type = true;
cljs.core.Subvec.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/Subvec");
});
cljs.core.Subvec.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,key,val){
var self__ = this;
var v_pos = (self__.start + key);
return (new cljs.core.Subvec(self__.meta,cljs.core._assoc.call(null,self__.v,v_pos,val),self__.start,((self__.end > (v_pos + 1)) ? self__.end : (v_pos + 1)),null));
});
cljs.core.Subvec.prototype.call = (function() {
var G__3632 = null;
var G__3632__2 = (function (this_sym3630,k){
var self__ = this;
var this_sym3630__$1 = this;
var coll = this_sym3630__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3632__3 = (function (this_sym3631,k,not_found){
var self__ = this;
var this_sym3631__$1 = this;
var coll = this_sym3631__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3632 = function(this_sym3631,k,not_found){
switch(arguments.length){
case 2:
return G__3632__2.call(this,this_sym3631,k);
case 3:
return G__3632__3.call(this,this_sym3631,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3632;
})()
;
cljs.core.Subvec.prototype.apply = (function (this_sym3628,args3629){
var self__ = this;
return this_sym3628.call.apply(this_sym3628,[this_sym3628].concat(args3629.slice()));
});
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.Subvec(self__.meta,cljs.core._assoc_n.call(null,self__.v,self__.end,o),self__.start,(self__.end + 1),null));
});
cljs.core.Subvec.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (coll,f){
var self__ = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (coll,f,start__$1){
var self__ = this;
return cljs.core.ci_reduce.call(null,coll,f,start__$1);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var subvec_seq = (function subvec_seq(i){
if((i === self__.end))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,self__.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}),null)));
}
});
return subvec_seq.call(null,self__.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return (self__.end - self__.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return cljs.core._nth.call(null,self__.v,(self__.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if((self__.start === self__.end))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(self__.meta,self__.v,self__.start,(self__.end - 1),null));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (coll,n,val){
var self__ = this;
return coll.cljs$core$IAssociative$_assoc$arity$3(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.Subvec(meta__$1,self__.v,self__.start,self__.end,self__.__hash));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
return cljs.core._nth.call(null,self__.v,(self__.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
return cljs.core._nth.call(null,self__.v,(self__.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,self__.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end,null));
});
subvec = function(v,start,end){
switch(arguments.length){
case 2:
return subvec__2.call(this,v,start);
case 3:
return subvec__3.call(this,v,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subvec.cljs$lang$arity$2 = subvec__2;
subvec.cljs$lang$arity$3 = subvec__3;
return subvec;
})()
;
cljs.core.tv_ensure_editable = (function tv_ensure_editable(edit,node){
if((edit === node.edit))
{return node;
} else
{return (new cljs.core.VectorNode(edit,node.arr.slice()));
}
});
cljs.core.tv_editable_root = (function tv_editable_root(node){
return (new cljs.core.VectorNode({},node.arr.slice()));
});
cljs.core.tv_editable_tail = (function tv_editable_tail(tl){
var ret = cljs.core.make_array.call(null,32);
cljs.core.array_copy.call(null,tl,0,ret,0,tl.length);
return ret;
});
cljs.core.tv_push_tail = (function tv_push_tail(tv,level,parent,tail_node){
var ret = cljs.core.tv_ensure_editable.call(null,tv.root.edit,parent);
var subidx = (((tv.cnt - 1) >>> level) & 31);
cljs.core.pv_aset.call(null,ret,subidx,(((level === 5))?tail_node:(function (){var child = cljs.core.pv_aget.call(null,ret,subidx);
if(!((child == null)))
{return tv_push_tail.call(null,tv,(level - 5),child,tail_node);
} else
{return cljs.core.new_path.call(null,tv.root.edit,(level - 5),tail_node);
}
})()));
return ret;
});
cljs.core.tv_pop_tail = (function tv_pop_tail(tv,level,node){
var node__$1 = cljs.core.tv_ensure_editable.call(null,tv.root.edit,node);
var subidx = (((tv.cnt - 2) >>> level) & 31);
if((level > 5))
{var new_child = tv_pop_tail.call(null,tv,(level - 5),cljs.core.pv_aget.call(null,node__$1,subidx));
if((function (){var and__3941__auto__ = (new_child == null);
if(and__3941__auto__)
{return (subidx === 0);
} else
{return and__3941__auto__;
}
})())
{return null;
} else
{cljs.core.pv_aset.call(null,node__$1,subidx,new_child);
return node__$1;
}
} else
{if((subidx === 0))
{return null;
} else
{if("\uFDD0'else")
{cljs.core.pv_aset.call(null,node__$1,subidx,null);
return node__$1;
} else
{return null;
}
}
}
});
cljs.core.editable_array_for = (function editable_array_for(tv,i){
if((function (){var and__3941__auto__ = (0 <= i);
if(and__3941__auto__)
{return (i < tv.cnt);
} else
{return and__3941__auto__;
}
})())
{if((i >= cljs.core.tail_off.call(null,tv)))
{return tv.tail;
} else
{var root = tv.root;
var node = root;
var level = tv.shift;
while(true){
if((level > 0))
{{
var G__3633 = cljs.core.tv_ensure_editable.call(null,root.edit,cljs.core.pv_aget.call(null,node,((i >>> level) & 31)));
var G__3634 = (level - 5);
node = G__3633;
level = G__3634;
continue;
}
} else
{return node.arr;
}
break;
}
}
} else
{throw (new Error([cljs.core.str("No item "),cljs.core.str(i),cljs.core.str(" in transient vector of length "),cljs.core.str(tv.cnt)].join('')));
}
});
goog.provide('cljs.core.TransientVector');

/**
* @constructor
*/
cljs.core.TransientVector = (function (cnt,shift,root,tail){
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
this.cljs$lang$protocol_mask$partition0$ = 275;
this.cljs$lang$protocol_mask$partition1$ = 88;
})
cljs.core.TransientVector.cljs$lang$type = true;
cljs.core.TransientVector.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/TransientVector");
});
cljs.core.TransientVector.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/TransientVector");
});
cljs.core.TransientVector.prototype.call = (function() {
var G__3639 = null;
var G__3639__2 = (function (this_sym3637,k){
var self__ = this;
var this_sym3637__$1 = this;
var coll = this_sym3637__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3639__3 = (function (this_sym3638,k,not_found){
var self__ = this;
var this_sym3638__$1 = this;
var coll = this_sym3638__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3639 = function(this_sym3638,k,not_found){
switch(arguments.length){
case 2:
return G__3639__2.call(this,this_sym3638,k);
case 3:
return G__3639__3.call(this,this_sym3638,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3639;
})()
;
cljs.core.TransientVector.prototype.apply = (function (this_sym3635,args3636){
var self__ = this;
return this_sym3635.call.apply(this_sym3635,[this_sym3635].concat(args3636.slice()));
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,null);
});
cljs.core.TransientVector.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
return coll.cljs$core$IIndexed$_nth$arity$3(coll,k,not_found);
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var self__ = this;
if(self__.root.edit)
{return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
} else
{throw (new Error("nth after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.cnt);
} else
{return and__3941__auto__;
}
})())
{return coll.cljs$core$IIndexed$_nth$arity$2(coll,n);
} else
{return not_found;
}
});
cljs.core.TransientVector.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if(self__.root.edit)
{return self__.cnt;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3 = (function (tcoll,n,val){
var self__ = this;
if(self__.root.edit)
{if((function (){var and__3941__auto__ = (0 <= n);
if(and__3941__auto__)
{return (n < self__.cnt);
} else
{return and__3941__auto__;
}
})())
{if((cljs.core.tail_off.call(null,tcoll) <= n))
{(self__.tail[(n & 31)] = val);
return tcoll;
} else
{var new_root = (function go(level,node){
var node__$1 = cljs.core.tv_ensure_editable.call(null,self__.root.edit,node);
if((level === 0))
{cljs.core.pv_aset.call(null,node__$1,(n & 31),val);
return node__$1;
} else
{var subidx = ((n >>> level) & 31);
cljs.core.pv_aset.call(null,node__$1,subidx,go.call(null,(level - 5),cljs.core.pv_aget.call(null,node__$1,subidx)));
return node__$1;
}
}).call(null,self__.shift,self__.root);
self__.root = new_root;
return tcoll;
}
} else
{if((n === self__.cnt))
{return tcoll.cljs$core$ITransientCollection$_conj_BANG_$arity$2(tcoll,val);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Index "),cljs.core.str(n),cljs.core.str(" out of bounds for TransientVector of length"),cljs.core.str(self__.cnt)].join('')));
} else
{return null;
}
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientVector$_pop_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(self__.root.edit)
{if((self__.cnt === 0))
{throw (new Error("Can't pop empty vector"));
} else
{if((1 === self__.cnt))
{self__.cnt = 0;
return tcoll;
} else
{if((((self__.cnt - 1) & 31) > 0))
{self__.cnt = (self__.cnt - 1);
return tcoll;
} else
{if("\uFDD0'else")
{var new_tail = cljs.core.editable_array_for.call(null,tcoll,(self__.cnt - 2));
var new_root = (function (){var nr = cljs.core.tv_pop_tail.call(null,tcoll,self__.shift,self__.root);
if(!((nr == null)))
{return nr;
} else
{return (new cljs.core.VectorNode(self__.root.edit,cljs.core.make_array.call(null,32)));
}
})();
if((function (){var and__3941__auto__ = (5 < self__.shift);
if(and__3941__auto__)
{return (cljs.core.pv_aget.call(null,new_root,1) == null);
} else
{return and__3941__auto__;
}
})())
{var new_root__$1 = cljs.core.tv_ensure_editable.call(null,self__.root.edit,cljs.core.pv_aget.call(null,new_root,0));
self__.root = new_root__$1;
self__.shift = (self__.shift - 5);
self__.cnt = (self__.cnt - 1);
self__.tail = new_tail;
return tcoll;
} else
{self__.root = new_root;
self__.cnt = (self__.cnt - 1);
self__.tail = new_tail;
return tcoll;
}
} else
{return null;
}
}
}
}
} else
{throw (new Error("pop! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
return tcoll.cljs$core$ITransientVector$_assoc_n_BANG_$arity$3(tcoll,key,val);
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
if(self__.root.edit)
{if(((self__.cnt - cljs.core.tail_off.call(null,tcoll)) < 32))
{(self__.tail[(self__.cnt & 31)] = o);
self__.cnt = (self__.cnt + 1);
return tcoll;
} else
{var tail_node = (new cljs.core.VectorNode(self__.root.edit,self__.tail));
var new_tail = cljs.core.make_array.call(null,32);
(new_tail[0] = o);
self__.tail = new_tail;
if(((self__.cnt >>> 5) > (1 << self__.shift)))
{var new_root_array = cljs.core.make_array.call(null,32);
var new_shift = (self__.shift + 5);
(new_root_array[0] = self__.root);
(new_root_array[1] = cljs.core.new_path.call(null,self__.root.edit,self__.shift,tail_node));
self__.root = (new cljs.core.VectorNode(self__.root.edit,new_root_array));
self__.shift = new_shift;
self__.cnt = (self__.cnt + 1);
return tcoll;
} else
{var new_root = cljs.core.tv_push_tail.call(null,tcoll,self__.shift,self__.root,tail_node);
self__.root = new_root;
self__.cnt = (self__.cnt + 1);
return tcoll;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientVector.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(self__.root.edit)
{self__.root.edit = null;
var len = (self__.cnt - cljs.core.tail_off.call(null,tcoll));
var trimmed_tail = cljs.core.make_array.call(null,len);
cljs.core.array_copy.call(null,self__.tail,0,trimmed_tail,0,len);
return (new cljs.core.PersistentVector(null,self__.cnt,self__.shift,self__.root,trimmed_tail,null));
} else
{throw (new Error("persistent! called twice"));
}
});
goog.provide('cljs.core.PersistentQueueSeq');

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear,__hash){
this.meta = meta;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.PersistentQueueSeq.cljs$lang$type = true;
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core._first.call(null,self__.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
var temp__4090__auto__ = cljs.core.next.call(null,self__.front);
if(temp__4090__auto__)
{var f1 = temp__4090__auto__;
return (new cljs.core.PersistentQueueSeq(self__.meta,f1,self__.rear,null));
} else
{if((self__.rear == null))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{return (new cljs.core.PersistentQueueSeq(self__.meta,self__.rear,null,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentQueueSeq(meta__$1,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
goog.provide('cljs.core.PersistentQueue');

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear,__hash){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31858766;
})
cljs.core.PersistentQueue.cljs$lang$type = true;
cljs.core.PersistentQueue.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
if(cljs.core.truth_(self__.front))
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + 1),self__.front,cljs.core.conj.call(null,(function (){var or__3943__auto__ = self__.rear;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})(),o),null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count + 1),cljs.core.conj.call(null,self__.front,o),cljs.core.PersistentVector.EMPTY,null));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var rear__$1 = cljs.core.seq.call(null,self__.rear);
if(cljs.core.truth_((function (){var or__3943__auto__ = self__.front;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return rear__$1;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,self__.front,cljs.core.seq.call(null,rear__$1),null));
} else
{return null;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek$arity$1 = (function (coll){
var self__ = this;
return cljs.core._first.call(null,self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop$arity$1 = (function (coll){
var self__ = this;
if(cljs.core.truth_(self__.front))
{var temp__4090__auto__ = cljs.core.next.call(null,self__.front);
if(temp__4090__auto__)
{var f1 = temp__4090__auto__;
return (new cljs.core.PersistentQueue(self__.meta,(self__.count - 1),f1,self__.rear,null));
} else
{return (new cljs.core.PersistentQueue(self__.meta,(self__.count - 1),cljs.core.seq.call(null,self__.rear),cljs.core.PersistentVector.EMPTY,null));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core.first.call(null,self__.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentQueue(meta__$1,self__.count,self__.front,self__.rear,self__.__hash));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.EMPTY,0));
goog.provide('cljs.core.NeverEquiv');

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2097152;
})
cljs.core.NeverEquiv.cljs$lang$type = true;
cljs.core.NeverEquiv.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,((cljs.core.map_QMARK_.call(null,y))?(((cljs.core.count.call(null,x) === cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core._lookup.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len = array.length;
var i = 0;
while(true){
if((i < len))
{if((k === (array[i])))
{return i;
} else
{{
var G__3640 = (i + incr);
i = G__3640;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__$1 = cljs.core.hash.call(null,a);
var b__$1 = cljs.core.hash.call(null,b);
if((a__$1 < b__$1))
{return -1;
} else
{if((a__$1 > b__$1))
{return 1;
} else
{if("\uFDD0'else")
{return 0;
} else
{return null;
}
}
}
});
cljs.core.obj_map__GT_hash_map = (function obj_map__GT_hash_map(m,k,v){
var ks = m.keys;
var len = ks.length;
var so = m.strobj;
var out = cljs.core.with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,cljs.core.meta.call(null,m));
var i = 0;
var out__$1 = cljs.core.transient$.call(null,out);
while(true){
if((i < len))
{var k__$1 = (ks[i]);
{
var G__3641 = (i + 1);
var G__3642 = cljs.core.assoc_BANG_.call(null,out__$1,k__$1,(so[k__$1]));
i = G__3641;
out__$1 = G__3642;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,out__$1,k,v));
}
break;
}
});
cljs.core.obj_clone = (function obj_clone(obj,ks){
var new_obj = {};
var l = ks.length;
var i_3644 = 0;
while(true){
if((i_3644 < l))
{var k_3645 = (ks[i_3644]);
(new_obj[k_3645] = (obj[k_3645]));
{
var G__3646 = (i_3644 + 1);
i_3644 = G__3646;
continue;
}
} else
{}
break;
}
return new_obj;
});
goog.provide('cljs.core.ObjMap');

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj,update_count,__hash){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
this.update_count = update_count;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.ObjMap.cljs$lang$type = true;
cljs.core.ObjMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/ObjMap");
});
cljs.core.ObjMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null),coll));
});
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_imap.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
if((function (){var and__3941__auto__ = goog.isString(k);
if(and__3941__auto__)
{return !((cljs.core.scan_array.call(null,1,k,self__.keys) == null));
} else
{return and__3941__auto__;
}
})())
{return (self__.strobj[k]);
} else
{return not_found;
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if(goog.isString(k))
{if((function (){var or__3943__auto__ = (self__.update_count > cljs.core.ObjMap.HASHMAP_THRESHOLD);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (self__.keys.length >= cljs.core.ObjMap.HASHMAP_THRESHOLD);
}
})())
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
} else
{if(!((cljs.core.scan_array.call(null,1,k,self__.keys) == null)))
{var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);
(new_strobj[k] = v);
return (new cljs.core.ObjMap(self__.meta,self__.keys,new_strobj,(self__.update_count + 1),null));
} else
{var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);
var new_keys = self__.keys.slice();
(new_strobj[k] = v);
new_keys.push(k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
}
}
} else
{return cljs.core.obj_map__GT_hash_map.call(null,coll,k,v);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
if((function (){var and__3941__auto__ = goog.isString(k);
if(and__3941__auto__)
{return !((cljs.core.scan_array.call(null,1,k,self__.keys) == null));
} else
{return and__3941__auto__;
}
})())
{return true;
} else
{return false;
}
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3651 = null;
var G__3651__2 = (function (this_sym3649,k){
var self__ = this;
var this_sym3649__$1 = this;
var coll = this_sym3649__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3651__3 = (function (this_sym3650,k,not_found){
var self__ = this;
var this_sym3650__$1 = this;
var coll = this_sym3650__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3651 = function(this_sym3650,k,not_found){
switch(arguments.length){
case 2:
return G__3651__2.call(this,this_sym3650,k);
case 3:
return G__3651__3.call(this,this_sym3650,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3651;
})()
;
cljs.core.ObjMap.prototype.apply = (function (this_sym3647,args3648){
var self__ = this;
return this_sym3647.call.apply(this_sym3647,[this_sym3647].concat(args3648.slice()));
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.keys.length > 0))
{return cljs.core.map.call(null,(function (p1__3643_SHARP_){
return cljs.core.vector.call(null,p1__3643_SHARP_,(self__.strobj[p1__3643_SHARP_]));
}),self__.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.ObjMap(meta__$1,self__.keys,self__.strobj,self__.update_count,self__.__hash));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,self__.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
if((function (){var and__3941__auto__ = goog.isString(k);
if(and__3941__auto__)
{return !((cljs.core.scan_array.call(null,1,k,self__.keys) == null));
} else
{return and__3941__auto__;
}
})())
{var new_keys = self__.keys.slice();
var new_strobj = cljs.core.obj_clone.call(null,self__.strobj,self__.keys);
new_keys.splice(cljs.core.scan_array.call(null,1,k,new_keys),1);
cljs.core.js_delete.call(null,new_strobj,k);
return (new cljs.core.ObjMap(self__.meta,new_keys,new_strobj,(self__.update_count + 1),null));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],{},0,0));
cljs.core.ObjMap.HASHMAP_THRESHOLD = 32;
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj,0,null));
});
goog.provide('cljs.core.HashMap');

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj,__hash){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 15075087;
})
cljs.core.HashMap.cljs$lang$type = true;
cljs.core.HashMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/HashMap");
});
cljs.core.HashMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_imap.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var bucket = (self__.hashobj[cljs.core.hash.call(null,k)]);
var i = (cljs.core.truth_(bucket)?cljs.core.scan_array.call(null,2,k,bucket):null);
if(cljs.core.truth_(i))
{return (bucket[(i + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var h = cljs.core.hash.call(null,k);
var bucket = (self__.hashobj[h]);
if(cljs.core.truth_(bucket))
{var new_bucket = bucket.slice();
var new_hashobj = goog.object.clone(self__.hashobj);
(new_hashobj[h] = new_bucket);
var temp__4090__auto__ = cljs.core.scan_array.call(null,2,k,new_bucket);
if(cljs.core.truth_(temp__4090__auto__))
{var i = temp__4090__auto__;
(new_bucket[(i + 1)] = v);
return (new cljs.core.HashMap(self__.meta,self__.count,new_hashobj,null));
} else
{new_bucket.push(k,v);
return (new cljs.core.HashMap(self__.meta,(self__.count + 1),new_hashobj,null));
}
} else
{var new_hashobj = goog.object.clone(self__.hashobj);
(new_hashobj[h] = [k,v]);
return (new cljs.core.HashMap(self__.meta,(self__.count + 1),new_hashobj,null));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var bucket = (self__.hashobj[cljs.core.hash.call(null,k)]);
var i = (cljs.core.truth_(bucket)?cljs.core.scan_array.call(null,2,k,bucket):null);
if(cljs.core.truth_(i))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3657 = null;
var G__3657__2 = (function (this_sym3655,k){
var self__ = this;
var this_sym3655__$1 = this;
var coll = this_sym3655__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3657__3 = (function (this_sym3656,k,not_found){
var self__ = this;
var this_sym3656__$1 = this;
var coll = this_sym3656__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3657 = function(this_sym3656,k,not_found){
switch(arguments.length){
case 2:
return G__3657__2.call(this,this_sym3656,k);
case 3:
return G__3657__3.call(this,this_sym3656,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3657;
})()
;
cljs.core.HashMap.prototype.apply = (function (this_sym3653,args3654){
var self__ = this;
return this_sym3653.call.apply(this_sym3653,[this_sym3653].concat(args3654.slice()));
});
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.count > 0))
{var hashes = cljs.core.js_keys.call(null,self__.hashobj).sort();
return cljs.core.mapcat.call(null,(function (p1__3652_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(self__.hashobj[p1__3652_SHARP_])));
}),hashes);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.HashMap(meta__$1,self__.count,self__.hashobj,self__.__hash));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,self__.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var h = cljs.core.hash.call(null,k);
var bucket = (self__.hashobj[h]);
var i = (cljs.core.truth_(bucket)?cljs.core.scan_array.call(null,2,k,bucket):null);
if(cljs.core.not.call(null,i))
{return coll;
} else
{var new_hashobj = goog.object.clone(self__.hashobj);
if((3 > bucket.length))
{cljs.core.js_delete.call(null,new_hashobj,h);
} else
{var new_bucket_3658 = bucket.slice();
new_bucket_3658.splice(i,2);
(new_hashobj[h] = new_bucket_3658);
}
return (new cljs.core.HashMap(self__.meta,(self__.count - 1),new_hashobj,null));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,{},0));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = 0;
var out = cljs.core.HashMap.EMPTY;
while(true){
if((i < len))
{{
var G__3659 = (i + 1);
var G__3660 = cljs.core.assoc.call(null,out,(ks[i]),(vs[i]));
i = G__3659;
out = G__3660;
continue;
}
} else
{return out;
}
break;
}
});
cljs.core.array_map_index_of = (function array_map_index_of(m,k){
var arr = m.arr;
var len = arr.length;
var i = 0;
while(true){
if((len <= i))
{return -1;
} else
{if(cljs.core._EQ_.call(null,(arr[i]),k))
{return i;
} else
{if("\uFDD0'else")
{{
var G__3661 = (i + 2);
i = G__3661;
continue;
}
} else
{return null;
}
}
}
break;
}
});
goog.provide('cljs.core.PersistentArrayMap');

/**
* @constructor
*/
cljs.core.PersistentArrayMap = (function (meta,cnt,arr,__hash){
this.meta = meta;
this.cnt = cnt;
this.arr = arr;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentArrayMap.cljs$lang$type = true;
cljs.core.PersistentArrayMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/PersistentArrayMap");
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljs.core.TransientArrayMap({},self__.arr.length,self__.arr.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_imap.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var idx = cljs.core.array_map_index_of.call(null,coll,k);
if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var idx = cljs.core.array_map_index_of.call(null,coll,k);
if((idx === -1))
{if((self__.cnt < cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt + 1),(function (){var G__3664 = self__.arr.slice();
G__3664.push(k);
G__3664.push(v);
return G__3664;
})(),null));
} else
{return cljs.core.persistent_BANG_.call(null,cljs.core.assoc_BANG_.call(null,cljs.core.transient$.call(null,cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,coll)),k,v));
}
} else
{if((v === (self__.arr[(idx + 1)])))
{return coll;
} else
{if("\uFDD0'else")
{return (new cljs.core.PersistentArrayMap(self__.meta,self__.cnt,(function (){var G__3665 = self__.arr.slice();
(G__3665[(idx + 1)] = v);
return G__3665;
})(),null));
} else
{return null;
}
}
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
return !((cljs.core.array_map_index_of.call(null,coll,k) === -1));
});
cljs.core.PersistentArrayMap.prototype.call = (function() {
var G__3668 = null;
var G__3668__2 = (function (this_sym3666,k){
var self__ = this;
var this_sym3666__$1 = this;
var coll = this_sym3666__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3668__3 = (function (this_sym3667,k,not_found){
var self__ = this;
var this_sym3667__$1 = this;
var coll = this_sym3667__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3668 = function(this_sym3667,k,not_found){
switch(arguments.length){
case 2:
return G__3668__2.call(this,this_sym3667,k);
case 3:
return G__3668__3.call(this,this_sym3667,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3668;
})()
;
cljs.core.PersistentArrayMap.prototype.apply = (function (this_sym3662,args3663){
var self__ = this;
return this_sym3662.call.apply(this_sym3662,[this_sym3662].concat(args3663.slice()));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var len = self__.arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var init__$2 = f.call(null,init__$1,(self__.arr[i]),(self__.arr[(i + 1)]));
if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__3669 = (i + 2);
var G__3670 = init__$2;
i = G__3669;
init__$1 = G__3670;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentArrayMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{var len = self__.arr.length;
var array_map_seq = (function array_map_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if((i < len))
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([(self__.arr[i]),(self__.arr[(i + 1)])], true),array_map_seq.call(null,(i + 2)));
} else
{return null;
}
}),null));
});
return array_map_seq.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentArrayMap(meta__$1,self__.cnt,self__.arr,self__.__hash));
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentArrayMap.EMPTY,self__.meta);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var idx = cljs.core.array_map_index_of.call(null,coll,k);
if((idx >= 0))
{var len = self__.arr.length;
var new_len = (len - 2);
if((new_len === 0))
{return coll.cljs$core$IEmptyableCollection$_empty$arity$1(coll);
} else
{var new_arr = cljs.core.make_array.call(null,new_len);
var s = 0;
var d = 0;
while(true){
if((s >= len))
{return (new cljs.core.PersistentArrayMap(self__.meta,(self__.cnt - 1),new_arr,null));
} else
{if(cljs.core._EQ_.call(null,k,(self__.arr[s])))
{{
var G__3671 = (s + 2);
var G__3672 = d;
s = G__3671;
d = G__3672;
continue;
}
} else
{if("\uFDD0'else")
{(new_arr[d] = (self__.arr[s]));
(new_arr[(d + 1)] = (self__.arr[(s + 1)]));
{
var G__3673 = (s + 2);
var G__3674 = (d + 2);
s = G__3673;
d = G__3674;
continue;
}
} else
{return null;
}
}
}
break;
}
}
} else
{return coll;
}
});
cljs.core.PersistentArrayMap.EMPTY = (new cljs.core.PersistentArrayMap(null,0,[],null));
cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD = 16;
cljs.core.PersistentArrayMap.fromArrays = (function (ks,vs){
var len = cljs.core.count.call(null,ks);
var i = 0;
var out = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len))
{{
var G__3675 = (i + 1);
var G__3676 = cljs.core.assoc_BANG_.call(null,out,(ks[i]),(vs[i]));
i = G__3675;
out = G__3676;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
});
goog.provide('cljs.core.TransientArrayMap');

/**
* @constructor
*/
cljs.core.TransientArrayMap = (function (editable_QMARK_,len,arr){
this.editable_QMARK_ = editable_QMARK_;
this.len = len;
this.arr = arr;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientArrayMap.cljs$lang$type = true;
cljs.core.TransientArrayMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/TransientArrayMap");
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx >= 0))
{(self__.arr[idx] = (self__.arr[(self__.len - 2)]));
(self__.arr[(idx + 1)] = (self__.arr[(self__.len - 1)]));
var G__3677_3679 = self__.arr;
G__3677_3679.pop();
G__3677_3679.pop();
self__.len = (self__.len - 2);
} else
{}
return tcoll;
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of.call(null,tcoll,key);
if((idx === -1))
{if(((self__.len + 2) <= (2 * cljs.core.PersistentArrayMap.HASHMAP_THRESHOLD)))
{self__.len = (self__.len + 2);
self__.arr.push(key);
self__.arr.push(val);
return tcoll;
} else
{return cljs.core.assoc_BANG_.call(null,cljs.core.array__GT_transient_hash_map.call(null,self__.len,self__.arr),key,val);
}
} else
{if((val === (self__.arr[(idx + 1)])))
{return tcoll;
} else
{(self__.arr[(idx + 1)] = val);
return tcoll;
}
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{if((function (){var G__3678 = o;
if(G__3678)
{if((function (){var or__3943__auto__ = (G__3678.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3678.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__3678.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__3678);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__3678);
}
})())
{return tcoll.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll,cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es = cljs.core.seq.call(null,o);
var tcoll__$1 = tcoll;
while(true){
var temp__4090__auto__ = cljs.core.first.call(null,es);
if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
{
var G__3680 = cljs.core.next.call(null,es);
var G__3681 = tcoll__$1.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3(tcoll__$1,cljs.core.key.call(null,e),cljs.core.val.call(null,e));
es = G__3680;
tcoll__$1 = G__3681;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{self__.editable_QMARK_ = false;
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,self__.len,2),self__.arr,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,k,null);
});
cljs.core.TransientArrayMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{var idx = cljs.core.array_map_index_of.call(null,tcoll,k);
if((idx === -1))
{return not_found;
} else
{return (self__.arr[(idx + 1)]);
}
} else
{throw (new Error("lookup after persistent!"));
}
});
cljs.core.TransientArrayMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
if(cljs.core.truth_(self__.editable_QMARK_))
{return cljs.core.quot.call(null,self__.len,2);
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.array__GT_transient_hash_map = (function array__GT_transient_hash_map(len,arr){
var out = cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY);
var i = 0;
while(true){
if((i < len))
{{
var G__3682 = cljs.core.assoc_BANG_.call(null,out,(arr[i]),(arr[(i + 1)]));
var G__3683 = (i + 2);
out = G__3682;
i = G__3683;
continue;
}
} else
{return out;
}
break;
}
});
goog.provide('cljs.core.Box');

/**
* @constructor
*/
cljs.core.Box = (function (val){
this.val = val;
})
cljs.core.Box.cljs$lang$type = true;
cljs.core.Box.cljs$lang$ctorPrSeq = (function (this__1990__auto__){
return cljs.core.list.call(null,"cljs.core/Box");
});
cljs.core.Box.cljs$lang$ctorPrWriter = (function (this__1990__auto__,writer__1991__auto__,opts__1992__auto__){
return cljs.core._write.call(null,writer__1991__auto__,"cljs.core/Box");
});
cljs.core.key_test = (function key_test(key,other){
if(goog.isString(key))
{return (key === other);
} else
{return cljs.core._EQ_.call(null,key,other);
}
});
cljs.core.mask = (function mask(hash,shift){
return ((hash >>> shift) & 31);
});
cljs.core.clone_and_set = (function() {
var clone_and_set = null;
var clone_and_set__3 = (function (arr,i,a){
var G__3686 = arr.slice();
(G__3686[i] = a);
return G__3686;
});
var clone_and_set__5 = (function (arr,i,a,j,b){
var G__3687 = arr.slice();
(G__3687[i] = a);
(G__3687[j] = b);
return G__3687;
});
clone_and_set = function(arr,i,a,j,b){
switch(arguments.length){
case 3:
return clone_and_set__3.call(this,arr,i,a);
case 5:
return clone_and_set__5.call(this,arr,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_and_set.cljs$lang$arity$3 = clone_and_set__3;
clone_and_set.cljs$lang$arity$5 = clone_and_set__5;
return clone_and_set;
})()
;
cljs.core.remove_pair = (function remove_pair(arr,i){
var new_arr = cljs.core.make_array.call(null,(arr.length - 2));
cljs.core.array_copy.call(null,arr,0,new_arr,0,(2 * i));
cljs.core.array_copy.call(null,arr,(2 * (i + 1)),new_arr,(2 * i),(new_arr.length - (2 * i)));
return new_arr;
});
cljs.core.bitmap_indexed_node_index = (function bitmap_indexed_node_index(bitmap,bit){
return cljs.core.bit_count.call(null,(bitmap & (bit - 1)));
});
cljs.core.bitpos = (function bitpos(hash,shift){
return (1 << ((hash >>> shift) & 0x01f));
});
cljs.core.edit_and_set = (function() {
var edit_and_set = null;
var edit_and_set__4 = (function (inode,edit,i,a){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);
return editable;
});
var edit_and_set__6 = (function (inode,edit,i,a,j,b){
var editable = inode.ensure_editable(edit);
(editable.arr[i] = a);
(editable.arr[j] = b);
return editable;
});
edit_and_set = function(inode,edit,i,a,j,b){
switch(arguments.length){
case 4:
return edit_and_set__4.call(this,inode,edit,i,a);
case 6:
return edit_and_set__6.call(this,inode,edit,i,a,j,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
edit_and_set.cljs$lang$arity$4 = edit_and_set__4;
edit_and_set.cljs$lang$arity$6 = edit_and_set__6;
return edit_and_set;
})()
;
cljs.core.inode_kv_reduce = (function inode_kv_reduce(arr,f,init){
var len = arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var init__$2 = (function (){var k = (arr[i]);
if(!((k == null)))
{return f.call(null,init__$1,k,(arr[(i + 1)]));
} else
{var node = (arr[(i + 1)]);
if(!((node == null)))
{return node.kv_reduce(f,init__$1);
} else
{return init__$1;
}
}
})();
if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__3688 = (i + 2);
var G__3689 = init__$2;
i = G__3688;
init__$1 = G__3689;
continue;
}
}
} else
{return init__$1;
}
break;
}
});
goog.provide('cljs.core.BitmapIndexedNode');

/**
* @constructor
*/
cljs.core.BitmapIndexedNode = (function (edit,bitmap,arr){
this.edit = edit;
this.bitmap = bitmap;
this.arr = arr;
})
cljs.core.BitmapIndexedNode.cljs$lang$type = true;
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/BitmapIndexedNode");
});
cljs.core.BitmapIndexedNode.prototype.edit_and_remove_pair = (function (e,bit,i){
var self__ = this;
var inode = this;
if((self__.bitmap === bit))
{return null;
} else
{var editable = inode.ensure_editable(e);
var earr = editable.arr;
var len = earr.length;
editable.bitmap = (bit ^ editable.bitmap);
cljs.core.array_copy.call(null,earr,(2 * (i + 1)),earr,(2 * i),(len - (2 * (i + 1))));
(earr[(len - 2)] = null);
(earr[(len - 1)] = null);
return editable;
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
if(((self__.bitmap & bit) === 0))
{var n = cljs.core.bit_count.call(null,self__.bitmap);
if(((2 * n) < self__.arr.length))
{var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
added_leaf_QMARK_.val = true;
cljs.core.array_copy_downward.call(null,earr,(2 * idx),earr,(2 * (idx + 1)),(2 * (n - idx)));
(earr[(2 * idx)] = key);
(earr[((2 * idx) + 1)] = val);
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{if((n >= 16))
{var nodes = cljs.core.make_array.call(null,32);
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));
var i_3690 = 0;
var j_3691 = 0;
while(true){
if((i_3690 < 32))
{if((((self__.bitmap >>> i_3690) & 1) === 0))
{{
var G__3692 = (i_3690 + 1);
var G__3693 = j_3691;
i_3690 = G__3692;
j_3691 = G__3693;
continue;
}
} else
{(nodes[i_3690] = ((!(((self__.arr[j_3691]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),cljs.core.hash.call(null,(self__.arr[j_3691])),(self__.arr[j_3691]),(self__.arr[(j_3691 + 1)]),added_leaf_QMARK_):(self__.arr[(j_3691 + 1)])));
{
var G__3694 = (i_3690 + 1);
var G__3695 = (j_3691 + 2);
i_3690 = G__3694;
j_3691 = G__3695;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(edit__$1,(n + 1),nodes));
} else
{if("\uFDD0'else")
{var new_arr = cljs.core.make_array.call(null,(2 * (n + 4)));
cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
cljs.core.array_copy.call(null,self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
var editable = inode.ensure_editable(edit__$1);
editable.arr = new_arr;
editable.bitmap = (editable.bitmap | bit);
return editable;
} else
{return null;
}
}
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),n);
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),val);
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return cljs.core.edit_and_set.call(null,inode,edit__$1,(2 * idx),null,((2 * idx) + 1),cljs.core.create_node.call(null,edit__$1,(shift + 5),key_or_nil,val_or_node,hash,key,val));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return cljs.core.create_inode_seq.call(null,self__.arr);
});
cljs.core.BitmapIndexedNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return cljs.core.edit_and_set.call(null,inode,edit__$1,((2 * idx) + 1),n);
} else
{if((self__.bitmap === bit))
{return null;
} else
{if("\uFDD0'else")
{return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{(removed_leaf_QMARK_[0] = true);
return inode.edit_and_remove_pair(edit__$1,bit,idx);
} else
{if("\uFDD0'else")
{return inode;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{var n = cljs.core.bit_count.call(null,self__.bitmap);
var new_arr = cljs.core.make_array.call(null,(((n < 0))?4:(2 * (n + 1))));
cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * n));
return (new cljs.core.BitmapIndexedNode(e,self__.bitmap,new_arr));
}
});
cljs.core.BitmapIndexedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce.call(null,self__.arr,f,init);
});
cljs.core.BitmapIndexedNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{return val_or_node.inode_find((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{return cljs.core.PersistentVector.fromArray([key_or_nil,val_or_node], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return inode;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_without((shift + 5),hash,key);
if((n === val_or_node))
{return inode;
} else
{if(!((n == null)))
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),n)));
} else
{if((self__.bitmap === bit))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair.call(null,self__.arr,idx)));
} else
{return null;
}
}
}
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap ^ bit),cljs.core.remove_pair.call(null,self__.arr,idx)));
} else
{if("\uFDD0'else")
{return inode;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
if(((self__.bitmap & bit) === 0))
{var n = cljs.core.bit_count.call(null,self__.bitmap);
if((n >= 16))
{var nodes = cljs.core.make_array.call(null,32);
var jdx = ((hash >>> shift) & 0x01f);
(nodes[jdx] = cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_));
var i_3696 = 0;
var j_3697 = 0;
while(true){
if((i_3696 < 32))
{if((((self__.bitmap >>> i_3696) & 1) === 0))
{{
var G__3698 = (i_3696 + 1);
var G__3699 = j_3697;
i_3696 = G__3698;
j_3697 = G__3699;
continue;
}
} else
{(nodes[i_3696] = ((!(((self__.arr[j_3697]) == null)))?cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),cljs.core.hash.call(null,(self__.arr[j_3697])),(self__.arr[j_3697]),(self__.arr[(j_3697 + 1)]),added_leaf_QMARK_):(self__.arr[(j_3697 + 1)])));
{
var G__3700 = (i_3696 + 1);
var G__3701 = (j_3697 + 2);
i_3696 = G__3700;
j_3697 = G__3701;
continue;
}
}
} else
{}
break;
}
return (new cljs.core.ArrayNode(null,(n + 1),nodes));
} else
{var new_arr = cljs.core.make_array.call(null,(2 * (n + 1)));
cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * idx));
(new_arr[(2 * idx)] = key);
(new_arr[((2 * idx) + 1)] = val);
cljs.core.array_copy.call(null,self__.arr,(2 * idx),new_arr,(2 * (idx + 1)),(2 * (n - idx)));
added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,(self__.bitmap | bit),new_arr));
}
} else
{var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{var n = val_or_node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),n)));
}
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{if((val === val_or_node))
{return inode;
} else
{return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,((2 * idx) + 1),val)));
}
} else
{if("\uFDD0'else")
{added_leaf_QMARK_.val = true;
return (new cljs.core.BitmapIndexedNode(null,self__.bitmap,cljs.core.clone_and_set.call(null,self__.arr,(2 * idx),null,((2 * idx) + 1),cljs.core.create_node.call(null,(shift + 5),key_or_nil,val_or_node,hash,key,val))));
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var bit = (1 << ((hash >>> shift) & 0x01f));
if(((self__.bitmap & bit) === 0))
{return not_found;
} else
{var idx = cljs.core.bitmap_indexed_node_index.call(null,self__.bitmap,bit);
var key_or_nil = (self__.arr[(2 * idx)]);
var val_or_node = (self__.arr[((2 * idx) + 1)]);
if((key_or_nil == null))
{return val_or_node.inode_lookup((shift + 5),hash,key,not_found);
} else
{if(cljs.core.key_test.call(null,key,key_or_nil))
{return val_or_node;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
}
});
cljs.core.BitmapIndexedNode.EMPTY = (new cljs.core.BitmapIndexedNode(null,0,cljs.core.make_array.call(null,0)));
cljs.core.pack_array_node = (function pack_array_node(array_node,edit,idx){
var arr = array_node.arr;
var len = (2 * (array_node.cnt - 1));
var new_arr = cljs.core.make_array.call(null,len);
var i = 0;
var j = 1;
var bitmap = 0;
while(true){
if((i < len))
{if((function (){var and__3941__auto__ = !((i === idx));
if(and__3941__auto__)
{return !(((arr[i]) == null));
} else
{return and__3941__auto__;
}
})())
{(new_arr[j] = (arr[i]));
{
var G__3702 = (i + 1);
var G__3703 = (j + 2);
var G__3704 = (bitmap | (1 << i));
i = G__3702;
j = G__3703;
bitmap = G__3704;
continue;
}
} else
{{
var G__3705 = (i + 1);
var G__3706 = j;
var G__3707 = bitmap;
i = G__3705;
j = G__3706;
bitmap = G__3707;
continue;
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit,bitmap,new_arr));
}
break;
}
});
goog.provide('cljs.core.ArrayNode');

/**
* @constructor
*/
cljs.core.ArrayNode = (function (edit,cnt,arr){
this.edit = edit;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.ArrayNode.cljs$lang$type = true;
cljs.core.ArrayNode.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/ArrayNode");
});
cljs.core.ArrayNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_));
editable.cnt = (editable.cnt + 1);
return editable;
} else
{var n = node.inode_assoc_BANG_(edit__$1,(shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === node))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
}
}
});
cljs.core.ArrayNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return cljs.core.create_array_node_seq.call(null,self__.arr);
});
cljs.core.ArrayNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{return inode;
} else
{var n = node.inode_without_BANG_(edit__$1,(shift + 5),hash,key,removed_leaf_QMARK_);
if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode,edit__$1,idx);
} else
{var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
editable.cnt = (editable.cnt - 1);
return editable;
}
} else
{if("\uFDD0'else")
{return cljs.core.edit_and_set.call(null,inode,edit__$1,idx,n);
} else
{return null;
}
}
}
}
});
cljs.core.ArrayNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{return (new cljs.core.ArrayNode(e,self__.cnt,self__.arr.slice()));
}
});
cljs.core.ArrayNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
var len = self__.arr.length;
var i = 0;
var init__$1 = init;
while(true){
if((i < len))
{var node = (self__.arr[i]);
if(!((node == null)))
{var init__$2 = node.kv_reduce(f,init__$1);
if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{{
var G__3708 = (i + 1);
var G__3709 = init__$2;
i = G__3708;
init__$1 = G__3709;
continue;
}
}
} else
{return null;
}
} else
{return init__$1;
}
break;
}
});
cljs.core.ArrayNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{return node.inode_find((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.ArrayNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{var n = node.inode_without((shift + 5),hash,key);
if((n === node))
{return inode;
} else
{if((n == null))
{if((self__.cnt <= 8))
{return cljs.core.pack_array_node.call(null,inode,null,idx);
} else
{return (new cljs.core.ArrayNode(null,(self__.cnt - 1),cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
}
} else
{if("\uFDD0'else")
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
} else
{return null;
}
}
}
} else
{return inode;
}
});
cljs.core.ArrayNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if((node == null))
{return (new cljs.core.ArrayNode(null,(self__.cnt + 1),cljs.core.clone_and_set.call(null,self__.arr,idx,cljs.core.BitmapIndexedNode.EMPTY.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_))));
} else
{var n = node.inode_assoc((shift + 5),hash,key,val,added_leaf_QMARK_);
if((n === node))
{return inode;
} else
{return (new cljs.core.ArrayNode(null,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,idx,n)));
}
}
});
cljs.core.ArrayNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = ((hash >>> shift) & 0x01f);
var node = (self__.arr[idx]);
if(!((node == null)))
{return node.inode_lookup((shift + 5),hash,key,not_found);
} else
{return not_found;
}
});
cljs.core.hash_collision_node_find_index = (function hash_collision_node_find_index(arr,cnt,key){
var lim = (2 * cnt);
var i = 0;
while(true){
if((i < lim))
{if(cljs.core.key_test.call(null,key,(arr[i])))
{return i;
} else
{{
var G__3710 = (i + 2);
i = G__3710;
continue;
}
}
} else
{return -1;
}
break;
}
});
goog.provide('cljs.core.HashCollisionNode');

/**
* @constructor
*/
cljs.core.HashCollisionNode = (function (edit,collision_hash,cnt,arr){
this.edit = edit;
this.collision_hash = collision_hash;
this.cnt = cnt;
this.arr = arr;
})
cljs.core.HashCollisionNode.cljs$lang$type = true;
cljs.core.HashCollisionNode.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/HashCollisionNode");
});
cljs.core.HashCollisionNode.prototype.inode_assoc_BANG_ = (function (edit__$1,shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{if((self__.arr.length > (2 * self__.cnt)))
{var editable = cljs.core.edit_and_set.call(null,inode,edit__$1,(2 * self__.cnt),key,((2 * self__.cnt) + 1),val);
added_leaf_QMARK_.val = true;
editable.cnt = (editable.cnt + 1);
return editable;
} else
{var len = self__.arr.length;
var new_arr = cljs.core.make_array.call(null,(len + 2));
cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return inode.ensure_editable_array(edit__$1,(self__.cnt + 1),new_arr);
}
} else
{if(((self__.arr[(idx + 1)]) === val))
{return inode;
} else
{return cljs.core.edit_and_set.call(null,inode,edit__$1,(idx + 1),val);
}
}
} else
{return (new cljs.core.BitmapIndexedNode(edit__$1,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode,null,null])).inode_assoc_BANG_(edit__$1,shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_seq = (function (){
var self__ = this;
var inode = this;
return cljs.core.create_inode_seq.call(null,self__.arr);
});
cljs.core.HashCollisionNode.prototype.inode_without_BANG_ = (function (edit__$1,shift,hash,key,removed_leaf_QMARK_){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{return inode;
} else
{(removed_leaf_QMARK_[0] = true);
if((self__.cnt === 1))
{return null;
} else
{var editable = inode.ensure_editable(edit__$1);
var earr = editable.arr;
(earr[idx] = (earr[((2 * self__.cnt) - 2)]));
(earr[(idx + 1)] = (earr[((2 * self__.cnt) - 1)]));
(earr[((2 * self__.cnt) - 1)] = null);
(earr[((2 * self__.cnt) - 2)] = null);
editable.cnt = (editable.cnt - 1);
return editable;
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable = (function (e){
var self__ = this;
var inode = this;
if((e === self__.edit))
{return inode;
} else
{var new_arr = cljs.core.make_array.call(null,(2 * (self__.cnt + 1)));
cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,(2 * self__.cnt));
return (new cljs.core.HashCollisionNode(e,self__.collision_hash,self__.cnt,new_arr));
}
});
cljs.core.HashCollisionNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var inode = this;
return cljs.core.inode_kv_reduce.call(null,self__.arr,f,init);
});
cljs.core.HashCollisionNode.prototype.inode_find = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(self__.arr[idx])))
{return cljs.core.PersistentVector.fromArray([(self__.arr[idx]),(self__.arr[(idx + 1)])], true);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_without = (function (shift,hash,key){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{return inode;
} else
{if((self__.cnt === 1))
{return null;
} else
{if("\uFDD0'else")
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt - 1),cljs.core.remove_pair.call(null,self__.arr,cljs.core.quot.call(null,idx,2))));
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.inode_assoc = (function (shift,hash,key,val,added_leaf_QMARK_){
var self__ = this;
var inode = this;
if((hash === self__.collision_hash))
{var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx === -1))
{var len = self__.arr.length;
var new_arr = cljs.core.make_array.call(null,(len + 2));
cljs.core.array_copy.call(null,self__.arr,0,new_arr,0,len);
(new_arr[len] = key);
(new_arr[(len + 1)] = val);
added_leaf_QMARK_.val = true;
return (new cljs.core.HashCollisionNode(null,self__.collision_hash,(self__.cnt + 1),new_arr));
} else
{if(cljs.core._EQ_.call(null,(self__.arr[idx]),val))
{return inode;
} else
{return (new cljs.core.HashCollisionNode(null,self__.collision_hash,self__.cnt,cljs.core.clone_and_set.call(null,self__.arr,(idx + 1),val)));
}
}
} else
{return (new cljs.core.BitmapIndexedNode(null,(1 << ((self__.collision_hash >>> shift) & 0x01f)),[null,inode])).inode_assoc(shift,hash,key,val,added_leaf_QMARK_);
}
});
cljs.core.HashCollisionNode.prototype.inode_lookup = (function (shift,hash,key,not_found){
var self__ = this;
var inode = this;
var idx = cljs.core.hash_collision_node_find_index.call(null,self__.arr,self__.cnt,key);
if((idx < 0))
{return not_found;
} else
{if(cljs.core.key_test.call(null,key,(self__.arr[idx])))
{return (self__.arr[(idx + 1)]);
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.HashCollisionNode.prototype.ensure_editable_array = (function (e,count,array){
var self__ = this;
var inode = this;
if((e === self__.edit))
{self__.arr = array;
self__.cnt = count;
return inode;
} else
{return (new cljs.core.HashCollisionNode(self__.edit,self__.collision_hash,count,array));
}
});
cljs.core.create_node = (function() {
var create_node = null;
var create_node__6 = (function (shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash.call(null,key1);
if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc(shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc(shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
var create_node__7 = (function (edit,shift,key1,val1,key2hash,key2,val2){
var key1hash = cljs.core.hash.call(null,key1);
if((key1hash === key2hash))
{return (new cljs.core.HashCollisionNode(null,key1hash,2,[key1,val1,key2,val2]));
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));
return cljs.core.BitmapIndexedNode.EMPTY.inode_assoc_BANG_(edit,shift,key1hash,key1,val1,added_leaf_QMARK_).inode_assoc_BANG_(edit,shift,key2hash,key2,val2,added_leaf_QMARK_);
}
});
create_node = function(edit,shift,key1,val1,key2hash,key2,val2){
switch(arguments.length){
case 6:
return create_node__6.call(this,edit,shift,key1,val1,key2hash,key2);
case 7:
return create_node__7.call(this,edit,shift,key1,val1,key2hash,key2,val2);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_node.cljs$lang$arity$6 = create_node__6;
create_node.cljs$lang$arity$7 = create_node__7;
return create_node;
})()
;
goog.provide('cljs.core.NodeSeq');

/**
* @constructor
*/
cljs.core.NodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.NodeSeq.cljs$lang$type = true;
cljs.core.NodeSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/NodeSeq");
});
cljs.core.NodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.NodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.NodeSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.NodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
if((self__.s == null))
{return cljs.core.PersistentVector.fromArray([(self__.nodes[self__.i]),(self__.nodes[(self__.i + 1)])], true);
} else
{return cljs.core.first.call(null,self__.s);
}
});
cljs.core.NodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
if((self__.s == null))
{return cljs.core.create_inode_seq.call(null,self__.nodes,(self__.i + 2),null);
} else
{return cljs.core.create_inode_seq.call(null,self__.nodes,self__.i,cljs.core.next.call(null,self__.s));
}
});
cljs.core.NodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.NodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.NodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.NodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.NodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.create_inode_seq = (function() {
var create_inode_seq = null;
var create_inode_seq__1 = (function (nodes){
return create_inode_seq.call(null,nodes,0,null);
});
var create_inode_seq__3 = (function (nodes,i,s){
if((s == null))
{var len = nodes.length;
var j = i;
while(true){
if((j < len))
{if(!(((nodes[j]) == null)))
{return (new cljs.core.NodeSeq(null,nodes,j,null,null));
} else
{var temp__4090__auto__ = (nodes[(j + 1)]);
if(cljs.core.truth_(temp__4090__auto__))
{var node = temp__4090__auto__;
var temp__4090__auto____$1 = node.inode_seq();
if(cljs.core.truth_(temp__4090__auto____$1))
{var node_seq = temp__4090__auto____$1;
return (new cljs.core.NodeSeq(null,nodes,(j + 2),node_seq,null));
} else
{{
var G__3711 = (j + 2);
j = G__3711;
continue;
}
}
} else
{{
var G__3712 = (j + 2);
j = G__3712;
continue;
}
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.NodeSeq(null,nodes,i,s,null));
}
});
create_inode_seq = function(nodes,i,s){
switch(arguments.length){
case 1:
return create_inode_seq__1.call(this,nodes);
case 3:
return create_inode_seq__3.call(this,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_inode_seq.cljs$lang$arity$1 = create_inode_seq__1;
create_inode_seq.cljs$lang$arity$3 = create_inode_seq__3;
return create_inode_seq;
})()
;
goog.provide('cljs.core.ArrayNodeSeq');

/**
* @constructor
*/
cljs.core.ArrayNodeSeq = (function (meta,nodes,i,s,__hash){
this.meta = meta;
this.nodes = nodes;
this.i = i;
this.s = s;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850572;
})
cljs.core.ArrayNodeSeq.cljs$lang$type = true;
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/ArrayNodeSeq");
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.ArrayNodeSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (coll){
var self__ = this;
return cljs.core.first.call(null,self__.s);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (coll){
var self__ = this;
return cljs.core.create_array_node_seq.call(null,null,self__.nodes,self__.i,cljs.core.next.call(null,self__.s));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.ArrayNodeSeq(meta__$1,self__.nodes,self__.i,self__.s,self__.__hash));
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.create_array_node_seq = (function() {
var create_array_node_seq = null;
var create_array_node_seq__1 = (function (nodes){
return create_array_node_seq.call(null,null,nodes,0,null);
});
var create_array_node_seq__4 = (function (meta,nodes,i,s){
if((s == null))
{var len = nodes.length;
var j = i;
while(true){
if((j < len))
{var temp__4090__auto__ = (nodes[j]);
if(cljs.core.truth_(temp__4090__auto__))
{var nj = temp__4090__auto__;
var temp__4090__auto____$1 = nj.inode_seq();
if(cljs.core.truth_(temp__4090__auto____$1))
{var ns = temp__4090__auto____$1;
return (new cljs.core.ArrayNodeSeq(meta,nodes,(j + 1),ns,null));
} else
{{
var G__3713 = (j + 1);
j = G__3713;
continue;
}
}
} else
{{
var G__3714 = (j + 1);
j = G__3714;
continue;
}
}
} else
{return null;
}
break;
}
} else
{return (new cljs.core.ArrayNodeSeq(meta,nodes,i,s,null));
}
});
create_array_node_seq = function(meta,nodes,i,s){
switch(arguments.length){
case 1:
return create_array_node_seq__1.call(this,meta);
case 4:
return create_array_node_seq__4.call(this,meta,nodes,i,s);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_array_node_seq.cljs$lang$arity$1 = create_array_node_seq__1;
create_array_node_seq.cljs$lang$arity$4 = create_array_node_seq__4;
return create_array_node_seq;
})()
;
goog.provide('cljs.core.PersistentHashMap');

/**
* @constructor
*/
cljs.core.PersistentHashMap = (function (meta,cnt,root,has_nil_QMARK_,nil_val,__hash){
this.meta = meta;
this.cnt = cnt;
this.root = root;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 16123663;
})
cljs.core.PersistentHashMap.cljs$lang$type = true;
cljs.core.PersistentHashMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/PersistentHashMap");
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljs.core.TransientHashMap({},self__.root,self__.cnt,self__.has_nil_QMARK_,self__.nil_val));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_imap.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{if("\uFDD0'else")
{return self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
if((k == null))
{if((function (){var and__3941__auto__ = self__.has_nil_QMARK_;
if(and__3941__auto__)
{return (v === self__.nil_val);
} else
{return and__3941__auto__;
}
})())
{return coll;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((self__.has_nil_QMARK_)?self__.cnt:(self__.cnt + 1)),self__.root,true,v,null));
}
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));
var new_root = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc(0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);
if((new_root === self__.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,((added_leaf_QMARK_.val)?(self__.cnt + 1):self__.cnt),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
if((k == null))
{return self__.has_nil_QMARK_;
} else
{if((self__.root == null))
{return false;
} else
{if("\uFDD0'else")
{return !((self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel));
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.call = (function() {
var G__3719 = null;
var G__3719__2 = (function (this_sym3717,k){
var self__ = this;
var this_sym3717__$1 = this;
var coll = this_sym3717__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3719__3 = (function (this_sym3718,k,not_found){
var self__ = this;
var this_sym3718__$1 = this;
var coll = this_sym3718__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3719 = function(this_sym3718,k,not_found){
switch(arguments.length){
case 2:
return G__3719__2.call(this,this_sym3718,k);
case 3:
return G__3719__3.call(this,this_sym3718,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3719;
})()
;
cljs.core.PersistentHashMap.prototype.apply = (function (this_sym3715,args3716){
var self__ = this;
return this_sym3715.call.apply(this_sym3715,[this_sym3715].concat(args3716.slice()));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var init__$1 = ((self__.has_nil_QMARK_)?f.call(null,init,null,self__.nil_val):init);
if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{if(!((self__.root == null)))
{return self__.root.kv_reduce(f,init__$1);
} else
{if("\uFDD0'else")
{return init__$1;
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentHashMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentHashMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{var s = ((!((self__.root == null)))?self__.root.inode_seq():null);
if(self__.has_nil_QMARK_)
{return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([null,self__.nil_val], true),s);
} else
{return s;
}
} else
{return null;
}
});
cljs.core.PersistentHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentHashMap(meta__$1,self__.cnt,self__.root,self__.has_nil_QMARK_,self__.nil_val,self__.__hash));
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentHashMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core._with_meta.call(null,cljs.core.PersistentHashMap.EMPTY,self__.meta);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - 1),self__.root,false,null,null));
} else
{return coll;
}
} else
{if((self__.root == null))
{return coll;
} else
{if("\uFDD0'else")
{var new_root = self__.root.inode_without(0,cljs.core.hash.call(null,k),k);
if((new_root === self__.root))
{return coll;
} else
{return (new cljs.core.PersistentHashMap(self__.meta,(self__.cnt - 1),new_root,self__.has_nil_QMARK_,self__.nil_val,null));
}
} else
{return null;
}
}
}
});
cljs.core.PersistentHashMap.EMPTY = (new cljs.core.PersistentHashMap(null,0,null,false,null,0));
cljs.core.PersistentHashMap.fromArrays = (function (ks,vs){
var len = ks.length;
var i = 0;
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if((i < len))
{{
var G__3720 = (i + 1);
var G__3721 = cljs.core.assoc_BANG_.call(null,out,(ks[i]),(vs[i]));
i = G__3720;
out = G__3721;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
});
goog.provide('cljs.core.TransientHashMap');

/**
* @constructor
*/
cljs.core.TransientHashMap = (function (edit,root,count,has_nil_QMARK_,nil_val){
this.edit = edit;
this.root = root;
this.count = count;
this.has_nil_QMARK_ = has_nil_QMARK_;
this.nil_val = nil_val;
this.cljs$lang$protocol_mask$partition1$ = 56;
this.cljs$lang$protocol_mask$partition0$ = 258;
})
cljs.core.TransientHashMap.cljs$lang$type = true;
cljs.core.TransientHashMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/TransientHashMap");
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientMap$_dissoc_BANG_$arity$2 = (function (tcoll,key){
var self__ = this;
return tcoll.without_BANG_(key);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientAssociative$_assoc_BANG_$arity$3 = (function (tcoll,key,val){
var self__ = this;
return tcoll.assoc_BANG_(key,val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,val){
var self__ = this;
return tcoll.conj_BANG_(val);
});
cljs.core.TransientHashMap.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
return tcoll.persistent_BANG_();
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,k){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return null;
}
} else
{if((self__.root == null))
{return null;
} else
{return self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,k,not_found){
var self__ = this;
if((k == null))
{if(self__.has_nil_QMARK_)
{return self__.nil_val;
} else
{return not_found;
}
} else
{if((self__.root == null))
{return not_found;
} else
{return self__.root.inode_lookup(0,cljs.core.hash.call(null,k),k,not_found);
}
}
});
cljs.core.TransientHashMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if(self__.edit)
{return self__.count;
} else
{throw (new Error("count after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.conj_BANG_ = (function (o){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((function (){var G__3722 = o;
if(G__3722)
{if((function (){var or__3943__auto__ = (G__3722.cljs$lang$protocol_mask$partition0$ & 2048);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3722.cljs$core$IMapEntry$;
}
})())
{return true;
} else
{if((!G__3722.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__3722);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMapEntry,G__3722);
}
})())
{return tcoll.assoc_BANG_(cljs.core.key.call(null,o),cljs.core.val.call(null,o));
} else
{var es = cljs.core.seq.call(null,o);
var tcoll__$1 = tcoll;
while(true){
var temp__4090__auto__ = cljs.core.first.call(null,es);
if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
{
var G__3723 = cljs.core.next.call(null,es);
var G__3724 = tcoll__$1.assoc_BANG_(cljs.core.key.call(null,e),cljs.core.val.call(null,e));
es = G__3723;
tcoll__$1 = G__3724;
continue;
}
} else
{return tcoll__$1;
}
break;
}
}
} else
{throw (new Error("conj! after persistent"));
}
});
cljs.core.TransientHashMap.prototype.assoc_BANG_ = (function (k,v){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((k == null))
{if((self__.nil_val === v))
{} else
{self__.nil_val = v;
}
if(self__.has_nil_QMARK_)
{} else
{self__.count = (self__.count + 1);
self__.has_nil_QMARK_ = true;
}
return tcoll;
} else
{var added_leaf_QMARK_ = (new cljs.core.Box(false));
var node = (((self__.root == null))?cljs.core.BitmapIndexedNode.EMPTY:self__.root).inode_assoc_BANG_(self__.edit,0,cljs.core.hash.call(null,k),k,v,added_leaf_QMARK_);
if((node === self__.root))
{} else
{self__.root = node;
}
if(added_leaf_QMARK_.val)
{self__.count = (self__.count + 1);
} else
{}
return tcoll;
}
} else
{throw (new Error("assoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.without_BANG_ = (function (k){
var self__ = this;
var tcoll = this;
if(self__.edit)
{if((k == null))
{if(self__.has_nil_QMARK_)
{self__.has_nil_QMARK_ = false;
self__.nil_val = null;
self__.count = (self__.count - 1);
return tcoll;
} else
{return tcoll;
}
} else
{if((self__.root == null))
{return tcoll;
} else
{var removed_leaf_QMARK_ = (new cljs.core.Box(false));
var node = self__.root.inode_without_BANG_(self__.edit,0,cljs.core.hash.call(null,k),k,removed_leaf_QMARK_);
if((node === self__.root))
{} else
{self__.root = node;
}
if(cljs.core.truth_((removed_leaf_QMARK_[0])))
{self__.count = (self__.count - 1);
} else
{}
return tcoll;
}
}
} else
{throw (new Error("dissoc! after persistent!"));
}
});
cljs.core.TransientHashMap.prototype.persistent_BANG_ = (function (){
var self__ = this;
var tcoll = this;
if(self__.edit)
{self__.edit = null;
return (new cljs.core.PersistentHashMap(null,self__.count,self__.root,self__.has_nil_QMARK_,self__.nil_val,null));
} else
{throw (new Error("persistent! called twice"));
}
});
cljs.core.tree_map_seq_push = (function tree_map_seq_push(node,stack,ascending_QMARK_){
var t = node;
var stack__$1 = stack;
while(true){
if(!((t == null)))
{{
var G__3725 = ((ascending_QMARK_)?t.left:t.right);
var G__3726 = cljs.core.conj.call(null,stack__$1,t);
t = G__3725;
stack__$1 = G__3726;
continue;
}
} else
{return stack__$1;
}
break;
}
});
goog.provide('cljs.core.PersistentTreeMapSeq');

/**
* @constructor
*/
cljs.core.PersistentTreeMapSeq = (function (meta,stack,ascending_QMARK_,cnt,__hash){
this.meta = meta;
this.stack = stack;
this.ascending_QMARK_ = ascending_QMARK_;
this.cnt = cnt;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 31850574;
})
cljs.core.PersistentTreeMapSeq.cljs$lang$type = true;
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/PersistentTreeMapSeq");
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
return this$;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt < 0))
{return (cljs.core.count.call(null,cljs.core.next.call(null,coll)) + 1);
} else
{return self__.cnt;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_first$arity$1 = (function (this$){
var self__ = this;
return cljs.core.peek.call(null,self__.stack);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var t = cljs.core.first.call(null,self__.stack);
var next_stack = cljs.core.tree_map_seq_push.call(null,((self__.ascending_QMARK_)?t.right:t.left),cljs.core.next.call(null,self__.stack),self__.ascending_QMARK_);
if(!((next_stack == null)))
{return (new cljs.core.PersistentTreeMapSeq(null,next_stack,self__.ascending_QMARK_,(self__.cnt - 1),null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentTreeMapSeq(meta__$1,self__.stack,self__.ascending_QMARK_,self__.cnt,self__.__hash));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
cljs.core.create_tree_map_seq = (function create_tree_map_seq(tree,ascending_QMARK_,cnt){
return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.tree_map_seq_push.call(null,tree,null,ascending_QMARK_),ascending_QMARK_,cnt,null));
});
cljs.core.balance_left = (function balance_left(key,val,ins,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.key,ins.val,ins.left.blacken(),(new cljs.core.BlackNode(key,val,ins.right,right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.right.key,ins.right.val,(new cljs.core.BlackNode(ins.key,ins.val,ins.left,ins.right.left,null)),(new cljs.core.BlackNode(key,val,ins.right.right,right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,ins,right,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,ins,right,null));
}
});
cljs.core.balance_right = (function balance_right(key,val,left,ins){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.right))
{return (new cljs.core.RedNode(ins.key,ins.val,(new cljs.core.BlackNode(key,val,left,ins.left,null)),ins.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,ins.left))
{return (new cljs.core.RedNode(ins.left.key,ins.left.val,(new cljs.core.BlackNode(key,val,left,ins.left.left,null)),(new cljs.core.BlackNode(ins.key,ins.val,ins.left.right,ins.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(key,val,left,ins,null));
} else
{return null;
}
}
}
} else
{return (new cljs.core.BlackNode(key,val,left,ins,null));
}
});
cljs.core.balance_left_del = (function balance_left_del(key,val,del,right){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,del.blacken(),right,null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right))
{return cljs.core.balance_right.call(null,key,val,del,right.redden());
} else
{if((function (){var and__3941__auto__ = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right);
if(and__3941__auto__)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,right.left);
} else
{return and__3941__auto__;
}
})())
{return (new cljs.core.RedNode(right.left.key,right.left.val,(new cljs.core.BlackNode(key,val,del,right.left.left,null)),cljs.core.balance_right.call(null,right.key,right.val,right.left.right,right.right.redden()),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.balance_right_del = (function balance_right_del(key,val,left,del){
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,del))
{return (new cljs.core.RedNode(key,val,left,del.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left))
{return cljs.core.balance_left.call(null,key,val,left.redden(),del);
} else
{if((function (){var and__3941__auto__ = cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left);
if(and__3941__auto__)
{return cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,left.right);
} else
{return and__3941__auto__;
}
})())
{return (new cljs.core.RedNode(left.right.key,left.right.val,cljs.core.balance_left.call(null,left.key,left.val,left.left.redden(),left.right.left),(new cljs.core.BlackNode(key,val,left.right.right,del,null)),null));
} else
{if("\uFDD0'else")
{throw (new Error("red-black tree invariant violation"));
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_kv_reduce = (function tree_map_kv_reduce(node,f,init){
var init__$1 = f.call(null,init,node.key,node.val);
if(cljs.core.reduced_QMARK_.call(null,init__$1))
{return cljs.core.deref.call(null,init__$1);
} else
{var init__$2 = ((!((node.left == null)))?tree_map_kv_reduce.call(null,node.left,f,init__$1):init__$1);
if(cljs.core.reduced_QMARK_.call(null,init__$2))
{return cljs.core.deref.call(null,init__$2);
} else
{var init__$3 = ((!((node.right == null)))?tree_map_kv_reduce.call(null,node.right,f,init__$2):init__$2);
if(cljs.core.reduced_QMARK_.call(null,init__$3))
{return cljs.core.deref.call(null,init__$3);
} else
{return init__$3;
}
}
}
});
goog.provide('cljs.core.BlackNode');

/**
* @constructor
*/
cljs.core.BlackNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.BlackNode.cljs$lang$type = true;
cljs.core.BlackNode.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/BlackNode");
});
cljs.core.BlackNode.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/BlackNode");
});
cljs.core.BlackNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.BlackNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.BlackNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),k,v);
});
cljs.core.BlackNode.prototype.call = (function() {
var G__3731 = null;
var G__3731__2 = (function (this_sym3729,k){
var self__ = this;
var this_sym3729__$1 = this;
var node = this_sym3729__$1;
return node.cljs$core$ILookup$_lookup$arity$2(node,k);
});
var G__3731__3 = (function (this_sym3730,k,not_found){
var self__ = this;
var this_sym3730__$1 = this;
var node = this_sym3730__$1;
return node.cljs$core$ILookup$_lookup$arity$3(node,k,not_found);
});
G__3731 = function(this_sym3730,k,not_found){
switch(arguments.length){
case 2:
return G__3731__2.call(this,this_sym3730,k);
case 3:
return G__3731__3.call(this,this_sym3730,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3731;
})()
;
cljs.core.BlackNode.prototype.apply = (function (this_sym3727,args3728){
var self__ = this;
return this_sym3727.call.apply(this_sym3727,[this_sym3727].concat(args3728.slice()));
});
cljs.core.BlackNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
return cljs.core.PersistentVector.fromArray([self__.key,self__.val,o], true);
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
return self__.key;
});
cljs.core.BlackNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljs.core.BlackNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return ins.balance_right(node);
});
cljs.core.BlackNode.prototype.redden = (function (){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.BlackNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_right_del.call(null,self__.key,self__.val,self__.left,del);
});
cljs.core.BlackNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.BlackNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce.call(null,node,f,init);
});
cljs.core.BlackNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return cljs.core.balance_left_del.call(null,self__.key,self__.val,del,self__.right);
});
cljs.core.BlackNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return ins.balance_left(node);
});
cljs.core.BlackNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
});
cljs.core.BlackNode.prototype.toString = (function() {
var G__3732 = null;
var G__3732__0 = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
G__3732 = function(){
switch(arguments.length){
case 0:
return G__3732__0.call(this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3732;
})()
;
cljs.core.BlackNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
});
cljs.core.BlackNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return node;
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.BlackNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.BlackNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
return cljs.core.list.call(null,self__.key,self__.val);
});
cljs.core.BlackNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
return 2;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljs.core.BlackNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
return cljs.core.PersistentVector.fromArray([self__.key], true);
});
cljs.core.BlackNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),n,v);
});
cljs.core.BlackNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.BlackNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),meta);
});
cljs.core.BlackNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
return null;
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.BlackNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
return cljs.core.PersistentVector.EMPTY;
});
goog.provide('cljs.core.RedNode');

/**
* @constructor
*/
cljs.core.RedNode = (function (key,val,left,right,__hash){
this.key = key;
this.val = val;
this.left = left;
this.right = right;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32402207;
})
cljs.core.RedNode.cljs$lang$type = true;
cljs.core.RedNode.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/RedNode");
});
cljs.core.RedNode.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/RedNode");
});
cljs.core.RedNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (node,k){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,null);
});
cljs.core.RedNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (node,k,not_found){
var self__ = this;
return node.cljs$core$IIndexed$_nth$arity$3(node,k,not_found);
});
cljs.core.RedNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (node,k,v){
var self__ = this;
return cljs.core.assoc.call(null,cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),k,v);
});
cljs.core.RedNode.prototype.call = (function() {
var G__3737 = null;
var G__3737__2 = (function (this_sym3735,k){
var self__ = this;
var this_sym3735__$1 = this;
var node = this_sym3735__$1;
return node.cljs$core$ILookup$_lookup$arity$2(node,k);
});
var G__3737__3 = (function (this_sym3736,k,not_found){
var self__ = this;
var this_sym3736__$1 = this;
var node = this_sym3736__$1;
return node.cljs$core$ILookup$_lookup$arity$3(node,k,not_found);
});
G__3737 = function(this_sym3736,k,not_found){
switch(arguments.length){
case 2:
return G__3737__2.call(this,this_sym3736,k);
case 3:
return G__3737__3.call(this,this_sym3736,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3737;
})()
;
cljs.core.RedNode.prototype.apply = (function (this_sym3733,args3734){
var self__ = this;
return this_sym3733.call.apply(this_sym3733,[this_sym3733].concat(args3734.slice()));
});
cljs.core.RedNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (node,o){
var self__ = this;
return cljs.core.PersistentVector.fromArray([self__.key,self__.val,o], true);
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (node){
var self__ = this;
return self__.key;
});
cljs.core.RedNode.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljs.core.RedNode.prototype.add_right = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,ins,null));
});
cljs.core.RedNode.prototype.redden = (function (){
var self__ = this;
var node = this;
throw (new Error("red-black tree invariant violation"));
});
cljs.core.RedNode.prototype.remove_right = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,self__.left,del,null));
});
cljs.core.RedNode.prototype.replace = (function (key__$1,val__$1,left__$1,right__$1){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(key__$1,val__$1,left__$1,right__$1,null));
});
cljs.core.RedNode.prototype.kv_reduce = (function (f,init){
var self__ = this;
var node = this;
return cljs.core.tree_map_kv_reduce.call(null,node,f,init);
});
cljs.core.RedNode.prototype.remove_left = (function (del){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,del,self__.right,null));
});
cljs.core.RedNode.prototype.add_left = (function (ins){
var self__ = this;
var node = this;
return (new cljs.core.RedNode(self__.key,self__.val,ins,self__.right,null));
});
cljs.core.RedNode.prototype.balance_left = (function (parent){
var self__ = this;
var node = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,self__.left))
{return (new cljs.core.RedNode(self__.key,self__.val,self__.left.blacken(),(new cljs.core.BlackNode(parent.key,parent.val,self__.right,parent.right,null)),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,self__.right))
{return (new cljs.core.RedNode(self__.right.key,self__.right.val,(new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right.left,null)),(new cljs.core.BlackNode(parent.key,parent.val,self__.right.right,parent.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,node,parent.right,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.toString = (function() {
var G__3738 = null;
var G__3738__0 = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
G__3738 = function(){
switch(arguments.length){
case 0:
return G__3738__0.call(this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3738;
})()
;
cljs.core.RedNode.prototype.balance_right = (function (parent){
var self__ = this;
var node = this;
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,self__.right))
{return (new cljs.core.RedNode(self__.key,self__.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left,null)),self__.right.blacken(),null));
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,self__.left))
{return (new cljs.core.RedNode(self__.left.key,self__.left.val,(new cljs.core.BlackNode(parent.key,parent.val,parent.left,self__.left.left,null)),(new cljs.core.BlackNode(self__.key,self__.val,self__.left.right,self__.right,null)),null));
} else
{if("\uFDD0'else")
{return (new cljs.core.BlackNode(parent.key,parent.val,parent.left,node,null));
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.blacken = (function (){
var self__ = this;
var node = this;
return (new cljs.core.BlackNode(self__.key,self__.val,self__.left,self__.right,null));
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (node,f){
var self__ = this;
return cljs.core.ci_reduce.call(null,node,f);
});
cljs.core.RedNode.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (node,f,start){
var self__ = this;
return cljs.core.ci_reduce.call(null,node,f,start);
});
cljs.core.RedNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (node){
var self__ = this;
return cljs.core.list.call(null,self__.key,self__.val);
});
cljs.core.RedNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (node){
var self__ = this;
return 2;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_peek$arity$1 = (function (node){
var self__ = this;
return self__.val;
});
cljs.core.RedNode.prototype.cljs$core$IStack$_pop$arity$1 = (function (node){
var self__ = this;
return cljs.core.PersistentVector.fromArray([self__.key], true);
});
cljs.core.RedNode.prototype.cljs$core$IVector$_assoc_n$arity$3 = (function (node,n,v){
var self__ = this;
return cljs.core._assoc_n.call(null,cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),n,v);
});
cljs.core.RedNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.RedNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (node,meta){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.fromArray([self__.key,self__.val], true),meta);
});
cljs.core.RedNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (node){
var self__ = this;
return null;
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (node,n){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return null;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (node,n,not_found){
var self__ = this;
if((n === 0))
{return self__.key;
} else
{if((n === 1))
{return self__.val;
} else
{if("\uFDD0'else")
{return not_found;
} else
{return null;
}
}
}
});
cljs.core.RedNode.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (node){
var self__ = this;
return cljs.core.PersistentVector.EMPTY;
});
cljs.core.tree_map_add = (function tree_map_add(comp,tree,k,v,found){
if((tree == null))
{return (new cljs.core.RedNode(k,v,null,null,null));
} else
{var c = comp.call(null,k,tree.key);
if((c === 0))
{(found[0] = tree);
return null;
} else
{if((c < 0))
{var ins = tree_map_add.call(null,comp,tree.left,k,v,found);
if(!((ins == null)))
{return tree.add_left(ins);
} else
{return null;
}
} else
{if("\uFDD0'else")
{var ins = tree_map_add.call(null,comp,tree.right,k,v,found);
if(!((ins == null)))
{return tree.add_right(ins);
} else
{return null;
}
} else
{return null;
}
}
}
}
});
cljs.core.tree_map_append = (function tree_map_append(left,right){
if((left == null))
{return right;
} else
{if((right == null))
{return left;
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,left))
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{var app = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.RedNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.RedNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,(new cljs.core.RedNode(right.key,right.val,app,right.right,null)),null));
}
} else
{return (new cljs.core.RedNode(left.key,left.val,left.left,tree_map_append.call(null,left.right,right),null));
}
} else
{if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,right))
{return (new cljs.core.RedNode(right.key,right.val,tree_map_append.call(null,left,right.left),right.right,null));
} else
{if("\uFDD0'else")
{var app = tree_map_append.call(null,left.right,right.left);
if(cljs.core.instance_QMARK_.call(null,cljs.core.RedNode,app))
{return (new cljs.core.RedNode(app.key,app.val,(new cljs.core.BlackNode(left.key,left.val,left.left,app.left,null)),(new cljs.core.BlackNode(right.key,right.val,app.right,right.right,null)),null));
} else
{return cljs.core.balance_left_del.call(null,left.key,left.val,left.left,(new cljs.core.BlackNode(right.key,right.val,app,right.right,null)));
}
} else
{return null;
}
}
}
}
}
});
cljs.core.tree_map_remove = (function tree_map_remove(comp,tree,k,found){
if(!((tree == null)))
{var c = comp.call(null,k,tree.key);
if((c === 0))
{(found[0] = tree);
return cljs.core.tree_map_append.call(null,tree.left,tree.right);
} else
{if((c < 0))
{var del = tree_map_remove.call(null,comp,tree.left,k,found);
if((function (){var or__3943__auto__ = !((del == null));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.left))
{return cljs.core.balance_left_del.call(null,tree.key,tree.val,del,tree.right);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,del,tree.right,null));
}
} else
{return null;
}
} else
{if("\uFDD0'else")
{var del = tree_map_remove.call(null,comp,tree.right,k,found);
if((function (){var or__3943__auto__ = !((del == null));
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return !(((found[0]) == null));
}
})())
{if(cljs.core.instance_QMARK_.call(null,cljs.core.BlackNode,tree.right))
{return cljs.core.balance_right_del.call(null,tree.key,tree.val,tree.left,del);
} else
{return (new cljs.core.RedNode(tree.key,tree.val,tree.left,del,null));
}
} else
{return null;
}
} else
{return null;
}
}
}
} else
{return null;
}
});
cljs.core.tree_map_replace = (function tree_map_replace(comp,tree,k,v){
var tk = tree.key;
var c = comp.call(null,k,tk);
if((c === 0))
{return tree.replace(tk,v,tree.left,tree.right);
} else
{if((c < 0))
{return tree.replace(tk,tree.val,tree_map_replace.call(null,comp,tree.left,k,v),tree.right);
} else
{if("\uFDD0'else")
{return tree.replace(tk,tree.val,tree.left,tree_map_replace.call(null,comp,tree.right,k,v));
} else
{return null;
}
}
}
});
goog.provide('cljs.core.PersistentTreeMap');

/**
* @constructor
*/
cljs.core.PersistentTreeMap = (function (comp,tree,cnt,meta,__hash){
this.comp = comp;
this.tree = tree;
this.cnt = cnt;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 418776847;
})
cljs.core.PersistentTreeMap.cljs$lang$type = true;
cljs.core.PersistentTreeMap.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/PersistentTreeMap");
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_imap.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,null);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var n = coll.entry_at(k);
if(!((n == null)))
{return n.val;
} else
{return not_found;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var found = [null];
var t = cljs.core.tree_map_add.call(null,self__.comp,self__.tree,k,v,found);
if((t == null))
{var found_node = cljs.core.nth.call(null,found,0);
if(cljs.core._EQ_.call(null,v,found_node.val))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,cljs.core.tree_map_replace.call(null,self__.comp,self__.tree,k,v),self__.cnt,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt + 1),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
return !((coll.entry_at(k) == null));
});
cljs.core.PersistentTreeMap.prototype.call = (function() {
var G__3743 = null;
var G__3743__2 = (function (this_sym3741,k){
var self__ = this;
var this_sym3741__$1 = this;
var coll = this_sym3741__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3743__3 = (function (this_sym3742,k,not_found){
var self__ = this;
var this_sym3742__$1 = this;
var coll = this_sym3742__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3743 = function(this_sym3742,k,not_found){
switch(arguments.length){
case 2:
return G__3743__2.call(this,this_sym3742,k);
case 3:
return G__3743__3.call(this,this_sym3742,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3743;
})()
;
cljs.core.PersistentTreeMap.prototype.apply = (function (this_sym3739,args3740){
var self__ = this;
return this_sym3739.call.apply(this_sym3739,[this_sym3739].concat(args3740.slice()));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
if(!((self__.tree == null)))
{return cljs.core.tree_map_kv_reduce.call(null,self__.tree,f,init);
} else
{return init;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
if(cljs.core.vector_QMARK_.call(null,entry))
{return coll.cljs$core$IAssociative$_assoc$arity$3(coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,self__.tree,false,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentTreeMap.prototype.entry_at = (function (k){
var self__ = this;
var coll = this;
var t = self__.tree;
while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);
if((c === 0))
{return t;
} else
{if((c < 0))
{{
var G__3744 = t.left;
t = G__3744;
continue;
}
} else
{if("\uFDD0'else")
{{
var G__3745 = t.right;
t = G__3745;
continue;
}
} else
{return null;
}
}
}
} else
{return null;
}
break;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,self__.tree,ascending_QMARK_,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
if((self__.cnt > 0))
{var stack = null;
var t = self__.tree;
while(true){
if(!((t == null)))
{var c = self__.comp.call(null,k,t.key);
if((c === 0))
{return (new cljs.core.PersistentTreeMapSeq(null,cljs.core.conj.call(null,stack,t),ascending_QMARK_,-1,null));
} else
{if(cljs.core.truth_(ascending_QMARK_))
{if((c < 0))
{{
var G__3746 = cljs.core.conj.call(null,stack,t);
var G__3747 = t.left;
stack = G__3746;
t = G__3747;
continue;
}
} else
{{
var G__3748 = stack;
var G__3749 = t.right;
stack = G__3748;
t = G__3749;
continue;
}
}
} else
{if("\uFDD0'else")
{if((c > 0))
{{
var G__3750 = cljs.core.conj.call(null,stack,t);
var G__3751 = t.right;
stack = G__3750;
t = G__3751;
continue;
}
} else
{{
var G__3752 = stack;
var G__3753 = t.left;
stack = G__3752;
t = G__3753;
continue;
}
}
} else
{return null;
}
}
}
} else
{if((stack == null))
{return null;
} else
{return (new cljs.core.PersistentTreeMapSeq(null,stack,ascending_QMARK_,-1,null));
}
}
break;
}
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
return cljs.core.key.call(null,entry);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
return self__.comp;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
if((self__.cnt > 0))
{return cljs.core.create_tree_map_seq.call(null,self__.tree,true,self__.cnt);
} else
{return null;
}
});
cljs.core.PersistentTreeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return self__.cnt;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentTreeMap(self__.comp,self__.tree,self__.cnt,meta__$1,self__.__hash));
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeMap.EMPTY,self__.meta);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var found = [null];
var t = cljs.core.tree_map_remove.call(null,self__.comp,self__.tree,k,found);
if((t == null))
{if((cljs.core.nth.call(null,found,0) == null))
{return coll;
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,null,0,self__.meta,null));
}
} else
{return (new cljs.core.PersistentTreeMap(self__.comp,t.blacken(),(self__.cnt - 1),self__.meta,null));
}
});
cljs.core.PersistentTreeMap.EMPTY = (new cljs.core.PersistentTreeMap(cljs.core.compare,null,0,null,0));
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashMap.EMPTY);
while(true){
if(in$)
{{
var G__3754 = cljs.core.nnext.call(null,in$);
var G__3755 = cljs.core.assoc_BANG_.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__3754;
out = G__3755;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3756){
var keyvals = cljs.core.seq(arglist__3756);;
return hash_map__delegate(keyvals);
});
hash_map.cljs$lang$arity$variadic = hash_map__delegate;
return hash_map;
})()
;
/**
* keyval => key val
* Returns a new array map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.array_map = (function() { 
var array_map__delegate = function (keyvals){
return (new cljs.core.PersistentArrayMap(null,cljs.core.quot.call(null,cljs.core.count.call(null,keyvals),2),cljs.core.apply.call(null,cljs.core.array,keyvals),null));
};
var array_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return array_map__delegate.call(this, keyvals);
};
array_map.cljs$lang$maxFixedArity = 0;
array_map.cljs$lang$applyTo = (function (arglist__3757){
var keyvals = cljs.core.seq(arglist__3757);;
return array_map__delegate(keyvals);
});
array_map.cljs$lang$arity$variadic = array_map__delegate;
return array_map;
})()
;
/**
* keyval => key val
* Returns a new object map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.obj_map = (function() { 
var obj_map__delegate = function (keyvals){
var ks = [];
var obj = {};
var kvs = cljs.core.seq.call(null,keyvals);
while(true){
if(kvs)
{ks.push(cljs.core.first.call(null,kvs));
(obj[cljs.core.first.call(null,kvs)] = cljs.core.second.call(null,kvs));
{
var G__3758 = cljs.core.nnext.call(null,kvs);
kvs = G__3758;
continue;
}
} else
{return cljs.core.ObjMap.fromObject.call(null,ks,obj);
}
break;
}
};
var obj_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return obj_map__delegate.call(this, keyvals);
};
obj_map.cljs$lang$maxFixedArity = 0;
obj_map.cljs$lang$applyTo = (function (arglist__3759){
var keyvals = cljs.core.seq(arglist__3759);;
return obj_map__delegate(keyvals);
});
obj_map.cljs$lang$arity$variadic = obj_map__delegate;
return obj_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.sorted_map = (function() { 
var sorted_map__delegate = function (keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = cljs.core.PersistentTreeMap.EMPTY;
while(true){
if(in$)
{{
var G__3760 = cljs.core.nnext.call(null,in$);
var G__3761 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__3760;
out = G__3761;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_map__delegate.call(this, keyvals);
};
sorted_map.cljs$lang$maxFixedArity = 0;
sorted_map.cljs$lang$applyTo = (function (arglist__3762){
var keyvals = cljs.core.seq(arglist__3762);;
return sorted_map__delegate(keyvals);
});
sorted_map.cljs$lang$arity$variadic = sorted_map__delegate;
return sorted_map;
})()
;
/**
* keyval => key val
* Returns a new sorted map with supplied mappings, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_map_by = (function() { 
var sorted_map_by__delegate = function (comparator,keyvals){
var in$ = cljs.core.seq.call(null,keyvals);
var out = (new cljs.core.PersistentTreeMap(cljs.core.fn__GT_comparator.call(null,comparator),null,0,null,0));
while(true){
if(in$)
{{
var G__3763 = cljs.core.nnext.call(null,in$);
var G__3764 = cljs.core.assoc.call(null,out,cljs.core.first.call(null,in$),cljs.core.second.call(null,in$));
in$ = G__3763;
out = G__3764;
continue;
}
} else
{return out;
}
break;
}
};
var sorted_map_by = function (comparator,var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_map_by__delegate.call(this, comparator, keyvals);
};
sorted_map_by.cljs$lang$maxFixedArity = 1;
sorted_map_by.cljs$lang$applyTo = (function (arglist__3765){
var comparator = cljs.core.first(arglist__3765);
var keyvals = cljs.core.rest(arglist__3765);
return sorted_map_by__delegate(comparator, keyvals);
});
sorted_map_by.cljs$lang$arity$variadic = sorted_map_by__delegate;
return sorted_map_by;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key.call(null,map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val.call(null,map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3766_SHARP_,p2__3767_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3943__auto__ = p1__3766_SHARP_;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),p2__3767_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3768){
var maps = cljs.core.seq(arglist__3768);;
return merge__delegate(maps);
});
merge.cljs$lang$arity$variadic = merge__delegate;
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry = (function (m,e){
var k = cljs.core.first.call(null,e);
var v = cljs.core.second.call(null,e);
if(cljs.core.contains_QMARK_.call(null,m,k))
{return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core._lookup.call(null,m,k,null),v));
} else
{return cljs.core.assoc.call(null,m,k,v);
}
});
var merge2 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__3943__auto__ = m1;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.ObjMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge2,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3769){
var f = cljs.core.first(arglist__3769);
var maps = cljs.core.rest(arglist__3769);
return merge_with__delegate(f, maps);
});
merge_with.cljs$lang$arity$variadic = merge_with__delegate;
return merge_with;
})()
;
/**
* Like merge-with, but merges maps recursively, applying the given fn
* only when there's a non-map at a particular level.
* 
* (deepmerge + {:a {:b {:c 1 :d {:x 1 :y 2}} :e 3} :f 4}
* {:a {:b {:c 2 :d {:z 9} :z 3} :e 100}})
* -> {:a {:b {:z 3, :c 3, :d {:z 9, :x 1, :y 2}}, :e 103}, :f 4}
* @param {...*} var_args
*/
cljs.core.deep_merge_with = (function() { 
var deep_merge_with__delegate = function (f,maps){
return cljs.core.apply.call(null,(function() { 
var m__delegate = function (maps__$1){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1))
{return cljs.core.apply.call(null,cljs.core.merge_with,m,maps__$1);
} else
{return cljs.core.apply.call(null,f,maps__$1);
}
};
var m = function (var_args){
var maps__$1 = null;
if (goog.isDef(var_args)) {
  maps__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return m__delegate.call(this, maps__$1);
};
m.cljs$lang$maxFixedArity = 0;
m.cljs$lang$applyTo = (function (arglist__3770){
var maps__$1 = cljs.core.seq(arglist__3770);;
return m__delegate(maps__$1);
});
m.cljs$lang$arity$variadic = m__delegate;
return m;
})()
,maps);
};
var deep_merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return deep_merge_with__delegate.call(this, f, maps);
};
deep_merge_with.cljs$lang$maxFixedArity = 1;
deep_merge_with.cljs$lang$applyTo = (function (arglist__3771){
var f = cljs.core.first(arglist__3771);
var maps = cljs.core.rest(arglist__3771);
return deep_merge_with__delegate(f, maps);
});
deep_merge_with.cljs$lang$arity$variadic = deep_merge_with__delegate;
return deep_merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret = cljs.core.ObjMap.EMPTY;
var keys = cljs.core.seq.call(null,keyseq);
while(true){
if(keys)
{var key = cljs.core.first.call(null,keys);
var entry = cljs.core._lookup.call(null,map,key,"\uFDD0'cljs.core/not-found");
{
var G__3772 = ((cljs.core.not_EQ_.call(null,entry,"\uFDD0'cljs.core/not-found"))?cljs.core.assoc.call(null,ret,key,entry):ret);
var G__3773 = cljs.core.next.call(null,keys);
ret = G__3772;
keys = G__3773;
continue;
}
} else
{return ret;
}
break;
}
});
goog.provide('cljs.core.PersistentHashSet');

/**
* @constructor
*/
cljs.core.PersistentHashSet = (function (meta,hash_map,__hash){
this.meta = meta;
this.hash_map = hash_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 4;
this.cljs$lang$protocol_mask$partition0$ = 15077647;
})
cljs.core.PersistentHashSet.cljs$lang$type = true;
cljs.core.PersistentHashSet.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/PersistentHashSet");
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEditableCollection$_as_transient$arity$1 = (function (coll){
var self__ = this;
return (new cljs.core.TransientHashSet(cljs.core.transient$.call(null,self__.hash_map)));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_iset.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,self__.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.PersistentHashSet.prototype.call = (function() {
var G__3779 = null;
var G__3779__2 = (function (this_sym3777,k){
var self__ = this;
var this_sym3777__$1 = this;
var coll = this_sym3777__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3779__3 = (function (this_sym3778,k,not_found){
var self__ = this;
var this_sym3778__$1 = this;
var coll = this_sym3778__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3779 = function(this_sym3778,k,not_found){
switch(arguments.length){
case 2:
return G__3779__2.call(this,this_sym3778,k);
case 3:
return G__3779__3.call(this,this_sym3778,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3779;
})()
;
cljs.core.PersistentHashSet.prototype.apply = (function (this_sym3775,args3776){
var self__ = this;
return this_sym3775.call.apply(this_sym3775,[this_sym3775].concat(args3776.slice()));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.assoc.call(null,self__.hash_map,o,null),null));
});
cljs.core.PersistentHashSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.keys.call(null,self__.hash_map);
});
cljs.core.PersistentHashSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
return (new cljs.core.PersistentHashSet(self__.meta,cljs.core.dissoc.call(null,self__.hash_map,v),null));
});
cljs.core.PersistentHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var and__3941__auto__ = cljs.core.set_QMARK_.call(null,other);
if(and__3941__auto__)
{var and__3941__auto____$1 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3941__auto____$1)
{return cljs.core.every_QMARK_.call(null,(function (p1__3774_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3774_SHARP_);
}),other);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
cljs.core.PersistentHashSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentHashSet(meta__$1,self__.hash_map,self__.__hash));
});
cljs.core.PersistentHashSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentHashSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentHashSet.EMPTY,self__.meta);
});
cljs.core.PersistentHashSet.EMPTY = (new cljs.core.PersistentHashSet(null,cljs.core.hash_map.call(null),0));
cljs.core.PersistentHashSet.fromArray = (function (items){
var len = cljs.core.count.call(null,items);
var i = 0;
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len))
{{
var G__3780 = (i + 1);
var G__3781 = cljs.core.conj_BANG_.call(null,out,(items[i]));
i = G__3780;
out = G__3781;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
});
goog.provide('cljs.core.TransientHashSet');

/**
* @constructor
*/
cljs.core.TransientHashSet = (function (transient_map){
this.transient_map = transient_map;
this.cljs$lang$protocol_mask$partition0$ = 259;
this.cljs$lang$protocol_mask$partition1$ = 136;
})
cljs.core.TransientHashSet.cljs$lang$type = true;
cljs.core.TransientHashSet.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/TransientHashSet");
});
cljs.core.TransientHashSet.prototype.call = (function() {
var G__3787 = null;
var G__3787__2 = (function (this_sym3785,k){
var self__ = this;
var this_sym3785__$1 = this;
var tcoll = this_sym3785__$1;
if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return null;
} else
{return k;
}
});
var G__3787__3 = (function (this_sym3786,k,not_found){
var self__ = this;
var this_sym3786__$1 = this;
var tcoll = this_sym3786__$1;
if((cljs.core._lookup.call(null,self__.transient_map,k,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return k;
}
});
G__3787 = function(this_sym3786,k,not_found){
switch(arguments.length){
case 2:
return G__3787__2.call(this,this_sym3786,k);
case 3:
return G__3787__3.call(this,this_sym3786,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3787;
})()
;
cljs.core.TransientHashSet.prototype.apply = (function (this_sym3783,args3784){
var self__ = this;
return this_sym3783.call.apply(this_sym3783,[this_sym3783].concat(args3784.slice()));
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (tcoll,v){
var self__ = this;
return tcoll.cljs$core$ILookup$_lookup$arity$3(tcoll,v,null);
});
cljs.core.TransientHashSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (tcoll,v,not_found){
var self__ = this;
if((cljs.core._lookup.call(null,self__.transient_map,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel))
{return not_found;
} else
{return v;
}
});
cljs.core.TransientHashSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (tcoll){
var self__ = this;
return cljs.core.count.call(null,self__.transient_map);
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientSet$_disjoin_BANG_$arity$2 = (function (tcoll,v){
var self__ = this;
self__.transient_map = cljs.core.dissoc_BANG_.call(null,self__.transient_map,v);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_conj_BANG_$arity$2 = (function (tcoll,o){
var self__ = this;
self__.transient_map = cljs.core.assoc_BANG_.call(null,self__.transient_map,o,null);
return tcoll;
});
cljs.core.TransientHashSet.prototype.cljs$core$ITransientCollection$_persistent_BANG_$arity$1 = (function (tcoll){
var self__ = this;
return (new cljs.core.PersistentHashSet(null,cljs.core.persistent_BANG_.call(null,self__.transient_map),null));
});
goog.provide('cljs.core.PersistentTreeSet');

/**
* @constructor
*/
cljs.core.PersistentTreeSet = (function (meta,tree_map,__hash){
this.meta = meta;
this.tree_map = tree_map;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 417730831;
})
cljs.core.PersistentTreeSet.cljs$lang$type = true;
cljs.core.PersistentTreeSet.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/PersistentTreeSet");
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_iset.call(null,coll);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,v){
var self__ = this;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,v,null);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,v,not_found){
var self__ = this;
var n = self__.tree_map.entry_at(v);
if(!((n == null)))
{return n.key;
} else
{return not_found;
}
});
cljs.core.PersistentTreeSet.prototype.call = (function() {
var G__3792 = null;
var G__3792__2 = (function (this_sym3790,k){
var self__ = this;
var this_sym3790__$1 = this;
var coll = this_sym3790__$1;
return coll.cljs$core$ILookup$_lookup$arity$2(coll,k);
});
var G__3792__3 = (function (this_sym3791,k,not_found){
var self__ = this;
var this_sym3791__$1 = this;
var coll = this_sym3791__$1;
return coll.cljs$core$ILookup$_lookup$arity$3(coll,k,not_found);
});
G__3792 = function(this_sym3791,k,not_found){
switch(arguments.length){
case 2:
return G__3792__2.call(this,this_sym3791,k);
case 3:
return G__3792__3.call(this,this_sym3791,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__3792;
})()
;
cljs.core.PersistentTreeSet.prototype.apply = (function (this_sym3788,args3789){
var self__ = this;
return this_sym3788.call.apply(this_sym3788,[this_sym3788].concat(args3789.slice()));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,o){
var self__ = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.assoc.call(null,self__.tree_map,o,null),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core.rseq.call(null,self__.tree_map));
});
cljs.core.PersistentTreeSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq$arity$2 = (function (coll,ascending_QMARK_){
var self__ = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq.call(null,self__.tree_map,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_sorted_seq_from$arity$3 = (function (coll,k,ascending_QMARK_){
var self__ = this;
return cljs.core.map.call(null,cljs.core.key,cljs.core._sorted_seq_from.call(null,self__.tree_map,k,ascending_QMARK_));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_entry_key$arity$2 = (function (coll,entry){
var self__ = this;
return entry;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISorted$_comparator$arity$1 = (function (coll){
var self__ = this;
return cljs.core._comparator.call(null,self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
return cljs.core.keys.call(null,self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (coll,v){
var self__ = this;
return (new cljs.core.PersistentTreeSet(self__.meta,cljs.core.dissoc.call(null,self__.tree_map,v),null));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
return cljs.core.count.call(null,self__.tree_map);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var and__3941__auto__ = cljs.core.set_QMARK_.call(null,other);
if(and__3941__auto__)
{var and__3941__auto____$1 = (cljs.core.count.call(null,coll) === cljs.core.count.call(null,other));
if(and__3941__auto____$1)
{return cljs.core.every_QMARK_.call(null,(function (p1__3782_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3782_SHARP_);
}),other);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta__$1){
var self__ = this;
return (new cljs.core.PersistentTreeSet(meta__$1,self__.tree_map,self__.__hash));
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
return self__.meta;
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentTreeSet.EMPTY,self__.meta);
});
cljs.core.PersistentTreeSet.EMPTY = (new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map.call(null),0));
/**
* @param {...*} var_args
*/
cljs.core.hash_set = (function() {
var hash_set = null;
var hash_set__0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});
var hash_set__1 = (function() { 
var G__3793__delegate = function (keys){
var in$ = cljs.core.seq.call(null,keys);
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if(cljs.core.seq.call(null,in$))
{{
var G__3794 = cljs.core.next.call(null,in$);
var G__3795 = cljs.core.conj_BANG_.call(null,out,cljs.core.first.call(null,in$));
in$ = G__3794;
out = G__3795;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,out);
}
break;
}
};
var G__3793 = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3793__delegate.call(this, keys);
};
G__3793.cljs$lang$maxFixedArity = 0;
G__3793.cljs$lang$applyTo = (function (arglist__3796){
var keys = cljs.core.seq(arglist__3796);;
return G__3793__delegate(keys);
});
G__3793.cljs$lang$arity$variadic = G__3793__delegate;
return G__3793;
})()
;
hash_set = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return hash_set__0.call(this);
default:
return hash_set__1.cljs$lang$arity$variadic(cljs.core.array_seq(arguments, 0));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hash_set.cljs$lang$maxFixedArity = 0;
hash_set.cljs$lang$applyTo = hash_set__1.cljs$lang$applyTo;
hash_set.cljs$lang$arity$0 = hash_set__0;
hash_set.cljs$lang$arity$variadic = hash_set__1.cljs$lang$arity$variadic;
return hash_set;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
return cljs.core.apply.call(null,cljs.core.hash_set,coll);
});
/**
* Returns a new sorted set with supplied keys.
* @param {...*} var_args
*/
cljs.core.sorted_set = (function() { 
var sorted_set__delegate = function (keys){
return cljs.core.reduce.call(null,cljs.core._conj,cljs.core.PersistentTreeSet.EMPTY,keys);
};
var sorted_set = function (var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return sorted_set__delegate.call(this, keys);
};
sorted_set.cljs$lang$maxFixedArity = 0;
sorted_set.cljs$lang$applyTo = (function (arglist__3797){
var keys = cljs.core.seq(arglist__3797);;
return sorted_set__delegate(keys);
});
sorted_set.cljs$lang$arity$variadic = sorted_set__delegate;
return sorted_set;
})()
;
/**
* Returns a new sorted set with supplied keys, using the supplied comparator.
* @param {...*} var_args
*/
cljs.core.sorted_set_by = (function() { 
var sorted_set_by__delegate = function (comparator,keys){
return cljs.core.reduce.call(null,cljs.core._conj,(new cljs.core.PersistentTreeSet(null,cljs.core.sorted_map_by.call(null,comparator),0)),keys);
};
var sorted_set_by = function (comparator,var_args){
var keys = null;
if (goog.isDef(var_args)) {
  keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return sorted_set_by__delegate.call(this, comparator, keys);
};
sorted_set_by.cljs$lang$maxFixedArity = 1;
sorted_set_by.cljs$lang$applyTo = (function (arglist__3799){
var comparator = cljs.core.first(arglist__3799);
var keys = cljs.core.rest(arglist__3799);
return sorted_set_by__delegate(comparator, keys);
});
sorted_set_by.cljs$lang$arity$variadic = sorted_set_by__delegate;
return sorted_set_by;
})()
;
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.vector_QMARK_.call(null,coll))
{var n = cljs.core.count.call(null,coll);
return cljs.core.reduce.call(null,(function (v,i){
var temp__4090__auto__ = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));
if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3798_SHARP_){
var temp__4090__auto__ = cljs.core.find.call(null,smap,p1__3798_SHARP_);
if(cljs.core.truth_(temp__4090__auto__))
{var e = temp__4090__auto__;
return cljs.core.second.call(null,e);
} else
{return p1__3798_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3806,seen__$1){
while(true){
var vec__3807 = p__3806;
var f = cljs.core.nth.call(null,vec__3807,0,null);
var xs__$1 = vec__3807;
var temp__4092__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.contains_QMARK_.call(null,seen__$1,f))
{{
var G__3808 = cljs.core.rest.call(null,s);
var G__3809 = seen__$1;
p__3806 = G__3808;
seen__$1 = G__3809;
continue;
}
} else
{return cljs.core.cons.call(null,f,step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,f)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});
cljs.core.butlast = (function butlast(s){
var ret = cljs.core.PersistentVector.EMPTY;
var s__$1 = s;
while(true){
if(cljs.core.next.call(null,s__$1))
{{
var G__3810 = cljs.core.conj.call(null,ret,cljs.core.first.call(null,s__$1));
var G__3811 = cljs.core.next.call(null,s__$1);
ret = G__3810;
s__$1 = G__3811;
continue;
}
} else
{return cljs.core.seq.call(null,ret);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.string_QMARK_.call(null,x))
{return x;
} else
{if(cljs.core.symbol_QMARK_.call(null,x))
{var x__$1 = [cljs.core.str(x)].join('');
var i = x__$1.lastIndexOf("/");
if((function (){var or__3943__auto__ = (i < 0);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (x__$1 === "/");
}
})())
{return x__$1;
} else
{return cljs.core.subs.call(null,x__$1,(i + 1));
}
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{var i = x.lastIndexOf("/");
if((i < 0))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i + 1));
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support name: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.symbol_QMARK_.call(null,x))
{var x__$1 = [cljs.core.str(x)].join('');
var i = x__$1.lastIndexOf("/");
if((function (){var or__3943__auto__ = (i < 0);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return (x__$1 === "/");
}
})())
{return null;
} else
{return cljs.core.subs.call(null,x__$1,0,i);
}
} else
{if(cljs.core.keyword_QMARK_.call(null,x))
{var i = x.lastIndexOf("/");
if((i > -1))
{return cljs.core.subs.call(null,x,2,i);
} else
{return null;
}
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Doesn't support namespace: "),cljs.core.str(x)].join('')));
} else
{return null;
}
}
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map = cljs.core.ObjMap.EMPTY;
var ks = cljs.core.seq.call(null,keys);
var vs = cljs.core.seq.call(null,vals);
while(true){
if((function (){var and__3941__auto__ = ks;
if(and__3941__auto__)
{return vs;
} else
{return and__3941__auto__;
}
})())
{{
var G__3814 = cljs.core.assoc.call(null,map,cljs.core.first.call(null,ks),cljs.core.first.call(null,vs));
var G__3815 = cljs.core.next.call(null,ks);
var G__3816 = cljs.core.next.call(null,vs);
map = G__3814;
ks = G__3815;
vs = G__3816;
continue;
}
} else
{return map;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if((k.call(null,x) > k.call(null,y)))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__3819__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3812_SHARP_,p2__3813_SHARP_){
return max_key.call(null,k,p1__3812_SHARP_,p2__3813_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3819 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3819__delegate.call(this, k, x, y, more);
};
G__3819.cljs$lang$maxFixedArity = 3;
G__3819.cljs$lang$applyTo = (function (arglist__3820){
var k = cljs.core.first(arglist__3820);
var x = cljs.core.first(cljs.core.next(arglist__3820));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3820)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3820)));
return G__3819__delegate(k, x, y, more);
});
G__3819.cljs$lang$arity$variadic = G__3819__delegate;
return G__3819;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return max_key__2.call(this,k,x);
case 3:
return max_key__3.call(this,k,x,y);
default:
return max_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.cljs$lang$arity$2 = max_key__2;
max_key.cljs$lang$arity$3 = max_key__3;
max_key.cljs$lang$arity$variadic = max_key__4.cljs$lang$arity$variadic;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if((k.call(null,x) < k.call(null,y)))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__3821__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3817_SHARP_,p2__3818_SHARP_){
return min_key.call(null,k,p1__3817_SHARP_,p2__3818_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3821 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3821__delegate.call(this, k, x, y, more);
};
G__3821.cljs$lang$maxFixedArity = 3;
G__3821.cljs$lang$applyTo = (function (arglist__3822){
var k = cljs.core.first(arglist__3822);
var x = cljs.core.first(cljs.core.next(arglist__3822));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3822)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3822)));
return G__3821__delegate(k, x, y, more);
});
G__3821.cljs$lang$arity$variadic = G__3821__delegate;
return G__3821;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return min_key__2.call(this,k,x);
case 3:
return min_key__3.call(this,k,x,y);
default:
return min_key__4.cljs$lang$arity$variadic(k,x,y, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.cljs$lang$arity$2 = min_key__2;
min_key.cljs$lang$arity$3 = min_key__3;
min_key.cljs$lang$arity$variadic = min_key__4.cljs$lang$arity$variadic;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return cljs.core.cons.call(null,cljs.core.take.call(null,n,s),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s)));
} else
{return null;
}
}),null));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case 2:
return partition_all__2.call(this,n,step);
case 3:
return partition_all__3.call(this,n,step,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_all.cljs$lang$arity$2 = partition_all__2;
partition_all.cljs$lang$arity$3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),take_while.call(null,pred,cljs.core.rest.call(null,s)));
} else
{return null;
}
} else
{return null;
}
}),null));
});
cljs.core.mk_bound_fn = (function mk_bound_fn(sc,test,key){
return (function (e){
var comp = cljs.core._comparator.call(null,sc);
return test.call(null,comp.call(null,cljs.core._entry_key.call(null,sc,e),key),0);
});
});
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.subseq = (function() {
var subseq = null;
var subseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._GT_,cljs.core._GT__EQ_]).call(null,test)))
{var temp__4092__auto__ = cljs.core._sorted_seq_from.call(null,sc,key,true);
if(cljs.core.truth_(temp__4092__auto__))
{var vec__3825 = temp__4092__auto__;
var e = cljs.core.nth.call(null,vec__3825,0,null);
var s = vec__3825;
if(cljs.core.truth_(include.call(null,e)))
{return s;
} else
{return cljs.core.next.call(null,s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include,cljs.core._sorted_seq.call(null,sc,true));
}
});
var subseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto__ = cljs.core._sorted_seq_from.call(null,sc,start_key,true);
if(cljs.core.truth_(temp__4092__auto__))
{var vec__3826 = temp__4092__auto__;
var e = cljs.core.nth.call(null,vec__3826,0,null);
var s = vec__3826;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,end_test,end_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,start_test,start_key).call(null,e))?s:cljs.core.next.call(null,s)));
} else
{return null;
}
});
subseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return subseq__3.call(this,sc,start_test,start_key);
case 5:
return subseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
subseq.cljs$lang$arity$3 = subseq__3;
subseq.cljs$lang$arity$5 = subseq__5;
return subseq;
})()
;
/**
* sc must be a sorted collection, test(s) one of <, <=, > or
* >=. Returns a reverse seq of those entries with keys ek for
* which (test (.. sc comparator (compare ek key)) 0) is true
*/
cljs.core.rsubseq = (function() {
var rsubseq = null;
var rsubseq__3 = (function (sc,test,key){
var include = cljs.core.mk_bound_fn.call(null,sc,test,key);
if(cljs.core.truth_(cljs.core.PersistentHashSet.fromArray([cljs.core._LT_,cljs.core._LT__EQ_]).call(null,test)))
{var temp__4092__auto__ = cljs.core._sorted_seq_from.call(null,sc,key,false);
if(cljs.core.truth_(temp__4092__auto__))
{var vec__3829 = temp__4092__auto__;
var e = cljs.core.nth.call(null,vec__3829,0,null);
var s = vec__3829;
if(cljs.core.truth_(include.call(null,e)))
{return s;
} else
{return cljs.core.next.call(null,s);
}
} else
{return null;
}
} else
{return cljs.core.take_while.call(null,include,cljs.core._sorted_seq.call(null,sc,false));
}
});
var rsubseq__5 = (function (sc,start_test,start_key,end_test,end_key){
var temp__4092__auto__ = cljs.core._sorted_seq_from.call(null,sc,end_key,false);
if(cljs.core.truth_(temp__4092__auto__))
{var vec__3830 = temp__4092__auto__;
var e = cljs.core.nth.call(null,vec__3830,0,null);
var s = vec__3830;
return cljs.core.take_while.call(null,cljs.core.mk_bound_fn.call(null,sc,start_test,start_key),(cljs.core.truth_(cljs.core.mk_bound_fn.call(null,sc,end_test,end_key).call(null,e))?s:cljs.core.next.call(null,s)));
} else
{return null;
}
});
rsubseq = function(sc,start_test,start_key,end_test,end_key){
switch(arguments.length){
case 3:
return rsubseq__3.call(this,sc,start_test,start_key);
case 5:
return rsubseq__5.call(this,sc,start_test,start_key,end_test,end_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rsubseq.cljs$lang$arity$3 = rsubseq__3;
rsubseq.cljs$lang$arity$5 = rsubseq__5;
return rsubseq;
})()
;
goog.provide('cljs.core.Range');

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step,__hash){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 32375006;
})
cljs.core.Range.cljs$lang$type = true;
cljs.core.Range.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/Range");
});
cljs.core.Range.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/Range");
});
cljs.core.Range.prototype.cljs$core$IHash$_hash$arity$1 = (function (rng){
var self__ = this;
var h__1868__auto__ = self__.__hash;
if(!((h__1868__auto__ == null)))
{return h__1868__auto__;
} else
{var h__1868__auto____$1 = cljs.core.hash_coll.call(null,rng);
self__.__hash = h__1868__auto____$1;
return h__1868__auto____$1;
}
});
cljs.core.Range.prototype.cljs$core$INext$_next$arity$1 = (function (rng){
var self__ = this;
if((self__.step > 0))
{if(((self__.start + self__.step) < self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
} else
{if(((self__.start + self__.step) > self__.end))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICollection$_conj$arity$2 = (function (rng,o){
var self__ = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (rng,f){
var self__ = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (rng,f,s){
var self__ = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (rng){
var self__ = this;
if((self__.step > 0))
{if((self__.start < self__.end))
{return rng;
} else
{return null;
}
} else
{if((self__.start > self__.end))
{return rng;
} else
{return null;
}
}
});
cljs.core.Range.prototype.cljs$core$ICounted$_count$arity$1 = (function (rng){
var self__ = this;
if(cljs.core.not.call(null,rng.cljs$core$ISeqable$_seq$arity$1(rng)))
{return 0;
} else
{return Math.ceil(((self__.end - self__.start) / self__.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$_first$arity$1 = (function (rng){
var self__ = this;
return self__.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest$arity$1 = (function (rng){
var self__ = this;
if(!((rng.cljs$core$ISeqable$_seq$arity$1(rng) == null)))
{return (new cljs.core.Range(self__.meta,(self__.start + self__.step),self__.end,self__.step,null));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (rng,other){
var self__ = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (rng,meta__$1){
var self__ = this;
return (new cljs.core.Range(meta__$1,self__.start,self__.end,self__.step,self__.__hash));
});
cljs.core.Range.prototype.cljs$core$IMeta$_meta$arity$1 = (function (rng){
var self__ = this;
return self__.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (rng,n){
var self__ = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (self__.start + (n * self__.step));
} else
{if((function (){var and__3941__auto__ = (self__.start > self__.end);
if(and__3941__auto__)
{return (self__.step === 0);
} else
{return and__3941__auto__;
}
})())
{return self__.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (rng,n,not_found){
var self__ = this;
if((n < rng.cljs$core$ICounted$_count$arity$1(rng)))
{return (self__.start + (n * self__.step));
} else
{if((function (){var and__3941__auto__ = (self__.start > self__.end);
if(and__3941__auto__)
{return (self__.step === 0);
} else
{return and__3941__auto__;
}
})())
{return self__.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (rng){
var self__ = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,self__.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number.MAX_VALUE,1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step,null));
});
range = function(start,end,step){
switch(arguments.length){
case 0:
return range__0.call(this);
case 1:
return range__1.call(this,start);
case 2:
return range__2.call(this,start,end);
case 3:
return range__3.call(this,start,end,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range.cljs$lang$arity$0 = range__0;
range.cljs$lang$arity$1 = range__1;
range.cljs$lang$arity$2 = range__2;
range.cljs$lang$arity$3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return cljs.core.cons.call(null,cljs.core.first.call(null,s),take_nth.call(null,n,cljs.core.drop.call(null,n,s)));
} else
{return null;
}
}),null));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)], true);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
var fst = cljs.core.first.call(null,s);
var fv = f.call(null,fst);
var run = cljs.core.cons.call(null,fst,cljs.core.take_while.call(null,(function (p1__3831_SHARP_){
return cljs.core._EQ_.call(null,fv,f.call(null,p1__3831_SHARP_));
}),cljs.core.next.call(null,s)));
return cljs.core.cons.call(null,run,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run),s))));
} else
{return null;
}
}),null));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc_BANG_.call(null,counts,x,(cljs.core._lookup.call(null,counts,x,0) + 1));
}),cljs.core.transient$.call(null,cljs.core.ObjMap.EMPTY),coll));
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__4090__auto__ = cljs.core.seq.call(null,coll);
if(temp__4090__auto__)
{var s = temp__4090__auto__;
return reductions.call(null,f,cljs.core.first.call(null,s),cljs.core.rest.call(null,s));
} else
{return cljs.core.list.call(null,f.call(null));
}
}),null));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__4092__auto__ = cljs.core.seq.call(null,coll);
if(temp__4092__auto__)
{var s = temp__4092__auto__;
return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s)),cljs.core.rest.call(null,s));
} else
{return null;
}
}),null)));
});
reductions = function(f,init,coll){
switch(arguments.length){
case 2:
return reductions__2.call(this,f,init);
case 3:
return reductions__3.call(this,f,init,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reductions.cljs$lang$arity$2 = reductions__2;
reductions.cljs$lang$arity$3 = reductions__3;
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__1 = (function (f){
return (function() {
var G__3842 = null;
var G__3842__0 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3842__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3842__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3842__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3842__4 = (function() { 
var G__3843__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3843 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3843__delegate.call(this, x, y, z, args);
};
G__3843.cljs$lang$maxFixedArity = 3;
G__3843.cljs$lang$applyTo = (function (arglist__3844){
var x = cljs.core.first(arglist__3844);
var y = cljs.core.first(cljs.core.next(arglist__3844));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3844)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3844)));
return G__3843__delegate(x, y, z, args);
});
G__3843.cljs$lang$arity$variadic = G__3843__delegate;
return G__3843;
})()
;
G__3842 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3842__0.call(this);
case 1:
return G__3842__1.call(this,x);
case 2:
return G__3842__2.call(this,x,y);
case 3:
return G__3842__3.call(this,x,y,z);
default:
return G__3842__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3842.cljs$lang$maxFixedArity = 3;
G__3842.cljs$lang$applyTo = G__3842__4.cljs$lang$applyTo;
return G__3842;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__3845 = null;
var G__3845__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3845__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3845__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3845__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3845__4 = (function() { 
var G__3846__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3846 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3846__delegate.call(this, x, y, z, args);
};
G__3846.cljs$lang$maxFixedArity = 3;
G__3846.cljs$lang$applyTo = (function (arglist__3847){
var x = cljs.core.first(arglist__3847);
var y = cljs.core.first(cljs.core.next(arglist__3847));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3847)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3847)));
return G__3846__delegate(x, y, z, args);
});
G__3846.cljs$lang$arity$variadic = G__3846__delegate;
return G__3846;
})()
;
G__3845 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3845__0.call(this);
case 1:
return G__3845__1.call(this,x);
case 2:
return G__3845__2.call(this,x,y);
case 3:
return G__3845__3.call(this,x,y,z);
default:
return G__3845__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3845.cljs$lang$maxFixedArity = 3;
G__3845.cljs$lang$applyTo = G__3845__4.cljs$lang$applyTo;
return G__3845;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__3848 = null;
var G__3848__0 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3848__1 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3848__2 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3848__3 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3848__4 = (function() { 
var G__3849__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3849 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3849__delegate.call(this, x, y, z, args);
};
G__3849.cljs$lang$maxFixedArity = 3;
G__3849.cljs$lang$applyTo = (function (arglist__3850){
var x = cljs.core.first(arglist__3850);
var y = cljs.core.first(cljs.core.next(arglist__3850));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3850)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3850)));
return G__3849__delegate(x, y, z, args);
});
G__3849.cljs$lang$arity$variadic = G__3849__delegate;
return G__3849;
})()
;
G__3848 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3848__0.call(this);
case 1:
return G__3848__1.call(this,x);
case 2:
return G__3848__2.call(this,x,y);
case 3:
return G__3848__3.call(this,x,y,z);
default:
return G__3848__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3848.cljs$lang$maxFixedArity = 3;
G__3848.cljs$lang$applyTo = G__3848__4.cljs$lang$applyTo;
return G__3848;
})()
});
var juxt__4 = (function() { 
var G__3851__delegate = function (f,g,h,fs){
var fs__$1 = cljs.core.list_STAR_.call(null,f,g,h,fs);
return (function() {
var G__3852 = null;
var G__3852__0 = (function (){
return cljs.core.reduce.call(null,(function (p1__3832_SHARP_,p2__3833_SHARP_){
return cljs.core.conj.call(null,p1__3832_SHARP_,p2__3833_SHARP_.call(null));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__3852__1 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3834_SHARP_,p2__3835_SHARP_){
return cljs.core.conj.call(null,p1__3834_SHARP_,p2__3835_SHARP_.call(null,x));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__3852__2 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3836_SHARP_,p2__3837_SHARP_){
return cljs.core.conj.call(null,p1__3836_SHARP_,p2__3837_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__3852__3 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3838_SHARP_,p2__3839_SHARP_){
return cljs.core.conj.call(null,p1__3838_SHARP_,p2__3839_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
});
var G__3852__4 = (function() { 
var G__3853__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3840_SHARP_,p2__3841_SHARP_){
return cljs.core.conj.call(null,p1__3840_SHARP_,cljs.core.apply.call(null,p2__3841_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.EMPTY,fs__$1);
};
var G__3853 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3853__delegate.call(this, x, y, z, args);
};
G__3853.cljs$lang$maxFixedArity = 3;
G__3853.cljs$lang$applyTo = (function (arglist__3854){
var x = cljs.core.first(arglist__3854);
var y = cljs.core.first(cljs.core.next(arglist__3854));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3854)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3854)));
return G__3853__delegate(x, y, z, args);
});
G__3853.cljs$lang$arity$variadic = G__3853__delegate;
return G__3853;
})()
;
G__3852 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case 0:
return G__3852__0.call(this);
case 1:
return G__3852__1.call(this,x);
case 2:
return G__3852__2.call(this,x,y);
case 3:
return G__3852__3.call(this,x,y,z);
default:
return G__3852__4.cljs$lang$arity$variadic(x,y,z, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__3852.cljs$lang$maxFixedArity = 3;
G__3852.cljs$lang$applyTo = G__3852__4.cljs$lang$applyTo;
return G__3852;
})()
};
var G__3851 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3851__delegate.call(this, f, g, h, fs);
};
G__3851.cljs$lang$maxFixedArity = 3;
G__3851.cljs$lang$applyTo = (function (arglist__3855){
var f = cljs.core.first(arglist__3855);
var g = cljs.core.first(cljs.core.next(arglist__3855));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3855)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3855)));
return G__3851__delegate(f, g, h, fs);
});
G__3851.cljs$lang$arity$variadic = G__3851__delegate;
return G__3851;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case 1:
return juxt__1.call(this,f);
case 2:
return juxt__2.call(this,f,g);
case 3:
return juxt__3.call(this,f,g,h);
default:
return juxt__4.cljs$lang$arity$variadic(f,g,h, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.cljs$lang$arity$1 = juxt__1;
juxt.cljs$lang$arity$2 = juxt__2;
juxt.cljs$lang$arity$3 = juxt__3;
juxt.cljs$lang$arity$variadic = juxt__4.cljs$lang$arity$variadic;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__1 = (function (coll){
while(true){
if(cljs.core.seq.call(null,coll))
{{
var G__3856 = cljs.core.next.call(null,coll);
coll = G__3856;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.seq.call(null,coll);
if(and__3941__auto__)
{return (n > 0);
} else
{return and__3941__auto__;
}
})()))
{{
var G__3857 = (n - 1);
var G__3858 = cljs.core.next.call(null,coll);
n = G__3857;
coll = G__3858;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case 1:
return dorun__1.call(this,n);
case 2:
return dorun__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dorun.cljs$lang$arity$1 = dorun__1;
dorun.cljs$lang$arity$2 = dorun__2;
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__1 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case 1:
return doall__1.call(this,n);
case 2:
return doall__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
doall.cljs$lang$arity$1 = doall__1;
doall.cljs$lang$arity$2 = doall__2;
return doall;
})()
;
cljs.core.regexp_QMARK_ = (function regexp_QMARK_(o){
return o instanceof RegExp;
});
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches = re.exec(s);
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches),s))
{if((cljs.core.count.call(null,matches) === 1))
{return cljs.core.first.call(null,matches);
} else
{return cljs.core.vec.call(null,matches);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches = re.exec(s);
if((matches == null))
{return null;
} else
{if((cljs.core.count.call(null,matches) === 1))
{return cljs.core.first.call(null,matches);
} else
{return cljs.core.vec.call(null,matches);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data = cljs.core.re_find.call(null,re,s);
var match_idx = s.search(re);
var match_str = ((cljs.core.coll_QMARK_.call(null,match_data))?cljs.core.first.call(null,match_data):match_data);
var post_match = cljs.core.subs.call(null,s,(match_idx + cljs.core.count.call(null,match_str)));
if(cljs.core.truth_(match_data))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data,(((cljs.core.count.call(null,post_match) > 0))?re_seq.call(null,re,post_match):null));
}),null));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__3861 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var _ = cljs.core.nth.call(null,vec__3861,0,null);
var flags = cljs.core.nth.call(null,vec__3861,1,null);
var pattern = cljs.core.nth.call(null,vec__3861,2,null);
return (new RegExp(pattern,flags));
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin], true),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep], true),cljs.core.map.call(null,(function (p1__3859_SHARP_){
return print_one.call(null,p1__3859_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end], true));
});
cljs.core.pr_sequential_writer = (function pr_sequential_writer(writer,print_one,begin,sep,end,opts,coll){
cljs.core._write.call(null,writer,begin);
if(cljs.core.seq.call(null,coll))
{print_one.call(null,cljs.core.first.call(null,coll),writer,opts);
} else
{}
var G__3863_3864 = cljs.core.seq.call(null,cljs.core.next.call(null,coll));
while(true){
if(G__3863_3864)
{var o_3865 = cljs.core.first.call(null,G__3863_3864);
cljs.core._write.call(null,writer,sep);
print_one.call(null,o_3865,writer,opts);
{
var G__3866 = cljs.core.next.call(null,G__3863_3864);
G__3863_3864 = G__3866;
continue;
}
} else
{}
break;
}
return cljs.core._write.call(null,writer,end);
});
/**
* @param {...*} var_args
*/
cljs.core.write_all = (function() { 
var write_all__delegate = function (writer,ss){
var G__3868 = cljs.core.seq.call(null,ss);
while(true){
if(G__3868)
{var s = cljs.core.first.call(null,G__3868);
cljs.core._write.call(null,writer,s);
{
var G__3869 = cljs.core.next.call(null,G__3868);
G__3868 = G__3869;
continue;
}
} else
{return null;
}
break;
}
};
var write_all = function (writer,var_args){
var ss = null;
if (goog.isDef(var_args)) {
  ss = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return write_all__delegate.call(this, writer, ss);
};
write_all.cljs$lang$maxFixedArity = 1;
write_all.cljs$lang$applyTo = (function (arglist__3870){
var writer = cljs.core.first(arglist__3870);
var ss = cljs.core.rest(arglist__3870);
return write_all__delegate(writer, ss);
});
write_all.cljs$lang$arity$variadic = write_all__delegate;
return write_all;
})()
;
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
goog.provide('cljs.core.StringBufferWriter');

/**
* @constructor
*/
cljs.core.StringBufferWriter = (function (sb){
this.sb = sb;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 1073741824;
})
cljs.core.StringBufferWriter.cljs$lang$type = true;
cljs.core.StringBufferWriter.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/StringBufferWriter");
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_write$arity$2 = (function (_,s){
var self__ = this;
return self__.sb.append(s);
});
cljs.core.StringBufferWriter.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
return null;
});
/**
* Do not use this.  It is kept for backwards compatibility with the
* old IPrintable protocol.
*/
cljs.core.pr_seq = (function pr_seq(obj,opts){
if((obj == null))
{return cljs.core.list.call(null,"nil");
} else
{if((void 0 === obj))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if("\uFDD0'else")
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (function (){var G__3873 = obj;
if(G__3873)
{if((function (){var or__3943__auto__ = (G__3873.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3873.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__3873.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__3873);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__3873);
}
})();
if(cljs.core.truth_(and__3941__auto____$1))
{return cljs.core.meta.call(null,obj);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"], true),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "], true)):null),(((function (){var and__3941__auto__ = !((obj == null));
if(and__3941__auto__)
{return obj.cljs$lang$type;
} else
{return and__3941__auto__;
}
})())?obj.cljs$lang$ctorPrSeq(obj):(((function (){var G__3874 = obj;
if(G__3874)
{if((function (){var or__3943__auto__ = (G__3874.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3874.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__3874.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__3874);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__3874);
}
})())?cljs.core._pr_seq.call(null,obj,opts):(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj))?cljs.core.list.call(null,"#\"",obj.source,"\""):(("\uFDD0'else")?cljs.core.list.call(null,"#<",[cljs.core.str(obj)].join(''),">"):null)))));
} else
{return null;
}
}
}
});
/**
* Prefer this to pr-seq, because it makes the printing function
* configurable, allowing efficient implementations such as appending
* to a StringBuffer.
*/
cljs.core.pr_writer = (function pr_writer(obj,writer,opts){
if((obj == null))
{return cljs.core._write.call(null,writer,"nil");
} else
{if((void 0 === obj))
{return cljs.core._write.call(null,writer,"#<undefined>");
} else
{if("\uFDD0'else")
{if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.core._lookup.call(null,opts,"\uFDD0'meta",null);
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (function (){var G__3878 = obj;
if(G__3878)
{if((function (){var or__3943__auto__ = (G__3878.cljs$lang$protocol_mask$partition0$ & 131072);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3878.cljs$core$IMeta$;
}
})())
{return true;
} else
{if((!G__3878.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__3878);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,G__3878);
}
})();
if(cljs.core.truth_(and__3941__auto____$1))
{return cljs.core.meta.call(null,obj);
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{cljs.core._write.call(null,writer,"^");
pr_writer.call(null,cljs.core.meta.call(null,obj),writer,opts);
cljs.core._write.call(null,writer," ");
} else
{}
if((function (){var and__3941__auto__ = !((obj == null));
if(and__3941__auto__)
{return obj.cljs$lang$type;
} else
{return and__3941__auto__;
}
})())
{return obj.cljs$lang$ctorPrWriter(obj,writer,opts);
} else
{if((function (){var G__3879 = obj;
if(G__3879)
{if((function (){var or__3943__auto__ = (G__3879.cljs$lang$protocol_mask$partition0$ & 2147483648);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3879.cljs$core$IPrintWithWriter$;
}
})())
{return true;
} else
{if((!G__3879.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__3879);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintWithWriter,G__3879);
}
})())
{return cljs.core._pr_writer.call(null,obj,writer,opts);
} else
{if((function (){var G__3880 = obj;
if(G__3880)
{if((function (){var or__3943__auto__ = (G__3880.cljs$lang$protocol_mask$partition0$ & 536870912);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return G__3880.cljs$core$IPrintable$;
}
})())
{return true;
} else
{if((!G__3880.cljs$lang$protocol_mask$partition0$))
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__3880);
} else
{return false;
}
}
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,G__3880);
}
})())
{return cljs.core.apply.call(null,cljs.core.write_all,writer,cljs.core._pr_seq.call(null,obj,opts));
} else
{if(cljs.core.truth_(cljs.core.regexp_QMARK_.call(null,obj)))
{return cljs.core.write_all.call(null,writer,"#\"",obj.source.split("\\/").join("/"),"\"");
} else
{if("\uFDD0'else")
{return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(obj)].join(''),">");
} else
{return null;
}
}
}
}
}
} else
{return null;
}
}
}
});
cljs.core.pr_seq_writer = (function pr_seq_writer(objs,writer,opts){
cljs.core.pr_writer.call(null,cljs.core.first.call(null,objs),writer,opts);
var G__3882 = cljs.core.seq.call(null,cljs.core.next.call(null,objs));
while(true){
if(G__3882)
{var obj = cljs.core.first.call(null,G__3882);
cljs.core._write.call(null,writer," ");
cljs.core.pr_writer.call(null,obj,writer,opts);
{
var G__3883 = cljs.core.next.call(null,G__3882);
G__3882 = G__3883;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.pr_sb_with_opts = (function pr_sb_with_opts(objs,opts){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
cljs.core.pr_seq_writer.call(null,objs,writer,opts);
cljs.core._flush.call(null,writer);
return sb;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return "";
} else
{return [cljs.core.str(cljs.core.pr_sb_with_opts.call(null,objs,opts))].join('');
}
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
if(cljs.core.empty_QMARK_.call(null,objs))
{return "\n";
} else
{var sb = cljs.core.pr_sb_with_opts.call(null,objs,opts);
sb.append("\n");
return [cljs.core.str(sb)].join('');
}
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
return cljs.core.string_print.call(null,cljs.core.pr_str_with_opts.call(null,objs,opts));
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core._lookup.call(null,opts,"\uFDD0'flush-on-newline",null)))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3884){
var objs = cljs.core.seq(arglist__3884);;
return pr_str__delegate(objs);
});
pr_str.cljs$lang$arity$variadic = pr_str__delegate;
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__3885){
var objs = cljs.core.seq(arglist__3885);;
return prn_str__delegate(objs);
});
prn_str.cljs$lang$arity$variadic = prn_str__delegate;
return prn_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3886){
var objs = cljs.core.seq(arglist__3886);;
return pr__delegate(objs);
});
pr.cljs$lang$arity$variadic = pr__delegate;
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3887){
var objs = cljs.core.seq(arglist__3887);;
return cljs_core_print__delegate(objs);
});
cljs_core_print.cljs$lang$arity$variadic = cljs_core_print__delegate;
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__3888){
var objs = cljs.core.seq(arglist__3888);;
return print_str__delegate(objs);
});
print_str.cljs$lang$arity$variadic = print_str__delegate;
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3889){
var objs = cljs.core.seq(arglist__3889);;
return println__delegate(objs);
});
println.cljs$lang$arity$variadic = println__delegate;
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__3890){
var objs = cljs.core.seq(arglist__3890);;
return println_str__delegate(objs);
});
println_str.cljs$lang$arity$variadic = println_str__delegate;
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3891){
var objs = cljs.core.seq(arglist__3891);;
return prn__delegate(objs);
});
prn.cljs$lang$arity$variadic = prn__delegate;
return prn;
})()
;
/**
* Prints formatted output, as per format
* @param {...*} var_args
*/
cljs.core.printf = (function() { 
var printf__delegate = function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,cljs.core.format,fmt,args));
};
var printf = function (fmt,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return printf__delegate.call(this, fmt, args);
};
printf.cljs$lang$maxFixedArity = 1;
printf.cljs$lang$applyTo = (function (arglist__3892){
var fmt = cljs.core.first(arglist__3892);
var args = cljs.core.rest(arglist__3892);
return printf__delegate(fmt, args);
});
printf.cljs$lang$arity$variadic = printf__delegate;
return printf;
})()
;
cljs.core.char_escapes = cljs.core.ObjMap.fromObject(["\"","\\","\b","\f","\n","\r","\t"],{"\"":"\\\"","\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"});
cljs.core.quote_string = (function quote_string(s){
return [cljs.core.str("\""),cljs.core.str(s.replace(RegExp("[\\\\\"\b\f\n\r\t]","g"),(function (match){
return cljs.core._lookup.call(null,cljs.core.char_escapes,match,null);
}))),cljs.core.str("\"")].join('');
});
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str(":"),cljs.core.str((function (){var temp__4092__auto__ = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4092__auto__))
{var nspc = temp__4092__auto__;
return [cljs.core.str(nspc),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if(cljs.core.symbol_QMARK_.call(null,obj))
{return cljs.core.list.call(null,[cljs.core.str((function (){var temp__4092__auto__ = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4092__auto__))
{var nspc = temp__4092__auto__;
return [cljs.core.str(nspc),cljs.core.str("/")].join('');
} else
{return null;
}
})()),cljs.core.str(cljs.core.name.call(null,obj))].join(''));
} else
{if("\uFDD0'else")
{return cljs.core.list.call(null,(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts))?cljs.core.quote_string.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list.call(null,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintable$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintable$ = true;
Date.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (d,_){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns) < len))
{{
var G__3893 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__3893;
continue;
}
} else
{return ns;
}
break;
}
});
return cljs.core.list.call(null,[cljs.core.str("#inst \""),cljs.core.str(d.getUTCFullYear()),cljs.core.str("-"),cljs.core.str(normalize.call(null,(d.getUTCMonth() + 1),2)),cljs.core.str("-"),cljs.core.str(normalize.call(null,d.getUTCDate(),2)),cljs.core.str("T"),cljs.core.str(normalize.call(null,d.getUTCHours(),2)),cljs.core.str(":"),cljs.core.str(normalize.call(null,d.getUTCMinutes(),2)),cljs.core.str(":"),cljs.core.str(normalize.call(null,d.getUTCSeconds(),2)),cljs.core.str("."),cljs.core.str(normalize.call(null,d.getUTCMilliseconds(),3)),cljs.core.str("-"),cljs.core.str("00:00\"")].join(''));
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});
return cljs.core.pr_sequential.call(null,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["number"] = true);
(cljs.core._pr_writer["number"] = (function (n,writer,opts){
(1 / 0);
return cljs.core._write.call(null,writer,[cljs.core.str(n)].join(''));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedCons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentArrayMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#queue ["," ","]",opts,cljs.core.seq.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintWithWriter["boolean"] = true);
(cljs.core._pr_writer["boolean"] = (function (bool,writer,opts){
return cljs.core._write.call(null,writer,[cljs.core.str(bool)].join(''));
}));
(cljs.core.IPrintWithWriter["string"] = true);
(cljs.core._pr_writer["string"] = (function (obj,writer,opts){
if(cljs.core.keyword_QMARK_.call(null,obj))
{cljs.core._write.call(null,writer,":");
var temp__4092__auto___3894 = cljs.core.namespace.call(null,obj);
if(cljs.core.truth_(temp__4092__auto___3894))
{var nspc_3895 = temp__4092__auto___3894;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc_3895)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,obj));
} else
{if("\uFDD0'else")
{if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'readably")).call(null,opts)))
{return cljs.core._write.call(null,writer,cljs.core.quote_string.call(null,obj));
} else
{return cljs.core._write.call(null,writer,obj);
}
} else
{return null;
}
}
}));
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.NodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.RedNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ChunkedSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentHashSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.List.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
(cljs.core.IPrintWithWriter["array"] = true);
(cljs.core._pr_writer["array"] = (function (a,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#<Array [",", ","]>",opts,a);
}));
(cljs.core.IPrintWithWriter["function"] = true);
(cljs.core._pr_writer["function"] = (function (this$,writer,_){
return cljs.core.write_all.call(null,writer,"#<",[cljs.core.str(this$)].join(''),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core._write.call(null,writer,"()");
});
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.BlackNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll);
});
Date.prototype.cljs$core$IPrintWithWriter$ = true;
Date.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,_){
var normalize = (function (n,len){
var ns = [cljs.core.str(n)].join('');
while(true){
if((cljs.core.count.call(null,ns) < len))
{{
var G__3896 = [cljs.core.str("0"),cljs.core.str(ns)].join('');
ns = G__3896;
continue;
}
} else
{return ns;
}
break;
}
});
return cljs.core.write_all.call(null,writer,"#inst \"",[cljs.core.str(d.getUTCFullYear())].join(''),"-",normalize.call(null,(d.getUTCMonth() + 1),2),"-",normalize.call(null,d.getUTCDate(),2),"T",normalize.call(null,d.getUTCHours(),2),":",normalize.call(null,d.getUTCMinutes(),2),":",normalize.call(null,d.getUTCSeconds(),2),".",normalize.call(null,d.getUTCMilliseconds(),3),"-","00:00\"");
});
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Range.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ArrayNodeSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll);
});
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.Symbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (s,writer,_){
var temp__4092__auto___3897 = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(temp__4092__auto___3897))
{var nspc_3898 = temp__4092__auto___3897;
cljs.core.write_all.call(null,writer,[cljs.core.str(nspc_3898)].join(''),"/");
} else
{}
return cljs.core._write.call(null,writer,cljs.core.name.call(null,s));
});
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$ = true;
cljs.core.PersistentTreeMapSeq.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"("," ",")",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IComparable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IComparable$_compare$arity$2 = (function (x,y){
return cljs.core.compare_indexed.call(null,x,y);
});
goog.provide('cljs.core.Atom');

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2690809856;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cljs.core.Atom.cljs$lang$type = true;
cljs.core.Atom.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/Atom");
});
cljs.core.Atom.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var G__3899 = cljs.core.seq.call(null,self__.watches);
while(true){
if(G__3899)
{var vec__3900 = cljs.core.first.call(null,G__3899);
var key = cljs.core.nth.call(null,vec__3900,0,null);
var f = cljs.core.nth.call(null,vec__3900,1,null);
f.call(null,key,this$,oldval,newval);
{
var G__3901 = cljs.core.next.call(null,G__3899);
G__3899 = G__3901;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
return this$.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
return this$.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){
var self__ = this;
cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core._pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (a,opts){
var self__ = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "], true),cljs.core._pr_seq.call(null,self__.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
return self__.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return self__.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
return (o === other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__3905__delegate = function (x,p__3902){
var map__3904 = p__3902;
var map__3904__$1 = ((cljs.core.seq_QMARK_.call(null,map__3904))?cljs.core.apply.call(null,cljs.core.hash_map,map__3904):map__3904);
var validator = cljs.core._lookup.call(null,map__3904__$1,"\uFDD0'validator",null);
var meta = cljs.core._lookup.call(null,map__3904__$1,"\uFDD0'meta",null);
return (new cljs.core.Atom(x,meta,validator,null));
};
var G__3905 = function (x,var_args){
var p__3902 = null;
if (goog.isDef(var_args)) {
  p__3902 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3905__delegate.call(this, x, p__3902);
};
G__3905.cljs$lang$maxFixedArity = 1;
G__3905.cljs$lang$applyTo = (function (arglist__3906){
var x = cljs.core.first(arglist__3906);
var p__3902 = cljs.core.rest(arglist__3906);
return G__3905__delegate(x, p__3902);
});
G__3905.cljs$lang$arity$variadic = G__3905__delegate;
return G__3905;
})()
;
atom = function(x,var_args){
var p__3902 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$lang$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$lang$arity$1 = atom__1;
atom.cljs$lang$arity$variadic = atom__2.cljs$lang$arity$variadic;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__4092__auto___3907 = a.validator;
if(cljs.core.truth_(temp__4092__auto___3907))
{var validate_3908 = temp__4092__auto___3907;
if(cljs.core.truth_(validate_3908.call(null,new_value)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Validator rejected reference state"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"validate")),(new cljs.core.Symbol(null,"new-value"))),cljs.core.hash_map("\uFDD0'line",6788,"\uFDD0'column",13))))].join('')));
}
} else
{}
var old_value_3909 = a.state;
a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value_3909,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__3910__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3910 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3910__delegate.call(this, a, f, x, y, z, more);
};
G__3910.cljs$lang$maxFixedArity = 5;
G__3910.cljs$lang$applyTo = (function (arglist__3911){
var a = cljs.core.first(arglist__3911);
var f = cljs.core.first(cljs.core.next(arglist__3911));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3911)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3911))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3911)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3911)))));
return G__3910__delegate(a, f, x, y, z, more);
});
G__3910.cljs$lang$arity$variadic = G__3910__delegate;
return G__3910;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case 2:
return swap_BANG___2.call(this,a,f);
case 3:
return swap_BANG___3.call(this,a,f,x);
case 4:
return swap_BANG___4.call(this,a,f,x,y);
case 5:
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.cljs$lang$arity$variadic(a,f,x,y,z, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.cljs$lang$arity$2 = swap_BANG___2;
swap_BANG_.cljs$lang$arity$3 = swap_BANG___3;
swap_BANG_.cljs$lang$arity$4 = swap_BANG___4;
swap_BANG_.cljs$lang$arity$5 = swap_BANG___5;
swap_BANG_.cljs$lang$arity$variadic = swap_BANG___6.cljs$lang$arity$variadic;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core._EQ_.call(null,a.state,oldval))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3912){
var iref = cljs.core.first(arglist__3912);
var f = cljs.core.first(cljs.core.next(arglist__3912));
var args = cljs.core.rest(cljs.core.next(arglist__3912));
return alter_meta_BANG___delegate(iref, f, args);
});
alter_meta_BANG_.cljs$lang$arity$variadic = alter_meta_BANG___delegate;
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if((cljs.core.gensym_counter == null))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,[cljs.core.str(prefix_string),cljs.core.str(cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc))].join(''));
});
gensym = function(prefix_string){
switch(arguments.length){
case 0:
return gensym__0.call(this);
case 1:
return gensym__1.call(this,prefix_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gensym.cljs$lang$arity$0 = gensym__0;
gensym.cljs$lang$arity$1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;
goog.provide('cljs.core.Delay');

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
cljs.core.Delay.cljs$lang$type = true;
cljs.core.Delay.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/Delay");
});
cljs.core.Delay.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (d){
var self__ = this;
return (new cljs.core.Keyword("\uFDD0'done")).call(null,cljs.core.deref.call(null,self__.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
return (new cljs.core.Keyword("\uFDD0'value")).call(null,cljs.core.swap_BANG_.call(null,self__.state,(function (p__3913){
var map__3914 = p__3913;
var map__3914__$1 = ((cljs.core.seq_QMARK_.call(null,map__3914))?cljs.core.apply.call(null,cljs.core.hash_map,map__3914):map__3914);
var curr_state = map__3914__$1;
var done = cljs.core._lookup.call(null,map__3914__$1,"\uFDD0'done",null);
if(cljs.core.truth_(done))
{return curr_state;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":self__.f.call(null)});
}
})));
});
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.delay_QMARK_.call(null,x))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3920 = options;
var map__3920__$1 = ((cljs.core.seq_QMARK_.call(null,map__3920))?cljs.core.apply.call(null,cljs.core.hash_map,map__3920):map__3920);
var keywordize_keys = cljs.core._lookup.call(null,map__3920__$1,"\uFDD0'keywordize-keys",null);
var keyfn = (cljs.core.truth_(keywordize_keys)?cljs.core.keyword:cljs.core.str);
var f = (function thisfn(x__$1){
if(cljs.core.seq_QMARK_.call(null,x__$1))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x__$1));
} else
{if(cljs.core.coll_QMARK_.call(null,x__$1))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x__$1),cljs.core.map.call(null,thisfn,x__$1));
} else
{if(cljs.core.truth_(goog.isArray(x__$1)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x__$1));
} else
{if((cljs.core.type.call(null,x__$1) === Object))
{return cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,(function (){var iter__2144__auto__ = (function iter__3923(s__3924){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3924__$1 = s__3924;
while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__3924__$1);
if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;
var k = cljs.core.first.call(null,xs__4579__auto__);
return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn.call(null,k),thisfn.call(null,(x__$1[k]))], true),iter__3923.call(null,cljs.core.rest.call(null,s__3924__$1)));
} else
{return null;
}
break;
}
}),null));
});
return iter__2144__auto__.call(null,cljs.core.js_keys.call(null,x__$1));
})());
} else
{if("\uFDD0'else")
{return x__$1;
} else
{return null;
}
}
}
}
}
});
return f.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3925){
var x = cljs.core.first(arglist__3925);
var options = cljs.core.rest(arglist__3925);
return js__GT_clj__delegate(x, options);
});
js__GT_clj.cljs$lang$arity$variadic = js__GT_clj__delegate;
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem = cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY);
return (function() { 
var G__3926__delegate = function (args){
var temp__4090__auto__ = cljs.core._lookup.call(null,cljs.core.deref.call(null,mem),args,null);
if(cljs.core.truth_(temp__4090__auto__))
{var v = temp__4090__auto__;
return v;
} else
{var ret = cljs.core.apply.call(null,f,args);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,args,ret);
return ret;
}
};
var G__3926 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3926__delegate.call(this, args);
};
G__3926.cljs$lang$maxFixedArity = 0;
G__3926.cljs$lang$applyTo = (function (arglist__3927){
var args = cljs.core.seq(arglist__3927);;
return G__3926__delegate(args);
});
G__3926.cljs$lang$arity$variadic = G__3926__delegate;
return G__3926;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__1 = (function (f){
while(true){
var ret = f.call(null);
if(cljs.core.fn_QMARK_.call(null,ret))
{{
var G__3928 = ret;
f = G__3928;
continue;
}
} else
{return ret;
}
break;
}
});
var trampoline__2 = (function() { 
var G__3929__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3929 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3929__delegate.call(this, f, args);
};
G__3929.cljs$lang$maxFixedArity = 1;
G__3929.cljs$lang$applyTo = (function (arglist__3930){
var f = cljs.core.first(arglist__3930);
var args = cljs.core.rest(arglist__3930);
return G__3929__delegate(f, args);
});
G__3929.cljs$lang$arity$variadic = G__3929__delegate;
return G__3929;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case 1:
return trampoline__1.call(this,f);
default:
return trampoline__2.cljs$lang$arity$variadic(f, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.cljs$lang$arity$1 = trampoline__1;
trampoline.cljs$lang$arity$variadic = trampoline__2.cljs$lang$arity$variadic;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return (Math.random.call(null) * n);
});
rand = function(n){
switch(arguments.length){
case 0:
return rand__0.call(this);
case 1:
return rand__1.call(this,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rand.cljs$lang$arity$0 = rand__0;
rand.cljs$lang$arity$1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor.call(null,(Math.random.call(null) * n));
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k = f.call(null,x);
return cljs.core.assoc.call(null,ret,k,cljs.core.conj.call(null,cljs.core._lookup.call(null,ret,k,cljs.core.PersistentVector.EMPTY),x));
}),cljs.core.ObjMap.EMPTY,coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.EMPTY,"\uFDD0'descendants":cljs.core.ObjMap.EMPTY,"\uFDD0'ancestors":cljs.core.ObjMap.EMPTY});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a JavaScript type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3943__auto__ = cljs.core._EQ_.call(null,child,parent);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core.contains_QMARK_.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h).call(null,child),parent);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{var and__3941__auto__ = cljs.core.vector_QMARK_.call(null,parent);
if(and__3941__auto__)
{var and__3941__auto____$1 = cljs.core.vector_QMARK_.call(null,child);
if(and__3941__auto____$1)
{var and__3941__auto____$2 = (cljs.core.count.call(null,parent) === cljs.core.count.call(null,child));
if(and__3941__auto____$2)
{var ret = true;
var i = 0;
while(true){
if((function (){var or__3943__auto____$2 = cljs.core.not.call(null,ret);
if(or__3943__auto____$2)
{return or__3943__auto____$2;
} else
{return (i === cljs.core.count.call(null,parent));
}
})())
{return ret;
} else
{{
var G__3931 = isa_QMARK_.call(null,h,child.call(null,i),parent.call(null,i));
var G__3932 = (i + 1);
ret = G__3931;
i = G__3932;
continue;
}
}
break;
}
} else
{return and__3941__auto____$2;
}
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case 2:
return isa_QMARK___2.call(this,h,child);
case 3:
return isa_QMARK___3.call(this,h,child,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
isa_QMARK_.cljs$lang$arity$2 = isa_QMARK___2;
isa_QMARK_.cljs$lang$arity$3 = isa_QMARK___3;
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,null));
});
parents = function(h,tag){
switch(arguments.length){
case 1:
return parents__1.call(this,h);
case 2:
return parents__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
parents.cljs$lang$arity$1 = parents__1;
parents.cljs$lang$arity$2 = parents__2;
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a JavaScript type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,null));
});
ancestors = function(h,tag){
switch(arguments.length){
case 1:
return ancestors__1.call(this,h);
case 2:
return ancestors__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestors.cljs$lang$arity$1 = ancestors__1;
ancestors.cljs$lang$arity$2 = ancestors__2;
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on JavaScript type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core._lookup.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),tag,null));
});
descendants = function(h,tag){
switch(arguments.length){
case 1:
return descendants__1.call(this,h);
case 2:
return descendants__2.call(this,h,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
descendants.cljs$lang$arity$1 = descendants__1;
descendants.cljs$lang$arity$2 = descendants__2;
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"namespace")),(new cljs.core.Symbol(null,"parent"))),cljs.core.hash_map("\uFDD0'line",7072,"\uFDD0'column",12))))].join('')));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if(cljs.core.not_EQ_.call(null,tag,parent))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"not=")),(new cljs.core.Symbol(null,"tag")),(new cljs.core.Symbol(null,"parent"))),cljs.core.hash_map("\uFDD0'line",7076,"\uFDD0'column",12))))].join('')));
}
var tp = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var td = (new cljs.core.Keyword("\uFDD0'descendants")).call(null,h);
var ta = (new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h);
var tf = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core._lookup.call(null,targets,k,cljs.core.PersistentHashSet.EMPTY),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});
var or__3943__auto__ = ((cljs.core.contains_QMARK_.call(null,tp.call(null,tag),parent))?null:(function (){if(cljs.core.contains_QMARK_.call(null,ta.call(null,tag),parent))
{throw (new Error([cljs.core.str(tag),cljs.core.str("already has"),cljs.core.str(parent),cljs.core.str("as ancestor")].join('')));
} else
{}
if(cljs.core.contains_QMARK_.call(null,ta.call(null,parent),tag))
{throw (new Error([cljs.core.str("Cyclic derivation:"),cljs.core.str(parent),cljs.core.str("has"),cljs.core.str(tag),cljs.core.str("as ancestor")].join('')));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,(new cljs.core.Keyword("\uFDD0'parents")).call(null,h),tag,cljs.core.conj.call(null,cljs.core._lookup.call(null,tp,tag,cljs.core.PersistentHashSet.EMPTY),parent)),"\uFDD0'ancestors":tf.call(null,(new cljs.core.Keyword("\uFDD0'ancestors")).call(null,h),tag,td,parent,ta),"\uFDD0'descendants":tf.call(null,(new cljs.core.Keyword("\uFDD0'descendants")).call(null,h),parent,ta,tag,td)});
})());
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case 2:
return derive__2.call(this,h,tag);
case 3:
return derive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
derive.cljs$lang$arity$2 = derive__2;
derive.cljs$lang$arity$3 = derive__3;
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap = (new cljs.core.Keyword("\uFDD0'parents")).call(null,h);
var childsParents = (cljs.core.truth_(parentMap.call(null,tag))?cljs.core.disj.call(null,parentMap.call(null,tag),parent):cljs.core.PersistentHashSet.EMPTY);
var newParents = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents))?cljs.core.assoc.call(null,parentMap,tag,childsParents):cljs.core.dissoc.call(null,parentMap,tag));
var deriv_seq = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3933_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3933_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3933_SHARP_),cljs.core.second.call(null,p1__3933_SHARP_)));
}),cljs.core.seq.call(null,newParents)));
if(cljs.core.contains_QMARK_.call(null,parentMap.call(null,tag),parent))
{return cljs.core.reduce.call(null,(function (p1__3934_SHARP_,p2__3935_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3934_SHARP_,p2__3935_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case 2:
return underive__2.call(this,h,tag);
case 3:
return underive__3.call(this,h,tag,parent);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
underive.cljs$lang$arity$2 = underive__2;
underive.cljs$lang$arity$3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs = cljs.core.deref.call(null,prefer_table).call(null,x);
var or__3943__auto__ = (cljs.core.truth_((function (){var and__3941__auto__ = xprefs;
if(cljs.core.truth_(and__3941__auto__))
{return xprefs.call(null,y);
} else
{return and__3941__auto__;
}
})())?true:null);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (function (){var ps = cljs.core.parents.call(null,y);
while(true){
if((cljs.core.count.call(null,ps) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps),prefer_table)))
{} else
{}
{
var G__3936 = cljs.core.rest.call(null,ps);
ps = G__3936;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (function (){var ps = cljs.core.parents.call(null,x);
while(true){
if((cljs.core.count.call(null,ps) > 0))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps),y,prefer_table)))
{} else
{}
{
var G__3937 = cljs.core.rest.call(null,ps);
ps = G__3937;
continue;
}
} else
{return null;
}
break;
}
})();
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3943__auto__ = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry = cljs.core.reduce.call(null,(function (be,p__3940){
var vec__3941 = p__3940;
var k = cljs.core.nth.call(null,vec__3941,0,null);
var _ = cljs.core.nth.call(null,vec__3941,1,null);
var e = vec__3941;
if(cljs.core.isa_QMARK_.call(null,dispatch_val,k))
{var be2 = (cljs.core.truth_((function (){var or__3943__auto__ = (be == null);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{return cljs.core.dominates.call(null,k,cljs.core.first.call(null,be),prefer_table);
}
})())?e:be);
if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2),k,prefer_table)))
{} else
{throw (new Error([cljs.core.str("Multiple methods in multimethod '"),cljs.core.str(name),cljs.core.str("' match dispatch value: "),cljs.core.str(dispatch_val),cljs.core.str(" -> "),cljs.core.str(k),cljs.core.str(" and "),cljs.core.str(cljs.core.first.call(null,be2)),cljs.core.str(", and neither is preferred")].join('')));
}
return be2;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));
if(cljs.core.truth_(best_entry))
{if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy)))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry));
return cljs.core.second.call(null,best_entry);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_reset$arity$1;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_reset$arity$1(mf);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._reset[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._reset["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_add_method$arity$3;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_add_method$arity$3(mf,dispatch_val,method);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._add_method[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._add_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_remove_method$arity$2;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_remove_method$arity$2(mf,dispatch_val);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._remove_method[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._remove_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefer_method$arity$3(mf,dispatch_val,dispatch_val_y);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._prefer_method[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._prefer_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_get_method$arity$2;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_get_method$arity$2(mf,dispatch_val);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._get_method[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._get_method["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_methods$arity$1;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_methods$arity$1(mf);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._methods[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._methods["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_prefers$arity$1;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_prefers$arity$1(mf);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._prefers[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._prefers["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if((function (){var and__3941__auto__ = mf;
if(and__3941__auto__)
{return mf.cljs$core$IMultiFn$_dispatch$arity$2;
} else
{return and__3941__auto__;
}
})())
{return mf.cljs$core$IMultiFn$_dispatch$arity$2(mf,args);
} else
{var x__2047__auto__ = (((mf == null))?null:mf);
return (function (){var or__3943__auto__ = (cljs.core._dispatch[goog.typeOf(x__2047__auto__)]);
if(or__3943__auto__)
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = (cljs.core._dispatch["_"]);
if(or__3943__auto____$1)
{return or__3943__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn = cljs.core._get_method.call(null,mf,dispatch_val);
if(cljs.core.truth_(target_fn))
{} else
{throw (new Error([cljs.core.str("No method in multimethod '"),cljs.core.str(cljs.core.name),cljs.core.str("' for dispatch value: "),cljs.core.str(dispatch_val)].join('')));
}
return cljs.core.apply.call(null,target_fn,args);
});
goog.provide('cljs.core.MultiFn');

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
this.cljs$lang$protocol_mask$partition0$ = 4194304;
this.cljs$lang$protocol_mask$partition1$ = 256;
})
cljs.core.MultiFn.cljs$lang$type = true;
cljs.core.MultiFn.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/MultiFn");
});
cljs.core.MultiFn.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.getUid(this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset$arity$1 = (function (mf){
var self__ = this;
cljs.core.swap_BANG_.call(null,self__.method_table,(function (mf__$1){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,self__.method_cache,(function (mf__$1){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,self__.prefer_table,(function (mf__$1){
return cljs.core.ObjMap.EMPTY;
}));
cljs.core.swap_BANG_.call(null,self__.cached_hierarchy,(function (mf__$1){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method$arity$3 = (function (mf,dispatch_val,method){
var self__ = this;
cljs.core.swap_BANG_.call(null,self__.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
cljs.core.swap_BANG_.call(null,self__.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method$arity$2 = (function (mf,dispatch_val){
var self__ = this;
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,self__.cached_hierarchy),cljs.core.deref.call(null,self__.hierarchy)))
{} else
{cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
}
var temp__4090__auto__ = cljs.core.deref.call(null,self__.method_cache).call(null,dispatch_val);
if(cljs.core.truth_(temp__4090__auto__))
{var target_fn = temp__4090__auto__;
return target_fn;
} else
{var temp__4090__auto____$1 = cljs.core.find_and_cache_best_method.call(null,self__.name,dispatch_val,self__.hierarchy,self__.method_table,self__.prefer_table,self__.method_cache,self__.cached_hierarchy);
if(cljs.core.truth_(temp__4090__auto____$1))
{var target_fn = temp__4090__auto____$1;
return target_fn;
} else
{return cljs.core.deref.call(null,self__.method_table).call(null,self__.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method$arity$3 = (function (mf,dispatch_val_x,dispatch_val_y){
var self__ = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,self__.prefer_table)))
{throw (new Error([cljs.core.str("Preference conflict in multimethod '"),cljs.core.str(self__.name),cljs.core.str("': "),cljs.core.str(dispatch_val_y),cljs.core.str(" is already preferred to "),cljs.core.str(dispatch_val_x)].join('')));
} else
{}
cljs.core.swap_BANG_.call(null,self__.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core._lookup.call(null,old,dispatch_val_x,cljs.core.PersistentHashSet.EMPTY),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,self__.method_cache,self__.method_table,self__.cached_hierarchy,self__.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods$arity$1 = (function (mf){
var self__ = this;
return cljs.core.deref.call(null,self__.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers$arity$1 = (function (mf){
var self__ = this;
return cljs.core.deref.call(null,self__.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch$arity$2 = (function (mf,args){
var self__ = this;
return cljs.core.do_dispatch.call(null,mf,self__.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3942__delegate = function (_,args){
var self = this;
return cljs.core._dispatch.call(null,self,args);
};
var G__3942 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3942__delegate.call(this, _, args);
};
G__3942.cljs$lang$maxFixedArity = 1;
G__3942.cljs$lang$applyTo = (function (arglist__3943){
var _ = cljs.core.first(arglist__3943);
var args = cljs.core.rest(arglist__3943);
return G__3942__delegate(_, args);
});
G__3942.cljs$lang$arity$variadic = G__3942__delegate;
return G__3942;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
var self = this;
return cljs.core._dispatch.call(null,self,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
goog.provide('cljs.core.UUID');

/**
* @constructor
*/
cljs.core.UUID = (function (uuid){
this.uuid = uuid;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2690646016;
})
cljs.core.UUID.cljs$lang$type = true;
cljs.core.UUID.cljs$lang$ctorPrSeq = (function (this__1987__auto__){
return cljs.core.list.call(null,"cljs.core/UUID");
});
cljs.core.UUID.cljs$lang$ctorPrWriter = (function (this__1987__auto__,writer__1988__auto__,opt__1989__auto__){
return cljs.core._write.call(null,writer__1988__auto__,"cljs.core/UUID");
});
cljs.core.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
return goog.string.hashCode(cljs.core.pr_str.call(null,this$));
});
cljs.core.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,___$1){
var self__ = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IPrintable$_pr_seq$arity$2 = (function (_,___$1){
var self__ = this;
return cljs.core.list.call(null,[cljs.core.str("#uuid \""),cljs.core.str(self__.uuid),cljs.core.str("\"")].join(''));
});
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var and__3941__auto__ = cljs.core.instance_QMARK_.call(null,cljs.core.UUID,other);
if(and__3941__auto__)
{return (self__.uuid === other.uuid);
} else
{return and__3941__auto__;
}
});
cljs.core.UUID.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});
cljs.core.destructure = (function destructure(bindings){
var bents = cljs.core.partition.call(null,2,bindings);
var pb = (function pb(bvec,b,v){
var pvec = (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var ret = cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gvec),val);
var n = 0;
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs))
{var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,(new cljs.core.Symbol(null,"&"))))
{{
var G__3948 = pb.call(null,ret,cljs.core.second.call(null,bs),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/nthnext")),gvec,n));
var G__3949 = n;
var G__3950 = cljs.core.nnext.call(null,bs);
var G__3951 = true;
ret = G__3948;
n = G__3949;
bs = G__3950;
seen_rest_QMARK_ = G__3951;
continue;
}
} else
{if(cljs.core._EQ_.call(null,firstb,"\uFDD0'as"))
{return pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else
{if("\uFDD0'else")
{if(cljs.core.truth_(seen_rest_QMARK_))
{throw (new cljs.core.Exception("Unsupported binding form, only :as can follow & parameter"));
} else
{{
var G__3952 = pb.call(null,ret,firstb,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/nth")),gvec,n,null));
var G__3953 = (n + 1);
var G__3954 = cljs.core.next.call(null,bs);
var G__3955 = seen_rest_QMARK_;
ret = G__3952;
n = G__3953;
bs = G__3954;
seen_rest_QMARK_ = G__3955;
continue;
}
}
} else
{return null;
}
}
}
} else
{return ret;
}
break;
}
});
var pmap = (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = (new cljs.core.Keyword("\uFDD0'or")).call(null,b__$1);
var ret = (function (ret){
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'as")).call(null,b__$1)))
{return cljs.core.conj.call(null,ret,(new cljs.core.Keyword("\uFDD0'as")).call(null,b__$1),gmap);
} else
{return ret;
}
}).call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/seq?"))),cljs.core.list.call(null,gmap)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/apply"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/hash-map"))),cljs.core.list.call(null,gmap)))),cljs.core.list.call(null,gmap)))));
var bes = cljs.core.reduce.call(null,(function (bes,entry){
return cljs.core.reduce.call(null,(function (p1__3944_SHARP_,p2__3945_SHARP_){
return cljs.core.assoc.call(null,p1__3944_SHARP_,p2__3945_SHARP_,cljs.core.val.call(null,entry).call(null,p2__3945_SHARP_));
}),cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
}),cljs.core.dissoc.call(null,b__$1,"\uFDD0'as","\uFDD0'or"),cljs.core.ObjMap.fromObject(["\uFDD0'keys","\uFDD0'strs","\uFDD0'syms"],{"\uFDD0'keys":(function (p1__3946_SHARP_){
return cljs.core.keyword.call(null,[cljs.core.str(p1__3946_SHARP_)].join(''));
}),"\uFDD0'strs":cljs.core.str,"\uFDD0'syms":(function (p1__3947_SHARP_){
return cljs.core.list.call(null,(new cljs.core.Symbol(null,"quote")),p1__3947_SHARP_);
})}));
while(true){
if(cljs.core.seq.call(null,bes))
{var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var has_default = cljs.core.contains_QMARK_.call(null,defaults,bb);
{
var G__3956 = pb.call(null,ret,bb,((has_default)?cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/get")),gmap,bk,defaults.call(null,bb)):cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/get")),gmap,bk)));
var G__3957 = cljs.core.next.call(null,bes);
ret = G__3956;
bes = G__3957;
continue;
}
} else
{return ret;
}
break;
}
});
if(cljs.core.symbol_QMARK_.call(null,b))
{return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,b),v);
} else
{if(cljs.core.vector_QMARK_.call(null,b))
{return pvec.call(null,bvec,b,v);
} else
{if(cljs.core.map_QMARK_.call(null,b))
{return pmap.call(null,bvec,b,v);
} else
{if("\uFDD0'else")
{throw (new Error([cljs.core.str("Unsupported binding form: "),cljs.core.str(b)].join('')));
} else
{return null;
}
}
}
}
});
var process_entry = (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents)))
{return bindings;
} else
{return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
});
cljs.core.namespaces = cljs.core.atom.call(null,cljs.core.hash_map((new cljs.core.Symbol(null,"cljs.core")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.core"))),(new cljs.core.Symbol(null,"cljs.user")),cljs.core.hash_map("\uFDD0'name",(new cljs.core.Symbol(null,"cljs.user")))));
/**
* Returns the namespace named by the symbol or nil if it doesn't
* exist.
*/
cljs.core.find_ns = (function find_ns(sym){
return cljs.core.deref.call(null,cljs.core.namespaces).call(null,sym);
});
/**
* Create a new namespace named by the symbol if one doesn't already
* exist, returns it or the already-existing namespace of the same
* name.
*/
cljs.core.create_ns = (function create_ns(sym){
var ns = cljs.core.find_ns.call(null,sym);
if(cljs.core.truth_(ns))
{return ns;
} else
{cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([sym,"\uFDD0'name"], true),sym);
return cljs.core.find_ns.call(null,sym);
}
});
cljs.core.in_ns = (function in_ns(name){
if(cljs.core.symbol_QMARK_.call(null,name))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unable to resolve namespace name"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"symbol?")),(new cljs.core.Symbol(null,"name"))),cljs.core.hash_map("\uFDD0'line",7394,"\uFDD0'column",11))))].join('')));
}
cljs.analyzer._STAR_cljs_ns_STAR_ = name;
return cljs.core._STAR_ns_sym_STAR_ = name;
});
/**
* Returns the "var" to which a symbol will be resolved in the
* namespace, else nil.
*/
cljs.core.ns_resolve = (function ns_resolve(ns,sym){
return cljs.core.get_in.call(null,ns,cljs.core.PersistentVector.fromArray(["\uFDD0'defs",sym], true));
});
/**
* same as (ns-resolve (find-ns *ns-sym*) symbol)
*/
cljs.core.resolve = (function resolve(sym){
return cljs.core.ns_resolve.call(null,cljs.core.find_ns.call(null,cljs.core._STAR_ns_sym_STAR_),sym);
});
cljs.core.setMacro = (function setMacro(sym){
var ns_3960 = cljs.core.symbol.call(null,(function (){var or__3943__auto__ = cljs.core.namespace.call(null,sym);
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{var or__3943__auto____$1 = cljs.core._STAR_ns_sym_STAR_;
if(cljs.core.truth_(or__3943__auto____$1))
{return or__3943__auto____$1;
} else
{var or__3943__auto____$2 = (function (){try{return cljs.analyzer._STAR_cljs_ns_STAR_;
}catch (e3959){if(cljs.core.instance_QMARK_.call(null,Error,e3959))
{var e = e3959;
return (new cljs.core.Symbol(null,"cljs.core"));
} else
{if("\uFDD0'else")
{throw e3959;
} else
{return null;
}
}
}})();
if(cljs.core.truth_(or__3943__auto____$2))
{return or__3943__auto____$2;
} else
{return (new cljs.core.Symbol(null,"cljs.core"));
}
}
}
})());
var name_3961 = cljs.core.symbol.call(null,cljs.core.name.call(null,sym));
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.assoc_in,cljs.core.PersistentVector.fromArray([ns_3960,"\uFDD0'defs",name_3961,"\uFDD0'macro?"], true),true);
return null;
});
/**
* @param {...*} var_args
*/
cljs.core.let$ = (function() { 
var let$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,decl){
return cljs.core.cons.call(null,(new cljs.core.Symbol(null,"let*")),decl);
};
var let$ = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var decl = null;
if (goog.isDef(var_args)) {
  decl = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return let$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, decl);
};
let$.cljs$lang$maxFixedArity = 2;
let$.cljs$lang$applyTo = (function (arglist__3962){
var _AMPERSAND_form = cljs.core.first(arglist__3962);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__3962));
var decl = cljs.core.rest(cljs.core.next(arglist__3962));
return let$__delegate(_AMPERSAND_form, _AMPERSAND_env, decl);
});
let$.cljs$lang$arity$variadic = let$__delegate;
return let$;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"let")));
/**
* @param {...*} var_args
*/
cljs.core.loop = (function() { 
var loop__delegate = function (_AMPERSAND_form,_AMPERSAND_env,decl){
return cljs.core.cons.call(null,(new cljs.core.Symbol(null,"loop*")),decl);
};
var loop = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var decl = null;
if (goog.isDef(var_args)) {
  decl = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return loop__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, decl);
};
loop.cljs$lang$maxFixedArity = 2;
loop.cljs$lang$applyTo = (function (arglist__3963){
var _AMPERSAND_form = cljs.core.first(arglist__3963);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__3963));
var decl = cljs.core.rest(cljs.core.next(arglist__3963));
return loop__delegate(_AMPERSAND_form, _AMPERSAND_env, decl);
});
loop.cljs$lang$arity$variadic = loop__delegate;
return loop;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"loop")));
/**
* @param {...*} var_args
*/
cljs.core.fn = (function() { 
var fn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,decl){
return cljs.core.with_meta.call(null,cljs.core.cons.call(null,(new cljs.core.Symbol(null,"fn*")),decl),cljs.core.meta.call(null,_AMPERSAND_form));
};
var fn = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var decl = null;
if (goog.isDef(var_args)) {
  decl = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, decl);
};
fn.cljs$lang$maxFixedArity = 2;
fn.cljs$lang$applyTo = (function (arglist__3964){
var _AMPERSAND_form = cljs.core.first(arglist__3964);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__3964));
var decl = cljs.core.rest(cljs.core.next(arglist__3964));
return fn__delegate(_AMPERSAND_form, _AMPERSAND_env, decl);
});
fn.cljs$lang$arity$variadic = fn__delegate;
return fn;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"fn")));
/**
* Sequentially read and evaluate the set of forms contained in the
* file. Returns a compile-forms* map that contains the emitted
* JavaScript string (:emit-str) and the output (:output).
*/
cljs.core.load_file_STAR_ = (function load_file_STAR_(name){
var _STAR_ns_sym_STAR_3968 = cljs.core._STAR_ns_sym_STAR_;
var _STAR_cljs_ns_STAR_3969 = cljs.analyzer._STAR_cljs_ns_STAR_;
try{cljs.core._STAR_ns_sym_STAR_ = cljs.core._STAR_ns_sym_STAR_;
cljs.analyzer._STAR_cljs_ns_STAR_ = cljs.analyzer._STAR_cljs_ns_STAR_;
return cljs.compiler.compile_and_eval_forms.call(null,cljs.compiler.forms_seq.call(null,name));
}finally {cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_3969;
cljs.core._STAR_ns_sym_STAR_ = _STAR_ns_sym_STAR_3968;
}});
/**
* Sequentially read and evaluate the set of forms contained in the
* file.
*/
cljs.core.load_file = (function load_file(name){
var lf = cljs.core.load_file_STAR_.call(null,name);
cljs.core.print.call(null,(new cljs.core.Keyword("\uFDD0'output")).call(null,lf));
return cljs.core.dissoc.call(null,lf,"\uFDD0'output","\uFDD0'emit-str");
});
/**
* Returns the root directory path for a lib
*/
cljs.core.root_resource = (function root_resource(lib){
return [cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,lib).replace("-","_").replace(".","/"))].join('');
});
cljs.core.lib__GT_path = (function lib__GT_path(lib){
return [cljs.core.str("../src/cljs"),cljs.core.str(cljs.core.root_resource.call(null,lib)),cljs.core.str(".cljs")].join('');
});
/**
* @param {...*} var_args
*/
cljs.core.require = (function() { 
var require__delegate = function (libs){
var G__3972 = cljs.core.seq.call(null,libs);
while(true){
if(G__3972)
{var lib = cljs.core.first.call(null,G__3972);
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.core.namespaces),cljs.core.PersistentVector.fromArray([lib,"\uFDD0'defs"], true))))
{} else
{cljs.core.load_file.call(null,cljs.core.lib__GT_path.call(null,lib));
}
{
var G__3973 = cljs.core.next.call(null,G__3972);
G__3972 = G__3973;
continue;
}
} else
{return null;
}
break;
}
};
var require = function (var_args){
var libs = null;
if (goog.isDef(var_args)) {
  libs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return require__delegate.call(this, libs);
};
require.cljs$lang$maxFixedArity = 0;
require.cljs$lang$applyTo = (function (arglist__3974){
var libs = cljs.core.seq(arglist__3974);;
return require__delegate(libs);
});
require.cljs$lang$arity$variadic = require__delegate;
return require;
})()
;
cljs.core.assert_valid_fdecl = (function assert_valid_fdecl(fdecl){
return null;
});
cljs.core.sigs = (function sigs(fdecl){
cljs.core.assert_valid_fdecl.call(null,fdecl);
var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,(new cljs.core.Symbol(null,"&form")),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,2,cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{if(cljs.core.next.call(null,body))
{return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.ObjMap.EMPTY),cljs.core.first.call(null,body)));
} else
{return arglist__$1;
}
} else
{return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))
{var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls))
{{
var G__3975 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__3976 = cljs.core.next.call(null,fdecls);
ret = G__3975;
fdecls = G__3976;
continue;
}
} else
{return cljs.core.seq.call(null,ret);
}
break;
}
} else
{return cljs.core.list.call(null,asig.call(null,fdecl));
}
});
/**
* Same as (def name (fn [params* ] exprs*)) or (def
* name (fn ([params* ] exprs*)+)) with any doc-string or attrs added
* to the var metadata. prepost-map defines a map with optional keys
* :pre and :post that contain collections of pre or post conditions.
* @param {...*} var_args
*/
cljs.core.defn = (function() { 
var defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if(cljs.core.symbol_QMARK_.call(null,name))
{} else
{throw (new Error("First argument to defn must be a symbol"));
}
var m = ((cljs.core.string_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?cljs.core.ObjMap.fromObject(["\uFDD0'doc"],{"\uFDD0'doc":cljs.core.first.call(null,fdecl)}):cljs.core.ObjMap.EMPTY);
var fdecl__$1 = ((cljs.core.string_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?cljs.core.list.call(null,fdecl__$2):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'arglists"],{"\uFDD0'arglists":cljs.core.list.call(null,(new cljs.core.Symbol(null,"quote")),cljs.core.sigs.call(null,fdecl__$4))}),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.ObjMap.EMPTY),m__$3);
return cljs.core.list.call(null,(new cljs.core.Symbol(null,"def")),cljs.core.with_meta.call(null,name,m__$4),cljs.core.cons.call(null,(new cljs.core.Symbol(null,"fn")),fdecl__$4));
};
var defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (goog.isDef(var_args)) {
  fdecl = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return defn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, fdecl);
};
defn.cljs$lang$maxFixedArity = 3;
defn.cljs$lang$applyTo = (function (arglist__3977){
var _AMPERSAND_form = cljs.core.first(arglist__3977);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__3977));
var name = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3977)));
var fdecl = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3977)));
return defn__delegate(_AMPERSAND_form, _AMPERSAND_env, name, fdecl);
});
defn.cljs$lang$arity$variadic = defn__delegate;
return defn;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"defn")));
/**
* Like defn, but the resulting function name is declared as a
* macro and will be used as a macro by the compiler when it is
* called.
* @param {...*} var_args
*/
cljs.core.defmacro = (function() { 
var defmacro__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = cljs.core.list.call(null,name);
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(cljs.core.string_QMARK_.call(null,f))
{{
var G__3978 = cljs.core.cons.call(null,f,p);
var G__3979 = cljs.core.next.call(null,args__$1);
p = G__3978;
args__$1 = G__3979;
continue;
}
} else
{if(cljs.core.map_QMARK_.call(null,f))
{{
var G__3980 = cljs.core.cons.call(null,f,p);
var G__3981 = cljs.core.next.call(null,args__$1);
p = G__3980;
args__$1 = G__3981;
continue;
}
} else
{return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(cljs.core.string_QMARK_.call(null,cljs.core.first.call(null,fd)))
{{
var G__3982 = cljs.core.next.call(null,fd);
fd = G__3982;
continue;
}
} else
{if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd)))
{{
var G__3983 = cljs.core.next.call(null,fd);
fd = G__3983;
continue;
}
} else
{return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?cljs.core.list.call(null,fdecl):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,(new cljs.core.Symbol(null,"&form")),cljs.core.cons.call(null,(new cljs.core.Symbol(null,"&env")),args__$1))),cljs.core.next.call(null,fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null))
{return acc;
} else
{var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d))
{return cljs.core.conj.call(null,acc,d);
} else
{{
var G__3984 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__3985 = cljs.core.next.call(null,ds);
acc = G__3984;
ds = G__3985;
continue;
}
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p))
{{
var G__3986 = cljs.core.next.call(null,p);
var G__3987 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__3986;
d = G__3987;
continue;
}
} else
{return d;
}
break;
}
})();
return cljs.core.list.call(null,(new cljs.core.Symbol(null,"do")),cljs.core.cons.call(null,(new cljs.core.Symbol(null,"defn")),decl),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/setMacro")),cljs.core.list.call(null,(new cljs.core.Symbol(null,"quote")),name)));
};
var defmacro = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return defmacro__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, args);
};
defmacro.cljs$lang$maxFixedArity = 3;
defmacro.cljs$lang$applyTo = (function (arglist__3988){
var _AMPERSAND_form = cljs.core.first(arglist__3988);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__3988));
var name = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3988)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3988)));
return defmacro__delegate(_AMPERSAND_form, _AMPERSAND_env, name, args);
});
defmacro.cljs$lang$arity$variadic = defmacro__delegate;
return defmacro;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"cljs.core/defmacro")));
/**
* Evaluates test. If logical true, evaluates body in an implicit do.
* @param {...*} var_args
*/
cljs.core.when = (function() { 
var when__delegate = function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.list.call(null,(new cljs.core.Symbol(null,"if")),test,cljs.core.cons.call(null,(new cljs.core.Symbol(null,"do")),body));
};
var when = function (_AMPERSAND_form,_AMPERSAND_env,test,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return when__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, test, body);
};
when.cljs$lang$maxFixedArity = 3;
when.cljs$lang$applyTo = (function (arglist__3989){
var _AMPERSAND_form = cljs.core.first(arglist__3989);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__3989));
var test = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3989)));
var body = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3989)));
return when__delegate(_AMPERSAND_form, _AMPERSAND_env, test, body);
});
when.cljs$lang$arity$variadic = when__delegate;
return when;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"when")));
/**
* Evaluates test. If logical false, evaluates body in an implicit do.
* @param {...*} var_args
*/
cljs.core.when_not = (function() { 
var when_not__delegate = function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.list.call(null,(new cljs.core.Symbol(null,"if")),test,null,cljs.core.cons.call(null,(new cljs.core.Symbol(null,"do")),body));
};
var when_not = function (_AMPERSAND_form,_AMPERSAND_env,test,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return when_not__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, test, body);
};
when_not.cljs$lang$maxFixedArity = 3;
when_not.cljs$lang$applyTo = (function (arglist__3990){
var _AMPERSAND_form = cljs.core.first(arglist__3990);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__3990));
var test = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3990)));
var body = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3990)));
return when_not__delegate(_AMPERSAND_form, _AMPERSAND_env, test, body);
});
when_not.cljs$lang$arity$variadic = when_not__delegate;
return when_not;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"when-not")));
/**
* Takes a set of test/expr pairs. It evaluates each test one at a
* time.  If a test returns logical true, cond evaluates and returns
* the value of the corresponding expr and doesn't evaluate any of the
* other tests or exprs. (cond) returns nil.
* @param {...*} var_args
*/
cljs.core.cond = (function() { 
var cond__delegate = function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses))
{return cljs.core.list.call(null,(new cljs.core.Symbol(null,"if")),cljs.core.first.call(null,clauses),((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})()),cljs.core.cons.call(null,(new cljs.core.Symbol(null,"cond")),cljs.core.next.call(null,cljs.core.next.call(null,clauses))));
} else
{return null;
}
};
var cond = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var clauses = null;
if (goog.isDef(var_args)) {
  clauses = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return cond__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, clauses);
};
cond.cljs$lang$maxFixedArity = 2;
cond.cljs$lang$applyTo = (function (arglist__3991){
var _AMPERSAND_form = cljs.core.first(arglist__3991);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__3991));
var clauses = cljs.core.rest(cljs.core.next(arglist__3991));
return cond__delegate(_AMPERSAND_form, _AMPERSAND_env, clauses);
});
cond.cljs$lang$arity$variadic = cond__delegate;
return cond;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"cond")));
/**
* Evaluates test. If logical false, evaluates and returns then expr,
* otherwise else expr, if supplied, else nil.
*/
cljs.core.if_not = (function() {
var if_not = null;
var if_not__4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/if-not"))),cljs.core.list.call(null,test),cljs.core.list.call(null,then),cljs.core.list.call(null,null)));
});
var if_not__5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/not"))),cljs.core.list.call(null,test)))),cljs.core.list.call(null,then),cljs.core.list.call(null,else$)));
});
if_not = function(_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
switch(arguments.length){
case 4:
return if_not__4.call(this,_AMPERSAND_form,_AMPERSAND_env,test,then);
case 5:
return if_not__5.call(this,_AMPERSAND_form,_AMPERSAND_env,test,then,else$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
if_not.cljs$lang$arity$4 = if_not__4;
if_not.cljs$lang$arity$5 = if_not__5;
return if_not;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"if-not")));
/**
* Evaluates exprs one at a time, from left to right. If a form
* returns logical false (nil or false), and returns that value and
* doesn't evaluate any of the other expressions, otherwise it returns
* the value of the last expr. (and) returns true.
* @param {...*} var_args
*/
cljs.core.and = (function() {
var and = null;
var and__2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});
var and__3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
var and__4 = (function() { 
var G__3994__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,next){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"and__3992__auto__"))),cljs.core.list.call(null,x))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"and__3992__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/and"))),next))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"and__3992__auto__"))))))));
};
var G__3994 = function (_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var next = null;
if (goog.isDef(var_args)) {
  next = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3994__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, next);
};
G__3994.cljs$lang$maxFixedArity = 3;
G__3994.cljs$lang$applyTo = (function (arglist__3995){
var _AMPERSAND_form = cljs.core.first(arglist__3995);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__3995));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3995)));
var next = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3995)));
return G__3994__delegate(_AMPERSAND_form, _AMPERSAND_env, x, next);
});
G__3994.cljs$lang$arity$variadic = G__3994__delegate;
return G__3994;
})()
;
and = function(_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var next = var_args;
switch(arguments.length){
case 2:
return and__2.call(this,_AMPERSAND_form,_AMPERSAND_env);
case 3:
return and__3.call(this,_AMPERSAND_form,_AMPERSAND_env,x);
default:
return and__4.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
and.cljs$lang$maxFixedArity = 3;
and.cljs$lang$applyTo = and__4.cljs$lang$applyTo;
and.cljs$lang$arity$2 = and__2;
and.cljs$lang$arity$3 = and__3;
and.cljs$lang$arity$variadic = and__4.cljs$lang$arity$variadic;
return and;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"and")));
/**
* Evaluates exprs one at a time, from left to right. If a form
* returns a logical true value, or returns that value and doesn't
* evaluate any of the other expressions, otherwise it returns the
* value of the last expression. (or) returns nil.
* @param {...*} var_args
*/
cljs.core.or = (function() {
var or = null;
var or__2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});
var or__3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
var or__4 = (function() { 
var G__3996__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,next){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"or__3993__auto__"))),cljs.core.list.call(null,x))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"or__3993__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"or__3993__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/or"))),next))))))));
};
var G__3996 = function (_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var next = null;
if (goog.isDef(var_args)) {
  next = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3996__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, next);
};
G__3996.cljs$lang$maxFixedArity = 3;
G__3996.cljs$lang$applyTo = (function (arglist__3997){
var _AMPERSAND_form = cljs.core.first(arglist__3997);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__3997));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3997)));
var next = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3997)));
return G__3996__delegate(_AMPERSAND_form, _AMPERSAND_env, x, next);
});
G__3996.cljs$lang$arity$variadic = G__3996__delegate;
return G__3996;
})()
;
or = function(_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var next = var_args;
switch(arguments.length){
case 2:
return or__2.call(this,_AMPERSAND_form,_AMPERSAND_env);
case 3:
return or__3.call(this,_AMPERSAND_form,_AMPERSAND_env,x);
default:
return or__4.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
or.cljs$lang$maxFixedArity = 3;
or.cljs$lang$applyTo = or__4.cljs$lang$applyTo;
or.cljs$lang$arity$2 = or__2;
or.cljs$lang$arity$3 = or__3;
or.cljs$lang$arity$variadic = or__4.cljs$lang$arity$variadic;
return or;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"or")));
/**
* form => fieldName-symbol or (instanceMethodName-symbol args*)
* 
* Expands into a member access (.) of the first member on the first
* argument, followed by the next member on the result, etc. For
* instance:
* 
* (.. System (getProperties) (get "os.name"))
* 
* expands to:
* 
* (. (. System (getProperties)) (get "os.name"))
* 
* but is easier to write, read, and understand.
* @param {...*} var_args
*/
cljs.core._DOTDOT_ = (function() {
var _DOTDOT_ = null;
var _DOTDOT___4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"."))),cljs.core.list.call(null,x),cljs.core.list.call(null,form)));
});
var _DOTDOT___5 = (function() { 
var G__3998__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/.."))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"."))),cljs.core.list.call(null,x),cljs.core.list.call(null,form)))),more));
};
var G__3998 = function (_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3998__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, form, more);
};
G__3998.cljs$lang$maxFixedArity = 4;
G__3998.cljs$lang$applyTo = (function (arglist__3999){
var _AMPERSAND_form = cljs.core.first(arglist__3999);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__3999));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3999)));
var form = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3999))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3999))));
return G__3998__delegate(_AMPERSAND_form, _AMPERSAND_env, x, form, more);
});
G__3998.cljs$lang$arity$variadic = G__3998__delegate;
return G__3998;
})()
;
_DOTDOT_ = function(_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = var_args;
switch(arguments.length){
case 4:
return _DOTDOT___4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,form);
default:
return _DOTDOT___5.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x,form, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_DOTDOT_.cljs$lang$maxFixedArity = 4;
_DOTDOT_.cljs$lang$applyTo = _DOTDOT___5.cljs$lang$applyTo;
_DOTDOT_.cljs$lang$arity$4 = _DOTDOT___4;
_DOTDOT_.cljs$lang$arity$variadic = _DOTDOT___5.cljs$lang$arity$variadic;
return _DOTDOT_;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"..")));
/**
* Threads the expr through the forms. Inserts x as the
* second item in the first form, making a list of it if it is not a
* list already. If there are more forms, inserts the first form as the
* second item in second form, etc.
* @param {...*} var_args
*/
cljs.core.__GT_ = (function() {
var __GT_ = null;
var __GT___3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
var __GT___4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
if(cljs.core.seq_QMARK_.call(null,form))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,cljs.core.first.call(null,form)),cljs.core.list.call(null,x),cljs.core.next.call(null,form))),cljs.core.meta.call(null,form));
} else
{return cljs.core.list.call(null,form,x);
}
});
var __GT___5 = (function() { 
var G__4000__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/->"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/->"))),cljs.core.list.call(null,x),cljs.core.list.call(null,form)))),more));
};
var G__4000 = function (_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4000__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, form, more);
};
G__4000.cljs$lang$maxFixedArity = 4;
G__4000.cljs$lang$applyTo = (function (arglist__4001){
var _AMPERSAND_form = cljs.core.first(arglist__4001);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4001));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4001)));
var form = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4001))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4001))));
return G__4000__delegate(_AMPERSAND_form, _AMPERSAND_env, x, form, more);
});
G__4000.cljs$lang$arity$variadic = G__4000__delegate;
return G__4000;
})()
;
__GT_ = function(_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = var_args;
switch(arguments.length){
case 3:
return __GT___3.call(this,_AMPERSAND_form,_AMPERSAND_env,x);
case 4:
return __GT___4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,form);
default:
return __GT___5.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x,form, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_.cljs$lang$maxFixedArity = 4;
__GT_.cljs$lang$applyTo = __GT___5.cljs$lang$applyTo;
__GT_.cljs$lang$arity$3 = __GT___3;
__GT_.cljs$lang$arity$4 = __GT___4;
__GT_.cljs$lang$arity$variadic = __GT___5.cljs$lang$arity$variadic;
return __GT_;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"->")));
/**
* Threads the expr through the forms. Inserts x as the
* last item in the first form, making a list of it if it is not a
* list already. If there are more forms, inserts the first form as the
* last item in second form, etc.
* @param {...*} var_args
*/
cljs.core.__GT__GT_ = (function() {
var __GT__GT_ = null;
var __GT__GT___4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
if(cljs.core.seq_QMARK_.call(null,form))
{return cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,cljs.core.first.call(null,form)),cljs.core.next.call(null,form),cljs.core.list.call(null,x))),cljs.core.meta.call(null,form));
} else
{return cljs.core.list.call(null,form,x);
}
});
var __GT__GT___5 = (function() { 
var G__4003__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/->>"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/->>"))),cljs.core.list.call(null,x),cljs.core.list.call(null,form)))),more));
};
var G__4003 = function (_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4003__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, form, more);
};
G__4003.cljs$lang$maxFixedArity = 4;
G__4003.cljs$lang$applyTo = (function (arglist__4004){
var _AMPERSAND_form = cljs.core.first(arglist__4004);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4004));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4004)));
var form = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4004))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4004))));
return G__4003__delegate(_AMPERSAND_form, _AMPERSAND_env, x, form, more);
});
G__4003.cljs$lang$arity$variadic = G__4003__delegate;
return G__4003;
})()
;
__GT__GT_ = function(_AMPERSAND_form,_AMPERSAND_env,x,form,var_args){
var more = var_args;
switch(arguments.length){
case 4:
return __GT__GT___4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,form);
default:
return __GT__GT___5.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x,form, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT__GT_.cljs$lang$maxFixedArity = 4;
__GT__GT_.cljs$lang$applyTo = __GT__GT___5.cljs$lang$applyTo;
__GT__GT_.cljs$lang$arity$4 = __GT__GT___4;
__GT__GT_.cljs$lang$arity$variadic = __GT__GT___5.cljs$lang$arity$variadic;
return __GT__GT_;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"->>")));
/**
* bindings => binding-form test
* 
* If test is true, evaluates then with binding-form bound to the value of
* test, if not, yields else
* @param {...*} var_args
*/
cljs.core.if_let = (function() {
var if_let = null;
var if_let__4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/if-let"))),cljs.core.list.call(null,bindings),cljs.core.list.call(null,then),cljs.core.list.call(null,null)));
});
var if_let__6 = (function() { 
var G__4006__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (nil? oldform)"));
}
if("1 or 2 forms after binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (= 2 (count bindings))"));
}
if("exactly 2 forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
var form = bindings.call(null,0);
var tst = bindings.call(null,1);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"temp__4002__auto__"))),cljs.core.list.call(null,tst))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"temp__4002__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,form),cljs.core.list.call(null,(new cljs.core.Symbol(null,"temp__4002__auto__"))))))),cljs.core.list.call(null,then)))),cljs.core.list.call(null,else$))))));
};
var G__4006 = function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,var_args){
var oldform = null;
if (goog.isDef(var_args)) {
  oldform = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4006__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, then, else$, oldform);
};
G__4006.cljs$lang$maxFixedArity = 5;
G__4006.cljs$lang$applyTo = (function (arglist__4007){
var _AMPERSAND_form = cljs.core.first(arglist__4007);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4007));
var bindings = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4007)));
var then = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4007))));
var else$ = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4007)))));
var oldform = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4007)))));
return G__4006__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, then, else$, oldform);
});
G__4006.cljs$lang$arity$variadic = G__4006__delegate;
return G__4006;
})()
;
if_let = function(_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,var_args){
var oldform = var_args;
switch(arguments.length){
case 4:
return if_let__4.call(this,_AMPERSAND_form,_AMPERSAND_env,bindings,then);
default:
return if_let__6.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
if_let.cljs$lang$maxFixedArity = 5;
if_let.cljs$lang$applyTo = if_let__6.cljs$lang$applyTo;
if_let.cljs$lang$arity$4 = if_let__4;
if_let.cljs$lang$arity$variadic = if_let__6.cljs$lang$arity$variadic;
return if_let;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"if-let")));
/**
* bindings => binding-form test
* 
* When test is true, evaluates body with binding-form bound to the value of test
* @param {...*} var_args
*/
cljs.core.when_let = (function() { 
var when_let__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (= 2 (count bindings))"));
}
if("exactly 2 forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
var form = bindings.call(null,0);
var tst = bindings.call(null,1);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"temp__4005__auto__"))),cljs.core.list.call(null,tst))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/when"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"temp__4005__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,form),cljs.core.list.call(null,(new cljs.core.Symbol(null,"temp__4005__auto__"))))))),body))))))));
};
var when_let = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return when_let__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
when_let.cljs$lang$maxFixedArity = 3;
when_let.cljs$lang$applyTo = (function (arglist__4009){
var _AMPERSAND_form = cljs.core.first(arglist__4009);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4009));
var bindings = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4009)));
var body = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4009)));
return when_let__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
when_let.cljs$lang$arity$variadic = when_let__delegate;
return when_let;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"when-let")));
/**
* defs the supplied var names with no bindings, useful for making forward declarations.
* @param {...*} var_args
*/
cljs.core.declare = (function() { 
var declare__delegate = function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),cljs.core.map.call(null,(function (p1__4008_SHARP_){
return cljs.core.list.call(null,(new cljs.core.Symbol(null,"def")),cljs.core.vary_meta.call(null,p1__4008_SHARP_,cljs.core.assoc,"\uFDD0'declared",true));
}),names)));
};
var declare = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var names = null;
if (goog.isDef(var_args)) {
  names = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return declare__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, names);
};
declare.cljs$lang$maxFixedArity = 2;
declare.cljs$lang$applyTo = (function (arglist__4010){
var _AMPERSAND_form = cljs.core.first(arglist__4010);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4010));
var names = cljs.core.rest(cljs.core.next(arglist__4010));
return declare__delegate(_AMPERSAND_form, _AMPERSAND_env, names);
});
declare.cljs$lang$arity$variadic = declare__delegate;
return declare;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"declare")));
/**
* Evaluates x then calls all of the methods and functions with the
* value of x supplied at the front of the given arguments.  The forms
* are evaluated in order.  Returns x.
* 
* (doto (new js/Array) (.push "a") (.push "b"))
* @param {...*} var_args
*/
cljs.core.doto = (function() { 
var doto__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,gx),cljs.core.list.call(null,x))))),cljs.core.map.call(null,(function (f){
if(cljs.core.seq_QMARK_.call(null,f))
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,cljs.core.first.call(null,f)),cljs.core.list.call(null,gx),cljs.core.next.call(null,f)));
} else
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,f),cljs.core.list.call(null,gx)));
}
}),forms),cljs.core.list.call(null,gx)));
};
var doto = function (_AMPERSAND_form,_AMPERSAND_env,x,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return doto__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, forms);
};
doto.cljs$lang$maxFixedArity = 3;
doto.cljs$lang$applyTo = (function (arglist__4011){
var _AMPERSAND_form = cljs.core.first(arglist__4011);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4011));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4011)));
var forms = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4011)));
return doto__delegate(_AMPERSAND_form, _AMPERSAND_env, x, forms);
});
doto.cljs$lang$arity$variadic = doto__delegate;
return doto;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"doto")));
/**
* Expands into code that creates a fn that expects to be passed an
* object and any args and calls the named instance method on the
* object passing the args. Use when you want to treat a Java method as
* a first-class fn. name may be type-hinted with the method receiver's
* type in order to avoid reflective calls.
* @param {...*} var_args
*/
cljs.core.memfn = (function() { 
var memfn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,t),args)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"."))),cljs.core.list.call(null,t),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,name),args))))))));
};
var memfn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return memfn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, args);
};
memfn.cljs$lang$maxFixedArity = 3;
memfn.cljs$lang$applyTo = (function (arglist__4012){
var _AMPERSAND_form = cljs.core.first(arglist__4012);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4012));
var name = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4012)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4012)));
return memfn__delegate(_AMPERSAND_form, _AMPERSAND_env, name, args);
});
memfn.cljs$lang$arity$variadic = memfn__delegate;
return memfn;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"memfn")));
cljs.core.maybe_destructured = (function maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params))
{return cljs.core.cons.call(null,params,body);
} else
{var params__$1 = params;
var new_params = cljs.core.PersistentVector.EMPTY;
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1))
{if(cljs.core.symbol_QMARK_.call(null,cljs.core.first.call(null,params__$1)))
{{
var G__4013 = cljs.core.next.call(null,params__$1);
var G__4014 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__4015 = lets;
params__$1 = G__4013;
new_params = G__4014;
lets = G__4015;
continue;
}
} else
{var gparam = cljs.core.gensym.call(null,"p__");
{
var G__4016 = cljs.core.next.call(null,params__$1);
var G__4017 = cljs.core.conj.call(null,new_params,gparam);
var G__4018 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__4016;
new_params = G__4017;
lets = G__4018;
continue;
}
}
} else
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,new_params),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,lets),body)))));
}
break;
}
}
});
/**
* params => positional-params* , or positional-params* & next-param
* positional-param => binding-form
* next-param => binding-form
* name => symbol
* 
* Defines a function
* @param {...*} var_args
*/
cljs.core.fn = (function() { 
var fn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = ((cljs.core.symbol_QMARK_.call(null,cljs.core.first.call(null,sigs)))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?cljs.core.list.call(null,sigs__$1):((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig)))
{throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else
{}
var vec__4021 = sig;
var params = cljs.core.nth.call(null,vec__4021,0,null);
var body = cljs.core.nthnext.call(null,vec__4021,1);
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (cljs.core.truth_((function (){var and__3941__auto__ = cljs.core.next.call(null,body);
if(and__3941__auto__)
{return cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body));
} else
{return and__3941__auto__;
}
})())?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__3943__auto__ = conds;
if(cljs.core.truth_(or__3943__auto__))
{return or__3943__auto__;
} else
{return cljs.core.meta.call(null,params);
}
})();
var pre = (new cljs.core.Keyword("\uFDD0'pre")).call(null,conds__$1);
var post = (new cljs.core.Keyword("\uFDD0'post")).call(null,conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"%"))),cljs.core.list.call(null,(((1 < cljs.core.count.call(null,body__$1)))?cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),body__$1)):cljs.core.first.call(null,body__$1))))))),cljs.core.map.call(null,(function (c){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/assert"))),cljs.core.list.call(null,c)));
}),post),cljs.core.list.call(null,(new cljs.core.Symbol(null,"%")))))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,(function (c){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/assert"))),cljs.core.list.call(null,c)));
}),pre),body__$2):body__$2);
return cljs.core.maybe_destructured.call(null,params,body__$3);
});
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,(new cljs.core.Symbol(null,"fn*")),name,new_sigs):cljs.core.cons.call(null,(new cljs.core.Symbol(null,"fn*")),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
};
var fn = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var sigs = null;
if (goog.isDef(var_args)) {
  sigs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return fn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, sigs);
};
fn.cljs$lang$maxFixedArity = 2;
fn.cljs$lang$applyTo = (function (arglist__4022){
var _AMPERSAND_form = cljs.core.first(arglist__4022);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4022));
var sigs = cljs.core.rest(cljs.core.next(arglist__4022));
return fn__delegate(_AMPERSAND_form, _AMPERSAND_env, sigs);
});
fn.cljs$lang$arity$variadic = fn__delegate;
return fn;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"fn")));
/**
* bindings => x xs
* 
* Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
* @param {...*} var_args
*/
cljs.core.when_first = (function() { 
var when_first__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (= 2 (count bindings))"));
}
if("exactly 2 forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
var vec__4024 = bindings;
var x = cljs.core.nth.call(null,vec__4024,0,null);
var xs = cljs.core.nth.call(null,vec__4024,1,null);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/when-let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"xs__4019__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/seq"))),cljs.core.list.call(null,xs)))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,x),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/first"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"xs__4019__auto__")))))))))),body)))));
};
var when_first = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return when_first__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
when_first.cljs$lang$maxFixedArity = 3;
when_first.cljs$lang$applyTo = (function (arglist__4025){
var _AMPERSAND_form = cljs.core.first(arglist__4025);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4025));
var bindings = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4025)));
var body = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4025)));
return when_first__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
when_first.cljs$lang$arity$variadic = when_first__delegate;
return when_first;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"when-first")));
/**
* Ignores body, yields nil
* @param {...*} var_args
*/
cljs.core.comment = (function() { 
var comment__delegate = function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
};
var comment = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return comment__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, body);
};
comment.cljs$lang$maxFixedArity = 2;
comment.cljs$lang$applyTo = (function (arglist__4026){
var _AMPERSAND_form = cljs.core.first(arglist__4026);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4026));
var body = cljs.core.rest(cljs.core.next(arglist__4026));
return comment__delegate(_AMPERSAND_form, _AMPERSAND_env, body);
});
comment.cljs$lang$arity$variadic = comment__delegate;
return comment;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"comment")));
/**
* same as defn, yielding non-public def
* @param {...*} var_args
*/
cljs.core.defn_ = (function() { 
var defn___delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,(new cljs.core.Symbol(null,"cljs.core/defn")),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),"\uFDD0'private",true)),decls);
};
var defn_ = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var decls = null;
if (goog.isDef(var_args)) {
  decls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return defn___delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, decls);
};
defn_.cljs$lang$maxFixedArity = 3;
defn_.cljs$lang$applyTo = (function (arglist__4027){
var _AMPERSAND_form = cljs.core.first(arglist__4027);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4027));
var name = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4027)));
var decls = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4027)));
return defn___delegate(_AMPERSAND_form, _AMPERSAND_env, name, decls);
});
defn_.cljs$lang$arity$variadic = defn___delegate;
return defn_;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"defn-")));
/**
* defs name to have the root value of the expr if the named var has
* no root value, else expr is unevaluated
*/
cljs.core.defonce = (function defonce(_AMPERSAND_form,_AMPERSAND_env,name,expr){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/when-not"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/resolve"))),cljs.core.list.call(null,name)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"def"))),cljs.core.list.call(null,name),cljs.core.list.call(null,expr))))));
});
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"defonce")));
/**
* Repeatedly executes body while test expression is true. Presumes
* some side-effect will cause test to become false/nil. Returns nil
* @param {...*} var_args
*/
cljs.core.while$ = (function() { 
var while$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/loop"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/when"))),cljs.core.list.call(null,test),body,cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"recur")))))))))));
};
var while$ = function (_AMPERSAND_form,_AMPERSAND_env,test,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return while$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, test, body);
};
while$.cljs$lang$maxFixedArity = 3;
while$.cljs$lang$applyTo = (function (arglist__4029){
var _AMPERSAND_form = cljs.core.first(arglist__4029);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4029));
var test = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4029)));
var body = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4029)));
return while$__delegate(_AMPERSAND_form, _AMPERSAND_env, test, body);
});
while$.cljs$lang$arity$variadic = while$__delegate;
return while$;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"while")));
/**
* fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
* 
* Takes a vector of function specs and a body, and generates a set of
* bindings of functions to their names. All of the names are available
* in all of the definitions of the functions, as well as the body.
* @param {...*} var_args
*/
cljs.core.letfn = (function() { 
var letfn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"letfn*"))),cljs.core.list.call(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__4028_SHARP_){
return cljs.core.cons.call(null,(new cljs.core.Symbol(null,"cljs.core/fn")),p1__4028_SHARP_);
}),fnspecs)))),body));
};
var letfn = function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return letfn__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, fnspecs, body);
};
letfn.cljs$lang$maxFixedArity = 3;
letfn.cljs$lang$applyTo = (function (arglist__4030){
var _AMPERSAND_form = cljs.core.first(arglist__4030);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4030));
var fnspecs = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4030)));
var body = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4030)));
return letfn__delegate(_AMPERSAND_form, _AMPERSAND_env, fnspecs, body);
});
letfn.cljs$lang$arity$variadic = letfn__delegate;
return letfn;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"letfn")));
/**
* binding => binding-form init-expr
* 
* Evaluates the exprs in a lexical context in which the symbols in
* the binding-forms are bound to their respective init-exprs or parts
* therein.
* @param {...*} var_args
*/
cljs.core.let$ = (function() { 
var let$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (even? (count bindings))"));
}
if("an even number of forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"let*"))),cljs.core.list.call(null,cljs.core.destructure.call(null,bindings)),body));
};
var let$ = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return let$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
let$.cljs$lang$maxFixedArity = 3;
let$.cljs$lang$applyTo = (function (arglist__4031){
var _AMPERSAND_form = cljs.core.first(arglist__4031);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4031));
var bindings = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4031)));
var body = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4031)));
return let$__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
let$.cljs$lang$arity$variadic = let$__delegate;
return let$;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"let")));
/**
* Evaluates the exprs in a lexical context in which the symbols in
* the binding-forms are bound to their respective init-exprs or parts
* therein. Acts as a recur target.
* @param {...*} var_args
*/
cljs.core.loop = (function() { 
var loop__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if("a vector for its binding")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires (even? (count bindings))"));
}
if("an even number of forms in binding vector")
{} else
{throw (new java.lang.IllegalArgumentException("(vector? bindings) requires "));
}
var db = cljs.core.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings))
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"loop*"))),cljs.core.list.call(null,bindings),body));
} else
{var vs = cljs.core.take_nth.call(null,2,cljs.core.drop.call(null,1,bindings));
var bs = cljs.core.take_nth.call(null,2,bindings);
var gs = cljs.core.map.call(null,(function (b){
if(cljs.core.symbol_QMARK_.call(null,b))
{return b;
} else
{return cljs.core.gensym.call(null);
}
}),bs);
var bfs = cljs.core.reduce.call(null,(function (ret,p__4035){
var vec__4036 = p__4035;
var b = cljs.core.nth.call(null,vec__4036,0,null);
var v = cljs.core.nth.call(null,vec__4036,1,null);
var g = cljs.core.nth.call(null,vec__4036,2,null);
if(cljs.core.symbol_QMARK_.call(null,b))
{return cljs.core.conj.call(null,ret,g,v);
} else
{return cljs.core.conj.call(null,ret,g,v,b,g);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,bfs),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"loop*"))),cljs.core.list.call(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs))),body))))))));
}
};
var loop = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return loop__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
loop.cljs$lang$maxFixedArity = 3;
loop.cljs$lang$applyTo = (function (arglist__4037){
var _AMPERSAND_form = cljs.core.first(arglist__4037);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4037));
var bindings = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4037)));
var body = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4037)));
return loop__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
loop.cljs$lang$arity$variadic = loop__delegate;
return loop;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"loop")));
/**
* protocol fqn -> [partition number, bit]
*/
cljs.core.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__4032_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__4032_SHARP_)].join(''));
}),cljs.core.vec([(new cljs.core.Symbol(null,"IFn")),(new cljs.core.Symbol(null,"ICounted")),(new cljs.core.Symbol(null,"IEmptyableCollection")),(new cljs.core.Symbol(null,"ICollection")),(new cljs.core.Symbol(null,"IIndexed")),(new cljs.core.Symbol(null,"ASeq")),(new cljs.core.Symbol(null,"ISeq")),(new cljs.core.Symbol(null,"INext")),(new cljs.core.Symbol(null,"ILookup")),(new cljs.core.Symbol(null,"IAssociative")),(new cljs.core.Symbol(null,"IMap")),(new cljs.core.Symbol(null,"IMapEntry")),(new cljs.core.Symbol(null,"ISet")),(new cljs.core.Symbol(null,"IStack")),(new cljs.core.Symbol(null,"IVector")),(new cljs.core.Symbol(null,"IDeref")),(new cljs.core.Symbol(null,"IDerefWithTimeout")),(new cljs.core.Symbol(null,"IMeta")),(new cljs.core.Symbol(null,"IWithMeta")),(new cljs.core.Symbol(null,"IReduce")),(new cljs.core.Symbol(null,"IKVReduce")),(new cljs.core.Symbol(null,"IEquiv")),(new cljs.core.Symbol(null,"IHash")),(new cljs.core.Symbol(null,"ISeqable")),(new cljs.core.Symbol(null,"ISequential")),(new cljs.core.Symbol(null,"IList")),(new cljs.core.Symbol(null,"IRecord")),(new cljs.core.Symbol(null,"IReversible")),(new cljs.core.Symbol(null,"ISorted")),(new cljs.core.Symbol(null,"IPrintable")),(new cljs.core.Symbol(null,"IWriter")),(new cljs.core.Symbol(null,"IPrintWithWriter")),(new cljs.core.Symbol(null,"IPending")),(new cljs.core.Symbol(null,"IWatchable")),(new cljs.core.Symbol(null,"IEditableCollection")),(new cljs.core.Symbol(null,"ITransientCollection")),(new cljs.core.Symbol(null,"ITransientAssociative")),(new cljs.core.Symbol(null,"ITransientMap")),(new cljs.core.Symbol(null,"ITransientVector")),(new cljs.core.Symbol(null,"ITransientSet")),(new cljs.core.Symbol(null,"IMultiFn")),(new cljs.core.Symbol(null,"IChunkedSeq")),(new cljs.core.Symbol(null,"IChunkedNext")),(new cljs.core.Symbol(null,"IComparable"))])),cljs.core.iterate.call(null,(function (p__4038){
var vec__4039 = p__4038;
var p = cljs.core.nth.call(null,vec__4039,0,null);
var b = cljs.core.nth.call(null,vec__4039,1,null);
if((2147483648 === b))
{return cljs.core.PersistentVector.fromArray([(p + 1),1], true);
} else
{return cljs.core.PersistentVector.fromArray([p,(b << 1)], true);
}
}),cljs.core.PersistentVector.fromArray([0,1], true)));
/**
* total number of partitions
*/
cljs.core.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core.fast_path_protocols);
var m = (c % 32);
if((m === 0))
{return cljs.core.quot.call(null,c,32);
} else
{return (cljs.core.quot.call(null,c,32) + 1);
}
})();
cljs.core.bool_expr = (function bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,"\uFDD0'tag",(new cljs.core.Symbol(null,"boolean")));
});
cljs.core.coercive_not = (function coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.bool_expr.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"js*")),"(!~{})",x));
});
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"coercive-not")));
/**
* @param {...*} var_args
*/
cljs.core.unsafe_bit_and = (function() {
var unsafe_bit_and = null;
var unsafe_bit_and__4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.bool_expr.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"js*")),"(~{} & ~{})",x,y));
});
var unsafe_bit_and__5 = (function() { 
var G__4040__delegate = function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/unsafe-bit-and"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/unsafe-bit-and"))),cljs.core.list.call(null,x),cljs.core.list.call(null,y)))),more));
};
var G__4040 = function (_AMPERSAND_form,_AMPERSAND_env,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__4040__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, x, y, more);
};
G__4040.cljs$lang$maxFixedArity = 4;
G__4040.cljs$lang$applyTo = (function (arglist__4041){
var _AMPERSAND_form = cljs.core.first(arglist__4041);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4041));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4041)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4041))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4041))));
return G__4040__delegate(_AMPERSAND_form, _AMPERSAND_env, x, y, more);
});
G__4040.cljs$lang$arity$variadic = G__4040__delegate;
return G__4040;
})()
;
unsafe_bit_and = function(_AMPERSAND_form,_AMPERSAND_env,x,y,var_args){
var more = var_args;
switch(arguments.length){
case 4:
return unsafe_bit_and__4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,y);
default:
return unsafe_bit_and__5.cljs$lang$arity$variadic(_AMPERSAND_form,_AMPERSAND_env,x,y, cljs.core.array_seq(arguments, 4));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsafe_bit_and.cljs$lang$maxFixedArity = 4;
unsafe_bit_and.cljs$lang$applyTo = unsafe_bit_and__5.cljs$lang$applyTo;
unsafe_bit_and.cljs$lang$arity$4 = unsafe_bit_and__4;
unsafe_bit_and.cljs$lang$arity$variadic = unsafe_bit_and__5.cljs$lang$arity$variadic;
return unsafe_bit_and;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"unsafe-bit-and")));
cljs.core.base_type = cljs.core.PersistentArrayMap.fromArrays([null,(new cljs.core.Symbol(null,"object")),(new cljs.core.Symbol(null,"string")),(new cljs.core.Symbol(null,"number")),(new cljs.core.Symbol(null,"array")),(new cljs.core.Symbol(null,"function")),(new cljs.core.Symbol(null,"boolean")),(new cljs.core.Symbol(null,"default"))],["null","object","string","number","array","function","boolean","_"]);
/**
* @param {...*} var_args
*/
cljs.core.reify = (function() { 
var reify__delegate = function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.gensym.call(null,"t");
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,(new cljs.core.Keyword("\uFDD0'locals")).call(null,_AMPERSAND_env));
var ns = (new cljs.core.Keyword("\uFDD0'name")).call(null,(new cljs.core.Keyword("\uFDD0'ns")).call(null,_AMPERSAND_env));
var munge = cljs.compiler.munge;
var ns_t = cljs.core.list.call(null,(new cljs.core.Symbol(null,"js*")),[cljs.core.str(munge.call(null,ns)),cljs.core.str("."),cljs.core.str(munge.call(null,t))].join(''));
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/when"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/undefined?"))),cljs.core.list.call(null,ns_t)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/deftype"))),cljs.core.list.call(null,t),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,cljs.core.list.call(null,meta_sym))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/IWithMeta"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-with-meta"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,this_sym),cljs.core.list.call(null,meta_sym))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"new"))),cljs.core.list.call(null,t),locals,cljs.core.list.call(null,meta_sym))))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/IMeta"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-meta"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,this_sym))))),cljs.core.list.call(null,meta_sym)))),impls)))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"new"))),cljs.core.list.call(null,t),locals,cljs.core.list.call(null,null))))));
};
var reify = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var impls = null;
if (goog.isDef(var_args)) {
  impls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return reify__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, impls);
};
reify.cljs$lang$maxFixedArity = 2;
reify.cljs$lang$applyTo = (function (arglist__4042){
var _AMPERSAND_form = cljs.core.first(arglist__4042);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4042));
var impls = cljs.core.rest(cljs.core.next(arglist__4042));
return reify__delegate(_AMPERSAND_form, _AMPERSAND_env, impls);
});
reify.cljs$lang$arity$variadic = reify__delegate;
return reify;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"reify")));
/**
* Defines a scope where JavaScript's implicit "this" is bound to the name provided.
* @param {...*} var_args
*/
cljs.core.this_as = (function() { 
var this_as__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,name),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"js*"))),cljs.core.list.call(null,"this")))))))),body));
};
var this_as = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return this_as__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, name, body);
};
this_as.cljs$lang$maxFixedArity = 3;
this_as.cljs$lang$applyTo = (function (arglist__4043){
var _AMPERSAND_form = cljs.core.first(arglist__4043);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4043));
var name = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4043)));
var body = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4043)));
return this_as__delegate(_AMPERSAND_form, _AMPERSAND_env, name, body);
});
this_as.cljs$lang$arity$variadic = this_as__delegate;
return this_as;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"this-as")));
cljs.core.to_property = (function to_property(sym){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(sym)].join(''));
});
cljs.core.parse_impls = (function parse_impls(specs){
var ret = cljs.core.ObjMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s))
{{
var G__4046 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__4047 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__4046;
s = G__4047;
continue;
}
} else
{return ret;
}
break;
}
});
/**
* @param {...*} var_args
*/
cljs.core.extend_type = (function() { 
var extend_type__delegate = function (_AMPERSAND_form,_AMPERSAND_env,tsym,impls){
var resolve = (function (p1__4044_SHARP_){
var ret = (new cljs.core.Keyword("\uFDD0'name")).call(null,cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),p1__4044_SHARP_));
if(cljs.core.truth_(ret))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(p1__4044_SHARP_)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,(new cljs.core.Symbol(null,"ret"))))].join('')));
}
return ret;
});
var impl_map = cljs.core.parse_impls.call(null,impls);
var warn_if_not_protocol = (function (p1__4045_SHARP_){
if(cljs.core._EQ_.call(null,(new cljs.core.Symbol(null,"Object")),p1__4045_SHARP_))
{return null;
} else
{if(cljs.core.truth_(cljs.analyzer._STAR_cljs_warn_on_undeclared_STAR_))
{var temp__4090__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),p1__4045_SHARP_);
if(cljs.core.truth_(temp__4090__auto__))
{var var$ = temp__4090__auto__;
if(cljs.core.truth_((new cljs.core.Keyword("\uFDD0'protocol-symbol")).call(null,var$)))
{} else
{cljs.analyzer.warning.call(null,_AMPERSAND_env,[cljs.core.str("WARNING: Symbol "),cljs.core.str(p1__4045_SHARP_),cljs.core.str(" is not a protocol")].join(''));
}
if(cljs.core.truth_((function (){var and__3941__auto__ = cljs.analyzer._STAR_cljs_warn_protocol_deprecated_STAR_;
if(cljs.core.truth_(and__3941__auto__))
{var and__3941__auto____$1 = (new cljs.core.Keyword("\uFDD0'deprecated")).call(null,var$);
if(cljs.core.truth_(and__3941__auto____$1))
{return cljs.core.not.call(null,(new cljs.core.Keyword("\uFDD0'deprecation-nowarn")).call(null,cljs.core.meta.call(null,p1__4045_SHARP_)));
} else
{return and__3941__auto____$1;
}
} else
{return and__3941__auto__;
}
})()))
{return cljs.analyzer.warning.call(null,_AMPERSAND_env,[cljs.core.str("WARNING: Protocol "),cljs.core.str(p1__4045_SHARP_),cljs.core.str(" is deprecated")].join(''));
} else
{return null;
}
} else
{return cljs.analyzer.warning.call(null,_AMPERSAND_env,[cljs.core.str("WARNING: Can't resolve protocol symbol "),cljs.core.str(p1__4045_SHARP_)].join(''));
}
} else
{return null;
}
}
});
var skip_flag = cljs.core.set.call(null,(new cljs.core.Keyword("\uFDD0'skip-protocol-flag")).call(null,cljs.core.meta.call(null,tsym)));
if(cljs.core.truth_(cljs.core.base_type.call(null,tsym)))
{var t = cljs.core.base_type.call(null,tsym);
var assign_impls = (function (p__4070){
var vec__4071 = p__4070;
var p = cljs.core.nth.call(null,vec__4071,0,null);
var sigs = cljs.core.nth.call(null,vec__4071,1,null);
warn_if_not_protocol.call(null,p);
var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),0,([cljs.core.str(psym)].join('').indexOf("/") + 1));
return cljs.core.cons.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/aset"))),cljs.core.list.call(null,psym),cljs.core.list.call(null,t),cljs.core.list.call(null,true))),cljs.core.map.call(null,(function (p__4072){
var vec__4073 = p__4072;
var f = cljs.core.nth.call(null,vec__4073,0,null);
var meths = cljs.core.nthnext.call(null,vec__4073,1);
var form = vec__4073;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/aset"))),cljs.core.list.call(null,cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''))),cljs.core.list.call(null,t),cljs.core.list.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),meths)),cljs.core.meta.call(null,form)))));
}),sigs));
});
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),cljs.core.mapcat.call(null,assign_impls,impl_map)));
} else
{var t = resolve.call(null,tsym);
var prototype_prefix = (function (sym){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/.."))),cljs.core.list.call(null,tsym),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/-prototype"))),cljs.core.list.call(null,cljs.core.to_property.call(null,sym))));
});
var assign_impls = (function (p__4074){
var vec__4075 = p__4074;
var p = cljs.core.nth.call(null,vec__4075,0,null);
var sigs = cljs.core.nth.call(null,vec__4075,1,null);
warn_if_not_protocol.call(null,p);
var psym = resolve.call(null,p);
var pprefix = cljs.compiler.protocol_prefix.call(null,psym);
if(cljs.core._EQ_.call(null,p,(new cljs.core.Symbol(null,"Object"))))
{var adapt_params = (function (p__4076){
var vec__4077 = p__4076;
var sig = cljs.core.nth.call(null,vec__4077,0,null);
var body = cljs.core.nthnext.call(null,vec__4077,1);
var vec__4078 = sig;
var tname = cljs.core.nth.call(null,vec__4078,0,null);
var args = cljs.core.nthnext.call(null,vec__4078,1);
return cljs.core.list.call(null,cljs.core.vec.call(null,args),cljs.core.list_STAR_.call(null,(new cljs.core.Symbol(null,"this-as")),cljs.core.vary_meta.call(null,tname,cljs.core.assoc,"\uFDD0'tag",t),body));
});
return cljs.core.map.call(null,(function (p__4079){
var vec__4080 = p__4079;
var f = cljs.core.nth.call(null,vec__4080,0,null);
var meths = cljs.core.nthnext.call(null,vec__4080,1);
var form = vec__4080;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,prototype_prefix.call(null,f)),cljs.core.list.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.map.call(null,adapt_params,meths))),cljs.core.meta.call(null,form)))));
}),sigs);
} else
{return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:cljs.core.PersistentVector.fromArray([cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,prototype_prefix.call(null,pprefix)),cljs.core.list.call(null,true)))], true)),cljs.core.mapcat.call(null,(function (p__4081){
var vec__4082 = p__4081;
var f = cljs.core.nth.call(null,vec__4082,0,null);
var meths = cljs.core.nthnext.call(null,vec__4082,1);
var form = vec__4082;
if(cljs.core._EQ_.call(null,psym,(new cljs.core.Symbol(null,"cljs.core/IFn"))))
{var adapt_params = (function (p__4083){
var vec__4084 = p__4083;
var vec__4085 = cljs.core.nth.call(null,vec__4084,0,null);
var targ = cljs.core.nth.call(null,vec__4085,0,null);
var args = cljs.core.nthnext.call(null,vec__4085,1);
var sig = vec__4085;
var body = cljs.core.nthnext.call(null,vec__4084,1);
var this_sym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"this-sym"),cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":t}));
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,this_sym,args))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/this-as"))),cljs.core.list.call(null,this_sym),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,targ),cljs.core.list.call(null,this_sym))))),body))))))));
});
var meths__$1 = cljs.core.map.call(null,adapt_params,meths);
var this_sym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"this-sym"),cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":t}));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.PersistentVector.fromArray([cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,prototype_prefix.call(null,(new cljs.core.Symbol(null,"call")))),cljs.core.list.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),meths__$1)),cljs.core.meta.call(null,form))))),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,prototype_prefix.call(null,(new cljs.core.Symbol(null,"apply")))),cljs.core.list.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,cljs.core.PersistentVector.fromArray([this_sym,argsym], true)),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".apply"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".-call"))),cljs.core.list.call(null,this_sym)))),cljs.core.list.call(null,this_sym),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".concat"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/array"))),cljs.core.list.call(null,this_sym)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/aclone"))),cljs.core.list.call(null,argsym)))))))))))),cljs.core.meta.call(null,form)))))], true);
} else
{var pf = [cljs.core.str(pprefix),cljs.core.str(f)].join('');
var adapt_params = (function (p__4086){
var vec__4087 = p__4086;
var vec__4088 = cljs.core.nth.call(null,vec__4087,0,null);
var targ = cljs.core.nth.call(null,vec__4088,0,null);
var args = cljs.core.nthnext.call(null,vec__4088,1);
var sig = vec__4088;
var body = cljs.core.nthnext.call(null,vec__4087,1);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,targ,cljs.core.assoc,"\uFDD0'tag",t),args)),body);
});
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))
{return cljs.core.PersistentVector.fromArray([cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,prototype_prefix.call(null,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meths)))].join(''))),cljs.core.list.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),adapt_params.call(null,meths))),cljs.core.meta.call(null,form)))))], true);
} else
{return cljs.core.map.call(null,(function (p__4089){
var vec__4090 = p__4089;
var sig = cljs.core.nth.call(null,vec__4090,0,null);
var body = cljs.core.nthnext.call(null,vec__4090,1);
var meth = vec__4090;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,prototype_prefix.call(null,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''))),cljs.core.list.call(null,cljs.core.with_meta.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,adapt_params.call(null,meth)))),cljs.core.meta.call(null,form)))));
}),meths);
}
}
}),sigs));
}
});
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),cljs.core.mapcat.call(null,assign_impls,impl_map)));
}
};
var extend_type = function (_AMPERSAND_form,_AMPERSAND_env,tsym,var_args){
var impls = null;
if (goog.isDef(var_args)) {
  impls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return extend_type__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, tsym, impls);
};
extend_type.cljs$lang$maxFixedArity = 3;
extend_type.cljs$lang$applyTo = (function (arglist__4091){
var _AMPERSAND_form = cljs.core.first(arglist__4091);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4091));
var tsym = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4091)));
var impls = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4091)));
return extend_type__delegate(_AMPERSAND_form, _AMPERSAND_env, tsym, impls);
});
extend_type.cljs$lang$arity$variadic = extend_type__delegate;
return extend_type;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"extend-type")));
cljs.core.prepare_protocol_masks = (function prepare_protocol_masks(env,t,impls){
var resolve = (function (p1__4048_SHARP_){
var ret = (new cljs.core.Keyword("\uFDD0'name")).call(null,cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,"\uFDD0'locals"),p1__4048_SHARP_));
if(cljs.core.truth_(ret))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(p1__4048_SHARP_)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,(new cljs.core.Symbol(null,"ret"))))].join('')));
}
return ret;
});
var impl_map = (function (){var ret = cljs.core.ObjMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s))
{{
var G__4093 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__4094 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__4093;
s = G__4094;
continue;
}
} else
{return ret;
}
break;
}
})();
var temp__4090__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(temp__4090__auto__)
{var fpp_pbs = temp__4090__auto__;
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var fpp_partitions = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var fpp_partitions__$1 = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),fpp_partitions));
var fpp_partitions__$2 = cljs.core.into.call(null,cljs.core.ObjMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),fpp_partitions__$1));
return cljs.core.PersistentVector.fromArray([fpps,cljs.core.reduce.call(null,(function (ps,p){
return cljs.core.update_in.call(null,ps,cljs.core.PersistentVector.fromArray([p], true),cljs.core.fnil.call(null,cljs.core.identity,0));
}),fpp_partitions__$2,cljs.core.range.call(null,cljs.core.fast_path_protocol_partitions_count))], true);
} else
{return null;
}
});
cljs.core.dt__GT_et = (function() {
var dt__GT_et = null;
var dt__GT_et__3 = (function (t,specs,fields){
return dt__GT_et.call(null,t,specs,fields,false);
});
var dt__GT_et__4 = (function (t,specs,fields,inline){
var ret = cljs.core.PersistentVector.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s))
{{
var G__4100 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,cljs.core.first.call(null,s)),cljs.core.reduce.call(null,((function (ret,s){
return (function (v,p__4098){
var vec__4099 = p__4098;
var f = cljs.core.nth.call(null,vec__4099,0,null);
var sigs = cljs.core.nth.call(null,vec__4099,1,null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (ret,s,vec__4099,f,sigs){
return (function (p1__4092_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__4092_SHARP_),cljs.core.nnext.call(null,p1__4092_SHARP_));
});})(ret,s,vec__4099,f,sigs))
,sigs)),cljs.core.assoc,"\uFDD0'cljs.analyzer/type",t,"\uFDD0'cljs.analyzer/fields",fields,"\uFDD0'protocol-impl",true,"\uFDD0'protocol-inline",inline));
});})(ret,s))
,cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)))));
var G__4101 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__4100;
s = G__4101;
continue;
}
} else
{return ret;
}
break;
}
});
dt__GT_et = function(t,specs,fields,inline){
switch(arguments.length){
case 3:
return dt__GT_et__3.call(this,t,specs,fields);
case 4:
return dt__GT_et__4.call(this,t,specs,fields,inline);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dt__GT_et.cljs$lang$arity$3 = dt__GT_et__3;
dt__GT_et.cljs$lang$arity$4 = dt__GT_et__4;
return dt__GT_et;
})()
;
cljs.core.collect_protocols = (function collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__4095_SHARP_){
return (new cljs.core.Keyword("\uFDD0'name")).call(null,cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,"\uFDD0'locals"),p1__4095_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
/**
* @param {...*} var_args
*/
cljs.core.deftype = (function() { 
var deftype__delegate = function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
var r = (new cljs.core.Keyword("\uFDD0'name")).call(null,cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),t));
var vec__4110 = cljs.core.prepare_protocol_masks.call(null,_AMPERSAND_env,t,impls);
var fpps = cljs.core.nth.call(null,vec__4110,0,null);
var pmasks = cljs.core.nth.call(null,vec__4110,1,null);
var protocols = cljs.core.collect_protocols.call(null,impls,_AMPERSAND_env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,"\uFDD0'protocols",protocols,"\uFDD0'skip-protocol-flag",fpps);
if(cljs.core.seq.call(null,impls))
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"deftype*"))),cljs.core.list.call(null,t__$1),cljs.core.list.call(null,fields),cljs.core.list.call(null,pmasks)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".-cljs$lang$type"))),cljs.core.list.call(null,t__$1)))),cljs.core.list.call(null,true)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq"))),cljs.core.list.call(null,t__$1)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4102__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/list"))),cljs.core.list.call(null,[cljs.core.str(r)].join(''))))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter"))),cljs.core.list.call(null,t__$1)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4102__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"writer__4103__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"opt__4104__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/-write"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"writer__4103__auto__"))),cljs.core.list.call(null,[cljs.core.str(r)].join(''))))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/extend-type"))),cljs.core.list.call(null,t__$1),cljs.core.dt__GT_et.call(null,t__$1,impls,fields,true)))),cljs.core.list.call(null,t__$1)));
} else
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"deftype*"))),cljs.core.list.call(null,t__$1),cljs.core.list.call(null,fields),cljs.core.list.call(null,pmasks)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".-cljs$lang$type"))),cljs.core.list.call(null,t__$1)))),cljs.core.list.call(null,true)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq"))),cljs.core.list.call(null,t__$1)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4105__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/list"))),cljs.core.list.call(null,[cljs.core.str(r)].join(''))))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter"))),cljs.core.list.call(null,t__$1)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4105__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"writer__4106__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"opts__4107__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/-write"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"writer__4106__auto__"))),cljs.core.list.call(null,[cljs.core.str(r)].join(''))))))))))),cljs.core.list.call(null,t__$1)));
}
};
var deftype = function (_AMPERSAND_form,_AMPERSAND_env,t,fields,var_args){
var impls = null;
if (goog.isDef(var_args)) {
  impls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return deftype__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, t, fields, impls);
};
deftype.cljs$lang$maxFixedArity = 4;
deftype.cljs$lang$applyTo = (function (arglist__4111){
var _AMPERSAND_form = cljs.core.first(arglist__4111);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4111));
var t = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4111)));
var fields = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4111))));
var impls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4111))));
return deftype__delegate(_AMPERSAND_form, _AMPERSAND_env, t, fields, impls);
});
deftype.cljs$lang$arity$variadic = deftype__delegate;
return deftype;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"deftype")));
cljs.core.caching_hash = (function caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"h__4108__auto__"))),cljs.core.list.call(null,hash_key))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/if-not"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/nil?"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"h__4108__auto__")))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"h__4108__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"h__4108__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,hash_fn),cljs.core.list.call(null,coll)))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,hash_key),cljs.core.list.call(null,(new cljs.core.Symbol(null,"h__4108__auto__")))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"h__4108__auto__")))))))))));
});
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"caching-hash")));
/**
* Do not use this directly - use defrecord
*/
cljs.core.emit_defrecord = (function emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__4112_SHARP_){
return cljs.core.with_meta.call(null,p1__4112_SHARP_,null);
}),fields));
var base_fields = fields__$1;
var fields__$2 = cljs.core.conj.call(null,fields__$1,(new cljs.core.Symbol(null,"__meta")),(new cljs.core.Symbol(null,"__extmap")),cljs.core.with_meta.call(null,(new cljs.core.Symbol(null,"__hash")),cljs.core.ObjMap.fromObject(["\uFDD0'mutable"],{"\uFDD0'mutable":true})));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"IRecord")),(new cljs.core.Symbol(null,"IHash")),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-hash"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4113__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/caching-hash"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4113__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"hash-imap"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"__hash")))))))),(new cljs.core.Symbol(null,"IEquiv")),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-equiv"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4114__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"other__4115__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/and"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"other__4115__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/identical?"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".-constructor"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4114__auto__")))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".-constructor"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"other__4115__auto__"))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/equiv-map"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4114__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"other__4115__auto__"))))))))),cljs.core.list.call(null,true),cljs.core.list.call(null,false)))))),(new cljs.core.Symbol(null,"IMeta")),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-meta"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4116__auto__"))))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"__meta"))))),(new cljs.core.Symbol(null,"IWithMeta")),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-with-meta"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4117__auto__"))),cljs.core.list.call(null,gs))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"new"))),cljs.core.list.call(null,tagname),cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArrays([(new cljs.core.Symbol(null,"__meta"))],[gs]),fields__$2)))))),(new cljs.core.Symbol(null,"ILookup")),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-lookup"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4118__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"k__4119__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/-lookup"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4118__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"k__4119__auto__"))),cljs.core.list.call(null,null)))))),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-lookup"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4120__auto__"))),cljs.core.list.call(null,ksym),cljs.core.list.call(null,(new cljs.core.Symbol(null,"else__4121__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/cond"))),cljs.core.mapcat.call(null,(function (f){
return cljs.core.PersistentVector.fromArray([cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/identical?"))),cljs.core.list.call(null,ksym),cljs.core.list.call(null,cljs.core.keyword.call(null,f)))),f], true);
}),base_fields),cljs.core.list.call(null,"\uFDD0'else"),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/get"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"__extmap"))),cljs.core.list.call(null,ksym),cljs.core.list.call(null,(new cljs.core.Symbol(null,"else__4121__auto__"))))))))))),(new cljs.core.Symbol(null,"ICounted")),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-count"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4122__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/+"))),cljs.core.list.call(null,cljs.core.count.call(null,base_fields)),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/count"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"__extmap"))))))))))),(new cljs.core.Symbol(null,"ICollection")),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-conj"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4123__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"entry__4124__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/vector?"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"entry__4124__auto__")))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/-assoc"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4123__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/-nth"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"entry__4124__auto__"))),cljs.core.list.call(null,0)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/-nth"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"entry__4124__auto__"))),cljs.core.list.call(null,1))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/reduce"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/-conj"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4123__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"entry__4124__auto__"))))))))))),(new cljs.core.Symbol(null,"IAssociative")),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-assoc"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4125__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"k__4126__auto__"))),cljs.core.list.call(null,gs))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/condp"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/identical?"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"k__4126__auto__"))),cljs.core.mapcat.call(null,(function (fld){
return cljs.core.PersistentVector.fromArray([cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,(new cljs.core.Symbol(null,"new")),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArrays([fld,(new cljs.core.Symbol(null,"__hash"))],[gs,null]),fields__$2))], true);
}),base_fields),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"new"))),cljs.core.list.call(null,tagname),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([(new cljs.core.Symbol(null,"__extmap")),(new cljs.core.Symbol(null,"__hash"))]),fields__$2),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/assoc"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"__extmap"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"k__4126__auto__"))),cljs.core.list.call(null,gs)))),cljs.core.list.call(null,null))))))))),(new cljs.core.Symbol(null,"IMap")),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-dissoc"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4127__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"k__4128__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/contains?"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"k__4128__auto__")))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/dissoc"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/with-meta"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/into"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null)))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4127__auto__")))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"__meta")))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"k__4128__auto__")))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"new"))),cljs.core.list.call(null,tagname),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([(new cljs.core.Symbol(null,"__extmap")),(new cljs.core.Symbol(null,"__hash"))]),fields__$2),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/not-empty"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/dissoc"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"__extmap"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"k__4128__auto__"))))))))),cljs.core.list.call(null,null))))))))),(new cljs.core.Symbol(null,"ISeqable")),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-seq"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4130__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/seq"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/concat"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__4129_SHARP_){
return cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/vector")),cljs.core.keyword.call(null,p1__4129_SHARP_),p1__4129_SHARP_);
}),base_fields))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"__extmap"))))))))))),(new cljs.core.Symbol(null,"IPrintWithWriter")),cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"-pr-writer"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4132__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"writer__4133__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"opts__4134__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"pr-pair__4135__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"keyval__4136__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/pr-sequential-writer"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"writer__4133__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/pr-writer"))),cljs.core.list.call(null,""),cljs.core.list.call(null," "),cljs.core.list.call(null,""),cljs.core.list.call(null,(new cljs.core.Symbol(null,"opts__4134__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"keyval__4136__auto__"))))))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/pr-sequential-writer"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"writer__4133__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"pr-pair__4135__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/str"))),cljs.core.list.call(null,"#"),cljs.core.list.call(null,cljs.core.name.call(null,rname)),cljs.core.list.call(null,"{")))),cljs.core.list.call(null,", "),cljs.core.list.call(null,"}"),cljs.core.list.call(null,(new cljs.core.Symbol(null,"opts__4134__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/concat"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__4131_SHARP_){
return cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/vector")),cljs.core.keyword.call(null,p1__4131_SHARP_),p1__4131_SHARP_);
}),base_fields))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"__extmap"))))))))))))))], true));
var vec__4138 = cljs.core.prepare_protocol_masks.call(null,env,tagname,impls__$1);
var fpps = cljs.core.nth.call(null,vec__4138,0,null);
var pmasks = cljs.core.nth.call(null,vec__4138,1,null);
var protocols = cljs.core.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,"\uFDD0'protocols",protocols,"\uFDD0'skip-protocol-flag",fpps);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"defrecord*"))),cljs.core.list.call(null,tagname__$1),cljs.core.list.call(null,hinted_fields),cljs.core.list.call(null,pmasks)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/extend-type"))),cljs.core.list.call(null,tagname__$1),cljs.core.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))))));
});
cljs.core.build_positional_factory = (function build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.symbol.call(null,[cljs.core.str((new cljs.core.Symbol(null,"->"))),cljs.core.str(rsym)].join(''));
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/defn"))),cljs.core.list.call(null,fn_name),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,fields)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"new"))),cljs.core.list.call(null,rname),fields)))));
});
cljs.core.build_map_factory = (function build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.symbol.call(null,[cljs.core.str((new cljs.core.Symbol(null,"map->"))),cljs.core.str(rsym)].join(''));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,(function (k){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,k),cljs.core.list.call(null,ms)));
}),ks);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/defn"))),cljs.core.list.call(null,fn_name),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,ms))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"new"))),cljs.core.list.call(null,rname),getters,cljs.core.list.call(null,null),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/dissoc"))),cljs.core.list.call(null,ms),ks))))))));
});
/**
* @param {...*} var_args
*/
cljs.core.defrecord = (function() { 
var defrecord__delegate = function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
var r = (new cljs.core.Keyword("\uFDD0'name")).call(null,cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),rsym));
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null)))),cljs.core.list.call(null,cljs.core.emit_defrecord.call(null,_AMPERSAND_env,rsym,r,fields,impls)),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".-cljs$lang$type"))),cljs.core.list.call(null,r)))),cljs.core.list.call(null,true)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq"))),cljs.core.list.call(null,r)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4139__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/list"))),cljs.core.list.call(null,[cljs.core.str(r)].join(''))))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter"))),cljs.core.list.call(null,r)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"this__4139__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"writer__4140__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/-write"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"writer__4140__auto__"))),cljs.core.list.call(null,[cljs.core.str(r)].join(''))))))))))),cljs.core.list.call(null,cljs.core.build_positional_factory.call(null,rsym,r,fields)),cljs.core.list.call(null,cljs.core.build_map_factory.call(null,rsym,r,fields)),cljs.core.list.call(null,r)));
};
var defrecord = function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,var_args){
var impls = null;
if (goog.isDef(var_args)) {
  impls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return defrecord__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, rsym, fields, impls);
};
defrecord.cljs$lang$maxFixedArity = 4;
defrecord.cljs$lang$applyTo = (function (arglist__4142){
var _AMPERSAND_form = cljs.core.first(arglist__4142);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4142));
var rsym = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4142)));
var fields = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4142))));
var impls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4142))));
return defrecord__delegate(_AMPERSAND_form, _AMPERSAND_env, rsym, fields, impls);
});
defrecord.cljs$lang$arity$variadic = defrecord__delegate;
return defrecord;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"defrecord")));
/**
* @param {...*} var_args
*/
cljs.core.defprotocol = (function() { 
var defprotocol__delegate = function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = (new cljs.core.Keyword("\uFDD0'name")).call(null,cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),psym));
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,"\uFDD0'protocol-symbol",true);
var ns_name = (new cljs.core.Keyword("\uFDD0'name")).call(null,(new cljs.core.Keyword("\uFDD0'ns")).call(null,_AMPERSAND_env));
var fqn = (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});
var prefix = cljs.compiler.protocol_prefix.call(null,p);
var methods$ = ((cljs.core.string_QMARK_.call(null,cljs.core.first.call(null,doc_PLUS_methods)))?cljs.core.next.call(null,doc_PLUS_methods):doc_PLUS_methods);
var expand_sig = (function (fname,slot,sig){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,sig),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/and"))),cljs.core.list.call(null,cljs.core.first.call(null,sig)),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"."))),cljs.core.list.call(null,cljs.core.first.call(null,sig)),cljs.core.list.call(null,cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"."))),cljs.core.list.call(null,cljs.core.first.call(null,sig)),cljs.core.list.call(null,slot),sig))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"x__4141__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/nil?"))),cljs.core.list.call(null,cljs.core.first.call(null,sig))))),cljs.core.list.call(null,null),cljs.core.list.call(null,cljs.core.first.call(null,sig))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/or"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/aget"))),cljs.core.list.call(null,fqn.call(null,fname)),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"goog.typeOf"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"x__4141__auto__"))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/aget"))),cljs.core.list.call(null,fqn.call(null,fname)),cljs.core.list.call(null,"_")))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"throw"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/missing-protocol"))),cljs.core.list.call(null,[cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('')),cljs.core.list.call(null,cljs.core.first.call(null,sig))))))))))),sig)))))))))));
});
var method = (function (p__4145){
var vec__4146 = p__4145;
var fname = cljs.core.nth.call(null,vec__4146,0,null);
var sigs = cljs.core.nthnext.call(null,vec__4146,1);
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var slot = cljs.core.symbol.call(null,[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,"\uFDD0'protocol",p);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/defn"))),cljs.core.list.call(null,fname__$1),cljs.core.map.call(null,(function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
}),sigs__$1)));
});
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"*unchecked-if*"))),cljs.core.list.call(null,true)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"def"))),cljs.core.list.call(null,psym__$1),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"js*"))),cljs.core.list.call(null,"{}"))))))),cljs.core.map.call(null,method,methods$),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"*unchecked-if*"))),cljs.core.list.call(null,false))))));
};
var defprotocol = function (_AMPERSAND_form,_AMPERSAND_env,psym,var_args){
var doc_PLUS_methods = null;
if (goog.isDef(var_args)) {
  doc_PLUS_methods = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return defprotocol__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, psym, doc_PLUS_methods);
};
defprotocol.cljs$lang$maxFixedArity = 3;
defprotocol.cljs$lang$applyTo = (function (arglist__4147){
var _AMPERSAND_form = cljs.core.first(arglist__4147);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4147));
var psym = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4147)));
var doc_PLUS_methods = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4147)));
return defprotocol__delegate(_AMPERSAND_form, _AMPERSAND_env, psym, doc_PLUS_methods);
});
defprotocol.cljs$lang$arity$variadic = defprotocol__delegate;
return defprotocol;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"defprotocol")));
cljs.core.emit_extend_protocol = (function emit_extend_protocol(p,specs){
var impls = cljs.core.parse_impls.call(null,specs);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),cljs.core.map.call(null,(function (p__4150){
var vec__4151 = p__4150;
var t = cljs.core.nth.call(null,vec__4151,0,null);
var fs = cljs.core.nth.call(null,vec__4151,1,null);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/extend-type"))),cljs.core.list.call(null,t),cljs.core.list.call(null,p),fs));
}),impls)));
});
/**
* Useful when you want to provide several implementations of the same
* protocol all at once. Takes a single protocol and the implementation
* of that protocol for one or more types. Expands into calls to
* extend-type:
* 
* (extend-protocol Protocol
* AType
* (foo [x] ...)
* (bar [x y] ...)
* BType
* (foo [x] ...)
* (bar [x y] ...)
* AClass
* (foo [x] ...)
* (bar [x y] ...)
* nil
* (foo [x] ...)
* (bar [x y] ...))
* 
* expands into:
* 
* (do
* (clojure.core/extend-type AType Protocol
* (foo [x] ...)
* (bar [x y] ...))
* (clojure.core/extend-type BType Protocol
* (foo [x] ...)
* (bar [x y] ...))
* (clojure.core/extend-type AClass Protocol
* (foo [x] ...)
* (bar [x y] ...))
* (clojure.core/extend-type nil Protocol
* (foo [x] ...)
* (bar [x y] ...)))
* @param {...*} var_args
*/
cljs.core.extend_protocol = (function() { 
var extend_protocol__delegate = function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core.emit_extend_protocol.call(null,p,specs);
};
var extend_protocol = function (_AMPERSAND_form,_AMPERSAND_env,p,var_args){
var specs = null;
if (goog.isDef(var_args)) {
  specs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return extend_protocol__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, p, specs);
};
extend_protocol.cljs$lang$maxFixedArity = 3;
extend_protocol.cljs$lang$applyTo = (function (arglist__4152){
var _AMPERSAND_form = cljs.core.first(arglist__4152);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4152));
var p = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4152)));
var specs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4152)));
return extend_protocol__delegate(_AMPERSAND_form, _AMPERSAND_env, p, specs);
});
extend_protocol.cljs$lang$arity$variadic = extend_protocol__delegate;
return extend_protocol;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"extend-protocol")));
/**
* Returns true if x satisfies the protocol
*/
cljs.core.satisfies_QMARK_ = (function satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = (new cljs.core.Keyword("\uFDD0'name")).call(null,cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,"\uFDD0'locals"),psym));
var prefix = cljs.compiler.protocol_prefix.call(null,p);
var xsym = cljs.core.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__4154 = cljs.core.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__4154,0,null);
var bit = cljs.core.nth.call(null,vec__4154,1,null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,xsym),cljs.core.list.call(null,x))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,xsym),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/or"))),cljs.core.list.call(null,(cljs.core.truth_(bit)?cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/unsafe-bit-and"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"."))),cljs.core.list.call(null,xsym),cljs.core.list.call(null,msym)))),cljs.core.list.call(null,bit))):null)),cljs.core.list.call(null,cljs.core.bool_expr.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"."))),cljs.core.list.call(null,xsym),cljs.core.list.call(null,cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join('')))))))))),cljs.core.list.call(null,true),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/coercive-not"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"."))),cljs.core.list.call(null,xsym),cljs.core.list.call(null,msym))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/type_satisfies_"))),cljs.core.list.call(null,psym),cljs.core.list.call(null,xsym)))),cljs.core.list.call(null,false))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/type_satisfies_"))),cljs.core.list.call(null,psym),cljs.core.list.call(null,xsym)))))))));
});
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"satisfies?")));
/**
* @param {...*} var_args
*/
cljs.core.lazy_seq = (function() { 
var lazy_seq__delegate = function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"new"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/LazySeq"))),cljs.core.list.call(null,null),cljs.core.list.call(null,false),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null)))),body))),cljs.core.list.call(null,null)));
};
var lazy_seq = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return lazy_seq__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, body);
};
lazy_seq.cljs$lang$maxFixedArity = 2;
lazy_seq.cljs$lang$applyTo = (function (arglist__4155){
var _AMPERSAND_form = cljs.core.first(arglist__4155);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4155));
var body = cljs.core.rest(cljs.core.next(arglist__4155));
return lazy_seq__delegate(_AMPERSAND_form, _AMPERSAND_env, body);
});
lazy_seq.cljs$lang$arity$variadic = lazy_seq__delegate;
return lazy_seq;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"lazy-seq")));
/**
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"new"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/Delay"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/atom"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,"\uFDD0'done"),cljs.core.list.call(null,false),cljs.core.list.call(null,"\uFDD0'value"),cljs.core.list.call(null,null)))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null)))),body)))));
};
var delay = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return delay__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, body);
};
delay.cljs$lang$maxFixedArity = 2;
delay.cljs$lang$applyTo = (function (arglist__4156){
var _AMPERSAND_form = cljs.core.first(arglist__4156);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4156));
var body = cljs.core.rest(cljs.core.next(arglist__4156));
return delay__delegate(_AMPERSAND_form, _AMPERSAND_env, body);
});
delay.cljs$lang$arity$variadic = delay__delegate;
return delay;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"delay")));
/**
* binding => var-symbol init-expr
* 
* Creates new bindings for the (already-existing) vars, with the
* supplied initial values, executes the exprs in an implicit do, then
* re-establishes the bindings that existed before.  The new bindings
* are made in parallel (unlike let); all init-exprs are evaluated
* before the vars are bound to their new values.
* @param {...*} var_args
*/
cljs.core.binding = (function() { 
var binding__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,2,bindings);
var vals = cljs.core.take_nth.call(null,2,cljs.core.drop.call(null,1,bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"try"))),cljs.core.map.call(null,(function (p__4162){
var vec__4163 = p__4162;
var k = cljs.core.nth.call(null,vec__4163,0,null);
var v = cljs.core.nth.call(null,vec__4163,1,null);
return cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!")),k,v);
}),binds),body,cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"finally"))),cljs.core.map.call(null,(function (p__4164){
var vec__4165 = p__4164;
var k = cljs.core.nth.call(null,vec__4165,0,null);
var v = cljs.core.nth.call(null,vec__4165,1,null);
return cljs.core.list.call(null,(new cljs.core.Symbol(null,"set!")),k,v);
}),resets)))))))));
};
var binding = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return binding__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
binding.cljs$lang$maxFixedArity = 3;
binding.cljs$lang$applyTo = (function (arglist__4166){
var _AMPERSAND_form = cljs.core.first(arglist__4166);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4166));
var bindings = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4166)));
var body = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4166)));
return binding__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
binding.cljs$lang$arity$variadic = binding__delegate;
return binding;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"binding")));
/**
* Takes a binary predicate, an expression, and a set of clauses.
* Each clause can take the form of either:
* 
* test-expr result-expr
* 
* test-expr :>> result-fn
* 
* Note :>> is an ordinary keyword.
* 
* For each clause, (pred test-expr expr) is evaluated. If it returns
* logical true, the clause is a match. If a binary clause matches, the
* result-expr is returned, if a ternary clause matches, its result-fn,
* which must be a unary function, is called with the result of the
* predicate as its argument, the result of that call being the return
* value of condp. A single default expression can follow the clauses,
* and its value will be returned if no clause matches. If no default
* expression is provided and no clause matches, an
* IllegalArgumentException is thrown.
* @param {...*} var_args
*/
cljs.core.condp = (function() { 
var condp__delegate = function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = (function emit(pred__$1,expr__$1,args){
var vec__4173 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,"\uFDD0'>>",cljs.core.second.call(null,args)))?3:2),args);
var vec__4174 = cljs.core.nth.call(null,vec__4173,0,null);
var a = cljs.core.nth.call(null,vec__4174,0,null);
var b = cljs.core.nth.call(null,vec__4174,1,null);
var c = cljs.core.nth.call(null,vec__4174,2,null);
var clause = vec__4174;
var more = cljs.core.nth.call(null,vec__4173,1,null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,0,n))
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"throw"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"js/Error."))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/str"))),cljs.core.list.call(null,"No matching clause: "),cljs.core.list.call(null,expr__$1)))))))));
} else
{if(cljs.core._EQ_.call(null,1,n))
{return a;
} else
{if(cljs.core._EQ_.call(null,2,n))
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,pred__$1),cljs.core.list.call(null,a),cljs.core.list.call(null,expr__$1)))),cljs.core.list.call(null,b),cljs.core.list.call(null,emit.call(null,pred__$1,expr__$1,more))));
} else
{if("\uFDD0'else")
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/if-let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"p__4157__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,pred__$1),cljs.core.list.call(null,a),cljs.core.list.call(null,expr__$1)))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,c),cljs.core.list.call(null,(new cljs.core.Symbol(null,"p__4157__auto__")))))),cljs.core.list.call(null,emit.call(null,pred__$1,expr__$1,more))));
} else
{return null;
}
}
}
}
});
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,gpred),cljs.core.list.call(null,pred),cljs.core.list.call(null,gexpr),cljs.core.list.call(null,expr))))),cljs.core.list.call(null,emit.call(null,gpred,gexpr,clauses))));
};
var condp = function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,var_args){
var clauses = null;
if (goog.isDef(var_args)) {
  clauses = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return condp__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, pred, expr, clauses);
};
condp.cljs$lang$maxFixedArity = 4;
condp.cljs$lang$applyTo = (function (arglist__4175){
var _AMPERSAND_form = cljs.core.first(arglist__4175);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4175));
var pred = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4175)));
var expr = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4175))));
var clauses = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4175))));
return condp__delegate(_AMPERSAND_form, _AMPERSAND_env, pred, expr, clauses);
});
condp.cljs$lang$arity$variadic = condp__delegate;
return condp;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"condp")));
/**
* @param {...*} var_args
*/
cljs.core.case$ = (function() { 
var case$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"throw"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"js/Error."))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/str"))),cljs.core.list.call(null,"No matching clause: "),cljs.core.list.call(null,e))))))))));
var assoc_test = (function assoc_test(m,test,expr){
if(cljs.core.contains_QMARK_.call(null,m,test))
{throw (new Error([cljs.core.str("Duplicate case test constant '"),cljs.core.str(test),cljs.core.str("'"),cljs.core.str((cljs.core.truth_((new cljs.core.Keyword("\uFDD0'line")).call(null,_AMPERSAND_env))?[cljs.core.str(" on line "),cljs.core.str((new cljs.core.Keyword("\uFDD0'line")).call(null,_AMPERSAND_env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else
{return cljs.core.assoc.call(null,m,test,expr);
}
});
var pairs = cljs.core.reduce.call(null,(function (m,p__4182){
var vec__4183 = p__4182;
var test = cljs.core.nth.call(null,vec__4183,0,null);
var expr = cljs.core.nth.call(null,vec__4183,1,null);
if(cljs.core.seq_QMARK_.call(null,test))
{return cljs.core.reduce.call(null,(function (m__$1,test__$1){
var test__$2 = ((cljs.core.symbol_QMARK_.call(null,test__$1))?cljs.core.list.call(null,(new cljs.core.Symbol(null,"quote")),test__$1):test__$1);
return assoc_test.call(null,m__$1,test__$2,expr);
}),m,test);
} else
{if(cljs.core.symbol_QMARK_.call(null,test))
{return assoc_test.call(null,m,cljs.core.list.call(null,(new cljs.core.Symbol(null,"quote")),test),expr);
} else
{if("\uFDD0'else")
{return assoc_test.call(null,m,test,expr);
} else
{return null;
}
}
}
}),cljs.core.ObjMap.EMPTY,cljs.core.partition.call(null,2,clauses));
var esym = cljs.core.gensym.call(null);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,esym),cljs.core.list.call(null,e))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/cond"))),cljs.core.mapcat.call(null,(function (p__4184){
var vec__4185 = p__4184;
var m = cljs.core.nth.call(null,vec__4185,0,null);
var c = cljs.core.nth.call(null,vec__4185,1,null);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/="))),cljs.core.list.call(null,m),cljs.core.list.call(null,esym)))),cljs.core.list.call(null,c)));
}),pairs),cljs.core.list.call(null,"\uFDD0'else"),cljs.core.list.call(null,default$))))));
};
var case$ = function (_AMPERSAND_form,_AMPERSAND_env,e,var_args){
var clauses = null;
if (goog.isDef(var_args)) {
  clauses = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return case$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, e, clauses);
};
case$.cljs$lang$maxFixedArity = 3;
case$.cljs$lang$applyTo = (function (arglist__4186){
var _AMPERSAND_form = cljs.core.first(arglist__4186);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4186));
var e = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4186)));
var clauses = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4186)));
return case$__delegate(_AMPERSAND_form, _AMPERSAND_env, e, clauses);
});
case$.cljs$lang$arity$variadic = case$__delegate;
return case$;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"case")));
/**
* (try expr* catch-clause* finally-clause?)
* 
* Special Form
* 
* catch-clause => (catch protoname name expr*)
* finally-clause => (finally expr*)
* 
* Catches and handles JavaScript exceptions.
* @param {...*} var_args
*/
cljs.core.try$ = (function() { 
var try$__delegate = function (_AMPERSAND_form,_AMPERSAND_env,forms){
var catch_QMARK_ = (function (p1__4176_SHARP_){
var and__3941__auto__ = cljs.core.list_QMARK_.call(null,p1__4176_SHARP_);
if(and__3941__auto__)
{return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__4176_SHARP_),(new cljs.core.Symbol(null,"catch")));
} else
{return and__3941__auto__;
}
});
var vec__4191 = cljs.core.split_with.call(null,cljs.core.complement.call(null,catch_QMARK_),forms);
var body = cljs.core.nth.call(null,vec__4191,0,null);
var catches = cljs.core.nth.call(null,vec__4191,1,null);
var vec__4192 = cljs.core.split_with.call(null,catch_QMARK_,catches);
var catches__$1 = cljs.core.nth.call(null,vec__4192,0,null);
var fin = cljs.core.nth.call(null,vec__4192,1,null);
var e = cljs.core.gensym.call(null,"e");
if(cljs.core.every_QMARK_.call(null,(function (p1__4177_SHARP_){
return (cljs.core.count.call(null,p1__4177_SHARP_) > 2);
}),catches__$1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("catch block must specify a prototype and a name"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"every?")),cljs.core.list((new cljs.core.Symbol(null,"fn*")),cljs.core.vec([(new cljs.core.Symbol(null,"p1__4177#"))]),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"cljs.core/>")),cljs.core.with_meta(cljs.core.list((new cljs.core.Symbol(null,"count")),(new cljs.core.Symbol(null,"p1__4177#"))),cljs.core.hash_map("\uFDD0'line",8562,"\uFDD0'column",35)),2),cljs.core.hash_map("\uFDD0'line",8562,"\uFDD0'column",22))),(new cljs.core.Symbol(null,"catches"))),cljs.core.hash_map("\uFDD0'line",8562,"\uFDD0'column",13))))].join('')));
}
if(cljs.core.seq.call(null,catches__$1))
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"try*"))),body,cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"catch"))),cljs.core.list.call(null,e),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/cond"))),cljs.core.mapcat.call(null,(function (p__4193){
var vec__4194 = p__4193;
var _ = cljs.core.nth.call(null,vec__4194,0,null);
var type = cljs.core.nth.call(null,vec__4194,1,null);
var name = cljs.core.nth.call(null,vec__4194,2,null);
var cb = cljs.core.nthnext.call(null,vec__4194,3);
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/instance?"))),cljs.core.list.call(null,type),cljs.core.list.call(null,e)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,name),cljs.core.list.call(null,e))))),cb))))));
}),catches__$1),cljs.core.list.call(null,"\uFDD0'else"),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"throw"))),cljs.core.list.call(null,e)))))))))),fin));
} else
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"try*"))),body,fin));
}
};
var try$ = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return try$__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, forms);
};
try$.cljs$lang$maxFixedArity = 2;
try$.cljs$lang$applyTo = (function (arglist__4195){
var _AMPERSAND_form = cljs.core.first(arglist__4195);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4195));
var forms = cljs.core.rest(cljs.core.next(arglist__4195));
return try$__delegate(_AMPERSAND_form, _AMPERSAND_env, forms);
});
try$.cljs$lang$arity$variadic = try$__delegate;
return try$;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"try")));
/**
* Evaluates expr and throws an exception if it does not evaluate to
* logical true.
*/
cljs.core.assert = (function() {
var assert = null;
var assert__3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_))
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/when-not"))),cljs.core.list.call(null,x),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"throw"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"js/Error."))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/str"))),cljs.core.list.call(null,"Assert failed: "),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/pr-str"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"quote"))),cljs.core.list.call(null,x))))))))))))))))));
} else
{return null;
}
});
var assert__4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_))
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/when-not"))),cljs.core.list.call(null,x),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"throw"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"js/Error."))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/str"))),cljs.core.list.call(null,"Assert failed: "),cljs.core.list.call(null,message),cljs.core.list.call(null,"\n"),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/pr-str"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"quote"))),cljs.core.list.call(null,x))))))))))))))))));
} else
{return null;
}
});
assert = function(_AMPERSAND_form,_AMPERSAND_env,x,message){
switch(arguments.length){
case 3:
return assert__3.call(this,_AMPERSAND_form,_AMPERSAND_env,x);
case 4:
return assert__4.call(this,_AMPERSAND_form,_AMPERSAND_env,x,message);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
assert.cljs$lang$arity$3 = assert__3;
assert.cljs$lang$arity$4 = assert__4;
return assert;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"assert")));
/**
* List comprehension. Takes a vector of one or more
* binding-form/collection-expr pairs, each followed by zero or more
* modifiers, and yields a lazy sequence of evaluations of expr.
* Collections are iterated in a nested fashion, rightmost fastest,
* and nested coll-exprs can refer to bindings created in prior
* binding-forms.  Supported modifiers are: :let [binding-form expr ...],
* :while test, :when test.
* 
* (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
*/
cljs.core.for$ = (function for$(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs))
{} else
{throw (new java.lang.IllegalArgumentException("for requires a vector for its binding"));
}
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs)))
{} else
{throw (new java.lang.IllegalArgumentException("for requires an even number of forms in binding vector"));
}
var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__4220){
var vec__4221 = p__4220;
var k = cljs.core.nth.call(null,vec__4221,0,null);
var v = cljs.core.nth.call(null,vec__4221,1,null);
if(cljs.core.keyword_QMARK_.call(null,k))
{return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),cljs.core.PersistentVector.fromArray([k,v], true)));
} else
{return cljs.core.conj.call(null,groups,cljs.core.PersistentVector.fromArray([k,v], true));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,2,seq_exprs__$1));
});
var err = (function() { 
var G__4241__delegate = function (msg){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,msg)));
};
var G__4241 = function (var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4241__delegate.call(this, msg);
};
G__4241.cljs$lang$maxFixedArity = 0;
G__4241.cljs$lang$applyTo = (function (arglist__4242){
var msg = cljs.core.seq(arglist__4242);;
return G__4241__delegate(msg);
});
G__4241.cljs$lang$arity$variadic = G__4241__delegate;
return G__4241;
})()
;
var emit_bind = (function emit_bind(p__4222){
var vec__4232 = p__4222;
var vec__4233 = cljs.core.nth.call(null,vec__4232,0,null);
var bind = cljs.core.nth.call(null,vec__4233,0,null);
var expr = cljs.core.nth.call(null,vec__4233,1,null);
var mod_pairs = cljs.core.nthnext.call(null,vec__4233,2);
var vec__4234 = cljs.core.nthnext.call(null,vec__4232,1);
var vec__4235 = cljs.core.nth.call(null,vec__4234,0,null);
var _ = cljs.core.nth.call(null,vec__4235,0,null);
var next_expr = cljs.core.nth.call(null,vec__4235,1,null);
var next_groups = vec__4234;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = (function do_mod(p__4236){
var vec__4239 = p__4236;
var vec__4240 = cljs.core.nth.call(null,vec__4239,0,null);
var k = cljs.core.nth.call(null,vec__4240,0,null);
var v = cljs.core.nth.call(null,vec__4240,1,null);
var pair = vec__4240;
var etc = cljs.core.nthnext.call(null,vec__4239,1);
if(cljs.core._EQ_.call(null,k,"\uFDD0'let"))
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,v),cljs.core.list.call(null,do_mod.call(null,etc))));
} else
{if(cljs.core._EQ_.call(null,k,"\uFDD0'while"))
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/when"))),cljs.core.list.call(null,v),cljs.core.list.call(null,do_mod.call(null,etc))));
} else
{if(cljs.core._EQ_.call(null,k,"\uFDD0'when"))
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,v),cljs.core.list.call(null,do_mod.call(null,etc)),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"recur"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/rest"))),cljs.core.list.call(null,gxs)))))))));
} else
{if(cljs.core.keyword_QMARK_.call(null,k))
{return err.call(null,"Invalid 'for' keyword ",k);
} else
{if(cljs.core.truth_(next_groups))
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"iterys__4196__auto__"))),cljs.core.list.call(null,emit_bind.call(null,next_groups)),cljs.core.list.call(null,(new cljs.core.Symbol(null,"fs__4197__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/seq"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"iterys__4196__auto__"))),cljs.core.list.call(null,next_expr))))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"fs__4197__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/concat"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"fs__4197__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,giter),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/rest"))),cljs.core.list.call(null,gxs)))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"recur"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/rest"))),cljs.core.list.call(null,gxs))))))))))));
} else
{if("\uFDD0'else")
{return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/cons"))),cljs.core.list.call(null,body_expr),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,giter),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/rest"))),cljs.core.list.call(null,gxs)))))))));
} else
{return null;
}
}
}
}
}
}
});
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,giter),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,gxs))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/lazy-seq"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/loop"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,gxs),cljs.core.list.call(null,gxs))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/when-first"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,bind),cljs.core.list.call(null,gxs))))),cljs.core.list.call(null,do_mod.call(null,mod_pairs)))))))))))));
});
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"iter__4198__auto__"))),cljs.core.list.call(null,emit_bind.call(null,to_groups.call(null,seq_exprs))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"iter__4198__auto__"))),cljs.core.list.call(null,cljs.core.second.call(null,seq_exprs)))))));
});
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"for")));
/**
* Repeatedly executes body (presumably for side-effects) with
* bindings and filtering as provided by "for".  Does not retain
* the head of the sequence. Returns nil.
* @param {...*} var_args
*/
cljs.core.doseq = (function() { 
var doseq__delegate = function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs))
{} else
{throw (new java.lang.IllegalArgumentException("doseq requires a vector for its binding"));
}
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs)))
{} else
{throw (new java.lang.IllegalArgumentException("doseq requires an even number of forms in binding vector"));
}
var step = (function step(recform,exprs){
if(cljs.core.not.call(null,exprs))
{return cljs.core.PersistentVector.fromArray([true,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),body))], true);
} else
{var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = ((cljs.core.keyword_QMARK_.call(null,k))?null:cljs.core.gensym.call(null));
var recform__$1 = ((cljs.core.keyword_QMARK_.call(null,k))?recform:cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"recur"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/next"))),cljs.core.list.call(null,seqsym)))))));
var steppair = step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,0);
var subform = steppair.call(null,1);
if(cljs.core._EQ_.call(null,k,"\uFDD0'let"))
{return cljs.core.PersistentVector.fromArray([needrec,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,v),cljs.core.list.call(null,subform)))], true);
} else
{if(cljs.core._EQ_.call(null,k,"\uFDD0'while"))
{return cljs.core.PersistentVector.fromArray([false,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/when"))),cljs.core.list.call(null,v),cljs.core.list.call(null,subform),(cljs.core.truth_(needrec)?cljs.core.PersistentVector.fromArray([recform__$1], true):null)))], true);
} else
{if(cljs.core._EQ_.call(null,k,"\uFDD0'when"))
{return cljs.core.PersistentVector.fromArray([false,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,v),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),cljs.core.list.call(null,subform),(cljs.core.truth_(needrec)?cljs.core.PersistentVector.fromArray([recform__$1], true):null)))),cljs.core.list.call(null,recform__$1)))], true);
} else
{if("\uFDD0'else")
{return cljs.core.PersistentVector.fromArray([true,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/loop"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,seqsym),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/seq"))),cljs.core.list.call(null,v)))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/when"))),cljs.core.list.call(null,seqsym),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,k),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/first"))),cljs.core.list.call(null,seqsym)))))))),cljs.core.list.call(null,subform),(cljs.core.truth_(needrec)?cljs.core.PersistentVector.fromArray([recform__$1], true):null)))))))))], true);
} else
{return null;
}
}
}
}
}
});
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),1);
};
var doseq = function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return doseq__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, seq_exprs, body);
};
doseq.cljs$lang$maxFixedArity = 3;
doseq.cljs$lang$applyTo = (function (arglist__4243){
var _AMPERSAND_form = cljs.core.first(arglist__4243);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4243));
var seq_exprs = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4243)));
var body = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4243)));
return doseq__delegate(_AMPERSAND_form, _AMPERSAND_env, seq_exprs, body);
});
doseq.cljs$lang$arity$variadic = doseq__delegate;
return doseq;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"doseq")));
/**
* @param {...*} var_args
*/
cljs.core.array = (function() { 
var array__delegate = function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"js*")),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join('')),rest);
};
var array = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var rest = null;
if (goog.isDef(var_args)) {
  rest = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return array__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, rest);
};
array.cljs$lang$maxFixedArity = 2;
array.cljs$lang$applyTo = (function (arglist__4244){
var _AMPERSAND_form = cljs.core.first(arglist__4244);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4244));
var rest = cljs.core.rest(cljs.core.next(arglist__4244));
return array__delegate(_AMPERSAND_form, _AMPERSAND_env, rest);
});
array.cljs$lang$arity$variadic = array__delegate;
return array;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"array")));
cljs.core.alength = (function alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.list.call(null,(new cljs.core.Symbol(null,"js*")),"~{}.length",a);
});
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"alength")));
cljs.core.aclone = (function aclone(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.list.call(null,(new cljs.core.Symbol(null,"js*")),"~{}.slice()",a);
});
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"aclone")));
/**
* Maps an expression across an array a, using an index named idx, and
* return value named ret, initialized to a clone of a, then setting
* each element of ret to the evaluation of expr, returning the new
* array ret.
*/
cljs.core.amap = (function amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"a__4245__auto__"))),cljs.core.list.call(null,a),cljs.core.list.call(null,ret),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/aclone"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"a__4245__auto__")))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/loop"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,idx),cljs.core.list.call(null,0))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/<"))),cljs.core.list.call(null,idx),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/alength"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"a__4245__auto__"))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"do"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/aset"))),cljs.core.list.call(null,ret),cljs.core.list.call(null,idx),cljs.core.list.call(null,expr)))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"recur"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/inc"))),cljs.core.list.call(null,idx)))))))))),cljs.core.list.call(null,ret)))))))));
});
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"amap")));
/**
* Reduces an expression across an array a, using an index named idx,
* and return value named ret, initialized to init, setting ret to the
* evaluation of expr at each step, returning ret.
*/
cljs.core.areduce = (function areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"a__4246__auto__"))),cljs.core.list.call(null,a))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/loop"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,idx),cljs.core.list.call(null,0),cljs.core.list.call(null,ret),cljs.core.list.call(null,init))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"if"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/<"))),cljs.core.list.call(null,idx),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/alength"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"a__4246__auto__"))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"recur"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/inc"))),cljs.core.list.call(null,idx)))),cljs.core.list.call(null,expr)))),cljs.core.list.call(null,ret)))))))));
});
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"areduce")));
/**
* bindings => name n
* 
* Repeatedly executes body (presumably for side-effects) with name
* bound to integers from 0 through n-1.
* @param {...*} var_args
*/
cljs.core.dotimes = (function() { 
var dotimes__delegate = function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"n__4247__auto__"))),cljs.core.list.call(null,n))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/loop"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,i),cljs.core.list.call(null,0))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/when"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/<"))),cljs.core.list.call(null,i),cljs.core.list.call(null,(new cljs.core.Symbol(null,"n__4247__auto__")))))),body,cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"recur"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/inc"))),cljs.core.list.call(null,i)))))))))))))));
};
var dotimes = function (_AMPERSAND_form,_AMPERSAND_env,bindings,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return dotimes__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, bindings, body);
};
dotimes.cljs$lang$maxFixedArity = 3;
dotimes.cljs$lang$applyTo = (function (arglist__4249){
var _AMPERSAND_form = cljs.core.first(arglist__4249);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4249));
var bindings = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4249)));
var body = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4249)));
return dotimes__delegate(_AMPERSAND_form, _AMPERSAND_env, bindings, body);
});
dotimes.cljs$lang$arity$variadic = dotimes__delegate;
return dotimes;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"dotimes")));
/**
* Throws an exception if the given option map contains keys not listed
* as valid, else returns nil.
* @param {...*} var_args
*/
cljs.core.check_valid_options = (function() { 
var check_valid_options__delegate = function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys)))
{throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__4248_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__4248_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else
{return null;
}
};
var check_valid_options = function (options,var_args){
var valid_keys = null;
if (goog.isDef(var_args)) {
  valid_keys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return check_valid_options__delegate.call(this, options, valid_keys);
};
check_valid_options.cljs$lang$maxFixedArity = 1;
check_valid_options.cljs$lang$applyTo = (function (arglist__4255){
var options = cljs.core.first(arglist__4255);
var valid_keys = cljs.core.rest(arglist__4255);
return check_valid_options__delegate(options, valid_keys);
});
check_valid_options.cljs$lang$arity$variadic = check_valid_options__delegate;
return check_valid_options;
})()
;
/**
* Creates a new multimethod with the associated dispatch function.
* The docstring and attribute-map are optional.
* 
* Options are key-value pairs and may be one of:
* :default    the default dispatch value, defaults to :default
* :hierarchy  the isa? hierarchy to use for dispatching
* defaults to the global hierarchy
* @param {...*} var_args
*/
cljs.core.defmulti = (function() { 
var defmulti__delegate = function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((cljs.core.string_QMARK_.call(null,cljs.core.first.call(null,options)))?cljs.core.first.call(null,options):null);
var options__$1 = ((cljs.core.string_QMARK_.call(null,cljs.core.first.call(null,options)))?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.ObjMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,"\uFDD0'doc",docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),1))
{throw "The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)";
} else
{}
var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core._lookup.call(null,options__$4,"\uFDD0'default","\uFDD0'default");
cljs.core.check_valid_options.call(null,options__$4,"\uFDD0'default","\uFDD0'hierarchy");
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"def"))),cljs.core.list.call(null,cljs.core.with_meta.call(null,mm_name,m__$2)),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"method-table__4250__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/atom"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null))))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"prefer-table__4251__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/atom"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null))))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"method-cache__4252__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/atom"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null))))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cached-hierarchy__4253__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/atom"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.seq.call(null,cljs.core.concat.call(null))))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"hierarchy__4254__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/get"))),cljs.core.list.call(null,options__$4),cljs.core.list.call(null,"\uFDD0'hierarchy"),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/global-hierarchy")))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/MultiFn."))),cljs.core.list.call(null,cljs.core.name.call(null,mm_name)),cljs.core.list.call(null,dispatch_fn),cljs.core.list.call(null,default$),cljs.core.list.call(null,(new cljs.core.Symbol(null,"hierarchy__4254__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"method-table__4250__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"prefer-table__4251__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"method-cache__4252__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"cached-hierarchy__4253__auto__")))))))))));
};
var defmulti = function (_AMPERSAND_form,_AMPERSAND_env,mm_name,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return defmulti__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, mm_name, options);
};
defmulti.cljs$lang$maxFixedArity = 3;
defmulti.cljs$lang$applyTo = (function (arglist__4256){
var _AMPERSAND_form = cljs.core.first(arglist__4256);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4256));
var mm_name = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4256)));
var options = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4256)));
return defmulti__delegate(_AMPERSAND_form, _AMPERSAND_env, mm_name, options);
});
defmulti.cljs$lang$arity$variadic = defmulti__delegate;
return defmulti;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"defmulti")));
/**
* Creates and installs a new method of multimethod associated with dispatch-value.
* @param {...*} var_args
*/
cljs.core.defmethod = (function() { 
var defmethod__delegate = function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/-add-method"))),cljs.core.list.call(null,cljs.core.with_meta.call(null,multifn,cljs.core.ObjMap.fromObject(["\uFDD0'tag"],{"\uFDD0'tag":(new cljs.core.Symbol(null,"cljs.core/MultiFn"))}))),cljs.core.list.call(null,dispatch_val),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),fn_tail)))));
};
var defmethod = function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,var_args){
var fn_tail = null;
if (goog.isDef(var_args)) {
  fn_tail = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return defmethod__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, multifn, dispatch_val, fn_tail);
};
defmethod.cljs$lang$maxFixedArity = 4;
defmethod.cljs$lang$applyTo = (function (arglist__4259){
var _AMPERSAND_form = cljs.core.first(arglist__4259);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4259));
var multifn = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4259)));
var dispatch_val = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4259))));
var fn_tail = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4259))));
return defmethod__delegate(_AMPERSAND_form, _AMPERSAND_env, multifn, dispatch_val, fn_tail);
});
defmethod.cljs$lang$arity$variadic = defmethod__delegate;
return defmethod;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"defmethod")));
/**
* Evaluates expr and prints the time it took. Returns the value of expr.
*/
cljs.core.time = (function time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"start__4257__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".getTime"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"js/Date."))))))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"ret__4258__auto__"))),cljs.core.list.call(null,expr))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/prn"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/str"))),cljs.core.list.call(null,"Elapsed time: "),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/-"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".getTime"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"js/Date."))))))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"start__4257__auto__")))))),cljs.core.list.call(null," msecs"))))))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"ret__4258__auto__")))));
});
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"time")));
/**
* Evaluates exprs in a context in which *print-fn* is bound to .append
* on a fresh StringBuffer.  Returns the string created by any nested
* printing calls.
* @param {...*} var_args
*/
cljs.core.with_out_str = (function() { 
var with_out_str__delegate = function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/let"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"sb__4260__auto__"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"goog.string/StringBuffer.")))))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/binding"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/*print-fn*"))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/fn"))),cljs.core.list.call(null,cljs.core.apply.call(null,cljs.core.vector,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"x__4261__auto__"))))))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,".append"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"sb__4260__auto__"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"x__4261__auto__"))))))))))))),body))),cljs.core.list.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.list.call(null,(new cljs.core.Symbol(null,"cljs.core/str"))),cljs.core.list.call(null,(new cljs.core.Symbol(null,"sb__4260__auto__"))))))));
};
var with_out_str = function (_AMPERSAND_form,_AMPERSAND_env,var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return with_out_str__delegate.call(this, _AMPERSAND_form, _AMPERSAND_env, body);
};
with_out_str.cljs$lang$maxFixedArity = 2;
with_out_str.cljs$lang$applyTo = (function (arglist__4262){
var _AMPERSAND_form = cljs.core.first(arglist__4262);
var _AMPERSAND_env = cljs.core.first(cljs.core.next(arglist__4262));
var body = cljs.core.rest(cljs.core.next(arglist__4262));
return with_out_str__delegate(_AMPERSAND_form, _AMPERSAND_env, body);
});
with_out_str.cljs$lang$arity$variadic = with_out_str__delegate;
return with_out_str;
})()
;
cljs.core.setMacro.call(null,(new cljs.core.Symbol(null,"with-out-str")));

// Analyzer namespace snapshot:
cljs.core.swap_BANG_.call(null,cljs.core.namespaces,cljs.core.update_in,cljs.core.PersistentVector.fromArray([(new cljs.core.Symbol(null,"cljs.core"))], true),(function (old){
return cljs.core.deep_merge_with.call(null,(function() { 
var G__4263__delegate = function (m){
return cljs.core.first.call(null,m);
};
var G__4263 = function (var_args){
var m = null;
if (goog.isDef(var_args)) {
  m = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4263__delegate.call(this, m);
};
G__4263.cljs$lang$maxFixedArity = 0;
G__4263.cljs$lang$applyTo = (function (arglist__4264){
var m = cljs.core.seq(arglist__4264);;
return G__4263__delegate(m);
});
G__4263.cljs$lang$arity$variadic = G__4263__delegate;
return G__4263;
})()
}));