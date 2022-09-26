(()=>{var RS=Object.create;var Dm=Object.defineProperty;var DS=Object.getOwnPropertyDescriptor;var FS=Object.getOwnPropertyNames;var OS=Object.getPrototypeOf,PS=Object.prototype.hasOwnProperty;var De=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),$t=(r,t)=>{for(var e in t)Dm(r,e,{get:t[e],enumerable:!0})},LS=(r,t,e,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of FS(t))!PS.call(r,n)&&n!==e&&Dm(r,n,{get:()=>t[n],enumerable:!(o=DS(t,n))||o.enumerable});return r};var Fm=(r,t,e)=>(e=r!=null?RS(OS(r)):{},LS(t||!r||!r.__esModule?Dm(e,"default",{value:r,enumerable:!0}):e,r));var gg=De(hg=>{(function(){"use strict";var r;function t(f){var b=0;return function(){return b<f.length?{done:!1,value:f[b++]}:{done:!0}}}var e=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,b,C){return f==Array.prototype||f==Object.prototype||(f[b]=C.value),f};function o(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof global=="object"&&global];for(var b=0;b<f.length;++b){var C=f[b];if(C&&C.Math==Math)return C}throw Error("Cannot find global object")}var n=o(this);function s(f,b){if(b)t:{var C=n;f=f.split(".");for(var I=0;I<f.length-1;I++){var R=f[I];if(!(R in C))break t;C=C[R]}f=f[f.length-1],I=C[f],b=b(I),b!=I&&b!=null&&e(C,f,{configurable:!0,writable:!0,value:b})}}s("Symbol",function(f){function b(P){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new C(I+(P||"")+"_"+R++,P)}function C(P,F){this.g=P,e(this,"description",{configurable:!0,writable:!0,value:F})}if(f)return f;C.prototype.toString=function(){return this.g};var I="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",R=0;return b}),s("Symbol.iterator",function(f){if(f)return f;f=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),C=0;C<b.length;C++){var I=n[b[C]];typeof I=="function"&&typeof I.prototype[f]!="function"&&e(I.prototype,f,{configurable:!0,writable:!0,value:function(){return i(t(this))}})}return f});function i(f){return f={next:f},f[Symbol.iterator]=function(){return this},f}function a(f){var b=typeof Symbol<"u"&&Symbol.iterator&&f[Symbol.iterator];return b?b.call(f):{next:t(f)}}function u(f){if(!(f instanceof Array)){f=a(f);for(var b,C=[];!(b=f.next()).done;)C.push(b.value);f=C}return f}var c=typeof Object.create=="function"?Object.create:function(f){function b(){}return b.prototype=f,new b},l;if(typeof Object.setPrototypeOf=="function")l=Object.setPrototypeOf;else{var p;t:{var m={a:!0},d={};try{d.__proto__=m,p=d.a;break t}catch{}p=!1}l=p?function(f,b){if(f.__proto__=b,f.__proto__!==b)throw new TypeError(f+" is not extensible");return f}:null}var h=l;function g(f,b){if(f.prototype=c(b.prototype),f.prototype.constructor=f,h)h(f,b);else for(var C in b)if(C!="prototype")if(Object.defineProperties){var I=Object.getOwnPropertyDescriptor(b,C);I&&Object.defineProperty(f,C,I)}else f[C]=b[C];f.na=b.prototype}function x(){this.l=!1,this.i=null,this.h=void 0,this.g=1,this.u=this.o=0,this.j=null}function w(f){if(f.l)throw new TypeError("Generator is already running");f.l=!0}x.prototype.s=function(f){this.h=f};function N(f,b){f.j={da:b,ea:!0},f.g=f.o||f.u}x.prototype.return=function(f){this.j={return:f},this.g=this.u};function k(f,b,C){return f.g=C,{value:b}}function _(f){this.g=new x,this.h=f}function D(f,b){w(f.g);var C=f.g.i;return C?B(f,"return"in C?C.return:function(I){return{value:I,done:!0}},b,f.g.return):(f.g.return(b),V(f))}function B(f,b,C,I){try{var R=b.call(f.g.i,C);if(!(R instanceof Object))throw new TypeError("Iterator result "+R+" is not an object");if(!R.done)return f.g.l=!1,R;var P=R.value}catch(F){return f.g.i=null,N(f.g,F),V(f)}return f.g.i=null,I.call(f.g,P),V(f)}function V(f){for(;f.g.g;)try{var b=f.h(f.g);if(b)return f.g.l=!1,{value:b.value,done:!1}}catch(C){f.g.h=void 0,N(f.g,C)}if(f.g.l=!1,f.g.j){if(b=f.g.j,f.g.j=null,b.ea)throw b.da;return{value:b.return,done:!0}}return{value:void 0,done:!0}}function U(f){this.next=function(b){return w(f.g),f.g.i?b=B(f,f.g.i.next,b,f.g.s):(f.g.s(b),b=V(f)),b},this.throw=function(b){return w(f.g),f.g.i?b=B(f,f.g.i.throw,b,f.g.s):(N(f.g,b),b=V(f)),b},this.return=function(b){return D(f,b)},this[Symbol.iterator]=function(){return this}}function H(f){function b(I){return f.next(I)}function C(I){return f.throw(I)}return new Promise(function(I,R){function P(F){F.done?I(F.value):Promise.resolve(F.value).then(b,C).then(P,R)}P(f.next())})}function W(f){return H(new U(new _(f)))}s("Promise",function(f){function b(F){this.h=0,this.i=void 0,this.g=[],this.s=!1;var M=this.j();try{F(M.resolve,M.reject)}catch(G){M.reject(G)}}function C(){this.g=null}function I(F){return F instanceof b?F:new b(function(M){M(F)})}if(f)return f;C.prototype.h=function(F){if(this.g==null){this.g=[];var M=this;this.i(function(){M.l()})}this.g.push(F)};var R=n.setTimeout;C.prototype.i=function(F){R(F,0)},C.prototype.l=function(){for(;this.g&&this.g.length;){var F=this.g;this.g=[];for(var M=0;M<F.length;++M){var G=F[M];F[M]=null;try{G()}catch(K){this.j(K)}}}this.g=null},C.prototype.j=function(F){this.i(function(){throw F})},b.prototype.j=function(){function F(K){return function(J){G||(G=!0,K.call(M,J))}}var M=this,G=!1;return{resolve:F(this.D),reject:F(this.l)}},b.prototype.D=function(F){if(F===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(F instanceof b)this.H(F);else{t:switch(typeof F){case"object":var M=F!=null;break t;case"function":M=!0;break t;default:M=!1}M?this.A(F):this.o(F)}},b.prototype.A=function(F){var M=void 0;try{M=F.then}catch(G){this.l(G);return}typeof M=="function"?this.I(M,F):this.o(F)},b.prototype.l=function(F){this.u(2,F)},b.prototype.o=function(F){this.u(1,F)},b.prototype.u=function(F,M){if(this.h!=0)throw Error("Cannot settle("+F+", "+M+"): Promise already settled in state"+this.h);this.h=F,this.i=M,this.h===2&&this.G(),this.B()},b.prototype.G=function(){var F=this;R(function(){if(F.C()){var M=n.console;typeof M<"u"&&M.error(F.i)}},1)},b.prototype.C=function(){if(this.s)return!1;var F=n.CustomEvent,M=n.Event,G=n.dispatchEvent;return typeof G>"u"?!0:(typeof F=="function"?F=new F("unhandledrejection",{cancelable:!0}):typeof M=="function"?F=new M("unhandledrejection",{cancelable:!0}):(F=n.document.createEvent("CustomEvent"),F.initCustomEvent("unhandledrejection",!1,!0,F)),F.promise=this,F.reason=this.i,G(F))},b.prototype.B=function(){if(this.g!=null){for(var F=0;F<this.g.length;++F)P.h(this.g[F]);this.g=null}};var P=new C;return b.prototype.H=function(F){var M=this.j();F.M(M.resolve,M.reject)},b.prototype.I=function(F,M){var G=this.j();try{F.call(M,G.resolve,G.reject)}catch(K){G.reject(K)}},b.prototype.then=function(F,M){function G(ut,tt){return typeof ut=="function"?function(ft){try{K(ut(ft))}catch(Ct){J(Ct)}}:tt}var K,J,at=new b(function(ut,tt){K=ut,J=tt});return this.M(G(F,K),G(M,J)),at},b.prototype.catch=function(F){return this.then(void 0,F)},b.prototype.M=function(F,M){function G(){switch(K.h){case 1:F(K.i);break;case 2:M(K.i);break;default:throw Error("Unexpected state: "+K.h)}}var K=this;this.g==null?P.h(G):this.g.push(G),this.s=!0},b.resolve=I,b.reject=function(F){return new b(function(M,G){G(F)})},b.race=function(F){return new b(function(M,G){for(var K=a(F),J=K.next();!J.done;J=K.next())I(J.value).M(M,G)})},b.all=function(F){var M=a(F),G=M.next();return G.done?I([]):new b(function(K,J){function at(ft){return function(Ct){ut[ft]=Ct,tt--,tt==0&&K(ut)}}var ut=[],tt=0;do ut.push(void 0),tt++,I(G.value).M(at(ut.length-1),J),G=M.next();while(!G.done)})},b});function j(f,b){f instanceof String&&(f+="");var C=0,I=!1,R={next:function(){if(!I&&C<f.length){var P=C++;return{value:b(P,f[P]),done:!1}}return I=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}var Z=typeof Object.assign=="function"?Object.assign:function(f,b){for(var C=1;C<arguments.length;C++){var I=arguments[C];if(I)for(var R in I)Object.prototype.hasOwnProperty.call(I,R)&&(f[R]=I[R])}return f};s("Object.assign",function(f){return f||Z}),s("Object.is",function(f){return f||function(b,C){return b===C?b!==0||1/b===1/C:b!==b&&C!==C}}),s("Array.prototype.includes",function(f){return f||function(b,C){var I=this;I instanceof String&&(I=String(I));var R=I.length;for(C=C||0,0>C&&(C=Math.max(C+R,0));C<R;C++){var P=I[C];if(P===b||Object.is(P,b))return!0}return!1}}),s("String.prototype.includes",function(f){return f||function(b,C){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(b,C||0)!==-1}}),s("Array.prototype.keys",function(f){return f||function(){return j(this,function(b){return b})}});var lt=this||self;function it(f,b){f=f.split(".");var C=lt;f[0]in C||typeof C.execScript>"u"||C.execScript("var "+f[0]);for(var I;f.length&&(I=f.shift());)f.length||b===void 0?C[I]&&C[I]!==Object.prototype[I]?C=C[I]:C=C[I]={}:C[I]=b}function mt(){throw Error("Invalid UTF8")}function jt(f,b){return b=String.fromCharCode.apply(null,b),f==null?b:f+b}var Gt,Bt=typeof TextDecoder<"u",oe,gr=typeof TextEncoder<"u",Ar={},xr=null;function fn(f){var b;b===void 0&&(b=0),$s(),b=Ar[b];for(var C=Array(Math.floor(f.length/3)),I=b[64]||"",R=0,P=0;R<f.length-2;R+=3){var F=f[R],M=f[R+1],G=f[R+2],K=b[F>>2];F=b[(F&3)<<4|M>>4],M=b[(M&15)<<2|G>>6],G=b[G&63],C[P++]=K+F+M+G}switch(K=0,G=I,f.length-R){case 2:K=f[R+1],G=b[(K&15)<<2]||I;case 1:f=f[R],C[P]=b[f>>2]+b[(f&3)<<4|K>>4]+G+I}return C.join("")}function _i(f){var b=f.length,C=3*b/4;C%3?C=Math.floor(C):"=.".indexOf(f[b-1])!=-1&&(C="=.".indexOf(f[b-2])!=-1?C-2:C-1);var I=new Uint8Array(C),R=0;return Es(f,function(P){I[R++]=P}),R!==C?I.subarray(0,R):I}function Es(f,b){function C(G){for(;I<f.length;){var K=f.charAt(I++),J=xr[K];if(J!=null)return J;if(!/^[\s\xa0]*$/.test(K))throw Error("Unknown base64 encoding at char: "+K)}return G}$s();for(var I=0;;){var R=C(-1),P=C(0),F=C(64),M=C(64);if(M===64&&R===-1)break;b(R<<2|P>>4),F!=64&&(b(P<<4&240|F>>2),M!=64&&b(F<<6&192|M))}}function $s(){if(!xr){xr={};for(var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],C=0;5>C;C++){var I=f.concat(b[C].split(""));Ar[C]=I;for(var R=0;R<I.length;R++){var P=I[R];xr[P]===void 0&&(xr[P]=R)}}}}var yh=typeof Uint8Array=="function";function Tm(f){return yh&&f!=null&&f instanceof Uint8Array}var Ai;function bh(f){if(this.L=f,f!==null&&f.length===0)throw Error("ByteString should be constructed with non-empty values")}var jC=typeof Uint8Array.prototype.slice=="function",Rr=0,jr=0;function XC(f,b){if(f.constructor===Uint8Array)return f;if(f.constructor===ArrayBuffer)return new Uint8Array(f);if(f.constructor===Array)return new Uint8Array(f);if(f.constructor===String)return _i(f);if(f.constructor===bh)return!b&&(b=f.L)&&b.constructor===Uint8Array?b:(b=f.L,b=b==null||Tm(b)?b:typeof b=="string"?_i(b):null,(f=f.L=b)?new Uint8Array(f):Ai||(Ai=new Uint8Array(0)));if(f instanceof Uint8Array)return new Uint8Array(f.buffer,f.byteOffset,f.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers")}function vh(f,b){return Error("Invalid wire type: "+f+" (at position "+b+")")}function Cm(){return Error("Failed to read varint, encoding is invalid.")}function wh(f,b){b=b===void 0?{}:b,b=b.v===void 0?!1:b.v,this.h=null,this.g=this.i=this.j=0,this.v=b,f&&Sm(this,f)}function Sm(f,b){f.h=XC(b,f.v),f.j=0,f.i=f.h.length,f.g=f.j}wh.prototype.reset=function(){this.g=this.j};function ye(f){if(f.g>f.i)throw Error("Tried to read past the end of the data "+f.g+" > "+f.i)}function Is(f){var b=f.h,C=b[f.g],I=C&127;if(128>C)return f.g+=1,ye(f),I;if(C=b[f.g+1],I|=(C&127)<<7,128>C)return f.g+=2,ye(f),I;if(C=b[f.g+2],I|=(C&127)<<14,128>C)return f.g+=3,ye(f),I;if(C=b[f.g+3],I|=(C&127)<<21,128>C)return f.g+=4,ye(f),I;if(C=b[f.g+4],f.g+=5,I|=(C&15)<<28,128>C)return ye(f),I;if(128<=b[f.g++]&&128<=b[f.g++]&&128<=b[f.g++]&&128<=b[f.g++]&&128<=b[f.g++])throw Cm();return ye(f),I}var Th=[];function Nm(){this.g=[]}Nm.prototype.length=function(){return this.g.length},Nm.prototype.end=function(){var f=this.g;return this.g=[],f};function To(f,b){for(;127<b;)f.g.push(b&127|128),b>>>=7;f.g.push(b)}function Ch(f){var b={},C=b.W===void 0?!1:b.W;this.l={v:b.v===void 0?!1:b.v},this.W=C,b=this.l,Th.length?(C=Th.pop(),b&&(C.v=b.v),f&&Sm(C,f),f=C):f=new wh(f,b),this.g=f,this.j=this.g.g,this.h=this.i=-1}Ch.prototype.reset=function(){this.g.reset(),this.j=this.g.g,this.h=this.i=-1};function Sh(f){var b=f.g;if(b.g==b.i)return!1;f.j=f.g.g;var C=Is(f.g)>>>0;if(b=C>>>3,C&=7,!(0<=C&&5>=C))throw vh(C,f.j);if(1>b)throw Error("Invalid field number: "+b+" (at position "+f.j+")");return f.i=b,f.h=C,!0}function Ri(f){switch(f.h){case 0:if(f.h!=0)Ri(f);else t:{f=f.g;for(var b=f.g,C=b+10;b<C;)if((f.h[b++]&128)===0){f.g=b,ye(f);break t}throw Cm()}break;case 1:f=f.g,f.g+=8,ye(f);break;case 2:f.h!=2?Ri(f):(b=Is(f.g)>>>0,f=f.g,f.g+=b,ye(f));break;case 5:f=f.g,f.g+=4,ye(f);break;case 3:b=f.i;do{if(!Sh(f))throw Error("Unmatched start-group tag: stream EOF");if(f.h==4){if(f.i!=b)throw Error("Unmatched end-group tag");break}Ri(f)}while(1);break;default:throw vh(f.h,f.j)}}var Di=[];function YC(){this.i=[],this.h=0,this.g=new Nm}function dn(f,b){b.length!==0&&(f.i.push(b),f.h+=b.length)}function QC(f,b){if(b=b.ba){dn(f,f.g.end());for(var C=0;C<b.length;C++)dn(f,b[C])}}var Fi=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol(void 0):void 0;function Nh(f,b){Object.isFrozen(f)||(Fi?f[Fi]|=b:f.N!==void 0?f.N|=b:Object.defineProperties(f,{N:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}function Eh(f){var b;return Fi?b=f[Fi]:b=f.N,b??0}function ks(f){return Nh(f,1),f}function _s(f){return Array.isArray(f)?!!(Eh(f)&2):!1}function Em(f){if(!Array.isArray(f))throw Error("cannot mark non-array as immutable");Nh(f,2)}function $h(f){return f!==null&&typeof f=="object"&&!Array.isArray(f)&&f.constructor===Object}var Oi=Object.freeze(ks([]));function Ih(f){if(_s(f.m))throw Error("Cannot mutate an immutable Message")}var kh=typeof Symbol<"u"&&typeof Symbol.hasInstance<"u";function _h(f){return{value:f,configurable:!1,writable:!1,enumerable:!1}}function nr(f,b,C){return b===-1?null:b>=f.i?f.g?f.g[b]:void 0:(C===void 0?0:C)&&f.g&&(C=f.g[b],C!=null)?C:f.m[b+f.h]}function Zt(f,b,C,I){I=I===void 0?!1:I,Ih(f),b<f.i&&!I?f.m[b+f.h]=C:(f.g||(f.g=f.m[f.i+f.h]={}))[b]=C}function Ah(f,b,C,I){C=C===void 0?!0:C,I=I===void 0?!1:I;var R=nr(f,b,I);return R==null&&(R=Oi),_s(f.m)?C&&(Em(R),Object.freeze(R)):(R===Oi||_s(R))&&(R=ks(R.slice()),Zt(f,b,R,I)),R}function yr(f,b,C){return f=nr(f,b),f=f==null?f:+f,f??(C===void 0?0:C)}function Pi(f,b,C,I){f.j||(f.j={});var R=_s(f.m),P=f.j[C];if(!P){I=Ah(f,C,!0,I===void 0?!1:I),P=[],R=R||_s(I);for(var F=0;F<I.length;F++)P[F]=new b(I[F]),R&&Em(P[F].m);R&&(Em(P),Object.freeze(P)),f.j[C]=P}return P}function Rh(f,b,C,I,R){var P=P===void 0?!1:P;return Ih(f),P=Pi(f,C,b,P),C=I||new C,f=Ah(f,b),R!=null?(P.splice(R,0,C),f.splice(R,0,C.m)):(P.push(C),f.push(C.m)),C}function Dh(f,b){return f=nr(f,b),f??0}function Fh(f,b){return f=nr(f,b),f??""}function ZC(f){switch(typeof f){case"number":return isFinite(f)?f:String(f);case"object":if(f&&!Array.isArray(f)){if(Tm(f))return fn(f);if(f instanceof bh){var b=f.L;return b=b==null||typeof b=="string"?b:yh&&b instanceof Uint8Array?fn(b):null,(f.L=b)||""}}}return f}function Oh(f){var b=JC;return b=b===void 0?tS:b,Lh(f,b)}function Ph(f,b){if(f!=null){if(Array.isArray(f))f=Lh(f,b);else if($h(f)){var C={},I;for(I in f)C[I]=Ph(f[I],b);f=C}else f=b(f);return f}}function Lh(f,b){for(var C=f.slice(),I=0;I<C.length;I++)C[I]=Ph(C[I],b);return Array.isArray(f)&&Eh(f)&1&&ks(C),C}function JC(f){return f&&typeof f=="object"&&f.toJSON?f.toJSON():(f=ZC(f),Array.isArray(f)?Oh(f):f)}function tS(f){return Tm(f)?new Uint8Array(f):f}function Li(f,b,C){f||(f=Bh),Bh=null;var I=this.constructor.h;f||(f=I?[I]:[]),this.h=(I?0:-1)-(this.constructor.g||0),this.j=void 0,this.m=f;t:{if(I=this.m.length,f=I-1,I&&(I=this.m[f],$h(I))){this.i=f-this.h,this.g=I;break t}b!==void 0&&-1<b?(this.i=Math.max(b,f+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE}if(C)for(b=0;b<C.length;b++)if(f=C[b],f<this.i)f+=this.h,(I=this.m[f])?Array.isArray(I)&&ks(I):this.m[f]=Oi;else{I=this.g||(this.g=this.m[this.i+this.h]={});var R=I[f];R?Array.isArray(R)&&ks(R):I[f]=Oi}}Li.prototype.toJSON=function(){return Oh(this.m)},Li.prototype.toString=function(){return this.m.toString()};var Bh;function Bi(){Li.apply(this,arguments)}if(g(Bi,Li),kh){var Vh={};Object.defineProperties(Bi,(Vh[Symbol.hasInstance]=_h(function(){throw Error("Cannot perform instanceof checks for MutableMessage")}),Vh))}function Mh(f,b,C){if(C){var I={},R;for(R in C){var P=C[R],F=P.ha;F||(I.F=P.la||P.fa.P,P.aa?(I.U=zh(P.aa),F=function(M){return function(G,K,J){return M.F(G,K,J,M.U)}}(I)):P.ca?(I.T=Hh(P.X.g,P.ca),F=function(M){return function(G,K,J){return M.F(G,K,J,M.T)}}(I)):F=I.F,P.ha=F),F(b,f,P.X),I={F:I.F,U:I.U,T:I.T}}}QC(b,f)}var Vi=Symbol();function Uh(f,b,C){return f[Vi]||(f[Vi]=function(I,R){return b(I,R,C)})}function Gh(f){var b=f[Vi];if(!b){var C=Xh(f);b=function(I,R){return Yh(I,R,C)},f[Vi]=b}return b}function eS(f){var b=f.aa;if(b)return Gh(b);if(b=f.ka)return Uh(f.X.g,b,f.ca)}function rS(f){var b=eS(f),C=f.X,I=f.fa.O;return b?function(R,P){return I(R,P,C,b)}:function(R,P){return I(R,P,C)}}function Wh(f,b,C,I,R,P){f=f();var F=0;for(f.length&&typeof f[0]!="number"&&(C(b,f[0]),F++);F<f.length;){C=f[F++];for(var M=F+1;M<f.length&&typeof f[M]!="number";)M++;var G=f[F++];switch(M-=F,M){case 0:I(b,C,G);break;case 1:I(b,C,G,f[F++]);break;case 2:R(b,C,G,f[F++],f[F++]);break;case 3:M=f[F++];var K=f[F++],J=f[F++];Array.isArray(J)?R(b,C,G,M,K,J):P(b,C,G,M,K,J);break;case 4:P(b,C,G,f[F++],f[F++],f[F++],f[F++]);break;default:throw Error("unexpected number of binary field arguments: "+M)}}return b}var Mi=Symbol();function zh(f){var b=f[Mi];if(!b){var C=qh(f);b=function(I,R){return Qh(I,R,C)},f[Mi]=b}return b}function Hh(f,b){var C=f[Mi];return C||(C=function(I,R){return Mh(I,R,b)},f[Mi]=C),C}var Kh=Symbol();function oS(f,b){f.push(b)}function nS(f,b,C){f.push(b,C.P)}function sS(f,b,C,I,R){var P=zh(R),F=C.P;f.push(b,function(M,G,K){return F(M,G,K,I,P)})}function iS(f,b,C,I,R,P){var F=Hh(I,P),M=C.P;f.push(b,function(G,K,J){return M(G,K,J,I,F)})}function qh(f){var b=f[Kh];return b||Wh(f,f[Kh]=[],oS,nS,sS,iS)}var jh=Symbol();function aS(f,b){f[0]=b}function uS(f,b,C,I){var R=C.O;f[b]=I?function(P,F,M){return R(P,F,M,I)}:R}function cS(f,b,C,I,R,P){var F=C.O,M=Gh(R);f[b]=function(G,K,J){return F(G,K,J,I,M,P)}}function lS(f,b,C,I,R,P,F){var M=C.O,G=Uh(I,R,P);f[b]=function(K,J,at){return M(K,J,at,I,G,F)}}function Xh(f){var b=f[jh];return b||Wh(f,f[jh]={},aS,uS,cS,lS)}function Yh(f,b,C){for(;Sh(b)&&b.h!=4;){var I=b.i,R=C[I];if(!R){var P=C[0];P&&(P=P[I])&&(R=C[I]=rS(P))}if((!R||!R(b,f,I))&&(R=b,I=f,P=R.j,Ri(R),!R.W)){var F=R.g.h;R=R.g.g,R=P===R?Ai||(Ai=new Uint8Array(0)):jC?F.slice(P,R):new Uint8Array(F.subarray(P,R)),(P=I.ba)?P.push(R):I.ba=[R]}}return f}function $m(f,b,C){if(Di.length){var I=Di.pop();f&&(Sm(I.g,f),I.i=-1,I.h=-1),f=I}else f=new Ch(f);try{return Yh(new b,f,Xh(C))}finally{b=f.g,b.h=null,b.j=0,b.i=0,b.g=0,b.v=!1,f.i=-1,f.h=-1,100>Di.length&&Di.push(f)}}function Qh(f,b,C){for(var I=C.length,R=I%2==1,P=R?1:0;P<I;P+=2)(0,C[P+1])(b,f,C[P]);Mh(f,b,R?C[0]:void 0)}function Im(f,b){var C=new YC;Qh(f,C,qh(b)),dn(C,C.g.end()),f=new Uint8Array(C.h),b=C.i;for(var I=b.length,R=0,P=0;P<I;P++){var F=b[P];f.set(F,R),R+=F.length}return C.i=[f],f}function As(f,b){return{O:f,P:b}}var sr=As(function(f,b,C){if(f.h!==5)return!1;f=f.g;var I=f.h[f.g],R=f.h[f.g+1],P=f.h[f.g+2],F=f.h[f.g+3];return f.g+=4,ye(f),R=(I<<0|R<<8|P<<16|F<<24)>>>0,f=2*(R>>31)+1,I=R>>>23&255,R&=8388607,Zt(b,C,I==255?R?NaN:1/0*f:I==0?f*Math.pow(2,-149)*R:f*Math.pow(2,I-150)*(R+Math.pow(2,23))),!0},function(f,b,C){if(b=nr(b,C),b!=null){To(f.g,8*C+5),f=f.g;var I=b;I=(C=0>I?1:0)?-I:I,I===0?0<1/I?Rr=jr=0:(jr=0,Rr=2147483648):isNaN(I)?(jr=0,Rr=2147483647):34028234663852886e22<I?(jr=0,Rr=(C<<31|2139095040)>>>0):11754943508222875e-54>I?(I=Math.round(I/Math.pow(2,-149)),jr=0,Rr=(C<<31|I)>>>0):(b=Math.floor(Math.log(I)/Math.LN2),I*=Math.pow(2,-b),I=Math.round(8388608*I),16777216<=I&&++b,jr=0,Rr=(C<<31|b+127<<23|I&8388607)>>>0),C=Rr,f.g.push(C>>>0&255),f.g.push(C>>>8&255),f.g.push(C>>>16&255),f.g.push(C>>>24&255)}}),pS=As(function(f,b,C){if(f.h!==0)return!1;for(var I=f.g,R=128,P=0,F=f=0;4>F&&128<=R;F++)R=I.h[I.g++],ye(I),P|=(R&127)<<7*F;if(128<=R&&(R=I.h[I.g++],ye(I),P|=(R&127)<<28,f|=(R&127)>>4),128<=R)for(F=0;5>F&&128<=R;F++)R=I.h[I.g++],ye(I),f|=(R&127)<<7*F+3;if(128>R)I=P>>>0,R=f>>>0,(f=R&2147483648)&&(I=~I+1>>>0,R=~R>>>0,I==0&&(R=R+1>>>0)),I=4294967296*R+(I>>>0);else throw Cm();return Zt(b,C,f?-I:I),!0},function(f,b,C){if(b=nr(b,C),b!=null&&b!=null){To(f.g,8*C),f=f.g;var I=b;for(C=0>I,I=Math.abs(I),b=I>>>0,I=Math.floor((I-b)/4294967296),I>>>=0,C&&(I=~I>>>0,b=(~b>>>0)+1,4294967295<b&&(b=0,I++,4294967295<I&&(I=0))),Rr=b,jr=I,C=Rr,b=jr;0<b||127<C;)f.g.push(C&127|128),C=(C>>>7|b<<25)>>>0,b>>>=7;f.g.push(C)}}),mS=As(function(f,b,C){return f.h!==0?!1:(Zt(b,C,Is(f.g)),!0)},function(f,b,C){if(b=nr(b,C),b!=null&&b!=null)if(To(f.g,8*C),f=f.g,C=b,0<=C)To(f,C);else{for(b=0;9>b;b++)f.g.push(C&127|128),C>>=7;f.g.push(1)}}),Zh=As(function(f,b,C){if(f.h!==2)return!1;var I=Is(f.g)>>>0;f=f.g;var R=f.g;f.g+=I,ye(f),f=f.h;var P;if(Bt)(P=Gt)||(P=Gt=new TextDecoder("utf-8",{fatal:!0})),P=P.decode(f.subarray(R,R+I));else{I=R+I;for(var F=[],M=null,G,K,J;R<I;)G=f[R++],128>G?F.push(G):224>G?R>=I?mt():(K=f[R++],194>G||(K&192)!==128?(R--,mt()):F.push((G&31)<<6|K&63)):240>G?R>=I-1?mt():(K=f[R++],(K&192)!==128||G===224&&160>K||G===237&&160<=K||((P=f[R++])&192)!==128?(R--,mt()):F.push((G&15)<<12|(K&63)<<6|P&63)):244>=G?R>=I-2?mt():(K=f[R++],(K&192)!==128||(G<<28)+(K-144)>>30!==0||((P=f[R++])&192)!==128||((J=f[R++])&192)!==128?(R--,mt()):(G=(G&7)<<18|(K&63)<<12|(P&63)<<6|J&63,G-=65536,F.push((G>>10&1023)+55296,(G&1023)+56320))):mt(),8192<=F.length&&(M=jt(M,F),F.length=0);P=jt(M,F)}return Zt(b,C,P),!0},function(f,b,C){if(b=nr(b,C),b!=null){var I=!1;if(I=I===void 0?!1:I,gr){if(I&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b))throw Error("Found an unpaired surrogate");b=(oe||(oe=new TextEncoder)).encode(b)}else{for(var R=0,P=new Uint8Array(3*b.length),F=0;F<b.length;F++){var M=b.charCodeAt(F);if(128>M)P[R++]=M;else{if(2048>M)P[R++]=M>>6|192;else{if(55296<=M&&57343>=M){if(56319>=M&&F<b.length){var G=b.charCodeAt(++F);if(56320<=G&&57343>=G){M=1024*(M-55296)+G-56320+65536,P[R++]=M>>18|240,P[R++]=M>>12&63|128,P[R++]=M>>6&63|128,P[R++]=M&63|128;continue}else F--}if(I)throw Error("Found an unpaired surrogate");M=65533}P[R++]=M>>12|224,P[R++]=M>>6&63|128}P[R++]=M&63|128}}b=P.subarray(0,R)}To(f.g,8*C+2),To(f.g,b.length),dn(f,f.g.end()),dn(f,b)}}),Jh=As(function(f,b,C,I,R){if(f.h!==2)return!1;b=Rh(b,C,I),C=f.g.i,I=Is(f.g)>>>0;var P=f.g.g+I,F=P-C;if(0>=F&&(f.g.i=P,R(b,f),F=P-f.g.g),F)throw Error("Message parsing ended unexpectedly. Expected to read "+(I+" bytes, instead read "+(I-F)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return f.g.g=P,f.g.i=C,!0},function(f,b,C,I,R){if(b=Pi(b,I,C),b!=null)for(I=0;I<b.length;I++){var P=f;To(P.g,8*C+2);var F=P.g.end();dn(P,F),F.push(P.h),P=F,R(b[I],f),F=f;var M=P.pop();for(M=F.h+F.g.length()-M;127<M;)P.push(M&127|128),M>>>=7,F.h++;P.push(M),F.h++}});function We(){Bi.apply(this,arguments)}if(g(We,Bi),kh){var tg={};Object.defineProperties(We,(tg[Symbol.hasInstance]=_h(Object[Symbol.hasInstance]),tg))}function Rs(f){We.call(this,f)}g(Rs,We);function eg(){return[1,mS,2,sr,3,Zh,4,Zh]}function km(f){We.call(this,f,-1,dS)}g(km,We),km.prototype.addClassification=function(f,b){return Rh(this,1,Rs,f,b),this};function fS(){return[1,Jh,Rs,eg]}var dS=[1];function Ui(f){We.call(this,f)}g(Ui,We);function rg(){return[1,sr,2,sr,3,sr,4,sr,5,sr]}function og(f){We.call(this,f,-1,gS)}g(og,We);function hS(){return[1,Jh,Ui,rg]}var gS=[1];function _m(f){We.call(this,f)}g(_m,We);function ng(){return[1,sr,2,sr,3,sr,4,sr,5,sr,6,pS]}var sg=[[61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]],ig=[[263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]],ag=[[276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]],ug=[[33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]],cg=[[46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]],lg=[[10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]],xS=[].concat(u(sg),u(ig),u(ag),u(ug),u(cg),u(lg));function pg(f,b,C){if(C=f.createShader(C===0?f.VERTEX_SHADER:f.FRAGMENT_SHADER),f.shaderSource(C,b),f.compileShader(C),!f.getShaderParameter(C,f.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+f.getShaderInfoLog(C));return C}function yS(f){return Pi(f,Rs,1).map(function(b){return{index:Dh(b,1),ga:yr(b,2),label:nr(b,3)!=null?Fh(b,3):void 0,displayName:nr(b,4)!=null?Fh(b,4):void 0}})}function bS(f){return{x:yr(f,1),y:yr(f,2),z:yr(f,3),visibility:nr(f,4)!=null?yr(f,4):void 0}}function Am(f,b){this.h=f,this.g=b,this.l=0}function mg(f,b,C){return vS(f,b),typeof f.g.canvas.transferToImageBitmap=="function"?Promise.resolve(f.g.canvas.transferToImageBitmap()):C?Promise.resolve(f.g.canvas):typeof createImageBitmap=="function"?createImageBitmap(f.g.canvas):(f.i===void 0&&(f.i=document.createElement("canvas")),new Promise(function(I){f.i.height=f.g.canvas.height,f.i.width=f.g.canvas.width,f.i.getContext("2d",{}).drawImage(f.g.canvas,0,0,f.g.canvas.width,f.g.canvas.height),I(f.i)}))}function vS(f,b){var C=f.g;if(f.o===void 0){var I=pg(C,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),R=pg(C,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),P=C.createProgram();if(C.attachShader(P,I),C.attachShader(P,R),C.linkProgram(P),!C.getProgramParameter(P,C.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+C.getProgramInfoLog(P));I=f.o=P,C.useProgram(I),R=C.getUniformLocation(I,"sampler0"),f.j={K:C.getAttribLocation(I,"aVertex"),J:C.getAttribLocation(I,"aTex"),ma:R},f.u=C.createBuffer(),C.bindBuffer(C.ARRAY_BUFFER,f.u),C.enableVertexAttribArray(f.j.K),C.vertexAttribPointer(f.j.K,2,C.FLOAT,!1,0,0),C.bufferData(C.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),C.STATIC_DRAW),C.bindBuffer(C.ARRAY_BUFFER,null),f.s=C.createBuffer(),C.bindBuffer(C.ARRAY_BUFFER,f.s),C.enableVertexAttribArray(f.j.J),C.vertexAttribPointer(f.j.J,2,C.FLOAT,!1,0,0),C.bufferData(C.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),C.STATIC_DRAW),C.bindBuffer(C.ARRAY_BUFFER,null),C.uniform1i(R,0)}I=f.j,C.useProgram(f.o),C.canvas.width=b.width,C.canvas.height=b.height,C.viewport(0,0,b.width,b.height),C.activeTexture(C.TEXTURE0),f.h.bindTexture2d(b.glName),C.enableVertexAttribArray(I.K),C.bindBuffer(C.ARRAY_BUFFER,f.u),C.vertexAttribPointer(I.K,2,C.FLOAT,!1,0,0),C.enableVertexAttribArray(I.J),C.bindBuffer(C.ARRAY_BUFFER,f.s),C.vertexAttribPointer(I.J,2,C.FLOAT,!1,0,0),C.bindFramebuffer(C.DRAW_FRAMEBUFFER?C.DRAW_FRAMEBUFFER:C.FRAMEBUFFER,null),C.clearColor(0,0,0,0),C.clear(C.COLOR_BUFFER_BIT),C.colorMask(!0,!0,!0,!0),C.drawArrays(C.TRIANGLE_FAN,0,4),C.disableVertexAttribArray(I.K),C.disableVertexAttribArray(I.J),C.bindBuffer(C.ARRAY_BUFFER,null),f.h.bindTexture2d(0)}function wS(f){this.g=f}var TS=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function CS(f,b){return b+f}function fg(f,b){window[f]=b}function SS(f){var b=document.createElement("script");return b.setAttribute("src",f),b.setAttribute("crossorigin","anonymous"),new Promise(function(C){b.addEventListener("load",function(){C()},!1),b.addEventListener("error",function(){C()},!1),document.body.appendChild(b)})}function NS(){return W(function(f){switch(f.g){case 1:return f.o=2,k(f,WebAssembly.instantiate(TS),4);case 4:f.g=3,f.o=0;break;case 2:return f.o=0,f.j=null,f.return(!1);case 3:return f.return(!0)}})}function Rm(f){if(this.g=f,this.listeners={},this.j={},this.H={},this.o={},this.u={},this.I=this.s=this.Z=!0,this.D=Promise.resolve(),this.Y="",this.C={},this.locateFile=f&&f.locateFile||CS,typeof window=="object")var b=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")b=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.$=b,f.options){b=a(Object.keys(f.options));for(var C=b.next();!C.done;C=b.next()){C=C.value;var I=f.options[C].default;I!==void 0&&(this.j[C]=typeof I=="function"?I():I)}}}r=Rm.prototype,r.close=function(){return this.i&&this.i.delete(),Promise.resolve()};function ES(f){var b,C,I,R,P,F,M,G,K,J,at;return W(function(ut){switch(ut.g){case 1:return f.Z?(b=f.g.files===void 0?[]:typeof f.g.files=="function"?f.g.files(f.j):f.g.files,k(ut,NS(),2)):ut.return();case 2:if(C=ut.h,typeof window=="object")return fg("createMediapipeSolutionsWasm",{locateFile:f.locateFile}),fg("createMediapipeSolutionsPackedAssets",{locateFile:f.locateFile}),F=b.filter(function(tt){return tt.data!==void 0}),M=b.filter(function(tt){return tt.data===void 0}),G=Promise.all(F.map(function(tt){var ft=Gi(f,tt.url);if(tt.path!==void 0){var Ct=tt.path;ft=ft.then(function(Vt){return f.overrideFile(Ct,Vt),Promise.resolve(Vt)})}return ft})),K=Promise.all(M.map(function(tt){return tt.simd===void 0||tt.simd&&C||!tt.simd&&!C?SS(f.locateFile(tt.url,f.$)):Promise.resolve()})).then(function(){var tt,ft,Ct;return W(function(Vt){if(Vt.g==1)return tt=window.createMediapipeSolutionsWasm,ft=window.createMediapipeSolutionsPackedAssets,Ct=f,k(Vt,tt(ft),2);Ct.h=Vt.h,Vt.g=0})}),J=function(){return W(function(tt){return f.g.graph&&f.g.graph.url?tt=k(tt,Gi(f,f.g.graph.url),0):(tt.g=0,tt=void 0),tt})}(),k(ut,Promise.all([K,G,J]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return I=b.filter(function(tt){return tt.simd===void 0||tt.simd&&C||!tt.simd&&!C}).map(function(tt){return f.locateFile(tt.url,f.$)}),importScripts.apply(null,u(I)),R=f,k(ut,createMediapipeSolutionsWasm(Module),6);case 6:R.h=ut.h,f.l=new OffscreenCanvas(1,1),f.h.canvas=f.l,P=f.h.GL.createContext(f.l,{antialias:!1,alpha:!1,ja:typeof WebGL2RenderingContext<"u"?2:1}),f.h.GL.makeContextCurrent(P),ut.g=4;break;case 7:if(f.l=document.createElement("canvas"),at=f.l.getContext("webgl2",{}),!at&&(at=f.l.getContext("webgl",{}),!at))return alert("Failed to create WebGL canvas context when passing video frame."),ut.return();f.G=at,f.h.canvas=f.l,f.h.createContext(f.l,!0,!0,{});case 4:f.i=new f.h.SolutionWasm,f.Z=!1,ut.g=0}})}function $S(f){var b,C,I,R,P,F,M,G;return W(function(K){if(K.g==1){if(f.g.graph&&f.g.graph.url&&f.Y===f.g.graph.url)return K.return();if(f.s=!0,!f.g.graph||!f.g.graph.url){K.g=2;return}return f.Y=f.g.graph.url,k(K,Gi(f,f.g.graph.url),3)}for(K.g!=2&&(b=K.h,f.i.loadGraph(b)),C=a(Object.keys(f.C)),I=C.next();!I.done;I=C.next())R=I.value,f.i.overrideFile(R,f.C[R]);if(f.C={},f.g.listeners)for(P=a(f.g.listeners),F=P.next();!F.done;F=P.next())M=F.value,AS(f,M);G=f.j,f.j={},f.setOptions(G),K.g=0})}r.reset=function(){var f=this;return W(function(b){f.i&&(f.i.reset(),f.o={},f.u={}),b.g=0})},r.setOptions=function(f,b){var C=this;if(b=b||this.g.options){for(var I=[],R=[],P={},F=a(Object.keys(f)),M=F.next();!M.done;P={R:P.R,S:P.S},M=F.next()){var G=M.value;G in this.j&&this.j[G]===f[G]||(this.j[G]=f[G],M=b[G],M!==void 0&&(M.onChange&&(P.R=M.onChange,P.S=f[G],I.push(function(K){return function(){var J;return W(function(at){if(at.g==1)return k(at,K.R(K.S),2);J=at.h,J===!0&&(C.s=!0),at.g=0})}}(P))),M.graphOptionXref&&(G={valueNumber:M.type===1?f[G]:0,valueBoolean:M.type===0?f[G]:!1,valueString:M.type===2?f[G]:""},M=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),M.graphOptionXref),G),R.push(M))))}(I.length!==0||R.length!==0)&&(this.s=!0,this.B=(this.B===void 0?[]:this.B).concat(R),this.A=(this.A===void 0?[]:this.A).concat(I))}};function IS(f){var b,C,I,R,P,F,M;return W(function(G){switch(G.g){case 1:if(!f.s)return G.return();if(!f.A){G.g=2;break}b=a(f.A),C=b.next();case 3:if(C.done){G.g=5;break}return I=C.value,k(G,I(),4);case 4:C=b.next(),G.g=3;break;case 5:f.A=void 0;case 2:if(f.B){for(R=new f.h.GraphOptionChangeRequestList,P=a(f.B),F=P.next();!F.done;F=P.next())M=F.value,R.push_back(M);f.i.changeOptions(R),R.delete(),f.B=void 0}f.s=!1,G.g=0}})}r.initialize=function(){var f=this;return W(function(b){return b.g==1?k(b,ES(f),2):b.g!=3?k(b,$S(f),3):k(b,IS(f),0)})};function Gi(f,b){var C,I;return W(function(R){return b in f.H?R.return(f.H[b]):(C=f.locateFile(b,""),I=fetch(C).then(function(P){return P.arrayBuffer()}),f.H[b]=I,R.return(I))})}r.overrideFile=function(f,b){this.i?this.i.overrideFile(f,b):this.C[f]=b},r.clearOverriddenFiles=function(){this.C={},this.i&&this.i.clearOverriddenFiles()},r.send=function(f,b){var C=this,I,R,P,F,M,G,K,J,at;return W(function(ut){switch(ut.g){case 1:return C.g.inputs?(I=1e3*(b??performance.now()),k(ut,C.D,2)):ut.return();case 2:return k(ut,C.initialize(),3);case 3:for(R=new C.h.PacketDataList,P=a(Object.keys(f)),F=P.next();!F.done;F=P.next())if(M=F.value,G=C.g.inputs[M]){t:{var tt=f[M];switch(G.type){case"video":var ft=C.o[G.stream];if(ft||(ft=new Am(C.h,C.G),C.o[G.stream]=ft),ft.l===0&&(ft.l=ft.h.createTexture()),typeof HTMLVideoElement<"u"&&tt instanceof HTMLVideoElement)var Ct=tt.videoWidth,Vt=tt.videoHeight;else typeof HTMLImageElement<"u"&&tt instanceof HTMLImageElement?(Ct=tt.naturalWidth,Vt=tt.naturalHeight):(Ct=tt.width,Vt=tt.height);Vt={glName:ft.l,width:Ct,height:Vt},Ct=ft.g,Ct.canvas.width=Vt.width,Ct.canvas.height=Vt.height,Ct.activeTexture(Ct.TEXTURE0),ft.h.bindTexture2d(ft.l),Ct.texImage2D(Ct.TEXTURE_2D,0,Ct.RGBA,Ct.RGBA,Ct.UNSIGNED_BYTE,tt),ft.h.bindTexture2d(0),ft=Vt;break t;case"detections":for(ft=C.o[G.stream],ft||(ft=new wS(C.h),C.o[G.stream]=ft),ft.data||(ft.data=new ft.g.DetectionListData),ft.data.reset(tt.length),Vt=0;Vt<tt.length;++Vt){Ct=tt[Vt];var Ft=ft.data,ie=Ft.setBoundingBox,ze=Vt,Ne=Ct.boundingBox,Nt=new _m;if(Zt(Nt,1,Ne.xCenter),Zt(Nt,2,Ne.yCenter),Zt(Nt,3,Ne.height),Zt(Nt,4,Ne.width),Zt(Nt,5,Ne.rotation),Zt(Nt,6,Ne.rectId),Ne=Im(Nt,ng),ie.call(Ft,ze,Ne),Ct.landmarks)for(Ft=0;Ft<Ct.landmarks.length;++Ft){Nt=Ct.landmarks[Ft];var Jt=!!Nt.visibility;ie=ft.data,ze=ie.addNormalizedLandmark,Ne=Vt,Nt=Object.assign(Object.assign({},Nt),{visibility:Jt?Nt.visibility:0}),Jt=new Ui,Zt(Jt,1,Nt.x),Zt(Jt,2,Nt.y),Zt(Jt,3,Nt.z),Nt.visibility&&Zt(Jt,4,Nt.visibility),Nt=Im(Jt,rg),ze.call(ie,Ne,Nt)}if(Ct.V)for(Ft=0;Ft<Ct.V.length;++Ft)ie=ft.data,ze=ie.addClassification,Ne=Vt,Nt=Ct.V[Ft],Jt=new Rs,Zt(Jt,2,Nt.ga),Nt.index&&Zt(Jt,1,Nt.index),Nt.label&&Zt(Jt,3,Nt.label),Nt.displayName&&Zt(Jt,4,Nt.displayName),Nt=Im(Jt,eg),ze.call(ie,Ne,Nt)}ft=ft.data;break t;default:ft={}}}switch(K=ft,J=G.stream,G.type){case"video":R.pushTexture2d(Object.assign(Object.assign({},K),{stream:J,timestamp:I}));break;case"detections":at=K,at.stream=J,at.timestamp=I,R.pushDetectionList(at);break;default:throw Error("Unknown input config type: '"+G.type+"'")}}return C.i.send(R),k(ut,C.D,4);case 4:R.delete(),ut.g=0}})};function kS(f,b,C){var I,R,P,F,M,G,K,J,at,ut,tt,ft,Ct,Vt;return W(function(Ft){switch(Ft.g){case 1:if(!C)return Ft.return(b);for(I={},R=0,P=a(Object.keys(C)),F=P.next();!F.done;F=P.next())M=F.value,G=C[M],typeof G!="string"&&G.type==="texture"&&b[G.stream]!==void 0&&++R;1<R&&(f.I=!1),K=a(Object.keys(C)),F=K.next();case 2:if(F.done){Ft.g=4;break}if(J=F.value,at=C[J],typeof at=="string")return Ct=I,Vt=J,k(Ft,_S(f,J,b[at]),14);if(ut=b[at.stream],at.type==="detection_list"){if(ut){for(var ie=ut.getRectList(),ze=ut.getLandmarksList(),Ne=ut.getClassificationsList(),Nt=[],Jt=0;Jt<ie.size();++Jt){var Xr=$m(ie.get(Jt),_m,ng);Xr={boundingBox:{xCenter:yr(Xr,1),yCenter:yr(Xr,2),height:yr(Xr,3),width:yr(Xr,4),rotation:yr(Xr,5,0),rectId:Dh(Xr,6)},landmarks:Pi($m(ze.get(Jt),og,hS),Ui,1).map(bS),V:yS($m(Ne.get(Jt),km,fS))},Nt.push(Xr)}ie=Nt}else ie=[];I[J]=ie,Ft.g=7;break}if(at.type==="proto_list"){if(ut){for(ie=Array(ut.size()),ze=0;ze<ut.size();ze++)ie[ze]=ut.get(ze);ut.delete()}else ie=[];I[J]=ie,Ft.g=7;break}if(ut===void 0){Ft.g=3;break}if(at.type==="float_list"){I[J]=ut,Ft.g=7;break}if(at.type==="proto"){I[J]=ut,Ft.g=7;break}if(at.type!=="texture")throw Error("Unknown output config type: '"+at.type+"'");return tt=f.u[J],tt||(tt=new Am(f.h,f.G),f.u[J]=tt),k(Ft,mg(tt,ut,f.I),13);case 13:ft=Ft.h,I[J]=ft;case 7:at.transform&&I[J]&&(I[J]=at.transform(I[J])),Ft.g=3;break;case 14:Ct[Vt]=Ft.h;case 3:F=K.next(),Ft.g=2;break;case 4:return Ft.return(I)}})}function _S(f,b,C){var I;return W(function(R){return typeof C=="number"||C instanceof Uint8Array||C instanceof f.h.Uint8BlobList?R.return(C):C instanceof f.h.Texture2dDataOut?(I=f.u[b],I||(I=new Am(f.h,f.G),f.u[b]=I),R.return(mg(I,C,f.I))):R.return(void 0)})}function AS(f,b){for(var C=b.name||"$",I=[].concat(u(b.wants)),R=new f.h.StringList,P=a(b.wants),F=P.next();!F.done;F=P.next())R.push_back(F.value);P=f.h.PacketListener.implement({onResults:function(M){for(var G={},K=0;K<b.wants.length;++K)G[I[K]]=M.get(K);var J=f.listeners[C];J&&(f.D=kS(f,G,b.outs).then(function(at){at=J(at);for(var ut=0;ut<b.wants.length;++ut){var tt=G[I[ut]];typeof tt=="object"&&tt.hasOwnProperty&&tt.hasOwnProperty("delete")&&tt.delete()}at&&(f.D=at)}))}}),f.i.attachMultiListener(R,P),R.delete()}r.onResults=function(f,b){this.listeners[b||"$"]=f},it("Solution",Rm),it("OptionType",{BOOL:0,NUMBER:1,ia:2,0:"BOOL",1:"NUMBER",2:"STRING"});function dg(f){var b=this;f=f||{};var C={url:"face_detection_short.binarypb"},I={type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}};this.g=new Rm({locateFile:f.locateFile,files:[{data:!0,url:"face_detection_short.binarypb"},{data:!0,url:"face_detection_short_range.tflite"},{simd:!0,url:"face_detection_solution_simd_wasm_bin.js"},{simd:!1,url:"face_detection_solution_wasm_bin.js"}],graph:C,listeners:[{wants:["detections","image_transformed"],outs:{image:"image_transformed",detections:{type:"detection_list",stream:"detections"}}}],inputs:{image:{type:"video",stream:"input_frames_gpu"}},options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},model:{type:0,onChange:function(R){var P,F,M,G,K,J;return W(function(at){switch(at.g){case 1:P=R==="short"?["face_detection_short_range.tflite"]:["face_detection_full_range_sparse.tflite"],F=a(P),M=F.next();case 2:if(M.done){at.g=4;break}return G=M.value,K="third_party/mediapipe/modules/face_detection/"+G,k(at,Gi(b.g,G),5);case 5:J=at.h,b.g.overrideFile(K,J),M=F.next(),at.g=2;break;case 4:return C.url=R==="short"?"face_detection_short.binarypb":"face_detection_full.binarypb",I.graphOptionXref.calculatorName=R==="short"?"facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator":"facedetectionfullrangegpu__facedetectionfullrangecommon__TensorsToDetectionsCalculator",at.return(!0)}})}},minDetectionConfidence:I}})}r=dg.prototype,r.close=function(){return this.g.close(),Promise.resolve()},r.onResults=function(f){this.g.onResults(f)},r.initialize=function(){var f=this;return W(function(b){return k(b,f.g.initialize(),0)})},r.reset=function(){this.g.reset()},r.send=function(f){var b=this;return W(function(C){return k(C,b.g.send(f),0)})},r.setOptions=function(f){this.g.setOptions(f)},it("FaceDetection",dg),it("FACEDETECTION_LIPS",sg),it("FACEDETECTION_LEFT_EYE",ig),it("FACEDETECTION_LEFT_EYEBROW",ag),it("FACEDETECTION_RIGHT_EYE",ug),it("FACEDETECTION_RIGHT_EYEBROW",cg),it("FACEDETECTION_FACE_OVAL",lg),it("FACEDETECTION_CONTOURS",xS),it("FACEDETECTION_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]]),it("VERSION","0.4.1646425229")}).call(hg)});var Kg=De((fL,Hg)=>{Hg.exports=Ot;var Ke=null;try{Ke=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Ot(r,t,e){this.low=r|0,this.high=t|0,this.unsigned=!!e}Ot.prototype.__isLong__;Object.defineProperty(Ot.prototype,"__isLong__",{value:!0});function Ie(r){return(r&&r.__isLong__)===!0}Ot.isLong=Ie;var Pg={},Lg={};function ko(r,t){var e,o,n;return t?(r>>>=0,(n=0<=r&&r<256)&&(o=Lg[r],o)?o:(e=Pt(r,(r|0)<0?-1:0,!0),n&&(Lg[r]=e),e)):(r|=0,(n=-128<=r&&r<128)&&(o=Pg[r],o)?o:(e=Pt(r,r<0?-1:0,!1),n&&(Pg[r]=e),e))}Ot.fromInt=ko;function qe(r,t){if(isNaN(r))return t?Io:je;if(t){if(r<0)return Io;if(r>=Ug)return zg}else{if(r<=-Vg)return $e;if(r+1>=Vg)return Wg}return r<0?qe(-r,t).neg():Pt(r%Gn|0,r/Gn|0,t)}Ot.fromNumber=qe;function Pt(r,t,e){return new Ot(r,t,e)}Ot.fromBits=Pt;var ic=Math.pow;function qm(r,t,e){if(r.length===0)throw Error("empty string");if(r==="NaN"||r==="Infinity"||r==="+Infinity"||r==="-Infinity")return je;if(typeof t=="number"?(e=t,t=!1):t=!!t,e=e||10,e<2||36<e)throw RangeError("radix");var o;if((o=r.indexOf("-"))>0)throw Error("interior hyphen");if(o===0)return qm(r.substring(1),t,e).neg();for(var n=qe(ic(e,8)),s=je,i=0;i<r.length;i+=8){var a=Math.min(8,r.length-i),u=parseInt(r.substring(i,i+a),e);if(a<8){var c=qe(ic(e,a));s=s.mul(c).add(qe(u))}else s=s.mul(n),s=s.add(qe(u))}return s.unsigned=t,s}Ot.fromString=qm;function ir(r,t){return typeof r=="number"?qe(r,t):typeof r=="string"?qm(r,t):Pt(r.low,r.high,typeof t=="boolean"?t:r.unsigned)}Ot.fromValue=ir;var Bg=1<<16,iN=1<<24,Gn=Bg*Bg,Ug=Gn*Gn,Vg=Ug/2,Mg=ko(iN),je=ko(0);Ot.ZERO=je;var Io=ko(0,!0);Ot.UZERO=Io;var Un=ko(1);Ot.ONE=Un;var Gg=ko(1,!0);Ot.UONE=Gg;var Km=ko(-1);Ot.NEG_ONE=Km;var Wg=Pt(-1,2147483647,!1);Ot.MAX_VALUE=Wg;var zg=Pt(-1,-1,!0);Ot.MAX_UNSIGNED_VALUE=zg;var $e=Pt(0,-2147483648,!1);Ot.MIN_VALUE=$e;var q=Ot.prototype;q.toInt=function(){return this.unsigned?this.low>>>0:this.low};q.toNumber=function(){return this.unsigned?(this.high>>>0)*Gn+(this.low>>>0):this.high*Gn+(this.low>>>0)};q.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq($e)){var e=qe(t),o=this.div(e),n=o.mul(e).sub(this);return o.toString(t)+n.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var s=qe(ic(t,6),this.unsigned),i=this,a="";;){var u=i.div(s),c=i.sub(u.mul(s)).toInt()>>>0,l=c.toString(t);if(i=u,i.isZero())return l+a;for(;l.length<6;)l="0"+l;a=""+l+a}};q.getHighBits=function(){return this.high};q.getHighBitsUnsigned=function(){return this.high>>>0};q.getLowBits=function(){return this.low};q.getLowBitsUnsigned=function(){return this.low>>>0};q.getNumBitsAbs=function(){if(this.isNegative())return this.eq($e)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,e=31;e>0&&(t&1<<e)==0;e--);return this.high!=0?e+33:e+1};q.isZero=function(){return this.high===0&&this.low===0};q.eqz=q.isZero;q.isNegative=function(){return!this.unsigned&&this.high<0};q.isPositive=function(){return this.unsigned||this.high>=0};q.isOdd=function(){return(this.low&1)===1};q.isEven=function(){return(this.low&1)===0};q.equals=function(t){return Ie(t)||(t=ir(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};q.eq=q.equals;q.notEquals=function(t){return!this.eq(t)};q.neq=q.notEquals;q.ne=q.notEquals;q.lessThan=function(t){return this.comp(t)<0};q.lt=q.lessThan;q.lessThanOrEqual=function(t){return this.comp(t)<=0};q.lte=q.lessThanOrEqual;q.le=q.lessThanOrEqual;q.greaterThan=function(t){return this.comp(t)>0};q.gt=q.greaterThan;q.greaterThanOrEqual=function(t){return this.comp(t)>=0};q.gte=q.greaterThanOrEqual;q.ge=q.greaterThanOrEqual;q.compare=function(t){if(Ie(t)||(t=ir(t)),this.eq(t))return 0;var e=this.isNegative(),o=t.isNegative();return e&&!o?-1:!e&&o?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};q.comp=q.compare;q.negate=function(){return!this.unsigned&&this.eq($e)?$e:this.not().add(Un)};q.neg=q.negate;q.add=function(t){Ie(t)||(t=ir(t));var e=this.high>>>16,o=this.high&65535,n=this.low>>>16,s=this.low&65535,i=t.high>>>16,a=t.high&65535,u=t.low>>>16,c=t.low&65535,l=0,p=0,m=0,d=0;return d+=s+c,m+=d>>>16,d&=65535,m+=n+u,p+=m>>>16,m&=65535,p+=o+a,l+=p>>>16,p&=65535,l+=e+i,l&=65535,Pt(m<<16|d,l<<16|p,this.unsigned)};q.subtract=function(t){return Ie(t)||(t=ir(t)),this.add(t.neg())};q.sub=q.subtract;q.multiply=function(t){if(this.isZero())return je;if(Ie(t)||(t=ir(t)),Ke){var e=Ke.mul(this.low,this.high,t.low,t.high);return Pt(e,Ke.get_high(),this.unsigned)}if(t.isZero())return je;if(this.eq($e))return t.isOdd()?$e:je;if(t.eq($e))return this.isOdd()?$e:je;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(Mg)&&t.lt(Mg))return qe(this.toNumber()*t.toNumber(),this.unsigned);var o=this.high>>>16,n=this.high&65535,s=this.low>>>16,i=this.low&65535,a=t.high>>>16,u=t.high&65535,c=t.low>>>16,l=t.low&65535,p=0,m=0,d=0,h=0;return h+=i*l,d+=h>>>16,h&=65535,d+=s*l,m+=d>>>16,d&=65535,d+=i*c,m+=d>>>16,d&=65535,m+=n*l,p+=m>>>16,m&=65535,m+=s*c,p+=m>>>16,m&=65535,m+=i*u,p+=m>>>16,m&=65535,p+=o*l+n*c+s*u+i*a,p&=65535,Pt(d<<16|h,p<<16|m,this.unsigned)};q.mul=q.multiply;q.divide=function(t){if(Ie(t)||(t=ir(t)),t.isZero())throw Error("division by zero");if(Ke){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var e=(this.unsigned?Ke.div_u:Ke.div_s)(this.low,this.high,t.low,t.high);return Pt(e,Ke.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?Io:je;var o,n,s;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return Io;if(t.gt(this.shru(1)))return Gg;s=Io}else{if(this.eq($e)){if(t.eq(Un)||t.eq(Km))return $e;if(t.eq($e))return Un;var i=this.shr(1);return o=i.div(t).shl(1),o.eq(je)?t.isNegative()?Un:Km:(n=this.sub(t.mul(o)),s=o.add(n.div(t)),s)}else if(t.eq($e))return this.unsigned?Io:je;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();s=je}for(n=this;n.gte(t);){o=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var a=Math.ceil(Math.log(o)/Math.LN2),u=a<=48?1:ic(2,a-48),c=qe(o),l=c.mul(t);l.isNegative()||l.gt(n);)o-=u,c=qe(o,this.unsigned),l=c.mul(t);c.isZero()&&(c=Un),s=s.add(c),n=n.sub(l)}return s};q.div=q.divide;q.modulo=function(t){if(Ie(t)||(t=ir(t)),Ke){var e=(this.unsigned?Ke.rem_u:Ke.rem_s)(this.low,this.high,t.low,t.high);return Pt(e,Ke.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};q.mod=q.modulo;q.rem=q.modulo;q.not=function(){return Pt(~this.low,~this.high,this.unsigned)};q.and=function(t){return Ie(t)||(t=ir(t)),Pt(this.low&t.low,this.high&t.high,this.unsigned)};q.or=function(t){return Ie(t)||(t=ir(t)),Pt(this.low|t.low,this.high|t.high,this.unsigned)};q.xor=function(t){return Ie(t)||(t=ir(t)),Pt(this.low^t.low,this.high^t.high,this.unsigned)};q.shiftLeft=function(t){return Ie(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Pt(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):Pt(0,this.low<<t-32,this.unsigned)};q.shl=q.shiftLeft;q.shiftRight=function(t){return Ie(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?Pt(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):Pt(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};q.shr=q.shiftRight;q.shiftRightUnsigned=function(t){if(Ie(t)&&(t=t.toInt()),t&=63,t===0)return this;var e=this.high;if(t<32){var o=this.low;return Pt(o>>>t|e<<32-t,e>>>t,this.unsigned)}else return t===32?Pt(e,0,this.unsigned):Pt(e>>>t-32,0,this.unsigned)};q.shru=q.shiftRightUnsigned;q.shr_u=q.shiftRightUnsigned;q.toSigned=function(){return this.unsigned?Pt(this.low,this.high,!1):this};q.toUnsigned=function(){return this.unsigned?this:Pt(this.low,this.high,!0)};q.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};q.toBytesLE=function(){var t=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};q.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,e>>>24,e>>>16&255,e>>>8&255,e&255]};Ot.fromBytes=function(t,e,o){return o?Ot.fromBytesLE(t,e):Ot.fromBytesBE(t,e)};Ot.fromBytesLE=function(t,e){return new Ot(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)};Ot.fromBytesBE=function(t,e){return new Ot(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)}});var $x=De(()=>{});var Ix=De(()=>{});var v0=De((b0,kf)=>{(function(r,t,e){function o(a){var u=this,c=i();u.next=function(){var l=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=l-(u.c=l|0)},u.c=1,u.s0=c(" "),u.s1=c(" "),u.s2=c(" "),u.s0-=c(a),u.s0<0&&(u.s0+=1),u.s1-=c(a),u.s1<0&&(u.s1+=1),u.s2-=c(a),u.s2<0&&(u.s2+=1),c=null}function n(a,u){return u.c=a.c,u.s0=a.s0,u.s1=a.s1,u.s2=a.s2,u}function s(a,u){var c=new o(a),l=u&&u.state,p=c.next;return p.int32=function(){return c.next()*4294967296|0},p.double=function(){return p()+(p()*2097152|0)*11102230246251565e-32},p.quick=p,l&&(typeof l=="object"&&n(l,c),p.state=function(){return n(c,{})}),p}function i(){var a=4022871197,u=function(c){c=String(c);for(var l=0;l<c.length;l++){a+=c.charCodeAt(l);var p=.02519603282416938*a;a=p>>>0,p-=a,p*=a,a=p>>>0,p-=a,a+=p*4294967296}return(a>>>0)*23283064365386963e-26};return u}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.alea=s})(b0,typeof kf=="object"&&kf,typeof define=="function"&&define)});var T0=De((w0,_f)=>{(function(r,t,e){function o(i){var a=this,u="";a.x=0,a.y=0,a.z=0,a.w=0,a.next=function(){var l=a.x^a.x<<11;return a.x=a.y,a.y=a.z,a.z=a.w,a.w^=a.w>>>19^l^l>>>8},i===(i|0)?a.x=i:u+=i;for(var c=0;c<u.length+64;c++)a.x^=u.charCodeAt(c)|0,a.next()}function n(i,a){return a.x=i.x,a.y=i.y,a.z=i.z,a.w=i.w,a}function s(i,a){var u=new o(i),c=a&&a.state,l=function(){return(u.next()>>>0)/4294967296};return l.double=function(){do var p=u.next()>>>11,m=(u.next()>>>0)/4294967296,d=(p+m)/(1<<21);while(d===0);return d},l.int32=u.next,l.quick=l,c&&(typeof c=="object"&&n(c,u),l.state=function(){return n(u,{})}),l}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.xor128=s})(w0,typeof _f=="object"&&_f,typeof define=="function"&&define)});var S0=De((C0,Af)=>{(function(r,t,e){function o(i){var a=this,u="";a.next=function(){var l=a.x^a.x>>>2;return a.x=a.y,a.y=a.z,a.z=a.w,a.w=a.v,(a.d=a.d+362437|0)+(a.v=a.v^a.v<<4^(l^l<<1))|0},a.x=0,a.y=0,a.z=0,a.w=0,a.v=0,i===(i|0)?a.x=i:u+=i;for(var c=0;c<u.length+64;c++)a.x^=u.charCodeAt(c)|0,c==u.length&&(a.d=a.x<<10^a.x>>>4),a.next()}function n(i,a){return a.x=i.x,a.y=i.y,a.z=i.z,a.w=i.w,a.v=i.v,a.d=i.d,a}function s(i,a){var u=new o(i),c=a&&a.state,l=function(){return(u.next()>>>0)/4294967296};return l.double=function(){do var p=u.next()>>>11,m=(u.next()>>>0)/4294967296,d=(p+m)/(1<<21);while(d===0);return d},l.int32=u.next,l.quick=l,c&&(typeof c=="object"&&n(c,u),l.state=function(){return n(u,{})}),l}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.xorwow=s})(C0,typeof Af=="object"&&Af,typeof define=="function"&&define)});var E0=De((N0,Rf)=>{(function(r,t,e){function o(i){var a=this;a.next=function(){var c=a.x,l=a.i,p,m,d;return p=c[l],p^=p>>>7,m=p^p<<24,p=c[l+1&7],m^=p^p>>>10,p=c[l+3&7],m^=p^p>>>3,p=c[l+4&7],m^=p^p<<7,p=c[l+7&7],p=p^p<<13,m^=p^p<<9,c[l]=m,a.i=l+1&7,m};function u(c,l){var p,m,d=[];if(l===(l|0))m=d[0]=l;else for(l=""+l,p=0;p<l.length;++p)d[p&7]=d[p&7]<<15^l.charCodeAt(p)+d[p+1&7]<<13;for(;d.length<8;)d.push(0);for(p=0;p<8&&d[p]===0;++p);for(p==8?m=d[7]=-1:m=d[p],c.x=d,c.i=0,p=256;p>0;--p)c.next()}u(a,i)}function n(i,a){return a.x=i.x.slice(),a.i=i.i,a}function s(i,a){i==null&&(i=+new Date);var u=new o(i),c=a&&a.state,l=function(){return(u.next()>>>0)/4294967296};return l.double=function(){do var p=u.next()>>>11,m=(u.next()>>>0)/4294967296,d=(p+m)/(1<<21);while(d===0);return d},l.int32=u.next,l.quick=l,c&&(c.x&&n(c,u),l.state=function(){return n(u,{})}),l}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.xorshift7=s})(N0,typeof Rf=="object"&&Rf,typeof define=="function"&&define)});var I0=De(($0,Df)=>{(function(r,t,e){function o(i){var a=this;a.next=function(){var c=a.w,l=a.X,p=a.i,m,d;return a.w=c=c+1640531527|0,d=l[p+34&127],m=l[p=p+1&127],d^=d<<13,m^=m<<17,d^=d>>>15,m^=m>>>12,d=l[p]=d^m,a.i=p,d+(c^c>>>16)|0};function u(c,l){var p,m,d,h,g,x=[],w=128;for(l===(l|0)?(m=l,l=null):(l=l+"\0",m=0,w=Math.max(w,l.length)),d=0,h=-32;h<w;++h)l&&(m^=l.charCodeAt((h+32)%l.length)),h===0&&(g=m),m^=m<<10,m^=m>>>15,m^=m<<4,m^=m>>>13,h>=0&&(g=g+1640531527|0,p=x[h&127]^=m+g,d=p==0?d+1:0);for(d>=128&&(x[(l&&l.length||0)&127]=-1),d=127,h=4*128;h>0;--h)m=x[d+34&127],p=x[d=d+1&127],m^=m<<13,p^=p<<17,m^=m>>>15,p^=p>>>12,x[d]=m^p;c.w=g,c.X=x,c.i=d}u(a,i)}function n(i,a){return a.i=i.i,a.w=i.w,a.X=i.X.slice(),a}function s(i,a){i==null&&(i=+new Date);var u=new o(i),c=a&&a.state,l=function(){return(u.next()>>>0)/4294967296};return l.double=function(){do var p=u.next()>>>11,m=(u.next()>>>0)/4294967296,d=(p+m)/(1<<21);while(d===0);return d},l.int32=u.next,l.quick=l,c&&(c.X&&n(c,u),l.state=function(){return n(u,{})}),l}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.xor4096=s})($0,typeof Df=="object"&&Df,typeof define=="function"&&define)});var _0=De((k0,Ff)=>{(function(r,t,e){function o(i){var a=this,u="";a.next=function(){var l=a.b,p=a.c,m=a.d,d=a.a;return l=l<<25^l>>>7^p,p=p-m|0,m=m<<24^m>>>8^d,d=d-l|0,a.b=l=l<<20^l>>>12^p,a.c=p=p-m|0,a.d=m<<16^p>>>16^d,a.a=d-l|0},a.a=0,a.b=0,a.c=-1640531527,a.d=1367130551,i===Math.floor(i)?(a.a=i/4294967296|0,a.b=i|0):u+=i;for(var c=0;c<u.length+20;c++)a.b^=u.charCodeAt(c)|0,a.next()}function n(i,a){return a.a=i.a,a.b=i.b,a.c=i.c,a.d=i.d,a}function s(i,a){var u=new o(i),c=a&&a.state,l=function(){return(u.next()>>>0)/4294967296};return l.double=function(){do var p=u.next()>>>11,m=(u.next()>>>0)/4294967296,d=(p+m)/(1<<21);while(d===0);return d},l.int32=u.next,l.quick=l,c&&(typeof c=="object"&&n(c,u),l.state=function(){return n(u,{})}),l}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.tychei=s})(k0,typeof Ff=="object"&&Ff,typeof define=="function"&&define)});var A0=De(()=>{});var D0=De((R0,Yc)=>{(function(r,t,e){var o=256,n=6,s=52,i="random",a=e.pow(o,n),u=e.pow(2,s),c=u*2,l=o-1,p;function m(k,_,D){var B=[];_=_==!0?{entropy:!0}:_||{};var V=x(g(_.entropy?[k,N(t)]:k??w(),3),B),U=new d(B),H=function(){for(var W=U.g(n),j=a,Z=0;W<u;)W=(W+Z)*o,j*=o,Z=U.g(1);for(;W>=c;)W/=2,j/=2,Z>>>=1;return(W+Z)/j};return H.int32=function(){return U.g(4)|0},H.quick=function(){return U.g(4)/4294967296},H.double=H,x(N(U.S),t),(_.pass||D||function(W,j,Z,lt){return lt&&(lt.S&&h(lt,U),W.state=function(){return h(U,{})}),Z?(e[i]=W,j):W})(H,V,"global"in _?_.global:this==e,_.state)}function d(k){var _,D=k.length,B=this,V=0,U=B.i=B.j=0,H=B.S=[];for(D||(k=[D++]);V<o;)H[V]=V++;for(V=0;V<o;V++)H[V]=H[U=l&U+k[V%D]+(_=H[V])],H[U]=_;(B.g=function(W){for(var j,Z=0,lt=B.i,it=B.j,mt=B.S;W--;)j=mt[lt=l&lt+1],Z=Z*o+mt[l&(mt[lt]=mt[it=l&it+j])+(mt[it]=j)];return B.i=lt,B.j=it,Z})(o)}function h(k,_){return _.i=k.i,_.j=k.j,_.S=k.S.slice(),_}function g(k,_){var D=[],B=typeof k,V;if(_&&B=="object")for(V in k)try{D.push(g(k[V],_-1))}catch{}return D.length?D:B=="string"?k:k+"\0"}function x(k,_){for(var D=k+"",B,V=0;V<D.length;)_[l&V]=l&(B^=_[l&V]*19)+D.charCodeAt(V++);return N(_)}function w(){try{var k;return p&&(k=p.randomBytes)?k=k(o):(k=new Uint8Array(o),(r.crypto||r.msCrypto).getRandomValues(k)),N(k)}catch{var _=r.navigator,D=_&&_.plugins;return[+new Date,r,D,r.screen,N(t)]}}function N(k){return String.fromCharCode.apply(0,k)}if(x(e.random(),t),typeof Yc=="object"&&Yc.exports){Yc.exports=m;try{p=A0()}catch{}}else typeof define=="function"&&define.amd?define(function(){return m}):e["seed"+i]=m})(typeof self<"u"?self:R0,[],Math)});var O0=De((xY,F0)=>{var r4=v0(),o4=T0(),n4=S0(),s4=E0(),i4=I0(),a4=_0(),Ho=D0();Ho.alea=r4;Ho.xor128=o4;Ho.xorwow=n4;Ho.xorshift7=s4;Ho.xor4096=i4;Ho.tychei=a4;F0.exports=Ho});var Ds=class{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}},Co=class{refCount(t){return Fe("refCount")}incRef(t){return Fe("incRef")}timerAvailable(){return!0}time(t){return Fe("time")}read(t){return Fe("read")}readSync(t){return Fe("readSync")}readToGPU(t,e){return Fe("readToGPU")}numDataIds(){return Fe("numDataIds")}disposeData(t,e){return Fe("disposeData")}write(t,e,o){return Fe("write")}move(t,e,o,n,s){return Fe("move")}memory(){return Fe("memory")}floatPrecision(){return Fe("floatPrecision")}epsilon(){return this.floatPrecision()===32?1e-7:1e-4}dispose(){return Fe("dispose")}};function Fe(r){throw new Error(`'${r}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function xg(r){let t=r.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,Wi(r,t,e)}function BS(r,t){if(r.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${r.length}Second array length was ${t.length}`);let e=r.length,o=0;for(;e>0;)o=Math.random()*e|0,e--,Wi(r,e,o),Wi(t,e,o)}function hn(r,t,e){return Math.max(r,Math.min(t,e))}function VS(r){return r%2===0?r:r+1}function Wi(r,t,e){let o=r[t];r[t]=r[e],r[e]=o}function MS(r){let t=0;for(let e=0;e<r.length;e++)t+=r[e];return t}function US(r,t){let e=Math.random();return t*e+(1-e)*r}function GS(r,t){let e=0;for(let o=0;o<r.length;o++){let n=Number(r[o])-Number(t[o]);e+=n*n}return e}function $(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function Wt(r,t,e=""){$(He(r,t),()=>e+` Shapes ${r} and ${t} must match`)}function Oe(r){$(r!=null,()=>"The input to the tensor constructor must be a non-null value.")}function Yr(r,t=[],e=!1){if(t==null&&(t=[]),Array.isArray(r)||Ee(r)&&!e)for(let o=0;o<r.length;++o)Yr(r[o],t,e);else t.push(r);return t}function dt(r){if(r.length===0)return 1;let t=r[0];for(let e=1;e<r.length;e++)t*=r[e];return t}function WS(r){return r.length===0}function He(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Dr(r){return r%1===0}function zS(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;{let t=Math.exp(2*r);return(t-1)/(t+1)}}function HS(r){let t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function KS(r){let t=new Uint32Array(r);for(let e=0;e<r;++e)t[e]=e;return xg(t),t}function No(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function qS(r,t=o=>0,e){return new Promise((o,n)=>{let s=0,i=()=>{if(r()){o();return}s++;let a=t(s);if(e!=null&&s>=e){n();return}setTimeout(i,a)};i()})}function jS(r,t){let e=1,o=-1;for(let s=0;s<r.length;++s)if(r[s]>=0)e*=r[s];else if(r[s]===-1){if(o!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${o} and dim ${s}`);o=s}else if(r[s]<0)throw Error(`Shapes can not be < 0. Found ${r[s]} at dim ${s}`);if(o===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${r}`);return r}if(e===0)throw Error(`Cannot infer the missing size in [${r}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);let n=r.slice();return n[o]=t/e,n}function Qr(r,t){let e=t.length;return r=r==null?t.map((o,n)=>n):[].concat(r),$(r.every(o=>o>=-e&&o<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${r}`),$(r.every(o=>Dr(o)),()=>`All values in axis param must be integers but got axis ${r}`),r.map(o=>o<0?e+o:o)}function Om(r,t){let e=[],o=[],n=t!=null&&Array.isArray(t)&&t.length===0,s=t==null||n?null:Qr(t,r).sort(),i=0;for(let a=0;a<r.length;++a){if(s!=null){if(s[i]===a&&r[a]!==1)throw new Error(`Can't squeeze axis ${a} since its dim '${r[a]}' is not 1`);(s[i]==null||s[i]>a)&&r[a]===1&&(e.push(r[a]),o.push(a)),s[i]<=a&&i++}r[a]!==1&&(e.push(r[a]),o.push(a))}return{newShape:e,keptDims:o}}function Pm(r,t){let e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else throw new Error(`Unknown data type ${r}`);return e}function Lm(r,t){let e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else if(r==="string")e=new Array(t);else throw new Error(`Unknown data type ${r}`);return e}function Bm(r,t){for(let e=0;e<r.length;e++){let o=r[e];if(isNaN(o)||!isFinite(o))throw Error(`A tensor of type ${t} being uploaded contains ${o}.`)}}function Vm(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function XS(r,t){return!(t==="complex64"||t==="float32"&&r!=="complex64"||t==="int32"&&r!=="float32"&&r!=="complex64"||t==="bool"&&r==="bool")}function Ee(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray}function zi(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error(`Unknown dtype ${r}`)}function Mm(r){if(r==null)return 0;let t=0;return r.forEach(e=>t+=e.length),t}function gn(r){return typeof r=="string"||r instanceof String}function yg(r){return typeof r=="boolean"}function bg(r){return typeof r=="number"}function xn(r){return Array.isArray(r)?xn(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray?"int32":bg(r)?"float32":gn(r)?"string":yg(r)?"bool":"float32"}function Hi(r){return!!(r&&r.constructor&&r.call&&r.apply)}function yn(r,t){for(let e=t;e<r;++e)if(r%e===0)return e;return r}function br(r){let t=r.length;if(t<2)return[];let e=new Array(t-1);e[t-2]=r[t-1];for(let o=t-3;o>=0;--o)e[o]=e[o+1]*r[o+1];return e}function vg(r,t,e,o=!1){let n=new Array;if(t.length===1){let s=t[0]*(o?2:1);for(let i=0;i<s;i++)n[i]=e[r+i]}else{let s=t[0],i=t.slice(1),a=i.reduce((u,c)=>u*c)*(o?2:1);for(let u=0;u<s;u++)n[u]=vg(r+u*a,i,e,o)}return n}function So(r,t,e=!1){if(r.length===0)return t[0];let o=r.reduce((n,s)=>n*s)*(e?2:1);if(o===0)return[];if(o!==t.length)throw new Error(`[${r}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return vg(0,r,t,e)}function Fs(r,t){let e=bn(r,t);for(let o=0;o<e.length;o++)e[o]=1;return e}function bn(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error(`Unknown data type ${t}`)}function YS(r,t){let e=r.reduce((o,n)=>o*n,1);if(t==null||t==="float32")return So(r,new Float32Array(e));if(t==="int32")return So(r,new Int32Array(e));if(t==="bool")return So(r,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function Os(r){r.forEach(t=>{$(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${r}].`)})}function QS(r,t,e){if(t===0)return 0;if(t===1)return r[0];let o=r[r.length-1];for(let n=0;n<r.length-1;++n)o+=e[n]*r[n];return o}function ZS(r,t,e){if(t===0)return[];if(t===1)return[r];let o=new Array(t);for(let n=0;n<o.length-1;++n)o[n]=Math.floor(r/e[n]),r-=o[n]*e[n];return o[o.length-1]=r,o}function Ps(r){return r&&r.then&&typeof r.then=="function"}var wg="tfjsflags",Ls=class{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=tN,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(O().getBool("IS_TEST")||O().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,o){if(this.flagRegistry[t]={evaluationFn:e,setHook:o},this.urlFlags[t]!=null){let n=this.urlFlags[t];O().getBool("IS_TEST")||O().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${n}.`),this.set(t,n)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];let e=this.evaluateFlag(t);if(Ps(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;let t=this.getQueryParams(this.global.location.search);wg in t&&t[wg].split(",").forEach(o=>{let[n,s]=o.split(":");this.urlFlags[n]=rN(n,s)})}};function tN(r){let t={};return r.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...o)=>(eN(t,o[0],o[1]),o.join("="))),t}function eN(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function rN(r,t){if(t=t.toLowerCase(),t==="true"||t==="false")return t==="true";if(`${+t}`===t)return+t;throw new Error(`Could not parse value flag value ${t} for flag ${r}.`)}function O(){return Um}var Um=null;function Tg(r){Um=r}var Gm;function Wm(){if(Gm==null){let r;if(typeof window<"u")r=window;else if(typeof global<"u")r=global;else if(typeof process<"u")r=process;else if(typeof self<"u")r=self;else throw new Error("Could not find a global object");Gm=r}return Gm}function oN(){let r=Wm();return r._tfGlobals==null&&(r._tfGlobals=new Map),r._tfGlobals}function Bs(r,t){let e=oN();if(e.has(r))return e.get(r);{let o=t();return e.set(r,o),e.get(r)}}var Vs="Abs",Ki="Acos",qi="Acosh",Zr="Add",ji="AddN",Xi="All",Yi="Any",Qi="ArgMax",Zi="ArgMin",Ji="Asin",ta="Asinh",ea="Atan",ra="Atanh",oa="Atan2",na="AvgPool",Cg="AvgPoolGrad",sa="AvgPool3D",Sg="AvgPool3DGrad",ia="BatchMatMul",aa="BatchToSpaceND",ua="Bincount";var ca="BroadcastArgs",Eo="Cast",vn="Ceil",la="ClipByValue",Ms="Complex",pa="ComplexAbs",ma="Concat",fa="Conv2D",da="Conv2DBackpropFilter",ha="Conv2DBackpropInput",ga="Conv3D",Ng="Conv3DBackpropFilterV2",xa="Conv3DBackpropInputV2",ya="Cos",ba="Cosh",va="Cumprod",wa="Cumsum",Ta="CropAndResize",Ca="DenseBincount",Sa="DepthToSpace",Na="DepthwiseConv2dNative",Ea="DepthwiseConv2dNativeBackpropFilter",$a="DepthwiseConv2dNativeBackpropInput",Ia="Diag",ka="Dilation2D";var _a="RealDiv",Aa="Einsum",Ra="Elu",Eg="EluGrad",Da="Erf",wn="Equal",Tn="Exp",Fa="ExpandDims",Cn="Expm1",Oa="FFT",Pa="Fill",La="FlipLeftRight",Sn="Floor",Ba="FloorDiv",Va="FusedBatchNorm",Ma="GatherV2",Ua="GatherNd",Nn="Greater",En="GreaterEqual",$o="Identity",Ga="IFFT",Wa="Imag",za="IsFinite",Ha="IsInf",Ka="IsNan",qa="LeakyRelu",$n="Less",In="LessEqual",ja="LinSpace",kn="Log",Xa="Log1p",Ya="LogicalAnd",Qa="LogicalNot",Za="LogicalOr";var Ja="LRN",$g="LRNGrad",tu="Max",_n="Maximum",eu="MaxPool",Ig="MaxPoolGrad",ru="MaxPool3D",kg="MaxPool3DGrad",ou="MaxPoolWithArgmax",nu="Mean",su="Min",An="Minimum",iu="MirrorPad",au="Mod",uu="Multinomial",Rn="Multiply",Us="Neg",Dn="NotEqual",cu="NonMaxSuppressionV3",lu="NonMaxSuppressionV4",pu="NonMaxSuppressionV5",mu="OnesLike",fu="OneHot",du="Pack",hu="PadV2";var gu="Pow",xu="Prelu",Gs="Prod",yu="RaggedTensorToTensor",bu="Range",Ws="Real",vu="Reciprocal",wu="Relu",Tu="Reshape",Cu="ResizeNearestNeighbor",_g="ResizeNearestNeighborGrad",Su="ResizeBilinear",Ag="ResizeBilinearGrad",Nu="Relu6",Eu="Reverse",$u="Round",Fn="Rsqrt",Iu="ScatterNd",ku="SearchSorted",_u="Select",Au="Selu",zs="Slice",Ru="Sin",Du="Sinh",Fu="Sign",On="Sigmoid",Ou="Softplus",Pn="Sqrt",Pu="Sum",Lu="SpaceToBatchND",Bu="SplitV",Vu="Softmax",Mu="SparseFillEmptyRows",Uu="SparseReshape",Gu="SparseSegmentMean",Wu="SparseSegmentSum",zu="SparseToDense",Ln="SquaredDifference",Rg="Square",Hu="StridedSlice",Ku="StringNGrams",qu="StringSplit",ju="StringToHashBucketFast",Bn="Sub",Xu="Tan",Yu="Tanh",Vn="Tile",Qu="TopK",Zu="Transform",Mn="Transpose",Ju="Unique",tc="Unpack",ec="UnsortedSegmentSum";var rc="ZerosLike",oc="Step",Hs="FromPixels",nc="RotateWithOffset",Ks="_FusedMatMul",qs="FusedConv2D",js="FusedDepthwiseConv2D";function Fr(...r){O().getBool("IS_TEST")||O().getBool("PROD")||console.warn(...r)}function nN(...r){O().getBool("IS_TEST")||O().getBool("PROD")||console.log(...r)}var sc=Bs("kernelRegistry",()=>new Map),sN=Bs("gradRegistry",()=>new Map);function Xs(r,t){let e=Og(r,t);return sc.get(e)}function zm(r){return sN.get(r)}function Hm(r){let t=sc.entries(),e=[];for(;;){let{done:o,value:n}=t.next();if(o)break;let[s,i]=n,[a]=s.split("_");a===r&&e.push(i)}return e}function Fg(r){let{kernelName:t,backendName:e}=r,o=Og(t,e);sc.has(o)&&Fr(`The kernel '${t}' for backend '${e}' is already registered`),sc.set(o,r)}function Og(r,t){return`${t}_${r}`}var S={};$t(S,{arraysEqual:()=>He,assert:()=>$,assertNonNegativeIntegerDimensions:()=>Os,assertNonNull:()=>Oe,assertShapesMatch:()=>Wt,bytesFromStringArray:()=>Mm,bytesPerElement:()=>zi,checkConversionForErrors:()=>Bm,clamp:()=>hn,computeStrides:()=>br,createScalarValue:()=>mN,createShuffledIndices:()=>KS,decodeString:()=>Hn,distSquared:()=>GS,encodeString:()=>zn,fetch:()=>dN,fingerPrint64:()=>pN,flatten:()=>Yr,getArrayFromDType:()=>Lm,getTypedArrayFromDType:()=>Pm,hasEncodingLoss:()=>XS,hexToLong:()=>Ys,indexToLoc:()=>ZS,inferDtype:()=>xn,inferFromImplicitShape:()=>jS,isBoolean:()=>yg,isFunction:()=>Hi,isInt:()=>Dr,isNumber:()=>bg,isPromise:()=>Ps,isScalarShape:()=>WS,isString:()=>gn,isTypedArray:()=>Ee,isValidDtype:()=>Vm,locToIndex:()=>QS,makeOnesTypedArray:()=>Fs,makeZerosNestedTypedArray:()=>YS,makeZerosTypedArray:()=>bn,nearestDivisor:()=>yn,nearestLargerEven:()=>VS,now:()=>Ro,parseAxisParam:()=>Qr,randUniform:()=>US,repeatedTry:()=>qS,rightPad:()=>No,shuffle:()=>xg,shuffleCombo:()=>BS,sizeFromShape:()=>dt,sizeToSquarishShape:()=>HS,squeezeShape:()=>Om,sum:()=>MS,swap:()=>Wi,tanh:()=>zS,toNestedArray:()=>So,toTypedArray:()=>Wn});var Xm=Fm(Kg());var Ao=Xm.default||Xm;function Ys(r){return Ao.fromString(r,!0,16)}var jg=Ys("c3a5c85c97cb3127"),_o=Ys("b492b66fbe98f273"),pe=Ys("9ae16a3b2f90404f");function jm(r){return r.xor(r.shru(47))}function Xg(r,t,e){let o=r.slice(t,t+e);return Ao.fromBytes(Array.from(o),!0,!0)}function Rt(r,t){return Xg(r,t,8)}function qg(r,t){return Xg(r,t,4)}function te(r,t){return t===0?r:r.shru(t).or(r.shl(64-t))}function Jr(r,t,e=Ys("9ddfea08eb382d69")){let o=r.xor(t).mul(e);o=o.xor(o.shru(47));let n=t.xor(o).mul(e);return n=n.xor(n.shru(47)),n=n.mul(e),n}function aN(r,t,e,o,n,s){n=n.add(r),s=te(s.add(n).add(o),21);let i=n;return n=n.add(t),n=n.add(e),s=s.add(te(n,44)),[n.add(o),s.add(i)]}function ac(r,t,e,o){return aN(Rt(r,t),Rt(r,t+8),Rt(r,t+16),Rt(r,t+24),e,o)}function uN(r,t=r.length){if(t>=8){let e=pe.add(t*2),o=Rt(r,0).add(pe),n=Rt(r,t-8),s=te(n,37).mul(e).add(o),i=te(o,25).add(n).mul(e);return Jr(s,i,e)}if(t>=4){let e=pe.add(t*2),o=qg(r,0);return Jr(o.shl(3).add(t),qg(r,t-4),e)}if(t>0){let e=r[0],o=r[t>>1],n=r[t-1],s=e+(o<<8),i=t+(n<<2);return jm(pe.mul(s).xor(jg.mul(i))).mul(pe)}return pe}function cN(r,t=r.length){let e=pe.add(t*2),o=Rt(r,0).mul(_o),n=Rt(r,8),s=Rt(r,t-8).mul(e),i=Rt(r,t-16).mul(pe);return Jr(te(o.add(n),43).add(te(s,30)).add(i),o.add(te(n.add(pe),18)).add(s),e)}function lN(r,t=r.length){let e=pe.add(t*2),o=Rt(r,0).mul(pe),n=Rt(r,8),s=Rt(r,t-8).mul(e),i=Rt(r,t-16).mul(pe),a=te(o.add(n),43).add(te(s,30)).add(i),u=Jr(a,o.add(te(n.add(pe),18)).add(s),e),c=Rt(r,16).mul(e),l=Rt(r,24),p=a.add(Rt(r,t-32)).mul(e),m=u.add(Rt(r,t-24)).mul(e);return Jr(te(c.add(l),43).add(te(p,30)).add(m),c.add(te(l.add(o),18)).add(p),e)}function pN(r,t=r.length){let e=Ao.fromNumber(81,!0);if(t<=32)return t<=16?uN(r,t):cN(r,t);if(t<=64)return lN(r,t);let o=e,n=e.mul(_o).add(113),s=jm(n.mul(pe).add(113)).mul(pe),i=[Ao.UZERO,Ao.UZERO],a=[Ao.UZERO,Ao.UZERO];o=o.mul(pe).add(Rt(r,0));let u=0,c=(t-1>>6)*64,l=c+(t-1&63)-63;do o=te(o.add(n).add(i[0]).add(Rt(r,u+8)),37).mul(_o),n=te(n.add(i[1]).add(Rt(r,u+48)),42).mul(_o),o=o.xor(a[1]),n=n.add(i[0]).add(Rt(r,u+40)),s=te(s.add(a[0]),33).mul(_o),i=ac(r,u,i[1].mul(_o),o.add(a[0])),a=ac(r,u+32,s.add(a[1]),n.add(Rt(r,u+16))),[s,o]=[o,s],u+=64;while(u!==c);let p=_o.add(s.and(255).shl(1));return u=l,a[0]=a[0].add(t-1&63),i[0]=i[0].add(a[0]),a[0]=a[0].add(i[0]),o=te(o.add(n).add(i[0]).add(Rt(r,u+8)),37).mul(p),n=te(n.add(i[1]).add(Rt(r,u+48)),42).mul(p),o=o.xor(a[1].mul(9)),n=n.add(i[0].mul(9).add(Rt(r,u+40))),s=te(s.add(a[0]),33).mul(p),i=ac(r,u,i[1].mul(p),o.add(a[0])),a=ac(r,u+32,s.add(a[1]),n.add(Rt(r,u+16))),[s,o]=[o,s],Jr(Jr(i[0],a[0],p).add(jm(n).mul(jg)).add(s),Jr(i[1],a[1],p).add(o),p)}function mN(r,t){return t==="string"?zn(r):Wn([r],t)}function fN(r,t){return r instanceof Float32Array&&t==="float32"||r instanceof Int32Array&&t==="int32"||r instanceof Uint8Array&&t==="bool"}function Wn(r,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Yr(r)),O().getBool("DEBUG")&&Bm(r,t),fN(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){let e=new Uint8Array(r.length);for(let o=0;o<e.length;++o)Math.round(r[o])!==0&&(e[o]=1);return e}else throw new Error(`Unknown data type ${t}`)}function Ro(){return O().platform.now()}function dN(r,t){return O().platform.fetch(r,t)}function zn(r,t="utf-8"){return t=t||"utf-8",O().platform.encode(r,t)}function Hn(r,t="utf-8"){return t=t||"utf-8",O().platform.decode(r,t)}var uc=class{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Ym)}profileKernel(t,e,o){let n,s=()=>{n=o()},i,a=Ro();if(this.backendTimer.timerAvailable())i=this.backendTimer.time(s);else{s();for(let c of n)c.dataSync();i=Promise.resolve({kernelMs:Ro()-a})}if(O().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let c=0;c<n.length;c++){let l=n[c];l.data().then(p=>{hN(p,l.dtype,t)})}return{kernelName:t,outputs:n,inputs:e,timeMs:i.then(c=>c.kernelMs),extraInfo:i.then(c=>c.getExtraProfileInfo!=null?c.getExtraProfileInfo():"")}}logKernelProfile(t){let{kernelName:e,outputs:o,timeMs:n,inputs:s,extraInfo:i}=t;o.forEach(a=>{Promise.all([a.data(),n,i]).then(u=>{this.logger.logKernelProfile(e,a,u[0],u[1],s,u[2])})})}};function hN(r,t,e){if(t!=="float32")return!1;for(let o=0;o<r.length;o++){let n=r[o];if(isNaN(n)||!isFinite(n))return console.warn(`Found ${n} in the result of '${e}'`),!0}return!1}var Ym=class{logKernelProfile(t,e,o,n,s,i){let a=typeof n=="number"?No(`${n}ms`,9):n.error,u=No(t,25),c=e.rank,l=e.size,p=No(e.shape.toString(),14),m="";for(let d in s){let h=s[d];if(h!=null){let g=h.shape||e.shape,x=g.length;m+=`${d}: ${x}D ${x>0?g:""} `}}console.log(`%c${u}	%c${a}	%c${c}D ${p}	%c${l}	%c${m}	%c${i}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function Yg(r,t,e){let o={},n={};for(let u=0;u<t.length;u++)o[t[u].id]=!0;for(let u=0;u<r.length;u++){let c=r[u],l=c.inputs;for(let p in l){let m=l[p],d=!1;for(let h=0;h<t.length;h++)if(o[m.id]){c.outputs.forEach(g=>o[g.id]=!0),d=!0,n[c.id]=!0;break}if(d)break}}let s={};s[e.id]=!0;let i={};for(let u=r.length-1;u>=0;u--){let c=r[u],l=c.inputs;for(let p=0;p<c.outputs.length;p++)if(s[c.outputs[p].id]){for(let m in l)s[l[m].id]=!0,i[c.id]=!0;break}}let a=[];for(let u=0;u<r.length;u++){let c=r[u];if(n[c.id]&&i[c.id]){let l={};for(let m in c.inputs){let d=c.inputs[m];o[d.id]&&(l[m]=d)}let p=Object.assign({},c);p.inputs=l,p.outputs=c.outputs,a.push(p)}}return a}function Qg(r,t,e,o){for(let n=t.length-1;n>=0;n--){let s=t[n],i=[];if(s.outputs.forEach(u=>{let c=r[u.id];c!=null?i.push(c):i.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);let a=s.gradient(i);for(let u in s.inputs){if(!(u in a))throw new Error(`Cannot backprop through input ${u}. Available gradients found: ${Object.keys(a)}.`);let c=e(()=>a[u]());if(c.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${u} must have 'float32' dtype, but has '${c.dtype}'`);let l=s.inputs[u];if(!He(c.shape,l.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${u}' has shape '${c.shape}', which does not match the shape of the input '${l.shape}'`);if(r[l.id]==null)r[l.id]=c;else{let p=r[l.id];r[l.id]=o(p,c),p.dispose()}}}}var Zg=20,Qs=3,Qm=7;function Jg(r,t,e,o){let n=br(t),s=gN(r,t,e,n),i=t.length,a=cc(r,t,e,n,s),u=["Tensor"];return o&&(u.push(`  dtype: ${e}`),u.push(`  rank: ${i}`),u.push(`  shape: [${t}]`),u.push("  values:")),u.push(a.map(c=>"    "+c).join(`
`)),u.join(`
`)}function gN(r,t,e,o){let n=dt(t),s=o[o.length-1],i=new Array(s).fill(0),a=t.length,u=e==="complex64"?Js(r):r;if(a>1)for(let c=0;c<n/s;c++){let l=c*s;for(let p=0;p<s;p++)i[p]=Math.max(i[p],Zs(u[l+p],0,e).length)}return i}function Zs(r,t,e){let o;return Array.isArray(r)?o=`${parseFloat(r[0].toFixed(Qm))} + ${parseFloat(r[1].toFixed(Qm))}j`:gn(r)?o=`'${r}'`:e==="bool"?o=tx(r):o=parseFloat(r.toFixed(Qm)).toString(),No(o,t)}function tx(r){return r===0?"false":"true"}function cc(r,t,e,o,n,s=!0){let i=e==="complex64"?2:1,a=t[0],u=t.length;if(u===0){if(e==="complex64"){let g=Js(r);return[Zs(g[0],0,e)]}return e==="bool"?[tx(r[0])]:[r[0].toString()]}if(u===1){if(a>Zg){let x=Qs*i,w=Array.from(r.slice(0,x)),N=Array.from(r.slice((a-Qs)*i,a*i));return e==="complex64"&&(w=Js(w),N=Js(N)),["["+w.map((k,_)=>Zs(k,n[_],e)).join(", ")+", ..., "+N.map((k,_)=>Zs(k,n[a-Qs+_],e)).join(", ")+"]"]}let g=e==="complex64"?Js(r):Array.from(r);return["["+g.map((x,w)=>Zs(x,n[w],e)).join(", ")+"]"]}let c=t.slice(1),l=o.slice(1),p=o[0]*i,m=[];if(a>Zg){for(let g=0;g<Qs;g++){let x=g*p,w=x+p;m.push(...cc(r.slice(x,w),c,e,l,n,!1))}m.push("...");for(let g=a-Qs;g<a;g++){let x=g*p,w=x+p;m.push(...cc(r.slice(x,w),c,e,l,n,g===a-1))}}else for(let g=0;g<a;g++){let x=g*p,w=x+p;m.push(...cc(r.slice(x,w),c,e,l,n,g===a-1))}let d=u===2?",":"";m[0]="["+m[0]+d;for(let g=1;g<m.length-1;g++)m[g]=" "+m[g]+d;let h=`,
`;for(let g=2;g<u;g++)h+=`
`;return m[m.length-1]=" "+m[m.length-1]+"]"+(s?"":h),m}function Js(r){let t=[];for(let e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var ur=class{constructor(t,e,o){if(this.dtype=e,this.shape=t.slice(),this.size=dt(t),o!=null){let n=o.length;$(n===this.size,()=>`Length of values '${n}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=o||Lm(e,this.size),this.strides=br(t)}set(t,...e){e.length===0&&(e=[0]),$(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);let o=this.locToIndex(e);this.values[o]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(let n of t){if(n<0||n>=this.shape[e]){let s=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(s)}e++}let o=t[t.length-1];for(let n=0;n<t.length-1;++n)o+=this.strides[n]*t[n];return this.values[o]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let o=0;o<t.length-1;++o)e+=this.strides[o]*t[o];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];let e=new Array(this.shape.length);for(let o=0;o<e.length-1;++o)e[o]=Math.floor(t/this.strides[o]),t-=e[o]*this.strides[o];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return ar().makeTensor(this.values,this.shape,this.dtype)}},ar=null,Kn=null,xN=null;function ex(r){ar=r}function rx(r){Kn=r}function ox(r){xN=r}var St=class{constructor(t,e,o,n){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=dt(t),this.strides=br(t),this.dataId=o,this.id=n,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let t=await this.data();return Kn.buffer(this.shape,this.dtype,t)}bufferSync(){return Kn.buffer(this.shape,this.dtype,this.dataSync())}async array(){let t=await this.data();return So(this.shape,t,this.dtype==="complex64")}arraySync(){return So(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();let t=ar().read(this.dataId);if(this.dtype==="string"){let e=await t;try{return e.map(o=>Hn(o))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),ar().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();let t=ar().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>Hn(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();let t=await ar().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(ar().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Kn.print(this,t)}clone(){return this.throwIfDisposed(),Kn.clone(this)}toString(t=!1){let e=this.dataSync();return Jg(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Kn.cast(this,t)}variable(t=!0,e,o){return this.throwIfDisposed(),ar().makeVariable(this,t,e,o)}};Object.defineProperty(St,Symbol.hasInstance,{value:r=>!!r&&r.data!=null&&r.dataSync!=null&&r.throwIfDisposed!=null});function yN(){return Bs("Tensor",()=>St)}yN();var to=class extends St{constructor(t,e,o,n){super(t.shape,t.dtype,t.dataId,n),this.trainable=e,this.name=o}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!He(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);ar().disposeTensor(this),this.dataId=t.dataId,ar().incRef(this,null)}dispose(){ar().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(to,Symbol.hasInstance,{value:r=>r instanceof St&&r.assign!=null&&r.assign instanceof Function});var Zm;(function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"})(Zm||(Zm={}));var Jm;(function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"})(Jm||(Jm={}));var tf;(function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"})(tf||(tf={}));var ef;(function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"})(ef||(ef={}));var rf;(function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"})(rf||(rf={}));var bN={float32:ef,int32:Jm,bool:tf,complex64:rf};function ae(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${r} with ${t}`)}return bN[r][t]}function Do(r){return ae(r,"int32")}function ct(r,t){if(r.dtype===t.dtype)return[r,t];let e=ae(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function nx(r,t){$(r.dtype===t.dtype,()=>`The dtypes of the first(${r.dtype}) and second(${t.dtype}) input must match`)}function lc(r){let t=[];return sx(r,t,new Set),t}function sx(r,t,e){if(r==null)return;if(r instanceof St){t.push(r);return}if(!vN(r))return;let o=r;for(let n in o){let s=o[n];e.has(s)||(e.add(s),sx(s,t,e))}}function vN(r){return Array.isArray(r)||typeof r=="object"}function of(r){return r.kernelName!=null}var pc=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(let t in this.registeredVariables)this.registeredVariables[t].dispose()}},eo=class{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new pc}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let t=this.getSortedBackends();for(let e=0;e<t.length;e++){let o=t[e];if(await this.initializeBackend(o).success){await this.setBackend(o);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){let{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,o=1){return t in this.registryFactory?(Fr(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:o},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;let{success:e,asyncInit:o}=this.initializeBackend(t);if(!(o?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new uc(this.backendInstance),!0}setupRegisteredKernels(){Hm(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Hm(t).forEach(o=>{o.disposeFunc!=null&&o.disposeFunc(this.registry[t])})}initializeBackend(t){let e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{let o=e.factory();if(o&&!(o instanceof Co)&&typeof o.then=="function"){let n=++this.pendingBackendInitId,s=o.then(i=>n<this.pendingBackendInitId?!1:(this.registry[t]=i,this.pendingBackendInit=null,!0)).catch(i=>(n<this.pendingBackendInitId||(this.pendingBackendInit=null,Fr(`Initialization of backend ${t} failed`),Fr(i.stack||i.message)),!1));return this.pendingBackendInit=s,{success:s,asyncInit:!0}}else return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(o){return Fr(`Initialization of backend ${t} failed`),Fr(o.stack||o.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){let t=this.getSortedBackends();for(let e=0;e<t.length;e++){let o=t[e],{success:n,asyncInit:s}=this.initializeBackend(o);if(s||n)return{name:o,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){let o=this.state.tensorInfo.get(e),n=o.backend,s=this.readSync(e),i=n.refCount(e);n.disposeData(e,!0),o.backend=t,t.move(e,s,o.shape,o.dtype,i),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let o=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t}let n;return this.scopedRun(()=>this.startScope(o),()=>this.endScope(n),()=>(n=e(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n))}scopedRun(t,e,o){t();try{let n=o();return e(),n}catch(n){throw e(),n}}nextTensorId(){return eo.nextTensorId++}nextVariableId(){return eo.nextVariableId++}clone(t){let e=E.runKernel($o,{x:t}),o={x:t},n=i=>({x:()=>{let a="float32",u={x:i},c={dtype:a};return E.runKernel(Eo,u,c)}}),s=[];return this.addTapeNode(this.state.activeScope.name,o,[e],n,s,{}),e}runKernel(t,e,o){if(this.backendName==null&&this.backend,!(Xs(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:o})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,o){let n=this.backend.numDataIds(),s=0;o.forEach(u=>{s+=u.dtype==="complex64"?3:1});let i=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],a=n-e-s-i;if(a>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${a} data ids) after running '${t}'`)}runKernelFunc(t){let e,o=[],n=this.isTapeOn(),s=this.state.numBytes,i=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let a;this.backendName==null&&this.backend;let u,c=of(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(of(t)){let{kernelName:h,inputs:g,attrs:x}=t;this.backendName==null&&this.backend;let w=Xs(h,this.backendName);$(w!=null,()=>`Cannot find registered kernel '${h}' for backend '${this.backendName}'`),a=()=>{let N=this.backend.numDataIds();u=w.kernelFunc({inputs:g,attrs:x,backend:this.backend});let k=Array.isArray(u)?u:[u];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(h,N,k);let _=k.map(D=>D.rank!=null?D:this.makeTensorFromTensorInfo(D));if(n){let D=this.getTensorsForGradient(h,g,_);o=this.saveTensorsForBackwardMode(D)}return _}}else{let{forwardFunc:h}=t,g=x=>{!n||(o=x.map(w=>this.keep(this.clone(w))))};a=()=>{let x=this.backend.numDataIds();u=this.tidy(()=>h(this.backend,g));let w=Array.isArray(u)?u:[u];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,x,w),w}}let{inputs:l,attrs:p}=t,m=of(t)?null:t.backwardsFunc,d;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=a():(d=this.profiler.profileKernel(c,l,()=>a()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(d),e=d.outputs)}),n&&this.addTapeNode(c,l,e,m,o,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-i,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(l).map(h=>l[h]!=null?l[h].shape:null),outputShapes:e.map(h=>h.shape),kernelTimeMs:d.timeMs,extraInfo:d.extraInfo}),Array.isArray(u)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(o=>this.keep(this.clone(o)))}getTensorsForGradient(t,e,o){let n=zm(t);if(n!=null){let s=n.inputsToSave||[],i=n.outputsToSave||[],a;n.saveAllInputs?($(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),a=Object.keys(e).map(c=>e[c])):a=s.map(c=>e[c]);let u=o.filter((c,l)=>i[l]);return a.concat(u)}return[]}makeTensor(t,e,o,n){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");o=o||"float32",n=n||this.backend;let s=t;o==="string"&&gn(t[0])&&(s=t.map(u=>zn(u)));let i=n.write(s,e,o),a=new St(e,o,i,this.nextTensorId());if(this.trackTensor(a,n),o==="string"){let u=this.state.tensorInfo.get(i),c=Mm(s);this.state.numBytes+=c-u.bytes,u.bytes=c}return a}makeTensorFromDataId(t,e,o,n){o=o||"float32";let s={dataId:t,shape:e,dtype:o};return this.makeTensorFromTensorInfo(s,n)}makeTensorFromTensorInfo(t,e){let{dataId:o,shape:n,dtype:s}=t,i=new St(n,s,o,this.nextTensorId());return this.trackTensor(i,e),i}makeVariable(t,e=!0,o,n){o=o||this.nextVariableId().toString(),n!=null&&n!==t.dtype&&(t=t.cast(n));let s=new to(t,e,o,this.nextTensorId());if(this.state.registeredVariables[s.name]!=null)throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*zi(t.dtype)),this.state.numBytes+=o,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o})),t instanceof to||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;let e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){let o=t.size*zi(t.dtype);this.state.numBytes-=o}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(let t in this.state.registeredVariables){let e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){let t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;let e=this.state.numBytes,o=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(n=>n.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-o;for(let n of this.state.activeProfile.kernels)n.kernelTimeMs=await n.kernelTimeMs,n.extraInfo=await n.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,o,n,s,i){let a={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:o,saved:s},u=zm(t);u!=null&&(n=u.gradFunc),n!=null&&(a.gradient=c=>(c=c.map((l,p)=>{if(l==null){let m=o[p],d=bn(m.size,m.dtype);return this.makeTensor(d,m.shape,m.dtype)}return l}),n(c.length>1?c:c[0],s,i))),this.state.activeTape.push(a)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){let e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){let e=lc(t),o=new Set(e.map(s=>s.id));for(let s=0;s<this.state.activeScope.track.length;s++){let i=this.state.activeScope.track[s];!i.kept&&!o.has(i.id)&&i.dispose()}let n=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(s=>{!s.kept&&s.scopeId===n.id&&this.track(s)})}gradients(t,e,o,n=!1){if($(e.length>0,()=>"gradients() received an empty list of xs."),o!=null&&o.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${o.dtype}'`);let s=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));$(s instanceof St,()=>"The result y returned by f() must be a tensor.");let i=Yg(this.state.activeTape,e,s);if(!n&&i.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let a={};a[s.id]=o??wN(s.shape),Qg(a,i,c=>this.tidy(c),TN);let u=e.map(c=>a[c.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(c=>{for(let l of c.saved)l.dispose()}),this.state.activeTape=null),{value:s,grads:u}})}customGrad(t){return $(Hi(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{$(e.every(a=>a instanceof St),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let o,n={};e.forEach((a,u)=>{n[u]=a});let s=(a,u)=>(o=t(...e,u),$(o.value instanceof St,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),$(Hi(o.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),o.value),i=(a,u)=>{let c=o.gradFunc(a,u),l=Array.isArray(c)?c:[c];$(l.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),$(l.every(m=>m instanceof St),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let p={};return l.forEach((m,d)=>{p[d]=()=>m}),p};return this.runKernelFunc({forwardFunc:s,backwardsFunc:i,inputs:n})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){let e=Ro(),o=await this.backend.time(t);return o.wallMs=Ro()-e,o}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new pc;for(let t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};eo.nextTensorId=0;eo.nextVariableId=0;function wN(r){let t=Fs(dt(r),"float32");return E.makeTensor(t,r,"float32")}function nf(){let r=Wm();if(r._tfengine==null){let t=new Ls(r);r._tfengine=new eo(t)}return Tg(r._tfengine.ENV),ex(()=>r._tfengine),r._tfengine}var E=nf();function TN(r,t){let e={a:r,b:t};return E.runKernel(Zr,e)}var ro={};$t(ro,{isBrowser:()=>af,isMobile:()=>NN,mockIsMobile:()=>SN});function CN(){return typeof navigator<"u"&&navigator!=null}var sf;function SN(r){sf=r}function NN(r){if(sf!==void 0)return sf;if(r||CN()){if(r||(r=navigator),r.product==="ReactNative")return!0;let t=r.userAgent||r.vendor||(typeof window<"u"?window.opera:"");if(!t){let e=r;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function af(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var Pe=O();Pe.registerFlag("DEBUG",()=>!1,r=>{r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});Pe.registerFlag("IS_BROWSER",()=>af());Pe.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");Pe.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));Pe.registerFlag("PROD",()=>!1);Pe.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>Pe.getBool("DEBUG"));Pe.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);Pe.registerFlag("IS_TEST",()=>!1);Pe.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>!0);Pe.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);Pe.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);Pe.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);function be(r,t){let e=r;if(Ee(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];let o=[];for(;Array.isArray(e)||Ee(e)&&t!=="string";)o.push(e.length),e=e[0];return Array.isArray(r)&&O().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&ax(r,o,[]),o}function ax(r,t,e){if(e=e||[],!Array.isArray(r)&&!Ee(r)){$(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}$(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${r.length} elements`),$(r.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${r.length} elements`);let o=t.slice(1);for(let n=0;n<r.length;++n)ax(r[n],o,e.concat(n))}function ix(r,t,e,o){if(r!=="string_or_numeric"){if(r==null)throw new Error("Expected dtype cannot be null.");if(r!=="numeric"&&r!==t||r==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${o}' must be ${r} tensor, but got ${t} tensor`)}}function v(r,t,e,o="numeric"){if(r instanceof St)return ix(o,r.dtype,t,e),r;let n=xn(r);if(n!=="string"&&["bool","int32","float32"].indexOf(o)>=0&&(n=o),ix(o,n,t,e),r==null||!Ee(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){let u=r==null?"null":r.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${u}'`)}let s=be(r,n);!Ee(r)&&!Array.isArray(r)&&(r=[r]);let a=n!=="string"?Wn(r,n):Yr(r,[],!0);return E.makeTensor(a,s,n)}function Fo(r,t,e,o="numeric"){if(!Array.isArray(r))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return r.map((s,i)=>v(s,`${t}[${i}]`,e,o))}var uf="__op";function T(r){let t=Object.keys(r);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0],o=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+uf;let n=(...s)=>{E.startScope(e);try{let i=o(...s);return Ps(i)&&console.error("Cannot return a Promise inside of tidy."),E.endScope(i),i}catch(i){throw E.endScope(null),i}};return Object.defineProperty(n,"name",{value:e,configurable:!0}),n}function EN(r,t){let e=v(r,"real","complex"),o=v(t,"imag","complex");Wt(e.shape,o.shape,`real and imag shapes, ${e.shape} and ${o.shape}, must match in call to tf.complex().`);let n={real:e,imag:o};return E.runKernel(Ms,n)}var ve=T({complex_:EN});function me(r,t,e,o){if(o==null&&(o=xn(r)),o==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Ee(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Os(t);let n=dt(t),s=dt(e);$(n===s,()=>`Based on the provided shape, [${t}], the tensor should have ${n} values but has ${s}`);for(let i=0;i<e.length;++i){let a=e[i],u=i===e.length-1?a!==dt(t.slice(i)):!0;$(e[i]===t[i]||!u,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!Ee(r)&&!Array.isArray(r)&&(r=[r]),t=t||e,r=o!=="string"?Wn(r,o):Yr(r,[],!0),E.makeTensor(r,t,o)}function fe(r,t,e){let o=be(r,e);return me(r,t,o,e)}var ti={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var mc=4;async function cx(r,t){let e=[],o=[],n=Array.isArray(r)?r.map(i=>i.name):Object.keys(r);for(let i=0;i<n.length;++i){let a=n[i],u=Array.isArray(r)?r[i].tensor:r[a];if(u.dtype!=="float32"&&u.dtype!=="int32"&&u.dtype!=="bool"&&u.dtype!=="string"&&u.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${a}': ${u.dtype}`);let c={name:a,shape:u.shape,dtype:u.dtype};if(u.dtype==="string"){let l=new Promise(async p=>{let m=await u.bytes(),d=m.reduce((x,w)=>x+w.length,0)+mc*m.length,h=new Uint8Array(d),g=0;for(let x=0;x<m.length;x++){let w=m[x],N=new Uint8Array(new Uint32Array([w.length]).buffer);h.set(N,g),g+=mc,h.set(w,g),g+=w.length}p(h)});o.push(l)}else o.push(u.data());t!=null&&(c.group=t),e.push(c)}let s=await Promise.all(o);return{data:$N(s),specs:e}}function fc(r,t){let e={},o,n=0;for(let s of t){let i=s.name,a=s.dtype,u=s.shape,c=dt(u),l;if("quantization"in s){let p=s.quantization;if(p.dtype==="uint8"||p.dtype==="uint16"){if(!("min"in p&&"scale"in p))throw new Error(`Weight ${s.name} with quantization ${p.dtype} doesn't have corresponding metadata min and scale.`)}else if(p.dtype==="float16"){if(a!=="float32")throw new Error(`Weight ${s.name} is quantized with ${p.dtype} which only supports weights of type float32 not ${a}.`)}else throw new Error(`Weight ${s.name} has unknown quantization dtype ${p.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let m=ti[p.dtype],d=r.slice(n,n+c*m),h=p.dtype==="uint8"?new Uint8Array(d):new Uint16Array(d);if(a==="float32")if(p.dtype==="uint8"||p.dtype==="uint16"){l=new Float32Array(h.length);for(let g=0;g<h.length;g++){let x=h[g];l[g]=x*p.scale+p.min}}else if(p.dtype==="float16")o===void 0&&(o=AN()),l=o(h);else throw new Error(`Unsupported quantization type ${p.dtype} for weight type float32.`);else if(a==="int32"){if(p.dtype!=="uint8"&&p.dtype!=="uint16")throw new Error(`Unsupported quantization type ${p.dtype} for weight type int32.`);l=new Int32Array(h.length);for(let g=0;g<h.length;g++){let x=h[g];l[g]=Math.round(x*p.scale+p.min)}}else throw new Error(`Unsupported dtype in weight '${i}': ${a}`);n+=c*m}else if(a==="string"){let p=dt(s.shape);l=[];for(let m=0;m<p;m++){let d=new Uint32Array(r.slice(n,n+mc))[0];n+=mc;let h=new Uint8Array(r.slice(n,n+d));l.push(h),n+=d}}else{let p=ti[a],m=r.slice(n,n+c*p);if(a==="float32")l=new Float32Array(m);else if(a==="int32")l=new Int32Array(m);else if(a==="bool")l=new Uint8Array(m);else if(a==="complex64"){l=new Float32Array(m);let d=new Float32Array(l.length/2),h=new Float32Array(l.length/2);for(let w=0;w<d.length;w++)d[w]=l[w*2],h[w]=l[w*2+1];let g=fe(d,u,"float32"),x=fe(h,u,"float32");e[i]=ve(g,x),g.dispose(),x.dispose()}else throw new Error(`Unsupported dtype in weight '${i}': ${a}`);n+=c*p}a!=="complex64"&&(e[i]=fe(l,u,a))}return e}function $N(r){if(r===null)throw new Error(`Invalid input value: ${JSON.stringify(r)}`);let t=0,e=[];r.forEach(s=>{if(t+=s.byteLength,e.push(s.byteLength===s.buffer.byteLength?s:new s.constructor(s)),!(s instanceof Float32Array||s instanceof Int32Array||s instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${s.constructor.name}`)});let o=new Uint8Array(t),n=0;return e.forEach(s=>{o.set(new Uint8Array(s.buffer),n),n+=s.byteLength}),o.buffer}var cf=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function ux(r){return cf?Buffer.byteLength(r):new Blob([r]).size}function lx(r){if(cf)return Buffer.from(r).toString("base64");let t=new Uint8Array(r),e="";for(let o=0,n=t.length;o<n;o++)e+=String.fromCharCode(t[o]);return btoa(e)}function px(r){if(cf){let o=Buffer.from(r,"base64");return o.buffer.slice(o.byteOffset,o.byteOffset+o.byteLength)}let t=atob(r),e=new Uint8Array(t.length);for(let o=0;o<t.length;++o)e.set([t.charCodeAt(o)],o);return e.buffer}function qn(r){if(r.length===1)return r[0];let t=0;r.forEach(n=>{t+=n.byteLength});let e=new Uint8Array(t),o=0;return r.forEach(n=>{e.set(new Uint8Array(n),o),o+=n.byteLength}),e.buffer}function lf(r){let t="/";for(r=r.trim();r.endsWith(t);)r=r.slice(0,r.length-1);let e=r.split(t);return e[e.length-1]}function dc(r,t){let e={modelTopology:r.modelTopology,format:r.format,generatedBy:r.generatedBy,convertedBy:r.convertedBy,weightsManifest:t};return r.signature!=null&&(e.signature=r.signature),r.userDefinedMetadata!=null&&(e.userDefinedMetadata=r.userDefinedMetadata),r.modelInitializer!=null&&(e.modelInitializer=r.modelInitializer),r.trainingConfig!=null&&(e.trainingConfig=r.trainingConfig),e}async function jn(r,t){let e={modelTopology:r.modelTopology,format:r.format,generatedBy:r.generatedBy,convertedBy:r.convertedBy};if(r.trainingConfig!=null&&(e.trainingConfig=r.trainingConfig),r.weightsManifest!=null){let[o,n]=await t(r.weightsManifest);e.weightSpecs=o,e.weightData=n}return r.signature!=null&&(e.signature=r.signature),r.userDefinedMetadata!=null&&(e.userDefinedMetadata=r.userDefinedMetadata),r.modelInitializer!=null&&(e.modelInitializer=r.modelInitializer),e}function vr(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:ux(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:ux(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}function IN(){let r=e=>{let o=e<<13,n=0;for(;(o&8388608)===0;)n-=8388608,o<<=1;return o&=-8388609,n+=947912704,o|n},t=new Uint32Array(2048);t[0]=0;for(let e=1;e<1024;e++)t[e]=r(e);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function kN(){let r=new Uint32Array(64);r[0]=0,r[31]=1199570944,r[32]=2147483648,r[63]=3347054592;for(let t=1;t<31;t++)r[t]=t<<23;for(let t=33;t<63;t++)r[t]=2147483648+(t-32<<23);return r}function _N(){let r=new Uint32Array(64);for(let t=0;t<64;t++)r[t]=1024;return r[0]=r[32]=0,r}function AN(){let r=IN(),t=kN(),e=_N();return o=>{let n=new ArrayBuffer(4*o.length),s=new Uint32Array(n);for(let i=0;i<o.length;i++){let a=o[i],u=r[e[a>>10]+(a&1023)]+t[a>>10];s[i]=u}return new Float32Array(n)}}var It=class{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return It.instance==null&&(It.instance=new It),It.instance}static registerSaveRouter(t){It.getInstance().saveRouters.push(t)}static registerLoadRouter(t){It.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return It.getHandlers(t,"save")}static getLoadHandlers(t,e){return It.getHandlers(t,"load",e)}static getHandlers(t,e,o){let n=[];return(e==="load"?It.getInstance().loadRouters:It.getInstance().saveRouters).forEach(i=>{let a=i(t,o);a!==null&&n.push(a)}),n}},mx=r=>It.registerSaveRouter(r),fx=r=>It.registerLoadRouter(r),dx=r=>It.getSaveHandlers(r),hx=(r,t)=>It.getLoadHandlers(r,t);var pf="tensorflowjs",mf=1,Oo="models_store",oo="model_info_store";function gx(){if(!O().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let r=typeof window>"u"?self:window,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function ff(r){let t=r.result;t.createObjectStore(Oo,{keyPath:"modelPath"}),t.createObjectStore(oo,{keyPath:"modelPath"})}var wr=class{constructor(t){if(this.indexedDB=gx(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((o,n)=>{let s=this.indexedDB.open(pf,mf);s.onupgradeneeded=()=>ff(s),s.onsuccess=()=>{let i=s.result;if(e==null){let a=i.transaction(Oo,"readonly"),c=a.objectStore(Oo).get(this.modelPath);c.onsuccess=()=>{if(c.result==null)return i.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));o(c.result.modelArtifacts)},c.onerror=l=>(i.close(),n(c.error)),a.oncomplete=()=>i.close()}else{let a=vr(e),u=i.transaction(oo,"readwrite"),c=u.objectStore(oo),l=c.put({modelPath:this.modelPath,modelArtifactsInfo:a}),p;l.onsuccess=()=>{p=i.transaction(Oo,"readwrite");let d=p.objectStore(Oo).put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:a});d.onsuccess=()=>o({modelArtifactsInfo:a}),d.onerror=h=>{c=u.objectStore(oo);let g=c.delete(this.modelPath);g.onsuccess=()=>(i.close(),n(d.error)),g.onerror=x=>(i.close(),n(d.error))}},l.onerror=m=>(i.close(),n(l.error)),u.oncomplete=()=>{p==null?i.close():p.oncomplete=()=>i.close()}}},s.onerror=i=>n(s.error)})}};wr.URL_SCHEME="indexeddb://";var xx=r=>O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(wr.URL_SCHEME)?RN(r.slice(wr.URL_SCHEME.length)):null;It.registerSaveRouter(xx);It.registerLoadRouter(xx);function RN(r){return new wr(r)}function DN(r){return r.startsWith(wr.URL_SCHEME)?r.slice(wr.URL_SCHEME.length):r}var hc=class{constructor(){this.indexedDB=gx()}async listModels(){return new Promise((t,e)=>{let o=this.indexedDB.open(pf,mf);o.onupgradeneeded=()=>ff(o),o.onsuccess=()=>{let n=o.result,s=n.transaction(oo,"readonly"),a=s.objectStore(oo).getAll();a.onsuccess=()=>{let u={};for(let c of a.result)u[c.modelPath]=c.modelArtifactsInfo;t(u)},a.onerror=u=>(n.close(),e(a.error)),s.oncomplete=()=>n.close()},o.onerror=n=>e(o.error)})}async removeModel(t){return t=DN(t),new Promise((e,o)=>{let n=this.indexedDB.open(pf,mf);n.onupgradeneeded=()=>ff(n),n.onsuccess=()=>{let s=n.result,i=s.transaction(oo,"readwrite"),a=i.objectStore(oo),u=a.get(t),c;u.onsuccess=()=>{if(u.result==null)return s.close(),o(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{let l=a.delete(t),p=()=>{c=s.transaction(Oo,"readwrite");let d=c.objectStore(Oo).delete(t);d.onsuccess=()=>e(u.result.modelArtifactsInfo),d.onerror=h=>o(u.error)};l.onsuccess=p,l.onerror=m=>(p(),s.close(),o(u.error))}},u.onerror=l=>(s.close(),o(u.error)),i.oncomplete=()=>{c==null?s.close():c.oncomplete=()=>s.close()}},n.onerror=s=>o(n.error)})}};var Or="/",Xn="tensorflowjs_models",yx="info",FN="model_topology",ON="weight_specs",PN="weight_data",LN="model_metadata";function bx(r){return{info:[Xn,r,yx].join(Or),topology:[Xn,r,FN].join(Or),weightSpecs:[Xn,r,ON].join(Or),weightData:[Xn,r,PN].join(Or),modelMetadata:[Xn,r,LN].join(Or)}}function vx(r){for(let t of Object.values(r))window.localStorage.removeItem(t)}function BN(r){let t=r.split(Or);if(t.length<3)throw new Error(`Invalid key format: ${r}`);return t.slice(1,t.length-1).join(Or)}function VN(r){return r.startsWith(Tr.URL_SCHEME)?r.slice(Tr.URL_SCHEME.length):r}var Tr=class{constructor(t){if(!O().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=bx(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let e=JSON.stringify(t.modelTopology),o=JSON.stringify(t.weightSpecs),n=vr(t);try{this.LS.setItem(this.keys.info,JSON.stringify(n)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,o),this.LS.setItem(this.keys.weightData,lx(t.weightData));let s={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(s)),{modelArtifactsInfo:n}}catch{throw vx(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${n.modelTopologyBytes}, weightSpecsBytes=${n.weightSpecsBytes}, weightDataBytes=${n.weightDataBytes}.`)}}}async load(){let t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let e={},o=JSON.parse(this.LS.getItem(this.keys.topology));if(o==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=o;let n=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(n==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=n;let s=this.LS.getItem(this.keys.modelMetadata);if(s!=null){let a=JSON.parse(s);e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,a.signature!=null&&(e.signature=a.signature),a.userDefinedMetadata!=null&&(e.userDefinedMetadata=a.userDefinedMetadata),a.modelInitializer!=null&&(e.modelInitializer=a.modelInitializer),a.trainingConfig!=null&&(e.trainingConfig=a.trainingConfig)}let i=this.LS.getItem(this.keys.weightData);if(i==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=px(i),e}};Tr.URL_SCHEME="localstorage://";var wx=r=>O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Tr.URL_SCHEME)?MN(r.slice(Tr.URL_SCHEME.length)):null;It.registerSaveRouter(wx);It.registerLoadRouter(wx);function MN(r){return new Tr(r)}var gc=class{constructor(){$(O().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),$(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let t={},e=Xn+Or,o=Or+yx;for(let n=0;n<this.LS.length;++n){let s=this.LS.key(n);if(s.startsWith(e)&&s.endsWith(o)){let i=BN(s);t[i]=JSON.parse(this.LS.getItem(s))}}return t}async removeModel(t){t=VN(t);let e=bx(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);let o=JSON.parse(this.LS.getItem(e.info));return vx(e),o}};var Yn="://",ee=class{constructor(){this.managers={}}static getInstance(){return ee.instance==null&&(ee.instance=new ee),ee.instance}static registerManager(t,e){$(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(Yn)&&(t=t.slice(0,t.indexOf(Yn))),$(t.length>0,()=>"scheme must not be an empty string.");let o=ee.getInstance();$(o.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),o.managers[t]=e}static getManager(t){let e=ee.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(ee.getInstance().managers)}};function xc(r){if(r.indexOf(Yn)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${ee.getSchemes().join(",")}`);return{scheme:r.split(Yn)[0],path:r.split(Yn)[1]}}async function Tx(r,t,e=!1){$(r!==t,()=>`Old path and new path are the same: '${r}'`);let o=It.getLoadHandlers(r);$(o.length>0,()=>`Copying failed because no load handler is found for source URL ${r}.`),$(o.length<2,()=>`Copying failed because more than one (${o.length}) load handlers for source URL ${r}.`);let n=o[0],s=It.getSaveHandlers(t);$(s.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),$(s.length<2,()=>`Copying failed because more than one (${o.length}) save handlers for destination URL ${t}.`);let i=s[0],a=xc(r).scheme,u=xc(r).path,c=a===xc(r).scheme,l=await n.load();e&&c&&await ee.getManager(a).removeModel(u);let p=await i.save(l);return e&&!c&&await ee.getManager(a).removeModel(u),p.modelArtifactsInfo}async function Cx(){let r=ee.getSchemes(),t={};for(let e of r){let o=await ee.getManager(e).listModels();for(let n in o){let s=e+Yn+n;t[s]=o[n]}}return t}async function Sx(r){let t=xc(r);return ee.getManager(t.scheme).removeModel(t.path)}async function Nx(r,t){return Tx(r,t,!1)}async function Ex(r,t){return Tx(r,t,!0)}var df=class{fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}};if(O().get("IS_BROWSER")){O().setPlatform("browser",new df);try{ee.registerManager(Tr.URL_SCHEME,new gc)}catch{}try{ee.registerManager(wr.URL_SCHEME,new hc)}catch{}}var UN={importFetch:()=>$x()},hf;var gf=class{constructor(){this.util=Ix(),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return O().global.fetch!=null?O().global.fetch(t,e):(hf==null&&(hf=UN.importFetch()),hf(t,e))}now(){let t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}};O().get("IS_NODE")&&!O().get("IS_BROWSER")&&O().setPlatform("node",new gf);function pt(r,t="float32",e){return t=t||"float32",Os(r),new ur(r,t,e)}function GN(r,t){let e=v(r,"x","cast");if(!Vm(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");let o={x:e},n={dtype:t};return E.runKernel(Eo,o,n)}var gt=T({cast_:GN});function WN(r){let e={x:v(r,"x","clone","string_or_numeric")};return E.runKernel($o,e)}var ke=T({clone_:WN});function yc(r,t=!1){console.log(r.toString(t))}nf();var zN={buffer:pt,cast:gt,clone:ke,print:yc};rx(zN);var oi={};$t(oi,{browserFiles:()=>_x,browserHTTPRequest:()=>Dx,concatenateArrayBuffers:()=>qn,copyModel:()=>Nx,decodeWeights:()=>fc,encodeWeights:()=>cx,fromMemory:()=>Fx,fromMemorySync:()=>Tf,getLoadHandlers:()=>hx,getModelArtifactsForJSON:()=>jn,getModelArtifactsInfoForJSON:()=>vr,getSaveHandlers:()=>dx,http:()=>vc,isHTTPScheme:()=>bc,listModels:()=>Cx,loadWeights:()=>Ax,moveModel:()=>Ex,registerLoadRouter:()=>fx,registerSaveRouter:()=>mx,removeModel:()=>Sx,weightsLoaderFactory:()=>vf,withSaveHandler:()=>Ox,withSaveHandlerSync:()=>Px});var HN="model",KN=".json",qN=".weights.bin";function kx(r){return new Promise(t=>setTimeout(t)).then(r)}var Pr=class{constructor(t){if(!O().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(Pr.URL_SCHEME)&&(t=t.slice(Pr.URL_SCHEME.length)),(t==null||t.length===0)&&(t=HN),this.modelJsonFileName=t+KN,this.weightDataFileName=t+qN}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");let e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let o=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],n=dc(t,o),s=window.URL.createObjectURL(new Blob([JSON.stringify(n)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=s,await kx(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){let a=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;a.download=this.weightDataFileName,a.href=e,await kx(()=>a.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:vr(t)}}}};Pr.URL_SCHEME="downloads://";var xf=class{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,e)=>{let o=new FileReader;o.onload=n=>{let s=JSON.parse(n.target.result),i=s.modelTopology;if(i==null){e(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(s.weightsManifest==null){e(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:i});return}let u=jn(s,c=>this.loadWeights(c));t(u)},o.onerror=n=>e(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),o.readAsText(this.jsonFile)})}loadWeights(t){let e=[],o=[];for(let i of t)e.push(...i.weights),o.push(...i.paths);let n=this.checkManifestAndWeightFiles(t),s=o.map(i=>this.loadWeightsFile(i,n[i]));return Promise.all(s).then(i=>[e,qn(i)])}loadWeightsFile(t,e){return new Promise((o,n)=>{let s=new FileReader;s.onload=i=>{let a=i.target.result;o(a)},s.onerror=i=>n(`Failed to weights data from file of path '${t}'.`),s.readAsArrayBuffer(e)})}checkManifestAndWeightFiles(t){let e=[],o=this.weightsFiles.map(s=>lf(s.name)),n={};for(let s of t)s.paths.forEach(i=>{let a=lf(i);if(e.indexOf(a)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${a}'`);if(e.push(a),o.indexOf(a)===-1)throw new Error(`Weight file with basename '${a}' is not provided.`);n[i]=this.weightsFiles[o.indexOf(a)]});if(e.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${e.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return n}},jN=r=>O().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Pr.URL_SCHEME)?XN(r.slice(Pr.URL_SCHEME.length)):null;It.registerSaveRouter(jN);function XN(r="model"){return new Pr(r)}function _x(r){return new xf(r)}function yf(r,t,e,o){i(r),e=e??0,o=o??1,a(e,o);let n=0,s=u=>(u.then(c=>{let l=e+ ++n/r.length*(o-e);return t(l),c}),u);function i(u){$(u!=null&&Array.isArray(u)&&u.length>0,()=>"promises must be a none empty array")}function a(u,c){$(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${u}`),$(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${c}`),$(c>=u,()=>`startFraction must be no more than endFraction, but got startFraction ${u} and endFraction ${c}`)}return Promise.all(r.map(s))}async function bf(r,t){t==null&&(t={});let e=t.fetchFunc==null?O().platform.fetch:t.fetchFunc,o=r.map(p=>e(p,t.requestInit,{isBinary:!0})),n=0,s=.5,a=(t.onProgress==null?await Promise.all(o):await yf(o,t.onProgress,n,s)).map(p=>p.arrayBuffer()),u=.5,c=1;return t.onProgress==null?await Promise.all(a):await yf(a,t.onProgress,u,c)}async function Ax(r,t="",e,o){return vf(i=>bf(i,{requestInit:o}))(r,t,e)}function vf(r){return async(t,e="",o)=>{let n=t.map(()=>!1),s={},i=o!=null?o.map(()=>!1):[],a=[];if(t.forEach((d,h)=>{let g=0;d.weights.forEach(x=>{let w="quantization"in x?x.quantization.dtype:x.dtype,N=ti[w]*dt(x.shape),k=()=>{n[h]=!0,s[h]==null&&(s[h]=[]),s[h].push({manifestEntry:x,groupOffset:g,sizeBytes:N})};o!=null?o.forEach((_,D)=>{_===x.name&&(k(),i[D]=!0)}):k(),a.push(x.name),g+=N})}),!i.every(d=>d)){let d=o.filter((h,g)=>!i[g]);throw new Error(`Could not find weights in manifest with names: ${d.join(", ")}. 
Manifest JSON has weights with names: ${a.join(", ")}.`)}let u=n.reduce((d,h,g)=>(h&&d.push(g),d),[]),c=[];u.forEach(d=>{t[d].paths.forEach(h=>{let g=e+(e.endsWith("/")?"":"/")+h;c.push(g)})});let l=await r(c),p={},m=0;return u.forEach(d=>{let h=t[d].paths.length,g=0;for(let _=0;_<h;_++)g+=l[m+_].byteLength;let x=new ArrayBuffer(g),w=new Uint8Array(x),N=0;for(let _=0;_<h;_++){let D=new Uint8Array(l[m+_]);w.set(D,N),N+=D.byteLength}s[d].forEach(_=>{let D=x.slice(_.groupOffset,_.groupOffset+_.sizeBytes),B=fc(D,[_.manifestEntry]);for(let V in B)p[V]=B[V]}),m+=h}),p}}var YN="application/octet-stream",QN="application/json",ei=class{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?($(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=O().platform.fetch,$(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&$(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;let o=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],n=dc(t,o);e.body.append("model.json",new Blob([JSON.stringify(n)],{type:QN}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:YN}),"model.weights.bin");let s=await this.fetch(this.path,e);if(s.ok)return{modelArtifactsInfo:vr(t),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}async load(){let t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let i=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?i+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":i+=" Please make sure the server is serving valid JSON for this request.",new Error(i)}let o=e.modelTopology,n=e.weightsManifest;if(o==null&&n==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return jn(e,s=>this.loadWeights(s))}async loadWeights(t){let e=Array.isArray(this.path)?this.path[1]:this.path,[o,n]=ZN(e),s=this.weightPathPrefix||o,i=[];for(let l of t)i.push(...l.weights);let a=[],u=[];for(let l of t)for(let p of l.paths)this.weightUrlConverter!=null?u.push(this.weightUrlConverter(p)):a.push(s+p+n);this.weightUrlConverter&&a.push(...await Promise.all(u));let c=await bf(a,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress});return[i,qn(c)]}};ei.URL_SCHEME_REGEX=/^https?:\/\//;function ZN(r){let t=r.lastIndexOf("/"),e=r.lastIndexOf("?"),o=r.substring(0,t),n=e>t?r.substring(e):"";return[o+"/",n]}function bc(r){return r.match(ei.URL_SCHEME_REGEX)!=null}var Rx=(r,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(r)?e=r.every(o=>bc(o)):e=bc(r),e)return vc(r,t)}return null};It.registerSaveRouter(Rx);It.registerLoadRouter(Rx);function vc(r,t){return new ei(r,t)}function Dx(r,t){return vc(r,t)}var ri=class{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}},wc=class{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}},wf=class{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=e=>Promise.resolve(t.save(e)))}};function Fx(r,t,e,o){let n=arguments;return new wf(Tf(...n))}function Tf(r,t,e,o){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new ri(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ri({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ri({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:o}))}function Ox(r){return new wc(r)}function Px(r){return new wc(r)}function JN(r,t,e=!1,o=!1){let n=v(r,"a","matMul"),s=v(t,"b","matMul");[n,s]=ct(n,s);let i={a:n,b:s},a={transposeA:e,transposeB:o};return E.runKernel(ia,i,a)}var bt=T({matMul_:JN});function tE(r,t,e=1,o=0,n="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let i={indices:v(r,"indices","oneHot","int32")},a={dtype:n,depth:t,onValue:e,offValue:o};return E.runKernel(fu,i,a)}var Lx=T({oneHot_:tE});function eE(r){O().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}ox(eE);function Po(){return E}function _t(r,t){return E.tidy(r,t)}function no(r){lc(r).forEach(e=>e.dispose())}function cr(r){return E.keep(r)}function Bx(r,t,e=1){return E.registerBackend(r,t,e)}function rE(r){let e={input:v(r,"input","imag")};return E.runKernel(Wa,e)}var so=T({imag_:rE});function oE(r){let e={x:v(r,"x","neg")};return E.runKernel(Us,e)}var de=T({neg_:oE});function nE(r){let e={input:v(r,"input","real")};return E.runKernel(Ws,e)}var Lr=T({real_:nE});function sE(r,t,e){let o=v(r,"x","transpose");if(t==null&&(t=o.shape.map((i,a)=>a).reverse()),$(o.rank===t.length,()=>`Error in transpose: rank of input ${o.rank} must match length of perm ${t}.`),t.forEach(i=>{$(i>=0&&i<o.rank,()=>`All entries in 'perm' must be between 0 and ${o.rank-1} but got ${t}`)}),o.rank<=1)return o.clone();let n={x:o},s={perm:t};return o.dtype==="complex64"?_t(()=>{let i=Lr(o),a=so(o);return i=E.runKernel(Mn,{x:i},s),a=E.runKernel(Mn,{x:a},s),e&&(a=de(a)),ve(i,a)}):E.runKernel(Mn,n,s)}var Tc=T({transpose_:sE});var io={};$t(io,{assertAndGetBroadcastShape:()=>yt,getBroadcastDims:()=>Vx,getReductionAxes:()=>Cc});function Vx(r,t){let e=r.length,o=[];for(let n=0;n<e;n++){let s=e-1-n,i=r[s]||1;(t[t.length-1-n]||1)>1&&i===1&&o.unshift(s)}return o}function Cc(r,t){let e=[];for(let o=0;o<t.length;o++){let n=r[r.length-o-1],s=t.length-o-1,i=t[s];(n==null||n===1&&i>1)&&e.unshift(s)}return e}function yt(r,t){let e=[],o=Math.max(r.length,t.length);for(let n=0;n<o;n++){let s=r[r.length-n-1];s==null&&(s=1);let i=t[t.length-n-1];if(i==null&&(i=1),s===1)e.unshift(i);else if(i===1)e.unshift(s);else if(s!==i){let a=`Operands could not be broadcast together with shapes ${r} and ${t}.`;throw Error(a)}else e.unshift(s)}return e}var ni={};$t(ni,{fromPixels:()=>mE,fromPixelsAsync:()=>lE,toPixels:()=>pE});function Sc(r,t,e){if(Oe(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");let o=be(r,e);if(o.length!==3&&o.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return me(r,t,o,e)}var Lo;function Mx(r,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let e=!1,o=!1,n=!1,s=!1,i=!1,a=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)o=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)n=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)s=!0;else if(r.getContext!=null)i=!0;else if(typeof ImageBitmap<"u"&&r instanceof ImageBitmap)a=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${r.constructor.name}`);if(Xs(Hs,E.backendName)!=null){let h={pixels:r},g={numChannels:t};return E.runKernel(Hs,h,g)}let[c,l]=n?[r.videoWidth,r.videoHeight]:[r.width,r.height],p;if(i)p=r.getContext("2d").getImageData(0,0,c,l).data;else if(o||e)p=r.data;else if(s||n||a){if(Lo==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Lo=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Lo=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Lo.canvas.width=c,Lo.canvas.height=l,Lo.drawImage(r,0,0,c,l),p=Lo.getImageData(0,0,c,l).data}let m;if(t===4)m=new Int32Array(p);else{let h=c*l;m=new Int32Array(h*t);for(let g=0;g<h;g++)for(let x=0;x<t;++x)m[g*t+x]=p[g*4+x]}return Sc(m,[l,c,t],"int32")}function iE(r){return r!=null&&r.data instanceof Uint8Array}function aE(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function uE(r){return r!=null&&r.width!==0&&r.height!==0}function cE(r){return aE()&&!(r instanceof ImageBitmap)&&uE(r)&&!iE(r)}async function lE(r,t=3){let e=null;if(O().getBool("WRAP_TO_IMAGEBITMAP")&&cE(r)){let o;try{o=await createImageBitmap(r,{premultiplyAlpha:"none"})}catch{o=null}o!=null&&o.width===r.width&&o.height===r.height?e=o:e=r}else e=r;return Mx(e,t)}async function pE(r,t){let e=v(r,"img","toPixels");if(!(r instanceof St)){let c=e;e=gt(c,"int32"),c.dispose()}if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);let[o,n]=e.shape.slice(0,2),s=e.rank===2?1:e.shape[2];if(s>4||s===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${s}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`);let i=await e.data(),a=e.dtype==="float32"?255:1,u=new Uint8ClampedArray(n*o*4);for(let c=0;c<o*n;++c){let l=[0,0,0,255];for(let m=0;m<s;m++){let d=i[c*s+m];if(e.dtype==="float32"){if(d<0||d>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${d}.`)}else if(e.dtype==="int32"&&(d<0||d>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${d}.`);s===1?(l[0]=d*a,l[1]=d*a,l[2]=d*a):l[m]=d*a}let p=c*4;u[p+0]=Math.round(l[0]),u[p+1]=Math.round(l[1]),u[p+2]=Math.round(l[2]),u[p+3]=Math.round(l[3])}if(t!=null){t.width=n,t.height=o;let c=t.getContext("2d"),l=new ImageData(u,n,o);c.putImageData(l,0,0)}return e!==r&&e.dispose(),u}var mE=T({fromPixels_:Mx});function fE(r,t){let e=r.shape.length,o=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(o<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${o}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[o-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[o-1]} vs. ${e}`);if(dt(r.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${r.shape}.`);let n=t.shape,s=n[n.length-1],i=1;for(let p=0;p<n.length-1;++p)i*=n[p];let a=r.shape,u=n.slice();u.pop();let c=1;for(let p=s;p<e;++p)c*=a[p],u.push(a[p]);let l=[...br(r.shape).map(p=>p/c),1].slice(0,s);return[u,i,c,l]}function Ux(r,t,e){let o=t.rank>1?t.shape[t.rank-1]:1,n=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${r}, sliceDim: ${o}, and batchDim: ${n}.`;if(e.rank<n)throw new Error(s+` update.rank < ${n}. `);if(r.length<o+(e.rank-n))throw new Error(s+` Output shape length < ${o+(e.rank-n)}`);if(e.rank!==n+r.length-o)throw new Error(s+` update.rank != ${n+r.length-o}`);for(let i=0;i<n;++i)if(e.shape[i]!==t.shape[i])throw new Error(s+` updates.shape[${i}] (${e.shape[i]}) != indices.shape[${i}] (${t.shape[i]}).`);for(let i=0;i<e.rank-n;++i)if(e.shape[i+n]!==r[i+o])throw new Error(s+` updates.shape[${i+n}] (${e.shape[i+n]}) != shape[${i+n}] (${r[i+n]})`)}function Cf(r,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(r.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${r.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(r.size===0)throw new Error(`Updates specified for empty output. updates shape: ${r.shape}`)}Ux(e,t,r)}function dE(r,t,e){let o=t.shape.length,n=o>1?t.shape[o-1]:1,s=e.length,i=1;for(let p=n;p<s;++p)i*=e[p];let a=n<1?1:n,u=dt(t.shape)/a,c=[...br(e.slice(0,n)),1],l=dt(e);return{sliceRank:n,numUpdates:u,sliceSize:i,strides:c,outputSize:l}}var we={};$t(we,{assertParamsValid:()=>xE,computeFlatOffset:()=>TE,computeOutShape:()=>bE,getNormalizedAxes:()=>vE,isSliceContinous:()=>wE,maskToAxes:()=>yE,parseSliceParams:()=>CE,sliceInfo:()=>SE,startForAxis:()=>Xx,startIndicesWithElidedDims:()=>Kx,stopForAxis:()=>Yx,stopIndicesWithElidedDims:()=>qx,stridesForAxis:()=>jx,stridesWithElidedDims:()=>Wx});var Sf=-2,gE=-1;function xE(r,t,e){let o=r.shape.length;$(o===t.length,()=>`Error in slice${o}D: Length of begin ${t} must match the rank of the array (${o}).`),$(o===e.length,()=>`Error in slice${o}D: Length of size ${e} must match the rank of the array (${o}).`);for(let n=0;n<o;++n)$(t[n]+e[n]<=r.shape[n],()=>`Error in slice${o}D: begin[${n}] + size[${n}] (${t[n]+e[n]}) would overflow input.shape[${n}] (${r.shape[n]})`)}function yE(r){let t=[],e=0;for(;r>0;)r&1&&t.push(e),r/=2,e++;return t}function bE(r,t,e){let o=[];for(let n=0;n<r.length;n++)o[n]=Math.ceil((t[n]-r[n])/e[n]);return o}function Wx(r,t,e,o){let n=[...r];for(let s=n.length;s<o.length;s++)n.push(1);for(let s=0;s<e;s++)s===0?n[t]=1:(n.splice(t,0,1),n.pop());return n}function zx(r,t,e){return e<=r?e:e-(t-1)}function Hx(r,t){let e=[];for(let o=0;o<r;o++)e.push(t+o);return e}function vE(r,t,e,o,n,s,i,a,u){let c=r.length,l=new Array(c),p=new Array(c),m=new Array(c);if(t.length&&e>0){let d=t[0],h=e+1;l=Kx(i,d,h,o,r),p=qx(a,d,h,n,r),m=Wx(s,d,h,r)}else for(let d=0;d<c;d++)l[d]=Xx(i,o,s,r,d,u),p[d]=Yx(a,n,s,r,d,u),m[d]=jx(s,d,u);return{begin:l,end:p,strides:m}}function Kx(r,t,e,o,n){let s=[...n],i=Hx(e,t);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=0;else{let u=zx(t,e,a),c=o[u];r&1<<u&&(c=0),s[a]=c}return s}function qx(r,t,e,o,n){let s=[...n],i=Hx(e,t);for(let a=0;a<s.length;a++)if(i.indexOf(a)>-1)s[a]=Number.MAX_SAFE_INTEGER;else{let u=zx(t,e,a),c=o[u];r&1<<u&&(c=Number.MAX_SAFE_INTEGER),s[a]=c}for(let a=0;a<s.length;a++){let u=n[a];s[a]<0&&(s[a]+=u),s[a]=hn(0,s[a],n[a])}return s}function jx(r,t,e){let o=r[t];return(e&1<<t||o==null)&&(o=1),o}function Xx(r,t,e,o,n,s){let i=t[n],a=e[n]||1;(r&1<<n||s&1<<n||i==null)&&(a>0?i=Number.MIN_SAFE_INTEGER:i=Number.MAX_SAFE_INTEGER);let u=o[n];return i<0&&(i+=u),i=hn(0,i,u-1),i}function Yx(r,t,e,o,n,s){let i=t[n],a=e[n]||1;(r&1<<n||s&1<<n||i==null)&&(a>0?i=Number.MAX_SAFE_INTEGER:i=Number.MIN_SAFE_INTEGER);let u=o[n];return i<0&&(i+=u),a>0?i=hn(0,i,u):i=hn(-1,i,u-1),i}function wE(r,t,e){let o=e.length;for(let n=0;n<e.length;n++)if(e[n]>1){o=n;break}for(let n=o+1;n<e.length;n++)if(t[n]>0||e[n]!==r[n])return!1;return!0}function TE(r,t){let e=r.length>0?r[r.length-1]:1;for(let o=0;o<r.length-1;o++)e+=r[o]*t[o];return e}function CE(r,t,e){let o,n=r.shape.length;typeof t=="number"?o=[t,...new Array(n-1).fill(0)]:t.length<n?o=t.concat(new Array(n-t.length).fill(0)):o=t.slice(),o.forEach(i=>{$(i!==-1,()=>"slice() does not support negative begin indexing.")});let s;return e==null?s=new Array(n).fill(-1):typeof e=="number"?s=[e,...new Array(n-1).fill(-1)]:e.length<n?s=e.concat(new Array(n-e.length).fill(-1)):s=e,s=s.map((i,a)=>i>=0?i:($(i===-1,()=>`Negative size values should be exactly -1 but got ${i} for the slice() size at index ${a}.`),r.shape[a]-o[a])),[o,s]}function SE(r,t,e,o,n,s,i,a,u){let c;if(o==null?(c=new Array(t.length),c.fill(1)):c=o,i!=null&&(i&i-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let l=!1,p={dims:c.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:c.slice(),beginMask:n,endMask:s,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:u};for(let k=0;k<p.dims;k++)l&&(1<<k&a)!==0&&p.numAddAxisAfterEllipsis++,1<<k&i&&(l=!0);l||(p.ellipsisMask|=1<<p.dims,p.dims++);let m={dims:r.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};NE(p,m);let d=!0,h=!0,g=!0,x=[],w=[];for(let k=0;k<r.length;++k){if(m.strides[k]===0)throw Error(`strides[${k}] must be non-zero`);let _=!!(m.shrinkAxisMask&1<<k),D=r[k];if(D===-1){x.push(_?1:-1);continue}let B=[m.beginMask&1<<k,m.endMask&1<<k],V=[m.strides[k]>0?0:-1,m.strides[k]>0?D:D-1];if(_&&m.strides[k]<=0)throw Error("only stride 1 allowed on non-range indexing.");g=g&&m.strides[k]===1;let U=!!(m.beginMask&1<<k&&m.endMask&1<<k);if(m.beginValid&&m.endValid){if(_){let Z=m.begin[k]<0?D+m.begin[k]:m.begin[k];if(m.begin[k]=Z,m.end[k]=m.begin[k]+1,Z<0||Z>=D)throw Error(`slice index ${m.begin[k]} of dimension ${k} out of bounds.`)}else m.begin[k]=Gx(m.begin[k],0,m.strides[k],D,B,V),m.end[k]=Gx(m.end[k],1,m.strides[k],D,B,V);let j=m.strides[k]===1&&m.begin[k]===0&&m.end[k]===D;d=d&&j,h=h&&(k===0&&m.strides[k]===1||j)}else d=d&&m.strides[k]===1&&U,h=h&&(k===0&&m.strides[k]===1||U);let H,W=!1;if(m.beginValid&&m.endValid?(H=m.end[k]-m.begin[k],W=!0):_?(H=1,W=!0):U&&D>=0&&(m.strides[k]<0?H=-D:H=D,W=!0),W){let j;H===0||H<0!=m.strides[k]<0?j=0:j=Math.trunc(H/m.strides[k])+(H%m.strides[k]!==0?1:0),x.push(j)}else x.push(-1)}for(let k=0;k<m.finalShapeGatherIndices.length;++k){let _=m.finalShapeGatherIndices[k];_>=0?w.push(x[_]):_===Sf&&w.push(1)}return{finalShapeSparse:w.filter((k,_)=>m.finalShapeGatherIndices[_]!==Sf),finalShape:w,isIdentity:d,sliceDim0:h,isSimpleSlice:g,begin:m.begin,end:m.end,strides:m.strides}}function NE(r,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=r.begin!=null,t.endValid=r.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let o=0;o<r.dims;o++)if(1<<o&r.ellipsisMask){let n=Math.min(t.dims-(r.dims-o)+1+r.numAddAxisAfterEllipsis,t.dims);for(;e<n;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=o}else if(1<<o&r.newAxisMask)t.finalShapeGatherIndices.push(Sf),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);r.begin!=null&&(t.begin[e]=r.begin[o]),r.end!=null&&(t.end[e]=r.end[o]),t.strides[e]=r.strides[o],r.beginMask&1<<o&&(t.beginMask|=1<<e),r.endMask&1<<o&&(t.endMask|=1<<e),r.shrinkAxisMask&1<<o?(t.finalShapeGatherIndices.push(gE),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(o)),t.inputShapeGatherIndicesSparse[e]=o,e++}}function Gx(r,t,e,o,n,s){if(n[t])return e>0?s[t]:s[t+1&1];{let i=r<0?o+r:r;return i<s[0]?s[0]:i>s[1]?s[1]:i}}function EE(r,t){let e=v(r,"a","add"),o=v(t,"b","add");[e,o]=ct(e,o);let n={a:e,b:o};return E.runKernel(Zr,n)}var ht=T({add_:EE});function $E(r,t){let e=v(r,"a","floorDiv"),o=v(t,"b","floorDiv");[e,o]=ct(e,o);let n={a:e,b:o};return E.runKernel(Ba,n)}var Nc=T({floorDiv_:$E});function IE(r,t){let e=v(r,"a","div"),o=v(t,"b","div");if([e,o]=ct(e,o),e.dtype==="int32"&&o.dtype==="int32")return Nc(e,o);let n={a:e,b:o},s={};return E.runKernel(_a,n,s)}var xt=T({div_:IE});function kE(r,t){let e=v(r,"a","mul"),o=v(t,"b","mul");[e,o]=ct(e,o);let n={a:e,b:o};return E.runKernel(Rn,n)}var X=T({mul_:kE});function _E(r){let t=v(r,"x","abs");if(t.dtype==="complex64"){let e={x:t};return E.runKernel(pa,e)}else{let e={x:t};return E.runKernel(Vs,e)}}var ue=T({abs_:_E});function AE(r){let e={x:v(r,"x","acos")};return E.runKernel(Ki,e)}var Qx=T({acos_:AE});function RE(r){let e={x:v(r,"x","acosh")};return E.runKernel(qi,e)}var Zx=T({acosh_:RE});function DE(r){$(Array.isArray(r),()=>"The argument passed to tf.addN() must be a list of tensors"),$(r.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${r.length}`);let t=r.map((n,s)=>v(n,`tensors${s}`,"addN")),e=t[0];t.forEach(n=>{if(n.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(n=>{if(!He(n.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});let o=t;return E.runKernel(ji,o)}var Jx=T({addN_:DE});function FE(r,t=null,e=!1){let n={x:v(r,"x","all","bool")},s={axis:t,keepDims:e};return E.runKernel(Xi,n,s)}var t1=T({all_:FE});function OE(r,t=null,e=!1){let n={x:v(r,"x","any","bool")},s={axis:t,keepDims:e};return E.runKernel(Yi,n,s)}var e1=T({any_:OE});function PE(r,t=0){let o={x:v(r,"x","argMax")},n={axis:t};return E.runKernel(Qi,o,n)}var r1=T({argMax_:PE});function LE(r,t=0){let o={x:v(r,"x","argMin")},n={axis:t};return E.runKernel(Zi,o,n)}var o1=T({argMin_:LE});function BE(r){let e={x:v(r,"x","asin")};return E.runKernel(Ji,e)}var n1=T({asin_:BE});function VE(r){let e={x:v(r,"x","asinh")};return E.runKernel(ta,e)}var s1=T({asinh_:VE});function ME(r){let e={x:v(r,"x","atan")};return E.runKernel(ea,e)}var i1=T({atan_:ME});function UE(r,t){let e=v(r,"a","atan2"),o=v(t,"b","atan2");[e,o]=ct(e,o);let n={a:e,b:o};return E.runKernel(oa,n)}var a1=T({atan2_:UE});function GE(r){let e={x:v(r,"x","atanh")};return E.runKernel(ra,e)}var u1=T({atanh_:GE});function WE(r,t,e,o,n="NHWC",s){let i=r[3],a=[...t,i],u=l1(n);return Mo(r,a,e,s,o,null,null,u)}function Ef(r,t,e,o,n,s,i="channelsLast"){let[a,u]=Ec(t),c;if(i==="channelsLast")c=[a,u,r[3],r[3]];else if(i==="channelsFirst")c=[a,u,r[1],r[1]];else throw new Error(`Unknown dataFormat ${i}`);return Mo(r,c,e,o,n,s,!1,i)}function zE(r,t,e,o,n,s,i="NDHWC"){let[a,u,c]=Nf(t),l,p;if(i==="NDHWC")p="channelsLast",l=[a,u,c,r[4],r[4]];else if(i==="NCDHW")p="channelsFirst",l=[a,u,c,r[1],r[1]];else throw new Error(`Unknown dataFormat ${i}`);return c1(r,l,e,o,n,!1,p,s)}function Mo(r,t,e,o,n,s,i=!1,a="channelsLast"){let[u,c,l,p]=[-1,-1,-1,-1];if(a==="channelsLast")[u,c,l,p]=r;else if(a==="channelsFirst")[u,p,c,l]=r;else throw new Error(`Unknown dataFormat ${a}`);let[m,d,,h]=t,[g,x]=Ec(e),[w,N]=Ec(o),k=Qn(m,w),_=Qn(d,N),{padInfo:D,outHeight:B,outWidth:V}=qE(n,c,l,g,x,k,_,s,a),U=i?h*p:h,H;return a==="channelsFirst"?H=[u,U,B,V]:a==="channelsLast"&&(H=[u,B,V,U]),{batchSize:u,dataFormat:a,inHeight:c,inWidth:l,inChannels:p,outHeight:B,outWidth:V,outChannels:U,padInfo:D,strideHeight:g,strideWidth:x,filterHeight:m,filterWidth:d,effectiveFilterHeight:k,effectiveFilterWidth:_,dilationHeight:w,dilationWidth:N,inShape:r,outShape:H,filterShape:t}}function c1(r,t,e,o,n,s=!1,i="channelsLast",a){let[u,c,l,p,m]=[-1,-1,-1,-1,-1];if(i==="channelsLast")[u,c,l,p,m]=r;else if(i==="channelsFirst")[u,m,c,l,p]=r;else throw new Error(`Unknown dataFormat ${i}`);let[d,h,g,,x]=t,[w,N,k]=Nf(e),[_,D,B]=Nf(o),V=Qn(d,_),U=Qn(h,D),H=Qn(g,B),{padInfo:W,outDepth:j,outHeight:Z,outWidth:lt}=jE(n,c,l,p,w,N,k,V,U,H,a),it=s?x*m:x,mt;return i==="channelsFirst"?mt=[u,it,j,Z,lt]:i==="channelsLast"&&(mt=[u,j,Z,lt,it]),{batchSize:u,dataFormat:i,inDepth:c,inHeight:l,inWidth:p,inChannels:m,outDepth:j,outHeight:Z,outWidth:lt,outChannels:it,padInfo:W,strideDepth:w,strideHeight:N,strideWidth:k,filterDepth:d,filterHeight:h,filterWidth:g,effectiveFilterDepth:V,effectiveFilterHeight:U,effectiveFilterWidth:H,dilationDepth:_,dilationHeight:D,dilationWidth:B,inShape:r,outShape:mt,filterShape:t}}function HE(r,t,e,o,n){o==null&&(o=$f(r,t,e));let s=r[0],i=r[1],a=Bo((s-t+2*o)/e+1,n),u=Bo((i-t+2*o)/e+1,n);return[a,u]}function KE(r,t,e,o,n,s){n==null&&(n=$f(r,t,o));let i=r[0],a=r[1],u=r[2],c=Bo((i-t+2*n)/o+1,s),l=Bo((a-t+2*n)/o+1,s),p=Bo((u-t+2*n)/o+1,s);return[c,l,p,e]}function $f(r,t,e,o=1){let n=Qn(t,o);return Math.floor((r[0]*(e-1)-e+n)/2)}function Ec(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function Nf(r){return typeof r=="number"?[r,r,r]:r}function Qn(r,t){return t<=1?r:r+(r-1)*(t-1)}function qE(r,t,e,o,n,s,i,a,u){let c,l,p;if(typeof r=="number"){c={top:r,bottom:r,left:r,right:r,type:r===0?"VALID":"NUMBER"};let d=HE([t,e],s,o,r,a);l=d[0],p=d[1]}else if(r==="same"){l=Math.ceil(t/o),p=Math.ceil(e/n);let m=Math.max(0,(l-1)*o+s-t),d=Math.max(0,(p-1)*n+i-e),h=Math.floor(m/2),g=m-h,x=Math.floor(d/2),w=d-x;c={top:h,bottom:g,left:x,right:w,type:"SAME"}}else if(r==="valid")c={top:0,bottom:0,left:0,right:0,type:"VALID"},l=Math.ceil((t-s+1)/o),p=Math.ceil((e-i+1)/n);else if(typeof r=="object"){let m=u==="channelsLast"?r[1][0]:r[2][0],d=u==="channelsLast"?r[1][1]:r[2][1],h=u==="channelsLast"?r[2][0]:r[3][0],g=u==="channelsLast"?r[2][1]:r[3][1];c={top:m,bottom:d,left:h,right:g,type:m===0&&d===0&&h===0&&g===0?"VALID":"EXPLICIT"},l=Bo((t-s+m+d)/o+1,a),p=Bo((e-i+h+g)/n+1,a)}else throw Error(`Unknown padding parameter: ${r}`);return{padInfo:c,outHeight:l,outWidth:p}}function jE(r,t,e,o,n,s,i,a,u,c,l){let p,m,d,h;if(typeof r=="number"){p={top:r,bottom:r,left:r,right:r,front:r,back:r,type:r===0?"VALID":"NUMBER"};let x=KE([t,e,o,1],a,1,n,r,l);m=x[0],d=x[1],h=x[2]}else if(r==="same"){m=Math.ceil(t/n),d=Math.ceil(e/s),h=Math.ceil(o/i);let g=(m-1)*n+a-t,x=(d-1)*s+u-e,w=(h-1)*i+c-o,N=Math.floor(g/2),k=g-N,_=Math.floor(x/2),D=x-_,B=Math.floor(w/2),V=w-B;p={top:_,bottom:D,left:B,right:V,front:N,back:k,type:"SAME"}}else if(r==="valid")p={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},m=Math.ceil((t-a+1)/n),d=Math.ceil((e-u+1)/s),h=Math.ceil((o-c+1)/i);else throw Error(`Unknown padding parameter: ${r}`);return{padInfo:p,outDepth:m,outHeight:d,outWidth:h}}function Bo(r,t){if(!t)return Math.trunc(r);switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error(`Unknown roundingMode ${t}`)}}function Vo(r){let[t,e,o]=Ec(r);return t===1&&e===1&&o===1}function ce(r,t){return Vo(r)||Vo(t)}function l1(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${r}`)}function Kt(r,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${r}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")$(Dr(t),()=>`Error in ${r}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(o=>{o.forEach(n=>{$(Dr(n),()=>`Error in ${r}: pad must be an integer when using dimRoundingMode ${e} but got pad ${n}.`)})});else throw Error(`Error in ${r}: Unknown padding parameter: ${t}`)}}function XE(r,t){let o={x:v(r,"x","reshape","string_or_numeric")},n={shape:t};return E.runKernel(Tu,o,n)}var L=T({reshape_:XE});function YE(r,t,e,o,n){let s=v(r,"x","avgPool","float32"),i=1;$(ce(e,i),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`);let a=s,u=!1;s.rank===3&&(u=!0,a=L(s,[1,s.shape[0],s.shape[1],s.shape[2]])),$(a.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${a.rank}.`),Kt("avgPool",o,n);let c={x:a},l={filterSize:t,strides:e,pad:o,dimRoundingMode:n},p=E.runKernel(na,c,l);return p=gt(p,s.dtype),u?L(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var $c=T({avgPool_:YE});function QE(r,t,e,o,n,s="NDHWC"){let i=v(r,"x","avgPool3d","float32"),a=i,u=!1;i.rank===4&&(u=!0,a=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),$(a.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${a.rank}.`),$(s==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),Kt("avgPool3d",o,n);let c={x:a},l={filterSize:t,strides:e,pad:o,dimRoundingMode:n,dataFormat:s},p=E.runKernel(sa,c,l);return p=gt(p,a.dtype),u?L(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var p1=T({avgPool3d_:QE});function ZE(r,t=0){$(r.length>=1,()=>"Pass at least one tensor to concat");let e=Fo(r,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(s=>{if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${s.dtype}. `)}),e.length===1)return ke(e[0]);let o=e,n={axis:t};return E.runKernel(ma,o,n)}var kt=T({concat_:ZE});function JE(r){let e={x:v(r,"x","sigmoid","float32")};return E.runKernel(On,e)}var Xe=T({sigmoid_:JE});function t$(r,t,e){let o=v(r,"x","slice","string_or_numeric");if(o.rank===0)throw new Error("Slicing scalar is not possible");let n={x:o},s={begin:t,size:e};return E.runKernel(zs,n,s)}var rt=T({slice_:t$});function e$(r){let e={x:v(r,"x","tanh","float32")};return E.runKernel(Yu,e)}var si=T({tanh_:e$});function r$(r,t,e,o,n,s){let i=v(r,"forgetBias","basicLSTMCell"),a=v(t,"lstmKernel","basicLSTMCell"),u=v(e,"lstmBias","basicLSTMCell"),c=v(o,"data","basicLSTMCell"),l=v(n,"c","basicLSTMCell"),p=v(s,"h","basicLSTMCell"),m=kt([c,p],1),d=bt(m,a),h=ht(d,u),g=h.shape[0],x=h.shape[1]/4,w=[g,x],N=rt(h,[0,0],w),k=rt(h,[0,x],w),_=rt(h,[0,x*2],w),D=rt(h,[0,x*3],w),B=ht(X(Xe(N),si(k)),X(l,Xe(ht(i,_)))),V=X(si(B),Xe(D));return[B,V]}var m1=T({basicLSTMCell_:r$});function o$(r,t,e){let o=v(r,"x","batchToSpaceND"),n=t.reduce((a,u)=>a*u);$(o.rank>=1+t.length,()=>`input rank is ${o.rank} but should be > than blockShape.length ${t.length}`),$(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),$(o.shape[0]%n===0,()=>`input tensor batch is ${o.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${n}`);let s={x:o},i={blockShape:t,crops:e};return E.runKernel(aa,s,i)}var Ic=T({batchToSpaceND_:o$});function f1(r){let t;return r.rank===0||r.rank===1?t=L(r,[1,1,1,r.size]):r.rank===2?t=L(r,[1,1,r.shape[0],r.shape[1]]):r.rank===3?t=L(r,[1,r.shape[0],r.shape[1],r.shape[2]]):t=r,t}function n$(r,t,e,o,n,s){s==null&&(s=.001);let i=v(r,"x","batchNorm"),a=v(t,"mean","batchNorm"),u=v(e,"variance","batchNorm"),c;n!=null&&(c=v(n,"scale","batchNorm"));let l;o!=null&&(l=v(o,"offset","batchNorm")),$(a.rank===u.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),$(l==null||a.rank===l.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),$(c==null||a.rank===c.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let m={x:f1(i),scale:c,offset:l,mean:a,variance:u},d={varianceEpsilon:s},h=E.runKernel(Va,m,d);return L(h,i.shape)}var ao=T({batchNorm_:n$});function s$(r,t,e,o,n,s){let i=v(r,"x","batchNorm"),a=v(t,"mean","batchNorm"),u=v(e,"variance","batchNorm"),c;n!=null&&(c=v(n,"scale","batchNorm"));let l;return o!=null&&(l=v(o,"offset","batchNorm")),$(i.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${i.rank}.`),$(a.rank===2||a.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${a.rank}.`),$(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${u.rank}.`),c!=null&&$(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&$(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${l.rank}.`),ao(i,a,u,l,c,s)}var d1=T({batchNorm2d_:s$});function i$(r,t,e,o,n,s){let i=v(r,"x","batchNorm"),a=v(t,"mean","batchNorm"),u=v(e,"variance","batchNorm"),c;n!=null&&(c=v(n,"scale","batchNorm"));let l;return o!=null&&(l=v(o,"offset","batchNorm")),$(i.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${i.rank}.`),$(a.rank===3||a.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${a.rank}.`),$(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${u.rank}.`),c!=null&&$(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&$(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${l.rank}.`),ao(i,a,u,l,c,s)}var h1=T({batchNorm3d_:i$});function a$(r,t,e,o,n,s){let i=v(r,"x","batchNorm"),a=v(t,"mean","batchNorm"),u=v(e,"variance","batchNorm"),c;n!=null&&(c=v(n,"scale","batchNorm"));let l;return o!=null&&(l=v(o,"offset","batchNorm")),$(i.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${i.rank}.`),$(a.rank===4||a.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${a.rank}.`),$(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${u.rank}.`),c!=null&&$(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&$(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${l.rank}.`),ao(i,a,u,l,c,s)}var g1=T({batchNorm4d_:a$});function u$(r,t,e){let o=v(r,"x","bincount"),n=v(t,"weights","bincount");$(o.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${o.dtype}`),$(e>=0,()=>`size must be non-negative, but got ${e}.`),$(n.size===o.size||n.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${o.shape}, weights shape: ${n.shape}.`);let s={x:o,weights:n},i={size:e};return E.runKernel(ua,s,i)}var kc=T({bincount_:u$});function c$(r,t){let e=v(r,"s0","broadcastArgs","int32"),o=v(t,"s1","broadcastArgs","int32");if(e.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${e.rank}`);if(o.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${o.rank}`);let n={s0:e,s1:o};return E.runKernel(ca,n)}var x1=T({broadcastArgs_:c$});function l$(r,t){let e=v(r,"broadcastTo","x"),o=e.shape;if(t.some(c=>!(c>0)||c%1!==0))throw new Error(`broadcastTo(): Invalid broadcast shape [${t}].`);if(t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){let c=e.shape.slice();for(;c.length<t.length;)c.unshift(1);e=L(e,c)}let n=e.shape,s=Array.from(t);for(let c=t.length-1;c>=0;c--)if(n[c]===t[c])s[c]=1;else if(e.shape[c]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${t}].`);if(s.map((c,l)=>c>1?l:-1).filter(c=>c>=0).length===0)return ke(e);let a={x:e},u={reps:s};return E.runKernel(Vn,a,u)}var uo=T({broadcastTo_:l$});function p$(r){let e={x:v(r,"x","ceil","float32")};return E.runKernel(vn,e)}var y1=T({ceil_:p$});function m$(r,t,e){let o=v(r,"x","clipByValue");$(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`);let n={x:o},s={clipValueMin:t,clipValueMax:e};return E.runKernel(la,n,s)}var _c=T({clipByValue_:m$});function f$(r){return kt(r,0)}var b1=T({concat1d_:f$});function d$(r,t){return kt(r,t)}var v1=T({concat2d_:d$});function h$(r,t){return kt(r,t)}var w1=T({concat3d_:h$});function g$(r,t){return kt(r,t)}var T1=T({concat4d_:g$});function x$(r,t,e,o,n="NHWC",s=[1,1],i){let a=v(r,"x","conv2d","float32"),u=v(t,"filter","conv2d","float32"),c=a,l=!1;a.rank===3&&(l=!0,c=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),$(c.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${c.rank}.`),$(u.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${u.rank}.`),Kt("conv2d",o,i);let p=n==="NHWC"?c.shape[3]:c.shape[1];$(p===u.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${u.shape[2]}.`),$(ce(e,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${s}'`);let m={x:c,filter:u},d={strides:e,pad:o,dataFormat:n,dilations:s,dimRoundingMode:i},h=E.runKernel(fa,m,d);return l?L(h,[h.shape[1],h.shape[2],h.shape[3]]):h}var co=T({conv2d_:x$});function y$(r,t,e,o,n="NWC",s=1,i){let a=v(r,"x","conv1d"),u=v(t,"filter","conv1d"),c=a,l=!1;a.rank===2&&(l=!0,c=L(a,[1,a.shape[0],a.shape[1]])),$(c.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${c.rank}.`),$(u.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${u.rank}.`),Kt("conv1d",o,i),$(c.shape[2]===u.shape[1],()=>`Error in conv1d: depth of input (${c.shape[2]}) must match input depth for filter ${u.shape[1]}.`),$(ce(e,s),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${s}'`),$(n==="NWC",()=>`Error in conv1d: got dataFormat of ${n} but only NWC is currently supported.`);let p=L(u,[1,u.shape[0],u.shape[1],u.shape[2]]),m=L(c,[c.shape[0],1,c.shape[1],c.shape[2]]),x=co(m,p,[1,e],o,"NHWC",[1,s],i);return l?L(x,[x.shape[2],x.shape[3]]):L(x,[x.shape[0],x.shape[2],x.shape[3]])}var C1=T({conv1d_:y$});function b$(r,t,e,o,n,s="NHWC",i){$(r.length===t.rank,()=>`Length of inShape (${r.length}) and rank of dy (${t.rank}) must match`);let a=r,u=t,c=!1;t.rank===3&&(c=!0,u=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]),a=[1,r[0],r[1],r[2]]),$(a.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${a.length}.`),$(u.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${u.rank}`),$(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);let l=s==="NHWC"?a[3]:a[1],p=s==="NHWC"?u.shape[3]:u.shape[1];$(l===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${l}) must match input depth for filter ${e.shape[2]}.`),$(p===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${e.shape[3]}.`),Kt("conv2dDerInput",n,i);let m={dy:u,filter:e},d={strides:o,pad:n,dataFormat:s,dimRoundingMode:i,inputShape:a},h=E.runKernel(ha,m,d);return c?L(h,[h.shape[1],h.shape[2],h.shape[3]]):h}var Ac=T({conv2DBackpropInput_:b$});function v$(r,t,e,o,n,s){let i=v(r,"x","conv2dTranspose"),a=v(t,"filter","conv2dTranspose");return Ac(e,i,a,o,n,"NHWC",s)}var S1=T({conv2dTranspose_:v$});function w$(r,t,e,o,n="NDHWC",s=[1,1,1]){let i=v(r,"x","conv3d"),a=v(t,"filter","conv3d"),u=i,c=!1;i.rank===4&&(c=!0,u=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),$(u.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${u.rank}.`),$(a.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${a.rank}.`),$(u.shape[4]===a.shape[3],()=>`Error in conv3d: depth of input (${u.shape[4]}) must match input depth for filter ${a.shape[3]}.`),$(ce(e,s),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${s}'`),$(n==="NDHWC",()=>`Error in conv3d: got dataFormat of ${n} but only NDHWC is currently supported.`);let l={x:u,filter:a},p={strides:e,pad:o,dataFormat:n,dilations:s},m=E.runKernel(ga,l,p);return c?L(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}var N1=T({conv3d_:w$});function T$(r,t,e,o,n){$(r.length===t.rank,()=>`Length of inShape (${r.length}) and rank of dy (${t.rank}) must match`);let s=r,i=t,a=!1;t.rank===4&&(a=!0,i=L(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),s=[1,r[0],r[1],r[2],r[3]]);let u=s[4],c=i.shape[4];$(s.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${s.length}.`),$(i.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),$(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),$(u===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${u}) must match input depth for filter ${e.shape[3]}.`),$(c===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${c}) must match output depth for filter ${e.shape[4]}.`);let l={dy:i,filter:e},p={pad:n,strides:o,inputShape:s},m=E.runKernel(xa,l,p);return a?L(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}var E1=T({conv3DBackpropInput_:T$});function C$(r,t,e,o,n){let s=v(r,"x","conv3dTranspose"),i=v(t,"filter","conv3dTranspose");return E1(e,s,i,o,n)}var $1=T({conv3dTranspose_:C$});function S$(r){let e={x:v(r,"x","cos","float32")};return E.runKernel(ya,e)}var I1=T({cos_:S$});function N$(r){let e={x:v(r,"x","cosh","float32")};return E.runKernel(ba,e)}var k1=T({cosh_:N$});function E$(r,t=0,e=!1,o=!1){let s={x:v(r,"x","cumprod")},i={axis:t,exclusive:e,reverse:o};return E.runKernel(va,s,i)}var _1=T({cumprod_:E$});function $$(r,t=0,e=!1,o=!1){let s={x:v(r,"x","cumsum")},i={axis:t,exclusive:e,reverse:o};return E.runKernel(wa,s,i)}var A1=T({cumsum_:$$});function I$(r,t,e,o=!1){let n=v(r,"x","denseBincount"),s=v(t,"weights","denseBincount");$(n.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${n.dtype}`),$(n.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${n.rank}.`),$(e>=0,()=>`size must be non-negative, but got ${e}.`),$(s.size===n.size||s.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${n.shape}, weights shape: ${s.shape}.`);let i={x:n,weights:s},a={size:e,binaryOutput:o};return E.runKernel(Ca,i,a)}var R1=T({denseBincount_:I$});function k$(r,t,e="NHWC"){let o=v(r,"x","depthToSpace","float32"),n=e==="NHWC"?o.shape[1]:o.shape[2],s=e==="NHWC"?o.shape[2]:o.shape[3],i=e==="NHWC"?o.shape[3]:o.shape[1];$(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),$(n*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${n} and ${t}  for depthToSpace with input shape
    ${o.shape}`),$(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t} for depthToSpace with input shape
        ${o.shape}`),$(i%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${i} for depthToSpace with input shape ${o.shape}`);let a={x:o},u={blockSize:t,dataFormat:e};return E.runKernel(Sa,a,u)}var D1=T({depthToSpace_:k$});function _$(r,t,e,o,n="NHWC",s=[1,1],i){let a=v(r,"x","depthwiseConv2d","float32"),u=v(t,"filter","depthwiseConv2d","float32"),c=a,l=!1;a.rank===3&&(l=!0,c=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),$(c.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${c.rank}.`),$(u.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${u.rank}.`);let p=n==="NHWC"?c.shape[3]:c.shape[1];$(p===u.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${u.shape[2]}.`),Kt("depthwiseConv2d",o,i);let m={x:c,filter:u},d={strides:e,pad:o,dataFormat:n,dilations:s,dimRoundingMode:i},h=E.runKernel(Na,m,d);return l?L(h,[h.shape[1],h.shape[2],h.shape[3]]):h}var Zn=T({depthwiseConv2d_:_$});function A$(r){let e={x:v(r,"x","diag")};return E.runKernel(Ia,e)}var F1=T({diag_:A$});function R$(r,t,e,o,n=[1,1],s="NHWC"){let i=v(r,"x","dilation2d"),a=v(t,"filter","dilation2d");$(i.rank===3||i.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),$(a.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${a.rank}.`),$(s==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${s}`);let u=i,c=!1;i.rank===3&&(u=L(i,[1,i.shape[0],i.shape[1],i.shape[2]]),c=!0);let l={x:u,filter:a},p={strides:e,pad:o,dilations:n},m=E.runKernel(ka,l,p);return c?L(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var O1=T({dilation2d_:R$});function D$(r,t){let e=v(r,"a","equal","string_or_numeric"),o=v(t,"b","equal","string_or_numeric");[e,o]=ct(e,o),yt(e.shape,o.shape);let n={a:e,b:o};return E.runKernel(wn,n)}var Rc=T({equal_:D$});function F$(r,t,e){let o=v(t,"a","where"),n=v(e,"b","where"),s=v(r,"condition","where","bool"),i=yt(yt(s.shape,o.shape),n.shape),a=uo(s,i),u=uo(o,i),c=uo(n,i),l={condition:a,t:u,e:c};return E.runKernel(_u,l)}var lr=T({where_:F$});function O$(r){let e={x:v(r,"x","zerosLike")};return E.runKernel(rc,e)}var Jn=T({zerosLike_:O$});function P$(r,t){let e=v(r,"a","div"),o=v(t,"b","div");[e,o]=ct(e,o);let n=xt(e,o),s=Jn(n),i=Rc(o,s);return lr(i,s,n)}var P1=T({divNoNan_:P$});function L$(r,t){let e=v(r,"t1","dot"),o=v(t,"t2","dot");$((e.rank===1||e.rank===2)&&(o.rank===1||o.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${o.rank}.`);let n=e.rank===1?e.size:e.shape[1],s=o.rank===1?o.size:o.shape[0];if($(n===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${n} and ${s}.`),e.rank===1&&o.rank===1){let i=L(e,[1,-1]),a=L(o,[-1,1]),u=bt(i,a);return L(u,[])}else if(e.rank===1&&o.rank===2){let i=L(e,[1,-1]),a=L(o,[o.shape[0],o.shape[1]]),u=bt(i,a);return L(u,[u.size])}else if(e.rank===2&&o.rank===1){let i=L(o,[-1,1]),a=bt(e,i);return L(a,[a.size])}else{let i=L(o,[o.shape[0],o.shape[1]]);return bt(e,i)}}var L1=T({dot_:L$});function B$(r,...t){let e=t.map((n,s)=>v(n,`tensors${s}`,"einsum")),o={equation:r};return E.runKernel(Aa,e,o)}var B1=T({einsum_:B$});function V$(r){let e={x:v(r,"x","elu","float32")};return E.runKernel(Ra,e)}var Dc=T({elu_:V$});function M$(r){let t=v(r,"x","erf");$(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=gt(t,"float32"));let e={x:t};return E.runKernel(Da,e)}var V1=T({erf_:M$});function If(r,t){for(let e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function M1(r,t,e){let o=r.length+t.length,n=[],s=0,i=0;for(let a=0;a<o;a++)e.indexOf(a)===-1?n.push(r[s++]):n.push(t[i++]);return n}function U$(r,t){let e=[],o=r.length;for(let s=0;s<o;s++)t.indexOf(s)===-1&&e.push(r[s]);let n=t.map(s=>r[s]);return[e,n]}function Br(r,t){let e=t.map(o=>1);return M1(r,e,t)}function G$(r,t,e){$(If(t,e),()=>`${r} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function W$(r,t){if(If(r,t))return null;let e=[];for(let o=0;o<t;++o)r.indexOf(o)===-1&&e.push(o);return r.forEach(o=>e.push(o)),e}function z$(r){return r.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function H$(r,t){let e=[];for(let o=t-r;o<t;++o)e.push(o);return e}function q$(r,t=null,e=!1){let n={x:v(r,"x","max")},s={reductionIndices:t,keepDims:e};return E.runKernel(tu,n,s)}var Sr=T({max_:q$});function j$(r,t=null,e=!1){let n={x:v(r,"x","min")},s={axis:t,keepDims:e};return E.runKernel(su,n,s)}var ii=T({min_:j$});function X$(r,t){let e=v(r,"base","pow"),o=v(t,"exp","pow");[e,o]=ct(e,o);let n={a:e,b:o};return E.runKernel(gu,n)}var ts=T({pow_:X$});function st(r,t){if((Ee(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Ee(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return me(r,[],[],t)}function Y$(r){let e={x:v(r,"x","sqrt","float32")};return E.runKernel(Pn,e)}var ai=T({sqrt_:Y$});function Q$(r){let t=v(r,"x","square"),e={};return E.runKernel("Square",{x:t},e)}var lo=T({square_:Q$});function Z$(r,t=null,e=!1){let o=v(r,"x","sum");o.dtype==="bool"&&(o=gt(o,"int32"));let n={x:o},s={axis:t,keepDims:e};return E.runKernel(Pu,n,s)}var vt=T({sum_:Z$});function J$(r,t="euclidean",e=null,o=!1){r=v(r,"x","norm");let n=U1(r,t,e),s=n.shape;if(o){let i=Qr(e,r.shape);s=Br(n.shape,i)}return L(n,s)}function U1(r,t,e=null){if(r.rank===0)return ue(r);if(r.rank!==1&&e===null)return U1(L(r,[-1]),t,e);if(r.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return vt(ue(r),e);if(t===1/0)return Sr(ue(r),e);if(t===-1/0)return ii(ue(r),e);if(t==="euclidean"||t===2)return ai(vt(ts(ue(r),st(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return Sr(vt(ue(r),e[0]),e[1]-1);if(t===1/0)return Sr(vt(ue(r),e[1]),e[0]);if(t===-1/0)return ii(vt(ue(r),e[1]),e[0]);if(t==="fro"||t==="euclidean")return ai(vt(lo(r),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}var Uo=T({norm_:J$});function tI(r,t=null,e=!1){return Uo(r,"euclidean",t,e)}var G1=T({euclideanNorm_:tI});function eI(r){let e={x:v(r,"x","exp")};return E.runKernel(Tn,e)}var Te=T({exp_:eI});function rI(r,t=0){let e=v(r,"x","expandDims","string_or_numeric");$(t<=e.rank,()=>"Axis must be <= rank of the tensor");let o={input:e},n={dim:t};return E.runKernel(Fa,o,n)}var Ye=T({expandDims_:rI});function oI(r){let e={x:v(r,"x","expm1")};return E.runKernel(Cn,e)}var W1=T({expm1_:oI});function nI(r,t){let e=v(r,"x","tile","string_or_numeric");$(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);let o={x:e},n={reps:t};return E.runKernel(Vn,o,n)}var po=T({tile_:nI});function sI(r,t,e,o="float32"){t==null&&(t=r);let n=pt([r,t],o),s=r<=t?r:t;for(let a=0;a<s;++a)n.set(1,a,a);let i=L(n.toTensor(),[r,t]);if(e==null)return i;if(e.length===1)return po(Ye(i,0),[e[0],1,1]);if(e.length===2)return po(Ye(Ye(i,0),0),[e[0],e[1],1,1]);if(e.length===3)return po(Ye(Ye(Ye(i,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}var Fc=T({eye_:sI});function es(r,t,e){let o={shape:r,value:t,dtype:e};return E.runKernel(Pa,{},o)}function iI(r){let e={x:v(r,"x","floor","float32")};return E.runKernel(Sn,e)}var Oc=T({floor_:iI});function aI(r,t,e=0,o=0){let n=v(r,"x","gather"),s=v(t,"indices","gather","int32"),i={x:n,indices:s},a={axis:e,batchDims:o};return E.runKernel(Ma,i,a)}var Pc=T({gather_:aI});function uI(r,t){let e=v(r,"a","greater","string_or_numeric"),o=v(t,"b","greater","string_or_numeric");[e,o]=ct(e,o),yt(e.shape,o.shape);let n={a:e,b:o};return E.runKernel(Nn,n)}var Go=T({greater_:uI});function cI(r,t){let e=v(r,"a","greaterEqual","string_or_numeric"),o=v(t,"b","greaterEqual","string_or_numeric");[e,o]=ct(e,o),yt(e.shape,o.shape);let n={a:e,b:o};return E.runKernel(En,n)}var Lc=T({greaterEqual_:cI});function lI(r){let e={x:v(r,"x","isFinite")};return E.runKernel(za,e)}var z1=T({isFinite_:lI});function pI(r){let e={x:v(r,"x","isInf")};return E.runKernel(Ha,e)}var H1=T({isInf_:pI});function mI(r){let e={x:v(r,"x","isNaN")};return E.runKernel(Ka,e)}var K1=T({isNaN_:mI});function fI(r,t=.2){let o={x:v(r,"x","leakyRelu")},n={alpha:t};return E.runKernel(qa,o,n)}var Bc=T({leakyRelu_:fI});function dI(r,t){let e=v(r,"a","less","string_or_numeric"),o=v(t,"b","less","string_or_numeric");[e,o]=ct(e,o),yt(e.shape,o.shape);let n={a:e,b:o};return E.runKernel($n,n)}var q1=T({less_:dI});function hI(r,t){let e=v(r,"a","lessEqual","string_or_numeric"),o=v(t,"b","lessEqual","string_or_numeric");[e,o]=ct(e,o),yt(e.shape,o.shape);let n={a:e,b:o};return E.runKernel(In,n)}var rs=T({lessEqual_:hI});function j1(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");let o={start:r,stop:t,num:e};return E.runKernel(ja,{},o)}function gI(r,t=5,e=1,o=1,n=.5){let s=v(r,"x","localResponseNormalization");$(s.rank===4||s.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${s.rank}.`),$(Dr(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let i=s,a=!1;s.rank===3&&(a=!0,i=L(s,[1,s.shape[0],s.shape[1],s.shape[2]]));let u={x:i},c={depthRadius:t,bias:e,alpha:o,beta:n},l=E.runKernel(Ja,u,c);return a?L(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var X1=T({localResponseNormalization_:gI});function xI(r){let e={x:v(r,"x","log","float32")};return E.runKernel(kn,e)}var Vr=T({log_:xI});function yI(r){let e={x:v(r,"x","log1p")};return E.runKernel(Xa,e)}var Vc=T({log1p_:yI});function Ce(r){return E.customGrad(r)}function bI(r){let e={x:v(r,"x","softplus")};return E.runKernel(Ou,e)}var Mc=T({softplus_:bI});function vI(r){let t=v(r,"x","logSigmoid");return Ce(o=>({value:de(Mc(de(o))),gradFunc:i=>X(i,Xe(de(o)))}))(t)}var Y1=T({logSigmoid_:vI});function wI(r,t){let e=v(r,"a","sub"),o=v(t,"b","sub");[e,o]=ct(e,o);let n={a:e,b:o};return E.runKernel(Bn,n)}var ot=T({sub_:wI});function TI(r,t=-1){let e=v(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return Ce((n,s)=>{let a=Sr(n,t,!0),u=ot(n,a),c=ot(gt(u,"float32"),Vr(vt(Te(u),t,!0)));return s([c]),{value:c,gradFunc:(p,m)=>{let[d]=m,h=!0,g=Te(d);return ot(p,X(vt(p,t,h),g))}}})(e)}var Q1=T({logSoftmax_:TI});function CI(r,t=null,e=!1){let o=v(r,"x","logSumExp"),n=Qr(t,o.shape),s=Sr(o,n,!0),i=ot(o,s),a=Te(i),u=vt(a,n),c=Vr(u),l=ht(L(s,c.shape),c);if(e){let p=Br(l.shape,n);return L(l,p)}return l}var Uc=T({logSumExp_:CI});function SI(r,t){let e=v(r,"a","logicalAnd","bool"),o=v(t,"b","logicalAnd","bool");yt(e.shape,o.shape);let n={a:e,b:o};return E.runKernel(Ya,n)}var Wo=T({logicalAnd_:SI});function NI(r){let e={x:v(r,"x","logicalNot","bool")};return E.runKernel(Qa,e)}var Gc=T({logicalNot_:NI});function EI(r,t){let e=v(r,"a","logicalOr","bool"),o=v(t,"b","logicalOr","bool");yt(e.shape,o.shape);let n={a:e,b:o};return E.runKernel(Za,n)}var Wc=T({logicalOr_:EI});function $I(r,t){let e=v(r,"a","logicalXor","bool"),o=v(t,"b","logicalXor","bool");return yt(e.shape,o.shape),Wo(Wc(r,t),Gc(Wo(r,t)))}var Z1=T({logicalXor_:$I});var zc=2147483648;function II(r,t,e="left"){let o=v(r,"sortedSequence","searchSorted"),n=v(t,"values","searchSorted"),s=o.shape[o.shape.length-1],i=n.shape[n.shape.length-1],a=L(o,[-1,s]),u=L(n,[-1,i]);if(a.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(a.shape[0]!==u.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(dt(u.shape)>=zc)throw new Error(`values tensor size must less than ${zc}`);if(a.shape[1]>=zc)throw new Error(`trailing dim_size must less than ${zc} for int32 output type, was ${a.shape[1]}`);let c={sortedSequence:a,values:u},l={side:e};return E.runKernel(ku,c,l)}var ui=T({searchSorted_:II});function J1(r,t){return ui(r,t,"left")}function kI(r,t,e,o,n){let s=v(r,"x","maxPool"),i=1,a=s,u=!1;s.rank===3&&(u=!0,a=L(s,[1,s.shape[0],s.shape[1],s.shape[2]])),$(a.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${a.rank}.`),$(ce(e,i),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${i}'`),Kt("maxPool",o,n);let c={x:a},l={filterSize:t,strides:e,pad:o,dimRoundingMode:n},p=E.runKernel(eu,c,l);return u?L(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var Hc=T({maxPool_:kI});function _I(r,t=[1,1,1],e,o,n,s="NDHWC"){let i=v(r,"x","maxPool3d"),a=i,u=!1;i.rank===4&&(u=!0,a=L(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),$(a.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${a.rank}.`),$(s==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),Kt("maxPool3d",o,n);let c={x:a},l={filterSize:t,strides:e,pad:o,dimRoundingMode:n,dataFormat:s},p=E.runKernel(ru,c,l);return u?L(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var t0=T({maxPool3d_:_I});function AI(r,t,e,o,n=!1){let i={x:v(r,"x","maxPoolWithArgmax")},a={filterSize:t,strides:e,pad:o,includeBatchInIndex:n},u=E.runKernel(ou,i,a);return{result:u[0],indexes:u[1]}}var e0=T({maxPoolWithArgmax_:AI});function RI(r,t){let e=v(r,"a","maximum"),o=v(t,"b","maximum");[e,o]=ct(e,o),e.dtype==="bool"&&(e=gt(e,"int32"),o=gt(o,"int32")),yt(e.shape,o.shape);let n={a:e,b:o};return E.runKernel(_n,n)}var r0=T({maximum_:RI});function DI(r,t=null,e=!1){let n={x:v(r,"x","mean")},s={axis:t,keepDims:e};return E.runKernel(nu,n,s)}var zo=T({mean_:DI});function Qe(r,t="float32"){if(t==="complex64"){let o=Qe(r,"float32"),n=Qe(r,"float32");return ve(o,n)}let e=bn(dt(r),t);return E.makeTensor(e,r,t)}function Nr(r,t="float32"){if(t==="complex64"){let o=Nr(r,"float32"),n=Qe(r,"float32");return ve(o,n)}let e=Fs(dt(r),t);return E.makeTensor(e,r,t)}function o0(r,t,{indexing:e="xy"}={}){if(e!=="xy"&&e!=="ij")throw new TypeError(`${e} is not a valid third argument to meshgrid`);if(r===void 0)return[];let o=v(r,"x","meshgrid",r instanceof St?r.dtype:"float32");if(t===void 0)return[o];let n=v(t,"y","meshgrid",t instanceof St?t.dtype:"float32"),s=dt(o.shape),i=dt(n.shape);return e==="xy"?(o=L(o,[1,-1]),n=L(n,[-1,1]),[bt(Nr([i,1],o.dtype),o),bt(n,Nr([1,s],n.dtype))]):(o=L(o,[-1,1]),n=L(n,[1,-1]),[bt(o,Nr([1,i],o.dtype)),bt(Nr([s,1],n.dtype),n)])}function FI(r,t){let e=v(r,"a","minimum"),o=v(t,"b","minimum");[e,o]=ct(e,o),e.dtype==="bool"&&(e=gt(e,"int32"),o=gt(o,"int32")),yt(e.shape,o.shape);let n={a:e,b:o};return E.runKernel(An,n)}var Kc=T({minimum_:FI});function OI(r,t,e){$(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);let o=v(r,"x","mirrorPad");if(o.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");$(t.length===o.rank,()=>`Padding doesn't match input. Must be ${o.rank}. Got ${t.length}.`);let n=e==="reflect"?1:0;for(let a=0;a<o.rank;a++)$(t[a].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),$(t[a][0]>=0&&t[a][0]<=o.shape[a]-n&&t[a][1]>=0&&t[a][1]<=o.shape[a]-n,()=>`Padding in dimension ${a} cannot be greater than or equal to ${o.shape[a]-n} or less than 0 for input of shape ${o.shape}`);let s={paddings:t,mode:e},i={x:o};return E.runKernel(iu,i,s)}var n0=T({mirrorPad_:OI});function PI(r,t){let e=v(r,"a","mod"),o=v(t,"b","mod");[e,o]=ct(e,o);let n={a:e,b:o};return E.runKernel(au,n)}var s0=T({mod_:PI});function LI(r,t=null,e=!1){r=v(r,"x","moments");let o=Qr(t,r.shape),n=zo(r,o,e),s=n.shape;e||(s=Br(n.shape,o));let i=lo(ot(gt(r,"float32"),L(n,s))),a=zo(i,o,e);return{mean:n,variance:a}}var i0=T({moments_:LI});function BI(r,t,e,o){let n=v(t,"data","multiRNNCell"),s=Fo(e,"c","multiRNNCell"),i=Fo(o,"h","multiRNNCell"),a=n,u=[];for(let p=0;p<r.length;p++){let m=r[p](a,s[p],i[p]);u.push(m[0]),u.push(m[1]),a=m[1]}let c=[],l=[];for(let p=0;p<u.length;p+=2)c.push(u[p]),l.push(u[p+1]);return[c,l]}var a0=T({multiRNNCell_:BI});function VI(r,t,e,o=!1){let n=v(r,"logits","multinomial"),s=n.size,i=n.rank;if(s<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${s}.`);if(i>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${i}`);e=e||Math.random();let u={logits:i===1?L(n,[1,-1]):n},c={numSamples:t,seed:e,normalized:o},l=E.runKernel(uu,u,c);return i===1?L(l,[l.size]):l}var u0=T({multinomial_:VI});function MI(r,t){let e=v(r,"a","notEqual","string_or_numeric"),o=v(t,"b","notEqual","string_or_numeric");[e,o]=ct(e,o),yt(e.shape,o.shape);let n={a:e,b:o};return E.runKernel(Dn,n)}var qc=T({notEqual_:MI});function UI(r){let e={x:v(r,"x","onesLike")};return E.runKernel(mu,e)}var c0=T({onesLike_:UI});function GI(r,t){let e=v(r,"v1","outerProduct"),o=v(t,"v2","outerProduct");$(e.rank===1&&o.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${e.rank} and ${o.rank}.`);let n=L(e,[-1,1]),s=L(o,[1,-1]);return bt(n,s)}var l0=T({outerProduct_:GI});function WI(r,t,e=0){let o=v(r,"x","pad");if(o.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");let n={paddings:t,constantValue:e},s={x:o};return E.runKernel(hu,s,n)}var Er=T({pad_:WI});function zI(r,t,e=0){return $(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),Er(r,[t],e)}var p0=T({pad1d_:zI});function HI(r,t,e=0){return $(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Er(r,t,e)}var m0=T({pad2d_:HI});function KI(r,t,e=0){return $(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Er(r,t,e)}var f0=T({pad3d_:KI});function qI(r,t,e=0){return $(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),Er(r,t,e)}var d0=T({pad4d_:qI});function jI(r,t,e){let o=v(r,"x","spaceToBatchND");$(o.rank>=1+t.length,()=>`input rank ${o.rank} should be > than [blockShape] ${t.length}`),$(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),$(o.shape.reduce((i,a,u)=>u>0&&u<=t.length?i&&(a+e[u-1][0]+e[u-1][1])%t[u-1]===0:i,!0),()=>`input spatial dimensions ${o.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);let n={x:o},s={blockShape:t,paddings:e};return E.runKernel(Lu,n,s)}var jc=T({spaceToBatchND_:jI});function XI(r,t,e,o,n,s,i){n==null&&(n=[1,1]),s==null&&(s=1),o===0&&(o="valid");let a=v(r,"x","maxPool"),u=a,c=!1;a.rank===3&&(c=!0,u=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),$(ce(s,n),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${n}'`);let l=Ef(u.shape,t,s,n,o),p=[l.dilationHeight,l.dilationWidth],m;o==="same"?m=QI([l.filterHeight,l.filterWidth],p):m=[[0,0],[0,0]];let d=p[0]===1&&p[1]===1,[h,g]=YI([l.inHeight,l.inWidth],p,m),x=d?o:"valid",w=d?u:jc(u,p,h),k=(e==="avg"?()=>$c(w,t,s,x,i):()=>Hc(w,t,s,x,i))(),_=d?k:Ic(k,p,g);return c?L(_,[_.shape[1],_.shape[2],_.shape[3]]):_}function YI(r,t,e){let o=e.map(l=>l[0]),n=e.map(l=>l[1]),s=r.concat(o,n),i=t.map((l,p)=>(l-s[p]%l)%l),a=n.map((l,p)=>l+i[p]),u=t.map((l,p)=>[o[p],a[p]]),c=t.map((l,p)=>[0,i[p]]);return[u,c]}function QI(r,t){let o=r.map((i,a)=>i+(i-1)*(t[a]-1)).map(i=>i-1),n=o.map(i=>Math.floor(i/2)),s=o.map((i,a)=>i-n[a]);return o.map((i,a)=>[n[a],s[a]])}var h0=T({pool_:XI});function ZI(r,t){let e=v(r,"x","prelu"),o=v(t,"alpha","prelu"),n={x:e,alpha:o};return E.runKernel(xu,n)}var Xc=T({prelu_:ZI});function JI(r,t=null,e=!1){let o=v(r,"x","prod");o.dtype==="bool"&&(o=gt(o,"int32"));let n={x:o},s={axis:t,keepDims:e};return E.runKernel(Gs,n,s)}var g0=T({prod_:JI});function t4(r,t,e,o,n){let s=v(r,"shape","raggedTensorToTensor","int32"),i=v(t,"values","raggedTensorToTensor"),a=v(e,"defaultValue","raggedTensorToTensor",i.dtype),u=o.map((p,m)=>v(p,`tensors${m}`,"raggedTensorToTensor","int32")),c={shape:s,values:i,defaultValue:a,rowPartitionTensors:u},l={rowPartitionTypes:n};return E.runKernel(yu,c,l)}var x0=T({raggedTensorToTensor_:t4});function e4(r,t,e){let o=dt(r),n=null;if(e==null||e==="float32")n=new Float32Array(o);else if(e==="int32")n=new Int32Array(o);else if(e==="bool")n=new Uint8Array(o);else throw new Error(`Unknown data type ${e}`);for(let s=0;s<o;s++)n[s]=t();return E.makeTensor(n,r,e)}var y0=T({rand_:e4});var Jc=Fm(O0());var Ko=class{constructor(t,e,o,n,s){this.mean=t,this.stdDev=e,this.dtype=o,this.nextVal=NaN,this.truncated=n,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);let i=s||Math.random();this.random=Jc.alea(i.toString())}nextValue(){if(!isNaN(this.nextVal)){let n=this.nextVal;return this.nextVal=NaN,n}let t,e,o=!1;for(;!o;){let n,s,i;do n=2*this.random()-1,s=2*this.random()-1,i=n*n+s*s;while(i>=1||i===0);let a=Math.sqrt(-2*Math.log(i)/i);t=this.mean+this.stdDev*n*a,e=this.mean+this.stdDev*s*a,(!this.truncated||this.isValidTruncated(t))&&(o=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}},Qc=class{constructor(t,e,o,n){this.alpha=t,this.beta=1/e,this.dtype=o;let s=n||Math.random();this.randu=Jc.alea(s.toString()),this.randn=new Ko(0,1,o,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,e,o,n,s,i;for(;;){do n=this.randn.nextValue(),i=1+this.c*n;while(i<=0);if(i*=i*i,t=n*n,e=1-.331*t*t,o=.5*t+this.d*(1-i+Math.log(i)),s=this.randu(),s<e||Math.log(s)<o)break}return i=1/this.beta*this.d*i,this.alpha<1&&(i*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(i)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}},Zc=class{constructor(t=0,e=1,o,n){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=o,n==null&&(n=Math.random()),typeof n=="number"&&(n=n.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=Jc.alea(n)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}};function u4(r,t,e=1,o="float32",n){if(e==null&&(e=1),o==null&&(o="float32"),o!=="float32"&&o!=="int32")throw new Error(`Unsupported data type ${o}`);let s=new Qc(t,e,o,n),i=pt(r,o);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}var P0=T({randomGamma_:u4});function c4(r,t=0,e=1,o,n){if(o!=null&&o==="bool")throw new Error(`Unsupported data type ${o}`);let s=new Ko(t,e,o,!1,n),i=pt(r,o);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}var tl=T({randomNormal_:c4});function l4(r,t,e){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return tl(r,0,1,t,e)}var L0=T({randomStandardNormal_:l4});function p4(r,t=0,e=1,o="float32",n){let s=pt(r,o),i=new Zc(t,e,null,n);for(let a=0;a<s.values.length;a++)s.values[a]=i.nextValue();return s.toTensor()}var el=T({randomUniform_:p4});function mo(r,t,e=1,o="float32"){if(e===0)throw new Error("Cannot have a step of zero");let n={start:r,stop:t,step:e,dtype:o};return E.runKernel(bu,{},n)}function m4(r){let e={x:v(r,"x","reciprocal")};return E.runKernel(vu,e)}var B0=T({reciprocal_:m4});function f4(r){let e={x:v(r,"x","relu")};return E.runKernel(wu,e)}var fo=T({relu_:f4});function d4(r){let e={x:v(r,"x","relu6")};return E.runKernel(Nu,e)}var rl=T({relu6_:d4});function h4(r,t){let o={x:v(r,"x","reverse")},n={dims:t};return E.runKernel(Eu,o,n)}var Le=T({reverse_:h4});function g4(r){let t=v(r,"x","reverse");return $(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),Le(t,0)}var V0=T({reverse1d_:g4});function x4(r,t){let e=v(r,"x","reverse");return $(e.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${e.rank}.`),Le(e,t)}var M0=T({reverse2d_:x4});function y4(r,t){let e=v(r,"x","reverse");return $(e.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${e.rank}.`),Le(e,t)}var U0=T({reverse3d_:y4});function b4(r,t){let e=v(r,"x","reverse");return $(e.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${e.rank}.`),Le(e,t)}var G0=T({reverse4d_:b4});function v4(r){let e={x:v(r,"x","round")};return E.runKernel($u,e)}var ol=T({round_:v4});function w4(r){let e={x:v(r,"x","rsqrt","float32")};return E.runKernel(Fn,e)}var W0=T({rsqrt_:w4});function T4(r){let e={x:v(r,"x","selu")};return E.runKernel(Au,e)}var z0=T({selu_:T4});function C4(r,t,e,o,n,s=[1,1],i="NHWC"){let a=v(r,"x","separableConv2d"),u=v(t,"depthwiseFilter","separableConv2d"),c=v(e,"pointwiseFilter","separableConv2d"),l=a,p=!1;if(a.rank===3&&(p=!0,l=L(a,[1,a.shape[0],a.shape[1],a.shape[2]])),i==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");$(l.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${l.rank}.`),$(u.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${u.rank}.`),$(c.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${u.rank}.`),$(c.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${c.shape[0]}.`),$(c.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${c.shape[1]}.`);let m=u.shape[2],d=u.shape[3];$(c.shape[2]===m*d,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${m*d}, but got ${c.shape[2]}.`);let h=Zn(l,u,o,n,i,s),x=co(h,c,1,"valid",i);return p?L(x,[x.shape[1],x.shape[2],x.shape[3]]):x}var H0=T({separableConv2d_:C4});async function S4(r,t){let e=v(r,"x","setdiff1d"),o=v(t,"y","setdiff1d");$(e.dtype===o.dtype,()=>`x and y should have the same dtype, but got x (${e.dtype}) and y (${o.dtype}).`),$(e.rank===1,()=>`x should be 1D tensor, but got x (${e.shape}).`),$(o.rank===1,()=>`y should be 1D tensor, but got y (${o.shape}).`);let n=await e.data(),s=await o.data(),i=new Set(s),a=0;for(let l=0;l<n.length;l++)i.has(n[l])||a++;let u=new ur([a],e.dtype),c=new ur([a],"int32");for(let l=0,p=0;l<n.length;l++)i.has(n[l])||(u.values[p]=n[l],c.values[p]=l,p++);return[u.toTensor(),c.toTensor()]}var K0=S4;function N4(r){let e={x:v(r,"x","sign")};return E.runKernel(Fu,e)}var q0=T({sign_:N4});function E4(r){let e={x:v(r,"x","sin","float32")};return E.runKernel(Ru,e)}var j0=T({sin_:E4});function $4(r){let e={x:v(r,"x","sinh")};return E.runKernel(Du,e)}var X0=T({sinh_:$4});function I4(r,t,e){let o=v(r,"x","slice1d");return $(o.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${o.rank} tensor`),rt(o,[t],[e])}var Y0=T({slice1d_:I4});function k4(r,t,e){let o=v(r,"x","slice2d");return $(o.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${o.rank} tensor`),rt(o,t,e)}var Q0=T({slice2d_:k4});function _4(r,t,e){let o=v(r,"x","slice3d");return $(o.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${o.rank} tensor`),rt(o,t,e)}var Z0=T({slice3d_:_4});function A4(r,t,e){let o=v(r,"x","slice4d");return $(o.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${o.rank} tensor`),rt(o,t,e)}var J0=T({slice4d_:A4});function R4(r,t=-1){let e=v(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);let o={logits:e},n={dim:t};return E.runKernel(Vu,o,n)}var t2=T({softmax_:R4});function D4(r){$(r.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${r.dtype}.`);let t={input:r};return E.runKernel(Oa,t)}var os=T({fft_:D4});function F4(r){$(r.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${r.dtype}.`);let t={input:r};return E.runKernel(Ga,t)}var qo=T({ifft_:F4});function O4(r){let t=r.shape[r.shape.length-1],e=r.size/t,o;if(t<=2){let n=L(r,[e,t]);o=qo(n)}else{let n=[e,2*(t-1)],s=L(Lr(r),[e,t]),i=L(so(r),[e,t]),a=Le(rt(s,[0,1],[e,t-2]),1),u=X(Le(rt(i,[0,1],[e,t-2]),1),st(-1)),c=kt([s,a],1),l=kt([i,u],1),p=L(ve(c,l),[n[0],n[1]]);o=qo(p)}if(o=Lr(o),r.rank===3&&r.shape[0]!==0){let n=o,s=r.shape[0];o=L(o,[s,o.shape[0]/s,o.shape[1]]),n.dispose()}return o}var nl=T({irfft_:O4});function P4(r,t,e=0){let n={x:v(r,"x","split")},s={numOrSizeSplits:t,axis:e};return E.runKernel(Bu,n,s)}var Mr=T({split_:P4});function L4(r,t){$(r.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${r.dtype}`);let e=r.shape[r.shape.length-1],o=r.size/e,n;if(t!=null&&t<e){let h=r.shape.map(x=>0),g=r.shape.map(x=>x);g[r.shape.length-1]=t,n=rt(r,h,g),e=t}else if(t!=null&&t>e){let h=r.shape.map(g=>g);h[r.shape.length-1]=t-e,n=kt([r,Qe(h)],r.shape.length-1),e=t}else n=r;let s=Jn(n),i=L(ve(n,s),[o,e]),a=os(i),u=Math.floor(e/2)+1,c=Lr(a),l=so(a),p=Mr(c,[u,e-u],c.shape.length-1),m=Mr(l,[u,e-u],l.shape.length-1),d=n.shape.slice();return d[n.shape.length-1]=u,L(ve(p[0],m[0]),d)}var ns=T({rfft_:L4});function B4(r,t){let e=v(r,"a","squaredDifference"),o=v(t,"b","squaredDifference");[e,o]=ct(e,o),yt(e.shape,o.shape);let n={a:e,b:o},s={};return E.runKernel(Ln,n,s)}var sl=T({squaredDifference_:B4});function V4(r,t){let e=v(r,"x","squeeze","string_or_numeric");return L(e,Om(e.shape,t).newShape)}var Xt=T({squeeze_:V4});function M4(r,t=0){let e=Fo(r,"tensors","stack","string_or_numeric");$(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&$(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");let o=e,n={axis:t};return E.runKernel(du,o,n)}var he=T({stack_:M4});function U4(r,t=0){let o={x:v(r,"x","step")},n={alpha:t};return E.runKernel(oc,o,n)}var il=T({step_:U4});function G4(r,t,e,o,n=0,s=0,i=0,a=0,u=0){let l={x:v(r,"x","stridedSlice","string_or_numeric")},p={begin:t,end:e,strides:o,beginMask:n,endMask:s,ellipsisMask:i,newAxisMask:a,shrinkAxisMask:u};return E.runKernel(Hu,l,p)}var e2=T({stridedSlice_:G4});function W4(r){let e={x:v(r,"x","tan","float32")};return E.runKernel(Xu,e)}var r2=T({tan_:W4});function qt(r,t){Oe(r);let e=be(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return me(r,null,e,t)}function pr(r,t,e){if(Oe(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");let o=be(r,e);if(o.length!==2&&o.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return me(r,t,o,e)}function o2(r,t,e){if(Oe(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");let o=be(r,e);if(o.length!==4&&o.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return me(r,t,o,e)}function n2(r,t,e){if(Oe(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");let o=be(r,e);if(o.length!==5&&o.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return me(r,t,o,e)}function s2(r,t,e){if(Oe(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");let o=be(r,e);if(o.length!==6&&o.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||o,me(r,t,o,e)}function z4(r,t=1,e=!0){let o=v(r,"x","topk");if(o.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");let n=o.shape[o.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>n)throw new Error(`'k' passed to topk() must be <= the last dimension (${n}) but got ${t}`);let s={x:o},i={k:t,sorted:e},[a,u]=E.runKernel(Qu,s,i);return{values:a,indices:u}}var i2=T({topk_:z4});function H4(r,t=0,e=1,o,n){if(o!=null&&o==="bool")throw new Error("Unsupported data type $ { dtype }");let s=new Ko(t,e,o,!0,n),i=pt(r,o);for(let a=0;a<i.values.length;a++)i.values[a]=s.nextValue();return i.toTensor()}var a2=T({truncatedNormal_:H4});function K4(r,t=0){let e=v(r,"x","unique","string_or_numeric");$(e.rank>0,()=>"The input tensor must be at least 1D");let o={x:e},n={axis:t},[s,i]=E.runKernel(Ju,o,n);return{values:s,indices:i}}var u2=T({unique_:K4});function q4(r,t,e){let o=v(r,"x","unsortedSegmentSum"),n=v(t,"segmentIds","unsortedSegmentSum","int32");$(Dr(e),()=>"numSegments must be of dtype int");let s={x:o,segmentIds:n},i={numSegments:e};return E.runKernel(ec,s,i)}var c2=T({unsortedSegmentSum_:q4});function j4(r,t=0){let e=v(r,"x","unstack","string_or_numeric");$(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);let o={value:e},n={axis:t};return E.runKernel(tc,o,n)}var Be=T({unstack_:j4});function l2(r,t){return ui(r,t,"right")}function p2(r,t=!0,e,o){return E.makeVariable(r,t,e,o)}function al(r,t){let e=[];for(let s=0;s<t.length;s++)t[s]&&e.push(s);let o=pt(r,"int32"),n=pt([e.length,r.length],"int32");for(let s=0;s<e.length;s++){let i=o.indexToLoc(e[s]),a=s*r.length;n.values.set(i,a)}return n.toTensor()}async function X4(r){let t=v(r,"condition","whereAsync","bool"),e=await t.data(),o=al(t.shape,e);return r!==t&&t.dispose(),o}var ul=X4;async function Y4(r,t,e){let o=v(r,"tensor","boolMask"),n=v(t,"mask","boolMask","bool"),s=e??0,i=n.rank,a=o.shape;$(i>0,()=>"mask cannot be scalar"),Wt(a.slice(s,s+i),n.shape,"mask's shape must match the first K dimensions of tensor's shape,");let u=1;for(let g=s;g<s+i;g++)u*=a[g];let c=a.slice(0,s).concat([u],a.slice(s+i)),l=L(o,c),p=L(n,[-1]),m=await ul(p),d=Xt(m,[1]),h=Pc(l,d,s);return r!==o&&o.dispose(),t!==n&&n.dispose(),d.dispose(),l.dispose(),p.dispose(),m.dispose(),h}var Q4=Y4;function Z4(r,t,e,o,n=!0){let s=v(r,"v","movingAverage"),i=v(t,"x","movingAverage"),a=v(e,"decay","movingAverage");nx(s,i),$(He(s.shape,i.shape),()=>"Shape mismatch in v and x");let u=st(1),c=ot(u,a),l=X(ot(i,s),c);if(n){$(o!=null,()=>"When using zeroDebias: true, step is required.");let p=v(o,"step","movingAverage");l=xt(l,ot(u,ts(a,p)))}return ht(s,l)}var J4=T({movingAverage_:Z4});function tk(r,t,e){let o=v(r,"indices","scatterND","int32"),n=v(t,"updates","scatterND");Cf(n,o,e);let s={indices:o,updates:n},i={shape:e};return E.runKernel(Iu,s,i)}var ek=T({scatterND_:tk});function m2(r,t,e,o){if(r.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${r.dtype}.`);if(r.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${r.shape}.`);let n=r.rank>0?r.shape[0]:1,s=r.rank>1?r.shape[1]:1;if(e.length!==s)throw new Error(`outputShape has incorrect number of elements:, ${e.length}, should be: ${s}.`);let i=t.size;if(!(t.rank===0||t.rank===1&&i===n))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${n}]`);if(t.dtype!==o.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}function ok(r,t,e,o=0){let n=v(r,"sparseIndices","sparseToDense","int32"),s=v(t,"sparseValues","sparseToDense","string_or_numeric"),i=v(o,"defaultValue","sparseToDense",s.dtype);m2(n,s,e,i);let a={sparseIndices:n,sparseValues:s,defaultValue:i},u={outputShape:e};return E.runKernel(zu,a,u)}var nk=T({sparseToDense_:ok});function sk(r,t){let e=v(t,"indices","gatherND","int32"),n={params:v(r,"x","gatherND","string_or_numeric"),indices:e};return E.runKernel(Ua,n)}var ik=T({gatherND_:sk});function f2(r,t){if(t==null)return r.shape.slice();if(He(r.shape,t))return t;if(r.shape.length===t.length){let e=[];for(let o=0;o<r.shape.length;o++)t[o]==null&&r.shape[o]!=null?e.push(r.shape[o]):e.push(t[o]);return e}return t}function ak(r,t,e,o){let n=v(r,"x","dropout");if($(n.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${n.dtype} tensor instead.`),$(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return r instanceof St?n.clone():n;let s=f2(n,e),i=1-t,a=xt(Oc(ht(el(s,0,1,"float32",o),i)),i);return X(n,a)}var uk=T({dropout_:ak});function Of(r){return Math.floor(Math.pow(2,Math.ceil(Math.log(r)/Math.log(2))))}function ci(r,t,e){let o=1-r%2,n=new Float32Array(r);for(let s=0;s<r;++s){let i=2*Math.PI*s/(r+o-1);n[s]=t-e*Math.cos(i)}return qt(n,"float32")}async function ck(r,t,e=1){let o=v(r,"predictions","inTopK"),n=v(t,"targets","inTopK");$(o.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${o.rank}`),$(o.rank-1===n.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${o.rank} and targets rank ${n.rank}`),Wt(o.shape.slice(0,o.shape.length-1),n.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");let s=o.shape[o.shape.length-1];$(e>0&&e<=s,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${s}), but got ${e}`);let i=await o.data(),a=await n.data(),[u,c]=[i.length/s,s],l=Pm("bool",u);for(let p=0;p<u;p++){let m=p*c,d=i.subarray(m,m+c),h=[];for(let g=0;g<d.length;g++)h.push({value:d[g],index:g});h.sort((g,x)=>x.value-g.value),l[p]=0;for(let g=0;g<e;g++)if(h[g].index===a[p]){l[p]=1;break}}return r!==o&&o.dispose(),t!==n&&n.dispose(),fe(l,n.shape,"bool")}var lk=ck;var Pf={};$t(Pf,{conv2d:()=>h2,depthwiseConv2d:()=>y2,matMul:()=>b2});function pk(r,t,e,o,n,s="NHWC",i){let a=r;r.rank===3&&(a=L(r,[1,r.shape[0],r.shape[1],r.shape[2]]));let u=t;u.rank===3&&(u=L(t,[1,t.shape[0],t.shape[1],t.shape[2]])),$(a.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${a.shape}.`),$(u.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${u.shape}.`),$(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);let c=s==="NHWC"?a.shape[3]:a.shape[1],l=s==="NHWC"?u.shape[3]:u.shape[1];$(c===e[2],()=>`Error in conv2dDerFilter: depth of input ${c}) must match input depth in filter (${e[2]}.`),$(l===e[3],()=>`Error in conv2dDerFilter: depth of dy (${l}) must match output depth for filter (${e[3]}).`),Kt("conv2dDerFilter",n,i);let p={x:a,dy:u},m={strides:o,pad:n,dataFormat:s,dimRoundingMode:i,filterShape:e};return E.runKernel(da,p,m)}var d2=T({conv2DBackpropFilter_:pk});function jo(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return X(r,il(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function Xo(r,t){let e=t,o=Cc(r.shape,t.shape);return o.length>0&&(e=vt(e,o)),L(e,r.shape)}function Yo(r,t,e,o){if(t==="linear")return r;if(t==="relu")return fo(r);if(t==="elu")return Dc(r);if(t==="relu6")return rl(r);if(t==="prelu")return Xc(r,e);if(t==="leakyrelu")return Bc(r,o);if(t==="sigmoid")return Xe(r);throw new Error(`Unknown fused activation ${t}.`)}var Qo=(r,t)=>!(r>0)||t==="linear";function mk({x:r,filter:t,strides:e,pad:o,dataFormat:n="NHWC",dilations:s=[1,1],dimRoundingMode:i,bias:a,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:l}){if(u=u||"linear",Qo(E.state.gradientDepth,u)===!1){$(n==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${n} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let B=co(r,t,e,o,n,s,i);return a!=null&&(B=ht(B,a)),Yo(B,u,c,l)}let p=v(r,"x","conv2d","float32"),m=v(t,"filter","conv2d","float32"),d=p,h=!1;p.rank===3&&(h=!0,d=L(p,[1,p.shape[0],p.shape[1],p.shape[2]])),$(d.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${d.rank}.`),$(m.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${m.rank}.`),Kt("fused conv2d",o,i);let g=n==="NHWC"?d.shape[3]:d.shape[1];$(m.shape[2]===g,()=>`Error in conv2d: depth of input (${g}) must match input depth for filter ${m.shape[2]}.`),$(ce(e,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${s}'`);let x=Mo(d.shape,m.shape,e,s,o,i),w;a!=null&&(w=v(a,"bias","fused conv2d"),[w]=ct(w,p),n==="NHWC"?yt(x.outShape,w.shape):($(w.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${w.shape.length}.`),$(w.shape.length===0||w.shape[0]===x.outChannels||w.shape[0]===1,()=>`Error in fused conv2d: bias shape (${w.shape}) is not compatible with the number of output channels (${x.outChannels})`)));let N;if(c!=null){let B=c.shape;if($(B.length<=1||B.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${B.length}.`),B.length===1)$(B[0]===1||B[0]===x.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${B}) is not compatible with the number of output channels (${x.outChannels}).`);else if(B.length===3)try{yt(B,x.outShape)}catch{let U=`Error in fused conv2d: PReLU activation weights (${B}) is not compatible with the output shape of the conv2d (${x.outShape}).`;throw Error(U)}N=v(c,"prelu weights","fused conv2d")}let k=(B,V)=>{$(n==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${n} but only NHWC is currently supported.`);let[U,H,W,j]=V,Z=jo(B,W,u);$(Vo(s),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);let lt=Ac(H.shape,Z,U,e,o),it=d2(H,Z,U.shape,e,o),mt=[lt,it];if(j!=null){let jt=Xo(j,Z);mt.push(jt)}return mt},_={x:d,filter:m,bias:w,preluActivationWeights:N},D={strides:e,pad:o,dataFormat:n,dilations:s,dimRoundingMode:i,activation:u,leakyreluAlpha:l};return a==null?Ce((V,U,H)=>{let W=E.runKernel(qs,_,D);return H([U,V,W]),h&&(W=L(W,[W.shape[1],W.shape[2],W.shape[3]])),{value:W,gradFunc:k}})(d,m):Ce((V,U,H,W)=>{let j=E.runKernel(qs,_,D);return W([U,V,j,H]),h&&(j=L(j,[j.shape[1],j.shape[2],j.shape[3]])),{value:j,gradFunc:k}})(d,m,w)}var h2=T({fusedConv2d_:mk});function fk(r,t,e,o,n,s=[1,1],i){let a=r;r.rank===3&&(a=L(r,[1,r.shape[0],r.shape[1],r.shape[2]]));let u=t;u.rank===3&&(u=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let c={x:a,dy:u},l={strides:o,pad:n,dimRoundingMode:i,dilations:s,filterShape:e};return E.runKernel(Ea,c,l)}var g2=T({depthwiseConv2dNativeBackpropFilter_:fk});function dk(r,t,e,o,n,s=[1,1],i){let a=t,u=!1;t.rank===3&&(u=!0,a=L(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let c={dy:a,filter:e},l={strides:o,pad:n,dimRoundingMode:i,dilations:s,inputShape:r},p=E.runKernel($a,c,l);return u?L(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var x2=T({depthwiseConv2dNativeBackpropInput_:dk});function hk({x:r,filter:t,strides:e,pad:o,dataFormat:n="NHWC",dilations:s=[1,1],dimRoundingMode:i,bias:a,activation:u="linear",preluActivationWeights:c,leakyreluAlpha:l}){if(Qo(E.state.gradientDepth,u)===!1){let D=Zn(r,t,e,o,n,s,i);return a!=null&&(D=ht(D,a)),Yo(D,u,c,l)}let p=v(r,"x","depthwiseConv2d","float32"),m=v(t,"filter","depthwiseConv2d","float32"),d=p,h=!1;p.rank===3&&(h=!0,d=L(p,[1,p.shape[0],p.shape[1],p.shape[2]])),$(d.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${d.rank}.`),$(m.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${m.rank}.`),$(d.shape[3]===m.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${d.shape[3]}) must match the inChannels dimension in filter ${m.shape[2]}.`),s==null&&(s=[1,1]),$(ce(e,s),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${e} and dilations '${s}'`),Kt("fused depthwiseConv2d",o,i);let g=Mo(d.shape,m.shape,e,s,o,i,!0),x;a!=null&&(x=v(a,"bias","fused conv2d"),[x]=ct(x,p),yt(g.outShape,x.shape));let w;c!=null&&(w=v(c,"prelu weights","fused depthwiseConv2d"));let N=(D,B)=>{$(Vo(s),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[V,U,H,W]=B,j=jo(D,H,u),Z=x2(U.shape,j,V,e,o,s,i),lt=g2(U,j,V.shape,e,o,s,i);if(W!=null){let it=Xo(x,j);return[Z,lt,it]}return[Z,lt]},k={x:d,filter:m,bias:x,preluActivationWeights:w},_={strides:e,pad:o,dataFormat:n,dilations:s,dimRoundingMode:i,activation:u,leakyreluAlpha:l};return a==null?Ce((B,V,U)=>{let H=E.runKernel(js,k,_);return U([V,B,H]),h&&(H=L(H,[H.shape[1],H.shape[2],H.shape[3]])),{value:H,gradFunc:N}})(d,m):Ce((B,V,U,H)=>{let W=E.runKernel(js,k,_);return H([V,B,W,U]),h&&(W=L(W,[W.shape[1],W.shape[2],W.shape[3]])),{value:W,gradFunc:N}})(d,m,x)}var y2=T({fusedDepthwiseConv2d_:hk});function gk({a:r,b:t,transposeA:e=!1,transposeB:o=!1,bias:n,activation:s="linear",preluActivationWeights:i,leakyreluAlpha:a=.2}){if(Qo(E.state.gradientDepth,s)===!1){let j=bt(r,t,e,o);return n!=null&&(j=ht(j,n)),Yo(j,s,i,a)}let u=v(r,"a","fused matMul"),c=v(t,"b","fused matMul");[u,c]=ct(u,c);let l=e?u.shape[u.rank-2]:u.shape[u.rank-1],p=o?c.shape[c.rank-1]:c.shape[c.rank-2],m=e?u.shape[u.rank-1]:u.shape[u.rank-2],d=o?c.shape[c.rank-2]:c.shape[c.rank-1],h=u.shape.slice(0,-2),g=c.shape.slice(0,-2),x=dt(h),w=dt(g);$(l===p,()=>`Error in fused matMul: inner shapes (${l}) and (${p}) of Tensors with shapes ${u.shape} and ${c.shape} and transposeA=${e} and transposeB=${o} must match.`);let k=yt(u.shape.slice(0,-2),c.shape.slice(0,-2)).concat([m,d]),_=e?L(u,[x,l,m]):L(u,[x,m,l]),D=o?L(c,[w,d,p]):L(c,[w,p,d]),B;n!=null&&(B=v(n,"bias","fused matMul"),[B]=ct(B,u),yt(k,B.shape));let V;i!=null&&(V=v(i,"prelu weights","fused matMul"));let U=(j,Z)=>{let[lt,it,mt,jt]=Z,Gt=jo(L(j,mt.shape),mt,s),Bt,oe;if(!e&&!o?(Bt=bt(Gt,it,!1,!0),oe=bt(lt,Gt,!0,!1)):!e&&o?(Bt=bt(Gt,it,!1,!1),oe=bt(Gt,lt,!0,!1)):e&&!o?(Bt=bt(it,Gt,!1,!0),oe=bt(lt,Gt,!1,!1)):(Bt=bt(it,Gt,!0,!0),oe=bt(Gt,lt,!0,!0)),n!=null){let gr=Xo(jt,Gt);return[Bt,oe,gr]}else return[Bt,oe]},H={a:_,b:D,bias:B,preluActivationWeights:V},W={transposeA:e,transposeB:o,activation:s,leakyreluAlpha:a};return n==null?Ce((Z,lt,it)=>{let mt=E.runKernel(Ks,H,W);return it([Z,lt,mt]),{value:L(mt,k),gradFunc:U}})(_,D):Ce((Z,lt,it,mt)=>{let jt=E.runKernel(Ks,H,W);return mt([Z,lt,jt,it]),{value:L(jt,k),gradFunc:U}})(_,D,B)}var b2=T({fusedMatMul_:gk});function xk(r){return ci(r,.54,.46)}var v2=T({hammingWindow_:xk});function yk(r){return ci(r,.5,.5)}var cl=T({hannWindow_:yk});function bk(r,t,e,o=!1,n=0){let s=0,i=[];for(;s+t<=r.size;)i.push(rt(r,s,t)),s+=e;if(o)for(;s<r.size;){let a=s+t-r.size,u=kt([rt(r,s,t-a),es([a],n)]);i.push(u),s+=e}return i.length===0?pr([],[0,t]):L(kt(i),[i.length,t])}var ll=T({frame_:bk});function vk(r,t,e,o,n=cl){o==null&&(o=Of(t));let s=ll(r,t,e),i=X(s,n(t));return ns(i,o)}var w2=T({stft_:vk});function wk(r,t,e,o,n="bilinear",s=0){let i=v(r,"image","cropAndResize"),a=v(t,"boxes","cropAndResize","float32"),u=v(e,"boxInd","cropAndResize","int32"),c=a.shape[0];$(i.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),$(a.rank===2&&a.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${c},4] but had shape ${a.shape}.`),$(u.rank===1&&u.shape[0]===c,()=>`Error in cropAndResize: boxInd must be have size [${c}] but had shape ${a.shape}.`),$(o.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${o.length}.`),$(o[0]>=1&&o[1]>=1,()=>`cropSize must be atleast [1,1], but was ${o}`),$(n==="bilinear"||n==="nearest",()=>`method must be bilinear or nearest, but was ${n}`);let l={image:i,boxes:a,boxInd:u},p={method:n,extrapolationValue:s,cropSize:o};return E.runKernel(Ta,l,p)}var T2=T({cropAndResize_:wk});function Tk(r){let t=v(r,"image","flipLeftRight","float32");$(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);let e={image:t};return E.runKernel(La,e,{})}var C2=T({flipLeftRight_:Tk});function Ck(r){let t=v(r,"image","grayscaleToRGB"),e=t.rank-1,o=t.shape[e];$(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),$(o===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${o}.`);let n=new Array(t.rank);return n.fill(1,0,e),n[e]=3,po(t,n)}var S2=T({grayscaleToRGB_:Ck});function Sk(r,t,e=0,o=.5){let n=v(r,"image","rotateWithOffset","float32");$(n.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${n.rank}.`);let s={image:n},i={radians:t,fillValue:e,center:o};return E.runKernel(nc,s,i)}var N2=T({rotateWithOffset_:Sk});function Ze(r,t,e,o,n,s){o==null&&(o=.5),n==null&&(n=Number.NEGATIVE_INFINITY),s==null&&(s=0);let i=r.shape[0];return e=Math.min(e,i),$(0<=o&&o<=1,()=>`iouThreshold must be in [0, 1], but was '${o}'`),$(r.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${r.rank}'`),$(r.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${r.shape[1]}`),$(t.rank===1,()=>"scores must be a 1D tensor"),$(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),$(0<=s&&s<=1,()=>`softNmsSigma must be in [0, 1], but was '${s}'`),{maxOutputSize:e,iouThreshold:o,scoreThreshold:n,softNmsSigma:s}}function Nk(r,t,e,o=.5,n=Number.NEGATIVE_INFINITY){let s=v(r,"boxes","nonMaxSuppression","float32"),i=v(t,"scores","nonMaxSuppression","float32"),a=Ze(s,i,e,o,n);e=a.maxOutputSize,o=a.iouThreshold,n=a.scoreThreshold;let u={maxOutputSize:e,iouThreshold:o,scoreThreshold:n};return E.runKernel(cu,{boxes:s,scores:i},u)}var E2=T({nonMaxSuppression_:Nk});function $2(r,t,e){let o=Ek(r,t,e),n=o<0?-(o+1):o;r.splice(n,0,t)}function Ek(r,t,e){return Ik(r,t,e||$k)}function $k(r,t){return r>t?1:r<t?-1:0}function Ik(r,t,e){let o=0,n=r.length,s=0,i=!1;for(;o<n;){s=o+(n-o>>>1);let a=e(t,r[s]);a>0?o=s+1:(n=s,i=!a)}return i?o:-o-1}function pl(r,t,e,o,n){return Lf(r,t,e,o,n,0)}function ml(r,t,e,o,n,s){return Lf(r,t,e,o,n,0,!1,s,!0)}function fl(r,t,e,o,n,s){return Lf(r,t,e,o,n,s,!0)}function Lf(r,t,e,o,n,s,i=!1,a=!1,u=!1){let c=[];for(let x=0;x<t.length;x++)t[x]>n&&c.push({score:t[x],boxIndex:x,suppressBeginIndex:0});c.sort(I2);let l=s>0?-.5/s:0,p=[],m=[];for(;p.length<e&&c.length>0;){let x=c.pop(),{score:w,boxIndex:N,suppressBeginIndex:k}=x;if(w<n)break;let _=!1;for(let D=p.length-1;D>=k;--D){let B=kk(r,N,p[D]);if(B>=o){_=!0;break}if(x.score=x.score*_k(o,l,B),x.score<=n)break}x.suppressBeginIndex=p.length,_||(x.score===w?(p.push(N),m.push(x.score)):x.score>n&&$2(c,x,I2))}let d=p.length,h=e-d;a&&h>0&&(p.push(...new Array(h).fill(0)),m.push(...new Array(h).fill(0)));let g={selectedIndices:p};return i&&(g.selectedScores=m),u&&(g.validOutputs=d),g}function kk(r,t,e){let o=r.subarray(t*4,t*4+4),n=r.subarray(e*4,e*4+4),s=Math.min(o[0],o[2]),i=Math.min(o[1],o[3]),a=Math.max(o[0],o[2]),u=Math.max(o[1],o[3]),c=Math.min(n[0],n[2]),l=Math.min(n[1],n[3]),p=Math.max(n[0],n[2]),m=Math.max(n[1],n[3]),d=(a-s)*(u-i),h=(p-c)*(m-l);if(d<=0||h<=0)return 0;let g=Math.max(s,c),x=Math.max(i,l),w=Math.min(a,p),N=Math.min(u,m),k=Math.max(w-g,0)*Math.max(N-x,0);return k/(d+h-k)}function _k(r,t,e){let o=Math.exp(t*e*e);return e<=r?o:0}function I2(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}async function Ak(r,t,e,o=.5,n=Number.NEGATIVE_INFINITY){let s=v(r,"boxes","nonMaxSuppressionAsync"),i=v(t,"scores","nonMaxSuppressionAsync"),a=Ze(s,i,e,o,n);e=a.maxOutputSize,o=a.iouThreshold,n=a.scoreThreshold;let u=await Promise.all([s.data(),i.data()]),c=u[0],l=u[1],{selectedIndices:p}=pl(c,l,e,o,n);return s!==r&&s.dispose(),i!==t&&i.dispose(),qt(p,"int32")}var k2=Ak;function Rk(r,t,e,o=.5,n=Number.NEGATIVE_INFINITY,s=0){let i=v(r,"boxes","nonMaxSuppression"),a=v(t,"scores","nonMaxSuppression"),u=Ze(i,a,e,o,n,s);e=u.maxOutputSize,o=u.iouThreshold,n=u.scoreThreshold,s=u.softNmsSigma;let c={boxes:i,scores:a},l={maxOutputSize:e,iouThreshold:o,scoreThreshold:n,softNmsSigma:s},p=E.runKernel(pu,c,l);return{selectedIndices:p[0],selectedScores:p[1]}}var _2=T({nonMaxSuppressionWithScore_:Rk});async function Dk(r,t,e,o=.5,n=Number.NEGATIVE_INFINITY,s=0){let i=v(r,"boxes","nonMaxSuppressionAsync"),a=v(t,"scores","nonMaxSuppressionAsync"),u=Ze(i,a,e,o,n,s);e=u.maxOutputSize,o=u.iouThreshold,n=u.scoreThreshold,s=u.softNmsSigma;let c=await Promise.all([i.data(),a.data()]),l=c[0],p=c[1],{selectedIndices:m,selectedScores:d}=fl(l,p,e,o,n,s);return i!==r&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:qt(m,"int32"),selectedScores:qt(d)}}var A2=Dk;function Fk(r,t,e,o=.5,n=Number.NEGATIVE_INFINITY,s=!1){let i=v(r,"boxes","nonMaxSuppression"),a=v(t,"scores","nonMaxSuppression"),u=Ze(i,a,e,o,n,null),c=u.maxOutputSize,l=u.iouThreshold,p=u.scoreThreshold,m={boxes:i,scores:a},d={maxOutputSize:c,iouThreshold:l,scoreThreshold:p,padToMaxOutputSize:s},h=E.runKernel(lu,m,d);return{selectedIndices:h[0],validOutputs:h[1]}}var R2=T({nonMaxSuppressionPadded_:Fk});async function Ok(r,t,e,o=.5,n=Number.NEGATIVE_INFINITY,s=!1){let i=v(r,"boxes","nonMaxSuppressionAsync"),a=v(t,"scores","nonMaxSuppressionAsync"),u=Ze(i,a,e,o,n,null),c=u.maxOutputSize,l=u.iouThreshold,p=u.scoreThreshold,[m,d]=await Promise.all([i.data(),a.data()]),{selectedIndices:h,validOutputs:g}=ml(m,d,c,l,p,s);return i!==r&&i.dispose(),a!==t&&a.dispose(),{selectedIndices:qt(h,"int32"),validOutputs:st(g,"int32")}}var D2=Ok;function Pk(r,t,e=!1,o=!1){let n=v(r,"images","resizeBilinear");$(n.rank===3||n.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${n.rank}.`),$(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),$(o===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let s=n,i=!1;n.rank===3&&(i=!0,s=L(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let[]=t,a={images:s},u={alignCorners:e,halfPixelCenters:o,size:t},c=E.runKernel(Su,a,u);return i?L(c,[c.shape[1],c.shape[2],c.shape[3]]):c}var F2=T({resizeBilinear_:Pk});function Lk(r,t,e=!1,o=!1){let n=v(r,"images","resizeNearestNeighbor");$(n.rank===3||n.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${n.rank}.`),$(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),$(n.dtype==="float32"||n.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),$(o===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let s=n,i=!1;n.rank===3&&(i=!0,s=L(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let[]=t,a={images:s},u={alignCorners:e,halfPixelCenters:o,size:t},c=E.runKernel(Cu,a,u);return i?L(c,[c.shape[1],c.shape[2],c.shape[3]]):c}var O2=T({resizeNearestNeighbor_:Lk});function Bk(r,t="binary",e=!1,o=.5){let n=v(r,"image","threshold"),s=.2989,i=.587,a=.114,u=n.shape[0]*n.shape[1],c=X(qt([o]),255),l,p,m,d;if($(n.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${n.rank}.`),$(n.shape[2]===3||n.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${n.shape[2]}.`),$(n.dtype==="int32"||n.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${n.dtype}.`),$(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),n.shape[2]===3){[l,p,m]=Mr(n,[1,1,1],-1);let x=X(l,s),w=X(p,i),N=X(m,a);d=ht(ht(x,w),N)}else d=r;if(t==="otsu"){let x=kc(gt(ol(d),"int32"),fe([]),256);c=Vk(x,u)}let h=e?rs(d,c):Go(d,c);return gt(X(h,255),"int32")}function Vk(r,t){let e=qt([-1]),o=qt([0]),n=qt([0]),s,i,a,u,c,l;for(let p=0;p<r.size-1;p++){s=rt(r,0,p+1),i=rt(r,p+1),c=xt(vt(s),t),l=xt(vt(i),t);let m=vt(X(s,mo(0,s.size)));a=xt(m,vt(s));let d=es(i.shape,s.size),h=ht(mo(0,i.size),d),g=X(i,h);u=xt(vt(g),vt(i));let x=ot(a,u),w=ot(a,u),N=X(c,l);n=X(X(N,x),w);let k=Go(n,o);o=lr(k,n,o),e=lr(k,qt([p]),e)}return e}var P2=T({threshold_:Bk});function Mk(r,t,e="nearest",o="constant",n=0,s){let i=v(r,"image","transform","float32"),a=v(t,"transforms","transform","float32");$(i.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),$(a.rank===2&&(a.shape[0]===i.shape[0]||a.shape[0]===1)&&a.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),$(s==null||s.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`);let u={image:i,transforms:a},c={interpolation:e,fillMode:o,fillValue:n,outputShape:s};return E.runKernel(Zu,u,c)}var L2=T({transform_:Mk});function Uk(r,t,e){$(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),$(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`);let o=v(r,"a","bandPart");$(o.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${o.rank}.`);let n=o.shape,[s,i]=o.shape.slice(-2);if(!(t<=s))throw new Error(`bandPart(): numLower (${t}) must not be greater than the number of rows (${s}).`);if(!(e<=i))throw new Error(`bandPart(): numUpper (${e}) must not be greater than the number of columns (${i}).`);t<0&&(t=s),e<0&&(e=i);let a=L(mo(0,s,1,"int32"),[-1,1]),u=mo(0,i,1,"int32"),c=ot(a,u),l=Wo(rs(c,st(+t,"int32")),Lc(c,st(-e,"int32"))),p=Qe([s,i],o.dtype);return L(he(Be(L(o,[-1,s,i])).map(m=>lr(l,m,p))),n)}var B2=T({bandPart_:Uk});function Gk(r){let t;if(Array.isArray(r)){t=!1,$(r!=null&&r.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");let n=r[0].shape[0];for(let s=1;s<r.length;++s)$(r[s].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${r[s].shape[0]} vs. ${n})`)}else t=!0,r=Mr(r,r.shape[0],0).map(n=>Xt(n,[0]));$(r.length<=r[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${r.length}) exceeds number of dimensions (${r[0].shape[0]}).`);let e=[],o=r;for(let n=0;n<r.length;++n)e.push(E.tidy(()=>{let s=o[n];if(n>0)for(let i=0;i<n;++i){let a=X(vt(X(e[i],s)),e[i]);s=ot(s,a)}return xt(s,Uo(s,"euclidean"))}));return t?he(e,0):e}var V2=T({gramSchmidt_:Gk});function Wk(r,t=!1){if($(r.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${r.rank}`),r.rank===2)return M2(r,t);{let e=r.shape.slice(0,r.shape.length-2).reduce((u,c)=>u*c),o=Be(L(r,[e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),n=[],s=[];o.forEach(u=>{let[c,l]=M2(u,t);n.push(c),s.push(l)});let i=L(he(n,0),r.shape),a=L(he(s,0),r.shape);return[i,a]}}function M2(r,t=!1){return E.tidy(()=>{$(r.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${r.shape.length}D Tensor.`);let e=r.shape[0],o=r.shape[1],n=Fc(e),s=ke(r),i=pr([[1]],[1,1]),a=ke(i),u=e>=o?o:e;for(let c=0;c<u;++c){let l=s,p=a,m=n;[a,s,n]=E.tidy(()=>{let d=rt(s,[c,c],[e-c,1]),h=Uo(d),g=rt(s,[c,c],[1,1]),x=lr(Go(g,0),pr([[-1]]),pr([[1]])),w=ot(g,X(x,h)),N=xt(d,w);N.shape[0]===1?a=ke(i):a=kt([i,rt(N,[1,0],[N.shape[0]-1,N.shape[1]])],0);let k=de(xt(bt(x,w),h)),_=rt(s,[c,0],[e-c,o]),D=X(k,a),B=Tc(a);if(c===0)s=ot(_,bt(D,bt(B,_)));else{let H=ot(_,bt(D,bt(B,_)));s=kt([rt(s,[0,0],[c,o]),H],0)}let V=Tc(D),U=rt(n,[0,c],[e,n.shape[1]-c]);if(c===0)n=ot(U,bt(bt(U,a),V));else{let H=ot(U,bt(bt(U,a),V));n=kt([rt(n,[0,0],[e,c]),H],1)}return[a,s,n]}),no([l,p,m])}return!t&&e>o&&(n=rt(n,[0,0],[e,o]),s=rt(s,[0,0],[o,o])),[n,s]})}var U2=T({qr_:Wk});var zt;(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(zt||(zt={}));function zk(r,t,e=zt.SUM_BY_NONZERO_WEIGHTS){let o=v(r,"losses","computeWeightedLoss"),n=null;t!=null&&(n=v(t,"weights","computeWeightedLoss"));let s=n==null?o:X(o,n);if(e===zt.NONE)return s;if(e===zt.SUM)return vt(s);if(e===zt.MEAN){if(n==null)return zo(s);{let i=o.size/n.size,a=xt(vt(s),vt(n));return i>1?xt(a,st(i)):a}}if(e===zt.SUM_BY_NONZERO_WEIGHTS){if(n==null)return xt(vt(s),st(o.size));{let i=X(n,Nr(o.shape)),a=gt(vt(qc(i,st(0))),"float32");return xt(vt(s),a)}}throw Error(`Unknown reduction: ${e}`)}var ne=T({computeWeightedLoss_:zk});function Hk(r,t,e,o=zt.SUM_BY_NONZERO_WEIGHTS){let n=v(r,"labels","absoluteDifference"),s=v(t,"predictions","absoluteDifference"),i=null;e!=null&&(i=v(e,"weights","absoluteDifference")),Wt(n.shape,s.shape,"Error in absoluteDifference: ");let a=ue(ot(n,s));return ne(a,i,o)}var G2=T({absoluteDifference_:Hk});function Kk(r,t,e,o,n=zt.SUM_BY_NONZERO_WEIGHTS){let s=v(r,"labels","cosineDistance"),i=v(t,"predictions","cosineDistance"),a=null;o!=null&&(a=v(o,"weights","cosineDistance")),Wt(s.shape,i.shape,"Error in cosineDistance: ");let u=st(1),c=ot(u,vt(X(s,i),e,!0));return ne(c,a,n)}var W2=T({cosineDistance_:Kk});function qk(r,t,e,o=zt.SUM_BY_NONZERO_WEIGHTS){let n=v(r,"labels","hingeLoss"),s=v(t,"predictions","hingeLoss"),i=null;e!=null&&(i=v(e,"weights","hingeLoss")),Wt(n.shape,s.shape,"Error in hingeLoss: ");let a=st(1);n=ot(X(st(2),n),a);let u=fo(ot(a,X(n,s)));return ne(u,i,o)}var z2=T({hingeLoss_:qk});function jk(r,t,e,o=1,n=zt.SUM_BY_NONZERO_WEIGHTS){let s=v(r,"labels","huberLoss"),i=v(t,"predictions","huberLoss"),a=null;e!=null&&(a=v(e,"weights","huberLoss")),Wt(s.shape,i.shape,"Error in huberLoss: ");let u=st(o),c=ue(ot(i,s)),l=Kc(c,u),p=ot(c,l),m=ht(X(st(.5),lo(l)),X(u,p));return ne(m,a,n)}var H2=T({huberLoss_:jk});function Xk(r,t,e,o=1e-7,n=zt.SUM_BY_NONZERO_WEIGHTS){let s=v(r,"labels","logLoss"),i=v(t,"predictions","logLoss"),a=null;e!=null&&(a=v(e,"weights","logLoss")),Wt(s.shape,i.shape,"Error in logLoss: ");let u=st(1),c=st(o),l=de(X(s,Vr(ht(i,c)))),p=X(ot(u,s),Vr(ht(ot(u,i),c))),m=ot(l,p);return ne(m,a,n)}var K2=T({logLoss_:Xk});function Yk(r,t,e,o=zt.SUM_BY_NONZERO_WEIGHTS){let n=v(r,"labels","meanSquaredError"),s=v(t,"predictions","meanSquaredError"),i=null;e!=null&&(i=v(e,"weights","meanSquaredError")),Wt(n.shape,s.shape,"Error in meanSquaredError: ");let a=sl(n,s);return ne(a,i,o)}var q2=T({meanSquaredError_:Yk});function Qk(r,t){let e=v(r,"labels","sigmoidCrossEntropyWithLogits"),o=v(t,"logits","sigmoidCrossEntropyWithLogits");Wt(e.shape,o.shape,"Error in sigmoidCrossEntropyWithLogits: ");let n=fo(o),s=X(o,e),i=Vc(Te(de(ue(o))));return ht(ot(n,s),i)}function Zk(r,t,e,o=0,n=zt.SUM_BY_NONZERO_WEIGHTS){let s=v(r,"multiClassLabels","sigmoidCrossEntropy"),i=v(t,"logits","sigmoidCrossEntropy"),a=null;if(e!=null&&(a=v(e,"weights","sigmoidCrossEntropy")),Wt(s.shape,i.shape,"Error in sigmoidCrossEntropy: "),o>0){let c=st(o),l=st(1),p=st(.5);s=ht(X(s,ot(l,c)),X(p,c))}let u=Qk(s,i);return ne(u,a,n)}var j2=T({sigmoidCrossEntropy_:Zk});function Jk(r,t,e=-1){if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${e}`);return Ce((n,s,i)=>{let u=Uc(s,[e],!0),c=ot(gt(s,"float32"),u);i([n,c]);let l=de(X(c,n));return{value:vt(l,[e]),gradFunc:(d,h)=>{let[g,x]=h,w=Br(d.shape,[e]);return[X(L(d,w),ot(gt(g,"float32"),Te(x))),X(L(d,w),ot(Te(x),gt(g,"float32")))]}}})(r,t)}function t_(r,t,e,o=0,n=zt.SUM_BY_NONZERO_WEIGHTS){let s=v(r,"onehotLabels","softmaxCrossEntropy"),i=v(t,"logits","softmaxCrossEntropy"),a=null;if(e!=null&&(a=v(e,"weights","softmaxCrossEntropy")),Wt(s.shape,i.shape,"Error in softmaxCrossEntropy: "),o>0){let c=st(o),l=st(1),p=st(s.shape[1]);s=ht(X(s,ot(l,c)),xt(c,p))}let u=Jk(s,i);return ne(u,a,n)}var X2=T({softmaxCrossEntropy_:t_});function e_(r,t,e,o){let n=v(r,"indices","sparseFillEmptyRows","int32"),s=v(t,"values","sparseFillEmptyRows"),i=v(e,"denseShape","sparseFillEmptyRows","int32"),a=v(o,"defaultValue","sparseFillEmptyRows",s.dtype);if(n.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${n.shape}`);if(s.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${s.shape}`);if(i.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(a.rank!==0)throw new Error(`Default value should be a scalar but received shape ${a.shape}`);let u={indices:n,values:s,denseShape:i,defaultValue:a},c=E.runKernel(Mu,u);return{outputIndices:c[0],outputValues:c[1],emptyRowIndicator:c[2],reverseIndexMap:c[3]}}var Y2=T({sparseFillEmptyRows_:e_});function r_(r,t,e){let o=v(r,"inputIndices","sparseReshape","int32"),n=v(t,"inputShape","sparseReshape","int32"),s=v(e,"newShape","sparseReshape","int32");if(o.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${o.shape}`);if(n.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${n.shape}`);if(s.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${s.shape}`);let i={inputIndices:o,inputShape:n,newShape:s},a=E.runKernel(Uu,i);return{outputIndices:a[0],outputShape:a[1]}}var Q2=T({sparseReshape_:r_});function o_(r,t,e){let o=v(r,"data","sparseSegmentMean"),n=v(t,"indices","sparseSegmentMean","int32"),s=v(e,"segmentIds","sparseSegmentMean","int32");if(o.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${n.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${s.shape}`);let i={data:o,indices:n,segmentIds:s};return E.runKernel(Gu,i)}var Z2=T({sparseSegmentMean_:o_});function n_(r,t,e){let o=v(r,"data","sparseSegmentSum"),n=v(t,"indices","sparseSegmentSum","int32"),s=v(e,"segmentIds","sparseSegmentSum","int32");if(o.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${n.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${s.shape}`);let i={data:o,indices:n,segmentIds:s};return E.runKernel(Wu,i)}var J2=T({sparseSegmentSum_:n_});function s_(r,t,e,o,n,s,i,a){let u=v(r,"data","stringNGrams","string");if(u.dtype!=="string")throw new Error("Data must be of datatype string");if(u.shape.length!==1)throw new Error(`Data must be a vector, saw: ${u.shape}`);let c=v(t,"dataSplits","stringNGrams");if(c.dtype!=="int32")throw new Error("Data splits must be of datatype int32");let l={separator:e,nGramWidths:o,leftPad:n,rightPad:s,padWidth:i,preserveShortSequences:a},p={data:u,dataSplits:c},m=E.runKernel(Ku,p,l);return{nGrams:m[0],nGramsSplits:m[1]}}var ty=T({stringNGrams_:s_});function i_(r,t,e=!0){let o=v(r,"input","stringSplit","string"),n=v(t,"delimiter","stringSplit","string");if(o.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${o.shape}`);if(n.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${n.shape}`);let s={skipEmpty:e},i={input:o,delimiter:n},a=E.runKernel(qu,i,s);return{indices:a[0],values:a[1],shape:a[2]}}var ey=T({stringSplit_:i_});function a_(r,t){let e=v(r,"input","stringToHashBucketFast","string"),o={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");let n={input:e};return E.runKernel(ju,n,o)}var ry=T({stringToHashBucketFast_:a_});var u_={fft:os,ifft:qo,rfft:ns,irfft:nl},c_={hammingWindow:v2,hannWindow:cl,frame:ll,stft:w2},li={flipLeftRight:C2,grayscaleToRGB:S2,resizeNearestNeighbor:O2,resizeBilinear:F2,rotateWithOffset:N2,cropAndResize:T2,nonMaxSuppression:E2,nonMaxSuppressionAsync:k2,nonMaxSuppressionWithScore:_2,nonMaxSuppressionWithScoreAsync:A2,nonMaxSuppressionPadded:R2,nonMaxSuppressionPaddedAsync:D2,threshold:P2,transform:L2},l_={bandPart:B2,gramSchmidt:V2,qr:U2},p_={absoluteDifference:G2,computeWeightedLoss:ne,cosineDistance:W2,hingeLoss:z2,huberLoss:H2,logLoss:K2,meanSquaredError:q2,sigmoidCrossEntropy:j2,softmaxCrossEntropy:X2},m_={sparseFillEmptyRows:Y2,sparseReshape:Q2,sparseSegmentMean:Z2,sparseSegmentSum:J2},f_={stringNGrams:ty,stringSplit:ey,stringToHashBucketFast:ry};var d_=(()=>typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:r=>r())();function Bf(){return new Promise(r=>d_(()=>r()))}var A={};$t(A,{ERF_A1:()=>A_,ERF_A2:()=>R_,ERF_A3:()=>D_,ERF_A4:()=>F_,ERF_A5:()=>O_,ERF_P:()=>__,PARALLELIZE_THRESHOLD:()=>dl,RowPartitionType:()=>$r,SELU_SCALE:()=>k_,SELU_SCALEALPHA:()=>I_,applyActivation:()=>Yo,assertAndGetBroadcastShape:()=>yt,assertAxesAreInnerMostDims:()=>G$,assertParamsConsistent:()=>h_,assignToTypedArray:()=>U_,axesAreInnerMostDims:()=>If,calculateShapes:()=>dE,checkEinsumDimSizes:()=>q_,checkPadOnDimRoundingMode:()=>Kt,combineLocations:()=>M1,combineRaggedTensorToTensorShapes:()=>x_,complexWithEvenIndex:()=>B_,complexWithOddIndex:()=>V_,computeConv2DInfo:()=>Mo,computeConv3DInfo:()=>c1,computeDefaultPad:()=>$f,computeDilation2DInfo:()=>WE,computeOptimalWindowSize:()=>w_,computeOutAndReduceShapes:()=>U$,computeOutShape:()=>g_,computePool2DInfo:()=>Ef,computePool3DInfo:()=>zE,convertConv2DDataFormat:()=>l1,decodeEinsumEquation:()=>H_,eitherStridesOrDilationsAreOne:()=>ce,expandShapeToKeepDim:()=>Br,exponent:()=>W_,exponents:()=>G_,fromStringArrayToUint8:()=>dA,fromUint8ToStringArray:()=>fA,getAxesPermutation:()=>W$,getBroadcastDims:()=>Vx,getComplexWithIndex:()=>M_,getEinsumComputePath:()=>j_,getEinsumPermutation:()=>K_,getFusedBiasGradient:()=>Xo,getFusedDyActivation:()=>jo,getImageCenter:()=>T_,getInnerMostAxes:()=>H$,getPermuted:()=>S_,getRaggedRank:()=>b_,getReductionAxes:()=>Cc,getReshaped:()=>C_,getReshapedPermuted:()=>N_,getRowPartitionTypesHelper:()=>y_,getSliceBeginCoords:()=>E_,getSliceSize:()=>$_,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>Z_,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>J_,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>tA,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>oA,getSparseReshapeInputOutputMismatchErrorMessage:()=>sA,getSparseReshapeInputOutputMultipleErrorMessage:()=>nA,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>eA,getSparseReshapeNegativeOutputDimErrorMessage:()=>rA,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>cA,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>iA,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>aA,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>uA,getUndoAxesPermutation:()=>z$,isIdentityPermutation:()=>X_,log:()=>nN,mergeRealAndImagArrays:()=>P_,prepareAndValidate:()=>fE,prepareSplitSize:()=>Q_,segment_util:()=>Mf,shouldFuse:()=>Qo,slice_util:()=>we,splitRealAndImagArrays:()=>L_,tupleValuesAreOne:()=>Vo,upcastType:()=>ae,validateDefaultValueShape:()=>v_,validateInput:()=>Cf,validateUpdateShape:()=>Ux,warn:()=>Fr});function h_(r,t){let e=r[0].length;r.forEach((n,s)=>{$(n.length===e,()=>`Error in concat${e}D: rank of tensors[${s}] must be the same as the rank of the rest (${e})`)}),$(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);let o=r[0];r.forEach((n,s)=>{for(let i=0;i<e;i++)$(i===t||n[i]===o[i],()=>`Error in concat${e}D: Shape of tensors[${s}] (${n}) does not match the shape of the rest (${o}) along the non-concatenated axis ${s}.`)})}function g_(r,t){let e=r[0].slice();for(let o=1;o<r.length;o++)e[t]+=r[o][t];return e}var $r;(function(r){r[r.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",r[r.VALUE_ROWIDS=1]="VALUE_ROWIDS",r[r.ROW_LENGTHS=2]="ROW_LENGTHS",r[r.ROW_SPLITS=3]="ROW_SPLITS",r[r.ROW_LIMITS=4]="ROW_LIMITS",r[r.ROW_STARTS=5]="ROW_STARTS"})($r||($r={}));function x_(r,t,e){let o=new Array;if(e==null&&t==null)return o;if(t==null)for(;o.length<r+e.length;)o.push(-1);else o=t.slice();if(e==null)return o;if(r+e.length!==o.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${r+e.length}, but shape.rank = ${o.length}`);for(let n=1;n<e.length;++n){let s=e[n],i=o[o.length-e.length+n],a=o[i];if(s>=0)if(a>=0){if(a!==s)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${n+r}] = ${s} but shape[${n+r}] = ${a}`)}else o[i]=s}return o}function y_(r){let t={FIRST_DIM_SIZE:$r.FIRST_DIM_SIZE,VALUE_ROWIDS:$r.VALUE_ROWIDS,ROW_LENGTHS:$r.ROW_LENGTHS,ROW_SPLITS:$r.ROW_SPLITS,ROW_LIMITS:$r.ROW_LIMITS,ROW_STARTS:$r.ROW_STARTS},e=[];for(let o of r)if(o in t)e.push(t[o]);else break;return e}function b_(r){return r.length===0?0:r[0]===$r.FIRST_DIM_SIZE?r.length-1:r.length}function v_(r,t){if(r==null||t==null)return;let e=r.length,o=t.length;if(e>=o)throw new Error(`defaultValue.shape=${r} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${o})`);for(let n=0;n<Math.min(e,o-1);++n){let s=r[n],i=t[n+1];if(s>=0&&i>=0&&s!==1&&s!==i)throw new Error(`defaultValue.shape=${r}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${n-r.length}] = ${s} but ragged tensor input.flatValues.shape[${n-r.length}] = ${i}`)}}var dl=30;function w_(r){return r<=dl?r:yn(r,Math.floor(Math.sqrt(r)))}function T_(r,t,e){let o=e*(typeof r=="number"?r:r[0]),n=t*(typeof r=="number"?r:r[1]);return[o,n]}function C_(r,t,e,o=!0){let n=[];if(o)n=n.concat(t.slice(0)),n.push(r[0]/e),n=n.concat(r.slice(1));else{n=n.concat(r[0]);let s=t.length;for(let i=0;i<s;++i)n=n.concat([r[i+1]/t[i],t[i]]);n=n.concat(r.slice(s+1))}return n}function S_(r,t,e=!0){let o=[];if(e){o.push(t);for(let n=t+1;n<r;++n)n<=2*t?(o.push(n),o.push(n-(t+1))):o.push(n)}else{let n=[],s=[];for(let i=1;i<r;++i)i>=t*2+1||i%2===1?s.push(i):n.push(i);o.push(...n),o.push(0),o.push(...s)}return o}function N_(r,t,e,o=!0){let n=[];o?n.push(r[0]/e):n.push(r[0]*e);for(let s=1;s<r.length;++s)s<=t.length?o?n.push(t[s-1]*r[s]):n.push(r[s]/t[s-1]):n.push(r[s]);return n}function E_(r,t){let e=[0];for(let o=0;o<t;++o)e.push(r[o][0]);return e}function $_(r,t,e){let o=r.slice(0,1);for(let n=0;n<e;++n)o.push(r[n+1]-t[n][0]-t[n][1]);return o}var I_=1.7580993408473768,k_=1.0507009873554805;var __=.3275911,A_=.254829592,R_=-.284496736,D_=1.421413741,F_=-1.453152027,O_=1.061405429;function P_(r,t){if(r.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${r.length}, imag: ${t.length}.`);let e=new Float32Array(r.length*2);for(let o=0;o<e.length;o+=2)e[o]=r[o/2],e[o+1]=t[o/2];return e}function L_(r){let t=new Float32Array(r.length/2),e=new Float32Array(r.length/2);for(let o=0;o<r.length;o+=2)t[o/2]=r[o],e[o/2]=r[o+1];return{real:t,imag:e}}function B_(r){let t=Math.ceil(r.length/4),e=new Float32Array(t),o=new Float32Array(t);for(let n=0;n<r.length;n+=4)e[Math.floor(n/4)]=r[n],o[Math.floor(n/4)]=r[n+1];return{real:e,imag:o}}function V_(r){let t=Math.floor(r.length/4),e=new Float32Array(t),o=new Float32Array(t);for(let n=2;n<r.length;n+=4)e[Math.floor(n/4)]=r[n],o[Math.floor(n/4)]=r[n+1];return{real:e,imag:o}}function M_(r,t){let e=r[t*2],o=r[t*2+1];return{real:e,imag:o}}function U_(r,t,e,o){r[o*2]=t,r[o*2+1]=e}function G_(r,t){let e=new Float32Array(r/2),o=new Float32Array(r/2);for(let n=0;n<Math.ceil(r/2);n++){let s=(t?2:-2)*Math.PI*(n/r);e[n]=Math.cos(s),o[n]=Math.sin(s)}return{real:e,imag:o}}function W_(r,t,e){let o=(e?2:-2)*Math.PI*(r/t),n=Math.cos(o),s=Math.sin(o);return{real:n,imag:s}}var Vf="->",z_=/->/g,oy=",",ny="...";function H_(r,t){r=r.replace(/\s/g,"");let e=(r.length-r.replace(z_,"").length)/Vf.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${Vf}").`);let[o,n]=r.split(Vf);$(o.indexOf(ny)===-1,()=>`The ellipsis notation ("${ny}") is not supported yet.`);let s=o.split(oy),i=s.length;if(t!==i)throw new Error(`Expected ${i} input tensors, received ${t}`);if(i>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");let a=[];for(let m=0;m<n.length;++m){let d=n[m];if(!s.some(h=>h.indexOf(d)!==-1))throw new Error(`Output subscripts contain the label ${d} not present in the input subscripts.`);a.indexOf(d)===-1&&a.push(d)}for(let m=0;m<o.length;++m){let d=o[m];a.indexOf(d)===-1&&d!==oy&&a.push(d)}let u=new Array(s.length);for(let m=0;m<i;++m){if(new Set(s[m].split("")).size!==s[m].length)throw new Error(`Found duplicate axes in input component ${s[m]}. Support for duplicate axes in input is not implemented yet.`);u[m]=[];for(let d=0;d<s[m].length;++d)u[m].push(a.indexOf(s[m][d]))}let c=a.length,l=n.length,p=[];for(let m=l;m<c;++m)p.push(m);return{allDims:a,summedDims:p,idDims:u}}function K_(r,t){let e=new Array(r);e.fill(-1);for(let n=0;n<t.length;++n)e[t[n]]=n;let o=[];for(let n=0;n<r;++n)e[n]===-1&&o.push(n);return e=e.filter(n=>n!==-1),{permutationIndices:e,expandDims:o}}function q_(r,t,e){let o=new Array(r);for(let n=0;n<e.length;++n){let s=e[n].shape;for(let i=0;i<t[n].length;++i)o[t[n][i]]===void 0?o[t[n][i]]=s[i]:$(o[t[n][i]]===s[i],()=>`Expected dimension ${o[t[n][i]]} at axis ${i} of input shaped ${JSON.stringify(s)}, but got dimension ${s[i]}`)}}function j_(r,t){let e=r,o=[],n=0;r.length===0&&e.push(-1),n=r.length+1;for(let i=0;i<n;++i)o.push([]);let s=[];for(let i=0;i<e.length;++i){let a=e[i],u=Y_(t,a);for(let c of u)s.indexOf(c)===-1&&(o[i].push(c),s.push(c))}return{path:e,steps:o}}function X_(r){return r.every((t,e)=>t===e)}function Y_(r,t){let e=[];for(let o=0;o<r.length;++o)(r[o].length===0||r[o].indexOf(t)!==-1||t===-1)&&e.push(o);return e}function Q_(r,t,e=0){let o=[];if(typeof t=="number")$(r.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),o=new Array(t).fill(r.shape[e]/t);else{let n=t.reduce((i,a)=>(a===-1&&(i+=1),i),0);$(n<=1,()=>"There should be only one negative value in split array.");let s=t.indexOf(-1);if(s!==-1){let i=t.reduce((a,u)=>u>0?a+u:a);t[s]=r.shape[e]-i}$(r.shape[e]===t.reduce((i,a)=>i+a),()=>"The sum of sizes must match the size of the axis dimension."),o=t}return o}function Z_(r){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${r}`}function J_(r,t){return`indices(${r}, 0) is invalid: ${t} < 0`}function tA(r,t,e){return`indices(${r}, 0) is invalid: ${t} >= ${e}`}function eA(r,t){return`only one output dimension may be -1, not both ${r} and ${t}`}function rA(r,t){return`size ${r} must be non-negative, not ${t}`}function oA(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function nA(r,t){let e=dt(r),o=dt(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${o}. inputShape=${r} outputShape= ${t}`}function sA(r,t){let e=dt(r),o=dt(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${o}. inputShape=${r} outputShape=${t}`}function iA(){return"segment ids must be >= 0"}function aA(){return"segment ids are not increasing"}function uA(r,t){return`Segment id ${r} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function cA(r,t,e){return`Bad: indices[${r}] == ${t} out of range [0, ${e})`}var Mf={};$t(Mf,{collectGatherOpShapeInfo:()=>mA,computeOutShape:()=>pA,segOpComputeOptimalWindowSize:()=>lA});function lA(r,t){let e=!1,o;for(r<=dl?(o=r,e=!0):o=yn(r,Math.floor(Math.sqrt(r)));!e;)o>t||o===r?e=!0:o=yn(r,o+1);return o}function pA(r,t,e){let o=[],n=r.length;for(let s=0;s<n;s++)s!==t?o.push(r[s]):o.push(e);return o}function mA(r,t,e,o){let n=t.shape.length,s=r.shape.length;if(o!==0&&(o<-n||o>n))throw new Error(`Expect batchDims in the range of [-${n}, ${n}], but got ${o}`);if(o<0&&(o+=n),o>s)throw new Error(`batchDims (${o}) must be less than rank(x) (
    ${s}).`);if(e<o)throw new Error(`batchDims (${o}) must be less than or equal to axis (${e}).`);for(let p=0;p<o;++p)if(r.shape[p]!==t.shape[p])throw new Error(`x.shape[${p}]: ${r.shape[p]} should be equal to indices.shape[${p}]: ${t.shape[p]}.`);let i=r.shape[e],a=[],u=1,c=1,l=1;for(let p=0;p<o;++p)a.push(r.shape[p]),u*=r.shape[p];for(let p=o;p<e;p++)a.push(r.shape[p]),c*=r.shape[p];for(let p=o;p<n;p++)a.push(t.shape[p]);for(let p=e+1;p<s;p++)a.push(r.shape[p]),l*=r.shape[p];return{batchSize:u,sliceSize:l,outerSize:c,dimSize:i,outputShape:a}}function fA(r){try{return r.map(t=>Hn(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function dA(r){return r.map(t=>zn(t))}var Ir={};$t(Ir,{nonMaxSuppressionV3Impl:()=>pl,nonMaxSuppressionV4Impl:()=>ml,nonMaxSuppressionV5Impl:()=>fl,whereImpl:()=>al});var Zo={},hl={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function iy(r,t){Zo[r]=t}function _e(r,t){if(!(r in Zo)||t!=null){let o=gA(r,t);if(o!==null)Zo[r]=o;else return console.log("Could not get context for WebGL version",r),null}let e=Zo[r];return e==null||e.isContextLost()?(delete Zo[r],_e(r)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),Zo[r])}function hA(r){if(typeof OffscreenCanvas<"u"&&r===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function gA(r,t){if(r!==1&&r!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");let e=t??hA(r);return e.addEventListener("webglcontextlost",o=>{o.preventDefault(),delete Zo[r]},!1),O().getBool("SOFTWARE_WEBGL_ENABLED")&&(hl.failIfMajorPerformanceCaveat=!1),r===1?e.getContext("webgl",hl)||e.getContext("experimental-webgl",hl):e.getContext("webgl2",hl)}var ho;(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(ho||(ho={}));var se;(function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"})(se||(se={}));var re;(function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(re||(re={}));function Jo(r,t){return[t,r]}function ay(r,t){return r*t}function pi(r){let t=S.sizeFromShape(r),e=Math.ceil(t/4);return S.sizeToSquarishShape(e)}function kr(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function uy(r,t){let[e,o]=kr(r,t);return e*o*4}function mi(r,t){let e=r,o,n,s,i,a,u,c,l,p,m;return O().getNumber("WEBGL_VERSION")===2?(o=e.R32F,n=e.R16F,s=e.RGBA16F,i=e.RGBA32F,a=e.RED,c=4,l=1,p=e.HALF_FLOAT,m=e.FLOAT,u=e.RGBA8):(o=r.RGBA,n=r.RGBA,s=r.RGBA,i=e.RGBA,a=r.RGBA,c=4,l=4,p=t!=null?t.HALF_FLOAT_OES:null,m=r.FLOAT,u=r.RGBA),{internalFormatFloat:o,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:s,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:u,downloadUnpackNumChannels:c,defaultNumChannels:l,textureTypeHalfFloat:p,textureTypeFloat:m}}function Q(r,t){let e=t();return O().getBool("DEBUG")&&xA(r),e}function xA(r){let t=r.getError();if(t!==r.NO_ERROR)throw new Error("WebGL Error: "+vA(r,t))}var yA=596e-10,bA=65504;function cy(r){return!!(O().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||yA<Math.abs(r)&&Math.abs(r)<bA)}function vA(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function fi(r,t){return Ur(r,()=>r.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function ly(r,t){let e=Ur(r,()=>r.createShader(r.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(Q(r,()=>r.shaderSource(e,t)),Q(r,()=>r.compileShader(e)),r.getShaderParameter(e,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(e)),new Error("Failed to compile vertex shader.");return e}function py(r,t){let e=Ur(r,()=>r.createShader(r.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(Q(r,()=>r.shaderSource(e,t)),Q(r,()=>r.compileShader(e)),O().get("ENGINE_COMPILE_ONLY"))return e;if(r.getShaderParameter(e,r.COMPILE_STATUS)===!1)throw Hf(t,r.getShaderInfoLog(e)),new Error("Failed to compile fragment shader.");return e}var wA=/ERROR: [0-9]+:([0-9]+):/g;function Hf(r,t){let e=wA.exec(t);if(e==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(r);return}let o=+e[1],n=r.split(`
`),s=n.length.toString().length+2,i=n.map((p,m)=>S.rightPad((m+1).toString(),s)+p),a=0;for(let p=0;p<i.length;p++)a=Math.max(i[p].length,a);let u=i.slice(0,o-1),c=i.slice(o-1,o),l=i.slice(o);console.log(u.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${S.rightPad(c[0],a)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(l.join(`
`))}function my(r){return Ur(r,()=>r.createProgram(),"Unable to create WebGLProgram.")}function fy(r,t){if(Q(r,()=>r.linkProgram(t)),!O().get("ENGINE_COMPILE_ONLY")&&r.getProgramParameter(t,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function xl(r,t){if(Q(r,()=>r.validateProgram(t)),r.getProgramParameter(t,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function dy(r,t){let e=Ur(r,()=>r.createBuffer(),"Unable to create WebGLBuffer");return Q(r,()=>r.bindBuffer(r.ARRAY_BUFFER,e)),Q(r,()=>r.bufferData(r.ARRAY_BUFFER,t,r.STATIC_DRAW)),e}function hy(r,t){let e=Ur(r,()=>r.createBuffer(),"Unable to create WebGLBuffer");return Q(r,()=>r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e)),Q(r,()=>r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW)),e}function gy(r){return Ur(r,()=>r.createTexture(),"Unable to create WebGLTexture.")}function xy(r,t){let e=O().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){let o=`[${r}x${t}]`;throw new Error("Requested texture size "+o+" is invalid.")}if(r>e||t>e){let o=`[${r}x${t}]`,n=`[${e}x${e}]`;throw new Error("Requested texture size "+o+" greater than WebGL maximum on this browser / GPU "+n+".")}}function yy(r){return Ur(r,()=>r.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function Kf(r,t,e,o,n,s,i){let a=r.getAttribLocation(t,e);return a===-1?!1:(Q(r,()=>r.bindBuffer(r.ARRAY_BUFFER,o)),Q(r,()=>r.vertexAttribPointer(a,n,r.FLOAT,!1,s,i)),Q(r,()=>r.enableVertexAttribArray(a)),!0)}function TA(r,t,e){SA(r,e),Q(r,()=>r.activeTexture(r.TEXTURE0+e)),Q(r,()=>r.bindTexture(r.TEXTURE_2D,t))}function by(r,t,e){return Ur(r,()=>r.getUniformLocation(t,e),'uniform "'+e+'" not present in program.')}function vy(r,t,e){return r.getUniformLocation(t,e)}function wy(r,t,e,o){Q(r,()=>TA(r,t,o)),Q(r,()=>r.uniform1i(e,o))}function yl(r,t,e){Q(r,()=>r.bindFramebuffer(r.FRAMEBUFFER,e)),Q(r,()=>r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0))}function qf(r,t){Q(r,()=>r.bindFramebuffer(r.FRAMEBUFFER,t)),Q(r,()=>r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0))}function di(r){let t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+CA(r,t))}function CA(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function Ur(r,t,e){let o=Q(r,()=>t());if(o==null)throw new Error(e);return o}function SA(r,t){let e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,o=t+r.TEXTURE0;if(o<r.TEXTURE0||o>e){let n=`[gl.TEXTURE0, gl.TEXTURE${e}]`;throw new Error(`textureUnit must be in ${n}.`)}}function go(r,t=2){return S.sizeFromShape(r.slice(0,r.length-t))}function xo(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function bl(r){let t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[go(r),...xo(r)]),t}function Ty(r,t=!1){let e=O().getNumber("WEBGL_MAX_TEXTURE_SIZE");t&&(e=e*2,r=r.map((n,s)=>s>=r.length-2?S.nearestLargerEven(r[s]):r[s]),r.length===1&&(r=[2,r[0]])),r.length!==2&&(r=S.squeezeShape(r).newShape);let o=S.sizeFromShape(r);if(r.length<=1&&o<=e)return[1,o];if(r.length===2&&r[0]<=e&&r[1]<=e)return r;if(r.length===3&&r[0]*r[1]<=e&&r[2]<=e)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=e&&r[1]*r[2]<=e)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=e&&r[3]<=e)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=e&&r[1]*r[2]*r[3]<=e)return[r[0],r[1]*r[2]*r[3]];if(t){let n=go(r),s=2,i=2;return r.length&&([s,i]=xo(r)),o=n*(s/2)*(i/2),S.sizeToSquarishShape(o).map(a=>a*2)}return S.sizeToSquarishShape(o)}function gl(r){return r%2===0}function tn(r,t){if(r=r.slice(-2),t=t.slice(-2),S.arraysEqual(r,t)||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){let e=r.slice(-1)[0],o=t.slice(-1)[0];if(e===o||gl(e)&&gl(o)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&gl(r[0])&&gl(t[0])}var Gf,Wf;function Cy(r){if(Gf==null){let t=_e(r);Gf=t.getParameter(t.MAX_TEXTURE_SIZE)}return Gf}function Sy(r){if(Wf==null){let t=_e(r);Wf=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Wf)}function Ny(r){if(r===0)return 0;let t,e=_e(r);return Ve(e,"EXT_disjoint_timer_query_webgl2")&&r===2?t=2:Ve(e,"EXT_disjoint_timer_query")?t=1:t=0,t}function Ve(r,t){return r.getExtension(t)!=null}function jf(r){try{if(_e(r)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function Ey(r){if(r===0)return!1;let t=_e(r);if(r===1){if(!Ve(t,"OES_texture_float"))return!1}else if(!Ve(t,"EXT_color_buffer_float"))return!1;return zf(t)}function $y(r){if(r===0)return!1;let t=_e(r);if(r===1){if(!Ve(t,"OES_texture_float")||!Ve(t,"WEBGL_color_buffer_float"))return!1}else{if(Ve(t,"EXT_color_buffer_float"))return zf(t);let o="EXT_color_buffer_half_float";if(Ve(t,o)){let n=t.getExtension(o);return NA(t,n)}return!1}return zf(t)}function zf(r){let t=mi(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e);let o=1,n=1;r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,o,n,0,t.textureFormatFloat,t.textureTypeFloat,null);let s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);let i=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(s),i}function NA(r,t){let e=mi(r,t),o=r.createTexture();r.bindTexture(r.TEXTURE_2D,o);let n=1,s=1;r.texImage2D(r.TEXTURE_2D,0,e.internalFormatHalfFloat,n,s,0,e.textureFormatFloat,e.textureTypeHalfFloat,null);let i=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,i),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,o,0);let a=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(o),r.deleteFramebuffer(i),a}function Iy(r){return r!==2?!1:_e(r).fenceSync!=null}function _r(r,t){Array.isArray(r)||(r=[r]),r.forEach(e=>{e!=null&&S.assert(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}var et=O();et.registerFlag("HAS_WEBGL",()=>et.getNumber("WEBGL_VERSION")>0);et.registerFlag("WEBGL_VERSION",()=>jf(2)?2:jf(1)?1:0);et.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);et.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>et.get("WEBGL_VERSION")===2);et.registerFlag("WEBGL_CPU_FORWARD",()=>!0);et.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);et.registerFlag("WEBGL_PACK",()=>et.getBool("HAS_WEBGL"));et.registerFlag("WEBGL_PACK_NORMALIZATION",()=>et.getBool("WEBGL_PACK"));et.registerFlag("WEBGL_PACK_CLIP",()=>et.getBool("WEBGL_PACK"));et.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>et.getBool("WEBGL_PACK"));et.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>et.getBool("WEBGL_PACK"));et.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>et.getBool("WEBGL_PACK"));et.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>et.getBool("WEBGL_PACK"));et.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>et.getBool("WEBGL_PACK"));et.registerFlag("WEBGL_PACK_REDUCE",()=>et.getBool("WEBGL_PACK"));et.registerFlag("WEBGL_LAZILY_UNPACK",()=>et.getBool("WEBGL_PACK"));et.registerFlag("WEBGL_CONV_IM2COL",()=>et.getBool("WEBGL_PACK"));et.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>Cy(et.getNumber("WEBGL_VERSION")));et.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>Sy(et.getNumber("WEBGL_VERSION")));et.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let r=et.getNumber("WEBGL_VERSION");return r===0?0:Ny(r)});et.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>et.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!ro.isMobile());et.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>Ey(et.getNumber("WEBGL_VERSION")));et.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>et.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:et.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));et.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>$y(et.getNumber("WEBGL_VERSION")));et.registerFlag("WEBGL_FENCE_API_ENABLED",()=>Iy(et.getNumber("WEBGL_VERSION")));et.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>et.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);et.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,r=>{if(r<0&&r!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${r}.`)});et.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>ro.isMobile()?1:-1,r=>{if(r<0&&r!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${r}.`)});et.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);et.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);et.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);et.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);et.registerFlag("WEBGL_EXP_CONV",()=>!1);et.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>et.getBool("IS_TEST"));function Dt(){let r,t,e,o,n,s,i,a,u,c;return O().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",o="in",n="texture",s="outputColor",i="out vec4 outputColor;",a=`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",o="varying",n="texture2D",s="gl_FragColor",i="",a=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:o,texture2D:n,output:s,defineOutput:i,defineSpecialNaN:a,defineSpecialInf:u,defineRound:c}}function mr(r,t,e="index"){let o=S.computeStrides(t);return o.map((n,s)=>{let i=`int ${r[s]} = ${e} / ${n}`,a=s===o.length-1?`int ${r[s+1]} = ${e} - ${r[s]} * ${n}`:`index -= ${r[s]} * ${n}`;return`${i}; ${a};`}).join("")}function en(r,t,e="index"){let o=S.computeStrides(t);return o.map((n,s)=>{let i=`int ${r[s]} = ${e} / outShapeStrides[${s}]`,a=s===o.length-1?`int ${r[s+1]} = ${e} - ${r[s]} * outShapeStrides[${s}]`:`index -= ${r[s]} * outShapeStrides[${s}]`;return`${i}; ${a};`}).join("")}function EA(r,t){let e=r.length,o=r.map(s=>`${t}[${s}]`),n=new Array(e-1);n[e-2]=o[e-1];for(let s=e-3;s>=0;--s)n[s]=`(${n[s+1]} * ${o[s+1]})`;return n}function ky(r,t,e="index"){let o=r.map((s,i)=>i),n=EA(o,t);return n.map((s,i)=>{let a=`int ${r[i]} = ${e} / ${n[i]}`,u=i===n.length-1?`int ${r[i+1]} = ${e} - ${r[i]} * ${n[i]}`:`index -= ${r[i]} * ${n[i]}`;return`${a}; ${u};`}).join("")}function ss(r){let t=S.computeStrides(r).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function is(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var wl=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;var{getBroadcastDims:_y}=A;function Ay(r,t,e){let o=[];if(r.forEach(d=>{let h=S.sizeFromShape(d.shapeInfo.logicalShape);if(d.shapeInfo.isUniform?o.push(`uniform float ${d.name}${h>1?`[${h}]`:""};`):(o.push(`uniform sampler2D ${d.name};`),o.push(`uniform int offset${d.name};`)),e.enableShapeUniforms){let{uniformShape:g}=Tl(e.packedInputs,d.shapeInfo.logicalShape,d.shapeInfo.texShape);switch(g.length){case 1:o.push(`uniform int ${d.name}Shape;`);break;case 2:o.push(`uniform ivec2 ${d.name}Shape;`);break;case 3:o.push(`uniform ivec3 ${d.name}Shape;`);break;case 4:o.push(`uniform ivec4 ${d.name}Shape;`);break;default:break}o.push(`uniform ivec2 ${d.name}TexShape;`)}}),e.enableShapeUniforms){switch(t.logicalShape.length){case 1:o.push("uniform int outShape;");break;case 2:o.push("uniform ivec2 outShape;"),o.push("uniform int outShapeStrides;");break;case 3:o.push("uniform ivec3 outShape;"),o.push("uniform ivec2 outShapeStrides;");break;case 4:o.push("uniform ivec4 outShape;"),o.push("uniform ivec3 outShapeStrides;");break;default:break}o.push("uniform ivec2 outTexShape;")}e.customUniforms&&e.customUniforms.forEach(d=>{o.push(`uniform ${d.type} ${d.name}${d.arrayIndex?`[${d.arrayIndex}]`:""};`)});let n=o.join(`
`),s=r.map(d=>$A(d,t,e.packedInputs,e.enableShapeUniforms)).join(`
`),i=t.texShape,a=Dt(),u=_A(a),c,l,p=DA(a);return t.isPacked?(c=IA(t.logicalShape,i,e.enableShapeUniforms),l=RA(a)):(c=kA(t.logicalShape,i,e.enableShapeUniforms),l=AA(a)),e.packedInputs&&(p+=LA),[p,u,l,n,c,s,e.userCode].join(`
`)}function us(r,t=!1){let e=r.shapeInfo.logicalShape;switch(e.length){case 0:return XA(r,t);case 1:return QA(r,t);case 2:return JA(r,t);case 3:return eR(r,t);case 4:return oR(r,t);case 5:return nR(r);case 6:return sR(r);default:throw new Error(`${e.length}-D input sampling is not yet supported`)}}function Ry(r,t){switch(r.shapeInfo.logicalShape.length){case 0:return jA(r);case 1:return YA(r,t);case 2:return ZA(r,t);case 3:return tR(r,t);default:return rR(r,t)}}function $A(r,t,e=!1,o){let n="";e?n+=Ry(r,o):n+=us(r,o);let s=r.shapeInfo.logicalShape,i=t.logicalShape;return s.length<=i.length&&(e?n+=iR(r,t):n+=aR(r,t)),n}function IA(r,t,e){switch(r.length){case 0:return Dy();case 1:return BA(r,t,e);case 2:return KA(r,t,e);case 3:return MA(r,t,e);default:return GA(r,t,e)}}function kA(r,t,e){switch(r.length){case 0:return Dy();case 1:return VA(r,t,e);case 2:return qA(r,t,e);case 3:return UA(r,t,e);case 4:return WA(r,t,e);case 5:return zA(r,t);case 6:return HA(r,t);default:throw new Error(`${r.length}-D output sampling is not yet supported`)}}function _A(r){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${r.texture2D}(textureSampler, uv).r;
    }
  `}function AA(r){return`
    void setOutput(float val) {
      ${r.output} = vec4(val, 0, 0, 0);
    }
  `}function RA(r){return`
    void setOutput(vec4 val) {
      ${r.output} = val;
    }
  `}function DA(r){return`${r.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${r.varyingFs} vec2 resultUV;
    ${r.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${r.defineSpecialNaN}
    ${r.defineSpecialInf}
    ${r.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${FA}
    ${OA}
    ${PA}
  `}var FA=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,OA=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,PA=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,LA=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function Dy(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function BA(r,t,e){let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return o[0]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${o[1]}.0);
      }
    `:o[1]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${o[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      return 2 * (resTexRC.x * ${o[1]} + resTexRC.y);
    }
  `}function VA(r,t,e){return t[0]===1?e?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?e?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function MA(r,t,e){if(e)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],n=Math.ceil(r[2]/2),s=n*Math.ceil(r[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      int index = resTexRC.x * ${o[1]} + resTexRC.y;

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec3(b, r, c);
    }
  `}function UA(r,t,e){if(e)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${en(["r","c","d"],r)}
    return ivec3(r, c, d);
  }
`;let o=mr(["r","c","d"],r);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${o}
      return ivec3(r, c, d);
    }
  `}function GA(r,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],n=Math.ceil(r[r.length-1]/2),s=n*Math.ceil(r[r.length-2]/2),i=s,a="",u="b, r, c";for(let c=2;c<r.length-1;c++)i*=r[r.length-c-1],a=`
      int b${c} = index / ${i};
      index -= b${c} * ${i};
    `+a,u=`b${c}, `+u;return`
    ivec${r.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      int index = resTexRC.x * ${o[1]} + resTexRC.y;

      ${a}

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec${r.length}(${u});
    }
  `}function WA(r,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${en(["r","c","d","d2"],r)}
      return ivec4(r, c, d, d2);
    }
  `;let o=mr(["r","c","d","d2"],r);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${o}
      return ivec4(r, c, d, d2);
    }
  `}function zA(r,t){let e=mr(["r","c","d","d2","d3"],r);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function HA(r,t){let e=mr(["r","c","d","d2","d3","d4"],r);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function KA(r,t,e){let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(S.arraysEqual(r,t))return e?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${o[0]}, ${o[1]}));
      }
    `;let n=Math.ceil(r[1]/2);return e?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));

      int index = resTexRC.x * ${o[1]} + resTexRC.y;
      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec2(r, c);
    }
  `}function qA(r,t,e){return S.arraysEqual(r,t)?e?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:r[1]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:r[0]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:e?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${r[1]};
      int c = index - r * ${r[1]};
      return ivec2(r, c);
    }
  `}function rn(r){return`offset${r}`}function jA(r){let t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),o=Dt();return`
    vec4 ${e}() {
      return ${o.texture2D}(${t}, halfCR);
    }
  `}function XA(r,t){let e=r.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1);if(r.shapeInfo.isUniform)return`float ${o}() {return ${e};}`;let[n,s]=r.shapeInfo.texShape;if(n===1&&s===1)return`
      float ${o}() {
        return sampleTexture(${e}, halfCR);
      }
    `;let i=rn(e);if(t)return`
    float ${o}() {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], ${i});
      return sampleTexture(${e}, uv);
    }
  `;let[a,u]=r.shapeInfo.texShape;return`
    float ${o}() {
      vec2 uv = uvFromFlat(${a}, ${u}, ${i});
      return sampleTexture(${e}, uv);
    }
  `}function YA(r,t){let e=r.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1),n=r.shapeInfo.texShape,s=Dt();if(t)return`
    vec4 ${o}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${s.texture2D}(${e}, uv);
    }
  `;let i=[Math.ceil(n[0]/2),Math.ceil(n[1]/2)];return`
    vec4 ${o}(int index) {
      vec2 uv = packedUVfrom1D(
        ${i[0]}, ${i[1]}, index);
      return ${s.texture2D}(${e}, uv);
    }
  `}function QA(r,t){let e=r.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1);if(r.shapeInfo.isUniform)return`
      float ${o}(int index) {
        ${cs(r)}
      }
    `;let n=r.shapeInfo.texShape,s=n[0],i=n[1];if(i===1&&s===1)return`
      float ${o}(int index) {
        return sampleTexture(${e}, halfCR);
      }
    `;let a=rn(e);return i===1?t?`
      float ${o}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / float(${e}TexShape[0]));
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${o}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${a}) + 0.5) / ${s}.0);
        return sampleTexture(${e}, uv);
      }
    `:s===1?t?`
      float ${o}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / float(${e}TexShape[1]), 0.5);
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${o}(int index) {
        vec2 uv = vec2((float(index + ${a}) + 0.5) / ${i}.0, 0.5);
        return sampleTexture(${e}, uv);
      }
    `:t?`
    float ${o}(int index) {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], index + ${a});
      return sampleTexture(${e}, uv);
    }
  `:`
    float ${o}(int index) {
      vec2 uv = uvFromFlat(${s}, ${i}, index + ${a});
      return sampleTexture(${e}, uv);
    }
  `}function ZA(r,t){let e=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r.shapeInfo.texShape,i=s[0],a=s[1],u=Dt();if(s!=null&&S.arraysEqual(e,s))return t?`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);

        return ${u.texture2D}(${o}, uv);
      }
    `:`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${a}.0, ${i}.0);

        return ${u.texture2D}(${o}, uv);
      }
    `;if(t)return`
    vec4 ${n}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${o}TexShape[0]) / 2.0), ceil(float(${o}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${o}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${u.texture2D}(${o}, uv);
    }
  `;let c=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],l=Math.ceil(e[1]/2);return`
    vec4 ${n}(int row, int col) {
      vec2 uv = packedUVfrom2D(${l}, ${c[0]}, ${c[1]}, row, col);
      return ${u.texture2D}(${o}, uv);
    }
  `}function JA(r,t){let e=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r.shapeInfo.texShape;if(s!=null&&S.arraysEqual(e,s)){if(t)return`
      float ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `;let m=s[0],d=s[1];return`
    float ${n}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${d}.0, ${m}.0);
      return sampleTexture(${o}, uv);
    }
  `}let{newShape:i,keptDims:a}=S.squeezeShape(e),u=i;if(u.length<e.length){let m=ls(r,u),d=["row","col"];return`
      ${us(m,t)}
      float ${n}(int row, int col) {
        return ${n}(${ps(d,a)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${e[1]}, 1)));
        ${cs(r)}
      }
    `;let c=s[0],l=s[1],p=rn(o);return l===1?t?`
      float ${n}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${o}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${o}TexShape[0]));
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${c}.0);
      return sampleTexture(${o}, uv);
    }
  `:c===1?t?`
      float ${n}(int row, int col) {
        float index = dot(vec3(row, col, ${p}), vec3(${o}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${o}TexShape[1]), 0.5);
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col) {
      float index = dot(vec3(row, col, ${p}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${l}.0, 0.5);
      return sampleTexture(${o}, uv);
    }
  `:t?`
      float ${n}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${o}Shape[1] + col + ${p};
        vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index);
        return sampleTexture(${o}, uv);
      }
    `:`
  float ${n}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${e[1]} + col + ${p};
    vec2 uv = uvFromFlat(${c}, ${l}, index);
    return sampleTexture(${o}, uv);
  }
`}function tR(r,t){let e=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r.shapeInfo.texShape,i=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(e[0]===1){let m=e.slice(1),d=[1,2],h=ls(r,m),g=["b","row","col"];return`
        ${Ry(h,t)}
        vec4 ${n}(int b, int row, int col) {
          return ${n}(${ps(g,d)});
        }
      `}let a=Dt();if(t)return`
    vec4 ${n}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${o}TexShape[0]) / 2.0), ceil(float(${o}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${o}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${o}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${a.texture2D}(${o}, uv);
    }
  `;let u=i[0],c=i[1],l=Math.ceil(e[2]/2),p=l*Math.ceil(e[1]/2);return`
    vec4 ${n}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${u}, ${c}, ${p}, ${l}, b, row, col);
      return ${a.texture2D}(${o}, uv);
    }
  `}function eR(r,t){let e=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e[1]*e[2],i=e[2],{newShape:a,keptDims:u}=S.squeezeShape(e),c=a;if(c.length<e.length){let g=ls(r,c),x=["row","col","depth"];return`
        ${us(g,t)}
        float ${n}(int row, int col, int depth) {
          return ${n}(${ps(x,u)});
        }
      `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${s}, ${i}, 1)));
        ${cs(r)}
      }
    `;let l=r.shapeInfo.texShape,p=l[0],m=l[1],d=r.shapeInfo.flatOffset;if(m===s&&d==null)return t?`
      float ${n}(int row, int col, int depth) {
        int stride1 = ${o}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
        float ${n}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${i}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${m}.0, ${p}.0);
          return sampleTexture(${o}, uv);
        }
      `;if(m===i&&d==null)return t?`
      float ${n}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${o}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${e[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${m}.0, ${p}.0);
      return sampleTexture(${o}, uv);
    }
  `;let h=rn(o);return t?`
    float ${n}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${o}Shape[1] * ${o}Shape[2];
      int stride1 = ${o}Shape[2];
      int index = row * ${s} + col * ${i} + depth + ${h};
      vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index);
      return sampleTexture(${o}, uv);
    }
    `:`
      float ${n}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s} + col * ${i} + depth + ${h};
        vec2 uv = uvFromFlat(${p}, ${m}, index);
        return sampleTexture(${o}, uv);
      }
  `}function rR(r,t){let e=r.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1),n=Dt();if(t)return`
    vec4 ${o}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${e}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${e}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${e}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${n.texture2D}(${e}, uv);
    }
  `;let s=r.shapeInfo.logicalShape,i=s.length,a=r.shapeInfo.texShape,u=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)],c=u[0],l=u[1],p=Math.ceil(s[i-1]/2),m=p*Math.ceil(s[i-2]/2),d="int b, int row, int col",h=`b * ${m} + (row / 2) * ${p} + (col / 2)`;for(let g=2;g<i-1;g++)d=`int b${g}, `+d,m*=s[i-g-1],h=`b${g} * ${m} + `+h;return`
    vec4 ${o}(${d}) {
      int index = ${h};
      int texR = index / ${l};
      int texC = index - texR * ${l};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${l}, ${c});
      return ${n.texture2D}(${e}, uv);
    }
  `}function oR(r,t){let e=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e[3],i=e[2]*s,a=e[1]*i,{newShape:u,keptDims:c}=S.squeezeShape(e);if(u.length<e.length){let N=ls(r,u),k=["row","col","depth","depth2"];return`
      ${us(N,t)}
      float ${n}(int row, int col, int depth, int depth2) {
        return ${n}(${ps(k,c)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${a}, ${i}, ${s}, 1)));
        ${cs(r)}
      }
    `;let l=r.shapeInfo.flatOffset,p=r.shapeInfo.texShape,m=p[0],d=p[1],h=`int stride2 = ${o}Shape[3];`,g=`int stride1 = ${o}Shape[2] * stride2;`,x=`int stride0 = ${o}Shape[1] * stride1;`;if(d===a&&l==null)return t?`
      float ${n}(int row, int col, int depth, int depth2) {
        ${h}
        ${g}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${i}, ${s}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${d}.0, ${m}.0);
        return sampleTexture(${o}, uv);
      }
    `;if(d===s&&l==null)return t?`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${o}Shape[1] * ${o}Shape[2], ${o}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${e[1]*e[2]}, ${e[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${d}.0, ${m}.0);
        return sampleTexture(${o}, uv);
      }
    `;let w=rn(o);return t?`
    float ${n}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${h}
      ${g}
      ${x}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index + ${w});
      return sampleTexture(${o}, uv);
    }
  `:`
    float ${n}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} +
          depth * ${s} + depth2;
      vec2 uv = uvFromFlat(${m}, ${d}, index + ${w});
      return sampleTexture(${o}, uv);
    }
  `}function nR(r){let t=r.shapeInfo.logicalShape,e=r.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1),n=t[4],s=t[3]*n,i=t[2]*s,a=t[1]*i,{newShape:u,keptDims:c}=S.squeezeShape(t);if(u.length<t.length){let g=ls(r,u),x=["row","col","depth","depth2","depth3"];return`
      ${us(g)}
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        return ${o}(${ps(x,c)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${a}, ${i}, ${s}, ${n})) +
          depth3;
        ${cs(r)}
      }
    `;let l=r.shapeInfo.flatOffset,p=r.shapeInfo.texShape,m=p[0],d=p[1];if(d===a&&l==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${i}, ${s}, ${n}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${d}.0, ${m}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(d===n&&l==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${d}.0, ${m}.0);
        return sampleTexture(${e}, uv);
      }
    `;let h=rn(e);return`
    float ${o}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${a} + col * ${i} + depth * ${s} +
          depth2 * ${n} + depth3 + ${h};
      vec2 uv = uvFromFlat(${m}, ${d}, index);
      return sampleTexture(${e}, uv);
    }
  `}function sR(r){let t=r.shapeInfo.logicalShape,e=r.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1),{newShape:n,keptDims:s}=S.squeezeShape(t);if(n.length<t.length){let x=ls(r,n),w=["row","col","depth","depth2","depth3","depth4"];return`
      ${us(x)}
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${o}(${ps(w,s)});
      }
    `}let i=t[5],a=t[4]*i,u=t[3]*a,c=t[2]*u,l=t[1]*c;if(r.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${l}, ${c}, ${u}, ${a})) +
          dot(
            vec2(depth3, depth4),
            vec2(${i}, 1)));
        ${cs(r)}
      }
    `;let p=r.shapeInfo.flatOffset,m=r.shapeInfo.texShape,d=m[0],h=m[1];if(h===l&&p==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${c}, ${u}, ${a}, ${i})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${h}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(h===i&&p==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${h}.0, ${d}.0);
        return sampleTexture(${e}, uv);
      }
    `;let g=rn(e);return`
    float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${l} + col * ${c} + depth * ${u} +
          depth2 * ${a} + depth3 * ${i} + depth4 + ${g};
      vec2 uv = uvFromFlat(${d}, ${h}, index);
      return sampleTexture(${e}, uv);
    }
  `}function cs(r){let t=r.name,e=S.sizeFromShape(r.shapeInfo.logicalShape);return e<2?`return ${t};`:`
    for (int i = 0; i < ${e}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function iR(r,t){let e=r.name,o=e.charAt(0).toUpperCase()+e.slice(1),n="get"+o+"AtOutCoords",s=r.shapeInfo.logicalShape.length,i=t.logicalShape.length,a=_y(r.shapeInfo.logicalShape,t.logicalShape),u=nt(i),c=i-s,l,p=["x","y","z","w","u","v"];s===0?l="":i<2&&a.length>=1?l="coords = 0;":l=a.map(N=>`coords.${p[N+c]} = 0;`).join(`
`);let m="";i<2&&s>0?m="coords":m=r.shapeInfo.logicalShape.map((N,k)=>`coords.${p[k+c]}`).join(", ");let d="return outputValue;",g=S.sizeFromShape(r.shapeInfo.logicalShape)===1,w=S.sizeFromShape(t.logicalShape)===1;if(s===1&&!g&&!w)d=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(g&&!w)i===1?d=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:d=`
        return vec4(outputValue.x);
      `;else if(a.length){let N=s-2,k=s-1;a.indexOf(N)>-1&&a.indexOf(k)>-1?d="return vec4(outputValue.x);":a.indexOf(N)>-1?d="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":a.indexOf(k)>-1&&(d="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${n}() {
      ${u} coords = getOutputCoords();
      ${l}
      vec4 outputValue = get${o}(${m});
      ${d}
    }
  `}function aR(r,t){let e=r.name,o=e.charAt(0).toUpperCase()+e.slice(1),n="get"+o+"AtOutCoords",s=t.texShape,i=r.shapeInfo.texShape,a=r.shapeInfo.logicalShape.length,u=t.logicalShape.length;if(!r.shapeInfo.isUniform&&a===u&&r.shapeInfo.flatOffset==null&&S.arraysEqual(i,s))return`
      float ${n}() {
        return sampleTexture(${e}, resultUV);
      }
    `;let c=nt(u),l=_y(r.shapeInfo.logicalShape,t.logicalShape),p=u-a,m,d=["x","y","z","w","u","v"];a===0?m="":u<2&&l.length>=1?m="coords = 0;":m=l.map(g=>`coords.${d[g+p]} = 0;`).join(`
`);let h="";return u<2&&a>0?h="coords":h=r.shapeInfo.logicalShape.map((g,x)=>`coords.${d[x+p]}`).join(", "),`
    float ${n}() {
      ${c} coords = getOutputCoords();
      ${m}
      return get${o}(${h});
    }
  `}function nt(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error(`GPU for rank ${r} is not yet supported`)}function Tl(r,t,e){let{newShape:o,keptDims:n}=S.squeezeShape(t),s=t.length,i=r&&s===3&&t[0]===1,a=i?t.slice(1):o,u=!r&&s>1&&!S.arraysEqual(t,e)&&o.length<s||i;return{useSqueezeShape:u,uniformShape:u?a:t,keptDims:n}}function ls(r,t){let e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function ps(r,t){return t.map(e=>r[e]).join(", ")}function Oy(r,t,e,o){let n=e.map((l,p)=>{let m={logicalShape:l.shape,texShape:l.isUniform?null:l.texData.texShape,isUniform:l.isUniform,isPacked:l.isUniform?!1:l.texData.isPacked,flatOffset:null};return l.texData!=null&&l.texData.slice!=null&&l.texData.slice.flatOffset>0&&(m.flatOffset=l.texData.slice.flatOffset),{name:t.variableNames[p],shapeInfo:m}}),s=n.map(l=>l.shapeInfo),i={logicalShape:o.shape,texShape:o.texData.texShape,isUniform:!1,isPacked:o.texData.isPacked,flatOffset:null},a=Ay(n,i,t),u=py(r.gl,a),c=r.createProgram(u);return O().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:u,source:a,webGLProgram:c,inShapeInfos:s,outShapeInfo:i,uniformLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,inShapesLocations:null,inTexShapesLocations:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:Object.assign({program:t,fragmentShader:u,source:a,webGLProgram:c,inShapeInfos:s,outShapeInfo:i},Xf(r,t,c))}function Xf(r,t,e){let o={},n={},s={},i=[],a,u,c,l=null,p=null;p=r.getUniformLocation(e,"NAN",!1),O().getNumber("WEBGL_VERSION")===1&&(l=r.getUniformLocation(e,"INFINITY",!1));let m=!1;for(let d=0;d<t.variableNames.length;d++){let h=t.variableNames[d];o[h]=r.getUniformLocation(e,h,m),o[`offset${h}`]=r.getUniformLocation(e,`offset${h}`,m),t.enableShapeUniforms&&(n[`${h}Shape`]=r.getUniformLocation(e,`${h}Shape`,m),s[`${h}TexShape`]=r.getUniformLocation(e,`${h}TexShape`,m))}return t.enableShapeUniforms&&(a=r.getUniformLocation(e,"outShape",m),c=r.getUniformLocation(e,"outShapeStrides",m),u=r.getUniformLocation(e,"outTexShape",m)),t.customUniforms&&t.customUniforms.forEach((d,h)=>{i[h]=r.getUniformLocation(e,d.name,m)}),{uniformLocations:o,customUniformLocations:i,infLoc:l,nanLoc:p,inShapesLocations:n,inTexShapesLocations:s,outShapeLocation:a,outShapeStridesLocation:c,outTexShapeLocation:u}}function Fy(r,t){if(r.length!==t.length)throw Error(`Binary was compiled with ${r.length} inputs, but was executed with ${t.length} inputs`);r.forEach((e,o)=>{let n=e.logicalShape,s=t[o],i=s.shape;if(!S.arraysEqual(n,i))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${n} and ${i} must match`);if(e.isUniform&&s.isUniform)return;let a=e.texShape,u=s.isUniform?null:s.texData.texShape;if(!S.arraysEqual(a,u))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${a} and ${u} must match`)})}function Py(r,t,e,o,n){t.program.enableShapeUniforms||(Fy(t.inShapeInfos,e),Fy([t.outShapeInfo],[o]));let s=o.texData.texture,i=o.texData.texShape;o.texData.isPacked?r.setOutputPackedMatrixTexture(s.texture,i[0],i[1]):r.setOutputMatrixTexture(s.texture,i[0],i[1]),r.setProgram(t.webGLProgram),O().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&r.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&r.gl.uniform1f(t.nanLoc,NaN),e.forEach((u,c)=>{let l=t.program.variableNames[c],p=t.uniformLocations[l],m=t.uniformLocations[`offset${l}`],d=t.inShapesLocations[`${l}Shape`],h=t.inTexShapesLocations[`${l}TexShape`];if(d){let{uniformShape:g}=Tl(t.program.packedInputs,u.shape,u.texData.texShape);switch(g.length){case 1:r.gl.uniform1iv(d,new Int32Array(g));break;case 2:r.gl.uniform2iv(d,new Int32Array(g));break;case 3:r.gl.uniform3iv(d,new Int32Array(g));break;case 4:r.gl.uniform4iv(d,new Int32Array(g));break;default:break}}if(h&&r.gl.uniform2i(h,u.texData.texShape[0],u.texData.texShape[1]),p!=null){if(u.isUniform){if(S.sizeFromShape(u.shape)<2)r.gl.uniform1f(p,u.uniformValues[0]);else{let g=u.uniformValues;g instanceof Float32Array||(g=new Float32Array(g)),r.gl.uniform1fv(p,g)}return}u.texData.slice!=null&&m!=null&&r.gl.uniform1i(m,u.texData.slice.flatOffset),r.setInputMatrixTexture(u.texData.texture.texture,p,c)}});let a=t.outShapeLocation;if(a)switch(o.shape.length){case 1:r.gl.uniform1iv(a,new Int32Array(o.shape));break;case 2:r.gl.uniform2iv(a,new Int32Array(o.shape));break;case 3:r.gl.uniform3iv(a,new Int32Array(o.shape));break;case 4:r.gl.uniform4iv(a,new Int32Array(o.shape));break;default:break}if(t.outShapeStridesLocation){let u=S.computeStrides(o.shape);switch(o.shape.length){case 2:r.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(u));break;case 3:r.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(u));break;case 4:r.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(u));break;default:break}}t.outTexShapeLocation&&r.gl.uniform2i(t.outTexShapeLocation,o.texData.texShape[0],o.texData.texShape[1]),t.program.customUniforms&&n&&t.program.customUniforms.forEach((u,c)=>{let l=t.customUniformLocations[c],p=n[c];if(u.type==="float")r.gl.uniform1fv(l,p);else if(u.type==="vec2")r.gl.uniform2fv(l,p);else if(u.type==="vec3")r.gl.uniform3fv(l,p);else if(u.type==="vec4")r.gl.uniform4fv(l,p);else if(u.type==="int")r.gl.uniform1iv(l,p);else if(u.type==="ivec2")r.gl.uniform2iv(l,p);else if(u.type==="ivec3")r.gl.uniform3iv(l,p);else if(u.type==="ivec4")r.gl.uniform4iv(l,p);else throw Error(`uniform type ${u.type} is not supported yet.`)}),r.executeProgram()}function Ly(r,t,e){let o="";t.concat(e).forEach(i=>{let a=i.texData!=null&&i.texData.slice!=null&&i.texData.slice.flatOffset>0;if(r.enableShapeUniforms&&!i.isUniform){let u=i.texData.texShape,{useSqueezeShape:c,uniformShape:l,keptDims:p}=Tl(r.packedInputs,i.shape,u),m="",d="",h="";if(l.length===1&&r.packedInputs){let D=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];m=`${D[0]>1}_${D[1]>1}`}else if(l.length===2&&!r.packedInputs)d=`${l[0]>1}_${l[1]>1}`;else if(l.length>2&&!r.packedInputs){let D=S.computeStrides(l);h=`${D[0]===u[1]}_${D[D.length-1]===u[1]}`}let g=i.shape.length,x=l.length===2&&S.arraysEqual(i.shape,u),w=S.sizeFromShape(i.shape)===1,N=A.getBroadcastDims(i.shape,e.shape),k=!r.packedInputs&&g===e.shape.length&&S.arraysEqual(u,e.texData.texShape),_=r.packedInputs||l.length>2?"":`${u[0]>1}_${u[1]>1}`;o+=`${g}_${k}_${c?p:""}_${l.length}_${w}_${N}_${x}_${m}_${d}_${h}_${_}_${a}`}else{let u=i.isUniform?"uniform":i.texData.texShape;o+=`${i.shape}_${u}_${a}`}});let n=r.userCode,s=r.constructor.name;return s+="_"+o+"_"+n+`${O().getNumber("WEBGL_VERSION")}`,s}function Et(r){return O().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&r<=4}var Cl=class{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=ho.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let e=Dt();this.outputShape=t,this.enableShapeUniforms=Et(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?en(["r","c","d"],t):mr(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${e.output} = result;
      }
    `}};var Sl=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=ho.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let e=Dt();this.outputShape=t,this.enableShapeUniforms=Et(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?en(["r","c","d"],t):mr(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${e.output} = result;
      }
    `}};var Nl=class{constructor(t){this.variableNames=["A"],this.outTexUsage=se.DOWNLOAD;let e=Dt();this.outputShape=t,this.userCode=`
      ${wl}

      void main() {
        float x = getAAtOutCoords();
        ${e.output} = encode_float(x);
      }
    `}};var El=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=se.DOWNLOAD;let e=Dt();this.outputShape=t,this.userCode=`
      ${wl}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${e.output} = encode_float(x);
      }
    `}};var $l=class{constructor(t,e=!1){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];let o=Dt();this.outputShape=t,this.enableShapeUniforms=Et(this.outputShape.length);let n="result";e&&(n="floor(result * 255. + 0.5)"),this.userCode=`
      ${this.enableShapeUniforms?is():ss(t)}

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);

        int r = flatIndex / texShape[1];
        int c = imod(flatIndex, texShape[1]);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
        vec4 values = ${o.texture2D}(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        ${o.output} = vec4(${n}, 0., 0., 0.);
      }
    `}};var Il=class{constructor(t,e=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];let o=Dt();this.outputShape=t,this.enableShapeUniforms=Et(this.outputShape.length);let n="",s="result";e&&(s="floor(result * 255. + 0.5)");for(let i=0;i<=1;i++)for(let a=0;a<=1;a++){let u=i*2+a;n+=`
          localCoords = coords;
          if(localCoords[2] + ${a} < ${this.enableShapeUniforms?"outShape[2]":`${t[2]}`}) {
          localCoords[2] += ${a};
          if (localCoords[1] + ${i} < ${this.enableShapeUniforms?"outShape[1]":`${t[1]}`}) {
            localCoords[1] += ${i};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${o.texture2D}(A, uv);

            if (offset == 0) {
              result[${u}] = values[0];
            } else if (offset == 1) {
              result[${u}] = values[1];
            } else if (offset == 2) {
              result[${u}] = values[2];
            } else {
              result[${u}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?is():ss(t)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${n}

          ${o.output} = ${s};
        }
    `}};function By(r){let t=Dt(),e=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return ly(r,e)}function Vy(r){let t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return dy(r,t)}function My(r){let t=new Uint16Array([0,1,2,2,1,3]);return hy(r,t)}function hi(r,t,e,o,n,s){xy(t,e);let i=gy(r),a=r.TEXTURE_2D;return Q(r,()=>r.bindTexture(a,i)),Q(r,()=>r.texParameteri(a,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)),Q(r,()=>r.texParameteri(a,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)),Q(r,()=>r.texParameteri(a,r.TEXTURE_MIN_FILTER,r.NEAREST)),Q(r,()=>r.texParameteri(a,r.TEXTURE_MAG_FILTER,r.NEAREST)),O().getNumber("WEBGL_VERSION")===1?Q(r,()=>r.texImage2D(a,0,o,t,e,0,n,s,null)):Q(r,()=>r.texStorage2D(a,1,o,t,e)),Q(r,()=>r.bindTexture(r.TEXTURE_2D,null)),{texture:i,texShape:[e,t]}}function Yf(r){return r.internalFormatFloat}function Uy(r,t,e,o){let[n,s]=Jo(t,e);return hi(r,n,s,Yf(o),o.textureFormatFloat,r.FLOAT)}function Qf(r){return r.internalFormatHalfFloat}function Gy(r,t,e,o){let[n,s]=Jo(t,e);return hi(r,n,s,Qf(o),o.textureFormatFloat,o.textureTypeHalfFloat)}function Zf(r){return r.downloadTextureFormat}function Wy(r,t,e,o){let[n,s]=Jo(t,e);return hi(r,n,s,Zf(o),r.RGBA,r.UNSIGNED_BYTE)}function Jf(r){return r.internalFormatPackedFloat}function zy(r,t,e,o){let[n,s]=kr(t,e);return hi(r,n,s,Jf(o),r.RGBA,r.FLOAT)}function td(r){return r.internalFormatPackedHalfFloat}function Hy(r,t,e,o){let[n,s]=kr(t,e);return hi(r,n,s,td(o),r.RGBA,o.textureTypeHalfFloat)}function Ky(r,t,e){return Q(r,()=>r.bindBuffer(r.ARRAY_BUFFER,e)),Kf(r,t,"clipSpacePos",e,3,20,0)&&Kf(r,t,"uv",e,2,20,12)}function qy(r,t,e,o,n,s){Q(r,()=>r.bindTexture(r.TEXTURE_2D,t));let i,a,u;n instanceof Uint8Array?(i=new Uint8Array(e*o*4),a=r.UNSIGNED_BYTE,u=r.RGBA):(i=new Float32Array(e*o*4),a=r.FLOAT,u=s.internalFormatPackedFloat),i.set(n),O().getNumber("WEBGL_VERSION")===2?Q(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,e,o,r.RGBA,a,i)):Q(r,()=>r.texImage2D(r.TEXTURE_2D,0,u,e,o,0,r.RGBA,a,i)),Q(r,()=>r.bindTexture(r.TEXTURE_2D,null))}function jy(r,t,e){Q(r,()=>r.bindTexture(r.TEXTURE_2D,t)),e.data instanceof Uint8Array?O().getNumber("WEBGL_VERSION")===2?Q(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,e.width,e.height,r.RGBA,r.UNSIGNED_BYTE,e.data)):Q(r,()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA,e.width,e.height,0,r.RGBA,r.UNSIGNED_BYTE,e.data)):O().getNumber("WEBGL_VERSION")===2?Q(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,r.RGBA,r.UNSIGNED_BYTE,e)):Q(r,()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e)),Q(r,()=>r.bindTexture(r.TEXTURE_2D,null))}function Xy(r,t,e,o){let n=r.createBuffer();Q(r,()=>r.bindBuffer(r.PIXEL_PACK_BUFFER,n));let a=4*4*t*e;return Q(r,()=>r.bufferData(r.PIXEL_PACK_BUFFER,a,r.STREAM_READ)),Q(r,()=>r.readPixels(0,0,e,t,r.RGBA,r.FLOAT,0)),Q(r,()=>r.bindBuffer(r.PIXEL_PACK_BUFFER,null)),n}function Yy(r,t,e){let o=r,n=new Float32Array(e);return o.bindBuffer(o.PIXEL_PACK_BUFFER,t),o.getBufferSubData(o.PIXEL_PACK_BUFFER,0,n),o.bindBuffer(o.PIXEL_PACK_BUFFER,null),n}function Qy(r,t,e,o){let[n,s]=Jo(t,e),i=4,a=new Uint8Array(ay(t*e,i));return Q(r,()=>r.readPixels(0,0,n,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,a)),new Float32Array(a.buffer)}function Zy(r,t,e,o,n,s,i,a){let u=r,c=new Float32Array(uy(s,i));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function Jy(r,t,e){let o=new Float32Array(t*e*4);return Q(r,()=>r.readPixels(0,0,e,t,r.RGBA,r.FLOAT,o)),o}var ms=class{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];let e=O().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,iy(e,t)):this.gl=_e(e);let o="WEBGL_color_buffer_float",n="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),O().getNumber("WEBGL_VERSION")===1){let s="OES_texture_float",i="OES_texture_half_float";if(this.textureFloatExtension=fi(this.gl,s),Ve(this.gl,i))this.textureHalfFloatExtension=fi(this.gl,i);else if(O().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(o),Ve(this.gl,n))this.colorBufferHalfFloatExtension=fi(this.gl,n);else if(O().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(o="EXT_color_buffer_float",Ve(this.gl,o))this.colorBufferFloatExtension=this.gl.getExtension(o);else if(Ve(this.gl,n))this.colorBufferHalfFloatExtension=this.gl.getExtension(n);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=Vy(this.gl),this.indexBuffer=My(this.gl),this.framebuffer=yy(this.gl),this.textureConfig=mi(this.gl,this.textureHalfFloatExtension)}get debug(){return O().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let t=this.gl;Q(t,()=>t.finish()),Q(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),Q(t,()=>t.deleteFramebuffer(this.framebuffer)),Q(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),Q(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),Q(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,e){return this.throwIfDisposed(),Uy(this.gl,t,e,this.textureConfig)}createFloat16MatrixTexture(t,e){return this.throwIfDisposed(),Gy(this.gl,t,e,this.textureConfig)}createUnsignedBytesMatrixTexture(t,e){return this.throwIfDisposed(),Wy(this.gl,t,e,this.textureConfig)}uploadPixelDataToTexture(t,e){this.throwIfDisposed(),jy(this.gl,t,e)}uploadDenseMatrixToTexture(t,e,o,n){this.throwIfDisposed(),qy(this.gl,t,e,o,n,this.textureConfig)}createFloat16PackedMatrixTexture(t,e){return this.throwIfDisposed(),Hy(this.gl,t,e,this.textureConfig)}createPackedMatrixTexture(t,e){return this.throwIfDisposed(),zy(this.gl,t,e,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(qf(this.gl,this.framebuffer),this.outputTexture=null),Q(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,e,o){return this.downloadMatrixDriver(t,()=>Qy(this.gl,e,o,this.textureConfig))}downloadPackedMatrixFromBuffer(t,e,o,n,s,i){return Zy(this.gl,t,e,o,n,s,i,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,e){return Yy(this.gl,t,e)}createBufferFromTexture(t,e,o){this.bindTextureToFrameBuffer(t);let n=Xy(this.gl,e,o,this.textureConfig);return this.unbindTextureToFrameBuffer(),n}createAndWaitForFence(){let t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let e,o;if(O().getBool("WEBGL_FENCE_API_ENABLED")){let n=t,s=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),o=()=>{let i=n.clientWaitSync(s,0,0);return i===n.ALREADY_SIGNALED||i===n.CONDITION_SATISFIED},e=s}else O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),o=()=>this.isQueryAvailable(e,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):o=()=>!0;return{query:e,isFencePassed:o}}downloadMatrixFromPackedTexture(t,e,o){return this.downloadMatrixDriver(t,()=>Jy(this.gl,e,o))}createProgram(t){this.throwIfDisposed();let e=this.gl;this.vertexShader==null&&(this.vertexShader=By(e));let o=my(e);return Q(e,()=>e.attachShader(o,this.vertexShader)),Q(e,()=>e.attachShader(o,t)),fy(e,o),this.debug&&xl(e,o),this.vertexAttrsAreBound||(this.setProgram(o),this.vertexAttrsAreBound=Ky(e,this.program,this.vertexBuffer)),o}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&Q(this.gl,()=>this.gl.deleteProgram(t))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&xl(this.gl,this.program),Q(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,e,o=!0){return this.throwIfDisposed(),o?by(this.gl,t,e):vy(this.gl,t,e)}getAttributeLocation(t,e){return this.throwIfDisposed(),Q(this.gl,()=>this.gl.getAttribLocation(t,e))}getUniformLocationNoThrow(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)}setInputMatrixTexture(t,e,o){this.throwIfDisposed(),this.throwIfNoProgram(),wy(this.gl,t,e,o)}setOutputMatrixTexture(t,e,o){this.setOutputMatrixTextureDriver(t,o,e)}setOutputPackedMatrixTexture(t,e,o){this.throwIfDisposed();let[n,s]=kr(e,o);this.setOutputMatrixTextureDriver(t,n,s)}setOutputMatrixWriteRegion(t,e,o,n){this.setOutputMatrixWriteRegionDriver(o,t,n,e)}setOutputPackedMatrixWriteRegion(t,e,o,n){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&xl(this.gl,this.program),di(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let t=this.gl;this.debug&&this.debugValidate(),Q(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),Q(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=fi(this.gl,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.createQuery();return o.beginQuery(n.TIME_ELAPSED_EXT,s),s}let t=this.getQueryTimerExtensionWebGL1(),e=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,e),e}endQuery(){if(O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let e=this.gl,o=this.getQueryTimerExtensionWebGL2();e.endQuery(o.TIME_ELAPSED_EXT);return}let t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(t){return await S.repeatedTry(()=>this.disposed||this.isQueryAvailable(t,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(t,e){if(e===0)return null;if(e===2){let o=this.gl;return o.getQueryParameter(t,o.QUERY_RESULT)/1e6}else{let o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,e){if(e===0)return!0;if(e===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.getQueryParameter(t,o.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),s&&!this.disjoint}else{let o=this.getQueryTimerExtensionWebGL1(),n=o.getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),n&&!this.disjoint}}pollFence(t){return new Promise(e=>{this.addItemToPoll(()=>t.isFencePassed(),()=>e())})}pollItems(){let t=pR(this.itemsToPoll.map(e=>e.isDoneFn));for(let e=0;e<=t;++e){let{resolveFn:o}=this.itemsToPoll[e];o()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,e){this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),!(this.itemsToPoll.length>1)&&S.repeatedTry(()=>(this.pollItems(),this.itemsToPoll.length===0))}bindTextureToFrameBuffer(t){this.throwIfDisposed(),yl(this.gl,t,this.framebuffer),this.debug&&di(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(yl(this.gl,this.outputTexture,this.framebuffer),this.debug&&di(this.gl)):qf(this.gl,this.framebuffer)}downloadMatrixDriver(t,e){this.bindTextureToFrameBuffer(t);let o=e();return this.unbindTextureToFrameBuffer(),o}setOutputMatrixTextureDriver(t,e,o){this.throwIfDisposed();let n=this.gl;yl(n,t,this.framebuffer),this.debug&&di(n),this.outputTexture=t,Q(n,()=>n.viewport(0,0,e,o)),Q(n,()=>n.scissor(0,0,e,o))}setOutputMatrixWriteRegionDriver(t,e,o,n){this.throwIfDisposed(),Q(this.gl,()=>this.gl.scissor(t,e,o,n))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}};function pR(r){let t=0;for(;t<r.length&&r[t]();++t);return t-1}var wd={};$t(wd,{addImpl:()=>od,bincountImpl:()=>rb,bincountReduceImpl:()=>ob,castImpl:()=>rd,ceilImpl:()=>nd,concatImpl:()=>nb,equalImpl:()=>sd,expImpl:()=>id,expm1Impl:()=>ad,floorImpl:()=>ud,gatherNdImpl:()=>sb,gatherV2Impl:()=>ib,greaterEqualImpl:()=>ld,greaterImpl:()=>cd,lessEqualImpl:()=>md,lessImpl:()=>pd,linSpaceImpl:()=>ab,logImpl:()=>fd,maxImpl:()=>ub,maximumImpl:()=>dd,minimumImpl:()=>hd,multiplyImpl:()=>yi,negImpl:()=>cb,notEqualImpl:()=>gd,prodImpl:()=>pb,raggedTensorToTensorImpl:()=>db,rangeImpl:()=>hb,rsqrtImpl:()=>xd,scatterImpl:()=>gb,sigmoidImpl:()=>xb,simpleAbsImpl:()=>tb,sliceImpl:()=>yb,sparseFillEmptyRowsImpl:()=>bb,sparseReshapeImpl:()=>vb,sparseSegmentReductionImpl:()=>wb,sqrtImpl:()=>Tb,squaredDifferenceImpl:()=>yd,stridedSliceImpl:()=>Cb,stringNGramsImpl:()=>Sb,stringSplitImpl:()=>Nb,stringToHashBucketFastImpl:()=>Eb,subImpl:()=>vd,tileImpl:()=>$b,topKImpl:()=>kb,transposeImpl:()=>lb,uniqueImpl:()=>_b});function gi(r,t){Array.isArray(r)||(r=[r]),r.forEach(e=>{e!=null&&S.assert(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}function tb(r){let t=new Float32Array(r.length);for(let e=0;e<r.length;++e)t[e]=Math.abs(r[e]);return t}function Lt(r){return(t,e,o,n,s)=>{let i=A.assertAndGetBroadcastShape(t,e),a=i.length,u=S.computeStrides(i),c=S.sizeFromShape(i),l=S.getTypedArrayFromDType(s,c),p=t.length,m=e.length,d=S.computeStrides(t),h=S.computeStrides(e),g=A.getBroadcastDims(t,i),x=A.getBroadcastDims(e,i);if(g.length+x.length===0)for(let w=0;w<l.length;++w)l[w]=r(o[w%o.length],n[w%n.length]);else for(let w=0;w<l.length;++w){let N=S.indexToLoc(w,a,u),k=N.slice(-p);g.forEach(V=>k[V]=0);let _=S.locToIndex(k,p,d),D=N.slice(-m);x.forEach(V=>D[V]=0);let B=S.locToIndex(D,m,h);l[w]=r(o[_],n[B])}return[l,i]}}function fs(r){let{inputs:t,backend:e}=r,{real:o,imag:n}=t,s=e.data.get(o.dataId).values,i=e.data.get(n.dataId).values,a=e.makeTensorInfo(o.shape,"complex64"),u=e.data.get(a.dataId);return u.complexTensorInfos={real:e.makeTensorInfo(o.shape,"float32",s),imag:e.makeTensorInfo(n.shape,"float32",i)},a}function kl(r,t,e="float32"){if(e==="complex64"){let n=kl(r,t,"float32"),s=kl(r,t,"float32");return fs({inputs:{real:n,imag:s},backend:r})}let o=S.makeZerosTypedArray(S.sizeFromShape(t),e);return r.makeTensorInfo(t,e,o)}function ed(r){let{inputs:t,backend:e}=r,{x:o}=t;return e.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}function eb(r){let{inputs:t,backend:e}=r,{input:o}=t,n=e.data.get(o.dataId).complexTensorInfos.real,s=e.data.get(n.dataId).values;return e.makeTensorInfo(n.shape,n.dtype,s)}function rd(r,t,e,o){if(o==="int32"){let n=Int32Array.from(r);return[t,"int32",n]}if(o==="bool"){let n=S.toTypedArray([0],e),[s,i]=Lt((a,u)=>a!==u?1:0)(t,[],r,n,"bool");return[i,"bool",s]}throw new Error(`Error in Cast: failed to cast ${e} to ${o}`)}function xi(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return ed({inputs:{x:n},backend:e});let l=kl(e,n.shape,n.dtype),p=xi({inputs:{x:n},backend:e,attrs:{dtype:"float32"}}),m=fs({inputs:{real:p,imag:l},backend:e});return e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(p),m}if(n.dtype==="complex64"){let l=eb({inputs:{input:n},backend:e}),p=xi({inputs:{x:l},backend:e,attrs:{dtype:s}});return e.disposeIntermediateTensorInfo(l),p}if(!S.hasEncodingLoss(n.dtype,s)){let l=ed({inputs:{x:n},backend:e});return{dataId:l.dataId,shape:l.shape,dtype:s}}let i=e.data.get(n.dataId).values,[a,u,c]=rd(i,n.shape,n.dtype,s);return e.makeTensorInfo(a,u,c)}function Ht(r,t,e,o){return e==null?({inputs:n,backend:s})=>{let{a:i,b:a}=n,u=s;gi([i,a],r);let c=u.data.get(i.dataId).values,l=u.data.get(a.dataId).values,p=i.dtype==="string"?A.fromUint8ToStringArray(c):c,m=i.dtype==="string"?A.fromUint8ToStringArray(l):l,d=o||i.dtype,[h,g]=t(i.shape,a.shape,p,m,d);return u.makeTensorInfo(g,d,h)}:({inputs:n,backend:s})=>{let{a:i,b:a}=n,u=s;if(i.dtype==="complex64"||a.dtype==="complex64"){let c=xi({inputs:{x:i},backend:u,attrs:{dtype:"complex64"}}),l=u.data.get(c.dataId),p=l.complexTensorInfos.real,m=l.complexTensorInfos.imag,d=u.data.get(p.dataId).values,h=u.data.get(m.dataId).values,g=xi({inputs:{x:a},backend:u,attrs:{dtype:"complex64"}}),x=u.data.get(g.dataId),w=x.complexTensorInfos.real,N=x.complexTensorInfos.imag,k=u.data.get(w.dataId).values,_=u.data.get(N.dataId).values,[D,B,V]=e(i.shape,a.shape,d,h,k,_),U=u.makeTensorInfo(V,"float32",D),H=u.makeTensorInfo(V,"float32",B),W=fs({inputs:{real:U,imag:H},backend:u});return u.disposeIntermediateTensorInfo(c),u.disposeIntermediateTensorInfo(g),u.disposeIntermediateTensorInfo(U),u.disposeIntermediateTensorInfo(H),W}else{let c=u.data.get(i.dataId).values,l=u.data.get(a.dataId).values,p=o||i.dtype,[m,d]=t(i.shape,a.shape,c,l,p);return u.makeTensorInfo(d,p,m)}}}function ds(r){return(t,e,o,n,s,i)=>{let a=A.assertAndGetBroadcastShape(t,e),u=S.sizeFromShape(a),c=a.length,l=S.computeStrides(a),p=S.getTypedArrayFromDType("float32",u),m=S.getTypedArrayFromDType("float32",u),d=A.getBroadcastDims(t,a),h=A.getBroadcastDims(e,a),g=A.mergeRealAndImagArrays(o,n),x=A.mergeRealAndImagArrays(s,i),w=t.length,N=S.computeStrides(t),k=e.length,_=S.computeStrides(e);if(d.length+h.length===0)for(let D=0;D<p.length;D++){let B=D%g.length,V=D%x.length,U=r(g[B*2],g[B*2+1],x[V*2],x[V*2+1]);p[D]=U.real,m[D]=U.imag}else for(let D=0;D<p.length;D++){let B=S.indexToLoc(D,c,l),V=B.slice(-w);d.forEach(Z=>V[Z]=0);let U=S.locToIndex(V,w,N),H=B.slice(-k);h.forEach(Z=>H[Z]=0);let W=S.locToIndex(H,k,_),j=r(g[U*2],g[U*2+1],x[W*2],x[W*2+1]);p[D]=j.real,m[D]=j.imag}return[p,m,a]}}var od=Lt((r,t)=>r+t),mR=ds((r,t,e,o)=>({real:r+e,imag:t+o})),Iht=Ht(Zr,od,mR);function rb(r,t,e,o,n){let s=S.sizeFromShape(o),i=S.makeZerosTypedArray(n,e);for(let a=0;a<r.length;a++){let u=r[a];if(u<0)throw new Error("Input x must be non-negative!");u>=n||(s>0?i[u]+=t[a]:i[u]+=1)}return i}function ob(r,t,e,o=!1){let n=r.shape[0],s=r.shape[1],i=pt([n,e],t.dtype);for(let a=0;a<n;a++)for(let u=0;u<s;u++){let c=r.get(a,u);if(c<0)throw new Error("Input x must be non-negative!");c>=e||(o?i.set(1,a,c):t.size>0?i.set(i.get(a,c)+t.get(a,u),a,c):i.set(i.get(a,c)+1,a,c))}return i}function ge(r){return(t,e,o)=>{let n=S.getTypedArrayFromDType(e,t.length);for(let s=0;s<t.length;++s)n[s]=r(t[s],o);return n}}function _l(r,t,e){return({inputs:o,attrs:n,backend:s})=>{let{x:i}=o;if(gi(i,r),i.dtype==="string"||e==="string")throw new Error("unaryKernelFunc does not support string input/output");let a=s,u=a.data.get(i.dataId).values,c=S.sizeFromShape(i.shape),l=e||i.dtype,p=S.getArrayFromDType(l,c);for(let m=0;m<c;++m)p[m]=t(u[m],n);return a.makeTensorInfo(i.shape,l,p)}}function Je(r,t,e){return({inputs:o,attrs:n,backend:s})=>{let{x:i}=o;if(gi(i,r),i.dtype==="string"||e==="string")throw new Error("unaryKernelFunc does not support string input/output");let a=s,u=a.data.get(i.dataId).values,c=e||i.dtype,l=t(u,c,n);return a.makeTensorInfo(i.shape,c,l)}}var nd=ge(r=>Math.ceil(r)),Mht=Je(vn,nd);function nb(r,t,e,o){let n=S.getArrayFromDType(e,S.sizeFromShape(t));if(o&&e!=="string"){let s=0;r.forEach(i=>{let a=S.sizeFromShape(i.shape);n.set(i.vals,s),s+=a})}else{let s=0;r.forEach(i=>{let a=e==="string"?A.fromUint8ToStringArray(i.vals):i.vals,u=0;for(let c=0;c<i.shape[0];++c){let l=c*t[1]+s;for(let p=0;p<i.shape[1];++p)n[l+p]=a[u++]}s+=i.shape[1]})}return n}var sd=Lt((r,t)=>r===t?1:0),qht=Ht(wn,sd,null,"bool");var id=ge(r=>Math.exp(r)),Zht=Je(Tn,id,"float32");var ad=ge(r=>Math.expm1(r)),ogt=Je(Cn,ad);var ud=ge(r=>Math.floor(r)),ugt=Je(Sn,ud);function sb(r,t,e,o,n,s,i,a,u){let c=pt([o,s],e);for(let l=0;l<o;l++){let p=[],m=0;for(let d=0;d<n;d++){let h=r[l*n+d];m+=h*i[d],p.push(h)}if(m<0||m>=u/s)throw new Error(`Invalid indices: ${p} does not index into ${a}`);for(let d=0;d<s;d++)c.values[l*s+d]=t.get(...t.indexToLoc(m*s+d))}return c}function ib(r,t,e){let o=pt(e,r.dtype);for(let n=0;n<o.size;++n){let i=o.indexToLoc(n).slice(),a=i[0],u=i[2],c=t.locToIndex([a,u]);i[2]=t.values[c];let l=r.locToIndex(i);0<=l&&l<r.values.length&&(o.values[n]=r.values[l])}return o}var cd=Lt((r,t)=>r>t?1:0),xgt=Ht(Nn,cd,null,"bool");var ld=Lt((r,t)=>r>=t?1:0),Tgt=Ht(En,ld,null,"bool");var pd=Lt((r,t)=>r<t?1:0),$gt=Ht($n,pd,null,"bool");var md=Lt((r,t)=>r<=t?1:0),Rgt=Ht(In,md,null,"bool");function ab(r,t,e){let o=(t-r)/(e-1),n=S.makeZerosTypedArray(e,"float32");n[0]=r;for(let s=1;s<n.length;s++)n[s]=n[s-1]+o;return n}var fd=ge(r=>Math.log(r)),Vgt=Je(kn,fd);function ub(r,t,e,o){let n=S.getTypedArrayFromDType(o,S.sizeFromShape(e));for(let s=0;s<n.length;++s){let i=s*t,a=r[i];for(let u=0;u<t;++u){let c=r[i+u];(Number.isNaN(c)||c>a)&&(a=c)}n[s]=a}return n}var dd=Lt((r,t)=>Math.max(r,t)),Kgt=Ht(_n,dd);var hd=Lt((r,t)=>Math.min(r,t)),Qgt=Ht(An,hd);var yi=Lt((r,t)=>r*t),fR=ds((r,t,e,o)=>({real:r*e-t*o,imag:r*o+t*e})),rxt=Ht(Rn,yi,fR);function cb(r,t,e){let o=S.createScalarValue(-1,e);return yi([],t,o,r,e)}var gd=Lt((r,t)=>r!==t?1:0),lxt=Ht(Dn,gd,null,"bool");function lb(r,t,e,o,n){let s=t.length,i=S.sizeFromShape(t),a=S.computeStrides(t),u=S.computeStrides(n),c=S.getTypedArrayFromDType(e,S.sizeFromShape(n));for(let l=0;l<i;++l){let p=S.indexToLoc(l,s,a),m=new Array(p.length);for(let h=0;h<m.length;h++)m[h]=p[o[h]];let d=S.locToIndex(m,s,u);c[d]=r[l]}return c}function pb(r,t,e,o){let[n,s]=A.computeOutAndReduceShapes(r,o),i=ae(t,"int32"),a=S.makeZerosTypedArray(S.sizeFromShape(n),i),u=S.sizeFromShape(s);for(let c=0;c<a.length;++c){let l=c*u,p=1;for(let m=0;m<u;++m)p*=e[l+m];a[c]=p}return{outVals:a,outShape:n,outDtype:i}}var tr=A.RowPartitionType,hs=class{constructor(t,e,o,n,s,i,a,u,c,l){this.shape=t,this.shapeShape=e,this.values=o,this.valuesShape=n,this.valuesDType=s,this.defaultValue=i,this.defaultValueShape=a,this.rowPartitionValues=u,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=A.getRowPartitionTypesHelper(l),this.raggedRank=A.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===tr.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===tr.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){let e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case tr.VALUE_ROWIDS:return hs.getMaxWidthValueRowID(e);case tr.ROW_SPLITS:return hs.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${tr[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){let e=t.length;if(e===0||e===1)return 0;let o=0;for(let n=0;n<e-1;++n){let s=t[n+1]-t[n];s>o&&(o=s)}return o}static getMaxWidthValueRowID(t){let e=t.length;if(e===0)return 0;let o=0,n=t[0],s=0;for(let i=1;i<e;++i){let a=t[i];a!==n&&(n=a,s=Math.max(i-o,s),o=i)}return Math.max(e-o,s)}tensorShapeFromTensor(t,e,o=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return fb(t,o)}calculateOutputSize(t){let e=this.valuesShape,o=this.defaultValueShape;A.validateDefaultValueShape(o,e);let n=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=A.combineRaggedTensorToTensorShapes(this.raggedRank,n,e);i[0]<0&&(i[0]=t);for(let a=1;a<=this.raggedRank;++a)i[a]<0&&(i[a]=this.getMaxWidth(a));return i}calculateFirstParentOutputIndex(t,e,o){let n=Math.min(t,o),s=[],i=0;for(let a=0;a<n;++a,i+=e)s.push(i);for(let a=n;a<t;++a)s.push(-1);return S.assert(s.length===t,()=>"Final length of result must be equal to firstDimension."),s}calculateOutputIndexRowSplit(t,e,o,n){let s=t.length,i=[];for(let a=0;a<s-1;++a){let u=t[a+1]-t[a],c=Math.min(n,u),l=e[a];l===-1&&(c=0);for(let p=0;p<c;++p)i.push(l),l+=o;for(let p=0;p<u-c;++p)i.push(-1)}if(s>0&&i.length!==t[s-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(t,e,o,n){let s=t.length,i=[];if(s===0)return[];let a=0,u=t[0];if(u>=e.length)throw new Error(`Got currentValueRowId=${u}, which is not less than ${e.length}`);let c=e[u];i.push(c);for(let l=1;l<s;++l){let p=t[l];if(p===u)c>=0&&(++a,a<n?c+=o:c=-1);else{if(a=0,u=p,p>=e.length)throw new Error(`Got nextValueRowId=${p} which is not less than ${e.length}`);c=e[p]}i.push(c)}if(i.length!==t.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(t,e,o,n){let s=this.getRowPartitionTensor(t),i=this.getRowPartitionTypeByDimension(t);switch(i){case tr.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(s,e,o,n);case tr.ROW_SPLITS:if(s.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${s.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(s,e,o,n);default:throw new Error(`Unsupported partition type: ${tr[i]}`)}}getFirstDimensionSize(){let t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");let e=this.rowPartitionTypes[0];switch(e){case tr.FIRST_DIM_SIZE:return t[0];case tr.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case tr.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${tr[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");let e=this.getFirstDimensionSize(),o=this.calculateOutputSize(e),n=new Array(this.raggedRank+1);n[n.length-1]=1;for(let u=n.length-2;u>=0;--u)n[u]=n[u+1]*o[u+1];let s=fb(o,!1),i=S.getArrayFromDType(this.valuesDType,S.sizeFromShape(s));if(n[0]*o[0]>0){let u=this.calculateFirstParentOutputIndex(e,n[0],o[0]);for(let c=1;c<=this.raggedRank;++c)u=this.calculateOutputIndex(c-1,u,n[c],o[c]);this.setOutput(this.raggedRank,u,i,s)}return[s,i]}setOutput(t,e,o,n){if(o.length===0)return;let s=this.values,i=o,a=n.slice();a=a.slice(t+1);let u=S.sizeFromShape(a),c=e.length,l=this.defaultValue;if(l.length!==u&&l.length!==1){let h=this.defaultValueShape;_t(()=>{let g=L(l,h);l=uo(g,a).dataSync()})}let p=0,m=0,d=0;for(let h=0;h<=c;++h){let g=h<c?e[h]:-1;if(g===d){++d;continue}if(m<d){let x=s.subarray(p*u),w=i.subarray(m*u),N=(d-m)*u;mb(w,x,N)}if(h>=c){let x=o.length;g=Math.floor(x/u)}if(g>d)if(this.defaultValue.length===1)i.subarray(d*u,g*u).fill(this.defaultValue[0]),d=g;else for(;g>d;){let x=i.slice(d*u);mb(x,l,u),++d}g<0?(p=h+1,m=d):(p=h,m=d,d=m+1)}}};function mb(r,t,e){for(let o=0;o<e;o++)r[o]=t[o]}function fb(r,t){let e=[];for(let o of r){if(o<0){if(!t)throw new Error(`Dimension ${o} must be >= 0`);if(o<-1)throw new Error(`Dimension ${o} must be >= -1`);o=-1}e.push(o)}return e}function db(r,t,e,o,n,s,i,a,u,c){return new hs(r,t,e,o,n,s,i,a,u,c).compute()}function hb(r,t,e,o){let n=r===t,s=r<t&&e<0,i=t<r&&e>1;if(n||s||i)return S.makeZerosTypedArray(0,o);let a=Math.abs(Math.ceil((t-r)/e)),u=S.makeZerosTypedArray(a,o);t<r&&e===1&&(e=-1),u[0]=r;for(let c=1;c<u.length;c++)u[c]=u[c-1]+e;return u}var xd=ge(r=>1/Math.sqrt(r)),Cxt=Je(Fn,xd);function gb(r,t,e,o,n,s,i,a,u,c){let l=[o/n,n],p=r.values,m=t.values;if(o===0)return pt(e,t.dtype);let d=pt(l,t.dtype);typeof u=="string"||typeof u=="number"?d.values.fill(u):typeof u=="boolean"&&d.values.fill(+u);for(let h=0;h<s;h++){let g=[],x=0;for(let w=0;w<i;w++){let N=p[h*i+w];g.push(N),x+=N*a[w]}if(x<0||x>=o/n)throw new Error(`Invalid indices: ${g} does not index into ${e}`);for(let w=0;w<n;w++)c?d.values[x*n+w]+=m[h*n+w]:d.values[x*n+w]=t.rank===0?m[0]:m[h*n+w]}return d}var xb=ge(r=>1/(1+Math.exp(-r))),_xt=_l(On,r=>1/(1+Math.exp(-r)));function yb(r,t,e,o,n){let s=we.isSliceContinous(o,t,e),i=S.sizeFromShape(e),a=S.computeStrides(o);if(s){let p=we.computeFlatOffset(t,a);return n==="string"?r.slice(p,p+i):r.subarray(p,p+i)}let u=n==="string"?A.fromUint8ToStringArray(r):r,c=pt(o,n,u),l=pt(e,n);for(let p=0;p<l.size;++p){let m=l.indexToLoc(p),d=m.map((h,g)=>h+t[g]);l.set(c.get(...d),...m)}return n==="string"?A.fromStringArrayToUint8(l.values):l.values}function bb(r,t,e,o,n,s,i){let a=t[0],u=s[0],c=new Array(u),l=new Array(a),p=t[1];if(u===0){if(a!==0)throw new Error(A.getSparseFillEmptyRowsIndicesDenseShapeMismatch(a));let x=S.getArrayFromDType(e,0),w=S.getArrayFromDType(n,0);return[x,[0,p],w,c,l]}let m=!0,d=0,h=new Array(u).fill(0);for(let x=0;x<a;++x){let w=r[x*p];if(w<0)throw new Error(A.getSparseFillEmptyRowsNegativeIndexErrorMessage(x,w));if(w>=u)throw new Error(A.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(x,w,u));++h[w],m=m&&w>=d,d=w}let g=!0;for(let x=0;x<u;++x){let w=h[x]===0;c[x]=w,g=g&&!w,h[x]=Math.max(h[x],1),x>0&&(h[x]+=h[x-1])}if(g&&m){let x=r,w=o;for(let N=0;N<a;++N)l[N]=N;return[x,[a,p],w,c,l]}else{let x=h[u-1],w=S.getArrayFromDType(e,x*p),N=S.getArrayFromDType(n,x),k=new Array(u).fill(0);for(let _=0;_<a;++_){let D=r[_*p],B=k[D],V=(D===0?0:h[D-1])+B;k[D]++;for(let U=0;U<p;++U)w[V*p+U]=r[_*p+U];N[V]=o[_],l[_]=V}for(let _=0;_<u;++_)if(k[_]===0){let B=_===0?0:h[_-1];w[B*p+0]=_;for(let V=1;V<p;++V)w[B*p+V]=0;N[B]=i}return[w,[x,p],N,c,l]}}function vb(r,t,e,o,n){let s=S.sizeFromShape(o),i=t[0],a=n.length,u=[],c=1,l=-1;for(let x=0;x<a;++x){let w=n[x];if(w===-1){if(l!==-1)throw new Error(A.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(l,x));l=x,u.push(1)}else{if(w<0)throw new Error(A.getSparseReshapeNegativeOutputDimErrorMessage(x,w));c*=w,u.push(w)}}if(l!==-1){if(c<=0)throw new Error(A.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let x=Math.trunc(s/c);if(c*x!==s)throw new Error(A.getSparseReshapeInputOutputMultipleErrorMessage(o,u));u[l]=x}if(S.sizeFromShape(u)!==s)throw new Error(A.getSparseReshapeInputOutputMismatchErrorMessage(o,u));let m=o.length,d=[];if(m>0){d[m-1]=1;for(let x=m-2;x>=0;--x)d[x]=d[x+1]*o[x+1]}let h=[];if(a>0){h[a-1]=1;for(let x=a-2;x>=0;--x)h[x]=h[x+1]*u[x+1]}let g=S.getArrayFromDType(e,i*a);for(let x=0;x<i;++x){let w=0;for(let N=0;N<m;++N)w+=r[x*m+N]*d[N];for(let N=0;N<a;++N)g[x*a+N]=Math.trunc(w/h[N]),w%=h[N]}return[g,[i,a],u]}function wb(r,t,e,o,n,s=!1,i=0){let a=o.length,u=[t[0],r.length/t[0]],c=u[1],p=a>0?n[a-1]+1:0;if(p<0)throw new Error(A.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let m=t.slice();m[0]=p;let d=m.reduce((k,_)=>k*_,1),h=S.getArrayFromDType(e,d);if(a===0)return p>0&&h.fill(i),[h,m];if(p<=0)throw new Error(A.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let g=0,x=1,w=0,N=n[g];for(;;){let k=0;if(x<a){if(k=n[x],N===k){++x;continue}if(N>=k)throw new Error(A.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(N<0||N>=p)throw new Error(A.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(N,p));N>w&&h.fill(i,w*c,N*c);for(let _=g;_<x;++_){let D=o[_];if(D<0||D>=u[0])throw new Error(A.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(_,o[_],u[0]));for(let B=0;B<c;B++)h[N*c+B]+=r[D*c+B]}if(s)for(let _=0;_<c;_++)h[N*c+_]/=x-g;if(g=x,++x,w=N+1,N=k,x>a)break}return w<p&&h.fill(i,w*c,p*c),[h,m]}var Tb=ge(r=>Math.sqrt(r)),Wxt=_l(Pn,r=>Math.sqrt(r));var yd=Lt((r,t)=>{let e=r-t;return e*e}),jxt=Ht(Ln,yd);function Cb(r,t,e,o){let n=pt(r,t.dtype);for(let s=0;s<n.size;s++){let i=n.indexToLoc(s),a=new Array(i.length);for(let u=0;u<a.length;u++)a[u]=i[u]*e[u]+o[u];n.set(t.get(...a),...i)}return n}var bd=class{constructor(t,e,o,n,s,i){this.separator=S.encodeString(t),this.nGramWidths=e,this.leftPad=S.encodeString(o),this.rightPad=S.encodeString(n),this.padWidth=s,this.preserveShort=i}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){let o=this.getPadWidth(e);return Math.max(0,t+2*o-e+1)}createNGrams(t,e,o,n,s,i){for(let a=0;a<s;++a){let u=this.getPadWidth(i),c=Math.max(0,u-a),l=Math.max(0,u-(s-(a+1))),p=i-(c+l),m=e+(c>0?0:a-u),d=0;d+=c*this.leftPad.length;for(let N=0;N<p;++N)d+=t[m+N].length;d+=l*this.rightPad.length,d+=(c+l+p-1)*this.separator.length,o[n+a]=new Uint8Array(d);let g=o[n+a],x=0,w=N=>N.forEach(k=>g[x++]=k);for(let N=0;N<c;++N)w(this.leftPad),w(this.separator);for(let N=0;N<p-1;++N)w(t[m+N]),w(this.separator);if(p>0){w(t[m+p-1]);for(let N=0;N<l;++N)w(this.separator),w(this.rightPad)}else{for(let N=0;N<l-1;++N)w(this.rightPad),w(this.separator);w(this.rightPad)}}}compute(t,e){let o=t.length,n=e.length;if(n>0){let u=e[0];if(u!==0)throw new Error(`First split value must be 0, got ${u}`);for(let c=1;c<n;++c){let l=e[c]>=u;if(l=l&&e[c]<=o,!l)throw new Error(`Invalid split value ${e[c]}, must be in [${u}, ${o}]`);u=e[c]}if(u!==o)throw new Error(`Last split value must be data size. Expected ${o}, got ${u}`)}let s=n-1,i=S.getArrayFromDType("int32",n);if(o===0||n===0){let u=new Array(o);for(let c=0;c<=s;++c)i[c]=0;return[u,i]}i[0]=0;for(let u=1;u<=s;++u){let c=e[u]-e[u-1],l=0;this.nGramWidths.forEach(p=>{l+=this.getNumNGrams(c,p)}),this.preserveShort&&c>0&&l===0&&(l=1),i[u]=i[u-1]+l}let a=new Array(i[s]);for(let u=0;u<s;++u){let c=e[u],l=i[u];if(this.nGramWidths.forEach(p=>{let m=e[u+1]-e[u],d=this.getNumNGrams(m,p);this.createNGrams(t,c,a,l,d,p),l+=d}),this.preserveShort&&l===i[u]){let p=e[u+1]-e[u];if(p===0)continue;let m=p+2*this.padWidth,d=1;this.createNGrams(t,c,a,l,d,m)}}return[a,i]}};function Sb(r,t,e,o,n,s,i,a){return new bd(e,o,n,s,i,a).compute(r,t)}function dR(r,t,e,o){if(!r.length)return;if(t.length===0){for(let s=0;s<r.length;++s)o.push(r.subarray(s,s+1));return}if(t.length===1){let s=t[0],i=r.indexOf(s);for(;i!==-1;){let a=r.subarray(0,i);(!e||a.length!==0)&&o.push(a),r=r.subarray(i+1),i=r.indexOf(s)}(!e||r.length!==0)&&o.push(r);return}let n=0;for(let s=0;s<r.length+1;s++)if(s===r.length||t.indexOf(r[s])!==-1){let i=r.subarray(n,s);(!e||i.length!==0)&&o.push(i),n=s+1}}function Nb(r,t,e){let o=r.length,n=[],s=0,i=0,a=new Array(o);for(let m=0;m<o;++m){let d=n.length;dR(r[m],t,e,n);let h=n.length-d;a[m]=h,s+=h,i=Math.max(i,h)}let u=S.getArrayFromDType("int32",s*2),c=new Array(s),l=[o,i],p=0;for(let m=0;m<o;++m)for(let d=0;d<a[m];++d)u[p*2]=m,u[p*2+1]=d,c[p]=n[p],++p;return[u,c,l]}function Eb(r,t){let e=S.getArrayFromDType("int32",r.length);for(let o=0;o<r.length;++o)e[o]=S.fingerPrint64(r[o]).modulo(t).getLowBitsUnsigned();return e}var vd=Lt((r,t)=>r-t),hR=ds((r,t,e,o)=>({real:r-e,imag:t-o})),a1t=Ht(Bn,vd,hR);function $b(r,t){let e=new Array(r.rank);for(let n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];let o=pt(e,r.dtype);for(let n=0;n<o.values.length;++n){let s=o.indexToLoc(n),i=new Array(r.rank);for(let u=0;u<i.length;u++)i[u]=s[u]%r.shape[u];let a=r.locToIndex(i);o.values[n]=r.values[a]}return o}var bi=(r,t)=>{let e=t.value-r.value;return e===0?r.index-t.index:e};function Ib(r,t,e=0,o=r.length-1){for(;o>e;){if(o-e>600){let a=o-e+1,u=t-e+1,c=Math.log(a),l=.5*Math.exp(2*c/3),p=.5*Math.sqrt(c*l*(a-l)/a)*Math.sign(u-a/2),m=Math.max(e,Math.floor(t-u*l/a+p)),d=Math.min(o,Math.floor(t+(a-u)*l/a+p));Ib(r,t,m,d)}let n=r[t],s=e,i=o;for(S.swap(r,e,t),bi(r[o],n)>0&&S.swap(r,e,o);s<i;){for(S.swap(r,s,i),s++,i--;bi(r[s],n)<0;)s=s+1;for(;bi(r[i],n)>0;)i=i-1}bi(r[e],n)===0?S.swap(r,e,i):(i=i+1,S.swap(r,i,o)),i<=t&&(e=i+1),t<=i&&(o=i-1)}}function kb(r,t,e,o,n){let s=t[t.length-1],[i,a]=[r.length/s,s],u=S.getTypedArrayFromDType(e,i*o),c=S.getTypedArrayFromDType("int32",i*o);for(let p=0;p<i;p++){let m=p*a,d=r.subarray(m,m+a),h=new Array(d.length);d.forEach((N,k)=>h[k]={value:N,index:k}),o<h.length&&(Ib(h,o),h=h.slice(0,o)),n&&h.sort(bi);let g=p*o,x=u.subarray(g,g+o),w=c.subarray(g,g+o);for(let N=0;N<o;N++)x[N]=h[N].value,w[N]=h[N].index}let l=t.slice();return l[l.length-1]=o,[pt(l,e,u),pt(l,"int32",c)]}function _b(r,t,e,o){let n=S.parseAxisParam(t,e)[0],s=[1,e[0],1];for(let h=0;h<n;h++)s[0]*=e[h];s[1]=e[n];for(let h=n+1;h<e.length;h++)s[2]*=e[h];let i={},a=new Int32Array(e[n]),u=new ur(s,o,r),c=[],l=s[0]===1&&s[2]===1;for(let h=0;h<e[n];h++){let g;if(l)g=r[h].toString();else{let x=[];for(let w=0;w<s[0];w++)for(let N=0;N<s[2];N++)x.push(u.get(w,h,N));g=x.join(",")}if(i[g]!==void 0)a[h]=i[g];else{let x=Object.keys(i).length;i[g]=x,a[h]=x,c.push(h)}}let p=s.slice();p[1]=Object.keys(i).length;let m=new ur(p,o);c.forEach((h,g)=>{for(let x=0;x<s[0];x++)for(let w=0;w<s[2];w++)m.set(u.get(x,h,w),x,g,w)});let d=e.slice();return d[n]=p[1],{outputValues:m.values,outputShape:d,indices:a}}var{addImpl:Ab,bincountImpl:Al,bincountReduceImpl:Rb,castImpl:Db,ceilImpl:Fb,concatImpl:Ob,equalImpl:Pb,expImpl:Lb,expm1Impl:Bb,floorImpl:Vb,gatherNdImpl:Mb,gatherV2Impl:Ub,greaterImpl:Gb,greaterEqualImpl:Wb,lessImpl:zb,lessEqualImpl:Hb,linSpaceImpl:Kb,logImpl:qb,maxImpl:jb,maximumImpl:Xb,minimumImpl:Yb,multiplyImpl:Qb,negImpl:Zb,notEqualImpl:Jb,prodImpl:tv,raggedTensorToTensorImpl:ev,rangeImpl:rv,rsqrtImpl:ov,scatterImpl:nv,sigmoidImpl:sv,simpleAbsImpl:Rl,sliceImpl:iv,sparseFillEmptyRowsImpl:av,sparseReshapeImpl:uv,sparseSegmentReductionImpl:Dl,sqrtImpl:cv,stridedSliceImpl:lv,stringNGramsImpl:pv,stringSplitImpl:mv,stringToHashBucketFastImpl:fv,subImpl:dv,tileImpl:hv,topKImpl:gv,transposeImpl:on,uniqueImpl:xv}=wd;function Td(r,t){return["x","y","z","w","u","v"].slice(0,t).map(e=>`${r}.${e}`)}function Mt(r,t){return t===1?[r]:Td(r,t)}function yv(r,t){if(r===1)return"rc";let e="";for(let o=0;o<r;o++)e+=t[o],o<r-1&&(e+=",");return e}var Fl=class{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=Et(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let e=Mt("rc",this.rank),o=nt(this.rank),n=this.getOutOfBoundsCondition(e),s=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${o} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${s}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(t){let e=[];for(let o=0;o<=1;o++)for(let n=0;n<=1;n++){let s=`${o===0?"r":"rp1"}, ${n===0?"c":"cp1"}`;for(let i=2;i<this.rank;i++)s=`${t[t.length-1-i]},`+s;e.push(s)}return e}getOutOfBoundsCondition(t){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let e="";for(let o=this.rank-2;o<this.rank;o++)e+=`${t[o]} >= ${this.enableShapeUniforms?`outShape[${o}]`:this.outputShape[o]}`,o<this.rank-1&&(e+="||");return e}getSetup(t){if(this.rank===1)return"";let e=t.slice(-2),o=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],n=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${e[0]};
      int c = ${e[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${o};
      bool rEdge = rp1 >= ${n};
    `}getOutput(t){let e=this.getSourceCoordsArr(t);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${e[0]}),
            cEdge ? 0. : getA(${e[1]}),
            rEdge ? 0. : getA(${e[2]}),
            rEdge || cEdge ? 0. : getA(${e[3]})`}};var gs=class{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=Et(this.outputShape.length);let o="";for(let n=0;n<4;n++){let s="thisRC = rc;";n%2===1&&(s+="thisRC.z += 1;"),n>1&&(s+="thisRC.y += 1;"),o+=`
        ${s}
        ${n>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${n}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${n>0?"}":""}
      `}this.userCode=`
      ${gR(e,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?is():ss(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${o}

        setOutput(result);
      }
    `}};function gR(r,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?ky(["r","c","d"],"inputShape"):mr(["r","c","d"],r)}
      return ivec3(r, c, d);
    }
  `}var Ol=class{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}acquireTexture(t,e,o){let n=vv(e,o),s=wv(t,n,o);s in this.freeTextures||(this.freeTextures[s]=[]),s in this.usedTextures||(this.usedTextures[s]=[]);let i=bv(t,n,this.gpgpu.gl,this.gpgpu.textureConfig,o);if(this.freeTextures[s].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=i,this.log();let u=this.freeTextures[s].shift();return this.usedTextures[s].push(u),u}let a;return n===re.PACKED_2X2_FLOAT32?a=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):n===re.PACKED_2X2_FLOAT16?a=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):n===re.UNPACKED_FLOAT32?a=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):n===re.UNPACKED_FLOAT16?a=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):n===re.PACKED_4X1_UNSIGNED_BYTE&&(a=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[s].push(a),this.numUsedTextures++,this._numBytesAllocated+=i,this.log(),a}releaseTexture(t,e,o,n){if(this.freeTextures==null)return;let s=vv(o,n),i=wv(e,s,n);i in this.freeTextures||(this.freeTextures[i]=[]);let a=bv(e,s,this.gpgpu.gl,this.gpgpu.textureConfig,n),u=O().get("WEBGL_DELETE_TEXTURE_THRESHOLD");u!==-1&&this._numBytesAllocated>u?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=a):(this.freeTextures[i].push(t),this.numFreeTextures++,this._numBytesFree+=a),this.numUsedTextures--;let c=this.usedTextures[i],l=c.indexOf(t);if(l<0)throw new Error("Cannot release a texture that was never provided by this texture manager");c.splice(l,1),this.log()}log(){if(!this.logEnabled)return;let t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);let e=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*e)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let t in this.freeTextures)this.freeTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let t in this.usedTextures)this.usedTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function xR(r,t){let e=r;if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F)return 16;if(t===r.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function bv(r,t,e,o,n){let s=yR(t,o),i;if(n){let[u,c]=kr(r[0],r[1]);i=u*c}else{let[u,c]=Jo(r[0],r[1]);i=u*c}let a=xR(e,s);return i*a}function yR(r,t){switch(r){case re.PACKED_2X2_FLOAT32:return Jf(t);case re.PACKED_2X2_FLOAT16:return td(t);case re.UNPACKED_FLOAT32:return Yf(t);case re.UNPACKED_FLOAT16:return Qf(t);case re.PACKED_4X1_UNSIGNED_BYTE:return Zf(t);default:throw new Error(`Unknown physical texture type ${r}`)}}function bR(r){return O().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?r?re.PACKED_2X2_FLOAT32:re.UNPACKED_FLOAT32:r?re.PACKED_2X2_FLOAT16:re.UNPACKED_FLOAT16}function vv(r,t){if(r===se.UPLOAD)return re.PACKED_2X2_FLOAT32;if(r===se.RENDER||r==null)return bR(t);if(r===se.DOWNLOAD||r===se.PIXELS)return re.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${r}`)}function wv(r,t,e){return`${r[0]}_${r[1]}_${t}_${e}`}var le=class{constructor(t,e){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=Et(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${e}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},Yt="if (isnan(x)) return x;",Tv="return x;",Cd="return abs(x);";var Cv="return (x >= 0.0) ? x : (exp(x) - 1.0);",Sv=Yt+`
  return (x < 0.0) ? 0.0 : x;
`,Nv=Yt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,nn="return x;",Ev="return 1.0 / (1.0 + exp(-1.0 * x));";var Iv="return x;",kv=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,_v=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Av=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Rv="return 1.0 / (1.0 + exp(-1.0 * x));",Me=class{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=Et(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${e}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}};var Pl=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=Et(this.outputShape.length);let e=t.length,o=Mt("rc",e),n=nt(e),s=yv(e,o),i=o.slice(-2),a=e<=1?"rc":`vec2(${i.join(",")})`;this.userCode=`
      void main() {
        ${n} rc = getOutputCoords();
        vec4 packedInput = getA(${s});

        setOutput(getChannel(packedInput, ${a}));
      }
    `}};var wR=Ir.whereImpl,TR=1e-7,CR=1e-4,Ll={};function SR(r){return r in Ll||(Ll[r]={}),Ll[r]}var NR=O().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),ER=600;function $R(){return O().global.screen==null?1024:O().global.screen.height*O().global.screen.width*window.devicePixelRatio*ER/1024/1024}var sn=class extends Co{constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!O().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let e;if(t!=null){if(t instanceof ms)e=t;else{let o=_e(O().getNumber("WEBGL_VERSION"),t);e=new ms(o)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{let o=_e(O().getNumber("WEBGL_VERSION"));e=new ms(o),this.binaryCache=SR(O().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=e,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new Ol(this.gpgpu),this.numMBBeforeWarning=$R(),this.texData=new Ds(this,Po())}nextDataId(){return sn.nextDataId++}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}write(t,e,o){if((O().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||O().getBool("DEBUG"))&&this.checkNumericalProblems(t),o==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");let n={id:this.nextDataId()};return this.texData.set(n,{shape:e,dtype:o,values:t,usage:se.UPLOAD,refCount:1}),n}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){let e=this.texData.get(t);e.refCount++}decRef(t){if(this.texData.has(t)){let e=this.texData.get(t);e.refCount--}}move(t,e,o,n,s){if(O().getBool("DEBUG")&&this.checkNumericalProblems(e),n==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:o,dtype:n,values:e,usage:se.UPLOAD,refCount:s})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){let e=this.texData.get(t),{values:o,dtype:n,complexTensorInfos:s,slice:i,shape:a,isPacked:u}=e;if(i!=null){let m;u?m=new Me(a,nn):m=new le(a,nn);let d=this.runWebGLProgram(m,[{dataId:t,shape:a,dtype:n}],n),h=this.readSync(d.dataId);return this.disposeIntermediateTensorInfo(d),h}if(o!=null)return this.convertAndCacheOnCPU(t);if(n==="string")return o;let c=this.activeTimers!=null,l;c&&(l=S.now());let p;if(n==="complex64"){let m=this.readSync(s.real.dataId),d=this.readSync(s.imag.dataId);p=A.mergeRealAndImagArrays(m,d)}else p=this.getValuesFromTexture(t);return c&&(this.downloadWaitMs+=S.now()-l),this.convertAndCacheOnCPU(t,p)}async read(t){if(this.pendingRead.has(t)){let h=this.pendingRead.get(t);return new Promise(g=>h.push(g))}let e=this.texData.get(t),{values:o,shape:n,slice:s,dtype:i,complexTensorInfos:a,isPacked:u}=e;if(s!=null){let h;u?h=new Me(n,nn):h=new le(n,nn);let g=this.runWebGLProgram(h,[{dataId:t,shape:n,dtype:i}],i),x=this.read(g.dataId);return this.disposeIntermediateTensorInfo(g),x}if(o!=null)return this.convertAndCacheOnCPU(t);if(O().getBool("DEBUG")&&!O().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&O().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let c=null,l;if(i!=="complex64"&&O().get("WEBGL_BUFFER_SUPPORTED")){l=this.decode(t);let h=this.texData.get(l.dataId);c=this.gpgpu.createBufferFromTexture(h.texture.texture,...pi(n))}this.pendingRead.set(t,[]),i!=="complex64"&&await this.gpgpu.createAndWaitForFence();let p;if(i==="complex64"){let h=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),g=h[0],x=h[1];p=A.mergeRealAndImagArrays(g,x)}else if(c==null)p=this.getValuesFromTexture(t);else{let h=S.sizeFromShape(n);p=this.gpgpu.downloadFloat32MatrixFromBuffer(c,h)}if(l!=null&&this.disposeIntermediateTensorInfo(l),c!=null){let h=this.gpgpu.gl;Q(h,()=>h.deleteBuffer(c))}let m=this.convertAndCacheOnCPU(t,p),d=this.pendingRead.get(t);return this.pendingRead.delete(t),d.forEach(h=>h(m)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&Po().removeDataId(t,this),this.pendingDeletes--),m}readToGPU(t,e={}){let o=this.texData.get(t),{values:n,shape:s,slice:i,dtype:a,isPacked:u,texture:c}=o;if(a==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(i!=null){let d;u?d=new Me(s,nn):d=new le(s,nn);let h=this.runWebGLProgram(d,[{dataId:t,shape:s,dtype:a}],a),g=this.readToGPU(h,e);return this.disposeIntermediateTensorInfo(h),g}if(c==null)throw n!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");let l=this.decode(t,e.customTexShape),p=Po().makeTensorFromTensorInfo(l),m=this.texData.get(l.dataId);return Object.assign({tensorRef:p},m.texture)}bufferSync(t){let e=this.readSync(t.dataId);if(t.dtype==="string")try{let o=e.map(n=>S.decodeString(n));return pt(t.shape,t.dtype,o)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return pt(t.shape,t.dtype,e)}checkNumericalProblems(t){if(t!=null)for(let e=0;e<t.length;e++){let o=t[e];if(!cy(o))throw O().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${o} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${o} cannot be represented on this device.`)}}getValuesFromTexture(t){let{shape:e,dtype:o,isPacked:n}=this.texData.get(t),s=S.sizeFromShape(e);if(O().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){let m=this.decode(t),d=this.texData.get(m.dataId),h=this.gpgpu.downloadMatrixFromPackedTexture(d.texture.texture,...pi(e)).subarray(0,s);return this.disposeIntermediateTensorInfo(m),h}let i=O().getBool("WEBGL_PACK")&&n===!0,a=i?bl(e):e,u=i?new El(a):new Nl(a),c=this.runWebGLProgram(u,[{shape:a,dtype:o,dataId:t}],"float32"),l=this.texData.get(c.dataId),p=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(l.texture.texture,l.texShape[0],l.texShape[1]).subarray(0,s);return this.disposeIntermediateTensorInfo(c),p}timerAvailable(){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){let e=this.activeTimers,o=[],n=!1;this.programTimersStack==null?(this.programTimersStack=o,n=!0):this.activeTimers.push(o),this.activeTimers=o,t();let s=S.flatten(this.activeTimers.map(u=>u.query)).filter(u=>u!=null),i=S.flatten(this.activeTimers.map(u=>u.name)).filter(u=>u!=null);this.activeTimers=e,n&&(this.programTimersStack=null);let a={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){let u=await Promise.all(s);a.kernelMs=S.sum(u),a.getExtraProfileInfo=()=>u.map((c,l)=>({name:i[l],ms:c})).map(c=>`${c.name}: ${c.ms}`).join(", ")}else a.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,a})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:S.now(),endMs:null}}endTimer(t){return O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=S.now(),t)}async getQueryTime(t){if(O().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);let e=t;return e.endMs-e.startMs}disposeData(t,e=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(e?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!e&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);let{complexTensorInfos:o}=this.texData.get(t);return o!=null&&(this.disposeData(o.real.dataId,e),this.disposeData(o.imag.dataId,e)),this.texData.delete(t),!0}releaseGPUData(t){let{texture:e,dtype:o,texShape:n,usage:s,isPacked:i,slice:a}=this.texData.get(t),u=a&&a.origDataId||t,c=this.dataRefCount.get(u);c>1?this.dataRefCount.set(u,c-1):(this.dataRefCount.delete(u),e!=null&&(this.numBytesInGPU-=this.computeBytes(n,o),this.textureManager.releaseTexture(e,n,s,i)));let l=this.texData.get(t);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,e=NR){return O().getBool("WEBGL_CPU_FORWARD")&&t.every(o=>this.texData.get(o.dataId).texture==null&&S.sizeFromShape(o.shape)<e)}getGPGPUContext(){return this.gpgpu}where(t){A.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");let e=t.dataSync();return wR(t.shape,e)}packedUnaryOp(t,e,o){let n=new Me(t.shape,e),s=this.compileAndRun(n,[t],o);return Po().makeTensorFromTensorInfo(s)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){let n=Rl(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,n)}if(O().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Cd,t.dtype);let e=new le(t.shape,Cd),o=this.compileAndRun(e,[t]);return Po().makeTensorFromTensorInfo(o)}makeTensorInfo(t,e,o){let n;if(e==="string"&&o!=null&&o.length>0&&S.isString(o[0])){let s=o.map(i=>S.encodeString(i));n=this.write(s,t,e)}else n=this.write(o,t,e);return this.texData.get(n).usage=null,{dataId:n,shape:t,dtype:e}}makeOutput(t,e,o){return Po().makeTensorFromTensorInfo(this.makeTensorInfo(t,e,o),this)}unpackTensor(t){let e=new Pl(t.shape);return this.runWebGLProgram(e,[t],t.dtype)}packTensor(t){let e=new Fl(t.shape),o=!0;return this.runWebGLProgram(e,[t],t.dtype,null,o)}packedReshape(t,e){let o=[go(t.shape),...xo(t.shape)],n={dtype:t.dtype,shape:o,dataId:t.dataId},s=[go(e),...xo(e)],i=new gs(s,o),a=!0,u=[o],c=this.runWebGLProgram(i,[n],t.dtype,u,a);return{dataId:c.dataId,shape:e,dtype:c.dtype}}decode(t,e){let o=this.texData.get(t),{isPacked:n,shape:s,dtype:i}=o;if(e!=null){let m=S.sizeFromShape(s),d=e[0]*e[1]*4;S.assert(m<=d,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}let a=bl(s),u;n?u=new Sl(a):u=new Cl(a);let c=!0,l=[e??pi(a)],p=this.runWebGLProgram(u,[{shape:a,dtype:i,dataId:t}],i,l,c,e);return{dtype:i,shape:s,dataId:p.dataId}}runWebGLProgram(t,e,o,n,s=!1,i){let a=this.makeTensorInfo(t.outputShape,o),u=this.texData.get(a.dataId);if(t.packedOutput&&(u.isPacked=!0),t.outPackingScheme===ho.DENSE){let w=i??pi(t.outputShape);u.texShape=w.map(N=>N*2)}if(t.outTexUsage!=null&&(u.usage=t.outTexUsage),S.sizeFromShape(a.shape)===0)return u.values=S.getTypedArrayFromDType(a.dtype,0),a;let c=[],l=e.map(w=>{if(w.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let N=this.texData.get(w.dataId);if(N.texture==null){if(!t.packedInputs&&S.sizeFromShape(w.shape)<=O().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:w.shape,texData:null,isUniform:!0,uniformValues:N.values};t.packedInputs&&(N.isPacked=!0,N.shape=w.shape)}if(this.uploadToGPU(w.dataId),!!N.isPacked!=!!t.packedInputs)w=N.isPacked?this.unpackTensor(w):this.packTensor(w),c.push(w),N=this.texData.get(w.dataId);else if(N.isPacked&&!tn(N.shape,w.shape)){let k=w,_=w.shape;w.shape=N.shape,w=this.packedReshape(w,_),c.push(w),N=this.texData.get(w.dataId),k.shape=_}return{shape:w.shape,texData:N,isUniform:!1}});this.uploadToGPU(a.dataId);let p={shape:a.shape,texData:u,isUniform:!1},m=Ly(t,l,p),d=this.getAndSaveBinary(m,()=>Oy(this.gpgpu,t,l,p)),h=this.activeTimers!=null,g;h&&(g=this.startTimer()),O().get("ENGINE_COMPILE_ONLY")||Py(this.gpgpu,d,l,p,n),c.forEach(w=>this.disposeIntermediateTensorInfo(w)),h&&(g=this.endTimer(g),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(g)}));let x=O().get("WEBGL_FLUSH_THRESHOLD");if(x>0){let w=S.now();w-this.lastGlFlushTime>x&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=w)}if(!O().getBool("WEBGL_LAZILY_UNPACK")&&u.isPacked&&s===!1){let w=this.unpackTensor(a);return this.disposeIntermediateTensorInfo(a),w}return a}compileAndRun(t,e,o,n,s=!1){return o=o||e[0].dtype,this.runWebGLProgram(t,e,o,n,s)}getAndSaveBinary(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(O().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=_t(()=>{if(!O().get("WEBGL_RENDER_FLOAT32_ENABLED")){let t=O().getBool("DEBUG");O().set("DEBUG",!1);let e=this.abs(st(1e-8)).dataSync()[0];if(O().set("DEBUG",t),e>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?TR:CR}uploadToGPU(t){let e=this.texData.get(t),{shape:o,dtype:n,values:s,texture:i,usage:a,isPacked:u}=e;if(i!=null)return;let c=this.activeTimers!=null,l;c&&(l=S.now());let p=e.texShape;if(p==null&&(p=Ty(o,u),e.texShape=p),s!=null){let m=bl(o),d,h=p[1],g=p[0],x=s instanceof Uint8Array||s instanceof Uint8ClampedArray;(u||!x)&&([h,g]=kr(p[0],p[1])),u?d=new Il(m,x):d=new $l(m,x);let w=x?[g,h]:p,N=this.makeTensorInfo(w,n),k=this.texData.get(N.dataId);x?k.usage=se.PIXELS:k.usage=se.UPLOAD,k.texShape=w,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(N.dataId),h,g,s);let _=[[g,h]],D=!0,B=this.runWebGLProgram(d,[N],n,_,D),V=this.texData.get(B.dataId);e.texShape=V.texShape,e.isPacked=V.isPacked,e.usage=V.usage,O().get("ENGINE_COMPILE_ONLY")?this.disposeData(B.dataId):(e.texture=V.texture,e.values=null,this.texData.delete(B.dataId)),this.disposeIntermediateTensorInfo(N),c&&(this.uploadWaitMs+=S.now()-l)}else{let m=this.acquireTexture(p,a,n,u);e.texture=m}}convertAndCacheOnCPU(t,e){let o=this.texData.get(t),{dtype:n}=o;return this.releaseGPUData(t),e!=null&&(o.values=IR(e,n)),o.values}acquireTexture(t,e,o,n){if(this.numBytesInGPU+=this.computeBytes(t,o),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let s=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${s} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,e,n)}computeBytes(t,e){return t[0]*t[1]*S.bytesPerElement(e)}checkCompileCompletion(){for(let[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}async checkCompileCompletionAsync(){let t=[];if(this.gpgpu.parallelCompilationExtension){for(let[,e]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(e));return Promise.all(t)}else{for(let[,e]of Object.entries(this.binaryCache)){let o=new Promise(n=>{try{this.checkCompletion_(e),n(!0)}catch(s){throw s}});t.push(o)}return Promise.all(t)}}async checkCompletionAsync_(t){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(await Bf(),this.checkCompletionAsync_(t))}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Hf(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(let[,t]of Object.entries(this.binaryCache)){let{uniformLocations:e,customUniformLocations:o,infLoc:n,nanLoc:s,inShapesLocations:i,inTexShapesLocations:a,outShapeLocation:u,outShapeStridesLocation:c,outTexShapeLocation:l}=Xf(this.gpgpu,t.program,t.webGLProgram);t.uniformLocations=e,t.customUniformLocations=o,t.infLoc=n,t.nanLoc=s,t.inShapesLocations=i,t.inTexShapesLocations=a,t.outShapeLocation=u,t.outShapeStridesLocation=c,t.outTexShapeLocation=l}}};sn.nextDataId=0;function IR(r,t){if(t==="float32"||t==="complex64")return r;if(t==="int32"||t==="bool"){let e=t==="int32"?new Int32Array(r.length):new Uint8Array(r.length);for(let o=0;o<e.length;++o)e[o]=Math.round(r[o]);return e}else throw new Error(`Unknown dtype ${t}`)}ro.isBrowser()&&Bx("webgl",()=>new sn,2);var Bl=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;var Ue=class{constructor(t,e,o){this.variableNames=["A","B"],this.outputShape=A.assertAndGetBroadcastShape(e,o),this.enableShapeUniforms=Et(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}};var yo=`
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;
`;var er=class{constructor(t,e,o,n=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=A.assertAndGetBroadcastShape(e,o);let s=this.outputShape.length;this.enableShapeUniforms=Et(s);let i="";if(n)if(s===0||S.sizeFromShape(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          ${nt(s)} coords = getOutputCoords();
        `,s===1)this.enableShapeUniforms?i+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:i+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let u=Mt("coords",s);this.enableShapeUniforms?i+=`
            bool nextRowOutOfBounds =
              (${u[s-2]} + 1) >= outShape[${s} - 2];
            bool nextColOutOfBounds =
              (${u[s-1]} + 1) >= outShape[${s} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:i+=`
            bool nextRowOutOfBounds =
              (${u[s-2]} + 1) >= ${this.outputShape[s-2]};
            bool nextColOutOfBounds =
              (${u[s-1]} + 1) >= ${this.outputShape[s-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${t}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${i}

        setOutput(result);
      }
    `}};function Ut(r){let{inputs:t,backend:e}=r,{x:o}=t;return e.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}var Dv={kernelName:$o,backendName:"webgl",kernelFunc:Ut};function Se(r){let{inputs:t,backend:e}=r,{real:o,imag:n}=t,s=e.makeTensorInfo(o.shape,"complex64"),i=e.texData.get(s.dataId),a=Ut({inputs:{x:o},backend:e}),u=Ut({inputs:{x:n},backend:e});return i.complexTensorInfos={real:a,imag:u},s}var Fv={kernelName:Ms,backendName:"webgl",kernelFunc:Se};var Sd="return (a < 0.) ? b * a : a;",Nd=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function kR(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{alpha:s}=o,i=e.makeTensorInfo([],"float32",S.createScalarValue(s,"float32")),a=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new er(Nd,n.shape,i.shape):new Ue(Sd,n.shape,i.shape),u=e.runWebGLProgram(a,[n,i],"float32");return e.disposeIntermediateTensorInfo(i),u}var Ov={kernelName:qa,backendName:"webgl",kernelFunc:kR};var Ed="return (a < 0.) ? b * a : a;",$d=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function _R(r){let{inputs:t,backend:e}=r,{x:o,alpha:n}=t,s=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new er($d,o.shape,n.shape):new Ue(Ed,o.shape,n.shape);return e.runWebGLProgram(s,[o,n],"float32")}var Pv={kernelName:xu,backendName:"webgl",kernelFunc:_R};var rr="if (isnan(x)) return x;",Lv=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,Bv=`
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;
`;function Y({opSnippet:r,packedOpSnippet:t,cpuKernelImpl:e,dtype:o}){return({inputs:n,backend:s})=>{let{x:i}=n,a=s,u=o||i.dtype;if(a.shouldExecuteOnCPU([i])&&e!=null){let p=a.texData.get(i.dataId),m=e(p.values,u);return a.makeTensorInfo(i.shape,u,m)}let c=O().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null,l;return c?l=new Me(i.shape,t):l=new le(i.shape,r),a.runWebGLProgram(l,[i],u)}}function wt({opSnippet:r,packedOpSnippet:t,checkOutOfBounds:e=!1,supportsComplex:o=!1,cpuKernelImpl:n,dtype:s}){return({inputs:i,backend:a})=>{let{a:u,b:c}=i,l=a;if(o&&u.dtype==="complex64"){let h=l.texData.get(u.dataId),g=l.texData.get(c.dataId),[x,w]=[[h.complexTensorInfos.real,g.complexTensorInfos.real],[h.complexTensorInfos.imag,g.complexTensorInfos.imag]].map(k=>{let[_,D]=k,B={dataId:_.dataId,dtype:_.dtype,shape:u.shape},V={dataId:D.dataId,dtype:D.dtype,shape:c.shape},U=new Ue(r,u.shape,c.shape);return l.runWebGLProgram(U,[B,V],ae(_.dtype,D.dtype))}),N=Se({inputs:{real:x,imag:w},backend:l});return l.disposeIntermediateTensorInfo(x),l.disposeIntermediateTensorInfo(w),N}let p=s||ae(u.dtype,c.dtype);if((u.dtype==="string"||c.dtype==="string"||l.shouldExecuteOnCPU([u,c]))&&n!=null){let h=l.texData.get(u.dataId).values,g=l.texData.get(c.dataId).values,x=u.dtype==="string"?A.fromUint8ToStringArray(h):h,w=u.dtype==="string"?A.fromUint8ToStringArray(g):g,[N,k]=n(u.shape,c.shape,x,w,p),_=l.makeTensorInfo(k,p),D=l.texData.get(_.dataId);return D.values=N,_}let m=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null,d;return m?d=new er(t,u.shape,c.shape,e):d=new Ue(r,u.shape,c.shape),l.runWebGLProgram(d,[u,c],p)}}function Gr(r,t=!1){if(r==="linear")return t?Iv:Tv;if(r==="relu")return t?_v:Sv;if(r==="elu")return t?kv:Cv;if(r==="relu6")return t?Av:Nv;if(r==="prelu")return t?$d:Ed;if(r==="leakyrelu")return t?Nd:Sd;if(r==="sigmoid")return t?Rv:Ev;throw new Error(`Activation ${r} has not been implemented for the WebGL backend.`)}var xs=class{constructor(t,e,o,n=!1,s=!1,i=!1,a=null,u=!1,c=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=o,this.enableShapeUniforms=Et(this.outputShape.length);let l=n?t[1]:t[2],p=Math.ceil(l/2),m=n?"i * 2, rc.y":"rc.y, i * 2",d=s?"rc.z, i * 2":"i * 2, rc.z",h=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],g=s?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],x="",w="";a&&(u?x=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${a}
        }`:c?x=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${a}
        }`:x=`vec4 activation(vec4 x) {
          ${a}
        }`,w="result = activation(result);");let N=i?"result += getBiasAtOutCoords();":"";i&&this.variableNames.push("bias"),u&&this.variableNames.push("preluActivationWeights"),c&&this.variableNames.push("leakyreluAlpha");let k="rc.x",_="rc.x";t[0]<e[0]?k=`int(min(float(rc.x), ${t[0]-1}.))`:e[0]<t[0]&&(_=`int(min(float(rc.x), ${e[0]-1}.))`),this.userCode=`
      ${x}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${p}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < ${p}; i++) {
          int batchA = ${k};
          int batchB = ${_};
          vec4 a = getMatrixA(batchA, ${m});
          vec4 b = getMatrixB(batchB, ${d});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${h[0]} * ${g[0]});
          result += (${h[1]} * ${g[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${N}

        ${w}

        setOutput(result);
      }
    `}};var Id={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"},vi=class{constructor(t,e,o){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=A.assertAndGetBroadcastShape(e,o),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${t}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}};var Vv="return a * b;";function wi(r){let{inputs:t,backend:e}=r,{a:o,b:n}=t,s=A.upcastType(o.dtype,n.dtype);if(o.dtype==="complex64"){let a=e.texData.get(o.dataId),u=e.texData.get(n.dataId),c=new vi(Id.REAL,o.shape,n.shape),l=new vi(Id.IMAG,o.shape,n.shape),p=[{dataId:a.complexTensorInfos.real.dataId,dtype:a.complexTensorInfos.real.dtype,shape:o.shape},{dataId:a.complexTensorInfos.imag.dataId,dtype:a.complexTensorInfos.imag.dtype,shape:o.shape},{dataId:u.complexTensorInfos.real.dataId,dtype:u.complexTensorInfos.real.dtype,shape:n.shape},{dataId:u.complexTensorInfos.imag.dataId,dtype:u.complexTensorInfos.imag.dtype,shape:n.shape}],m=e.runWebGLProgram(c,p,"float32"),d=e.runWebGLProgram(l,p,"float32"),h=Se({inputs:{real:m,imag:d},backend:e});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(d),h}if(e.shouldExecuteOnCPU([o,n])){let a=e.texData.get(o.dataId),u=e.texData.get(n.dataId),[c,l]=Qb(o.shape,n.shape,a.values,u.values,s),p=e.makeTensorInfo(l,s),m=e.texData.get(p.dataId);return m.values=c,p}let i;return O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?i=new er(Vv,o.shape,n.shape):i=new Ue(Vv,o.shape,n.shape),e.runWebGLProgram(i,[o,n],s)}var Mv={kernelName:Rn,backendName:"webgl",kernelFunc:wi};function Uv(r,t,e){let o=[go(r.shape),...xo(r.shape)],n={dtype:r.dtype,shape:o,dataId:r.dataId},s=[go(t),...xo(t)],i=new gs(s,o),a=!0,u=[o],c=e.runWebGLProgram(i,[n],r.dtype,u,a);return{dataId:c.dataId,shape:t,dtype:c.dtype}}function z(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{shape:s}=o,i=e,a=S.sizeFromShape(n.shape),u=S.inferFromImplicitShape(s,a),c=S.sizeFromShape(u);S.assert(a===c,()=>`The new shape (${u}) has ${c} elements and the old shape (${n.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`);let l=i.texData.get(n.dataId);return l.isPacked&&!tn(n.shape,u)&&!(l.texture!==null&&tn(l.shape,u))?Uv(n,u,i):(i.incRef(n.dataId),{dataId:n.dataId,shape:u,dtype:n.dtype})}var Gv={kernelName:Tu,backendName:"webgl",kernelFunc:z};var Ti=class{constructor(t,e){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:i}=t;this.outputShape=[n,i];let a=Math.floor(o/4)*4,u=o%4,c="sumValue += dot(values, ones);";if(e!=null){let p=1/e;c=`sumValue += dot(values * ${S.isInt(p)?p.toPrecision(2):p}, ones);`}let l="";s%o>0&&(l=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${l}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        float sumValue = 0.0;

        for (int i = 0; i < ${a}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${a};
        if (${u===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${u===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${u===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}};var Vl=class{constructor(t,e){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:i}=t;this.outputShape=[n,i];let a="0.0",u="";e==="prod"?a="1.0":e==="min"?(a="1.0 / 1e-20",u="min"):e==="max"&&(a="-1.0 / 1e-20",u="max");let c=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="sum"?c="sumValue":e==="prod"?c="prodValue":e==="all"?c="allValue":e==="any"&&(c="anyValue");let l=Math.floor(o/4)*4,p=o%4,m=`
      if (${e==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${e==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${u}(values, minMaxValue);
        if (${e==="min"} || ${e==="max"}) {
          minMaxValue = ${u}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,d="vec4";e==="all"?(a="1.0",m=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,d="bvec4"):e==="any"&&(a="0.0",m=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,d="bvec4");let h="";s%o>0&&(h=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${a};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${h}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        vec4 minMaxValue = vec4(${a});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${l}; i += 4) {
          int inIdx = inOffset + i;
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${m}
        }

        int inIdx = inOffset + ${l};
        if (${p===1}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${m}
        } else if (${p===2}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${m}
        } else if (${p===3}) {
          ${d} values = ${d}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${m}
        }
        setOutput(${c});
      }
    `}};function RR(r){let t=[];for(;t.length===0||t[t.length-1].outSize!==1;){let e=t.length?t[t.length-1].outSize:r[1],o=A.computeOptimalWindowSize(e);t.push({inSize:e,windowSize:o,outSize:Math.ceil(e/o)})}return t}function Ae(r,t,e,o){let n=RR(r.shape),s=r;for(let i=0;i<n.length;i++){let{inSize:a,windowSize:u,outSize:c}=n[i],l,p;e==="mean"?l=i===0?new Ti({windowSize:u,inSize:a,batchSize:r.shape[0],outSize:c},a):new Ti({windowSize:u,inSize:a,batchSize:r.shape[0],outSize:c}):l=new Vl({windowSize:u,inSize:a,batchSize:r.shape[0],outSize:c},e),p=s,s=o.runWebGLProgram(l,[s],t),p.dataId!==r.dataId&&o.disposeIntermediateTensorInfo(p)}return s}var Ml=class{constructor(t,e){this.variableNames=["A"];let o=new Array(t.length);for(let i=0;i<o.length;i++)o[i]=t[e[i]];this.outputShape=o,this.rank=o.length;let n=nt(this.rank),s=DR(e);this.userCode=`
    void main() {
      ${n} resRC = getOutputCoords();
      setOutput(getA(${s}));
    }
    `}};function DR(r){let t=r.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],o=new Array(t);for(let n=0;n<r.length;n++)o[r[n]]=e[n];return o.join()}var Ul=class{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;let o=new Array(t.length);for(let l=0;l<o.length;l++)o[l]=t[e[l]];if(this.outputShape=o,this.rank=o.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let n=nt(this.rank),s=Td("rc",this.rank),i=new Array(this.rank);for(let l=0;l<e.length;l++)i[e[l]]=s[l];let a=`vec2(${i.slice(-2).join()})`,u=`++${s[this.rank-1]} < ${o[this.rank-1]}`,c=`getChannel(getA(${i.join()}), ${a})`;this.userCode=`
    void main() {
      ${n} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${u}) {
        result[1] = ${c};
      }
      --${s[this.rank-1]};
      if(++${s[this.rank-2]} < ${o[this.rank-2]}) {
        result[2] = ${c};
        if(${u}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}};function bo(r,t,e){let o=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ul(r.shape,t):new Ml(r.shape,t);return e.runWebGLProgram(o,[r],r.dtype)}function Wv(r,t,e,o){let n=t,s=r.shape.length,i=S.parseAxisParam(n,r.shape),a=i,u=A.getAxesPermutation(a,s),c=u!=null,l=r;c&&(l=bo(r,u,o),a=A.getInnerMostAxes(a.length,s)),A.assertAxesAreInnerMostDims("sum",a,s);let[p,m]=A.computeOutAndReduceShapes(l.shape,a),d=p;e&&(d=A.expandShapeToKeepDim(p,i));let h=S.sizeFromShape(m),x=S.sizeFromShape(r.shape)/h,w=z({inputs:{x:l},attrs:{shape:[x,h]},backend:o}),N=Do(r.dtype),k=Ae(w,N,"sum",o),_=z({inputs:{x:k},attrs:{shape:d},backend:o});return o.disposeIntermediateTensorInfo(w),o.disposeIntermediateTensorInfo(k),c&&o.disposeIntermediateTensorInfo(l),_}function an(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:i}=o;return Wv(n,s,i,e)}var zv={kernelName:Pu,backendName:"webgl",kernelFunc:an};function At(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{perm:s}=o,i=e,a=n.shape.length,u=new Array(a);for(let l=0;l<u.length;l++)u[l]=n.shape[s[l]];let c;if(i.shouldExecuteOnCPU([n])){let p=i.texData.get(n.dataId).values,m=on(p,n.shape,n.dtype,s,u);c=i.makeTensorInfo(u,n.dtype);let d=i.texData.get(c.dataId);d.values=m}else c=bo(n,s,i);return c}var Hv={kernelName:Mn,backendName:"webgl",kernelFunc:At};var kd=1e3;function un({a:r,b:t,transposeA:e,transposeB:o,backend:n,bias:s=null,preluActivationWeights:i=null,leakyreluAlpha:a=0,activation:u=null}){let c=r.shape.length,l=t.shape.length,p=e?r.shape[c-2]:r.shape[c-1],m=o?t.shape[l-1]:t.shape[l-2],d=e?r.shape[c-1]:r.shape[c-2],h=o?t.shape[l-2]:t.shape[l-1],g=r.shape.slice(0,-2),x=t.shape.slice(0,-2),w=S.sizeFromShape(g),N=S.sizeFromShape(x),_=io.assertAndGetBroadcastShape(r.shape.slice(0,-2),t.shape.slice(0,-2)).concat([d,h]);S.assert(p===m,()=>`Error in matMul: inner shapes (${p}) and (${m}) of Tensors with shapes ${r.shape} and ${t.shape} and transposeA=${e} and transposeB=${o} must match.`);let D=e?[w,p,d]:[w,d,p],B=o?[N,h,m]:[N,m,h],V=z({inputs:{x:r},backend:n,attrs:{shape:D}}),U=z({inputs:{x:t},backend:n,attrs:{shape:B}}),H=[V,U],W=Math.max(w,N),j=e?V.shape[1]:V.shape[2],Z=s!=null,lt=i!=null,it=u==="leakyrelu",mt=u!=null?Gr(u,!0):null,jt=Z||lt||it||mt!=null,Gt;if((d===1||h===1)&&j>kd&&jt===!1){let oe=V,gr=U;e&&(oe=At({inputs:{x:V},backend:n,attrs:{perm:[0,2,1]}}),H.push(oe)),o&&(gr=At({inputs:{x:U},backend:n,attrs:{perm:[0,2,1]}}),H.push(gr));let Ar=h!==1,xr=h===1,fn=oe;Ar&&(fn=z({inputs:{x:oe},backend:n,attrs:{shape:[W,j,1]}}),H.push(fn));let _i=h===1?2:1,Es=gr;xr&&(Es=z({inputs:{x:gr},backend:n,attrs:{shape:[W,1,j]}}),H.push(Es));let $s=wi({inputs:{a:fn,b:Es},backend:n});Gt=an({inputs:{x:$s},backend:n,attrs:{axis:_i,keepDims:!0}}),H.push($s)}else{let oe=ae(r.dtype,t.dtype),gr=new xs(D,B,[W,d,h],e,o,Z,mt,lt,it),Ar=[V,U];if(s!=null&&Ar.push(s),lt&&Ar.push(i),it){let xr=n.makeTensorInfo([],"float32",S.createScalarValue(a,"float32"));Ar.push(xr),H.push(xr)}Gt=n.runWebGLProgram(gr,Ar,oe)}let Bt=z({inputs:{x:Gt},backend:n,attrs:{shape:_}});H.push(Gt);for(let oe of H)n.disposeIntermediateTensorInfo(oe);return Bt}function FR(r){let{inputs:t,backend:e,attrs:o}=r,{a:n,b:s,bias:i,preluActivationWeights:a}=t,{transposeA:u,transposeB:c,activation:l,leakyreluAlpha:p}=o;return un({a:n,b:s,transposeA:u,transposeB:c,backend:e,bias:i,preluActivationWeights:a,leakyreluAlpha:p,activation:l})}var Kv={kernelName:Ks,backendName:"webgl",kernelFunc:FR};var qv="return abs(x);";function OR(r){let{inputs:t,backend:e}=r,{x:o}=t;if(e.shouldExecuteOnCPU([o])&&o.dtype!=="complex64"){let s=e.texData.get(o.dataId),i=Rl(s.values);return e.makeTensorInfo(o.shape,o.dtype,i)}let n;return O().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new Me(o.shape,qv):n=new le(o.shape,qv),e.runWebGLProgram(n,[o],o.dtype)}var jv={kernelName:Vs,backendName:"webgl",kernelFunc:OR};var PR=Yt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,LR=Y({opSnippet:PR}),Xv={kernelName:Ki,backendName:"webgl",kernelFunc:LR};var BR=Yt+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,VR=Y({opSnippet:BR}),Yv={kernelName:qi,backendName:"webgl",kernelFunc:VR};var Qv="return a + b;",MR=wt({opSnippet:Qv,packedOpSnippet:Qv,supportsComplex:!0,cpuKernelImpl:Ab}),Zv={kernelName:Zr,backendName:"webgl",kernelFunc:MR};var Gl=class{constructor(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map((s,i)=>`T${i}`);let o=[];this.variableNames.forEach(s=>{o.push(`float v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        float result = ${n};
        setOutput(result);
      }
    `}};var Wl=class{constructor(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map((s,i)=>`T${i}`);let o=[];this.variableNames.forEach(s=>{o.push(`vec4 v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        vec4 result = ${n};
        setOutput(result);
      }
    `}};function zl(r){let{inputs:t,backend:e}=r,o=t;if(o.length===1)return Ut({inputs:{x:o[0]},backend:e});if(o.length>O().get("WEBGL_MAX_TEXTURES_IN_SHADER")){let u=Math.floor(o.length/2),c=zl({inputs:o.slice(0,u),backend:e}),l=zl({inputs:o.slice(u),backend:e});return zl({inputs:[c,l],backend:e})}let n=o.map(u=>u.dtype).reduce((u,c)=>ae(u,c)),s=o.map(u=>u.shape),a=O().getBool("WEBGL_PACK")?new Wl(o[0].shape,s):new Gl(o[0].shape,s);return e.runWebGLProgram(a,o,n)}var Jv={kernelName:ji,backendName:"webgl",kernelFunc:zl};function UR(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,u=S.parseAxisParam(s,n.shape),c=u,l=A.getAxesPermutation(c,a),p=n;l!=null&&(p=At({inputs:{x:n},backend:e,attrs:{perm:l}}),c=A.getInnerMostAxes(c.length,a)),A.assertAxesAreInnerMostDims("all",c,a);let[m,d]=A.computeOutAndReduceShapes(p.shape,c),h=S.sizeFromShape(d),g=z({inputs:{x:p},backend:e,attrs:{shape:[-1,h]}}),x=Ae(g,g.dtype,"all",e),w;if(i){let N=A.expandShapeToKeepDim(m,u);w=z({inputs:{x},backend:e,attrs:{shape:N}})}else w=z({inputs:{x},backend:e,attrs:{shape:m}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(x),l!=null&&e.disposeIntermediateTensorInfo(p),w}var tw={kernelName:Xi,backendName:"webgl",kernelFunc:UR};function GR(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,u=S.parseAxisParam(s,n.shape),c=u,l=A.getAxesPermutation(c,a),p=n;l!=null&&(p=At({inputs:{x:n},backend:e,attrs:{perm:l}}),c=A.getInnerMostAxes(c.length,a)),A.assertAxesAreInnerMostDims("any",c,a);let[m,d]=A.computeOutAndReduceShapes(p.shape,c),h=S.sizeFromShape(d),g=z({inputs:{x:p},backend:e,attrs:{shape:[-1,h]}}),x=Ae(g,g.dtype,"any",e),w;if(i){let N=A.expandShapeToKeepDim(m,u);w=z({inputs:{x},backend:e,attrs:{shape:N}})}else w=z({inputs:{x},backend:e,attrs:{shape:m}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(x),l!=null&&e.disposeIntermediateTensorInfo(p),w}var ew={kernelName:Yi,backendName:"webgl",kernelFunc:GR};var Hl=class{constructor(t,e,o){this.variableNames=["A"];let{windowSize:n,batchSize:s,outSize:i}=t;o||this.variableNames.push("bestIndicesA"),this.outputShape=[s,i];let a=e==="max"?">":"<",u=o?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${n}; i++) {
          int inIdx = ${u};
          float candidate = getA(batch, inIdx);
          if (candidate ${a} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}};var Kl=class{constructor(t,e,o,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,S.assert(t.length>2,()=>`Packed arg${o.charAt(0).toUpperCase()+o.slice(1)} supports only inputs with rank above 2.`);let s=t[t.length-1],i=Math.ceil(s/e);this.outputShape=t.slice(0,-1),i>1&&this.outputShape.push(i),n||this.variableNames.push("bestIndicesA");let a=this.outputShape,u=a.length,c=nt(u),l=Mt("coords",u),p,m;if(i===1){m=u+1;let U=nt(m);p=`
        ${U} sourceLocR = ${U}(${l.join()}, 0);
        ++${l[u-1]};
        ${U} sourceLocG = ${U}(${l.join()}, 0);
        ++${l[u-2]};
        ${U} sourceLocA = ${U}(${l.join()}, 0);
        --${l[u-1]};
        ${U} sourceLocB = ${U}(${l.join()}, 0);
        --${l[u-2]};`}else m=u,p=`
        ${c} sourceLocR = coords;
        ++${l[u-1]};
        ${c} sourceLocG = coords;
        ++${l[u-2]};
        ${c} sourceLocA = coords;
        --${l[u-1]};
        ${c} sourceLocB = coords;
        --${l[u-2]};`;let d=["x","y","z","w","u","v"].slice(0,m),h="."+d[m-1],g=d.map(U=>"int "+U),x=Mt("sourceLocR",m-1).concat("inIdx.r"),w=Mt("sourceLocG",m-1).concat("inIdx.g"),N=Mt("sourceLocB",m-1).concat("inIdx.b"),k=Mt("sourceLocA",m-1).concat("inIdx.a"),_=o==="max"?"greaterThan":"lessThan",D=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${w.join()}),
                             getBestIndicesAChannel(${N.join()}),
                             getBestIndicesAChannel(${k.join()})));`,B=`vec4(
            getAChannel(${x.join()}),
            hasNextCol ? getAChannel(${w.join()}) : 0.,
            hasNextRow ? getAChannel(${N.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${k.join()}) : 0.)`,V=n?"":`
      float getBestIndicesAChannel(${g.join()}) {
        return getChannel(getBestIndicesA(${d.join()}),
                                          vec2(${d.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${g.join()}) {
        return getChannel(getA(${d.join()}),
                               vec2(${d.slice(-2).join()}));
      }
      ${V}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${l[u-1]} < ${a[u-1]-1};
        bool hasNextRow = ${l[u-2]} < ${a[u-2]-1};
        ${p}
        ivec4 srcIdx = ivec4(sourceLocR${h}, sourceLocG${h},
          sourceLocB${h}, sourceLocA${h}) * ${e};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${B};

        for (int i = 0; i < ${e}; i++) {
          inIdx = srcIdx;
          ${D}
          vec4 candidate = ${B};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${_}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function rw(r,t,e,o=null){let n=t.shape[0],s=t.shape[1];o!=null&&(n=o.shape[0],s=o.shape[1]);let i=A.computeOptimalWindowSize(s),a={windowSize:i,inSize:s,batchSize:n,outSize:Math.ceil(s/i)},u=new Hl(a,e,o==null),c=[t];o!=null&&c.push(o);let l=r.runWebGLProgram(u,c,"int32");if(l.shape[1]===1)return l;let p=rw(r,t,e,l);return r.disposeIntermediateTensorInfo(l),p}function ow(r,t,e,o=null){let n=o!=null?o.shape:t.shape,s=n[n.length-1],i=A.computeOptimalWindowSize(s),a=new Kl(n,i,e,o==null),u=o==null?[t]:[t,o],c=r.runWebGLProgram(a,u,"int32");if(c.shape.length===t.shape.length){let l=ow(r,t,e,c);return r.disposeIntermediateTensorInfo(c),l}return c}function ql(r,t,e,o){let n=[e];if(A.assertAxesAreInnerMostDims("arg"+o.charAt(0).toUpperCase()+o.slice(1),n,t.shape.length),!O().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){let s=[],i=r.texData.get(t.dataId),a=i!==null&&i.isPacked,u=t;a&&(u=r.unpackTensor(t),s.push(u));let[c,l]=A.computeOutAndReduceShapes(u.shape,n),p=S.sizeFromShape(l),m=z({inputs:{x:u},backend:r,attrs:{shape:[-1,p]}});s.push(m);let d=rw(r,m,o);s.push(d);let h=z({inputs:{x:d},backend:r,attrs:{shape:c}});return s.forEach(g=>r.disposeIntermediateTensorInfo(g)),h}return ow(r,t,o)}function WR(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s}=o,i=S.parseAxisParam(s,n.shape),a=A.getAxesPermutation(i,n.shape.length),u=n,c=[];a!=null&&(u=At({inputs:{x:n},backend:e,attrs:{perm:a}}),c.push(u),i=A.getInnerMostAxes(i.length,u.shape.length)),A.assertAxesAreInnerMostDims("argMax",[i[0]],u.shape.length);let l=ql(e,u,i[0],"max");return c.forEach(p=>e.disposeIntermediateTensorInfo(p)),l}var nw={kernelName:Qi,backendName:"webgl",kernelFunc:WR};function zR(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s}=o,i=S.parseAxisParam(s,n.shape),a=A.getAxesPermutation(i,n.shape.length),u=n,c=[];a!=null&&(u=At({inputs:{x:n},backend:e,attrs:{perm:a}}),c.push(u),i=A.getInnerMostAxes(i.length,u.shape.length)),A.assertAxesAreInnerMostDims("argMin",[i[0]],u.shape.length);let l=ql(e,u,i[0],"min");return c.forEach(p=>e.disposeIntermediateTensorInfo(p)),l}var sw={kernelName:Zi,backendName:"webgl",kernelFunc:zR};var HR=Yt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,KR=Y({opSnippet:HR}),iw={kernelName:Ji,backendName:"webgl",kernelFunc:KR};var qR=Yt+"return log(x + sqrt(x * x + 1.0));",jR=Y({opSnippet:qR}),aw={kernelName:ta,backendName:"webgl",kernelFunc:jR};var XR=Yt+`
  return atan(x);
`,YR=Y({opSnippet:XR}),uw={kernelName:ea,backendName:"webgl",kernelFunc:YR};var QR=Lv+`
  return atan(a, b);
`,ZR=`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  `+Bv+`
  return result;
`,JR=wt({opSnippet:QR,packedOpSnippet:ZR}),cw={kernelName:oa,backendName:"webgl",kernelFunc:JR};var tD=Yt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,eD=Y({opSnippet:tD}),lw={kernelName:ra,backendName:"webgl",kernelFunc:eD};var fr=class{constructor(t,e,o,n=!1,s=!1){if(this.variableNames=["x"],e==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let i=t.filterWidth,a=t.strideHeight,u=t.strideWidth,c=t.dilationHeight,l=t.dilationWidth,p=t.effectiveFilterHeight,m=t.effectiveFilterWidth,d=t.padInfo.top,h=t.padInfo.left;this.outputShape=t.outShape;let g=e==="avg",x=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,w=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`,N="0.0";if(g||(N="-1.0 / 1e-20"),o){let U=">=";this.userCode=`
        const ivec2 strides = ivec2(${a}, ${u});
        const ivec2 pads = ivec2(${d}, ${h});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${p};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${m};
                wC += ${l}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value ${U} currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${n?s?x:w:`wR * ${m} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let k="max",_=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(_="avgValue / count");let D=Math.floor(i/4)*4,B=i%4,V=`
      if (${g}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${k}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${a}, ${u});
      const ivec2 pads = ivec2(${d}, ${h});
      const float initializationValue = ${N};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${N});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${p};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${D}; wC += 4) {
            int xC = xCCorner + wC * ${l};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              getValue(batch, xR, xC + 3 * ${l}, d)
            );

            ${V}
          }

          int xC = xCCorner + ${D};
          if (${B===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${V}
          } else if (${B===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              initializationValue,
              initializationValue
            );

            ${V}
          } else if (${B===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              initializationValue
            );

            ${V}
          }
        }
        setOutput(${_});
      }
    `}},vo=class{constructor(t,e,o,n=!1,s=!1){if(this.variableNames=["x"],e==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let i=t.filterWidth,a=t.strideDepth,u=t.strideHeight,c=t.strideWidth,l=t.dilationDepth,p=t.dilationHeight,m=t.dilationWidth,d=t.effectiveFilterDepth,h=t.effectiveFilterHeight,g=t.effectiveFilterWidth,x=t.padInfo.front,w=t.padInfo.top,N=t.padInfo.left;this.outputShape=t.outShape;let k=e==="avg",_="0.0";if(k||(_="-1.0 / 1e-20"),o){let W=">=";this.userCode=`
        const ivec3 strides =
            ivec3(${a}, ${u}, ${c});
        const ivec3 pads = ivec3(${x}, ${w}, ${N});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${d};
              wD += ${l}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${t.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${h};
                wR += ${p}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${g};
                  wC += ${m}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value ${W} currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${n?s?`(((batch * ${t.inDepth} + xD) * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`((xD * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`wD * ${h} * ${g} +
                      wR * ${g} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let D="max",B=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(B="avgValue / count");let V=Math.floor(i/4)*4,U=i%4,H=`
      if (${k}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${D}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${a}, ${u}, ${c});
      const ivec3 pads = ivec3(${x}, ${w}, ${N});
      const float initializationValue = ${_};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${_});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${d};
            wD += ${l}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${h};
            wR += ${p}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${V}; wC += 4) {
              int xC = xCCorner + wC * ${m};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                getValue(batch, xD, xR, xC + 2 * ${m}, ch),
                getValue(batch, xD, xR, xC + 3 * ${m}, ch)
              );

              ${H}
            }

            int xC = xCCorner + ${V};
            if (${U===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${H}
            } else if (${U===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                initializationValue,
                initializationValue
              );

              ${H}
            } else if (${U===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                getValue(batch, xD, xR, xC + 2 * ${m}, ch),
                initializationValue
              );

              ${H}
            }
          }
          setOutput(${B});
        }
      }
    `}};function rD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t;_r(n,"avgPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:u}=o,c=1;S.assert(A.eitherStridesOrDilationsAreOne(i,c),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);let l=A.computePool2DInfo(n.shape,s,i,c,a,u);if(l.filterWidth===1&&l.filterHeight===1&&S.arraysEqual(l.inShape,l.outShape))return Ut({inputs:{x:n},backend:e});let p=new fr(l,"avg",!1);return e.runWebGLProgram(p,[n],"float32")}var pw={kernelName:na,backendName:"webgl",kernelFunc:rD};function oD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{filterSize:s,strides:i,pad:a,dimRoundingMode:u,dataFormat:c}=o,l=[1,1,1],p=A.computePool3DInfo(n.shape,s,i,l,a,u,c),m=new vo(p,"avg",!1);return e.runWebGLProgram(m,[n],"float32")}var mw={kernelName:sa,backendName:"webgl",kernelFunc:oD};var jl=class{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;let e=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,i=t.dilationHeight,a=t.dilationWidth,u=t.effectiveFilterHeight,c=t.effectiveFilterWidth,l=u-1-t.padInfo.top,p=c-1-t.padInfo.left,m=1/(e*o);this.userCode=`
      const ivec2 pads = ivec2(${l}, ${p});
      const float avgMultiplier = float(${m});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${u};
            wR += ${i}) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${a}) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}},Xl=class{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;let e=t.filterDepth,o=t.filterHeight,n=t.filterWidth,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,u=t.dilationDepth,c=t.dilationHeight,l=t.dilationWidth,p=t.effectiveFilterDepth,m=t.effectiveFilterHeight,d=t.effectiveFilterWidth,h=p-1-t.padInfo.front,g=m-1-t.padInfo.top,x=d-1-t.padInfo.left,w=1/(e*o*n);this.userCode=`
      const ivec3 pads = ivec3(${h}, ${g}, ${x});
      const float avgMultiplier = float(${w});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${p};
            wD += ${u}) {
          float dyD = float(dyDCorner + wD) / ${s}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${m};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${d};
                wC += ${l}) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function nD(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,input:s}=t,i=s,{filterSize:a,strides:u,pad:c,dimRoundingMode:l}=o,p=[1,1,1],m=A.computePool3DInfo(i.shape,a,u,p,c,l),d=new Xl(m);return e.runWebGLProgram(d,[n],i.dtype)}var fw={kernelName:Sg,backendName:"webgl",kernelFunc:nD};function sD(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,input:s}=t,i=s;_r([n,s],"avgPoolGrad");let{filterSize:a,strides:u,pad:c}=o,l=A.computePool2DInfo(i.shape,a,u,1,c),p=new jl(l);return e.runWebGLProgram(p,[n],i.dtype)}var dw={kernelName:Cg,backendName:"webgl",kernelFunc:sD};function iD(r){let{inputs:t,backend:e,attrs:o}=r,{a:n,b:s}=t,{transposeA:i,transposeB:a}=o;return un({a:n,b:s,transposeA:i,transposeB:a,backend:e})}var hw={kernelName:ia,backendName:"webgl",kernelFunc:iD};var Yl=class{constructor(t,e,o,n,s,i){this.outputShape=[],this.variableNames=["x","mean","variance"],A.assertAndGetBroadcastShape(t,e),A.assertAndGetBroadcastShape(t,o);let a="0.0";n!=null&&(A.assertAndGetBroadcastShape(t,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let u="1.0";s!=null&&(A.assertAndGetBroadcastShape(t,s),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${a};
        float scale = ${u};
        float inv = scale * inversesqrt(variance + float(${i}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}};var Ql=class{constructor(t,e,o,n,s,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],A.assertAndGetBroadcastShape(t,e),A.assertAndGetBroadcastShape(t,o);let a="vec4(0.0)";n!=null&&(A.assertAndGetBroadcastShape(t,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");let u="vec4(1.0)";s!=null&&(A.assertAndGetBroadcastShape(t,s),this.variableNames.push("scale"),u="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${a};
        vec4 scale = ${u};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${i}));

        setOutput((x - mean) * inv + offset);
      }
    `}};var aD=({inputs:r,backend:t,attrs:e})=>{let{x:o,mean:n,variance:s,offset:i,scale:a}=r;S.assert(n.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),S.assert(i==null||n.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),S.assert(a==null||n.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:u}=e;u==null&&(u=.001);let c=[o,n,s],l=null;i!=null&&(l=i.shape,c.push(i));let p=null;a!=null&&(p=a.shape,c.push(a));let m=O().getBool("WEBGL_PACK_NORMALIZATION")?new Ql(o.shape,n.shape,s.shape,l,p,u):new Yl(o.shape,n.shape,s.shape,l,p,u);return t.runWebGLProgram(m,c,c[0].dtype)},gw={kernelName:Va,backendName:"webgl",kernelFunc:aD};var Zl=class{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;let e=nt(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let o=uD(this.rank),n,s=t.map((i,a)=>`sourceLoc.${_d[a]} = start[${a}] + coords.${_d[a]};`);n=`
        ${e} sourceLoc;
        ${e} coords = getOutputCoords();
        ${s.join(`
`)}
      `,this.userCode=`
      void main() {
        ${n}
        setOutput(getSource(${o}));
      }
    `}},_d=["x","y","z","w","u","v"];function uD(r){if(r===1)return"sourceLoc";if(r<=6)return _d.slice(0,r).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${r} is not yet supported`)}var Jl=class{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let e=nt(this.rank),o=Mt("coords",this.rank),n=Mt("sourceLoc",this.rank),s=this.rank===1?"sourceLoc":`vec2(${n.slice(-2).join()})`,i=`getChannel(getSource(${n.join()}), ${s})`,a=`
      result.x = ${i};
      if (++${o[this.rank-1]} < ${t[this.rank-1]}) {
        ++${n[this.rank-1]};
        result.y = ${i};
        --${n[this.rank-1]};
      }
    `,u=this.rank===1?"":`
      --${o[this.rank-1]};
      if (++${o[this.rank-2]} < ${t[this.rank-2]}) {
        ++${n[this.rank-2]};
        result.z = ${i};
        if (++${o[this.rank-1]} < ${t[this.rank-1]}) {
          ++${n[this.rank-1]};
          result.w = ${i};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${e}(${t.map((l,p)=>`start[${p}]`).join()});`:t.map((l,p)=>`${n[p]} = ${o[p]} + start[${p}];`).join(`
`);this.userCode=`
      void main() {
        ${e} coords = getOutputCoords();
        ${e} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${a}
        ${u}
        setOutput(result);
      }
    `}};function cD(r,t,e,o){let n=o.texData.get(r.dataId),s=o.makeTensorInfo(e,r.dtype),i=o.texData.get(s.dataId);Object.assign(i,n),i.refCount=1,i.shape=e,i.dtype=r.dtype;let a=we.computeFlatOffset(t,S.computeStrides(r.shape));n.slice&&(a+=n.slice.flatOffset),i.slice={flatOffset:a,origDataId:n.slice&&n.slice.origDataId||r.dataId};let u=o.dataRefCount.get(i.slice.origDataId)||1;return o.dataRefCount.set(i.slice.origDataId,u+1),s}function dr(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{begin:s,size:i}=o,[a,u]=we.parseSliceParams(n,s,i);if(we.assertParamsValid(n,a,u),S.sizeFromShape(u)===0)return e.makeTensorInfo(u,n.dtype,[]);if(e.shouldExecuteOnCPU([n])||n.dtype==="string"){let p=e.texData.get(n.dataId),m=iv(p.values,a,u,n.shape,n.dtype);return e.makeTensorInfo(u,n.dtype,m)}let{isPacked:c}=e.texData.get(n.dataId),l=we.isSliceContinous(n.shape,a,u);if(c||!l){let p=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Jl(u):new Zl(u),m=[a];return e.runWebGLProgram(p,[n],n.dtype,m)}return e.uploadToGPU(n.dataId),cD(n,a,u,e)}var xw={kernelName:zs,backendName:"webgl",kernelFunc:dr};var lD=r=>{let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{blockShape:s,crops:i}=o;S.assert(n.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((N,k)=>N*k),u=A.getReshaped(n.shape,s,a),c=A.getPermuted(u.length,s.length),l=A.getReshapedPermuted(n.shape,s,a),p=A.getSliceBeginCoords(i,s.length),m=A.getSliceSize(l,i,s.length),d=[],h=z({inputs:{x:n},backend:e,attrs:{shape:u}}),g=At({inputs:{x:h},backend:e,attrs:{perm:c}}),x=z({inputs:{x:g},backend:e,attrs:{shape:l}}),w=dr({inputs:{x},backend:e,attrs:{begin:p,size:m}});return d.push(h),d.push(g),d.push(x),d.forEach(N=>e.disposeIntermediateTensorInfo(N)),w},yw={kernelName:aa,backendName:"webgl",kernelFunc:lD};function pD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,weights:s}=t,{size:i}=o,a=e.readSync(n.dataId),u=e.readSync(s.dataId),c=Al(a,u,s.dtype,s.shape,i);return e.makeTensorInfo([i],s.dtype,c)}var bw={kernelName:ua,backendName:"webgl",kernelFunc:pD};function mD(r){let{inputs:t,backend:e}=r,{s0:o,s1:n}=t,s=e.readSync(o.dataId),i=e.readSync(n.dataId),a=A.assertAndGetBroadcastShape(Array.from(s),Array.from(i));return e.makeTensorInfo([a.length],"int32",Int32Array.from(a))}var vw={kernelName:ca,backendName:"webgl",kernelFunc:mD};var fD="return float(a != b);",Ad=wt({opSnippet:fD,cpuKernelImpl:Jb,dtype:"bool"}),ww={kernelName:Dn,backendName:"webgl",kernelFunc:Ad};function Wr(r){let{inputs:t,backend:e}=r,{input:o}=t,n=e.texData.get(o.dataId);return Ut({inputs:{x:n.complexTensorInfos.real},backend:e})}var Tw={kernelName:Ws,backendName:"webgl",kernelFunc:Wr};var dD="return float(int(x));";function Cw(r,t){let e=new le(r.shape,dD),o=t.runWebGLProgram(e,[r],"int32");return{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}function Rd(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return Ut({inputs:{x:n},backend:e});let i=Qe(n.shape),a=Rd({inputs:{x:n},backend:e,attrs:{dtype:"float32"}}),u=Se({inputs:{real:a,imag:i},backend:e});return i.dispose(),e.disposeIntermediateTensorInfo(a),u}if(n.dtype==="complex64"){let i=Wr({inputs:{input:n},backend:e}),a=Rd({inputs:{x:i},backend:e,attrs:{dtype:s}});return e.disposeIntermediateTensorInfo(i),a}if(!S.hasEncodingLoss(n.dtype,s)){let i=Ut({inputs:{x:n},backend:e});return{dataId:i.dataId,shape:i.shape,dtype:s}}if(e.shouldExecuteOnCPU([n])){let i=e.texData.get(n.dataId).values,[a,u,c]=Db(i,n.shape,n.dtype,s);return e.makeTensorInfo(a,u,c)}if(s==="int32")return Cw(n,e);if(s==="bool"){let i=e.makeTensorInfo([],"bool",S.getTypedArrayFromDType("bool",1)),u=Ad({inputs:{a:n,b:i},backend:e});return e.disposeIntermediateTensorInfo(i),u}throw new Error(`Error in Cast: failed to cast ${n.dtype} to ${s}`)}var Sw={kernelName:Eo,backendName:"webgl",kernelFunc:Rd};var Nw="return ceil(x);",hD=Y({opSnippet:Nw,packedOpSnippet:Nw,cpuKernelImpl:Fb}),Ew={kernelName:vn,backendName:"webgl",kernelFunc:hD};var tp=class{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}};var ep=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function gD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{clipValueMin:s,clipValueMax:i}=o,a;O().getBool("WEBGL_PACK_CLIP")?a=new ep(n.shape):a=new tp(n.shape);let u=[[s],[i]];return e.runWebGLProgram(a,[n],n.dtype,u)}var $w={kernelName:la,backendName:"webgl",kernelFunc:gD};var rp=class{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}};function Iw(r,t){return{dataId:t.dataId,dtype:t.dtype,shape:r.shape}}function xD(r){let{inputs:t,backend:e}=r,{x:o}=t,n=e.texData.get(o.dataId),s=new rp(o.shape),i=[Iw(o,n.complexTensorInfos.real),Iw(o,n.complexTensorInfos.imag)];return e.runWebGLProgram(s,i,i[0].dtype)}var kw={kernelName:pa,backendName:"webgl",kernelFunc:xD};var op=class{constructor(t){this.outputShape=[],this.outputShape=A.computeOutShape(t,1),this.variableNames=t.map((i,a)=>`T${a}`);let e=new Array(t.length-1);e[0]=t[0][1];for(let i=1;i<e.length;i++)e[i]=e[i-1]+t[i][1];let o=[`if (yC < ${e[0]}) setOutput(getT0(yR, yC));`];for(let i=1;i<e.length;i++){let a=e[i-1];o.push(`else if (yC < ${e[i]}) setOutput(getT${i}(yR, yC-${a}));`)}let n=e.length,s=e[e.length-1];o.push(`else setOutput(getT${n}(yR, yC-${s}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${o.join(`
        `)}
      }
    `}};var sp=class{constructor(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=A.computeOutShape(t,e);let o=this.outputShape,n=o.length,s=nt(n),i=Mt("coords",n),a=["x","y","z","w","u","v"].slice(0,n);this.variableNames=t.map((g,x)=>`T${x}`);let u=new Array(t.length-1);u[0]=t[0][e];for(let g=1;g<u.length;g++)u[g]=u[g-1]+t[g][e];let c=a[e],l=a.slice(-2),p=a.join(),m=`if (${c} < ${u[0]}) {
        return getChannel(
            getT0(${p}), vec2(${l.join()}));
        }`;for(let g=1;g<u.length;g++){let x=u[g-1];m+=`
        if (${c} < ${u[g]}  && ${c} >= ${u[g-1]}) {
          return getChannel(
            getT${g}(${np(a,c,x)}),
            vec2(${np(l,c,x)}));
        }`}let d=u.length,h=u[u.length-1];m+=`
        return getChannel(
          getT${d}(${np(a,c,h)}),
          vec2(${np(l,c,h)}));`,this.userCode=`
      float getValue(${a.map(g=>"int "+g)}) {
        ${m}
      }

      void main() {
        ${s} coords = getOutputCoords();
        vec4 result = vec4(getValue(${i}), 0., 0., 0.);

        ${i[n-1]} = ${i[n-1]} + 1;
        if (${i[n-1]} < ${o[n-1]}) {
          result.g = getValue(${i});
        }

        ${i[n-2]} = ${i[n-2]} + 1;
        if (${i[n-2]} < ${o[n-2]}) {
          result.a = getValue(${i});
        }

        ${i[n-1]} = ${i[n-1]} - 1;
        if (${i[n-2]} < ${o[n-2]} &&
            ${i[n-1]} < ${o[n-1]}) {
          result.b = getValue(${i});
        }
        setOutput(result);
      }
    `}};function np(r,t,e){let o=r.indexOf(t);return r.map((s,i)=>i===o?`${s} - ${e}`:s).join()}function cn(r){let{inputs:t,backend:e}=r,{input:o}=t,n=e.texData.get(o.dataId);return Ut({inputs:{x:n.complexTensorInfos.imag},backend:e})}var _w={kernelName:Wa,backendName:"webgl",kernelFunc:cn};function ys(r,t,e){let o=r[0].dtype;if(o==="complex64"){let p=r.map(x=>Wr({inputs:{input:x},backend:e})),m=r.map(x=>cn({inputs:{input:x},backend:e})),d=ys(p,t,e),h=ys(m,t,e),g=Se({inputs:{real:d,imag:h},backend:e});return p.forEach(x=>e.disposeIntermediateTensorInfo(x)),m.forEach(x=>e.disposeIntermediateTensorInfo(x)),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(h),g}let n=e.shouldExecuteOnCPU(r);if(o==="string"&&(n=!0),n){let p=r.map(N=>{let k=S.sizeFromShape(N.shape.slice(t));return z({inputs:{x:N},backend:e,attrs:{shape:[-1,k]}})}),m=p.map(N=>({vals:e.readSync(N.dataId),shape:N.shape})),d=A.computeOutShape(p.map(N=>N.shape),1),h=p[0].shape[0]===1,g=Ob(m,d,o,h),x=A.computeOutShape(r.map(N=>N.shape),t),w=e.makeTensorInfo(x,o,g);return p.forEach(N=>e.disposeIntermediateTensorInfo(N)),w}let s=O().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(r.length>s){let p=[];for(let d=0;d<r.length;d+=s){let h=r.slice(d,d+s);p.push(ys(h,t,e))}let m=ys(p,t,e);for(let d of p)e.disposeIntermediateTensorInfo(d);return m}if(O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&r[0].shape.length>1){let p=new sp(r.map(m=>m.shape),t);return e.runWebGLProgram(p,r,o)}let{tensors2D:i,outShape:a}=yD(r,t,e),u=new op(i.map(p=>p.shape)),c=e.runWebGLProgram(u,i,o);i.forEach(p=>e.disposeIntermediateTensorInfo(p));let l=z({inputs:{x:c},attrs:{shape:a},backend:e});return e.disposeIntermediateTensorInfo(c),l}function yD(r,t,e){let o=A.computeOutShape(r.map(s=>s.shape),t);return{tensors2D:r.map(s=>z({inputs:{x:s},attrs:{shape:[-1,S.sizeFromShape(s.shape.slice(t))]},backend:e})),outShape:o}}function Dd(r){let{inputs:t,backend:e,attrs:o}=r,{axis:n}=o,s=S.parseAxisParam(n,t[0].shape)[0],i=A.computeOutShape(t.map(c=>c.shape),s);if(S.sizeFromShape(i)===0)return e.makeTensorInfo(i,t[0].dtype,[]);let a=t.filter(c=>S.sizeFromShape(c.shape)>0);if(a.length===1)return Ut({inputs:{x:a[0]},backend:e});let u=a.map(c=>c.shape);return A.assertParamsConsistent(u,s),ys(a,s,e)}var Aw={kernelName:ma,backendName:"webgl",kernelFunc:Dd};var bs=class{constructor(t,e=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;let i=t.padInfo.top,a=t.padInfo.left,u=t.strideHeight,c=t.strideWidth,l=t.dilationHeight,p=t.dilationWidth,m=t.filterHeight,d=t.filterWidth,h=Math.floor(t.inChannels/4)*4,g=t.inChannels%4,x=t.dataFormat==="channelsLast",w=x?1:2,N=x?2:3,k=x?3:1,_="",D="";o&&(n?_=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?_=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:_=`
          float activation(float x) {
            ${o}
          }
        `,D="result = activation(result);");let B=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${_}

      const ivec2 strides = ivec2(${u}, ${c});
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${k}];

        ivec2 xRCCorner =
            ivec2(coords[${w}], coords[${N}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${m}; wR++) {
          int xR = xRCorner + wR * ${l};

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${d}; wC++) {
            int xC = xCCorner + wC * ${p};

            if (xC < 0 || xC >= ${t.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${h}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${x}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${g===1}) {

              if (${x}) {
                dotProd +=
                    getX(batch, xR, xC, ${h}) *
                    getW(wR, wC, ${h}, d2);
              } else {
                dotProd +=
                    getX(batch, ${h}, xR, xC) *
                    getW(wR, wC, ${h}, d2);
              }

            } else if (${g===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2)
              );

              if (${x}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${g===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${h}, d2),
                getW(wR, wC, ${h} + 1, d2),
                getW(wR, wC, ${h} + 2, d2)
              );

              if (${x}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${h}),
                  getX(batch, xR, xC, ${h} + 1),
                  getX(batch, xR, xC, ${h} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${h}, xR, xC),
                  getX(batch, ${h} + 1, xR, xC),
                  getX(batch, ${h} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${B}
        ${D}
        setOutput(result);
      }
    `}},ip=class{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;let e=t.padInfo.front,o=t.padInfo.top,n=t.padInfo.left,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,u=t.dilationDepth,c=t.dilationHeight,l=t.dilationWidth,p=t.filterDepth,m=t.filterHeight,d=t.filterWidth,h=Math.floor(t.inChannels/4)*4,g=t.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${s}, ${i}, ${a});
      const ivec3 pads = ivec3(${e}, ${o}, ${n});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${p}; wF++) {
          int xF = xFCorner + wF * ${u};

          if (xF < 0 || xF >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${m}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d}; wC++) {
              int xC = xCCorner + wC * ${l};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${h}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${g===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${h}) *
                  getW(wF, wR, wC, ${h}, d2);
              } else if (${g===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${g===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${h}),
                  getX(batch, xF, xR, xC, ${h} + 1),
                  getX(batch, xF, xR, xC, ${h} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${h}, d2),
                  getW(wF, wR, wC, ${h} + 1, d2),
                  getW(wF, wR, wC, ${h} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};var vs=class{constructor(t,e=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Et(this.outputShape.length);let i=t.padInfo.left,a=t.strideWidth,u=t.dilationWidth,c=t.filterHeight,l=t.filterWidth,p=l,m=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<l;x++)m+=`
           vec4 xTexelC${x*2};
           int xTexelC${x*2}Ready;
           vec4 xTexelC${x*2+1};
           int xTexelC${x*2+1}Ready;
           vec4 xC${x};`;m+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${t.inChannels}; d1 += 2) {
       `;for(let x=0;x<l;x++)m+=`
           xTexelC${x*2} = vec4(0.0);
           xTexelC${x*2}Ready = 0;
           xTexelC${x*2+1} = vec4(0.0);
           xTexelC${x*2+1}Ready = 0;
           xC${x} = vec4(0.0);`;m+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let x=0;x<(p+1)/2;x++){let w=x*2;if(m+=`
           xC = xCCorner + ${w*u};
           `,a===1){if(w<l&&(i%2===1?(m+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w}Ready == 0) {
                   xTexelC${w} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${w}.zw = vec2(0.0);
                   }
                   xTexelC${w}Ready = 1;
                 }
               `,u===1&&w>0?m+=`
                 xC${w} = vec4(xTexelC${w-2}.zw, xTexelC${w}.xy);
                 `:m+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${w} = vec4(previous.zw, xTexelC${w}.xy);
                   } else {
                     xC${w} = vec4(0.0, 0.0, xTexelC${w}.xy);
                   }
                   `):m+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${w}Ready == 0) {
                   xTexelC${w} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${w}.zw = vec2(0.0);
                   }
                   xTexelC${w}Ready = 1;
                 }

                 xC${w} = xTexelC${w};
                 `,w+1<l)){let N=i%2===0?S.nearestLargerEven(u):u;u%2===0&&i%2===1||u%2!==0&&i%2!==1?(m+=`
                   xCOffset = xC + imod(pads[1], 2) + ${N};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w+1}Ready == 0) {
                     xTexelC${w+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${w+1}.zw = vec2(0.0);
                     }
                     xTexelC${w+1}Ready = 1;
                   }
                   `,u>1?m+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${w+1} = vec4(previous.zw, xTexelC${w+1}.xy);
                     } else {
                      xC${w+1} = vec4(0.0, 0.0, xTexelC${w+1}.xy);
                     }
                     `:m+=`
                     xC${w+1} = vec4(xTexelC${w}.zw, xTexelC${w+1}.xy);
                     `):N===1?m+=`
                     xC${w+1} = xTexelC${w};
                     `:m+=`
                     xCOffset = xC + ${N};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w+1}Ready == 0) {
                       xTexelC${w+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${w+1}.zw = vec2(0.0);
                       }
                       xTexelC${w+1}Ready = 1;
                     }

                     xC${w+1} = xTexelC${w+1};
                     `}}else w<l&&(i%2===1?(m+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w}Ready == 0) {
                   xTexelC${w} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${w}.zw = vec2(0.0);
                   }
                   xTexelC${w}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${w+1}Ready == 0) {
                   xTexelC${w+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${w+1}.zw = vec2(0.0);
                   }
                   xTexelC${w+1}Ready = 1;
                 }

                 xC${w} = vec4(xTexelC${w}.zw, xTexelC${w+1}.zw);
               `,w+1<l&&(m+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${w+1} = vec4(xTexelC${w+1}.xy, final.xy);
                 `)):(m+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${w}Ready == 0) {
                   xTexelC${w} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${w}.zw = vec2(0.0);
                   }
                   xTexelC${w}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${w+1}Ready == 0) {
                   xTexelC${w+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${w+1}.zw = vec2(0.);
                   }
                   xTexelC${w+1}Ready = 1;
                 }

                 xC${w} = vec4(
                   xTexelC${w}.xy, xTexelC${w+1}.xy);
               `,w+1<l&&(m+=`
                   xC${w+1} = vec4(xTexelC${w}.zw, xTexelC${w+1}.zw);
                 `)));w<l&&(m+=`
             wTexel = getW(r, ${w}, d1, d2);
             dotProd += xC${w}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${t.inChannels}) {
               dotProd += xC${w}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,w+1<l&&(m+=`
               wTexel = getW(r, ${w+1}, d1, d2);
               dotProd += xC${w+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${t.inChannels}) {
                 dotProd += xC${w+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}m+=`
     }
   `,m+=`
     }
   `,m+=`
     }
   `;let d="",h="";o&&(n?d=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${o}
         }`:s?d=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${o}
         }`:d=`vec4 activation(vec4 x) {
           ${o}
         }`,h="result = activation(result);");let g=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${d}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${m}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${g}
         ${h}
         setOutput(result);
       }
     `}};var ap=class{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=Et(this.outputShape.length);let{dataFormat:o}=e,n=Dt(),s=o==="channelsLast",i=s?1:2,a=s?2:3,u=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`,c="";for(let l=0;l<=1;l++)for(let p=0;p<=1;p++)c+=`
          blockIndex = rc.z + ${p};
          pos = rc.y + ${l};

          ${u}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${i}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${a}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${s}) {
                  innerDims = vec2(d1, ch);
                  result[${l*2+p}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${l*2+p}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${n.output} = result;
      }
    `}};function up(r,t){let e=r.length;return e>=3?t?[...r.slice(0,-3),r[e-3]*r[e-2],r[e-1]]:[...r.slice(0,-3),r[e-3],r[e-2]*r[e-1]]:!t&&e===1&&r[0]>1?[r[0],1]:null}function cp({x:r,filter:t,convInfo:e,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let u=r.shape,c=o.texData.get(r.dataId),l=e.inChannels,p=u[0]*u[1]*u[2],m=e.outChannels,d=e.dataFormat==="channelsLast",h=!1,g=!1,x,w=[];if(s!=null){let _=up(s.shape,d);_!=null&&(s=z({inputs:{x:s},backend:o,attrs:{shape:_}}),w.push(s))}if(n!=null){let _=up(n.shape,d);_!=null&&(n=z({inputs:{x:n},backend:o,attrs:{shape:_}}),w.push(n))}if(!((p===1||m===1)&&l>kd)&&c.isPacked&&d&&c.texture!=null&&u[2]%2!==0&&S.arraysEqual(c.shape.slice(-3),u.slice(-3))){let _=u[0]*u[1]*(u[2]+1),D={dataId:r.dataId,shape:[1,_,e.inChannels],dtype:r.dtype},B=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,S.assert(tn(c.shape,D.shape),()=>`packed reshape ${c.shape} to ${D.shape} isn't free`);let V=z({inputs:{x:t},backend:o,attrs:{shape:[1,e.inChannels,e.outChannels]}});w.push(V);let U=un({a:D,b:V,backend:o,transposeA:h,transposeB:g,bias:n,activation:a,preluActivationWeights:s,leakyreluAlpha:i}),H=o.texData.get(U.dataId);S.assert(H.isPacked,()=>"batchMatMul result is expected to be packed"),c.shape=B,H.shape=e.outShape,x=Ut({inputs:{x:U},backend:o}),x.shape=e.outShape,w.push(U)}else{let _=e.outHeight*e.outWidth,D=z({inputs:{x:r},backend:o,attrs:{shape:d?[e.batchSize,_,e.inChannels]:[e.batchSize,e.inChannels,_]}}),B=z({inputs:{x:t},backend:o,attrs:{shape:[1,e.inChannels,e.outChannels]}}),V=un({a:d?D:B,b:d?B:D,transposeA:!d,transposeB:g,backend:o,bias:n,activation:a,preluActivationWeights:s,leakyreluAlpha:i});x=z({inputs:{x:V},backend:o,attrs:{shape:e.outShape}}),w.push(D),w.push(B),w.push(V)}for(let _ of w)o.disposeIntermediateTensorInfo(_);return x}function lp({x:r,filter:t,convInfo:e,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:i=0,activation:a=null}){let{filterWidth:u,filterHeight:c,inChannels:l,outWidth:p,outHeight:m,dataFormat:d}=e,h=d==="channelsLast",g=u*c*l,x=m*p,w=[e.batchSize,g,x],N=!0,k=!1,_=[];if(s!=null){let Bt=up(s.shape,h);Bt!=null&&(s=z({inputs:{x:s},backend:o,attrs:{shape:Bt}}),_.push(s))}if(n!=null){let Bt=up(n.shape,h);Bt!=null&&(n=z({inputs:{x:n},backend:o,attrs:{shape:Bt}}),_.push(n))}let D=z({inputs:{x:t},backend:o,attrs:{shape:[1,g,S.sizeFromShape(t.shape)/g]}});_.push(D);let B=new ap(w,e),V=[r.shape,[e.padInfo.top,e.padInfo.left],[e.strideHeight,e.strideWidth],[e.dilationHeight,e.dilationWidth],[e.inChannels],[e.filterWidth*e.inChannels],[e.outWidth]],U=o.runWebGLProgram(B,[r],"float32",V),H=z({inputs:{x:U},backend:o,attrs:{shape:w}});_.push(U),_.push(H);let W=n!=null,j=s!=null,Z=a==="leakyrelu",lt=a?Gr(a,!0):null,it=new xs(h?H.shape:D.shape,h?D.shape:H.shape,h?[e.batchSize,x,e.outChannels]:[e.batchSize,e.outChannels,x],N,k,W,lt,j,Z),mt=h?[H,D]:[D,H];if(n&&mt.push(n),j&&mt.push(s),Z){let Bt=o.makeTensorInfo([],"float32",S.createScalarValue(i,"float32"));mt.push(Bt),_.push(Bt)}let jt=o.runWebGLProgram(it,mt,"float32"),Gt=z({inputs:{x:jt},backend:o,attrs:{shape:e.outShape}});_.push(jt);for(let Bt of _)o.disposeIntermediateTensorInfo(Bt);return Gt}function bD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s}=t,{strides:i,pad:a,dataFormat:u,dilations:c,dimRoundingMode:l}=o,p=A.convertConv2DDataFormat(u),m=A.computeConv2DInfo(n.shape,s.shape,i,c,a,l,!1,p),d;if(m.filterHeight===1&&m.filterWidth===1&&m.dilationHeight===1&&m.dilationWidth===1&&m.strideHeight===1&&m.strideWidth===1&&(m.padInfo.type==="SAME"||m.padInfo.type==="VALID"))d=cp({x:n,filter:s,convInfo:m,backend:e});else if(m.strideWidth<=2&&p==="channelsLast"&&O().getBool("WEBGL_EXP_CONV")){let g=new vs(m),x=[[m.padInfo.top,m.padInfo.left],[m.strideHeight,m.strideWidth],[m.dilationHeight,m.dilationWidth],[m.inHeight,m.inWidth]];d=e.runWebGLProgram(g,[n,s],"float32",x)}else if(O().getBool("WEBGL_CONV_IM2COL"))d=lp({x:n,filter:s,convInfo:m,backend:e});else{let g=new bs(m);d=e.runWebGLProgram(g,[n,s],"float32")}let h=z({inputs:{x:d},backend:e,attrs:{shape:m.outShape}});return e.disposeIntermediateTensorInfo(d),h}var Rw={kernelName:fa,backendName:"webgl",kernelFunc:bD};var pp=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let e=t.strideHeight,o=t.strideWidth,n=t.padInfo.top,s=t.padInfo.left,i=t.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${n};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${o} - ${s};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              if (${i}) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},mp=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let e=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,i=t.dataFormat==="channelsLast",a=e-1-t.padInfo.top,u=o-1-t.padInfo.left,c=i?1:2,l=i?2:3,p=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${u});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${p}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${l}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${o} - 1 - wC;

            for (int d2 = 0; d2 < ${t.outChannels}; d2++) {

              if (${i}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},fp=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let e=t.strideDepth,o=t.strideHeight,n=t.strideWidth,s=t.padInfo.front,i=t.padInfo.top,a=t.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yF = 0; yF < ${t.outDepth}; yF++) {
            int xF = wF + yF * ${e} - ${s};

            if (xF < 0 || xF >= ${t.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${t.outHeight}; yR++) {
              int xR = wR + yR * ${o} - ${i};

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${t.outWidth}; yC++) {
                int xC = wC + yC * ${n} - ${a};

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},dp=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let e=t.filterDepth,o=t.filterHeight,n=t.filterWidth,s=t.strideDepth,i=t.strideHeight,a=t.strideWidth,u=e-1-t.padInfo.front,c=o-1-t.padInfo.top,l=n-1-t.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${u}, ${c}, ${l});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${e}; wF++) {
          float dyF = float(dyFCorner + wF) / ${s}.0;

          if (dyF < 0.0 || dyF >= ${t.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${e} - 1 - wF;

          for (int wR = 0; wR < ${o}; wR++) {
            float dyR = float(dyRCorner + wR) / ${i}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${o} - 1 - wR;

            for (int wC = 0; wC < ${n}; wC++) {
              float dyC = float(dyCCorner + wC) / ${a}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${n} - 1 - wC;

              for (int d2 = 0; d2 < ${t.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function vD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,dy:s}=t,{strides:i,pad:a,dataFormat:u,dimRoundingMode:c,filterShape:l}=o,p=A.convertConv2DDataFormat(u),m=A.computeConv2DInfo(n.shape,l,i,1,a,c,!1,p),d=new pp(m);return e.runWebGLProgram(d,[n,s],"float32")}var Dw={kernelName:da,backendName:"webgl",kernelFunc:vD};function wD(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,filter:s}=t,{inputShape:i,strides:a,pad:u,dataFormat:c,dimRoundingMode:l}=o,p=A.convertConv2DDataFormat(c),m=A.computeConv2DInfo(i,s.shape,a,1,u,l,!1,p),d=new mp(m);return e.runWebGLProgram(d,[n,s],"float32")}var Fw={kernelName:ha,backendName:"webgl",kernelFunc:wD};function TD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s}=t,{strides:i,pad:a,dilations:u}=o,c=A.computeConv3DInfo(n.shape,s.shape,i,u,a),l=new ip(c);return e.runWebGLProgram(l,[n,s],"float32")}var Ow={kernelName:ga,backendName:"webgl",kernelFunc:TD};function CD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,dy:s}=t,{strides:i,pad:a,filterShape:u}=o,c=A.computeConv3DInfo(n.shape,u,i,1,a),l=new fp(c);return e.runWebGLProgram(l,[n,s],"float32")}var Pw={kernelName:Ng,backendName:"webgl",kernelFunc:CD};function SD(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,filter:s}=t,{pad:i,strides:a,inputShape:u}=o,c=A.computeConv3DInfo(u,s.shape,a,1,i),l=new dp(c);return e.runWebGLProgram(l,[n,s],"float32")}var Lw={kernelName:xa,backendName:"webgl",kernelFunc:SD};var ND=rr+`
  return cos(x);
`,ED=Y({opSnippet:ND}),Bw={kernelName:ya,backendName:"webgl",kernelFunc:ED};var $D=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,ID=Y({opSnippet:$D}),Vw={kernelName:ba,backendName:"webgl",kernelFunc:ID};var hp=class{constructor(t,e,o,n,s){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];let[i,a,u,c]=t,[l]=e,[p,m]=o;this.outputShape=[l,p,m,c];let d=n==="bilinear"?1:0,[h,g]=[`${a-1}.0`,`${u-1}.0`],[x,w,N]=p>1?[`${(a-1)/(p-1)}`,"(y2-y1) * height_ratio",`y1*${h} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${h}`],[k,_,D]=m>1?[`${(u-1)/(m-1)}`,"(x2-x1) * width_ratio",`x1*${g} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${g}`];this.userCode=`
      const float height_ratio = float(${x});
      const float width_ratio = float(${k});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${i}) {
          return;
        }

        float height_scale = ${w};
        float width_scale = ${_};

        float in_y = ${N};
        if( in_y < 0.0 || in_y > ${h} ) {
          setOutput(float(${s}));
          return;
        }
        float in_x = ${D};
        if( in_x < 0.0 || in_x > ${g} ) {
          setOutput(float(${s}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${d} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}};var kD=r=>{let{inputs:t,backend:e,attrs:o}=r,{image:n,boxes:s,boxInd:i}=t,{cropSize:a,method:u,extrapolationValue:c}=o,l=new hp(n.shape,s.shape,a,u,c);return e.runWebGLProgram(l,[n,s,i],"float32")},Mw={kernelName:Ta,backendName:"webgl",kernelFunc:kD};var ln;(function(r){r.Prod="*",r.Sum="+"})(ln||(ln={}));var Ci=class{constructor(t,e,o,n){this.op=t,this.outputShape=e,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];let s=this.outputShape.length,i=this.op===ln.Prod?"1.0":"0.0",a=o?i:`getX(${Uw(s,"coords",this.op)})`,u=this.outputShape[this.outputShape.length-1],c="",l="";o?(c=n?`end != ${u-1}`:"end != 0",l=n?"end + 1":"end - 1"):(c=n?`end + pow2 < ${u}`:"end >= pow2",l=n?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${nt(s)} coords = getOutputCoords();
        int end = ${Gw(s,"coords",this.op)};
        float val = ${a};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${l};
          ${Gw(s,"coords",this.op)} = idx;
          val ${this.op}= getX(${Uw(s,"coords",this.op)});
        }
        setOutput(val);
      }
    `}};function Uw(r,t,e){if(r===1)return`${t}`;if(r===2)return`${t}.x, ${t}.y`;if(r===3)return`${t}.x, ${t}.y, ${t}.z`;if(r===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${e} for rank ${r} is not yet supported`)}function Gw(r,t,e){if(r===1)return`${t}`;if(r===2)return`${t}.y`;if(r===3)return`${t}.z`;if(r===4)return`${t}.w`;throw new Error(`Cumulative ${e} for rank ${r} is not yet supported`)}function gp(r,t,e,o,n,s){let i=t.shape.length,a=A.getAxesPermutation([o],i),u=t;a!=null&&(u=At({inputs:{x:t},backend:e,attrs:{perm:a}}));let c=A.getInnerMostAxes(1,i)[0];if(c!==i-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${o}`);let l=u.shape[c],p=Ut({inputs:{x:u},backend:e});for(let m=0;m<=Math.ceil(Math.log2(l))-1;m++){let d=new Ci(r,u.shape,!1,s),h=[[m]],g=p;p=e.runWebGLProgram(d,[p],p.dtype,h),e.disposeIntermediateTensorInfo(g)}if(n){let m=new Ci(r,u.shape,n,s),d=p;p=e.runWebGLProgram(m,[p],p.dtype),e.disposeIntermediateTensorInfo(d)}if(a!=null){let m=A.getUndoAxesPermutation(a),d=At({inputs:{x:p},backend:e,attrs:{perm:m}});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(u),d}return p}function _D(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,exclusive:i,reverse:a}=o;return gp(ln.Prod,n,e,s,i,a)}var Ww={kernelName:va,backendName:"webgl",kernelFunc:_D};function AD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,exclusive:i,reverse:a}=o;return gp(ln.Sum,n,e,s,i,a)}var zw={kernelName:wa,backendName:"webgl",kernelFunc:AD};function RD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,weights:s}=t,{size:i,binaryOutput:a}=o;if(n.shape.length===1){let u=e.readSync(n.dataId),c=e.readSync(s.dataId),l=Al(u,c,s.dtype,s.shape,i);return e.makeTensorInfo([i],s.dtype,l)}else if(n.shape.length===2){let u=e.bufferSync(n),c=e.bufferSync(s),l=Rb(u,c,i,a);return e.makeTensorInfo(l.shape,s.dtype,l.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${n.shape.length}.`)}var Hw={kernelName:Ca,backendName:"webgl",kernelFunc:RD};var xp=class{constructor(t,e,o){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=o,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${e};
      int offset_h = imod(h, ${e});
      int in_w = w / ${e};
      int offset_w = imod(w, ${e});
      int offset_d = (offset_h * ${e} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}};function DD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{blockSize:s,dataFormat:i}=o,a=n.shape[0],u=i==="NHWC"?n.shape[1]:n.shape[2],c=i==="NHWC"?n.shape[2]:n.shape[3],l=i==="NHWC"?n.shape[3]:n.shape[1],p=u*s,m=c*s,d=l/(s*s),h=i==="NHWC"?[a,p,m,d]:[a,d,p,m],g=new xp(h,s,i);return e.runWebGLProgram(g,[n],n.dtype)}var Kw={kernelName:Sa,backendName:"webgl",kernelFunc:DD};var ws=class{constructor(t,e=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Et(this.outputShape.length);let i=t.filterHeight,a=t.filterWidth,u=t.outChannels/t.inChannels,c="",l="";o&&(n?c=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?c=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:c=`
          float activation(float x) {
            ${o}
          }
        `,l="result = activation(result);");let p=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${u};
        int q = d2 - d1 * ${u};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${i}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${a}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${p}
        ${l}
        setOutput(result);
      }
    `}};var Ts=class{constructor(t,e=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=Et(this.outputShape.length);let i=t.outChannels/t.inChannels,a=t.padInfo.left,u=t.strideWidth,c=t.dilationWidth,l=t.filterHeight,p=t.filterWidth,m=p,d=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let w=0;w<p;w++)d+=`
          vec4 xTexelC${w*2};
          int xTexelC${w*2}Ready;
          vec4 xTexelC${w*2+1};
          int xTexelC${w*2+1}Ready;
          vec4 xC${w};`;d+=`
    for (int r = 0; r < ${l}; r++) {
      `;for(let w=0;w<p;w++)d+=`
          xTexelC${w*2} = vec4(0.0);
          xTexelC${w*2}Ready = 0;
          xTexelC${w*2+1} = vec4(0.0);
          xTexelC${w*2+1}Ready = 0;
          xC${w} = vec4(0.0);`;d+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let w=0;w<(m+1)/2;w++){let N=w*2;if(d+=`
          xC = xCCorner + ${N*c};
          `,u===1){if(N<p&&(a%2===1?(d+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${N}Ready == 0) {
                  xTexelC${N} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${N}.zw = vec2(0.0);
                  }
                  xTexelC${N}Ready = 1;
                }
              `,c===1&&N>0?d+=`
                xC${N} = vec4(xTexelC${N-2}.zw, xTexelC${N}.xy);
                `:d+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${N} = vec4(previous.zw, xTexelC${N}.xy);
                  } else {
                    xC${N} = vec4(0.0, 0.0, xTexelC${N}.xy);
                  }
                  `):d+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${N}Ready == 0) {
                  xTexelC${N} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${N}.zw = vec2(0.0);
                  }
                  xTexelC${N}Ready = 1;
                }

                xC${N} = xTexelC${N};
                `,N+1<p)){let k=a%2===0?S.nearestLargerEven(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(d+=`
                  xCOffset = xC + imod(pads[1], 2) + ${k};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${N+1}Ready == 0) {
                    xTexelC${N+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${N+1}.zw = vec2(0.0);
                    }
                    xTexelC${N+1}Ready = 1;
                  }
                  `,c>1?d+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${N+1} = vec4(previous.zw, xTexelC${N+1}.xy);
                    } else {
                     xC${N+1} = vec4(0.0, 0.0, xTexelC${N+1}.xy);
                    }
                    `:d+=`
                    xC${N+1} = vec4(xTexelC${N}.zw, xTexelC${N+1}.xy);
                    `):k===1?d+=`
                    xC${N+1} = xTexelC${N};
                    `:d+=`
                    xCOffset = xC + ${k};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${N+1}Ready == 0) {
                      xTexelC${N+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${N+1}.zw = vec2(0.0);
                      }
                      xTexelC${N+1}Ready = 1;
                    }

                    xC${N+1} = xTexelC${N+1};
                    `}}else N<p&&(a%2===1?(d+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${N}Ready == 0) {
                  xTexelC${N} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${N}.zw = vec2(0.0);
                  }
                  xTexelC${N}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${N+1}Ready == 0) {
                  xTexelC${N+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${N+1}.zw = vec2(0.0);
                  }
                  xTexelC${N+1}Ready = 1;
                }

                xC${N} = vec4(xTexelC${N}.zw, xTexelC${N+1}.zw);
              `,N+1<p&&(d+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${N+1} = vec4(xTexelC${N+1}.xy, final.xy);
                `)):(d+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${N}Ready == 0) {
                  xTexelC${N} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${N}.zw = vec2(0.0);
                  }
                  xTexelC${N}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${N+1}Ready == 0) {
                  xTexelC${N+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${N+1}.zw = vec2(0.);
                  }
                  xTexelC${N+1}Ready = 1;
                }

                xC${N} = vec4(
                  xTexelC${N}.xy, xTexelC${N+1}.xy);
              `,N+1<p&&(d+=`
                  xC${N+1} = vec4(xTexelC${N}.zw, xTexelC${N+1}.zw);
                `)));N<p&&(d+=`
            wTexel = getW(r, ${N}, d1, q);
            dotProd += xC${N} * vec4(wTexel.xz, wTexel.xz);
          `,N+1<p&&(d+=`
              wTexel = getW(r, ${N+1}, d1, q);
              dotProd += xC${N+1} * vec4(wTexel.xz, wTexel.xz);
            `))}d+=`
    }
  `,d+=`
      }
    `;let h="",g="";o&&(n?h=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?h=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:h=`vec4 activation(vec4 x) {
          ${o}
        }`,g="result = activation(result);");let x=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${h}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${i};
        int q = d2 - d1 * ${i};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${d}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${x}
        ${g}
        setOutput(result);
      }
    `}};function FD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s}=t,{strides:i,pad:a,dilations:u,dimRoundingMode:c}=o,l=u;l==null&&(l=[1,1]),S.assert(A.eitherStridesOrDilationsAreOne(i,l),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);let p=A.computeConv2DInfo(n.shape,s.shape,i,l,a,c,!0),m;O().getBool("WEBGL_PACK_DEPTHWISECONV")&&p.strideWidth<=2&&p.outChannels/p.inChannels===1?m=new Ts(p):m=new ws(p);let d=[[p.padInfo.top,p.padInfo.left],[p.strideHeight,p.strideWidth],[p.dilationHeight,p.dilationWidth],[p.inHeight,p.inWidth]];return e.runWebGLProgram(m,[n,s],"float32",d)}var qw={kernelName:Na,backendName:"webgl",kernelFunc:FD};var yp=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let e=t.strideHeight,o=t.strideWidth,n=t.padInfo.top,s=t.padInfo.left,i=t.outChannels/t.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${i} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${n};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${o} - ${s};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}},bp=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let e=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,i=e-1-t.padInfo.top,a=o-1-t.padInfo.left,u=t.outChannels/t.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${a});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${o} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${u}; dm++) {
              int d2 = d1 * ${u} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function OD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,dy:s}=t,{strides:i,dilations:a,pad:u,dimRoundingMode:c,filterShape:l}=o,p=A.computeConv2DInfo(n.shape,l,i,a,u,c,!0),m=new yp(p);return e.runWebGLProgram(m,[n,s],"float32")}var jw={kernelName:Ea,backendName:"webgl",kernelFunc:OD};function PD(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,filter:s}=t,{strides:i,dilations:a,pad:u,dimRoundingMode:c,inputShape:l}=o,p=A.computeConv2DInfo(l,s.shape,i,a,u,c,!0),m=new bp(p);return e.runWebGLProgram(m,[n,s],"float32")}var Xw={kernelName:$a,backendName:"webgl",kernelFunc:PD};var vp=class{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function LD(r){let{inputs:t,backend:e}=r,{x:o}=t,n=[...o.shape,...o.shape],s=S.sizeFromShape(o.shape),i=z({inputs:{x:o},backend:e,attrs:{shape:[s]}}),a=new vp(s),u=e.runWebGLProgram(a,[i],i.dtype),c=z({inputs:{x:u},backend:e,attrs:{shape:n}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(u),c}var Yw={kernelName:Ia,backendName:"webgl",kernelFunc:LD};var wp=class{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;let{inHeight:e,inWidth:o,padInfo:n,strideHeight:s,strideWidth:i,filterHeight:a,filterWidth:u,dilationHeight:c,dilationWidth:l}=t,{top:p,left:m}=n;this.userCode=`
      const ivec2 strides = ivec2(${s}, ${i});
      const ivec2 pads = ivec2(${p}, ${m});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${a}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${e}) {
            for (int w = 0; w < ${u}; w++) {
              int wIn = wBeg + w * ${l};

              if (wIn >= 0 && wIn < ${o}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}};function BD(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s}=t,{strides:i,pad:a,dilations:u}=o,c=A.computeDilation2DInfo(n.shape,s.shape,i,a,"NHWC",u),l,p=new wp(c);l=e.runWebGLProgram(p,[n,s],"float32");let m=z({inputs:{x:l},backend:e,attrs:{shape:c.outShape}});return e.disposeIntermediateTensorInfo(l),m}var Qw={kernelName:ka,backendName:"webgl",kernelFunc:BD};function VD(r){let{inputs:t,backend:e,attrs:o}=r,{equation:n}=o,s=t,{allDims:i,summedDims:a,idDims:u}=A.decodeEinsumEquation(n,s.length);A.checkEinsumDimSizes(i.length,u,s);let{path:c,steps:l}=A.getEinsumComputePath(a,u),p=l.length,m=null,d=i.length,h=[];for(let g=0;g<p;++g){for(let x of l[g]){let{permutationIndices:w,expandDims:N}=A.getEinsumPermutation(d,u[x]),k;A.isIdentityPermutation(w)?k=s[x]:(k=At({inputs:{x:s[x]},backend:e,attrs:{perm:w}}),h.push(k));let _=k.shape.slice();for(let D=0;D<N.length;++D)_.splice(N[D],0,1);S.arraysEqual(k.shape,_)||(k=z({inputs:{x:k},backend:e,attrs:{shape:_}}),h.push(k)),m===null?m=k:(m=wi({inputs:{a:k,b:m},backend:e}),h.push(m))}g<p-1&&(c[g]>=0&&(m=an({inputs:{x:m},backend:e,attrs:{axis:c[g]-(i.length-d),keepDims:!1}}),h.push(m)),d--)}for(let g of h)g!==m&&e.disposeIntermediateTensorInfo(g);return m}var Zw={kernelName:Aa,backendName:"webgl",kernelFunc:VD};var MD="return (x >= 0.0) ? x : (exp(x) - 1.0);",UD=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,GD=Y({opSnippet:MD,packedOpSnippet:UD}),Jw={kernelName:Ra,backendName:"webgl",kernelFunc:GD};var WD="return (b >= 1.0) ? a : a * (b + 1.0);",zD=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,HD=r=>{let{inputs:t,backend:e}=r,{dy:o,y:n}=t,s=O().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new er(zD,o.shape,n.shape):new Ue(WD,o.shape,n.shape);return e.runWebGLProgram(s,[o,n],o.dtype)},tT={kernelName:Eg,backendName:"webgl",kernelFunc:HD};var KD=`
  return vec4(equal(a, b));
`,qD="return float(a == b);",jD=wt({opSnippet:qD,packedOpSnippet:KD,dtype:"bool",cpuKernelImpl:Pb}),eT={kernelName:wn,backendName:"webgl",kernelFunc:jD};var XD=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${A.ERF_P};
  float a1 = ${A.ERF_A1};
  float a2 = ${A.ERF_A2};
  float a3 = ${A.ERF_A3};
  float a4 = ${A.ERF_A4};
  float a5 = ${A.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,YD=Y({opSnippet:XD}),rT={kernelName:Da,backendName:"webgl",kernelFunc:YD};var QD=rr+`
  return exp(x);
`,ZD=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Fd=Y({opSnippet:QD,packedOpSnippet:ZD,cpuKernelImpl:Lb,dtype:"float32"}),oT={kernelName:Tn,backendName:"webgl",kernelFunc:Fd};function Tp(r){let{inputs:t,attrs:e,backend:o}=r,{dim:n}=e,{input:s}=t,i=s.shape.length,a=s.shape.slice(),u=n;return n<0&&(S.assert(-(i+1)<=n,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),u=i+n+1),a.splice(u,0,1),z({inputs:{x:s},backend:o,attrs:{shape:a}})}var nT={kernelName:Fa,backendName:"webgl",kernelFunc:Tp};var sT="return exp(x) - 1.0;",JD=Y({opSnippet:sT,packedOpSnippet:sT,cpuKernelImpl:Bb}),iT={kernelName:Cn,backendName:"webgl",kernelFunc:JD};var Si=class{constructor(t,e,o){this.variableNames=["real","imag"];let n=e[1];this.outputShape=e;let s=o?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,i=o?`${n}.0`:"1.0",a;if(t==="real")a="return real * expR - imag * expI;";else if(t==="imag")a="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
      const float exponentMultiplier = ${s};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${a}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${n});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${n}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${i};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};function Cp(r,t,e){let o=e.texData.get(r.dataId),n=S.sizeFromShape(r.shape),s=r.shape[r.shape.length-1],i=n/s,a=z({inputs:{x:r},backend:e,attrs:{shape:[i,s]}}),u=a.shape,c=new Si("real",u,t),l=new Si("imag",u,t),p=[{dataId:o.complexTensorInfos.real.dataId,dtype:o.complexTensorInfos.real.dtype,shape:u},{dataId:o.complexTensorInfos.imag.dataId,dtype:o.complexTensorInfos.imag.dtype,shape:u}],m=e.runWebGLProgram(c,p,"float32"),d=e.runWebGLProgram(l,p,"float32"),h=Se({inputs:{real:m,imag:d},backend:e});e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(d);let g=z({inputs:{x:h},backend:e,attrs:{shape:r.shape}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(h),g}function tF(r){let{inputs:t,backend:e}=r,{input:o}=t;return Cp(o,!1,e)}var aT={kernelName:Oa,backendName:"webgl",kernelFunc:tF};var Sp=class{constructor(t,e){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function zr(r){let{backend:t,attrs:e}=r,{shape:o,value:n}=e,{dtype:s}=e;if(s=s||S.inferDtype(n),s==="string"){let i=S.getArrayFromDType(s,S.sizeFromShape(o));return i.fill(n),t.makeTensorInfo(o,s,i)}else{let i=new Sp(o,n),a=[[n]];return t.runWebGLProgram(i,[],s,a)}}var uT={kernelName:Pa,backendName:"webgl",kernelFunc:zr};var Np=class{constructor(t){this.variableNames=["Image"],this.outputShape=[];let e=t[2];this.outputShape=t,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${e} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${e}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}};var cT={kernelName:La,backendName:"webgl",kernelFunc:({inputs:r,backend:t})=>{let{image:e}=r,o=t,n=new Np(e.shape);return o.runWebGLProgram(n,[e],e.dtype)}};var lT="return floor(x);",eF=Y({opSnippet:lT,packedOpSnippet:lT,cpuKernelImpl:Vb}),pT={kernelName:Sn,backendName:"webgl",kernelFunc:eF};var rF=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,oF=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,nF=wt({opSnippet:rF,packedOpSnippet:oF,dtype:"int32"}),mT={kernelName:Ba,backendName:"webgl",kernelFunc:nF};var Ep=class{constructor(t){this.variableNames=["A"];let e=Dt(),[o,n]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${n}.0, ${o}.0);

        vec4 values = ${e.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}};var $p=class{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;let e=Dt(),[o,n]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${n}.0, ${o}.0);
            vec4 values = ${e.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${e.output} = result;
      }
    `}};var fT={kernelName:Hs,backendName:"webgl",kernelFunc:sF},Cs,Od=O().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function sF(r){let{inputs:t,backend:e,attrs:o}=r,{pixels:n}=t,{numChannels:s}=o,i=typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement,a=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,[u,c]=i?[n.videoWidth,n.videoHeight]:[n.width,n.height],l=[c,u],p=[c,u,s];if(a||i){let g=O().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(Cs==null||g!==Od)&&(Od=g,Cs=document.createElement("canvas").getContext("2d",{willReadFrequently:Od})),Cs.canvas.width=u,Cs.canvas.height=c,Cs.drawImage(n,0,0,u,c),n=Cs.canvas}let m=e.makeTensorInfo(l,"int32");e.texData.get(m.dataId).usage=se.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(m.dataId),n);let d=O().getBool("WEBGL_PACK")?new $p(p):new Ep(p),h=e.runWebGLProgram(d,[m],"int32");return e.disposeData(m.dataId),h}function iF(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s,bias:i,preluActivationWeights:a}=t,{strides:u,pad:c,dataFormat:l,dilations:p,dimRoundingMode:m,activation:d,leakyreluAlpha:h}=o,g=A.convertConv2DDataFormat(l),x=A.computeConv2DInfo(n.shape,s.shape,u,p,c,m,!1,g),w,N=[],k=i!=null,_=a!=null,D=d==="leakyrelu",B=()=>{let U=[n,s],H=(W,j)=>{if(j==="NCHW"&&W.shape.length===1&&W.shape[0]!==1){let Z=z({inputs:{x:W},backend:e,attrs:{shape:[W.shape[0],1,1]}});return N.push(Z),Z}return W};if(k&&U.push(H(i,l)),_&&U.push(H(a,l)),D){let W=e.makeTensorInfo([],"float32",S.createScalarValue(h,"float32"));U.push(W),N.push(W)}return U};if(x.filterHeight===1&&x.filterWidth===1&&x.dilationHeight===1&&x.dilationWidth===1&&x.strideHeight===1&&x.strideWidth===1&&(x.padInfo.type==="SAME"||x.padInfo.type==="VALID"))w=cp({x:n,filter:s,convInfo:x,backend:e,bias:i,activation:d,preluActivationWeights:a,leakyreluAlpha:h});else if(x.strideWidth<=2&&g==="channelsLast"&&O().getBool("WEBGL_EXP_CONV")){let U=d?Gr(d,!0):null,H=new vs(x,k,U,_,D),W=[[x.padInfo.top,x.padInfo.left],[x.strideHeight,x.strideWidth],[x.dilationHeight,x.dilationWidth],[x.inHeight,x.inWidth]],j=B();w=e.runWebGLProgram(H,j,"float32",W)}else if(O().getBool("WEBGL_CONV_IM2COL"))w=lp({x:n,filter:s,convInfo:x,backend:e,bias:i,activation:d,preluActivationWeights:a,leakyreluAlpha:h});else{let U=d?Gr(d,!1):null,H=new bs(x,k,U,_,D),W=B();w=e.runWebGLProgram(H,W,"float32")}let V=z({inputs:{x:w},backend:e,attrs:{shape:x.outShape}});return N.push(w),N.forEach(U=>e.disposeIntermediateTensorInfo(U)),V}var dT={kernelName:qs,backendName:"webgl",kernelFunc:iF};function aF(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s,bias:i,preluActivationWeights:a}=t,{strides:u,pad:c,dilations:l,dimRoundingMode:p,activation:m,leakyreluAlpha:d}=o,h=[],g=l;g==null&&(g=[1,1]),S.assert(A.eitherStridesOrDilationsAreOne(u,g),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${g}'`);let x=A.computeConv2DInfo(n.shape,s.shape,u,g,c,p,!0),w=O().getBool("WEBGL_PACK_DEPTHWISECONV")&&x.strideWidth<=2&&x.outChannels/x.inChannels===1,N=m?Gr(m,w):null,k=[n,s],_=i!=null,D=a!=null,B=m==="leakyrelu";if(_&&k.push(i),D&&k.push(a),B){let W=e.makeTensorInfo([],"float32",S.createScalarValue(d,"float32"));k.push(W),h.push(W)}let V;w?V=new Ts(x,_,N,D,B):V=new ws(x,_,N,D,B);let U=[[x.padInfo.top,x.padInfo.left],[x.strideHeight,x.strideWidth],[x.dilationHeight,x.dilationWidth],[x.inHeight,x.inWidth]],H=e.runWebGLProgram(V,k,"float32",U);return h.forEach(W=>e.disposeIntermediateTensorInfo(W)),H}var hT={kernelName:js,backendName:"webgl",kernelFunc:aF};var Ip=class{constructor(t,e,o,n){this.sliceDim=t,this.strides=e,this.paramsShape=n,this.variableNames=["x","indices"],this.outputShape=o;let s=nt(e.length),i=nt(o.length),a=this.sliceDim>1?"strides[j]":"strides",u=nt(n.length),c=n.length>1?"paramsShape[j]":"paramsShape";this.userCode=`
        ${s} strides = ${s}(${this.strides});
        ${u} paramsShape = ${u}(${this.paramsShape});
         void main() {
          ${i} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;
          for (int j = 0; j < ${this.sliceDim}; j++) {
            int index = round(getIndices(coords[0], j));
            out_of_bounds = out_of_bounds || index < 0;
            out_of_bounds = out_of_bounds || index >= ${c};
            flattenIndex += index * ${a};
          }
          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};function uF(r){let{inputs:t,backend:e}=r,{params:o,indices:n}=t,s=n.shape,i=s[s.length-1],a=S.sizeFromShape(o.shape),[u,c,l,p]=A.prepareAndValidate(o,n),m=z({inputs:{x:n},backend:e,attrs:{shape:[c,i]}}),d=z({inputs:{x:o},backend:e,attrs:{shape:[S.sizeFromShape(o.shape)/l,l]}});if(e.shouldExecuteOnCPU([o,n])||o.dtype==="string"){let w=e.readSync(n.dataId),N=e.bufferSync(o),k=Mb(w,N,o.dtype,c,i,l,p,o.shape,a);return e.makeTensorInfo(u,o.dtype,k.values)}let h=new Ip(i,p,[c,l],o.shape),g=e.runWebGLProgram(h,[d,m],d.dtype),x=z({inputs:{x:g},backend:e,attrs:{shape:u}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(g),x}var gT={kernelName:Ua,backendName:"webgl",kernelFunc:uF};var kp=class{constructor(t,e){this.variableNames=["A","indices"],this.outputShape=e,this.rank=e.length;let o=nt(this.rank),n=cF(t,2);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${n}));
      }
    `}};function cF(r,t){let e=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[];for(let n=0;n<r.length;n++)n===2?o.push("index"):o.push(`${e[n]}`);return o.join()}function Pd(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,indices:s}=t,{axis:i,batchDims:a}=o,u=S.parseAxisParam(i,n.shape)[0];if(O().get("DEBUG")){let N=e.readSync(s.dataId),k=n.shape[u];for(let _=0;_<N.length;++_){let D=N[_];S.assert(D<=k-1&&D>=0,()=>`GatherV2: the index value ${D} is not in [0, ${k-1}]`)}}let c=A.segment_util.collectGatherOpShapeInfo(n,s,u,a),l=S.sizeFromShape(s.shape),p=[],m=z({inputs:{x:n},backend:e,attrs:{shape:[c.batchSize,c.outerSize,c.dimSize,c.sliceSize]}}),d=z({inputs:{x:s},backend:e,attrs:{shape:[c.batchSize,l/c.batchSize]}});p.push(m),p.push(d);let h=[c.batchSize,c.outerSize,l/c.batchSize,c.sliceSize];if(e.shouldExecuteOnCPU([n,s])||n.dtype==="string"){let N=e.bufferSync(d),k=e.bufferSync(m),_=Ub(k,N,h);return p.forEach(D=>e.disposeIntermediateTensorInfo(D)),e.makeTensorInfo(c.outputShape,_.dtype,_.values)}let g=new kp(m.shape,h),x=e.runWebGLProgram(g,[m,d],m.dtype);p.push(x);let w=z({inputs:{x},backend:e,attrs:{shape:c.outputShape}});return p.forEach(N=>e.disposeIntermediateTensorInfo(N)),w}var xT={kernelName:Ma,backendName:"webgl",kernelFunc:Pd};var lF="return float(a > b);",pF=`
  return vec4(greaterThan(a, b));
`,mF=wt({opSnippet:lF,packedOpSnippet:pF,cpuKernelImpl:Gb,dtype:"bool"}),yT={kernelName:Nn,backendName:"webgl",kernelFunc:mF};var fF="return float(a >= b);",dF=`
  return vec4(greaterThanEqual(a, b));
`,hF=wt({opSnippet:fF,packedOpSnippet:dF,dtype:"bool",cpuKernelImpl:Wb}),bT={kernelName:En,backendName:"webgl",kernelFunc:hF};function gF(r){let{inputs:t,backend:e}=r,{input:o}=t;return Cp(o,!0,e)}var vT={kernelName:Ga,backendName:"webgl",kernelFunc:gF};var xF="return float(!isnan(x) && !isinf(x));",yF=Y({opSnippet:xF,dtype:"bool"}),wT={kernelName:za,backendName:"webgl",kernelFunc:yF};var bF="return float(isinf(x));",vF=Y({opSnippet:bF,dtype:"bool"}),TT={kernelName:Ha,backendName:"webgl",kernelFunc:vF};var wF="return float(isnan(x));",TF=Y({opSnippet:wF,dtype:"bool"}),CT={kernelName:Ka,backendName:"webgl",kernelFunc:TF};var CF="return float(a < b);",SF=`
  return vec4(lessThan(a, b));
`,NF=wt({opSnippet:CF,packedOpSnippet:SF,cpuKernelImpl:zb,dtype:"bool"}),ST={kernelName:$n,backendName:"webgl",kernelFunc:NF};var EF="return float(a <= b);",$F=`
  return vec4(lessThanEqual(a, b));
`,IF=wt({opSnippet:EF,packedOpSnippet:$F,cpuKernelImpl:Hb,dtype:"bool"}),NT={kernelName:In,backendName:"webgl",kernelFunc:IF};function kF(r){let{backend:t,attrs:e}=r,{start:o,stop:n,num:s}=e,i=Kb(o,n,s);return t.makeTensorInfo([i.length],"float32",i)}var ET={kernelName:ja,backendName:"webgl",kernelFunc:kF};var _F=rr+`
  return x < 0.0 ? 0./0. : log(x);
`,AF=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,RF=Y({opSnippet:_F,packedOpSnippet:AF,cpuKernelImpl:qb}),$T={kernelName:kn,backendName:"webgl",kernelFunc:RF};var DF=rr+`
  return log(1.0 + x);
`,FF=Y({opSnippet:DF}),IT={kernelName:Xa,backendName:"webgl",kernelFunc:FF};var OF="return float(a >= 1.0 && b >= 1.0);",PF=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,LF=wt({opSnippet:OF,packedOpSnippet:PF,dtype:"bool"}),kT={kernelName:Ya,backendName:"webgl",kernelFunc:LF};var BF="return float(!(x >= 1.0));",VF=Y({opSnippet:BF}),_T={kernelName:Qa,backendName:"webgl",kernelFunc:VF};var MF="return float(a >= 1.0 || b >= 1.0);",UF=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,GF=wt({opSnippet:MF,packedOpSnippet:UF,dtype:"bool"}),AT={kernelName:Za,backendName:"webgl",kernelFunc:GF};var _p=class{constructor(t,e,o,n,s){this.variableNames=["x"],this.outputShape=[];let i=e,a=t[3]-1;this.outputShape=t;let u,c=`float(${o}) + float(${n}) * sum`;s===.5?u=`inversesqrt(${c})`:s===1?u=`1.0/(${c})`:u=`exp(log(${c}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${i}; j <= ${i}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${a}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${u};
        setOutput(val);
      }
    `}};var Ap=class{constructor(t,e,o,n,s){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let i=e,a=t[3]-1;this.outputShape=t;let u,c=`float(${o}) + float(${n}) * sum`;s===.5?u=`inversesqrt(${c})`:s===1?u=`1.0/(${c})`:u=`exp(log(${c}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${i};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${i}; j <= ${i}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${a}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${u};
        setOutput(result);
      }
    `}};var WF=r=>{let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{depthRadius:s,bias:i,alpha:a,beta:u}=o,c=O().getBool("WEBGL_PACK_NORMALIZATION")?new Ap(n.shape,s,i,a,u):new _p(n.shape,s,i,a,u);return e.runWebGLProgram(c,[n],n.dtype)},RT={kernelName:Ja,backendName:"webgl",kernelFunc:WF};var Rp=class{constructor(t,e,o,n,s){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=o,this.alpha=n,this.beta=s,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${e})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${e} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${n}) * norm + float(${o});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${n})
                * float(${s})
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${s});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}};var zF=r=>{let{inputs:t,backend:e,attrs:o}=r,{x:n,y:s,dy:i}=t,{depthRadius:a,bias:u,alpha:c,beta:l}=o,p=new Rp(n.shape,a,u,c,l);return e.runWebGLProgram(p,[n,s,i],n.dtype)},DT={kernelName:$g,backendName:"webgl",kernelFunc:zF};function FT(r,t,e,o){let n=S.sizeFromShape(t),i=S.sizeFromShape(r.shape)/n,a=z({inputs:{x:r},attrs:{shape:[i,n]},backend:o}),u=Ae(a,r.dtype,"max",o),c=z({inputs:{x:u},attrs:{shape:e},backend:o});return o.disposeIntermediateTensorInfo(a),o.disposeIntermediateTensorInfo(u),c}function Ld(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{reductionIndices:s,keepDims:i}=o,a=n.shape.length,u=S.parseAxisParam(s,n.shape),c=u,l=A.getAxesPermutation(c,a),p=l!=null,m=e.shouldExecuteOnCPU([n]),d=n;if(p){if(m){let k=e.texData.get(d.dataId).values,_=new Array(a);for(let V=0;V<_.length;V++)_[V]=n.shape[l[V]];let D=on(k,n.shape,n.dtype,l,_);d=e.makeTensorInfo(_,n.dtype);let B=e.texData.get(d.dataId);B.values=D}else d=bo(n,l,e);c=A.getInnerMostAxes(c.length,a)}A.assertAxesAreInnerMostDims("max",c,a);let[h,g]=A.computeOutAndReduceShapes(d.shape,c),x=h;i&&(x=A.expandShapeToKeepDim(h,u));let w;if(m){let k=e.texData.get(d.dataId).values,_=jb(k,S.sizeFromShape(g),x,n.dtype);w=e.makeTensorInfo(x,n.dtype);let D=e.texData.get(w.dataId);D.values=_}else w=FT(d,g,x,e);return p&&e.disposeIntermediateTensorInfo(d),w}var OT={kernelName:tu,backendName:"webgl",kernelFunc:Ld};var HF=Bl+`
  return max(a, b);
`,KF=`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  `+yo+`
  return result;
`,qF=wt({opSnippet:HF,packedOpSnippet:KF,cpuKernelImpl:Xb}),PT={kernelName:_n,backendName:"webgl",kernelFunc:qF};function jF(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t;_r(n,"maxPool");let{filterSize:s,strides:i,pad:a,dimRoundingMode:u}=o,c=1;S.assert(A.eitherStridesOrDilationsAreOne(i,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${c}'`);let l=A.computePool2DInfo(n.shape,s,i,c,a,u);if(l.filterWidth===1&&l.filterHeight===1&&S.arraysEqual(l.inShape,l.outShape))return Ut({inputs:{x:n},backend:e});let p=new fr(l,"max",!1);return e.runWebGLProgram(p,[n],n.dtype)}var LT={kernelName:eu,backendName:"webgl",kernelFunc:jF};function XF(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{filterSize:s,strides:i,pad:a,dataFormat:u,dimRoundingMode:c}=o,l=[1,1,1],p=A.computePool3DInfo(n.shape,s,i,l,a,c,u),m=new vo(p,"max",!1);return e.runWebGLProgram(m,[n],n.dtype)}var BT={kernelName:ru,backendName:"webgl",kernelFunc:XF};var Dp=class{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;let e=t.strideHeight,o=t.strideWidth,n=t.dilationHeight,s=t.effectiveFilterHeight,i=t.effectiveFilterWidth,a=s-1-t.padInfo.top,u=i-1-t.padInfo.left,c=s*i-1;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${u});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
          wR += ${n}) {
          float dyR = float(dyRCorner + wR) / ${e}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${i}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${i} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},Fp=class{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;let e=t.strideDepth,o=t.strideHeight,n=t.strideWidth,s=t.dilationDepth,i=t.dilationHeight,a=t.dilationWidth,u=t.effectiveFilterDepth,c=t.effectiveFilterHeight,l=t.effectiveFilterWidth,p=u-1-t.padInfo.front,m=c-1-t.padInfo.top,d=l-1-t.padInfo.left,h=u*c*l-1;this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${d});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${u};
           wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${e}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${i}) {
            float dyR = float(dyRCorner + wR) / ${o}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${l};
                wC += ${a}) {
              float dyC = float(dyCCorner + wC) / ${n}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${h} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${l} +
                  wR * ${l} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function YF(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,input:s}=t,i=s,{filterSize:a,strides:u,pad:c,dimRoundingMode:l}=o,p=[1,1,1],m=A.computePool3DInfo(i.shape,a,u,p,c,l),d=new vo(m,"max",!0),h=e.runWebGLProgram(d,[i],i.dtype),g=new Fp(m),x=e.runWebGLProgram(g,[n,h],i.dtype);return e.disposeIntermediateTensorInfo(h),x}var VT={kernelName:kg,backendName:"webgl",kernelFunc:YF};function QF(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,input:s,output:i}=t,a=s;_r([s,i],"maxPoolGrad");let{filterSize:u,strides:c,pad:l,dimRoundingMode:p}=o,m=A.computePool2DInfo(a.shape,u,c,1,l,p),d=!0,h=new fr(m,"max",d),g=e.runWebGLProgram(h,[a],a.dtype),x=new Dp(m),w=e.runWebGLProgram(x,[n,g],a.dtype);return e.disposeIntermediateTensorInfo(g),w}var MT={kernelName:Ig,backendName:"webgl",kernelFunc:QF};function UT(r,t,e,o){let n=new fr(e,"max",!1),s=o.runWebGLProgram(n,[r],"float32");n=new fr(e,"max",!0,!0,t);let i=o.runWebGLProgram(n,[r],"float32");return[s,i]}var GT={kernelName:ou,backendName:"webgl",kernelFunc:({inputs:r,attrs:t,backend:e})=>{let{x:o}=r,{filterSize:n,strides:s,pad:i,includeBatchInIndex:a}=t,u=e;S.assert(o.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.shape.length}.`);let c=[1,1];S.assert(A.eitherStridesOrDilationsAreOne(s,c),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${c}'`);let l=A.computePool2DInfo(o.shape,n,s,c,i),[p,m]=UT(o,a,l,u);return[p,m]}};function WT(r,t,e,o){let n=S.sizeFromShape(t),i=S.sizeFromShape(r.shape)/n,a=z({inputs:{x:r},attrs:{shape:[i,n]},backend:o}),u=Ae(a,"float32","mean",o),c=z({inputs:{x:u},attrs:{shape:e},backend:o});return o.disposeIntermediateTensorInfo(a),o.disposeIntermediateTensorInfo(u),c}var zT={kernelName:nu,backendName:"webgl",kernelFunc:({inputs:r,attrs:t,backend:e})=>{let{x:o}=r,{keepDims:n,axis:s}=t,i=e,a=o.shape.length,u=S.parseAxisParam(s,o.shape),c=u,l=A.getAxesPermutation(c,a),p=l!=null,m=i.shouldExecuteOnCPU([o]),d=[],h=o;if(p){if(m){let _=i.texData.get(h.dataId).values,D=new Array(a);for(let U=0;U<D.length;U++)D[U]=o.shape[l[U]];let B=on(_,o.shape,o.dtype,l,D);h=i.makeTensorInfo(D,o.dtype);let V=i.texData.get(h.dataId);V.values=B}else h=bo(o,l,i);d.push(h),c=A.getInnerMostAxes(c.length,a)}A.assertAxesAreInnerMostDims("sum",c,a);let[g,x]=A.computeOutAndReduceShapes(h.shape,c),w=g;n&&(w=A.expandShapeToKeepDim(g,u));let N=WT(h,x,w,i);for(let k of d)i.disposeIntermediateTensorInfo(k);return N}};function ZF(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,u=S.parseAxisParam(s,n.shape),c=u,l=A.getAxesPermutation(c,a),p=n;l!=null&&(p=At({inputs:{x:n},backend:e,attrs:{perm:l}}),c=A.getInnerMostAxes(c.length,n.shape.length)),A.assertAxesAreInnerMostDims("min",c,a);let[m,d]=A.computeOutAndReduceShapes(p.shape,c),h=S.sizeFromShape(d),g=z({inputs:{x:p},backend:e,attrs:{shape:[-1,h]}}),x=Ae(g,g.dtype,"min",e),w;if(i){let N=A.expandShapeToKeepDim(m,u);w=z({inputs:{x},backend:e,attrs:{shape:N}})}else w=z({inputs:{x},backend:e,attrs:{shape:m}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(x),l!=null&&e.disposeIntermediateTensorInfo(p),w}var HT={kernelName:su,backendName:"webgl",kernelFunc:ZF};var JF=Bl+`
  return min(a, b);
`,tO=`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  `+yo+`
  return result;
`,eO=wt({opSnippet:JF,packedOpSnippet:tO,cpuKernelImpl:Yb}),KT={kernelName:An,backendName:"webgl",kernelFunc:eO};var Op=class{constructor(t,e,o){this.variableNames=["x"],this.outputShape=e.map((l,p)=>l[0]+t[p]+l[1]);let n=t.length,s=nt(n),i=e.map(l=>l[0]).join(","),a=e.map((l,p)=>l[0]+t[p]).join(","),u=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n),c=o==="reflect"?0:1;if(n===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${i});
      ${s} end = ${s}(${a});

      void main() {
        ${s} outC = getOutputCoords();
        for (int i = 0; i < ${n}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${s} coords = outC - start;
        setOutput(getX(${u}));
      }
    `}};var Pp=class{constructor(t,e,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map((h,g)=>h[0]+t[g]+h[1]);let n=t.length,s=nt(n),i=e.map(h=>h[0]).join(","),a=e.map((h,g)=>h[0]+t[g]).join(","),u=Mt("rc",n),c=Mt("source",n),l=`${u[n-1]} < ${this.outputShape[n-1]}`,p=n===1?"source":`vec2(${c.slice(-2).join()})`,m=o==="reflect"?0:1,d="";if(n===1){let h=`
        ${s} source = rc;
        if (source < start) {
          source = start * 2 - source - ${m};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${m};
        }
        source -= start;
      `;d=`
        ${s} rc = outputLoc;
        ${h}
        result[0] = getChannel(getX(${c.join()}), ${p});
        ${u[n-1]} += 1;
        if(${l}) {
          ${h}
          result[1] = getChannel(getX(${c.join()}), ${p});
        }
      `}else{let h=`
        ${s} source = rc;
        ${s} lt = ${s}(lessThan(source, start));
        ${s} gte = ${s}(greaterThanEqual(source, end));
        ${s} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${m}) +
                gte * ((end - 1) * 2 - source + ${m});
        source -= start;
      `;d=`
        ${s} rc = outputLoc;
        ${h}
        result[0] = getChannel(getX(${c.join()}), ${p});
        ${u[n-1]} += 1;
        if(${l}) {
          ${h}
          result[1] = getChannel(getX(${c.join()}), ${p});
        }
        rc = outputLoc;
        ${u[n-2]} += 1;
        if(${u[n-2]} < ${this.outputShape[n-2]}) {
          ${h}
          result[2] = getChannel(getX(${c.join()}), ${p});
          ${u[n-1]} += 1;
          if(${l}) {
            ${h}
            result[3] = getChannel(getX(${c.join()}), ${p});
          }
        }
      `}this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${d}
        setOutput(result);
      }
    `}};var rO=({inputs:r,backend:t,attrs:e})=>{let{x:o}=r,{paddings:n,mode:s}=e,i=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Pp(o.shape,n,s):new Op(o.shape,n,s);return t.runWebGLProgram(i,[o],o.dtype)},qT={kernelName:iu,backendName:"webgl",kernelFunc:rO};var oO=`if (b == 0.0) return NAN;
  return mod(a, b);`,nO=`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  `+yo+`
  return result;
`,sO=wt({opSnippet:oO,packedOpSnippet:nO}),jT={kernelName:au,backendName:"webgl",kernelFunc:sO};var Lp=class{constructor(t,e,o){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,o],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${e-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${e-1}));
      }
    `}};var iO=`
if (a == b) {
  return 1.0;
};
return a / b;`,aO=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,Bd=wt({opSnippet:iO,packedOpSnippet:aO,checkOutOfBounds:!0}),XT={kernelName:_a,backendName:"webgl",kernelFunc:Bd};var YT="return a - b;",Vd=wt({opSnippet:YT,packedOpSnippet:YT,supportsComplex:!0,cpuKernelImpl:dv}),QT={kernelName:Bn,backendName:"webgl",kernelFunc:Vd};function Md(r){let{inputs:t,backend:e,attrs:o}=r,{logits:n}=t,{dim:s}=o,i=S.parseAxisParam([s],n.shape),a=Ld({inputs:{x:n},backend:e,attrs:{reductionIndices:i,keepDims:!1}}),u=A.expandShapeToKeepDim(a.shape,i),c=z({inputs:{x:a},backend:e,attrs:{shape:u}}),l=Vd({inputs:{a:n,b:c},backend:e}),p=Fd({inputs:{x:l},backend:e}),m=an({inputs:{x:p},backend:e,attrs:{axis:i,keepDims:!1}}),d=z({inputs:{x:m},backend:e,attrs:{shape:u}}),h=Bd({inputs:{a:p,b:d},backend:e});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(d),h}var ZT={kernelName:Vu,backendName:"webgl",kernelFunc:Md};function uO(r){let{inputs:t,backend:e,attrs:o}=r,{logits:n}=t,{numSamples:s,seed:i,normalized:a}=o,u=a?n:Md({inputs:{logits:n},backend:e,attrs:{dim:n.shape.length-1}}),c=u.shape[0],l=u.shape[1],p=new Lp(c,l,s),m=[[i]],d=e.runWebGLProgram(p,[u],"int32",m);return a||e.disposeIntermediateTensorInfo(u),d}var JT={kernelName:uu,backendName:"webgl",kernelFunc:uO};var cO=Yt+`
  return -x;
`,lO=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function pO(r){let{inputs:t,backend:e}=r,{x:o}=t;if(e.shouldExecuteOnCPU([o])){let s=e.texData.get(o.dataId),[i,a]=Zb(s.values,o.shape,o.dtype);return e.makeTensorInfo(a,o.dtype,i)}let n;return O().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new Me(o.shape,lO):n=new le(o.shape,cO),e.runWebGLProgram(n,[o],o.dtype)}var t3={kernelName:Us,backendName:"webgl",kernelFunc:pO};var mO=Ir.nonMaxSuppressionV3Impl;function fO(r){A.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:e,attrs:o}=r,{boxes:n,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:u}=o,c=e.readSync(n.dataId),l=e.readSync(s.dataId),{selectedIndices:p}=mO(c,l,i,a,u);return e.makeTensorInfo([p.length],"int32",new Int32Array(p))}var e3={kernelName:cu,backendName:"webgl",kernelFunc:fO};var dO=Ir.nonMaxSuppressionV4Impl;function hO(r){A.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:e,attrs:o}=r,{boxes:n,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:u,padToMaxOutputSize:c}=o,l=e.readSync(n.dataId),p=e.readSync(s.dataId),{selectedIndices:m,validOutputs:d}=dO(l,p,i,a,u,c);return[e.makeTensorInfo([m.length],"int32",new Int32Array(m)),e.makeTensorInfo([],"int32",new Int32Array([d]))]}var r3={kernelName:lu,backendName:"webgl",kernelFunc:hO};var gO=Ir.nonMaxSuppressionV5Impl;function xO(r){A.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:e,attrs:o}=r,{boxes:n,scores:s}=t,{maxOutputSize:i,iouThreshold:a,scoreThreshold:u,softNmsSigma:c}=o,l=e.readSync(n.dataId),p=e.readSync(s.dataId),m=i,d=a,h=u,g=c,{selectedIndices:x,selectedScores:w}=gO(l,p,m,d,h,g);return[e.makeTensorInfo([x.length],"int32",new Int32Array(x)),e.makeTensorInfo([w.length],"float32",new Float32Array(w))]}var o3={kernelName:pu,backendName:"webgl",kernelFunc:xO};var Bp=class{constructor(t,e,o,n){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${n}), float(${o}),
                      float(index == coords.y)));
      }
    `}};var yO=r=>{let{inputs:t,backend:e,attrs:o}=r,{indices:n}=t,{dtype:s,depth:i,onValue:a,offValue:u}=o,c=S.sizeFromShape(n.shape),l=new Bp(c,i,a,u),p=z({inputs:{x:n},backend:e,attrs:{shape:[c]}}),m=e.runWebGLProgram(l,[p],s);e.disposeIntermediateTensorInfo(p);let d=[...n.shape,i],h=z({inputs:{x:m},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(m),h},n3={kernelName:fu,backendName:"webgl",kernelFunc:yO};function Ni(r){let{inputs:t,backend:e}=r,{x:o}=t;if(o.dtype==="complex64"){let n=Wr({inputs:{input:o},backend:e}),s=Ni({inputs:{x:n},backend:e}),i=cn({inputs:{input:o},backend:e}),a=Ni({inputs:{x:i},backend:e}),u=Se({inputs:{real:s,imag:a},backend:e});return e.disposeIntermediateTensorInfo(n),e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),u}else return zr({attrs:{shape:o.shape,dtype:o.dtype,value:o.dtype==="string"?"":0},backend:e})}var s3={kernelName:rc,backendName:"webgl",kernelFunc:Ni};function i3(r){let{inputs:t,backend:e}=r,{x:o}=t;if(o.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(o.dtype==="complex64"){let n=Wr({inputs:{input:o},backend:e}),s=i3({inputs:{x:n},backend:e}),i=cn({inputs:{input:o},backend:e}),a=Ni({inputs:{x:i},backend:e}),u=Se({inputs:{real:s,imag:a},backend:e});return e.disposeIntermediateTensorInfo(n),e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(a),u}else return zr({attrs:{shape:o.shape,dtype:o.dtype,value:1},backend:e})}var a3={kernelName:mu,backendName:"webgl",kernelFunc:i3};function bO(r){let{inputs:t,backend:e,attrs:o}=r,{axis:n}=o;if(t.length===1)return Tp({inputs:{input:t[0]},backend:e,attrs:{dim:n}});let s=t[0].shape,i=t[0].dtype;t.forEach(l=>{S.assertShapesMatch(s,l.shape,"All tensors passed to stack must have matching shapes"),S.assert(i===l.dtype,()=>"All tensors passed to stack must have matching dtypes")});let a=[],u=t.map(l=>{let p=Tp({inputs:{input:l},backend:e,attrs:{dim:n}});return a.push(p),p}),c=Dd({inputs:u,backend:e,attrs:{axis:n}});return a.forEach(l=>e.disposeIntermediateTensorInfo(l)),c}var u3={kernelName:du,backendName:"webgl",kernelFunc:bO};var Vp=class{constructor(t,e,o){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((c,l)=>c[0]+t[l]+c[1]);let n=t.length,s=nt(n),i=e.map(c=>c[0]).join(","),a=e.map((c,l)=>c[0]+t[l]).join(","),u=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);if(n===1){this.userCode=`
        int start = ${i};
        int end = ${a};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${i});
      ${s} end = ${s}(${a});

      void main() {
        ${s} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${s} coords = outC - start;
          setOutput(getX(${u}));
        }
      }
    `}};var Mp=class{constructor(t,e,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((g,x)=>g[0]+t[x]+g[1]);let n=t.length,s=nt(n),i=e.map(g=>g[0]).join(","),a=e.map((g,x)=>g[0]+t[x]).join(","),u=Mt("rc",n),c=Mt("source",n),l=`${u[n-1]} < ${this.outputShape[n-1]}`,p=n===1?"source":`vec2(${c.slice(-2).join()})`,m=[`${s} rc = outputLoc;`,`${u[n-1]} += 1;
       if(${l}) {
      `,n===1?"":`}
       rc = outputLoc;
       ${u[n-2]} += 1;
       if(${u[n-2]} < ${this.outputShape[n-2]}) {`,n===1?"":`  ${u[n-1]} += 1;
         if(${l}) {`],d=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",h="";for(let g=0,x=n===1?2:4;g<x;g++)h+=`
        ${m[g]}
        if (${d}) {
          result[${g}] = float(value);
        } else {
          ${s} source = rc - start;
          result[${g}] = getChannel(getX(${c.join()}), ${p});
        }
      `;h+=n===1?"} ":"}}",this.userCode=`
      const ${s} start = ${s}(${i});
      const ${s} end = ${s}(${a});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${h}
        setOutput(result);
      }
    `}};var Ud=r=>{let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{paddings:s,constantValue:i}=o;if(S.sizeFromShape(n.shape)===0){let c=s.map((l,p)=>l[0]+n.shape[p]+l[1]);return zr({backend:e,attrs:{shape:c,value:i,dtype:n.dtype}})}let a=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Mp(n.shape,s,i):new Vp(n.shape,s,i),u=[[i]];return e.runWebGLProgram(a,[n],n.dtype,u)},c3={kernelName:hu,backendName:"webgl",kernelFunc:Ud};var vO=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,wO=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  `+yo+`
  return result;
`,TO=wt({opSnippet:vO,packedOpSnippet:wO}),l3={kernelName:gu,backendName:"webgl",kernelFunc:TO};function CO(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:i}=o,a=n.shape.length,u=[],c=S.parseAxisParam(s,n.shape),l=c,p=A.getAxesPermutation(l,a),m=n;p!=null&&(m=At({inputs:{x:n},backend:e,attrs:{perm:p}}),l=A.getInnerMostAxes(l.length,a),u.push(m)),A.assertAxesAreInnerMostDims("prod",l,a);let d;if(e.shouldExecuteOnCPU([m])){let h=e.texData.get(m.dataId).values,{outVals:g,outShape:x,outDtype:w}=tv(m.shape,m.dtype,h,l);d=e.makeTensorInfo(x,w,g)}else{let[h,g]=A.computeOutAndReduceShapes(m.shape,l),x=S.sizeFromShape(g),w=z({inputs:{x:m},backend:e,attrs:{shape:[-1,x]}}),N=Do(n.dtype),k=Ae(w,N,"prod",e);d=z({inputs:{x:k},backend:e,attrs:{shape:h}}),u.push(w),u.push(k)}if(i){u.push(d);let h=A.expandShapeToKeepDim(d.shape,c);d=z({inputs:{x:d},backend:e,attrs:{shape:h}})}return u.forEach(h=>e.disposeIntermediateTensorInfo(h)),d}var p3={kernelName:Gs,backendName:"webgl",kernelFunc:CO};function SO(r){let{inputs:t,backend:e,attrs:o}=r,{shape:n,values:s,defaultValue:i,rowPartitionTensors:a}=t,{rowPartitionTypes:u}=o,c=e.readSync(n.dataId),l=e.readSync(s.dataId),p=e.readSync(i.dataId),m=a.map(x=>e.readSync(x.dataId)),d=a.map(x=>x.shape),[h,g]=ev(c,n.shape,l,s.shape,s.dtype,p,i.shape,m,d,u);return e.makeTensorInfo(h,s.dtype,g)}var m3={kernelName:yu,backendName:"webgl",kernelFunc:SO};var Gd=r=>{let{backend:t,attrs:e}=r,{start:o,stop:n,step:s,dtype:i}=e,a=rv(o,n,s,i);return t.makeTensorInfo([a.length],i,a)},f3={kernelName:bu,backendName:"webgl",kernelFunc:Gd};var NO="return 1.0 / x;",EO=Y({opSnippet:NO}),d3={kernelName:vu,backendName:"webgl",kernelFunc:EO};var $O=Yt+`
  return (x < 0.0) ? 0.0 : x;
`,IO=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,kO=Y({opSnippet:$O,packedOpSnippet:IO}),h3={kernelName:wu,backendName:"webgl",kernelFunc:kO};var _O=Yt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,AO=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,RO=Y({opSnippet:_O,packedOpSnippet:AO}),g3={kernelName:Nu,backendName:"webgl",kernelFunc:RO};var Up=class{constructor(t,e,o,n,s){this.variableNames=["A"],this.outputShape=[];let[i,a,u,c]=t;this.outputShape=[i,e,o,c];let l=[n&&e>1?a-1:a,n&&o>1?u-1:u],p=[n&&e>1?e-1:e,n&&o>1?o-1:o],m;s?m="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":m="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/p[0]},
          ${l[1]/p[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${u}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${m};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}};var Gp=class{constructor(t,e,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,u,c]=t;this.outputShape=[i,e,o,c];let l=[n&&e>1?a-1:a,n&&o>1?u-1:u],p=[n&&e>1?e-1:e,n&&o>1?o-1:o],m;s?m="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":m="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/p[0]},
          ${l[1]/p[1]},
          ${l[1]/p[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${u}.0,
                                     ${u}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${m};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${o-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}};function DO(r){let{inputs:t,backend:e,attrs:o}=r,{images:n}=t,{alignCorners:s,halfPixelCenters:i,size:a}=o,[u,c]=a,l=O().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Gp(n.shape,u,c,s,i):new Up(n.shape,u,c,s,i);return e.runWebGLProgram(l,[n],"float32")}var x3={kernelName:Su,backendName:"webgl",kernelFunc:DO};var Wp=class{constructor(t,e,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;let[,n,s]=e,[,i,a]=t,u=[o&&i>1?n-1:n,o&&a>1?s-1:s],c=[o&&i>1?i-1:i,o&&a>1?a-1:a],l=u[0]/c[0],p=u[1]/c[1],m=1/l,d=1/p,h=Math.ceil(m)*2+2,g=Math.ceil(d)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${p});

        const float invHeightScale = float(${m});
        const float invWidthScale = float(${d});

        const int winHeight = int(${h});
        const int winWidth = int(${g});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${n-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${s-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function FO(r){let{inputs:t,backend:e,attrs:o}=r,{images:n,dy:s}=t,{alignCorners:i}=o,a=new Wp(s.shape,n.shape,i);return e.runWebGLProgram(a,[s],s.dtype)}var y3={kernelName:Ag,backendName:"webgl",kernelFunc:FO};var zp=class{constructor(t,e,o,n,s){this.variableNames=["A"],this.outputShape=[];let[i,a,u,c]=t;this.outputShape=[i,e,o,c];let l=[n&&e>1?a-1:a,n&&o>1?u-1:u],p=[n&&e>1?e-1:e,n&&o>1?o-1:o],m=n?"0.5":"0.0",d;s?d="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":d="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/p[0]},
          ${l[1]/p[1]});
      const vec2 inputShapeRC = vec2(${a}.0, ${u}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${m})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}};var Hp=class{constructor(t,e,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[i,a,u,c]=t;this.outputShape=[i,e,o,c];let l=[n&&e>1?a-1:a,n&&o>1?u-1:u],p=[n&&e>1?e-1:e,n&&o>1?o-1:o],m=n?"0.5":"0.0",d;s?d="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":d="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/p[0]},
          ${l[1]/p[1]},
          ${l[1]/p[1]});
      const vec3 inputShapeRC = vec3(${a}.0, ${u}.0,
                                     ${u}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${m})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${o-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}};function OO(r){let{inputs:t,backend:e,attrs:o}=r,{images:n}=t,{alignCorners:s,halfPixelCenters:i,size:a}=o,[u,c]=a,l=O().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Hp(n.shape,u,c,s,i):new zp(n.shape,u,c,s,i);return e.runWebGLProgram(l,[n],n.dtype)}var b3={kernelName:Cu,backendName:"webgl",kernelFunc:OO};var Kp=class{constructor(t,e,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;let[,n,s]=e,[,i,a]=t,u=[o&&i>1?n-1:n,o&&a>1?s-1:s],c=[o&&i>1?i-1:i,o&&a>1?a-1:a],l=u[0]/c[0],p=u[1]/c[1],m=1/l,d=1/p,h=Math.ceil(m)*2+2,g=Math.ceil(d)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${p});

        const float invHeightScale = float(${m});
        const float invWidthScale = float(${d});

        const int winHeight = int(${h});
        const int winWidth = int(${g});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${i}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${a}) {
              continue;
            }

            float sourceFracRow =
              float(${u[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${u[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${n}) - 1),
                ${o} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${s}) - 1),
                ${o} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function PO(r){let{inputs:t,backend:e,attrs:o}=r,{images:n,dy:s}=t,{alignCorners:i}=o,a=new Kp(s.shape,n.shape,i);return e.runWebGLProgram(a,[s],s.dtype)}var v3={kernelName:_g,backendName:"webgl",kernelFunc:PO};var qp=class{constructor(t,e){this.variableNames=["x"];let o=t.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);if(this.outputShape=t,o===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}let n=a=>e.indexOf(a)!==-1&&t[a]!==1?`${t[a]} - coords[${a}] - 1`:`coords[${a}]`,s=t.map((a,u)=>n(u)).join(","),i=nt(o);this.userCode=`
      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${s}));
      }
    `}};var jp=class{constructor(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;let o=t.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);this.outputShape=t;let n=Mt("rc",o),s=`${n[o-1]} + 1 < ${this.outputShape[o-1]}`,i=`${n[o-2]} + 1 < ${this.outputShape[o-2]}`,a=nt(o);o===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${t[0]} - rc - 1),
            ${t[0]} - rc - 1);
          if(${s}){
              result.g = getChannel(getX(${t[0]} - (rc  + 1) - 1),
                ${t[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${a} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${u(n.slice())};
          if(${s}){
            result.g = ${c(n.slice())};
          }
          if(${i}) {
            result.b = ${l(n.slice())};
            if(${s}) {
              result.a = ${p(n.slice())};
            }
          }
          setOutput(result);
        }
    `;function u(h){return m(h)}function c(h){return h[o-1]="("+h[o-1]+" + 1)",m(h)}function l(h){return h[o-2]="("+h[o-2]+" + 1)",m(h)}function p(h){return h[o-1]="("+h[o-1]+" + 1)",h[o-2]="("+h[o-2]+" + 1)",m(h)}function m(h){let g=t.map((N,k)=>d(k,h)),x=g.join(","),w=g.slice(-2).join(",");return`getChannel(getX(${x}), vec2(${w}))`}function d(h,g){return e.indexOf(h)!==-1&&t[h]!==1?`${t[h]} - ${g[h]} - 1`:`${g[h]}`}}};function LO(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{dims:s}=o,i=n.shape.length,a=S.parseAxisParam(s,n.shape);if(i===0)return Ut({inputs:{x:n},backend:e});let u=O().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new jp(n.shape,a):new qp(n.shape,a);return e.runWebGLProgram(u,[n],n.dtype)}var w3={kernelName:Eu,backendName:"webgl",kernelFunc:LO};var Xp=class{constructor(t,e){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];let o=t[1],n=t[2];this.outputShape=t;let s="";typeof e=="number"?s=`float outputValue = ${e.toFixed(2)};`:s=`
        vec3 fill = vec3(${e.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${s}
          if(coordX >= 0 && coordX < ${n} && coordY >= 0 && coordY < ${o}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}};var T3={kernelName:nc,backendName:"webgl",kernelFunc:({inputs:r,attrs:t,backend:e})=>{let{image:o}=r,{radians:n,fillValue:s,center:i}=t,a=e,u=new Xp(o.shape,s),[c,l]=A.getImageCenter(i,o.shape[1],o.shape[2]),p=[[c,l,Math.sin(n),Math.cos(n)]];return a.runWebGLProgram(u,[o],o.dtype,p)}};var BO=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,VO=Y({opSnippet:BO}),C3={kernelName:$u,backendName:"webgl",kernelFunc:VO};var MO="return inversesqrt(x);",UO=Y({opSnippet:MO,cpuKernelImpl:ov}),S3={kernelName:Fn,backendName:"webgl",kernelFunc:UO};var Ss=class{constructor(t,e,o,n,s,i,a=!0){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;let u=nt(s.length),c=nt(i.length),l="";o===1?l="i":o===2&&(l="i, j");let p=`getIndices(${l})`,m="";n===1?m="i":n===2&&(m="i, coords[1]");let d=`getUpdates(${m})`,h=e>1?"strides[j]":"strides";this.userCode=`
        ${u} strides = ${u}(${s});

        void main() {
          ${c} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${t}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${e}; j++) {
              int index = round(${p});
              flattenedIndex += index * ${h};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${d};
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `}};function GO(r){let{inputs:t,backend:e,attrs:o}=r,{indices:n,updates:s}=t,{shape:i}=o,{sliceRank:a,numUpdates:u,sliceSize:c,strides:l,outputSize:p}=A.calculateShapes(s,n,i),m=[p/c,c];if(p===0)return e.makeTensorInfo(i,n.dtype);let d=z({inputs:{x:n},backend:e,attrs:{shape:[u,a]}}),h=z({inputs:{x:s},backend:e,attrs:{shape:[u,c]}}),g=e.makeTensorInfo([],"float32",new Float32Array([0])),x=new Ss(u,a,d.shape.length,h.shape.length,l,m),w=e.runWebGLProgram(x,[h,d,g],h.dtype),N=z({inputs:{x:w},backend:e,attrs:{shape:i}});return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(w),e.disposeIntermediateTensorInfo(g),N}var N3={kernelName:Iu,backendName:"webgl",kernelFunc:GO};var Yp=class{constructor(t,e,o,n){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,o];let s="while (left < right) {",i=`for (int i = 0; i < ${Math.ceil(Math.log2(e+1))}; ++i) { if (left >= right) break;`,a=O().getNumber("WEBGL_VERSION")===2?s:i,u=n==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${u} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}};function WO(r){let{inputs:t,backend:e,attrs:o}=r,{sortedSequence:n,values:s}=t,{side:i}=o,a=new Yp(n.shape[0],n.shape[1],s.shape[1],i),u=[[n.shape[1]]];return e.runWebGLProgram(a,[n,s],"int32",u)}var E3={kernelName:ku,backendName:"webgl",kernelFunc:WO};var Qp=class{constructor(t,e,o){this.variableNames=["c","a","b"],this.outputShape=e;let n,s;if(o>4)throw Error(`Where for rank ${o} is not yet supported`);if(o===1)s="resRC",n="resRC";else{let a=["resRC.x","resRC.y","resRC.z","resRC.w"],u=[],c=[];for(let l=0;l<e.length;l++)c.push(`${a[l]}`),l<t&&u.push(`${a[l]}`);n=u.join(),s=c.join()}let i=nt(o);this.userCode=`
      void main() {
        ${i} resRC = getOutputCoords();
        float cVal = getC(${n});
        if (cVal >= 1.0) {
          setOutput(getA(${s}));
        } else {
          setOutput(getB(${s}));
        }
      }
    `}};function zO(r){let{inputs:t,backend:e}=r,{condition:o,t:n,e:s}=t,i=new Qp(o.shape.length,n.shape,n.shape.length);return e.runWebGLProgram(i,[o,n,s],ae(n.dtype,s.dtype))}var $3={kernelName:_u,backendName:"webgl",kernelFunc:zO};var HO=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${A.SELU_SCALEALPHA};
  float scale = ${A.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,KO=Y({opSnippet:HO}),I3={kernelName:Au,backendName:"webgl",kernelFunc:KO};var qO=rr+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,jO=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,XO=Y({opSnippet:qO,packedOpSnippet:jO,cpuKernelImpl:sv}),k3={kernelName:On,backendName:"webgl",kernelFunc:XO};var YO=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,QO=Y({opSnippet:YO}),_3={kernelName:Fu,backendName:"webgl",kernelFunc:QO};var ZO=rr+`
  return sin(x);
`,JO=Y({opSnippet:ZO}),A3={kernelName:Ru,backendName:"webgl",kernelFunc:JO};var tP=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,eP=Y({opSnippet:tP}),R3={kernelName:Du,backendName:"webgl",kernelFunc:eP};var rP=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,oP=Y({opSnippet:rP}),D3={kernelName:Ou,backendName:"webgl",kernelFunc:oP};var nP=r=>{let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{blockShape:s,paddings:i}=o;S.assert(n.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let a=s.reduce((w,N)=>w*N),u=[[0,0]];u.push(...i);for(let w=1+s.length;w<n.shape.length;++w)u.push([0,0]);let c=[],l=Ud({inputs:{x:n},backend:e,attrs:{paddings:u,constantValue:0}}),p=A.getReshaped(l.shape,s,a,!1),m=A.getPermuted(p.length,s.length,!1),d=A.getReshapedPermuted(l.shape,s,a,!1),h=z({inputs:{x:l},backend:e,attrs:{shape:p}}),g=At({inputs:{x:h},backend:e,attrs:{perm:m}}),x=z({inputs:{x:g},backend:e,attrs:{shape:d}});return c.push(l),c.push(h),c.push(g),c.forEach(w=>e.disposeIntermediateTensorInfo(w)),x},F3={kernelName:Lu,backendName:"webgl",kernelFunc:nP};function sP(r){let{inputs:t,backend:e}=r,{indices:o,values:n,denseShape:s,defaultValue:i}=t;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${s.shape}`);if(o.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${o.shape}`);if(n.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${n.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);let a=e.readSync(o.dataId),u=e.readSync(n.dataId),c=e.readSync(s.dataId),l=e.readSync(i.dataId)[0],[p,m,d,h,g]=av(a,o.shape,o.dtype,u,n.dtype,c,l);return[e.makeTensorInfo(m,o.dtype,p),e.makeTensorInfo([m[0]],n.dtype,d),e.makeTensorInfo([h.length],"bool",new Uint8Array(h.map(x=>Number(x)))),e.makeTensorInfo([g.length],o.dtype,new Int32Array(g))]}var O3={kernelName:Mu,backendName:"webgl",kernelFunc:sP};function iP(r){let{inputs:t,backend:e}=r,{inputIndices:o,inputShape:n,newShape:s}=t;if(o.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${o.shape}`);if(n.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${n.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);let i=Array.from(e.readSync(n.dataId)),a=e.readSync(o.dataId),u=Array.from(e.readSync(s.dataId)),[c,l,p]=uv(a,o.shape,o.dtype,i,u);return[e.makeTensorInfo(l,o.dtype,c),e.makeTensorInfo([p.length],s.dtype,new Int32Array(p))]}var P3={kernelName:Uu,backendName:"webgl",kernelFunc:iP};function aP(r){let{inputs:t,backend:e}=r,{data:o,indices:n,segmentIds:s}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${s.shape}`);let i=e.readSync(o.dataId),a=e.readSync(n.dataId),u=e.readSync(s.dataId),[c,l]=Dl(i,o.shape,o.dtype,a,u,!0);return e.makeTensorInfo(l,o.dtype,c)}var L3={kernelName:Gu,backendName:"webgl",kernelFunc:aP};function uP(r){let{inputs:t,backend:e}=r,{data:o,indices:n,segmentIds:s}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${s.shape}`);let i=e.readSync(o.dataId),a=e.readSync(n.dataId),u=e.readSync(s.dataId),[c,l]=Dl(i,o.shape,o.dtype,a,u);return e.makeTensorInfo(l,o.dtype,c)}var B3={kernelName:Wu,backendName:"webgl",kernelFunc:uP};function cP(r){let{inputs:t,backend:e,attrs:o}=r,{sparseIndices:n,sparseValues:s,defaultValue:i}=t,{outputShape:a}=o,{sliceRank:u,numUpdates:c,sliceSize:l,strides:p,outputSize:m}=A.calculateShapes(s,n,a),d=!1;if(s.dtype==="string"){let w=e.bufferSync(n),N=e.bufferSync(s),k=S.decodeString(e.readSync(i.dataId)[0]),_=nv(w,N,a,m,l,c,u,p,k,d);return e.makeTensorInfo(a,_.dtype,_.values)}let h=new Ss(c,u,n.shape.length,s.shape.length,p,[m,1],d),g=e.runWebGLProgram(h,[s,n,i],s.dtype),x=z({inputs:{x:g},backend:e,attrs:{shape:a}});return e.disposeIntermediateTensorInfo(g),x}var V3={kernelName:zu,backendName:"webgl",kernelFunc:cP};function lP(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{numOrSizeSplits:s,axis:i}=o,a=S.parseAxisParam(i,n.shape)[0],u=A.prepareSplitSize(n,s,a),c=n.shape.length,l=new Array(c).fill(0),p=n.shape.slice();return u.map(m=>{let d=[...p];d[a]=m;let h=dr({inputs:{x:n},backend:e,attrs:{begin:l,size:d}});return l[a]+=m,h})}var M3={kernelName:Bu,backendName:"webgl",kernelFunc:lP};var U3="return sqrt(x);",pP=Y({opSnippet:U3,packedOpSnippet:U3,cpuKernelImpl:cv}),G3={kernelName:Pn,backendName:"webgl",kernelFunc:pP};var mP="return x * x;",fP=Y({opSnippet:mP}),W3={kernelName:Rg,backendName:"webgl",kernelFunc:fP};var z3="return (a - b) * (a - b);",dP=wt({opSnippet:z3,packedOpSnippet:z3}),H3={kernelName:Ln,backendName:"webgl",kernelFunc:dP};function hP({inputs:r,attrs:t,backend:e}){let{x:o}=r,n=Yt+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,s=new le(o.shape,n);return e.runWebGLProgram(s,[o],o.dtype)}var K3={kernelName:oc,backendName:"webgl",kernelFunc:hP};var Zp=class{constructor(t,e,o){this.variableNames=["x"],this.outputShape=o;let n=o.length,s=nt(o.length),i=nt(o.length),a="";if(n===1)a="coords * strides + begin";else{let u=0;a=o.map((c,l)=>(u++,o.length===1?`coords * strides[${l}] + begin[${l}]`:`coords[${u-1}] * strides[${l}] + begin[${l}]`)).join(",")}this.userCode=`
      ${s} begin = ${s}(${t});
      ${s} strides = ${s}(${e});

      void main() {
        ${i} coords = getOutputCoords();
        setOutput(getX(${a}));
      }
    `}};function gP(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{begin:s,end:i,strides:a,beginMask:u,endMask:c,ellipsisMask:l,newAxisMask:p,shrinkAxisMask:m}=o,{finalShapeSparse:d,finalShape:h,isIdentity:g,sliceDim0:x,isSimpleSlice:w,begin:N,end:k,strides:_}=we.sliceInfo(n.shape,s,i,a,u,c,l,p,m),D;if(g)D=z({inputs:{x:n},backend:e,attrs:{shape:h}});else if(x||w){S.assert(n.shape.length>=1,()=>`Input must have rank at least 1, got: ${n.shape.length}`);let V=we.computeOutShape(N,k,_),U=dr({inputs:{x:n},backend:e,attrs:{begin:N,size:V}});D=z({inputs:{x:U},backend:e,attrs:{shape:h}}),e.disposeIntermediateTensorInfo(U)}else if(e.shouldExecuteOnCPU([n])){let U=e.readSync(n.dataId),H=pt(n.shape,n.dtype,U),W=lv(d,H,_,N);D=e.makeTensorInfo(h,n.dtype,W.values)}else{let U=new Zp(N,_,d);D=e.runWebGLProgram(U,[n],n.dtype)}let B=z({inputs:{x:D},backend:e,attrs:{shape:h}});return e.disposeIntermediateTensorInfo(D),B}var q3={kernelName:Hu,backendName:"webgl",kernelFunc:gP};function xP(r){let{inputs:t,backend:e,attrs:o}=r,{separator:n,nGramWidths:s,leftPad:i,rightPad:a,padWidth:u,preserveShortSequences:c}=o,{data:l,dataSplits:p}=t,m=e.readSync(l.dataId),d=e.readSync(p.dataId),[h,g]=pv(m,d,n,s,i,a,u,c);return[e.makeTensorInfo([h.length],"string",h),e.makeTensorInfo(p.shape,"int32",g)]}var j3={kernelName:Ku,backendName:"webgl",kernelFunc:xP};function yP(r){let{inputs:t,backend:e,attrs:o}=r,{skipEmpty:n}=o,{input:s,delimiter:i}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);let a=e.readSync(s.dataId),u=e.readSync(i.dataId)[0],[c,l,p]=mv(a,u,n),m=l.length;return[e.makeTensorInfo([m,2],"int32",c),e.makeTensorInfo([m],"string",l),e.makeTensorInfo([2],"int32",new Int32Array(p))]}var X3={kernelName:qu,backendName:"webgl",kernelFunc:yP};function bP(r){let{inputs:t,backend:e,attrs:o}=r,{numBuckets:n}=o,{input:s}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(n<=0)throw new Error("Number of buckets must be at least 1");let i=e.readSync(s.dataId),a=fv(i,n);return e.makeTensorInfo(s.shape,"int32",a)}var Y3={kernelName:ju,backendName:"webgl",kernelFunc:bP};var vP="return tan(x);",wP=Y({opSnippet:vP}),Q3={kernelName:Xu,backendName:"webgl",kernelFunc:wP};var TP=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,CP=Y({opSnippet:TP}),Z3={kernelName:Yu,backendName:"webgl",kernelFunc:CP};var Jp=class{constructor(t,e){this.variableNames=["A"];let o=new Array(t.length);for(let i=0;i<o.length;i++)o[i]=t[i]*e[i];this.outputShape=o,this.rank=o.length;let n=nt(this.rank),s=SP(t);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        setOutput(getA(${s}));
      }
    `}};function SP(r){let t=r.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${r[0]})`;let e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],o=[];for(let n=0;n<r.length;n++)o.push(`imod(${e[n]}, ${r[n]})`);return o.join()}function Wd(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{reps:s}=o;if(n.dtype==="string"||n.shape.length>5){let u=e.readSync(n.dataId),c=n.dtype==="string"?u.map(m=>S.decodeString(m)):u,l=pt(n.shape,n.dtype,c),p=hv(l,s);return e.makeTensorInfo(p.shape,p.dtype,p.values)}let i=new Jp(n.shape,s);return e.runWebGLProgram(i,[n],n.dtype)}var J3={kernelName:Vn,backendName:"webgl",kernelFunc:Wd};var tm=class{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}},em=class{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}};function pn(r,t){t!==null&&r.disposeIntermediateTensorInfo(t)}function tC(r){let t=1;for(;t<r;)t*=2;return t}function NP(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{k:s,sorted:i}=o,a=O().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),u=O().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),c=n.shape,l=c[c.length-1];if(e.shouldExecuteOnCPU([n])||l<a||s>u){let W=e.readSync(n.dataId),[j,Z]=gv(W,c,n.dtype,s,i);return[e.makeTensorInfo(j.shape,j.dtype,j.values),e.makeTensorInfo(Z.shape,Z.dtype,Z.values)]}if(s===0)return c[c.length-1]=0,[e.makeTensorInfo(c,n.dtype,[]),e.makeTensorInfo(c,"int32",[])];if(l===1)return[n,zr({attrs:{shape:c,dtype:"int32",value:0},backend:e})];let p=e.texData.get(n.dataId),m=p!==null&&p.isPacked,d=m?e.unpackTensor(n):n,g=S.sizeFromShape(c)/l,x=z({inputs:{x:d},attrs:{shape:[g,l]},backend:e});m&&pn(e,d);let w=tC(s),N=tC(l),k=null,_=()=>k===null?[x,x]:[x,k],D=(W,j,Z)=>{let lt=_(),it=new tm(Z),jt=[[l],[k===null?1:0],[Number.NEGATIVE_INFINITY],[W],[j]],Gt=k;k=e.runWebGLProgram(it,lt,"int32",jt),pn(e,Gt)};for(let W=1;W<w;W*=2){let j=W*2;for(let Z=W;Z>=1;Z/=2)D(j,Z,[g,N])}for(let W=N;W>w;W/=2){let j=_(),Z=new em([g,W/2]),it=[[l],[k===null?1:0],[w]],mt=k;k=e.runWebGLProgram(Z,j,"int32",it),pn(e,mt);let jt=w/2,Gt=jt*2;for(let Bt=jt;Bt>=1;Bt/=2)D(Gt,Bt,k.shape)}let B=k;k=dr({inputs:{x:k},backend:e,attrs:{begin:0,size:[g,s]}}),pn(e,B);let V=Pd({inputs:{x,indices:k},backend:e,attrs:{axis:1,batchDims:1}});pn(e,x);let U=c.slice(0,-1);U.push(s),B=k,k=z({inputs:{x:k},attrs:{shape:U},backend:e}),pn(e,B);let H=V;return V=z({inputs:{x:V},attrs:{shape:U},backend:e}),pn(e,H),[V,k]}var eC={kernelName:Qu,backendName:"webgl",kernelFunc:NP};var rm=class{constructor(t,e,o,n,s,i){this.variableNames=["Image","Transforms"],this.outputShape=i;let a=o==="nearest"?1:2,u;switch(n){case"constant":u=1;break;case"reflect":u=2;break;case"wrap":u=3;break;case"nearest":u=4;break;default:u=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${u} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${u} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${u} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${t} && 0 <= coordX && coordX < ${e}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${s});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${s});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${e}));
                float mapY = mapCoord(inY, float(${t}));

                if (${a} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}};function EP(r){let{inputs:t,backend:e,attrs:o}=r,{image:n,transforms:s}=t,{interpolation:i,fillMode:a,fillValue:u,outputShape:c}=o,[l,p,m,d]=n.shape,[h,g]=c??[p,m],x=[l,h,g,d],w=new rm(p,m,i,a,u,x);return e.runWebGLProgram(w,[n,s],"float32")}var rC={kernelName:Zu,backendName:"webgl",kernelFunc:EP};function $P(r){let{inputs:t,attrs:e,backend:o}=r,{axis:n}=e,{x:s}=t;_r(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let i=o.readSync(s.dataId),{outputValues:a,outputShape:u,indices:c}=xv(i,n,s.shape,s.dtype);return[o.makeTensorInfo(u,s.dtype,a),o.makeTensorInfo([c.length],"int32",c)]}var oC={kernelName:Ju,backendName:"webgl",kernelFunc:$P};function IP(r){let{inputs:t,backend:e,attrs:o}=r,{value:n}=t,{axis:s}=o;s<0&&(s+=n.shape.length);let i=n,a=i.shape.length,u=n.shape[s],c=new Array(a-1),l=0;for(let g=0;g<a;g++)g!==s&&(c[l++]=i.shape[g]);let p=[],m=new Array(a).fill(0),d=i.shape.slice();d[s]=1;let h=new Array(u);for(let g=0;g<h.length;g++){m[s]=g;let x=dr({inputs:{x:i},backend:e,attrs:{begin:m,size:d}}),w=z({inputs:{x},backend:e,attrs:{shape:c}});h[g]=w,p.push(x)}return p.forEach(g=>e.disposeIntermediateTensorInfo(g)),h}var nC={kernelName:tc,backendName:"webgl",kernelFunc:IP};var om=class{constructor(t,e){this.variableNames=["x","segmentIds"];let o=t.windowSize,n=t.batchSize,s=t.inSize,i=t.numSegments,a=i*Math.ceil(s/o);this.outputShape=[n,a];let u="0.0",c="sumValue",l=Math.floor(o/4)*4,p=o%4,m=`
        sumValue += dot(values, segFilter);
    `,d="";s%o>0&&(d=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `);let h="";s%o>0&&(h=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${u};

      float getValue(int batch, int inIdx) {
        ${d}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${h}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${i})) * float(${o}));
        int currentSeg = int(mod(float(outIdx), float(${i})));

        float sumValue = 0.0;

        for (int i = 0; i < ${l}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${m}
        }

        int inIdx = inOffset + ${l};
        if (${p===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${m}
        } else if (${p===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${m}
        } else if (${p===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${m}
        }
        setOutput(${c});
      }
    `}};function kP(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,segmentIds:s}=t,{numSegments:i}=o,a=n.shape.length,u=[],c=0,l=A.getAxesPermutation([c],a),p=n;l!=null&&(p=At({inputs:{x:n},backend:e,attrs:{perm:l}}),u.push(p),c=A.getInnerMostAxes(1,a)[0]);let m=A.segment_util.computeOutShape(p.shape,c,i),d=S.sizeFromShape([p.shape[c]]),h=z({inputs:{x:p},backend:e,attrs:{shape:[-1,d]}});u.push(h);let g=Do(n.dtype),x=(_,D,B,V,U)=>{let H=_.shape[0],W=_.shape[1],j=A.segment_util.segOpComputeOptimalWindowSize(W,U),Z={windowSize:j,inSize:W,batchSize:H,numSegments:U},lt=new om(Z,D),it=e.compileAndRun(lt,[_,B],V);if(u.push(it),it.shape[1]===U)return it;let mt=Gd({backend:e,attrs:{start:0,stop:U,step:1,dtype:"float32"}}),jt=Wd({inputs:{x:mt},backend:e,attrs:{reps:[W/j]}});return u.push(mt),u.push(jt),x(it,D,jt,V,U)},w=x(h,"unsortedSegmentSum",s,g,i),N=z({inputs:{x:w},backend:e,attrs:{shape:m}}),k=N;if(l!=null){u.push(N);let _=A.getUndoAxesPermutation(l);k=At({inputs:{x:k},backend:e,attrs:{perm:_}})}return u.forEach(_=>e.disposeIntermediateTensorInfo(_)),k}var sC={kernelName:ec,backendName:"webgl",kernelFunc:kP};var _P=[Kv,jv,Xv,Yv,Zv,Jv,tw,ew,nw,sw,iw,aw,uw,cw,lw,pw,mw,fw,dw,hw,gw,yw,bw,vw,Sw,Ew,$w,Fv,kw,Aw,Rw,Dw,Fw,Ow,Pw,Lw,Bw,Vw,Mw,Ww,zw,Hw,Kw,qw,jw,Xw,Yw,Qw,Zw,Jw,tT,eT,rT,oT,nT,iT,aT,uT,cT,pT,mT,fT,dT,hT,gT,xT,yT,bT,Dv,vT,_w,wT,TT,CT,Ov,ST,NT,ET,$T,IT,kT,_T,AT,RT,DT,OT,PT,LT,BT,VT,MT,GT,zT,HT,KT,qT,jT,JT,Mv,t3,e3,r3,o3,ww,n3,a3,u3,c3,l3,Pv,p3,m3,f3,Tw,XT,d3,h3,g3,Gv,x3,y3,b3,v3,w3,T3,C3,S3,N3,E3,$3,I3,k3,_3,A3,R3,xw,ZT,D3,F3,O3,P3,L3,B3,V3,M3,G3,W3,H3,K3,q3,j3,X3,Y3,QT,zv,Q3,Z3,J3,eC,rC,Hv,oC,nC,sC,s3];for(let r of _P)Fg(r);var MC=Fm(gg());var AP=O();AP.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,r=>{r&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var Ge;(function(r){r[r.DT_INVALID=0]="DT_INVALID",r[r.DT_FLOAT=1]="DT_FLOAT",r[r.DT_DOUBLE=2]="DT_DOUBLE",r[r.DT_INT32=3]="DT_INT32",r[r.DT_UINT8=4]="DT_UINT8",r[r.DT_INT16=5]="DT_INT16",r[r.DT_INT8=6]="DT_INT8",r[r.DT_STRING=7]="DT_STRING",r[r.DT_COMPLEX64=8]="DT_COMPLEX64",r[r.DT_INT64=9]="DT_INT64",r[r.DT_BOOL=10]="DT_BOOL",r[r.DT_QINT8=11]="DT_QINT8",r[r.DT_QUINT8=12]="DT_QUINT8",r[r.DT_QINT32=13]="DT_QINT32",r[r.DT_BFLOAT16=14]="DT_BFLOAT16",r[r.DT_QINT16=15]="DT_QINT16",r[r.DT_QUINT16=16]="DT_QUINT16",r[r.DT_UINT16=17]="DT_UINT16",r[r.DT_COMPLEX128=18]="DT_COMPLEX128",r[r.DT_HALF=19]="DT_HALF",r[r.DT_RESOURCE=20]="DT_RESOURCE",r[r.DT_VARIANT=21]="DT_VARIANT",r[r.DT_UINT32=22]="DT_UINT32",r[r.DT_UINT64=23]="DT_UINT64",r[r.DT_FLOAT_REF=101]="DT_FLOAT_REF",r[r.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",r[r.DT_INT32_REF=103]="DT_INT32_REF",r[r.DT_UINT8_REF=104]="DT_UINT8_REF",r[r.DT_INT16_REF=105]="DT_INT16_REF",r[r.DT_INT8_REF=106]="DT_INT8_REF",r[r.DT_STRING_REF=107]="DT_STRING_REF",r[r.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",r[r.DT_INT64_REF=109]="DT_INT64_REF",r[r.DT_BOOL_REF=110]="DT_BOOL_REF",r[r.DT_QINT8_REF=111]="DT_QINT8_REF",r[r.DT_QUINT8_REF=112]="DT_QUINT8_REF",r[r.DT_QINT32_REF=113]="DT_QINT32_REF",r[r.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",r[r.DT_QINT16_REF=115]="DT_QINT16_REF",r[r.DT_QUINT16_REF=116]="DT_QUINT16_REF",r[r.DT_UINT16_REF=117]="DT_UINT16_REF",r[r.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",r[r.DT_HALF_REF=119]="DT_HALF_REF",r[r.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",r[r.DT_VARIANT_REF=121]="DT_VARIANT_REF",r[r.DT_UINT32_REF=122]="DT_UINT32_REF",r[r.DT_UINT64_REF=123]="DT_UINT64_REF"})(Ge||(Ge={}));var iC;(function(r){let t;(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(t=r.CheckpointFormatVersion||(r.CheckpointFormatVersion={}))})(iC||(iC={}));var DP={};function nm(r){return DP[r]}function y(r,t,e,o,n){let s=t.inputParams[r];if(s&&s.inputIndexStart!==void 0){let a=s.inputIndexStart,u=s.inputIndexEnd===0?void 0:s.inputIndexEnd===void 0?a+1:s.inputIndexEnd;if(s.type==="tensor")return Qt(t.inputNames[s.inputIndexStart],e,o,n);if(s.type==="tensors")return t.inputNames.slice(a,u).map(m=>Qt(m,e,o,n));let c=Qt(t.inputNames.slice(a)[0],e,o,n),l=c.dataSync();return s.type==="number"?l[0]:S.toNestedArray(c.shape,l)}let i=t.attrParams[r];return i&&i.value}function Qt(r,t,e,o){let[n,s]=xe(r);if(o!=null){let a=o.getHashTableHandleByName(n);if(a!=null)return a}let i=e.currentContextIds.find(a=>!!t[sm(n,a)]);return i!==void 0?t[sm(n,i)][s]:void 0}function aC(r,t,e){return t[sm(r,e.currentContextId)]}function or(r,t){let[e,o,n]=xe(r);return[sm(e,t&&t.currentContextId),o,n]}function sm(r,t){return t?`${r}-${t}`:r}function xe(r){let t=r.split(":");if(t.length===1)return[r,0,void 0];let e=t[0],o=t.length===3?t[1]:void 0,n=Number(t[t.length-1]);return[e,n,o]}function Ei(r,t,e){let o=y("pad",r,t,e);if(o==="explicit"){o=y("explicitPaddings",r,t,e);let n=[[0,0],[0,0],[0,0],[0,0]];for(let s=0;s<4;s++)n[s][0]=o[s*2],n[s][1]=o[s*2+1];return n}return o}function hr(r){return r.kept?r:ke(r)}var zd={};$t(zd,{json:()=>FP});var FP=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var Hd={};$t(Hd,{json:()=>OP});var OP=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Prod",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axes",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var Kd={};$t(Kd,{json:()=>PP});var PP=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}];var qd={};$t(qd,{json:()=>LP});var LP=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}];var jd={};$t(jd,{json:()=>BP});var BP=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}];var Xd={};$t(Xd,{json:()=>VP});var VP=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var Yd={};$t(Yd,{json:()=>MP});var MP=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}];var Qd={};$t(Qd,{json:()=>UP});var UP=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}];var Zd={};$t(Zd,{json:()=>GP});var GP=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]}];var Jd={};$t(Jd,{json:()=>WP});var WP=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}];var th={};$t(th,{json:()=>zP});var zP=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var eh={};$t(eh,{json:()=>HP});var HP=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]}];var rh={};$t(rh,{json:()=>KP});var KP=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"SparseToDense",category:"normalization",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!0,notSupported:!0}]}];var oh={};$t(oh,{json:()=>qP});var qP=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}];var nh={};$t(nh,{json:()=>jP});var jP=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]}];var sh={};$t(sh,{json:()=>XP});var XP=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}];var ih={};$t(ih,{json:()=>YP});var YP=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}];var ah={};$t(ah,{json:()=>QP});var QP=[{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}];var uh={};$t(uh,{json:()=>ZP});var ZP=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];var $i=class{static get Instance(){return this._instance||(this._instance=new this)}constructor(){let t=[zd,Hd,Kd,qd,jd,Xd,Yd,Qd,Zd,Jd,th,eh,rh,oh,nh,sh,ih,ah,uh],e=[].concat(...t.map(o=>o.json));this.opMappers=e.reduce((o,n)=>(o[n.tfOpName]=n,o),{})}transformGraph(t,e={}){let o=t.node,n=[],s=[],i=[],a=o.reduce((g,x)=>(g[x.name]=this.mapNode(x),x.op.startsWith("Placeholder")?n.push(g[x.name]):x.op==="Const"?s.push(g[x.name]):(x.input==null||x.input.length===0)&&i.push(g[x.name]),g),{}),u=[],c=[],l={},p={};e!=null&&(l=this.mapSignatureEntries(e.inputs),p=this.mapSignatureEntries(e.outputs));let m=Object.keys(a);m.forEach(g=>{let x=a[g];x.inputNames.forEach((w,N)=>{let[k,,_]=or(w),D=a[k];if(D.outputs!=null){let B=D.outputs.indexOf(_);if(B!==-1){let V=`${k}:${B}`;x.inputNames[N]=V}}x.inputs.push(D),D.children.push(x)})}),Object.keys(p).length===0?m.forEach(g=>{let x=a[g];x.children.length===0&&c.push(x)}):Object.keys(p).forEach(g=>{let[x]=or(g),w=a[x];w!=null&&(w.signatureKey=p[g],c.push(w))}),Object.keys(l).length>0?Object.keys(l).forEach(g=>{let[x]=or(g),w=a[x];w&&(w.signatureKey=l[g],u.push(w))}):u=n;let d={};t.library!=null&&t.library.function!=null&&(d=t.library.function.reduce((g,x)=>(g[x.signature.name]=this.mapFunction(x),g),{}));let h={nodes:a,inputs:u,outputs:c,weights:s,placeholders:n,signature:e,functions:d};return i.length>0&&(h.initNodes=i),h}mapSignatureEntries(t){return Object.keys(t||{}).reduce((e,o)=>(e[t[o].name]=o,e),{})}mapNode(t){let e=nm(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});let o={name:t.name,op:t.op,category:e.category,inputNames:(t.input||[]).map(n=>n.startsWith("^")?n.slice(1):n),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:e.outputs};return e.inputs!=null&&(o.inputParams=e.inputs.reduce((n,s)=>(n[s.name]={type:s.type,inputIndexStart:s.start,inputIndexEnd:s.end},n),{})),e.attrs!=null&&(o.attrParams=e.attrs.reduce((n,s)=>{let i=s.type,a;switch(s.type){case"string":a=im(t.attr,s.tfName,s.defaultValue),a===void 0&&!!s.tfDeprecatedName&&(a=im(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"string[]":a=fm(t.attr,s.tfName,s.defaultValue),a===void 0&&!!s.tfDeprecatedName&&(a=fm(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"number":a=um(t.attr,s.tfName,s.defaultValue||0),a===void 0&&!!s.tfDeprecatedName&&(a=um(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"number[]":a=mm(t.attr,s.tfName,s.defaultValue),a===void 0&&!!s.tfDeprecatedName&&(a=mm(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool":a=am(t.attr,s.tfName,s.defaultValue),a===void 0&&!!s.tfDeprecatedName&&(a=am(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool[]":a=hm(t.attr,s.tfName,s.defaultValue),a===void 0&&!!s.tfDeprecatedName&&(a=hm(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape":a=pm(t.attr,s.tfName,s.defaultValue),a===void 0&&!!s.tfDeprecatedName&&(a=pm(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape[]":a=dm(t.attr,s.tfName,s.defaultValue),a===void 0&&!!s.tfDeprecatedName&&(a=dm(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype":a=cm(t.attr,s.tfName,s.defaultValue),a===void 0&&!!s.tfDeprecatedName&&(a=cm(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype[]":a=lm(t.attr,s.tfName,s.defaultValue),a===void 0&&!!s.tfDeprecatedName&&(a=lm(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"func":a=uC(t.attr,s.tfName,s.defaultValue),a===void 0&&!!s.tfDeprecatedName&&(a=uC(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${s.type} for op: ${t.op}`)}return n[s.name]={value:a,type:i},n},{})),o}mapFunction(t){let e=t.nodeDef,o=[],n=[],s={};e!=null&&(s=e.reduce((p,m)=>(p[m.name]=this.mapNode(m),m.op==="Const"&&n.push(p[m.name]),p),{}));let i=[],a=[];t.signature.inputArg.forEach(p=>{let[m]=or(p.name),d={name:m,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:ch(p.type),type:"dtype"}},children:[]};d.signatureKey=p.name,i.push(d),s[m]=d}),Object.keys(s).forEach(p=>{let m=s[p];m.inputNames.forEach((d,h)=>{let[g,,x]=or(d),w=s[g];if(w.outputs!=null){let N=w.outputs.indexOf(x);if(N!==-1){let k=`${g}:${N}`;m.inputNames[h]=k}}m.inputs.push(w),w.children.push(m)})});let c=t.ret;t.signature.outputArg.forEach(p=>{let[m,d]=or(c[p.name]),h=s[m];h!=null&&(h.defaultOutput=d,a.push(h))});let l=this.mapArgsToSignature(t);return{nodes:s,inputs:i,outputs:a,weights:n,placeholders:o,signature:l}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((e,o)=>(e[o.name]=this.mapArgToTensorInfo(o),e),{}),outputs:t.signature.outputArg.reduce((e,o)=>(e[o.name]=this.mapArgToTensorInfo(o,t.ret),e),{})}}mapArgToTensorInfo(t,e){let o=t.name;return e!=null&&(o=e[o]),{name:o,dtype:t.type}}};function JP(r){let t=O().global;if(typeof t.atob<"u")return t.atob(r);if(typeof Buffer<"u")return new Buffer(r,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function cC(r,t){let e=Array.isArray(r)?String.fromCharCode.apply(null,r):JP(r);return t?e:e.toLowerCase()}function im(r,t,e,o=!1){let n=r[t];return n!=null?cC(n.s,o):e}function am(r,t,e){let o=r[t];return o?o.b:e}function um(r,t,e){let o=r[t]||{},n=o.i!=null?o.i:o.f!=null?o.f:e;return typeof n=="number"?n:parseInt(n,10)}function ch(r){switch(typeof r=="string"&&(r=Ge[r]),r){case Ge.DT_FLOAT:case Ge.DT_HALF:return"float32";case Ge.DT_INT32:case Ge.DT_INT64:case Ge.DT_INT8:case Ge.DT_UINT8:return"int32";case Ge.DT_BOOL:return"bool";case Ge.DT_DOUBLE:return"float32";case Ge.DT_STRING:return"string";default:return null}}function uC(r,t,e){let o=r[t];return o&&o.func?o.func.name:e}function cm(r,t,e){let o=r[t];return o&&o.type?ch(o.type):e}function lm(r,t,e){let o=r[t];return o&&o.list&&o.list.type?o.list.type.map(n=>ch(n)):e}function lC(r){if(!r.unknownRank)return r.dim!=null?r.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function pm(r,t,e){let o=r[t];return o&&o.shape?lC(o.shape):e}function mm(r,t,e){let o=r[t];return o?((o.list.f&&o.list.f.length?o.list.f:o.list.i)||[]).map(n=>typeof n=="number"?n:parseInt(n,10)):e}function fm(r,t,e,o=!1){let n=r[t];return n&&n.list&&n.list.s?n.list.s.map(s=>cC(s,o)):e}function dm(r,t,e){let o=r[t];return o&&o.list&&o.list.shape?o.list.shape.map(n=>lC(n)):e}function hm(r,t,e){let o=r[t];return o&&o.list&&o.list.b?o.list.b:e}var gm=class{constructor(t,e,o){this.node=t,this.tensorMap=e,this.context=o,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(n=>this.getInput(n)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((n,s)=>(n[s]=this.getAttr(s),n),{}))}getInput(t){return Qt(t,this.tensorMap,this.context)}getAttr(t,e){let o=this.node.rawAttrs[t];if(o.tensor!=null)return Qt(t,this.tensorMap,this.context);if(o.i!=null||o.f!=null)return um(this.node.rawAttrs,t,e);if(o.s!=null)return im(this.node.rawAttrs,t,e);if(o.b!=null)return am(this.node.rawAttrs,t,e);if(o.shape!=null)return pm(this.node.rawAttrs,t,e);if(o.type!=null)return cm(this.node.rawAttrs,t,e);if(o.list!=null){if(o.list.i!=null||o.list.f!=null)return mm(this.node.rawAttrs,t,e);if(o.list.s!=null)return fm(this.node.rawAttrs,t,e);if(o.list.shape!=null)return dm(this.node.rawAttrs,t,e);if(o.list.b!=null)return hm(this.node.rawAttrs,t,e);if(o.list.type!=null)return lm(this.node.rawAttrs,t,e)}return e}};var Tt={};$t(Tt,{OP_SCOPE_SUFFIX:()=>uf,abs:()=>ue,acos:()=>Qx,acosh:()=>Zx,add:()=>ht,addN:()=>Jx,all:()=>t1,any:()=>e1,argMax:()=>r1,argMin:()=>o1,asin:()=>n1,asinh:()=>s1,atan:()=>i1,atan2:()=>a1,atanh:()=>u1,avgPool:()=>$c,avgPool3d:()=>p1,basicLSTMCell:()=>m1,batchNorm:()=>ao,batchNorm2d:()=>d1,batchNorm3d:()=>h1,batchNorm4d:()=>g1,batchToSpaceND:()=>Ic,bincount:()=>kc,booleanMaskAsync:()=>Q4,broadcastArgs:()=>x1,broadcastTo:()=>uo,buffer:()=>pt,cast:()=>gt,ceil:()=>y1,clipByValue:()=>_c,clone:()=>ke,complex:()=>ve,concat:()=>kt,concat1d:()=>b1,concat2d:()=>v1,concat3d:()=>w1,concat4d:()=>T1,conv1d:()=>C1,conv2d:()=>co,conv2dTranspose:()=>S1,conv3d:()=>N1,conv3dTranspose:()=>$1,cos:()=>I1,cosh:()=>k1,cosineWindow:()=>ci,cumprod:()=>_1,cumsum:()=>A1,denseBincount:()=>R1,depthToSpace:()=>D1,depthwiseConv2d:()=>Zn,diag:()=>F1,dilation2d:()=>O1,div:()=>xt,divNoNan:()=>P1,dot:()=>L1,dropout:()=>uk,einsum:()=>B1,elu:()=>Dc,enclosingPowerOfTwo:()=>Of,equal:()=>Rc,erf:()=>V1,euclideanNorm:()=>G1,exp:()=>Te,expandDims:()=>Ye,expm1:()=>W1,eye:()=>Fc,fft:()=>os,fill:()=>es,floor:()=>Oc,floorDiv:()=>Nc,fused:()=>Pf,gather:()=>Pc,gatherND:()=>ik,greater:()=>Go,greaterEqual:()=>Lc,ifft:()=>qo,imag:()=>so,image:()=>li,inTopKAsync:()=>lk,irfft:()=>nl,isFinite:()=>z1,isInf:()=>H1,isNaN:()=>K1,leakyRelu:()=>Bc,less:()=>q1,lessEqual:()=>rs,linalg:()=>l_,linspace:()=>j1,localResponseNormalization:()=>X1,log:()=>Vr,log1p:()=>Vc,logSigmoid:()=>Y1,logSoftmax:()=>Q1,logSumExp:()=>Uc,logicalAnd:()=>Wo,logicalNot:()=>Gc,logicalOr:()=>Wc,logicalXor:()=>Z1,losses:()=>p_,lowerBound:()=>J1,matMul:()=>bt,max:()=>Sr,maxPool:()=>Hc,maxPool3d:()=>t0,maxPoolWithArgmax:()=>e0,maximum:()=>r0,mean:()=>zo,meshgrid:()=>o0,min:()=>ii,minimum:()=>Kc,mirrorPad:()=>n0,mod:()=>s0,moments:()=>i0,movingAverage:()=>J4,mul:()=>X,multiRNNCell:()=>a0,multinomial:()=>u0,neg:()=>de,norm:()=>Uo,notEqual:()=>qc,oneHot:()=>Lx,ones:()=>Nr,onesLike:()=>c0,op:()=>T,outerProduct:()=>l0,pad:()=>Er,pad1d:()=>p0,pad2d:()=>m0,pad3d:()=>f0,pad4d:()=>d0,pool:()=>h0,pow:()=>ts,prelu:()=>Xc,print:()=>yc,prod:()=>g0,raggedTensorToTensor:()=>x0,rand:()=>y0,randomGamma:()=>P0,randomNormal:()=>tl,randomStandardNormal:()=>L0,randomUniform:()=>el,range:()=>mo,real:()=>Lr,reciprocal:()=>B0,relu:()=>fo,relu6:()=>rl,reshape:()=>L,reverse:()=>Le,reverse1d:()=>V0,reverse2d:()=>M0,reverse3d:()=>U0,reverse4d:()=>G0,rfft:()=>ns,round:()=>ol,rsqrt:()=>W0,scalar:()=>st,scatterND:()=>ek,searchSorted:()=>ui,selu:()=>z0,separableConv2d:()=>H0,setdiff1dAsync:()=>K0,sigmoid:()=>Xe,sign:()=>q0,signal:()=>c_,sin:()=>j0,sinh:()=>X0,slice:()=>rt,slice1d:()=>Y0,slice2d:()=>Q0,slice3d:()=>Z0,slice4d:()=>J0,softmax:()=>t2,softplus:()=>Mc,spaceToBatchND:()=>jc,sparse:()=>m_,sparseToDense:()=>nk,spectral:()=>u_,split:()=>Mr,sqrt:()=>ai,square:()=>lo,squaredDifference:()=>sl,squeeze:()=>Xt,stack:()=>he,step:()=>il,stridedSlice:()=>e2,string:()=>f_,sub:()=>ot,sum:()=>vt,tan:()=>r2,tanh:()=>si,tensor:()=>fe,tensor1d:()=>qt,tensor2d:()=>pr,tensor3d:()=>Sc,tensor4d:()=>o2,tensor5d:()=>n2,tensor6d:()=>s2,tile:()=>po,topk:()=>i2,transpose:()=>Tc,truncatedNormal:()=>a2,unique:()=>u2,unsortedSegmentSum:()=>c2,unstack:()=>Be,upperBound:()=>l2,variable:()=>p2,where:()=>lr,whereAsync:()=>ul,zeros:()=>Qe,zerosLike:()=>Jn});var pC=(r,t,e,o=Tt)=>{switch(r.op){case"BiasAdd":case"AddV2":case"Add":return[o.add(y("a",r,t,e),y("b",r,t,e))];case"AddN":return[o.addN(y("tensors",r,t,e))];case"FloorMod":case"Mod":return[o.mod(y("a",r,t,e),y("b",r,t,e))];case"Mul":return[o.mul(y("a",r,t,e),y("b",r,t,e))];case"RealDiv":case"Div":return[o.div(y("a",r,t,e),y("b",r,t,e))];case"DivNoNan":return[o.divNoNan(y("a",r,t,e),y("b",r,t,e))];case"FloorDiv":return[o.floorDiv(y("a",r,t,e),y("b",r,t,e))];case"Sub":return[o.sub(y("a",r,t,e),y("b",r,t,e))];case"Minimum":return[o.minimum(y("a",r,t,e),y("b",r,t,e))];case"Maximum":return[o.maximum(y("a",r,t,e),y("b",r,t,e))];case"Pow":return[o.pow(y("a",r,t,e),y("b",r,t,e))];case"SquaredDifference":return[o.squaredDifference(y("a",r,t,e),y("b",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var mC=(r,t,e,o=Tt)=>{switch(r.op){case"Abs":case"ComplexAbs":return[o.abs(y("x",r,t,e))];case"Acos":return[o.acos(y("x",r,t,e))];case"Acosh":return[o.acosh(y("x",r,t,e))];case"Asin":return[o.asin(y("x",r,t,e))];case"Asinh":return[o.asinh(y("x",r,t,e))];case"Atan":return[o.atan(y("x",r,t,e))];case"Atan2":return[o.atan2(y("x",r,t,e),y("y",r,t,e))];case"Atanh":return[o.atanh(y("x",r,t,e))];case"Ceil":return[o.ceil(y("x",r,t,e))];case"Complex":return[o.complex(y("real",r,t,e),y("imag",r,t,e))];case"Cos":return[o.cos(y("x",r,t,e))];case"Cosh":return[o.cosh(y("x",r,t,e))];case"Elu":return[o.elu(y("x",r,t,e))];case"Erf":return[o.erf(y("x",r,t,e))];case"Exp":return[o.exp(y("x",r,t,e))];case"Expm1":return[o.expm1(y("x",r,t,e))];case"Floor":return[o.floor(y("x",r,t,e))];case"Log":return[o.log(y("x",r,t,e))];case"Log1p":return[o.log1p(y("x",r,t,e))];case"Imag":return[o.imag(y("x",r,t,e))];case"Neg":return[o.neg(y("x",r,t,e))];case"Reciprocal":return[o.reciprocal(y("x",r,t,e))];case"Real":return[o.real(y("x",r,t,e))];case"Relu":return[o.relu(y("x",r,t,e))];case"Round":return[o.round(y("x",r,t,e))];case"Selu":return[o.selu(y("x",r,t,e))];case"Sigmoid":return[o.sigmoid(y("x",r,t,e))];case"Sin":return[o.sin(y("x",r,t,e))];case"Sign":return[o.sign(y("x",r,t,e))];case"Sinh":return[o.sinh(y("x",r,t,e))];case"Softplus":return[o.softplus(y("x",r,t,e))];case"Sqrt":return[o.sqrt(y("x",r,t,e))];case"Square":return[o.square(y("x",r,t,e))];case"Tanh":return[o.tanh(y("x",r,t,e))];case"Tan":return[o.tan(y("x",r,t,e))];case"ClipByValue":return[o.clipByValue(y("x",r,t,e),y("clipValueMin",r,t,e),y("clipValueMax",r,t,e))];case"Relu6":return[o.relu6(y("x",r,t,e))];case"Rsqrt":return[o.rsqrt(Qt(r.inputNames[0],t,e))];case"Prod":return[o.prod(y("x",r,t,e),y("axes",r,t,e))];case"LeakyRelu":return[o.leakyRelu(y("x",r,t,e),y("alpha",r,t,e))];case"Prelu":return[o.prelu(y("x",r,t,e),y("alpha",r,t,e))];case"IsNan":return[o.isNaN(Qt(r.inputNames[0],t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};function Re(r,t,e=""){if(!(typeof r=="number"||typeof t=="number")){S.assert(r.length===t.length,()=>e+` Shapes ${r} and ${t} must match`);for(let o=0;o<r.length;o++){let n=r[o],s=t[o];S.assert(n<0||s<0||n===s,()=>e+` Shapes ${r} and ${t} must match`)}}}function fC(r){return!(typeof r=="number"||r.some(t=>t<0))}function Ns(r,t,e){let o=xm(r,e),n=!fC(o);if(n&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${o}`);if(n&&t.forEach(s=>{o=xm(s.shape,o)}),!fC(o))throw new Error(`Non-fully-defined elementShape: ${o}`);return o}function xm(r,t){if(typeof r=="number")return t;if(typeof t=="number")return r;if(r.length!==t.length)throw new Error(`Incompatible ranks during merge: ${r} vs. ${t}`);let e=[];for(let o=0;o<r.length;++o){let n=r[o],s=t[o];if(n>=0&&s>=0&&n!==s)throw new Error(`Incompatible shape during merge: ${r} vs. ${t}`);e[o]=n>=0?n:s}return e}var ym=class{constructor(t,e,o,n,s,i,a){this.name=t,this.dtype=e,this.maxSize=o,this.elementShape=n,this.identicalElementShapes=s,this.dynamicSize=i,this.clearAfterRead=a,this.tensors=[],this.closed_=!1,this.idTensor=st(0),cr(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(e=>{(t==null||!t.has(e.tensor.id))&&e.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);let e=this.tensors[t];if(e.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(e.cleared=!0),e.read=!0,e.tensor}readMany(t){return t.map(e=>this.read(e))}write(t,e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);let o=this.tensors[t]||{};if(e.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${e.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=e.shape),Re(this.elementShape,e.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),o.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(o.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);o.tensor=e,cr(e),o.written=!0,this.tensors[t]=o}writeMany(t,e){if(t.length!==e.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${e.length}.`);t.forEach((o,n)=>this.write(o,e[n]))}gather(t,e){if(!!e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${e}`);if(t)t=t.slice(0,this.size());else{t=[];for(let n=0;n<this.size();n++)t.push(n)}if(t.length===0)return fe([],[0].concat(this.elementShape));let o=this.readMany(t);return Re(this.elementShape,o[0].shape,"TensorArray shape mismatch: "),he(o,0)}concat(t){if(!!t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return fe([],[0].concat(this.elementShape));let e=[];for(let n=0;n<this.size();n++)e.push(n);let o=this.readMany(e);return Re(this.elementShape,o[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${o[0].shape})`),kt(o,0)}scatter(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);let o=Math.max(...t);if(!this.dynamicSize&&o>=this.maxSize)throw new Error(`Max index must be < array size (${o}  vs. ${this.maxSize})`);this.writeMany(t,Be(e,0))}split(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);let o=0,n=t.map(u=>(o+=u,o));if(o!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${o}, and tensor's shape is: ${e.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);let s=o===0?0:e.size/o,i=[];_t(()=>{e=L(e,[1,o,s]);for(let u=0;u<t.length;++u){let c=u===0?0:n[u-1],l=[0,c,0],p=[1,t[u],s];i[u]=L(rt(e,l,p),this.elementShape)}return i});let a=[];for(let u=0;u<t.length;u++)a[u]=u;this.writeMany(a,i)}};var Hr=class{constructor(t,e,o,n=-1){this.tensors=t,this.elementShape=e,this.elementDtype=o,t?.forEach(s=>{if(o!==s.dtype)throw new Error(`Invalid data types; op elements ${o}, but list elements ${s.dtype}`);Re(e,s.shape,"TensorList shape mismatch: "),cr(s)}),this.idTensor=st(0),this.maxNumElements=n,cr(this.idTensor)}get id(){return this.idTensor.id}copy(){return new Hr([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(e=>{(t==null||!t.has(e.id))&&e.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,e,o=-1){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(o!==-1&&this.tensors.length!==o)throw new Error(`Operation expected a list with ${o} elements but got a list with ${this.tensors.length} elements.`);Re(t,this.elementShape,"TensorList shape mismatch: ");let n=Ns(this.elementShape,this.tensors,t);return _t(()=>{let s=this.tensors.map(i=>L(i,n));return he(s,0)})}popBack(t,e){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");let o=Ns(this.elementShape,this.tensors,t),n=this.tensors.pop();return n.kept=!1,Re(n.shape,t,"TensorList shape mismatch: "),L(n,o)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(Re(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");cr(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);let e=new Hr([],this.elementShape,this.elementDtype,this.maxNumElements);e.tensors.length=t;for(let o=0;o<Math.min(this.tensors.length,t);++o)e.tensors[o]=this.tensors[o];return e}getItem(t,e,o){if(o!==this.elementDtype)throw new Error(`Invalid data types; op elements ${o}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);Re(this.tensors[t].shape,e,"TensorList shape mismatch: ");let n=Ns(this.elementShape,this.tensors,e);return L(this.tensors[t],n)}setItem(t,e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);Re(this.elementShape,e.shape,"TensorList shape mismatch: "),cr(e),this.tensors[t]!=null&&(this.tensors[t].kept=!1),this.tensors[t]=e}gather(t,e,o){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);Re(this.elementShape,o,"TensorList shape mismatch: "),t=t.slice(0,this.size());let n=Ns(this.elementShape,this.tensors,o);return t.length===0?fe([],[0].concat(n)):_t(()=>{let s=t.map(i=>L(this.tensors[i],n));return he(s,0)})}concat(t,e){if(!!t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);Re(this.elementShape,e,"TensorList shape mismatch: ");let o=Ns(this.elementShape,this.tensors,e);return this.size()===0?fe([],[0].concat(o)):_t(()=>{let n=this.tensors.map(s=>L(s,o));return kt(n,0)})}};function dC(r,t,e){let o=r.dtype;if(r.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${r.shape}`);if(r.dtype!==e)throw new Error(`Invalid data types; op elements ${r.dtype}, but list elements ${e}`);let n=r.shape.slice(1);Re(n,t,"TensorList shape mismatch: ");let s=Be(r);return new Hr(s,t,o)}function hC(r,t,e,o){return new Hr([],r,t,o)}function gC(r,t,e,o){if(t.length!==r.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${r.shape[0]}`);let n=Math.max(...t);if(o!=null&&o!==-1&&n>=o)throw new Error(`Max index must be < array size (${n}  vs. ${o})`);let s=new Hr([],e,r.dtype,o),i=Be(r,0);return t.forEach((a,u)=>{s.setItem(a,i[u])}),s}function xC(r,t,e){let o=0,n=t.map(l=>(o+=l,o));if(o!==r.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${o}, and tensor's shape is: ${r.shape}`);let s=r.shape.slice(1),i=xm(s,e),a=o===0?0:r.size/o,u=_t(()=>{let l=[];r=L(r,[1,o,a]);for(let p=0;p<t.length;++p){let m=p===0?0:n[p-1],d=[0,m,0],h=[1,t[p],a];l[p]=L(rt(r,d,h),i)}return r.dispose(),l}),c=new Hr([],e,r.dtype,t.length);for(let l=0;l<u.length;l++)c.setItem(l,u[l]);return c}var yC=async(r,t,e)=>{switch(r.op){case"If":case"StatelessIf":{let o=y("thenBranch",r,t,e),n=y("elseBranch",r,t,e),s=y("cond",r,t,e),i=y("args",r,t,e);return(await s.data())[0]?e.functionMap[o].executeFunctionAsync(i,e.tensorArrayMap,e.tensorListMap):e.functionMap[n].executeFunctionAsync(i,e.tensorArrayMap,e.tensorListMap)}case"While":case"StatelessWhile":{let o=y("body",r,t,e),n=y("cond",r,t,e),s=y("args",r,t,e),i=await e.functionMap[n].executeFunctionAsync(s,e.tensorArrayMap,e.tensorListMap),a=s.map(l=>l.id),u=await i[0].data();i.forEach(l=>{!l.kept&&a.indexOf(l.id)===-1&&l.dispose()});let c=s;for(;u[0];){let l=c;c=await e.functionMap[o].executeFunctionAsync(c,e.tensorArrayMap,e.tensorListMap);let p=c.map(d=>d.id);l.forEach(d=>{!d.kept&&a.indexOf(d.id)===-1&&p.indexOf(d.id)===-1&&d.dispose()});let m=await e.functionMap[n].executeFunctionAsync(c,e.tensorArrayMap,e.tensorListMap);u=await m[0].data(),m.forEach(d=>{!d.kept&&a.indexOf(d.id)===-1&&p.indexOf(d.id)===-1&&d.dispose()})}return c}case"LoopCond":{let o=y("pred",r,t,e);return[hr(o)]}case"Switch":{let o=y("pred",r,t,e),n=y("data",r,t,e);return n.kept||(n=hr(n)),(await o.data())[0]?[void 0,n]:[n,void 0]}case"Merge":{let o=r.inputNames.find(n=>Qt(n,t,e)!==void 0);if(o){let n=Qt(o,t,e);return[hr(n)]}return}case"Enter":{let o=y("frameName",r,t,e),n=y("tensor",r,t,e);return e.enterFrame(o),[hr(n)]}case"Exit":{let o=y("tensor",r,t,e);return e.exitFrame(),[hr(o)]}case"NextIteration":{let o=y("tensor",r,t,e);return e.nextIteration(),[hr(o)]}case"TensorArrayV3":{let o=y("size",r,t,e),n=y("dtype",r,t,e),s=y("elementShape",r,t,e),i=y("dynamicSize",r,t,e),a=y("clearAfterRead",r,t,e),u=y("identicalElementShapes",r,t,e),c=y("name",r,t,e),l=new ym(c,n,o,s,u,i,a);return e.addTensorArray(l),[l.idTensor,st(1)]}case"TensorArrayWriteV3":{let o=y("tensorArrayId",r,t,e),n=y("index",r,t,e),s=y("tensor",r,t,e),i=e.getTensorArray(o.id);return i.write(n,s),[i.idTensor]}case"TensorArrayReadV3":{let o=y("tensorArrayId",r,t,e),n=y("index",r,t,e);return[e.getTensorArray(o.id).read(n)]}case"TensorArrayGatherV3":{let o=y("tensorArrayId",r,t,e),n=y("indices",r,t,e),s=y("dtype",r,t,e);return[e.getTensorArray(o.id).gather(n,s)]}case"TensorArrayScatterV3":{let o=y("tensorArrayId",r,t,e),n=y("indices",r,t,e),s=y("tensor",r,t,e),i=e.getTensorArray(o.id);return i.scatter(n,s),[i.idTensor]}case"TensorArrayConcatV3":{let o=y("tensorArrayId",r,t,e),n=e.getTensorArray(o.id),s=y("dtype",r,t,e);return[n.concat(s)]}case"TensorArraySplitV3":{let o=y("tensorArrayId",r,t,e),n=y("tensor",r,t,e),s=y("lengths",r,t,e),i=e.getTensorArray(o.id);return i.split(s,n),[i.idTensor]}case"TensorArraySizeV3":{let o=y("tensorArrayId",r,t,e),n=e.getTensorArray(o.id);return[st(n.size(),"int32")]}case"TensorArrayCloseV3":{let o=y("tensorArrayId",r,t,e),n=e.getTensorArray(o.id);return n.clearAndClose(),[n.idTensor]}case"TensorListSetItem":{let o=y("tensorListId",r,t,e),n=y("index",r,t,e),s=y("tensor",r,t,e),i=e.getTensorList(o.id);return i.setItem(n,s),[i.idTensor]}case"TensorListGetItem":{let o=y("tensorListId",r,t,e),n=y("index",r,t,e),s=y("elementShape",r,t,e),i=y("elementDType",r,t,e);return[e.getTensorList(o.id).getItem(n,s,i)]}case"TensorListScatterV2":case"TensorListScatter":{let o=y("indices",r,t,e),n=y("tensor",r,t,e),s=y("elementShape",r,t,e),i=y("numElements",r,t,e),a=gC(n,o,s,i);return e.addTensorList(a),[a.idTensor]}case"TensorListReserve":case"EmptyTensorList":{let o=y("elementShape",r,t,e),n=y("elementDType",r,t,e),s;r.op==="TensorListReserve"?s="numElements":s="maxNumElements";let i=y(s,r,t,e),a=r.op==="TensorListReserve"?-1:i,u=hC(o,n,i,a);return e.addTensorList(u),[u.idTensor]}case"TensorListGather":{let o=y("tensorListId",r,t,e),n=y("indices",r,t,e),s=y("elementShape",r,t,e),i=y("elementDType",r,t,e);return[e.getTensorList(o.id).gather(n,i,s)]}case"TensorListStack":{let o=y("tensorListId",r,t,e),n=y("elementShape",r,t,e),s=y("elementDType",r,t,e),i=y("numElements",r,t,e);return[e.getTensorList(o.id).stack(n,s,i)]}case"TensorListFromTensor":{let o=y("tensor",r,t,e),n=y("elementShape",r,t,e),s=y("elementDType",r,t,e),i=dC(o,n,s);return e.addTensorList(i),[i.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{let o=y("tensorListId",r,t,e),n=e.getTensorList(o.id),s=y("dtype",r,t,e),i=y("elementShape",r,t,e);return[n.concat(s,i)]}case"TensorListPushBack":{let o=y("tensorListId",r,t,e),n=y("tensor",r,t,e),s=e.getTensorList(o.id);return s.pushBack(n),[s.idTensor]}case"TensorListPopBack":{let o=y("tensorListId",r,t,e),n=y("elementShape",r,t,e),s=y("elementDType",r,t,e);return[e.getTensorList(o.id).popBack(n,s)]}case"TensorListSplit":{let o=y("tensor",r,t,e),n=y("elementShape",r,t,e),s=y("lengths",r,t,e),i=xC(o,s,n);return e.addTensorList(i),[i.idTensor]}case"TensorListLength":{let o=y("tensorListId",r,t,e),n=e.getTensorList(o.id);return[st(n.size(),"int32")]}case"TensorListResize":{let o=y("tensorListId",r,t,e),n=y("size",r,t,e),i=e.getTensorList(o.id).resize(n);return e.addTensorList(i),[i.idTensor]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};function bC(r,t,e){let[o,n]=y("fusedOps",r,t,e),s=o==="biasadd",i=!s,a=n==="prelu",u=o==="fusedbatchnorm",c=y("numArgs",r,t,e);if(s){if(a&&c!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!a&&s&&c!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(u)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");let l=y("strides",r,t,e),p=Ei(r,t,e),m=y("dataFormat",r,t,e).toUpperCase(),d=y("dilations",r,t,e),[h,g]=y("args",r,t,e);i&&(g=h,h=void 0);let x=y("leakyreluAlpha",r,t,e);return{stride:l,pad:p,dataFormat:m,dilations:d,biasArg:h,preluArg:g,activationFunc:n,leakyreluAlpha:x}}var vC=(r,t,e,o=Tt)=>{switch(r.op){case"Conv1D":{let n=y("stride",r,t,e),s=y("pad",r,t,e),i=y("dataFormat",r,t,e).toUpperCase(),a=y("dilation",r,t,e);return[o.conv1d(y("x",r,t,e),y("filter",r,t,e),n,s,i,a)]}case"Conv2D":{let n=y("strides",r,t,e),s=Ei(r,t,e),i=y("dataFormat",r,t,e).toUpperCase(),a=y("dilations",r,t,e);return[o.conv2d(y("x",r,t,e),y("filter",r,t,e),[n[1],n[2]],s,i,[a[1],a[2]])]}case"_FusedConv2D":{let{stride:n,pad:s,dataFormat:i,dilations:a,biasArg:u,preluArg:c,activationFunc:l,leakyreluAlpha:p}=bC(r,t,e);return[o.fused.conv2d({x:y("x",r,t,e),filter:y("filter",r,t,e),strides:[n[1],n[2]],pad:s,dataFormat:i,dilations:[a[1],a[2]],bias:u,activation:l,preluActivationWeights:c,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{let{stride:n,pad:s,dataFormat:i,dilations:a,biasArg:u,preluArg:c,activationFunc:l,leakyreluAlpha:p}=bC(r,t,e);return[o.fused.depthwiseConv2d({x:y("x",r,t,e),filter:y("filter",r,t,e),strides:[n[1],n[2]],pad:s,dataFormat:i,dilations:[a[1],a[2]],bias:u,activation:l,preluActivationWeights:c,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{let n=y("outputShape",r,t,e),s=y("strides",r,t,e),i=Ei(r,t,e);return[o.conv2dTranspose(y("x",r,t,e),y("filter",r,t,e),n,[s[1],s[2]],i)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{let n=y("strides",r,t,e),s=Ei(r,t,e),i=y("dilations",r,t,e),a=y("dataFormat",r,t,e).toUpperCase();return[o.depthwiseConv2d(y("input",r,t,e),y("filter",r,t,e),[n[1],n[2]],s,a,[i[1],i[2]])]}case"Conv3D":{let n=y("strides",r,t,e),s=y("pad",r,t,e),i=y("dataFormat",r,t,e).toUpperCase(),a=y("dilations",r,t,e);return[o.conv3d(y("x",r,t,e),y("filter",r,t,e),[n[1],n[2],n[3]],s,i,[a[1],a[2],a[3]])]}case"AvgPool":{let n=y("strides",r,t,e),s=y("pad",r,t,e),i=y("kernelSize",r,t,e);return[o.avgPool(y("x",r,t,e),[i[1],i[2]],[n[1],n[2]],s)]}case"MaxPool":{let n=y("strides",r,t,e),s=y("pad",r,t,e),i=y("kernelSize",r,t,e);return[o.maxPool(y("x",r,t,e),[i[1],i[2]],[n[1],n[2]],s)]}case"MaxPoolWithArgmax":{let n=y("strides",r,t,e),s=y("pad",r,t,e),i=y("kernelSize",r,t,e),a=y("includeBatchInIndex",r,t,e),{result:u,indexes:c}=o.maxPoolWithArgmax(y("x",r,t,e),[i[1],i[2]],[n[1],n[2]],s,a);return[u,c]}case"AvgPool3D":{let n=y("strides",r,t,e),s=y("pad",r,t,e),i=y("kernelSize",r,t,e);return[o.avgPool3d(y("x",r,t,e),[i[1],i[2],i[3]],[n[1],n[2],n[3]],s)]}case"MaxPool3D":{let n=y("strides",r,t,e),s=y("pad",r,t,e),i=y("kernelSize",r,t,e);return[o.maxPool3d(y("x",r,t,e),[i[1],i[2],i[3]],[n[1],n[2],n[3]],s)]}case"Dilation2D":{let n=y("strides",r,t,e),s=y("pad",r,t,e),i=y("dilations",r,t,e),a=n[1],u=n[2],c=i[1],l=i[2];return[o.dilation2d(y("x",r,t,e),y("filter",r,t,e),[a,u],s,[c,l],"NHWC")]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var wC=(r,t,e,o=Tt)=>{switch(r.op){case"Fill":{let n=y("shape",r,t,e),s=y("dtype",r,t,e),i=y("value",r,t,e);return[o.fill(n,i,s)]}case"LinSpace":{let n=y("start",r,t,e),s=y("stop",r,t,e),i=y("num",r,t,e);return[o.linspace(n,s,i)]}case"Multinomial":{let n=y("logits",r,t,e),s=y("numSamples",r,t,e),i=y("seed",r,t,e);return[o.multinomial(n,s,i)]}case"OneHot":{let n=y("indices",r,t,e),s=y("depth",r,t,e),i=y("onValue",r,t,e),a=y("offValue",r,t,e),u=y("dtype",r,t,e);return[o.oneHot(n,s,i,a,u)]}case"Ones":return[o.ones(y("shape",r,t,e),y("dtype",r,t,e))];case"OnesLike":return[o.onesLike(y("x",r,t,e))];case"RandomStandardNormal":return[o.randomStandardNormal(y("shape",r,t,e),y("dtype",r,t,e),y("seed",r,t,e))];case"RandomUniform":return[o.randomUniform(y("shape",r,t,e),y("minval",r,t,e),y("maxval",r,t,e),y("dtype",r,t,e))];case"Range":{let n=y("start",r,t,e),s=y("stop",r,t,e),i=y("step",r,t,e);return[o.range(n,s,i,y("dtype",r,t,e))]}case"TruncatedNormal":{let n=y("shape",r,t,e),s=y("mean",r,t,e),i=y("stdDev",r,t,e),a=y("seed",r,t,e);return[o.truncatedNormal(n,s,i,y("dtype",r,t,e),a)]}case"Zeros":return[o.zeros(y("shape",r,t,e),y("dtype",r,t,e))];case"ZerosLike":return[o.zerosLike(y("x",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};function lh(r,t,e){let o=y("boxes",r,t,e),n=y("scores",r,t,e),s=y("maxOutputSize",r,t,e),i=y("iouThreshold",r,t,e),a=y("scoreThreshold",r,t,e),u=y("softNmsSigma",r,t,e);return{boxes:o,scores:n,maxOutputSize:s,iouThreshold:i,scoreThreshold:a,softNmsSigma:u}}var TC=async(r,t,e,o,n=Tt)=>{switch(r.op){case"NonMaxSuppressionV5":{let{boxes:s,scores:i,maxOutputSize:a,iouThreshold:u,scoreThreshold:c,softNmsSigma:l}=lh(r,t,e),p=await n.image.nonMaxSuppressionWithScoreAsync(s,i,a,u,c,l);return[p.selectedIndices,p.selectedScores]}case"NonMaxSuppressionV4":{let{boxes:s,scores:i,maxOutputSize:a,iouThreshold:u,scoreThreshold:c}=lh(r,t,e),l=y("padToMaxOutputSize",r,t,e),p=await n.image.nonMaxSuppressionPaddedAsync(s,i,a,u,c,l);return[p.selectedIndices,p.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{let{boxes:s,scores:i,maxOutputSize:a,iouThreshold:u,scoreThreshold:c}=lh(r,t,e);return[await n.image.nonMaxSuppressionAsync(s,i,a,u,c)]}case"Where":{let s=n.cast(y("condition",r,t,e),"bool"),i=[await n.whereAsync(s)];return s.dispose(),i}case"ListDiff":return n.setdiff1dAsync(y("x",r,t,e),y("y",r,t,e));default:throw TypeError(`Node type ${r.op} is not implemented`)}};var CC=(r,t,e,o=Tt)=>{switch(r.op){case"LowerBound":{let n=y("sortedSequence",r,t,e),s=y("values",r,t,e);return[o.lowerBound(n,s)]}case"TopKV2":{let n=y("x",r,t,e),s=y("k",r,t,e),i=y("sorted",r,t,e),a=o.topk(n,s,i);return[a.values,a.indices]}case"UpperBound":{let n=y("sortedSequence",r,t,e),s=y("values",r,t,e);return[o.upperBound(n,s)]}case"Unique":{let n=y("x",r,t,e),s=o.unique(n);return[s.values,s.indices]}case"UniqueV2":{let n=y("x",r,t,e),s=y("axis",r,t,e),i=o.unique(n,s);return[i.values,i.indices]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var SC=(r,t,e,o=Tt)=>{switch(r.op){case"Const":return t[r.name];case"PlaceholderWithDefault":let n=y("default",r,t,e);return[Qt(r.name,t,e)||n];case"Placeholder":return[Qt(r.name,t,e)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{let l=y("x",r,t,e);return[hr(l)]}case"IdentityN":return y("x",r,t,e).map(l=>hr(l));case"Snapshot":let s=y("x",r,t,e);return[hr(s)];case"Shape":return[o.tensor1d(y("x",r,t,e).shape,"int32")];case"ShapeN":return y("x",r,t,e).map(l=>o.tensor1d(l.shape));case"Size":return[o.scalar(y("x",r,t,e).size,"int32")];case"Rank":return[o.scalar(y("x",r,t,e).rank,"int32")];case"NoOp":return[o.scalar(1)];case"Print":let i=y("x",r,t,e),a=y("data",r,t,e),u=y("message",r,t,e),c=y("summarize",r,t,e);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(u);for(let l=0;l<a.length;l++)console.log(Array.prototype.slice.call(a[l].dataSync()).slice(0,c));return[i];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var bm=class{constructor(t,e){this.keyDType=t,this.valueDType=e,this.handle=st(0),this.tensorMap=new Map,cr(this.handle)}get id(){return this.handle.id}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return st(this.size(),"int32")}async import(t,e){this.checkKeyAndValueTensor(t,e);let o=await t.data();return this.tensorMap.forEach(n=>n.dispose()),this.tensorMap.clear(),_t(()=>{let n=Be(e),s=o.length,i=n.length;S.assert(s===i,()=>`The number of elements doesn't match, keys has ${s} elements, the values has ${i} elements.`);for(let a=0;a<s;a++){let u=o[a],c=n[a];cr(c),this.tensorMap.set(u,c)}return this.handle})}async find(t,e){this.checkKeyAndValueTensor(t,e);let o=await t.data();return _t(()=>{let n=[];for(let s=0;s<o.length;s++){let i=o[s],a=this.findWithDefault(i,e);n.push(a)}return he(n)})}findWithDefault(t,e){let o=this.tensorMap.get(t);return o??e}checkKeyAndValueTensor(t,e){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(e.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${e.dtype}`)}};var NC=async(r,t,e,o)=>{switch(r.op){case"HashTable":case"HashTableV2":{let n=y("keyDType",r,t,e),s=y("valueDType",r,t,e),i=new bm(n,s);return o.addHashTable(r.name,i),[i.handle]}case"LookupTableImport":case"LookupTableImportV2":{let n=y("tableHandle",r,t,e,o),s=y("keys",r,t,e),i=y("values",r,t,e);return[await o.getHashTableById(n.id).import(s,i)]}case"LookupTableFind":case"LookupTableFindV2":{let n=y("tableHandle",r,t,e,o),s=y("keys",r,t,e),i=y("defaultValue",r,t,e);return[await o.getHashTableById(n.id).find(s,i)]}case"LookupTableSize":case"LookupTableSizeV2":{let n=y("tableHandle",r,t,e,o);return[o.getHashTableById(n.id).tensorSize()]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var EC=(r,t,e,o=Tt)=>{switch(r.op){case"ResizeBilinear":{let n=y("images",r,t,e),s=y("size",r,t,e),i=y("alignCorners",r,t,e),a=y("halfPixelCenters",r,t,e);return[o.image.resizeBilinear(n,[s[0],s[1]],i,a)]}case"ResizeNearestNeighbor":{let n=y("images",r,t,e),s=y("size",r,t,e),i=y("alignCorners",r,t,e),a=y("halfPixelCenters",r,t,e);return[o.image.resizeNearestNeighbor(n,[s[0],s[1]],i,a)]}case"CropAndResize":{let n=y("image",r,t,e),s=y("boxes",r,t,e),i=y("boxInd",r,t,e),a=y("cropSize",r,t,e),u=y("method",r,t,e),c=y("extrapolationValue",r,t,e);return[o.image.cropAndResize(n,s,i,a,u,c)]}case"ImageProjectiveTransformV3":{let n=y("images",r,t,e),s=y("transforms",r,t,e),i=y("outputShape",r,t,e),a=y("fillValue",r,t,e),u=y("interpolation",r,t,e),c=y("fillMode",r,t,e);return[o.image.transform(n,s,u.toLowerCase(),c.toLowerCase(),a,i)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var $C=(r,t,e,o=Tt)=>{switch(r.op){case"Equal":return[o.equal(y("a",r,t,e),y("b",r,t,e))];case"NotEqual":return[o.notEqual(y("a",r,t,e),y("b",r,t,e))];case"Greater":return[o.greater(y("a",r,t,e),y("b",r,t,e))];case"GreaterEqual":return[o.greaterEqual(y("a",r,t,e),y("b",r,t,e))];case"Less":return[o.less(y("a",r,t,e),y("b",r,t,e))];case"LessEqual":return[o.lessEqual(y("a",r,t,e),y("b",r,t,e))];case"LogicalAnd":return[o.logicalAnd(y("a",r,t,e),y("b",r,t,e))];case"LogicalNot":return[o.logicalNot(y("a",r,t,e))];case"LogicalOr":return[o.logicalOr(y("a",r,t,e),y("b",r,t,e))];case"Select":case"SelectV2":return[o.where(y("condition",r,t,e),y("a",r,t,e),y("b",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var IC=(r,t,e,o=Tt)=>{switch(r.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[o.matMul(y("a",r,t,e),y("b",r,t,e),y("transposeA",r,t,e),y("transposeB",r,t,e))];case"Einsum":return[o.einsum(y("equation",r,t,e),...y("tensors",r,t,e))];case"Transpose":return[o.transpose(y("x",r,t,e),y("perm",r,t,e))];case"_FusedMatMul":let[n,s]=y("fusedOps",r,t,e),i=n==="biasadd",a=s==="prelu",u=y("numArgs",r,t,e),c=y("leakyreluAlpha",r,t,e);if(i){if(a&&u!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!a&&u!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}let[l,p]=y("args",r,t,e);return[o.fused.matMul({a:y("a",r,t,e),b:y("b",r,t,e),transposeA:y("transposeA",r,t,e),transposeB:y("transposeB",r,t,e),bias:l,activation:s,preluActivationWeights:p,leakyreluAlpha:c})];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var kC=(r,t,e,o=Tt)=>{switch(r.op){case"EuclideanNorm":return[o.euclideanNorm(y("x",r,t,e),y("axis",r,t,e),y("keepDims",r,t,e))];case"FusedBatchNorm":case"FusedBatchNormV2":return[o.batchNorm(y("x",r,t,e),y("mean",r,t,e),y("variance",r,t,e),y("offset",r,t,e),y("scale",r,t,e),y("epsilon",r,t,e))];case"FusedBatchNormV3":return[o.batchNorm(y("x",r,t,e),y("mean",r,t,e),y("variance",r,t,e),y("offset",r,t,e),y("scale",r,t,e),y("epsilon",r,t,e))];case"LRN":return[o.localResponseNormalization(y("x",r,t,e),y("radius",r,t,e),y("bias",r,t,e),y("alpha",r,t,e),y("beta",r,t,e))];case"Softmax":return[o.softmax(y("x",r,t,e))];case"LogSoftmax":return[o.logSoftmax(y("x",r,t,e))];case"SparseToDense":return[o.sparseToDense(y("sparseIndices",r,t,e),y("outputShape",r,t,e),y("sparseValues",r,t,e),y("defaultValue",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var _C=(r,t,e,o=Tt)=>{switch(r.op){case"Max":{let a=y("axis",r,t,e),u=y("keepDims",r,t,e);return[o.max(y("x",r,t,e),a,u)]}case"Mean":{let a=y("axis",r,t,e),u=y("keepDims",r,t,e);return[o.mean(y("x",r,t,e),a,u)]}case"Min":{let a=y("axis",r,t,e),u=y("keepDims",r,t,e);return[o.min(y("x",r,t,e),a,u)]}case"Sum":{let a=y("axis",r,t,e),u=y("keepDims",r,t,e);return[o.sum(y("x",r,t,e),a,u)]}case"All":{let a=y("axis",r,t,e),u=y("keepDims",r,t,e);return[o.all(y("x",r,t,e),a,u)]}case"Any":{let a=y("axis",r,t,e),u=y("keepDims",r,t,e);return[o.any(y("x",r,t,e),a,u)]}case"ArgMax":{let a=y("axis",r,t,e);return[o.argMax(y("x",r,t,e),a)]}case"ArgMin":{let a=y("axis",r,t,e);return[o.argMin(y("x",r,t,e),a)]}case"Prod":{let a=y("axis",r,t,e),u=y("keepDims",r,t,e);return[o.prod(y("x",r,t,e),a,u)]}case"Cumprod":{let a=y("axis",r,t,e),u=y("exclusive",r,t,e),c=y("reverse",r,t,e);return[o.cumprod(y("x",r,t,e),a,u,c)]}case"Cumsum":{let a=y("axis",r,t,e),u=y("exclusive",r,t,e),c=y("reverse",r,t,e);return[o.cumsum(y("x",r,t,e),a,u,c)]}case"Bincount":let n=y("x",r,t,e),s=y("weights",r,t,e),i=y("size",r,t,e);return[o.bincount(n,s,i)];case"DenseBincount":{let a=y("x",r,t,e),u=y("weights",r,t,e),c=y("size",r,t,e),l=y("binaryOutput",r,t,e);return[o.denseBincount(a,u,c,l)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var AC=(r,t,e,o=Tt)=>{switch(r.op){case"ConcatV2":case"Concat":{let n=y("n",r,t,e),s=y("axis",r,t,e),i=y("tensors",r,t,e);return i=i.slice(0,n),[o.concat(i,s)]}case"Gather":{let n=y("x",r,t,e),s=y("indices",r,t,e);return[o.gather(n,o.cast(s,"int32"),0)]}case"GatherV2":{let n=y("axis",r,t,e),s=y("batchDims",r,t,e),i=y("x",r,t,e),a=y("indices",r,t,e);return[o.gather(i,o.cast(a,"int32"),n,s)]}case"Reverse":{let n=y("dims",r,t,e),s=[];for(let a=0;a<n.length;a++)n[a]&&s.push(a);let i=y("x",r,t,e);return[o.reverse(i,s)]}case"ReverseV2":{let n=y("axis",r,t,e),s=y("x",r,t,e);return[o.reverse(s,n)]}case"Slice":{let n=y("begin",r,t,e),s=y("size",r,t,e);return[o.slice(y("x",r,t,e),n,s)]}case"StridedSlice":{let n=y("begin",r,t,e),s=y("end",r,t,e),i=y("strides",r,t,e),a=y("beginMask",r,t,e),u=y("endMask",r,t,e),c=y("ellipsisMask",r,t,e),l=y("newAxisMask",r,t,e),p=y("shrinkAxisMask",r,t,e),m=y("x",r,t,e);return[o.stridedSlice(m,n,s,i,a,u,c,l,p)]}case"Pack":return _t(()=>{let n=y("axis",r,t,e),s=y("tensors",r,t,e),i=s[0].shape,a=o.squeeze(s[0]).shape,u=s.map(c=>{let l=S.arraysEqual(c.shape,i);if(!l&&!S.arraysEqual(o.squeeze(c).shape,a))throw new Error("the input tensors shape does not match");return l?c:o.reshape(c,i)});return[o.stack(u,n)]});case"Unpack":{let n=y("axis",r,t,e),s=y("tensor",r,t,e);return o.unstack(s,n)}case"Tile":{let n=y("reps",r,t,e);return[o.tile(y("x",r,t,e),n)]}case"Split":case"SplitV":{let n=y("axis",r,t,e),s=y("numOrSizeSplits",r,t,e),i=y("x",r,t,e);return o.split(i,s,n)}case"ScatterNd":{let n=y("indices",r,t,e),s=y("values",r,t,e),i=y("shape",r,t,e);return[o.scatterND(n,s,i)]}case"GatherNd":{let n=y("x",r,t,e),s=y("indices",r,t,e);return[o.gatherND(n,s)]}case"SparseToDense":{let n=y("sparseIndices",r,t,e),s=y("outputShape",r,t,e),i=y("sparseValues",r,t,e),a=y("defaultValue",r,t,e);return[o.sparseToDense(n,i,s,i.dtype===a.dtype?a:o.cast(a,i.dtype))]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var RC=(r,t,e,o=Tt)=>{switch(r.op){case"SparseFillEmptyRows":{let{outputIndices:n,outputValues:s,emptyRowIndicator:i,reverseIndexMap:a}=o.sparse.sparseFillEmptyRows(y("indices",r,t,e),y("values",r,t,e),y("denseShape",r,t,e),y("defaultValue",r,t,e));return[n,s,i,a]}case"SparseReshape":{let{outputIndices:n,outputShape:s}=o.sparse.sparseReshape(y("inputIndices",r,t,e),y("inputShape",r,t,e),y("newShape",r,t,e));return[n,s]}case"SparseSegmentMean":return[o.sparse.sparseSegmentMean(y("data",r,t,e),y("indices",r,t,e),y("segmentIds",r,t,e))];case"SparseSegmentSum":return[o.sparse.sparseSegmentSum(y("data",r,t,e),y("indices",r,t,e),y("segmentIds",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var DC=(r,t,e,o=Tt)=>{switch(r.op){case"FFT":return[o.fft(y("x",r,t,e))];case"IFFT":return[o.ifft(y("x",r,t,e))];case"RFFT":return[o.rfft(y("x",r,t,e))];case"IRFFT":return[o.irfft(y("x",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var FC=(r,t,e,o=Tt)=>{switch(r.op){case"StringNGrams":{let{nGrams:n,nGramsSplits:s}=o.string.stringNGrams(y("data",r,t,e),y("dataSplits",r,t,e),y("separator",r,t,e),y("nGramWidths",r,t,e),y("leftPad",r,t,e),y("rightPad",r,t,e),y("padWidth",r,t,e),y("preserveShortSequences",r,t,e));return[n,s]}case"StringSplit":{let{indices:n,values:s,shape:i}=o.string.stringSplit(y("input",r,t,e),y("delimiter",r,t,e),y("skipEmpty",r,t,e));return[n,s,i]}case"StringToHashBucketFast":return[o.string.stringToHashBucketFast(y("input",r,t,e),y("numBuckets",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var OC=(r,t,e,o=Tt)=>{switch(r.op){case"Cast":return[o.cast(y("x",r,t,e),y("dtype",r,t,e))];case"ExpandDims":{let n=y("axis",r,t,e);return[o.expandDims(y("x",r,t,e),n)]}case"Squeeze":{let n=y("axis",r,t,e);return[o.squeeze(y("x",r,t,e),n)]}case"Reshape":return[o.reshape(y("x",r,t,e),y("shape",r,t,e))];case"MirrorPad":return[o.mirrorPad(y("x",r,t,e),y("padding",r,t,e),y("mode",r,t,e))];case"PadV2":case"Pad":return[o.pad(y("x",r,t,e),y("padding",r,t,e),y("constantValue",r,t,e))];case"SpaceToBatchND":{let n=y("blockShape",r,t,e),s=y("paddings",r,t,e);return[o.spaceToBatchND(y("x",r,t,e),n,s)]}case"BatchToSpaceND":{let n=y("blockShape",r,t,e),s=y("crops",r,t,e);return[o.batchToSpaceND(y("x",r,t,e),n,s)]}case"DepthToSpace":{let n=y("blockSize",r,t,e),s=y("dataFormat",r,t,e).toUpperCase();return[o.depthToSpace(y("x",r,t,e),n,s)]}case"BroadcastTo":return[o.broadcastTo(y("x",r,t,e),y("shape",r,t,e))];case"BroadcastArgs":return[o.broadcastArgs(y("s0",r,t,e),y("s1",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};function ph(r,t,e,o,n=_t){let s=((i,a,u)=>{switch(i.category){case"arithmetic":return n(()=>pC(i,a,u));case"basic_math":return n(()=>mC(i,a,u));case"control":return yC(i,a,u);case"convolution":return n(()=>vC(i,a,u));case"creation":return n(()=>wC(i,a,u));case"dynamic":return TC(i,a,u);case"evaluation":return n(()=>CC(i,a,u));case"image":return n(()=>EC(i,a,u));case"graph":return n(()=>SC(i,a,u));case"logical":return n(()=>$C(i,a,u));case"matrices":return n(()=>IC(i,a,u));case"normalization":return n(()=>kC(i,a,u));case"reduction":return n(()=>_C(i,a,u));case"slice_join":return n(()=>AC(i,a,u));case"sparse":return n(()=>RC(i,a,u));case"spectral":return n(()=>DC(i,a,u));case"string":return n(()=>FC(i,a,u));case"transformation":return n(()=>OC(i,a,u));case"hash_table":return NC(i,a,u,o);case"custom":let c=nm(i.op);if(c&&c.customExecutor)return c.customExecutor(new gm(i,a,u));throw TypeError(`Custom op ${i.op} is not registered.`);default:throw TypeError(`Unknown op '${i.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(r,t,e);return S.isPromise(s)?s.then(i=>[].concat(i)):[].concat(s)}var Ii=class{constructor(t={},e={},o={},n={}){this.weightMap=t,this.tensorArrayMap=e,this.tensorListMap=o,this.functionMap=n,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,e){return{id:t,frameName:e,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){let t=[];for(let e=0;e<this.contexts.length-1;e++){let o=this.contexts.slice(0,this.contexts.length-e);t.push(this.contextIdforContexts(o))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(e=>e.id===0&&e.iterationId===0?"":`${e.frameName}-${e.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;let t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(let e in this.tensorArrayMap)this.tensorArrayMap[e].clearAndClose(t);for(let e in this.tensorListMap)this.tensorListMap[e].clearAndClose(t)}};function mh(r,t,e,o){let n=new Set,s=[],i=null,a=null,u=new Set,c=Object.keys(r).map(m=>xe(m)[0]),l=[];o!=null&&(l=o.map(m=>xe(m.name)[0]));let p=[...t];for(;p.length>0;){let m=p.pop();if((fh(m)||T6(m)||C6(m))&&i==null&&(i=m,a=i.children.map(d=>d.name).filter(d=>n.has(d))),n.add(m.name),e[m.name]==null&&c.indexOf(m.name)===-1&&l.indexOf(m.name)===-1){if(m.inputs.length===0){s.push(m.name);continue}m.inputs.forEach(d=>{u.has(d.name)||(u.add(d.name),p.push(d))})}}return{inputs:r,outputs:t,usedNodes:n,missingInputs:s,dynamicNode:i,syncInputs:a}}function PC(r,t,e){let{usedNodes:o,inputs:n}=e,s=[],i=Object.keys(n).map(l=>xe(l)[0]).map(l=>r.nodes[l]),a=r.initNodes;i.forEach(l=>{o.has(l.name)&&s.push(l)}),r.weights.forEach(l=>{o.has(l.name)&&s.push(l)}),a?.forEach(l=>{o.has(l.name)&&s.push(l)});let u=new Set,c=[];for(;s.length>0;){let l=s.pop();u.add(l.name),t[l.name]||c.push(l),l.children.forEach(p=>{!u.has(p.name)&&o.has(p.name)&&p.inputs.every(m=>u.has(m.name))&&s.push(p)})}return c}var b6=["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"],v6=["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"],w6=["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"];function fh(r){return b6.indexOf(r.op)>=0}function T6(r){return v6.indexOf(r.op)>=0}function C6(r){return w6.indexOf(r.op)>=0}var mn=class{constructor(t,e){this.graph=t,this.parent=e,this.compiledMap=new Map,this._weightMap={},this.SEPERATOR=",",this._functions={},this._functionExecutorMap={},this.intermediateTensors={},this.keepTensorForDebug=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(o=>{this._functionExecutorMap[o]=new mn(t.functions[o],this)})}get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){let e=Object.keys(t).map(o=>t[o].map(n=>n.id));this._weightIds=[].concat(...e),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{let e=t.signatureKey||t.name;return t.defaultOutput?`${e}:${t.defaultOutput}`:e})}get functions(){return Object.keys(this._functions).reduce((t,e)=>(t[e]=this._functions[e].signature,t),{})}getCompilationKey(t,e){let o=t.map(s=>s.name).sort(),n=e.map(s=>s.name).sort();return o.join(this.SEPERATOR)+"--"+n.join(this.SEPERATOR)}compile(t,e){let o=mh(t,e,this.weightMap,this._initNodes),{missingInputs:n,dynamicNode:s,syncInputs:i}=o;if(s!=null)throw new Error(`This execution contains the node '${s.name}', which has the dynamic op '${s.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${i}]`);if(n.length>0){let a=e.map(c=>c.name),u=Object.keys(t);throw new Error(`Cannot compute the outputs [${a}] from the provided inputs [${u}]. Missing the following inputs: [${n}]`)}return PC(this.graph,this.weightMap,o)}execute(t,e){t=this.mapInputs(t);let o=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e);let n=o.map(p=>this.graph.nodes[xe(p)[0]]),s=e.map(p=>xe(p)[0]),i=s.map(p=>this.graph.nodes[p]);this.resetIntermediateTensors(),i.length===0&&(i=this._outputs);let a=this.getCompilationKey(n,i),u=this.compiledMap.get(a);u==null&&(u=this.compile(t,i),this.compiledMap.set(a,u));let c={},l={};return _t(()=>{let p=new Ii(this.weightMap,c,l,this.functionExecutorMap),m=Object.assign({},this.weightMap);Object.keys(t).forEach(g=>{let[x,w]=xe(g),N=[];N[w]=t[g],m[x]=N});let d=this.getFrozenTensorIds(m),h={};for(let g=0;g<u.length;g++){let x=u[g];if(!m[x.name]){let w=ph(x,m,p,this._resourceManager);if(S.isPromise(w))throw new Error(`The execution of the op '${x.op}' returned a promise. Please use model.executeAsync() instead.`);m[x.name]=w,this.checkTensorForDisposal(x.name,x,m,p,d,s,h)}}return this.parent==null&&p.dispose(d),e.map(g=>Qt(g,m,p))})}getFrozenTensorIds(t){let e=[].concat.apply([],Object.keys(t).map(o=>t[o]).map(o=>o.map(n=>n.id)));return new Set(e)}checkTensorForDisposal(t,e,o,n,s,i,a){e.category==="control"||i.indexOf(t)!==-1||(o[t].forEach(u=>{u!=null&&(a[u.id]=(a[u.id]||0)+e.children.length)}),e.inputs.forEach(u=>{if(u.category!=="control"){let c=aC(u.name,o,n);c?.forEach(l=>{if(l&&!l.kept&&!s.has(l.id)){let p=a[l.id];if(p===1){if(!this.keepTensorForDebug)l.dispose();else{let[m,d]=or(e.name,n);this.intermediateTensors[m]?this.intermediateTensors[m][d]=l:(this.intermediateTensors[m]=[],this.intermediateTensors[m][d]=l)}delete a[l.id]}else p!=null&&a[l.id]--}})}}))}async executeAsync(t,e){return this._executeAsync(t,e)}disposeIntermediateTensors(){!this.intermediateTensors||(Object.keys(this.intermediateTensors).forEach(t=>this.intermediateTensors[t].forEach(e=>e.dispose())),this.disposeTensorsMap())}disposeTensorsMap(){!this.tensorsMap||Object.keys(this.tensorsMap).forEach(t=>{this.tensorsMap[t].forEach(o=>{o&&!o.kept&&!o.isDisposed&&!this.keepIds.has(o.id)&&o.dispose()})})}getIntermediateTensors(){return this.tensorsMap}resetIntermediateTensors(){for(let t in this.intermediateTensors)this.intermediateTensors[t].forEach(e=>e.dispose()),delete this.intermediateTensors[t]}async _executeAsync(t,e,o=!1,n={},s={}){o||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e));try{this.keepTensorForDebug=O().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(l){console.warn(l.message)}this.resetIntermediateTensors();let i=new Ii(this.weightMap,n,s,this.functionExecutorMap);this.tensorsMap=await this.executeWithControlFlow(t,i,e,o);let a=e.map(l=>Qt(l,this.tensorsMap,i)),u=a.map(l=>l.id),c=Object.keys(t).map(l=>t[l].id);return this.keepIds=new Set([...u,...c,...this.weightIds]),this.keepTensorForDebug||this.disposeTensorsMap(),this.parent==null&&i.dispose(this.keepIds),a}async executeFunctionAsync(t,e,o){let n=t.reduce((s,i,a)=>(s[this.inputs[a].name]=i,s),{});return this._executeAsync(n,this.outputNodes,!0,e,o)}async executeWithControlFlow(t,e,o,n){let s=Object.keys(t),i=s.map(k=>this.graph.nodes[xe(k)[0]]),a=o.map(k=>xe(k)[0]),u=a.map(k=>this.graph.nodes[k]);u.length===0&&(u=this._outputs);let{usedNodes:c,missingInputs:l,dynamicNode:p,syncInputs:m}=mh(t,u,this.weightMap,this._initNodes),d=[...i,...this.graph.weights,...this._initNodes||[]].map(k=>({node:k,contexts:e.currentContext})),h=Object.assign({},this.weightMap);Object.keys(t).forEach(k=>{let[_,D]=xe(k),B=[];B[D]=t[k],h[_]=B});let g={},x=this.getFrozenTensorIds(h),w={};for(;d.length>0;){let k=this.processStack(i,d,e,h,w,x,a,g,c);await Promise.all(k)}p==null&&!n&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");let N=u.filter(k=>!fh(k)&&!Qt(k.name,h,e)).map(k=>k.name);if(N.length>0){let k="";throw p!=null&&(k=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${m}]`),new Error(`Cannot compute the outputs [${N}] from the provided inputs [${s}]. Consider providing the following inputs: [${l}]. ${k}`)}return h}processStack(t,e,o,n,s,i,a,u,c){let l=[];for(;e.length>0;){let p=e.pop();o.currentContext=p.contexts;let m="";if(p.node.op==="Enter"&&y("isConstant",p.node,n,o)&&([m]=or(p.node.name,o)),n[p.node.name]==null){let d=ph(p.node,n,o,this._resourceManager);m||([m]=or(p.node.name,o));let h=o.currentContext;S.isPromise(d)?l.push(d.then(g=>(n[m]=g,o.currentContext=h,this.checkTensorForDisposal(m,p.node,n,o,i,a,u),this.processChildNodes(p.node,e,o,n,s,c),g))):(n[m]=d,this.checkTensorForDisposal(m,p.node,n,o,i,a,u),this.processChildNodes(p.node,e,o,n,s,c))}else this.processChildNodes(p.node,e,o,n,s,c)}return l}processChildNodes(t,e,o,n,s,i){t.children.forEach(a=>{let[u]=or(a.name,o);s[u]||!i.has(a.name)||(a.op==="Merge"?a.inputNames.some(c=>!!Qt(c,n,o))&&(s[u]=!0,e.push({contexts:o.currentContext,node:a})):a.inputNames.every(c=>!!Qt(c,n,o))&&(s[u]=!0,e.push({contexts:o.currentContext,node:a})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(e=>e.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(e=>{let o=t[e],[n]=xe(e),s=this.graph.nodes[n];if(s.attrParams.shape&&s.attrParams.shape.value){let i=s.attrParams.shape.value,a=i.length===o.shape.length&&o.shape.every((u,c)=>i[c]===-1||i[c]===u);S.assert(a,()=>`The shape of dict['${s.name}'] provided in model.execute(dict) must be [${i}], but was [${o.shape}]`)}s.attrParams.dtype&&s.attrParams.dtype.value&&S.assert(o.dtype===s.attrParams.dtype.value,()=>`The dtype of dict['${s.name}'] provided in model.execute(dict) must be ${s.attrParams.dtype.value}, but was ${o.dtype}`)})}mapInputs(t){let e={};for(let o in t)if(this._signature!=null&&this._signature.inputs!=null&&this._signature.inputs[o]!=null){let n=this._signature.inputs[o];e[n.name]=t[o]}else e[o]=t[o];return e}checkInputs(t){let e=Object.keys(t).filter(o=>{let[n]=xe(o);return this.graph.nodes[n]==null});if(e.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${e}] that are not part of graph`)}mapOutputs(t){return t.map(e=>this._signature!=null&&this._signature.outputs!=null&&this._signature.outputs[e]!=null?this._signature.outputs[e].name:e,{})}checkOutputs(t){t.forEach(e=>{let[o]=xe(e);if(!this.graph.nodes[o])throw new Error(`The output '${e}' is not found in the graph`)})}};var vm=class{constructor(t={},e={}){this.hashTableNameToHandle=t,this.hashTableMap=e}addHashTable(t,e){this.hashTableNameToHandle[t]=e.handle,this.hashTableMap[e.id]=e}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(let t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(let t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}};var S6="?tfjs-format=file",N6="model.json",wm=class{constructor(t,e={},o=oi){this.modelUrl=t,this.loadOptions=e,this.version="n/a",this.io=o,e==null&&(this.loadOptions={}),this.resourceManager=new vm}get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}findIOHandler(){let t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{let e=this.io.getLoadHandlers(t,this.loadOptions);if(e.length===0)e.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(e.length>1)throw new Error(`Found more than one (${e.length}) load handlers for URL '${[t]}'`);this.handler=e[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let t=this.handler.load();return S.isPromise(t)?t.then(e=>this.loadSync(e)):this.loadSync(t)}loadSync(t){this.artifacts=t;let e=this.artifacts.modelTopology,o=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){let s=this.artifacts.userDefinedMetadata;s.signature!=null&&(o=s.signature),s.structuredOutputKeys!=null&&(this.structuredOutputKeys=s.structuredOutputKeys)}this.signature=o,this.version=`${e.versions.producer}.${e.versions.minConsumer}`;let n=this.io.decodeWeights(this.artifacts.weightData,this.artifacts.weightSpecs);if(this.executor=new mn($i.Instance.transformGraph(e,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(n),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){let s=$i.Instance.transformGraph(t.modelInitializer);this.initializer=new mn(s),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializer.executeAsync({},[])}return!0}async save(t,e){if(typeof t=="string"){let o=this.io.getSaveHandlers(t);if(o.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(o.length>1)throw new Error(`Found more than one (${o.length}) save handlers for URL '${t}'`);t=o[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}predict(t,e){let o=this.execute(t,this.outputNodes);if(this.structuredOutputKeys){let n=o instanceof St?[o]:o,s={};return n.forEach((i,a)=>s[this.structuredOutputKeys[a]]=i),s}return o}normalizeInputs(t){if(!(t instanceof St)&&!Array.isArray(t))return t;if(t=Array.isArray(t)?t:[t],t.length!==this.inputNodes.length)throw new Error(`Input tensor count mismatch,the graph model has ${this.inputNodes.length} placeholders, while there are ${t.length} input tensors.`);return this.inputNodes.reduce((e,o,n)=>(e[o]=t[n],e),{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}execute(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);let o=this.executor.execute(t,e);return o.length>1?o:o[0]}async executeAsync(t,e){t=this.normalizeInputs(t),e=this.normalizeOutputs(e);let o=await this.executor.executeAsync(t,e);return o.length>1?o:o[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((e,o)=>(e[o]=[t[o]],e),{})}dispose(){this.executor.dispose(),this.initializer&&this.initializer.dispose(),this.resourceManager.dispose()}};async function dh(r,t={},e=oi){if(r==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof r=="string"&&(r=E6(r));let o=new wm(r,t,e);return await o.load(),o}function E6(r){return r.endsWith("/")||(r=r+"/"),`${r}${N6}${S6}`}var wo=function(){return wo=Object.assign||function(r){for(var t,e=1,o=arguments.length;e<o;e++)for(var n in t=arguments[e])Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},wo.apply(this,arguments)};function Kr(r,t,e,o){return new(e||(e=Promise))(function(n,s){function i(c){try{u(o.next(c))}catch(l){s(l)}}function a(c){try{u(o.throw(c))}catch(l){s(l)}}function u(c){var l;c.done?n(c.value):(l=c.value,l instanceof e?l:new e(function(p){p(l)})).then(i,a)}u((o=o.apply(r,t||[])).next())})}function qr(r,t){var e,o,n,s,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,o&&(n=2&l[0]?o.return:l[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,l[1])).done)return n;switch(o=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,o=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(n=i.trys,!((n=n.length>0&&n[n.length-1])||l[0]!==6&&l[0]!==2)){i=0;continue}if(l[0]===3&&(!n||l[1]>n[0]&&l[1]<n[3])){i.label=l[1];break}if(l[0]===6&&i.label<n[1]){i.label=n[1],n=l;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(l);break}n[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(r,i)}catch(p){l=[6,p],o=0}finally{e=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var UC=["rightEye","leftEye","noseTip","mouthCenter","rightEarTragion","leftEarTragion"],hh={modelType:"short",runtime:"mediapipe",maxFaces:1},$6=function(){function r(t){var e=this;this.width=0,this.height=0,this.selfieMode=!1,this.faceDetectorSolution=new MC.FaceDetection({locateFile:function(o,n){return t.solutionPath?t.solutionPath.replace(/\/+$/,"")+"/"+o:n+"/"+o}}),this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode,model:t.modelType}),this.faceDetectorSolution.onResults(function(o){if(e.height=o.image.height,e.width=o.image.width,e.faces=[],o.detections!==null)for(var n=0,s=o.detections;n<s.length;n++){var i=s[n];e.faces.push(e.normalizedToAbsolute(i.landmarks,(a=i.boundingBox,u=void 0,c=void 0,l=void 0,u=a.xCenter-a.width/2,c=u+a.width,l=a.yCenter-a.height/2,{xMin:u,xMax:c,yMin:l,yMax:l+a.height,width:a.width,height:a.height})))}var a,u,c,l})}return r.prototype.normalizedToAbsolute=function(t,e){var o=this;return{keypoints:t.map(function(n,s){return{x:n.x*o.width,y:n.y*o.height,name:UC[s]}}),box:{xMin:e.xMin*this.width,yMin:e.yMin*this.height,xMax:e.xMax*this.width,yMax:e.yMax*this.height,width:e.width*this.width,height:e.height*this.height}}},r.prototype.estimateFaces=function(t,e){return Kr(this,void 0,void 0,function(){var o,n;return qr(this,function(s){switch(s.label){case 0:return e&&e.flipHorizontal&&e.flipHorizontal!==this.selfieMode&&(this.selfieMode=e.flipHorizontal,this.faceDetectorSolution.setOptions({selfieMode:this.selfieMode})),t instanceof St?(n=ImageData.bind,[4,ni.toPixels(t)]):[3,2];case 1:return o=new(n.apply(ImageData,[void 0,s.sent(),t.shape[1],t.shape[0]])),[3,3];case 2:o=t,s.label=3;case 3:return t=o,[4,this.faceDetectorSolution.send({image:t})];case 4:return s.sent(),[2,this.faces]}})})},r.prototype.dispose=function(){this.faceDetectorSolution.close()},r.prototype.reset=function(){this.faceDetectorSolution.reset(),this.width=0,this.height=0,this.faces=null,this.selfieMode=!1},r.prototype.initialize=function(){return this.faceDetectorSolution.initialize()},r}();function I6(r){return Kr(this,void 0,void 0,function(){var t,e;return qr(this,function(o){switch(o.label){case 0:return t=function(n){if(n==null)return wo({},hh);var s=wo({},n);return s.runtime="mediapipe",s.modelType==null&&(s.modelType=hh.modelType),s.maxFaces==null&&(s.maxFaces=hh.maxFaces),s}(r),[4,(e=new $6(t)).initialize()];case 1:return o.sent(),[2,e]}})})}function k6(r,t,e,o){var n=r.width,s=r.height,i=o?-1:1,a=Math.cos(r.rotation),u=Math.sin(r.rotation),c=r.xCenter,l=r.yCenter,p=1/t,m=1/e,d=new Array(16);return d[0]=n*a*i*p,d[1]=-s*u*p,d[2]=0,d[3]=(-.5*n*a*i+.5*s*u+c)*p,d[4]=n*u*i*m,d[5]=s*a*m,d[6]=0,d[7]=(-.5*s*a-.5*n*u*i+l)*m,d[8]=0,d[9]=0,d[10]=n*p,d[11]=0,d[12]=0,d[13]=0,d[14]=0,d[15]=1,function(h){if(h.length!==16)throw new Error("Array length must be 16 but got "+h.length);return[[h[0],h[1],h[2],h[3]],[h[4],h[5],h[6],h[7]],[h[8],h[9],h[10],h[11]],[h[12],h[13],h[14],h[15]]]}(d)}function GC(r){return r instanceof St?{height:r.shape[0],width:r.shape[1]}:{height:r.height,width:r.width}}function WC(r){return r instanceof St?r:ni.fromPixels(r)}function gh(r,t){S.assert(r.width!==0,function(){return t+" width cannot be 0."}),S.assert(r.height!==0,function(){return t+" height cannot be 0."})}function _6(r,t){var e=function(o,n,s,i){var a=n-o,u=i-s;if(a===0)throw new Error("Original min and max are both "+o+", range cannot be 0.");var c=u/a;return{scale:c,offset:s-o*c}}(0,255,t[0],t[1]);return _t(function(){return ht(X(r,e.scale),e.offset)})}function A6(r,t,e){var o=t.outputTensorSize,n=t.keepAspectRatio,s=t.borderMode,i=t.outputTensorFloatRange,a=GC(r),u=function(m,d){return d?{xCenter:d.xCenter*m.width,yCenter:d.yCenter*m.height,width:d.width*m.width,height:d.height*m.height,rotation:d.rotation}:{xCenter:.5*m.width,yCenter:.5*m.height,width:m.width,height:m.height,rotation:0}}(a,e),c=function(m,d,h){if(h===void 0&&(h=!1),!h)return{top:0,left:0,right:0,bottom:0};var g=d.height,x=d.width;gh(d,"targetSize"),gh(m,"roi");var w,N,k=g/x,_=m.height/m.width,D=0,B=0;return k>_?(w=m.width,N=m.width*k,B=(1-_/k)/2):(w=m.height/k,N=m.height,D=(1-k/_)/2),m.width=w,m.height=N,{top:B,left:D,right:D,bottom:B}}(u,o,n),l=k6(u,a.width,a.height,!1),p=_t(function(){var m=WC(r),d=pr(function(x,w,N){return gh(N,"inputResolution"),[1/N.width*x[0][0]*w.width,1/N.height*x[0][1]*w.width,x[0][3]*w.width,1/N.width*x[1][0]*w.height,1/N.height*x[1][1]*w.height,x[1][3]*w.height,0,0]}(l,a,o),[1,8]),h=s==="zero"?"constant":"nearest",g=li.transform(Ye(gt(m,"float32")),d,"bilinear",h,0,[o.height,o.width]);return i!=null?_6(g,i):g});return{imageTensor:p,padding:c,transformationMatrix:l}}function LC(r){r.reduceBoxesInLowestLayer==null&&(r.reduceBoxesInLowestLayer=!1),r.interpolatedScaleAspectRatio==null&&(r.interpolatedScaleAspectRatio=1),r.fixedAnchorSize==null&&(r.fixedAnchorSize=!1);for(var t=[],e=0;e<r.numLayers;){for(var o=[],n=[],s=[],i=[],a=e;a<r.strides.length&&r.strides[a]===r.strides[e];){var u=BC(r.minScale,r.maxScale,a,r.strides.length);if(a===0&&r.reduceBoxesInLowestLayer)s.push(1),s.push(2),s.push(.5),i.push(.1),i.push(u),i.push(u);else{for(var c=0;c<r.aspectRatios.length;++c)s.push(r.aspectRatios[c]),i.push(u);if(r.interpolatedScaleAspectRatio>0){var l=a===r.strides.length-1?1:BC(r.minScale,r.maxScale,a+1,r.strides.length);i.push(Math.sqrt(u*l)),s.push(r.interpolatedScaleAspectRatio)}}a++}for(var p=0;p<s.length;++p){var m=Math.sqrt(s[p]);o.push(i[p]/m),n.push(i[p]*m)}var d=0,h=0;if(r.featureMapHeight.length>0)d=r.featureMapHeight[e],h=r.featureMapWidth[e];else{var g=r.strides[e];d=Math.ceil(r.inputSizeHeight/g),h=Math.ceil(r.inputSizeWidth/g)}for(var x=0;x<d;++x)for(var w=0;w<h;++w)for(var N=0;N<o.length;++N){var k={xCenter:(w+r.anchorOffsetX)/h,yCenter:(x+r.anchorOffsetY)/d,width:0,height:0};r.fixedAnchorSize?(k.width=1,k.height=1):(k.width=n[N],k.height=o[N]),t.push(k)}e=a}return t}function BC(r,t,e,o){return o===1?.5*(r+t):r+(t-r)*e/(o-1)}function VC(r,t){var e=t[0],o=t[1];return[e*r[0]+o*r[1]+r[3],e*r[4]+o*r[5]+r[7]]}function R6(r){return _t(function(){var t=function(n){return _t(function(){return[rt(n,[0,0,0],[1,-1,1]),rt(n,[0,0,1],[1,-1,-1])]})}(r),e=t[0],o=t[1];return{boxes:Xt(o),logits:Xt(e)}})}function D6(r,t,e,o){return Kr(this,void 0,void 0,function(){var n,s,i,a,u;return qr(this,function(c){switch(c.label){case 0:return r.sort(function(l,p){return Math.max.apply(Math,p.score)-Math.max.apply(Math,l.score)}),n=pr(r.map(function(l){return[l.locationData.relativeBoundingBox.yMin,l.locationData.relativeBoundingBox.xMin,l.locationData.relativeBoundingBox.yMax,l.locationData.relativeBoundingBox.xMax]})),s=qt(r.map(function(l){return l.score[0]})),[4,li.nonMaxSuppressionAsync(n,s,t,e)];case 1:return[4,(i=c.sent()).array()];case 2:return a=c.sent(),u=r.filter(function(l,p){return a.indexOf(p)>-1}),no([n,s,i]),[2,u]}})})}function F6(r,t,e){return Kr(this,void 0,void 0,function(){var o,n,s,i,a;return qr(this,function(u){switch(u.label){case 0:return o=r[0],n=r[1],s=function(c,l,p){return _t(function(){var m,d,h,g;p.reverseOutputOrder?(d=Xt(rt(c,[0,p.boxCoordOffset+0],[-1,1])),m=Xt(rt(c,[0,p.boxCoordOffset+1],[-1,1])),g=Xt(rt(c,[0,p.boxCoordOffset+2],[-1,1])),h=Xt(rt(c,[0,p.boxCoordOffset+3],[-1,1]))):(m=Xt(rt(c,[0,p.boxCoordOffset+0],[-1,1])),d=Xt(rt(c,[0,p.boxCoordOffset+1],[-1,1])),h=Xt(rt(c,[0,p.boxCoordOffset+2],[-1,1])),g=Xt(rt(c,[0,p.boxCoordOffset+3],[-1,1]))),d=ht(X(xt(d,p.xScale),l.w),l.x),m=ht(X(xt(m,p.yScale),l.h),l.y),p.applyExponentialOnBoxSize?(h=X(Te(xt(h,p.hScale)),l.h),g=X(Te(xt(g,p.wScale)),l.w)):(h=X(xt(h,p.hScale),l.h),g=X(xt(g,p.wScale),l.h));var x=ot(m,xt(h,2)),w=ot(d,xt(g,2)),N=ht(m,xt(h,2)),k=ht(d,xt(g,2)),_=kt([L(x,[p.numBoxes,1]),L(w,[p.numBoxes,1]),L(N,[p.numBoxes,1]),L(k,[p.numBoxes,1])],1);if(p.numKeypoints)for(var D=0;D<p.numKeypoints;++D){var B=p.keypointCoordOffset+D*p.numValuesPerKeypoint,V=void 0,U=void 0;p.reverseOutputOrder?(V=Xt(rt(c,[0,B],[-1,1])),U=Xt(rt(c,[0,B+1],[-1,1]))):(U=Xt(rt(c,[0,B],[-1,1])),V=Xt(rt(c,[0,B+1],[-1,1])));var H=ht(X(xt(V,p.xScale),l.w),l.x),W=ht(X(xt(U,p.yScale),l.h),l.y);_=kt([_,L(H,[p.numBoxes,1]),L(W,[p.numBoxes,1])],1)}return _})}(n,t,e),i=_t(function(){var c=o;return e.sigmoidScore?(e.scoreClippingThresh!=null&&(c=_c(o,-e.scoreClippingThresh,e.scoreClippingThresh)),c=Xe(c)):c}),[4,O6(s,i,e)];case 1:return a=u.sent(),no([s,i]),[2,a]}})})}function O6(r,t,e){return Kr(this,void 0,void 0,function(){var o,n,s,i,a,u,c,l,p,m,d,h;return qr(this,function(g){switch(g.label){case 0:return o=[],[4,r.data()];case 1:return n=g.sent(),[4,t.data()];case 2:for(s=g.sent(),i=0;i<e.numBoxes;++i)if(!(e.minScoreThresh!=null&&s[i]<e.minScoreThresh||(a=i*e.numCoords,u=P6(n[a+0],n[a+1],n[a+2],n[a+3],s[i],e.flipVertically,i),(c=u.locationData.relativeBoundingBox).width<0||c.height<0))){if(e.numKeypoints>0)for((l=u.locationData).relativeKeypoints=[],p=e.numKeypoints*e.numValuesPerKeypoint,m=0;m<p;m+=e.numValuesPerKeypoint)d=a+e.keypointCoordOffset+m,h={x:n[d+0],y:e.flipVertically?1-n[d+1]:n[d+1]},l.relativeKeypoints.push(h);o.push(u)}return[2,o]}})})}function P6(r,t,e,o,n,s,i){return{score:[n],ind:i,locationData:{relativeBoundingBox:{xMin:t,yMin:s?1-e:r,xMax:o,yMax:s?1-r:e,width:o-t,height:e-r}}}}var L6={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:1,featureMapHeight:[],featureMapWidth:[],numLayers:4,minScale:.1484375,maxScale:.75,inputSizeHeight:128,inputSizeWidth:128,anchorOffsetX:.5,anchorOffsetY:.5,strides:[8,16,16,16],aspectRatios:[1],fixedAnchorSize:!0},B6={reduceBoxesInLowestLayer:!1,interpolatedScaleAspectRatio:0,featureMapHeight:[],featureMapWidth:[],numLayers:1,minScale:.1484375,maxScale:.75,inputSizeHeight:192,inputSizeWidth:192,anchorOffsetX:.5,anchorOffsetY:.5,strides:[4],aspectRatios:[1],fixedAnchorSize:!0},xh={runtime:"tfjs",modelType:"short",maxFaces:1,detectorModelUrl:"https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"},V6={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:896,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:128,yScale:128,hScale:128,wScale:128,minScoreThresh:.5},M6={applyExponentialOnBoxSize:!1,flipVertically:!1,ignoreClasses:[],numClasses:1,numBoxes:2304,numCoords:16,boxCoordOffset:0,keypointCoordOffset:4,numKeypoints:6,numValuesPerKeypoint:2,sigmoidScore:!0,scoreClippingThresh:100,reverseOutputOrder:!0,xScale:192,yScale:192,hScale:192,wScale:192,minScoreThresh:.6},U6=.3,G6={outputTensorSize:{width:128,height:128},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},W6={outputTensorSize:{width:192,height:192},keepAspectRatio:!0,outputTensorFloatRange:[-1,1],borderMode:"zero"},ki,z6=function(){function r(t,e,o){this.detectorModel=e,this.maxFaces=o,t==="full"?(this.imageToTensorConfig=W6,this.tensorsToDetectionConfig=M6,this.anchors=LC(B6)):(this.imageToTensorConfig=G6,this.tensorsToDetectionConfig=V6,this.anchors=LC(L6));var n=qt(this.anchors.map(function(u){return u.width})),s=qt(this.anchors.map(function(u){return u.height})),i=qt(this.anchors.map(function(u){return u.xCenter})),a=qt(this.anchors.map(function(u){return u.yCenter}));this.anchorTensor={x:i,y:a,w:n,h:s}}return r.prototype.dispose=function(){this.detectorModel.dispose(),no([this.anchorTensor.x,this.anchorTensor.y,this.anchorTensor.w,this.anchorTensor.h])},r.prototype.reset=function(){},r.prototype.detectFaces=function(t,e){return e===void 0&&(e=!1),Kr(this,void 0,void 0,function(){var o,n,s,i,a,u,c,l,p,m,d;return qr(this,function(h){switch(h.label){case 0:return t==null?(this.reset(),[2,[]]):(o=_t(function(){var g=gt(WC(t),"float32");return e&&(g=Xt(li.flipLeftRight(Ye(g,0)),[0])),g}),n=A6(o,this.imageToTensorConfig),s=n.imageTensor,i=n.transformationMatrix,a=this.detectorModel.execute(s,"Identity:0"),u=R6(a),c=u.boxes,[4,F6([l=u.logits,c],this.anchorTensor,this.tensorsToDetectionConfig)]);case 1:return(p=h.sent()).length===0?(no([o,s,a,l,c]),[2,p]):[4,D6(p,this.maxFaces,U6)];case 2:return m=h.sent(),d=function(g,x){g===void 0&&(g=[]);var w,N=(w=x,[].concat.apply([],w));return g.forEach(function(k){var _=k.locationData;_.relativeKeypoints.forEach(function(W){var j=VC(N,[W.x,W.y]),Z=j[0],lt=j[1];W.x=Z,W.y=lt});var D=_.relativeBoundingBox,B=Number.MAX_VALUE,V=Number.MAX_VALUE,U=Number.MIN_VALUE,H=Number.MIN_VALUE;[[D.xMin,D.yMin],[D.xMin+D.width,D.yMin],[D.xMin+D.width,D.yMin+D.height],[D.xMin,D.yMin+D.height]].forEach(function(W){var j=VC(N,W),Z=j[0],lt=j[1];B=Math.min(B,Z),U=Math.max(U,Z),V=Math.min(V,lt),H=Math.max(H,lt)}),_.relativeBoundingBox={xMin:B,xMax:U,yMin:V,yMax:H,width:U-B,height:H-V}}),g}(m,i),no([o,s,a,l,c]),[2,d]}})})},r.prototype.estimateFaces=function(t,e){return Kr(this,void 0,void 0,function(){var o,n;return qr(this,function(s){return o=GC(t),n=!!e&&e.flipHorizontal,[2,this.detectFaces(t,n).then(function(i){return i.map(function(a){for(var u=a.locationData.relativeKeypoints.map(function(h,g){return wo(wo({},h),{x:h.x*o.width,y:h.y*o.height,name:UC[g]})}),c=a.locationData.relativeBoundingBox,l=0,p=["width","xMax","xMin"];l<p.length;l++)c[p[l]]*=o.width;for(var m=0,d=["height","yMax","yMin"];m<d.length;m++)c[d[m]]*=o.height;return{keypoints:u,box:c}})})]})})},r}();function H6(r){return Kr(this,void 0,void 0,function(){var t,e,o;return qr(this,function(n){switch(n.label){case 0:return t=function(s){if(s==null)return wo({},xh);var i=wo({},s);return i.modelType==null&&(i.modelType=xh.modelType),i.maxFaces==null&&(i.maxFaces=xh.maxFaces),i.detectorModelUrl==null&&(i.modelType==="full"?i.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/full/1":i.detectorModelUrl="https://tfhub.dev/mediapipe/tfjs-model/face_detection/short/1"),i}(r),e=typeof t.detectorModelUrl=="string"&&t.detectorModelUrl.indexOf("https://tfhub.dev")>-1,[4,dh(t.detectorModelUrl,{fromTFHub:e})];case 1:return o=n.sent(),[2,new z6(t.modelType,o,t.maxFaces)]}})})}function zC(r,t){return Kr(this,void 0,void 0,function(){var e,o;return qr(this,function(n){if(r===ki.MediaPipeFaceDetector){if(o=void 0,(e=t)!=null){if(e.runtime==="tfjs")return[2,H6(e)];if(e.runtime==="mediapipe")return[2,I6(e)];o=e.runtime}throw new Error("Expect modelConfig.runtime to be either 'tfjs' or 'mediapipe', but got "+o)}throw new Error(r+" is not a supported model name.")})})}(function(r){r.MediaPipeFaceDetector="MediaPipeFaceDetector"})(ki||(ki={}));var q6=ki.MediaPipeFaceDetector,j6={runtime:"mediapipe",solutionPath:"/"},X6=zC(q6,j6),HC=()=>X6;function Y6(r,t,e){let o=new Path2D;o.moveTo(t[0][0],t[0][1]);for(let n=1;n<t.length;n++){let s=t[n];o.lineTo(s[0],s[1])}e&&o.closePath(),r.stroke(o)}var Q6="#32EEDB",Z6="#FF2C35";var J6=6;function KC(r,t,e,o){t.forEach(n=>{let s=n.keypoints.map(i=>[i.x,i.y]);if(e){r.strokeStyle=Z6,r.lineWidth=1;let i=n.box;Y6(r,[[i.xMin,i.yMin],[i.xMax,i.yMin],[i.xMax,i.yMax],[i.xMin,i.yMax]],!0)}if(o){r.fillStyle=Q6;for(let i=0;i<J6;i++){let a=s[i][0],u=s[i][1];r.beginPath(),r.arc(a,u,3,0,2*Math.PI),r.fill()}}})}var tL=async r=>{let t;try{t=await navigator.mediaDevices.getUserMedia({video:{height:640,width:640},audio:!1}),r.srcObject=t,r.onloadedmetadata=()=>{r.play()}}catch(e){throw console.error("Cannot get media",e),e}},eL=()=>{let r=document.getElementById("camera"),e=document.getElementById("c1").getContext("2d"),n=document.getElementById("c2").getContext("2d");if(!r||!e||!n)throw Error("Elements couldn't be resolved. Something wrong in the DOM");return[r,e,n]},rL=(r,t)=>{r.addEventListener("play",t)},qC=(r,t,e,o,n,s)=>{if(!r)return;o.drawImage(r,0,0,t,e);let i=o.getImageData(0,0,t,e);s&&s(i)(n),n.putImageData(i,0,0),setTimeout(()=>qC(r,t,e,o,n,s),0)};document.addEventListener("DOMContentLoaded",async()=>{let[r,t,e]=eL();await tL(r);let o=await HC(),n=s=>async i=>{let a=await o.estimateFaces(s);KC(e,a,!0,!0)};rL(r,()=>{let s=r.videoHeight,i=r.videoWidth;qC(r,i,s,t,e,n)})});})();
/**
    * @license
    * Copyright 2022 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */
/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * =============================================================================
 */
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
/** @license See the LICENSE file. */
