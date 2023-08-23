var Ml=Object.defineProperty;var Sl=(i,t,e)=>t in i?Ml(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var yt=(i,t,e)=>(Sl(i,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();class El{static isWebGLAvailable(){try{const t=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const t=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&t.getContext("webgl2"))}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(t){const e={1:"WebGL",2:"WebGL 2"},n={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let r='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const s=document.createElement("div");return s.id="webglmessage",s.style.fontFamily="monospace",s.style.fontSize="13px",s.style.fontWeight="normal",s.style.textAlign="center",s.style.background="#fff",s.style.color="#000",s.style.padding="1.5em",s.style.width="400px",s.style.margin="5em auto 0",n[t]?r=r.replace("$0","graphics card"):r=r.replace("$0","browser"),r=r.replace("$1",e[t]),s.innerHTML=r,s}}const fo=El;var bl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hs(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var dc={exports:{}},Tl=function(){var t=this,e=-1;return{next:function(){return e+=1,{value:t.items[e],done:e>=t.items.length}}}},wl=function(){return this.items};function gs(i){"@babel/helpers - typeof";return gs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gs(i)}var Kt={isArray:function(t){return Array.isArray(t)},isObject:function(t){return gs(t)==="object"&&Array.isArray(t)===!1&&t!==null},isFunction:function(t){return typeof t=="function"}},Al=Kt,Rl=Al.isFunction,pc=function(t){return t===void 0?this.sum()/this.items.length:Rl(t)?new this.constructor(this.items).sum(t)/this.items.length:new this.constructor(this.items).pluck(t).sum()/this.items.length},Cl=pc,Ll=Cl;function _s(i){"@babel/helpers - typeof";return _s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_s(i)}var Pl=function(t){var e=this,n=[],r=0;if(Array.isArray(this.items))do{var s=this.items.slice(r,r+t),a=new this.constructor(s);n.push(a),r+=t}while(r<this.items.length);else if(_s(this.items)==="object"){var o=Object.keys(this.items),c=function(){var u=o.slice(r,r+t),f=new e.constructor({});u.forEach(function(d){return f.put(d,e.items[d])}),n.push(f),r+=t};do c();while(r<o.length)}else n.push(new this.constructor([this.items]));return new this.constructor(n)};function Dl(i){return Fl(i)||Ol(i)||Il(i)||Ul()}function Ul(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Il(i,t){if(i){if(typeof i=="string")return vs(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return vs(i,t)}}function Ol(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Fl(i){if(Array.isArray(i))return vs(i)}function vs(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}var Nl=function(){var t;return new this.constructor((t=[]).concat.apply(t,Dl(this.items)))};function Bl(i,t){return Vl(i)||Hl(i,t)||Gl(i,t)||zl()}function zl(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gl(i,t){if(i){if(typeof i=="string")return po(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return po(i,t)}}function po(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}function Hl(i,t){var e=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var n=[],r=!0,s=!1,a,o;try{for(e=e.call(i);!(r=(a=e.next()).done)&&(n.push(a.value),!(t&&n.length===t));r=!0);}catch(c){s=!0,o=c}finally{try{!r&&e.return!=null&&e.return()}finally{if(s)throw o}}return n}}function Vl(i){if(Array.isArray(i))return i}function mr(i){"@babel/helpers - typeof";return mr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mr(i)}var Wl=function(t){var e=this,n=t;n instanceof this.constructor&&(n=t.all());var r={};if(Array.isArray(this.items)&&Array.isArray(n))this.items.forEach(function(o,c){r[o]=n[c]});else if(mr(this.items)==="object"&&mr(n)==="object")Object.keys(this.items).forEach(function(o,c){r[e.items[o]]=n[Object.keys(n)[c]]});else if(Array.isArray(this.items))r[this.items[0]]=n;else if(typeof this.items=="string"&&Array.isArray(n)){var s=n,a=Bl(s,1);r[this.items]=a[0]}else typeof this.items=="string"&&(r[this.items]=n);return new this.constructor(r)};function kl(i){return ql(i)||$l(i)||Xl(i)||jl()}function jl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xl(i,t){if(i){if(typeof i=="string")return ys(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ys(i,t)}}function $l(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function ql(i){if(Array.isArray(i))return ys(i)}function ys(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}var mc=function(t){var e;if(Array.isArray(t)){var n;e=[],(n=e).push.apply(n,kl(t))}else e={},Object.keys(t).forEach(function(r){e[r]=t[r]});return e};function gr(i){"@babel/helpers - typeof";return gr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gr(i)}var Yl=mc,Kl=function(t){var e=t;t instanceof this.constructor?e=t.all():gr(t)==="object"&&(e=[],Object.keys(t).forEach(function(r){e.push(t[r])}));var n=Yl(this.items);return e.forEach(function(r){gr(r)==="object"?Object.keys(r).forEach(function(s){return n.push(r[s])}):n.push(r)}),new this.constructor(n)};function mo(i){return tu(i)||Ql(i)||Jl(i)||Zl()}function Zl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jl(i,t){if(i){if(typeof i=="string")return xs(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return xs(i,t)}}function Ql(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function tu(i){if(Array.isArray(i))return xs(i)}function xs(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}var qe=function(t){var e=[];return Array.isArray(t)?e.push.apply(e,mo(t)):t.constructor.name==="Collection"?e.push.apply(e,mo(t.all())):Object.keys(t).forEach(function(n){return e.push(t[n])}),e};function eu(i){return su(i)||ru(i)||iu(i)||nu()}function nu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iu(i,t){if(i){if(typeof i=="string")return Ms(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ms(i,t)}}function ru(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function su(i){if(Array.isArray(i))return Ms(i)}function Ms(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}var ou=qe,au=Kt,cu=au.isFunction,gc=function(t,e){if(e!==void 0)return Array.isArray(this.items)?this.items.filter(function(r){return r[t]!==void 0&&r[t]===e}).length>0:this.items[t]!==void 0&&this.items[t]===e;if(cu(t))return this.items.filter(function(r,s){return t(r,s)}).length>0;if(Array.isArray(this.items))return this.items.indexOf(t)!==-1;var n=ou(this.items);return n.push.apply(n,eu(Object.keys(this.items))),n.indexOf(t)!==-1},lu=function(){return this.count()===1},uu=function(){var t=0;return Array.isArray(this.items)&&(t=this.items.length),Math.max(Object.keys(this.items).length,t)},hu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:function(e){return e};return new this.constructor(this.items).groupBy(t).map(function(e){return e.count()})},fu=function(){function t(s,a,o){var c=o[0];c instanceof a&&(c=c.all());for(var l=o.slice(1),u=!l.length,f=[],d=0;d<c.length;d+=1){var m=s.slice();m.push(c[d]),u?f.push(m):f=f.concat(t(m,a,l))}return f}for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return new this.constructor(t([],this.constructor,[].concat([this.items],n)))},du=function(){this.dump(),typeof process<"u"&&process.exit(1)},pu=function(t){var e;t instanceof this.constructor?e=t.all():e=t;var n=this.items.filter(function(r){return e.indexOf(r)===-1});return new this.constructor(n)},mu=function(t){var e=this,n=t;t instanceof this.constructor&&(n=t.all());var r={};return Object.keys(this.items).forEach(function(s){(n[s]===void 0||n[s]!==e.items[s])&&(r[s]=e.items[s])}),new this.constructor(r)},gu=function(t){var e;t instanceof this.constructor?e=t.all():e=t;var n=Object.keys(e),r=Object.keys(this.items).filter(function(s){return n.indexOf(s)===-1});return new this.constructor(this.items).only(r)},_u=function(t,e){var n=this.items.filter(function(r){return!(t&&t.some(function(s){return e(r,s)===0}))});return new this.constructor(n)},vu=function(t,e){return!this.contains(t,e)},yu=function(){return console.log(this),this};function _r(i){"@babel/helpers - typeof";return _r=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_r(i)}var xu=function(){var t=this,e=[],n={},r=function(a){return Array.isArray(a)||_r(a)==="object"?JSON.stringify(a):a};return Array.isArray(this.items)?this.items.forEach(function(s,a){var o=r(s);e.indexOf(o)===-1?e.push(o):n[a]=s}):_r(this.items)==="object"&&Object.keys(this.items).forEach(function(s){var a=r(t.items[s]);e.indexOf(a)===-1?e.push(a):n[s]=t.items[s]}),new this.constructor(n)},Mu=function(t){var e=!1;if(Array.isArray(this.items))for(var n=this.items.length,r=0;r<n&&!e;r+=1)e=t(this.items[r],r,this.items)===!1;else for(var s=Object.keys(this.items),a=s.length,o=0;o<a&&!e;o+=1){var c=s[o];e=t(this.items[c],c,this.items)===!1}return this};function Su(i){return wu(i)||Tu(i)||bu(i)||Eu()}function Eu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bu(i,t){if(i){if(typeof i=="string")return Ss(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ss(i,t)}}function Tu(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function wu(i){if(Array.isArray(i))return Ss(i)}function Ss(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}var Au=function(t){return this.each(function(e,n){t.apply(void 0,Su(e).concat([n]))}),this},Ru=qe,Cu=function(t){var e=Ru(this.items);return e.every(t)},Sr=function(t){return Array.isArray(t[0])?t[0]:t},Lu=Sr,Pu=function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var s=Lu(n);if(Array.isArray(this.items)){var a=this.items.filter(function(c){return s.indexOf(c)===-1});return new this.constructor(a)}var o={};return Object.keys(this.items).forEach(function(c){s.indexOf(c)===-1&&(o[c]=t.items[c])}),new this.constructor(o)};function Es(i){"@babel/helpers - typeof";return Es=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Es(i)}function _c(i){if(Array.isArray(i)){if(i.length)return!1}else if(i!=null&&Es(i)==="object"){if(Object.keys(i).length)return!1}else if(i)return!1;return!0}function Du(i,t){var e={};return Object.keys(t).forEach(function(n){i?i(t[n],n)&&(e[n]=t[n]):_c(t[n])||(e[n]=t[n])}),e}function Uu(i,t){if(i)return t.filter(i);for(var e=[],n=0;n<t.length;n+=1){var r=t[n];_c(r)||e.push(r)}return e}var Iu=function(t){var e=t||!1,n=null;return Array.isArray(this.items)?n=Uu(e,this.items):n=Du(e,this.items),new this.constructor(n)},Ou=Kt,Dr=Ou.isFunction,Fu=function(t,e){if(Dr(t)){for(var n=Object.keys(this.items),r=0;r<n.length;r+=1){var s=n[r],a=this.items[s];if(t(a,s))return a}return Dr(e)?e():e}if(Array.isArray(this.items)&&this.items.length||Object.keys(this.items).length){if(Array.isArray(this.items))return this.items[0];var o=Object.keys(this.items)[0];return this.items[o]}return Dr(e)?e():e},Nu=Kt,Bu=Nu.isFunction,zu=function(t,e,n){if(Bu(t))return this.first(t,function(){throw new Error("Item not found.")});var r=this.where(t,e,n);if(r.isEmpty())throw new Error("Item not found.");return r.first()},Gu=function(t,e,n){return this.where(t,e,n).first()||null},Hu=function(t){return this.map(t).collapse()},vc=Kt,Ur=vc.isArray,Ir=vc.isObject,Vu=function(t){var e=t||1/0,n=!1,r=[],s=function(o){r=[],Ur(o)?o.forEach(function(c){Ur(c)?r=r.concat(c):Ir(c)?Object.keys(c).forEach(function(l){r=r.concat(c[l])}):r.push(c)}):Object.keys(o).forEach(function(c){Ur(o[c])?r=r.concat(o[c]):Ir(o[c])?Object.keys(o[c]).forEach(function(l){r=r.concat(o[c][l])}):r.push(o[c])}),n=r.filter(function(c){return Ir(c)}),n=n.length===0,e-=1};for(s(this.items);!n&&e>0;)s(r);return new this.constructor(r)},Wu=function(){var t=this,e={};return Array.isArray(this.items)?Object.keys(this.items).forEach(function(n){e[t.items[n]]=Number(n)}):Object.keys(this.items).forEach(function(n){e[t.items[n]]=n}),new this.constructor(e)},ku=function(t,e){var n=this,r={};return Array.isArray(this.items)?r=this.items.slice(t*e-e,t*e):Object.keys(this.items).slice(t*e-e,t*e).forEach(function(s){r[s]=n.items[s]}),new this.constructor(r)},ju=function(t){return Array.isArray(this.items)?this.items.splice(t,1):delete this.items[t],this},Xu=Kt,$u=Xu.isFunction,qu=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return this.items[t]!==void 0?this.items[t]:$u(e)?e():e!==null?e:null},xn=function(t,e){try{return e.split(".").reduce(function(n,r){return n[r]},t)}catch{return t}},Or=xn,Yu=Kt,Ku=Yu.isFunction,Zu=function(t){var e=this,n={};return this.items.forEach(function(r,s){var a;Ku(t)?a=t(r,s):Or(r,t)||Or(r,t)===0?a=Or(r,t):a="",n[a]===void 0&&(n[a]=new e.constructor([])),n[a].push(r)}),new this.constructor(n)},Ju=Sr,Qu=function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var s=Ju(n);return s.filter(function(a){return Object.hasOwnProperty.call(t.items,a)}).length===s.length},th=function(t,e){return e===void 0?this.items.join(t):new this.constructor(this.items).pluck(t).all().join(e)},eh=function(t){var e=t;t instanceof this.constructor&&(e=t.all());var n=this.items.filter(function(r){return e.indexOf(r)!==-1});return new this.constructor(n)},nh=function(t){var e=this,n=Object.keys(t);t instanceof this.constructor&&(n=Object.keys(t.all()));var r={};return Object.keys(this.items).forEach(function(s){n.indexOf(s)!==-1&&(r[s]=e.items[s])}),new this.constructor(r)},ih=function(){return Array.isArray(this.items)?!this.items.length:!Object.keys(this.items).length},rh=function(){return!this.isEmpty()},sh=function(t,e){var n=this.values();if(e===void 0)return n.implode(t);var r=n.count();if(r===0)return"";if(r===1)return n.last();var s=n.pop();return n.implode(t)+e+s},oh=xn,ah=Kt,ch=ah.isFunction,lh=function(t){var e={};return ch(t)?this.items.forEach(function(n){e[t(n)]=n}):this.items.forEach(function(n){var r=oh(n,t);e[r||""]=n}),new this.constructor(e)},uh=function(){var t=Object.keys(this.items);return Array.isArray(this.items)&&(t=t.map(Number)),new this.constructor(t)},hh=Kt,go=hh.isFunction,fh=function(t,e){var n=this.items;if(go(t)&&(n=this.filter(t).all()),Array.isArray(n)&&!n.length||!Object.keys(n).length)return go(e)?e():e;if(Array.isArray(n))return n[n.length-1];var r=Object.keys(n);return n[r[r.length-1]]},dh=function(t,e){this.constructor.prototype[t]=e},ph=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return new this.constructor(t)},mh=function(t){var e=this;if(Array.isArray(this.items))return new this.constructor(this.items.map(t));var n={};return Object.keys(this.items).forEach(function(r){n[r]=t(e.items[r],r)}),new this.constructor(n)};function gh(i){return xh(i)||yh(i)||vh(i)||_h()}function _h(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vh(i,t){if(i){if(typeof i=="string")return bs(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return bs(i,t)}}function yh(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function xh(i){if(Array.isArray(i))return bs(i)}function bs(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}var Mh=function(t){return this.map(function(e,n){return t.apply(void 0,gh(e).concat([n]))})};function Sh(i,t){return wh(i)||Th(i,t)||bh(i,t)||Eh()}function Eh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bh(i,t){if(i){if(typeof i=="string")return _o(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return _o(i,t)}}function _o(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}function Th(i,t){var e=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var n=[],r=!0,s=!1,a,o;try{for(e=e.call(i);!(r=(a=e.next()).done)&&(n.push(a.value),!(t&&n.length===t));r=!0);}catch(c){s=!0,o=c}finally{try{!r&&e.return!=null&&e.return()}finally{if(s)throw o}}return n}}function wh(i){if(Array.isArray(i))return i}var Ah=function(t){var e={};return this.items.forEach(function(n,r){var s=t(n,r),a=Sh(s,2),o=a[0],c=a[1];e[o]===void 0?e[o]=[c]:e[o].push(c)}),new this.constructor(e)},Rh=function(t){return this.map(function(e,n){return new t(e,n)})};function Ch(i,t){return Uh(i)||Dh(i,t)||Ph(i,t)||Lh()}function Lh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ph(i,t){if(i){if(typeof i=="string")return vo(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return vo(i,t)}}function vo(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}function Dh(i,t){var e=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var n=[],r=!0,s=!1,a,o;try{for(e=e.call(i);!(r=(a=e.next()).done)&&(n.push(a.value),!(t&&n.length===t));r=!0);}catch(c){s=!0,o=c}finally{try{!r&&e.return!=null&&e.return()}finally{if(s)throw o}}return n}}function Uh(i){if(Array.isArray(i))return i}var Ih=function(t){var e={};return this.items.forEach(function(n,r){var s=t(n,r),a=Ch(s,2),o=a[0],c=a[1];e[o]===void 0?e[o]=[c]:e[o].push(c)}),new this.constructor(e)};function yo(i,t){return Bh(i)||Nh(i,t)||Fh(i,t)||Oh()}function Oh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Fh(i,t){if(i){if(typeof i=="string")return xo(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return xo(i,t)}}function xo(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}function Nh(i,t){var e=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var n=[],r=!0,s=!1,a,o;try{for(e=e.call(i);!(r=(a=e.next()).done)&&(n.push(a.value),!(t&&n.length===t));r=!0);}catch(c){s=!0,o=c}finally{try{!r&&e.return!=null&&e.return()}finally{if(s)throw o}}return n}}function Bh(i){if(Array.isArray(i))return i}var zh=function(t){var e=this,n={};return Array.isArray(this.items)?this.items.forEach(function(r,s){var a=t(r,s),o=yo(a,2),c=o[0],l=o[1];n[c]=l}):Object.keys(this.items).forEach(function(r){var s=t(e.items[r],r),a=yo(s,2),o=a[0],c=a[1];n[o]=c}),new this.constructor(n)};function Mo(i){return Wh(i)||Vh(i)||Hh(i)||Gh()}function Gh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hh(i,t){if(i){if(typeof i=="string")return Ts(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Ts(i,t)}}function Vh(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Wh(i){if(Array.isArray(i))return Ts(i)}function Ts(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}var kh=function(t){if(typeof t=="string"){var e=this.items.filter(function(n){return n[t]!==void 0});return Math.max.apply(Math,Mo(e.map(function(n){return n[t]})))}return Math.max.apply(Math,Mo(this.items))},jh=function(t){var e=this.items.length;return t===void 0?e%2===0?(this.items[e/2-1]+this.items[e/2])/2:this.items[Math.floor(e/2)]:e%2===0?(this.items[e/2-1][t]+this.items[e/2][t])/2:this.items[Math.floor(e/2)][t]},Xh=function(t){var e=t;if(typeof e=="string"&&(e=[e]),Array.isArray(this.items)&&Array.isArray(e))return new this.constructor(this.items.concat(e));var n=JSON.parse(JSON.stringify(this.items));return Object.keys(e).forEach(function(r){n[r]=e[r]}),new this.constructor(n)};function vr(i){"@babel/helpers - typeof";return vr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},vr(i)}function So(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),e.push.apply(e,n)}return e}function Eo(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?So(Object(e),!0).forEach(function(n){$h(i,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):So(Object(e)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(e,n))})}return i}function $h(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}var qh=function(t){var e=function n(r,s){var a={},o=Object.keys(Eo(Eo({},r),s));return o.forEach(function(c){r[c]===void 0&&s[c]!==void 0?a[c]=s[c]:r[c]!==void 0&&s[c]===void 0?a[c]=r[c]:r[c]!==void 0&&s[c]!==void 0&&(r[c]===s[c]?a[c]=r[c]:!Array.isArray(r[c])&&vr(r[c])==="object"&&!Array.isArray(s[c])&&vr(s[c])==="object"?a[c]=n(r[c],s[c]):a[c]=[].concat(r[c],s[c]))}),a};return t?t.constructor.name==="Collection"?new this.constructor(e(this.items,t.all())):new this.constructor(e(this.items,t)):this};function bo(i){return Jh(i)||Zh(i)||Kh(i)||Yh()}function Yh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kh(i,t){if(i){if(typeof i=="string")return ws(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return ws(i,t)}}function Zh(i){if(typeof Symbol<"u"&&i[Symbol.iterator]!=null||i["@@iterator"]!=null)return Array.from(i)}function Jh(i){if(Array.isArray(i))return ws(i)}function ws(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=i[e];return n}var Qh=function(t){if(t!==void 0){var e=this.items.filter(function(n){return n[t]!==void 0});return Math.min.apply(Math,bo(e.map(function(n){return n[t]})))}return Math.min.apply(Math,bo(this.items))},tf=function(t){var e=[],n=1;return this.items.length?(this.items.forEach(function(r){var s=e.filter(function(o){return t!==void 0?o.key===r[t]:o.key===r});if(!s.length)t!==void 0?e.push({key:r[t],count:1}):e.push({key:r,count:1});else{s[0].count+=1;var a=s[0].count;a>n&&(n=a)}}),e.filter(function(r){return r.count===n}).map(function(r){return r.key})):null},ef=qe,nf=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=ef(this.items),r=n.slice(e).filter(function(s,a){return a%t===0});return new this.constructor(r)},rf=Sr,sf=function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var s=rf(n);if(Array.isArray(this.items)){var a=this.items.filter(function(c){return s.indexOf(c)!==-1});return new this.constructor(a)}var o={};return Object.keys(this.items).forEach(function(c){s.indexOf(c)!==-1&&(o[c]=t.items[c])}),new this.constructor(o)},of=mc,af=function(t,e){var n=Math.abs(t),r=this.count();if(n<=r)return this;for(var s=n-r,a=of(this.items),o=Array.isArray(this.items),c=t<0,l=0;l<s;)o?c?a.unshift(e):a.push(e):a[l]!==void 0?s+=1:a[l]=e,l+=1;return new this.constructor(a)},cf=function(t){var e=this,n;return Array.isArray(this.items)?(n=[new this.constructor([]),new this.constructor([])],this.items.forEach(function(r){t(r)===!0?n[0].push(r):n[1].push(r)})):(n=[new this.constructor({}),new this.constructor({})],Object.keys(this.items).forEach(function(r){var s=e.items[r];t(s)===!0?n[0].put(r,s):n[1].put(r,s)})),new this.constructor(n)},lf=function(t){return t(this)},yc=Kt,uf=yc.isArray,hf=yc.isObject,zi=xn,ff=function(t){var e={};return t.forEach(function(n,r){function s(a,o){hf(a)?Object.keys(a).forEach(function(c){s(a[c],"".concat(o,".").concat(c))}):uf(a)&&a.forEach(function(c,l){s(c,"".concat(o,".").concat(l))}),e[o]=a}s(n,r)}),e},df=function(t,e){if(t.indexOf("*")!==-1){var n=ff(this.items),r=[];if(e!==void 0){var s=new RegExp("0.".concat(e),"g"),a="0.".concat(e).split(".").length;Object.keys(n).forEach(function(d){var m=d.match(s);if(m){var g=m[0];g.split(".").length===a&&r.push(n[g])}})}var o=[],c=new RegExp("0.".concat(t),"g"),l="0.".concat(t).split(".").length;if(Object.keys(n).forEach(function(d){var m=d.match(c);if(m){var g=m[0];g.split(".").length===l&&o.push(n[g])}}),e!==void 0){var u={};return this.items.forEach(function(d,m){u[r[m]||""]=o}),new this.constructor(u)}return new this.constructor([o])}if(e!==void 0){var f={};return this.items.forEach(function(d){zi(d,t)!==void 0?f[d[e]||""]=zi(d,t):f[d[e]||""]=null}),new this.constructor(f)}return this.map(function(d){return zi(d,t)!==void 0?zi(d,t):null})},pf=Sr,xc=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];pf(n).forEach(function(s){delete t[s]})},Mc=Kt,mf=Mc.isArray,gf=Mc.isObject,To=xc,_f=function(){var t=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;if(this.isEmpty())return null;if(mf(this.items))return e===1?this.items.pop():new this.constructor(this.items.splice(-e));if(gf(this.items)){var n=Object.keys(this.items);if(e===1){var r=n[n.length-1],s=this.items[r];return To(this.items,r),s}var a=n.slice(-e),o=a.reduce(function(c,l){return c[l]=t.items[l],c},{});return To(this.items,a),new this.constructor(o)}return null},vf=function(t,e){return e!==void 0?this.put(e,t):(this.items.unshift(t),this)},yf=Kt,xf=yf.isFunction,Mf=function(t,e){var n=this.items[t]||null;return!n&&e!==void 0&&(xf(e)?n=e():n=e),delete this.items[t],n},Sf=function(){var t;return(t=this.items).push.apply(t,arguments),this},Ef=function(t,e){return this.items[t]=e,this},bf=qe,Tf=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,e=bf(this.items),n=new this.constructor(e).shuffle();return t!==parseInt(t,10)?n.first():n.take(t)},wf=function(t,e){var n=this,r=null;return e!==void 0&&(r=e),Array.isArray(this.items)?this.items.forEach(function(s){r=t(r,s)}):Object.keys(this.items).forEach(function(s){r=t(r,n.items[s],s)}),r},Af=function(t){return new this.constructor(this.items).filter(function(e){return!t(e)})};function wo(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),e.push.apply(e,n)}return e}function Gi(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?wo(Object(e),!0).forEach(function(n){Rf(i,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):wo(Object(e)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(e,n))})}return i}function Rf(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}var Cf=function(t){if(!t)return this;if(Array.isArray(t)){var e=this.items.map(function(s,a){return t[a]||s});return new this.constructor(e)}if(t.constructor.name==="Collection"){var n=Gi(Gi({},this.items),t.all());return new this.constructor(n)}var r=Gi(Gi({},this.items),t);return new this.constructor(r)};function Cn(i){"@babel/helpers - typeof";return Cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cn(i)}function Ao(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),e.push.apply(e,n)}return e}function Hn(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ao(Object(e),!0).forEach(function(n){Lf(i,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):Ao(Object(e)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(e,n))})}return i}function Lf(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}var Pf=function(t){var e=function n(r,s){var a=Hn({},r),o=Object.keys(Hn(Hn({},r),s));return o.forEach(function(c){!Array.isArray(s[c])&&Cn(s[c])==="object"?a[c]=n(r[c],s[c]):r[c]===void 0&&s[c]!==void 0?Cn(r[c])==="object"?a[c]=Hn({},s[c]):a[c]=s[c]:r[c]!==void 0&&s[c]===void 0?Cn(r[c])==="object"?a[c]=Hn({},r[c]):a[c]=r[c]:r[c]!==void 0&&s[c]!==void 0&&(Cn(s[c])==="object"?a[c]=Hn({},s[c]):a[c]=s[c])}),a};return t?!Array.isArray(t)&&Cn(t)!=="object"?new this.constructor(e(this.items,[t])):t.constructor.name==="Collection"?new this.constructor(e(this.items,t.all())):new this.constructor(e(this.items,t)):this},Df=function(){var t=[].concat(this.items).reverse();return new this.constructor(t)},Vs=Kt,Uf=Vs.isArray,If=Vs.isObject,Of=Vs.isFunction,Ff=function(t,e){var n=this,r,s=function(o,c){return Of(t)?t(n.items[c],c):e?n.items[c]===t:n.items[c]==t};return Uf(this.items)?r=this.items.findIndex(s):If(this.items)&&(r=Object.keys(this.items).find(function(a){return s(n.items[a],a)})),r===void 0||r<0?!1:r},Sc=Kt,Nf=Sc.isArray,Bf=Sc.isObject,zf=xc,Gf=function(){var t=this,e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;if(this.isEmpty())return null;if(Nf(this.items))return e===1?this.items.shift():new this.constructor(this.items.splice(0,e));if(Bf(this.items)){if(e===1){var n=Object.keys(this.items)[0],r=this.items[n];return delete this.items[n],r}var s=Object.keys(this.items),a=s.slice(0,e),o=a.reduce(function(c,l){return c[l]=t.items[l],c},{});return zf(this.items,a),new this.constructor(o)}return null},Hf=qe,Vf=function(){var t=Hf(this.items),e,n,r;for(r=t.length;r;r-=1)e=Math.floor(Math.random()*r),n=t[r-1],t[r-1]=t[e],t[e]=n;return this.items=t,this},Wf=Kt,kf=Wf.isObject,jf=function(t){var e=this;return kf(this.items)?new this.constructor(Object.keys(this.items).reduce(function(n,r,s){return s+1>t&&(n[r]=e.items[r]),n},{})):new this.constructor(this.items.slice(t))},Ws=Kt,Xf=Ws.isArray,$f=Ws.isObject,qf=Ws.isFunction,Yf=function(t){var e=this,n=null,r,s=function(o){return o===t};return qf(t)&&(s=t),Xf(this.items)&&(r=this.items.filter(function(a){return n!==!0&&(n=s(a)),n})),$f(this.items)&&(r=Object.keys(this.items).reduce(function(a,o){return n!==!0&&(n=s(e.items[o])),n!==!1&&(a[o]=e.items[o]),a},{})),new this.constructor(r)},ks=Kt,Kf=ks.isArray,Zf=ks.isObject,Jf=ks.isFunction,Qf=function(t){var e=this,n=null,r,s=function(o){return o===t};return Jf(t)&&(s=t),Kf(this.items)&&(r=this.items.filter(function(a){return n!==!0&&(n=!s(a)),n})),Zf(this.items)&&(r=Object.keys(this.items).reduce(function(a,o){return n!==!0&&(n=!s(e.items[o])),n!==!1&&(a[o]=e.items[o]),a},{})),new this.constructor(r)},td=function(t,e){var n=this.items.slice(t);return e!==void 0&&(n=n.slice(0,e)),new this.constructor(n)},ed=Kt,nd=ed.isFunction,id=function(t,e,n){var r;if(nd(t)?r=this.filter(t):r=this.where(t,e,n),r.isEmpty())throw new Error("Item not found.");if(r.count()>1)throw new Error("Multiple items found.");return r.first()},rd=gc,sd=rd,od=function(t){var e=[].concat(this.items);return t===void 0?this.every(function(n){return typeof n=="number"})?e.sort(function(n,r){return n-r}):e.sort():e.sort(t),new this.constructor(e)},ad=function(){return this.sort().reverse()},cd=xn,ld=Kt,ud=ld.isFunction,hd=function(t){var e=[].concat(this.items),n=function(s){return ud(t)?t(s):cd(s,t)};return e.sort(function(r,s){var a=n(r),o=n(s);return a==null?1:o==null||a<o?-1:a>o?1:0}),new this.constructor(e)},fd=function(t){return this.sortBy(t).reverse()},dd=function(){var t=this,e={};return Object.keys(this.items).sort().forEach(function(n){e[n]=t.items[n]}),new this.constructor(e)},pd=function(){var t=this,e={};return Object.keys(this.items).sort().reverse().forEach(function(n){e[n]=t.items[n]}),new this.constructor(e)},md=function(t,e,n){var r=this.slice(t,e);if(this.items=this.diff(r.all()).all(),Array.isArray(n))for(var s=0,a=n.length;s<a;s+=1)this.items.splice(t+s,0,n[s]);return r},gd=function(t){for(var e=Math.round(this.items.length/t),n=JSON.parse(JSON.stringify(this.items)),r=[],s=0;s<t;s+=1)r.push(new this.constructor(n.splice(0,e)));return new this.constructor(r)},_d=qe,vd=Kt,yd=vd.isFunction,xd=function(t){var e=_d(this.items),n=0;if(t===void 0)for(var r=0,s=e.length;r<s;r+=1)n+=parseFloat(e[r]);else if(yd(t))for(var a=0,o=e.length;a<o;a+=1)n+=parseFloat(t(e[a]));else for(var c=0,l=e.length;c<l;c+=1)n+=parseFloat(e[c][t]);return parseFloat(n.toPrecision(12))};function As(i){"@babel/helpers - typeof";return As=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},As(i)}var Md=function(t){var e=this;if(!Array.isArray(this.items)&&As(this.items)==="object"){var n=Object.keys(this.items),r;t<0?r=n.slice(t):r=n.slice(0,t);var s={};return n.forEach(function(a){r.indexOf(a)!==-1&&(s[a]=e.items[a])}),new this.constructor(s)}return t<0?new this.constructor(this.items.slice(t)):new this.constructor(this.items.slice(0,t))},js=Kt,Sd=js.isArray,Ed=js.isObject,bd=js.isFunction,Td=function(t){var e=this,n=null,r,s=function(o){return o===t};return bd(t)&&(s=t),Sd(this.items)&&(r=this.items.filter(function(a){return n!==!1&&(n=!s(a)),n})),Ed(this.items)&&(r=Object.keys(this.items).reduce(function(a,o){return n!==!1&&(n=!s(e.items[o])),n!==!1&&(a[o]=e.items[o]),a},{})),new this.constructor(r)},Xs=Kt,wd=Xs.isArray,Ad=Xs.isObject,Rd=Xs.isFunction,Cd=function(t){var e=this,n=null,r,s=function(o){return o===t};return Rd(t)&&(s=t),wd(this.items)&&(r=this.items.filter(function(a){return n!==!1&&(n=s(a)),n})),Ad(this.items)&&(r=Object.keys(this.items).reduce(function(a,o){return n!==!1&&(n=s(e.items[o])),n!==!1&&(a[o]=e.items[o]),a},{})),new this.constructor(r)},Ld=function(t){return t(this),this},Pd=function(t,e){for(var n=1;n<=t;n+=1)this.items.push(e(n));return this},Dd=function(){var t=this.constructor;function e(r,s){var a=[];r instanceof t?(r.items.forEach(function(o){return e(o,a)}),s.push(a)):Array.isArray(r)?(r.forEach(function(o){return e(o,a)}),s.push(a)):s.push(r)}if(Array.isArray(this.items)){var n=[];return this.items.forEach(function(r){e(r,n)}),n}return this.values().all()};function Rs(i){"@babel/helpers - typeof";return Rs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Rs(i)}var Ud=function(){return Rs(this.items)==="object"&&!Array.isArray(this.items)?JSON.stringify(this.all()):JSON.stringify(this.toArray())},Id=function(t){var e=this;if(Array.isArray(this.items))this.items=this.items.map(t);else{var n={};Object.keys(this.items).forEach(function(r){n[r]=t(e.items[r],r)}),this.items=n}return this};function Ro(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),e.push.apply(e,n)}return e}function Co(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?Ro(Object(e),!0).forEach(function(n){Od(i,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):Ro(Object(e)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(e,n))})}return i}function Od(i,t,e){return t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}var Fd=function(){var t=this;if(Array.isArray(this.items))return this;var e={};return Object.keys(this.items).forEach(function(n){if(n.indexOf(".")!==-1){var r=e;n.split(".").reduce(function(s,a,o,c){return s[a]||(s[a]={}),o===c.length-1&&(s[a]=t.items[n]),s[a]},r),e=Co(Co({},e),r)}else e[n]=t.items[n]}),new this.constructor(e)},Nd=function(t,e,n){t?n(this):e(this)},Lo=function(t,e){if(Array.isArray(this.items)&&this.items.length)return t(this);if(Object.keys(this.items).length)return t(this);if(e!==void 0){if(Array.isArray(this.items)&&!this.items.length)return e(this);if(!Object.keys(this.items).length)return e(this)}return this},Po=function(t,e){if(Array.isArray(this.items)&&!this.items.length)return t(this);if(!Object.keys(this.items).length)return t(this);if(e!==void 0){if(Array.isArray(this.items)&&this.items.length)return e(this);if(Object.keys(this.items).length)return e(this)}return this},Bd=function(t){var e=this,n=JSON.parse(JSON.stringify(this.items));return Object.keys(t).forEach(function(r){e.items[r]===void 0&&(n[r]=t[r])}),new this.constructor(n)},zd=Kt,Gd=zd.isFunction,Hd=function(t){var e;if(t===void 0)e=this.items.filter(function(o,c,l){return l.indexOf(o)===c});else{e=[];for(var n=[],r=0,s=this.items.length;r<s;r+=1){var a=void 0;Gd(t)?a=t(this.items[r]):a=this.items[r][t],n.indexOf(a)===-1&&(e.push(this.items[r]),n.push(a))}}return new this.constructor(e)},Vd=function(t){return t instanceof this.constructor?t.all():t},Wd=qe,kd=function(){return new this.constructor(Wd(this.items))},jd=function(t,e,n){return t?e(this,t):n?n(this,t):this},Xd=qe,Ce=xn,$d=function(t,e,n){var r=e,s=n,a=Xd(this.items);if(e===void 0||e===!0)return new this.constructor(a.filter(function(c){return Ce(c,t)}));if(e===!1)return new this.constructor(a.filter(function(c){return!Ce(c,t)}));n===void 0&&(s=e,r="===");var o=a.filter(function(c){switch(r){case"==":return Ce(c,t)===Number(s)||Ce(c,t)===s.toString();default:case"===":return Ce(c,t)===s;case"!=":case"<>":return Ce(c,t)!==Number(s)&&Ce(c,t)!==s.toString();case"!==":return Ce(c,t)!==s;case"<":return Ce(c,t)<s;case"<=":return Ce(c,t)<=s;case">":return Ce(c,t)>s;case">=":return Ce(c,t)>=s}});return new this.constructor(o)},qd=function(t,e){return this.where(t,">=",e[0]).where(t,"<=",e[e.length-1])},Yd=qe,Kd=xn,Zd=function(t,e){var n=Yd(e),r=this.items.filter(function(s){return n.indexOf(Kd(s,t))!==-1});return new this.constructor(r)},Jd=function(t){return this.filter(function(e){return e instanceof t})},Do=xn,Qd=function(t,e){return this.filter(function(n){return Do(n,t)<e[0]||Do(n,t)>e[e.length-1]})},tp=qe,ep=xn,np=function(t,e){var n=tp(e),r=this.items.filter(function(s){return n.indexOf(ep(s,t))===-1});return new this.constructor(r)},ip=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.where(t,"===",null)},rp=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;return this.where(t,"!==",null)};function Cs(i){"@babel/helpers - typeof";return Cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cs(i)}var sp=function(t){return t instanceof this.constructor?t:Cs(t)==="object"?new this.constructor(t):new this.constructor([t])},op=function(t){var e=this,n=t;n instanceof this.constructor&&(n=n.all());var r=this.items.map(function(s,a){return new e.constructor([s,n[a]])});return new this.constructor(r)};(function(i){function t(s){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t(s)}function e(s){s!==void 0&&!Array.isArray(s)&&t(s)!=="object"?this.items=[s]:s instanceof this.constructor?this.items=s.all():this.items=s||[]}var n=Tl;typeof Symbol<"u"&&(e.prototype[Symbol.iterator]=n),e.prototype.toJSON=function(){return this.items},e.prototype.all=wl,e.prototype.average=pc,e.prototype.avg=Ll,e.prototype.chunk=Pl,e.prototype.collapse=Nl,e.prototype.combine=Wl,e.prototype.concat=Kl,e.prototype.contains=gc,e.prototype.containsOneItem=lu,e.prototype.count=uu,e.prototype.countBy=hu,e.prototype.crossJoin=fu,e.prototype.dd=du,e.prototype.diff=pu,e.prototype.diffAssoc=mu,e.prototype.diffKeys=gu,e.prototype.diffUsing=_u,e.prototype.doesntContain=vu,e.prototype.dump=yu,e.prototype.duplicates=xu,e.prototype.each=Mu,e.prototype.eachSpread=Au,e.prototype.every=Cu,e.prototype.except=Pu,e.prototype.filter=Iu,e.prototype.first=Fu,e.prototype.firstOrFail=zu,e.prototype.firstWhere=Gu,e.prototype.flatMap=Hu,e.prototype.flatten=Vu,e.prototype.flip=Wu,e.prototype.forPage=ku,e.prototype.forget=ju,e.prototype.get=qu,e.prototype.groupBy=Zu,e.prototype.has=Qu,e.prototype.implode=th,e.prototype.intersect=eh,e.prototype.intersectByKeys=nh,e.prototype.isEmpty=ih,e.prototype.isNotEmpty=rh,e.prototype.join=sh,e.prototype.keyBy=lh,e.prototype.keys=uh,e.prototype.last=fh,e.prototype.macro=dh,e.prototype.make=ph,e.prototype.map=mh,e.prototype.mapSpread=Mh,e.prototype.mapToDictionary=Ah,e.prototype.mapInto=Rh,e.prototype.mapToGroups=Ih,e.prototype.mapWithKeys=zh,e.prototype.max=kh,e.prototype.median=jh,e.prototype.merge=Xh,e.prototype.mergeRecursive=qh,e.prototype.min=Qh,e.prototype.mode=tf,e.prototype.nth=nf,e.prototype.only=sf,e.prototype.pad=af,e.prototype.partition=cf,e.prototype.pipe=lf,e.prototype.pluck=df,e.prototype.pop=_f,e.prototype.prepend=vf,e.prototype.pull=Mf,e.prototype.push=Sf,e.prototype.put=Ef,e.prototype.random=Tf,e.prototype.reduce=wf,e.prototype.reject=Af,e.prototype.replace=Cf,e.prototype.replaceRecursive=Pf,e.prototype.reverse=Df,e.prototype.search=Ff,e.prototype.shift=Gf,e.prototype.shuffle=Vf,e.prototype.skip=jf,e.prototype.skipUntil=Yf,e.prototype.skipWhile=Qf,e.prototype.slice=td,e.prototype.sole=id,e.prototype.some=sd,e.prototype.sort=od,e.prototype.sortDesc=ad,e.prototype.sortBy=hd,e.prototype.sortByDesc=fd,e.prototype.sortKeys=dd,e.prototype.sortKeysDesc=pd,e.prototype.splice=md,e.prototype.split=gd,e.prototype.sum=xd,e.prototype.take=Md,e.prototype.takeUntil=Td,e.prototype.takeWhile=Cd,e.prototype.tap=Ld,e.prototype.times=Pd,e.prototype.toArray=Dd,e.prototype.toJson=Ud,e.prototype.transform=Id,e.prototype.undot=Fd,e.prototype.unless=Nd,e.prototype.unlessEmpty=Lo,e.prototype.unlessNotEmpty=Po,e.prototype.union=Bd,e.prototype.unique=Hd,e.prototype.unwrap=Vd,e.prototype.values=kd,e.prototype.when=jd,e.prototype.whenEmpty=Po,e.prototype.whenNotEmpty=Lo,e.prototype.where=$d,e.prototype.whereBetween=qd,e.prototype.whereIn=Zd,e.prototype.whereInstanceOf=Jd,e.prototype.whereNotBetween=Qd,e.prototype.whereNotIn=np,e.prototype.whereNull=ip,e.prototype.whereNotNull=rp,e.prototype.wrap=sp,e.prototype.zip=op;var r=function(a){return new e(a)};i.exports=r,i.exports.collect=r,i.exports.default=r,i.exports.Collection=e})(dc);var ap=dc.exports;const jt=Hs(ap);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $s="152",nn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cp=0,Uo=1,lp=2,Ec=1,bc=2,en=3,yn=0,xe=1,rn=2,_n=0,ci=1,Io=2,Oo=3,Fo=4,up=5,oi=100,hp=101,fp=102,No=103,Bo=104,dp=200,pp=201,mp=202,gp=203,Tc=204,wc=205,_p=206,vp=207,yp=208,xp=209,Mp=210,Sp=0,Ep=1,bp=2,Ls=3,Tp=4,wp=5,Ap=6,Rp=7,Ac=0,Cp=1,Lp=2,sn=0,Pp=1,Dp=2,Up=3,Ip=4,Op=5,Rc=300,hi=301,fi=302,Ps=303,Ds=304,Er=306,Us=1e3,ze=1001,Is=1002,ge=1003,zo=1004,Fr=1005,Pe=1006,Fp=1007,Di=1008,Fn=1009,Np=1010,Bp=1011,Cc=1012,zp=1013,Pn=1014,Dn=1015,Ui=1016,Gp=1017,Hp=1018,li=1020,Vp=1021,Ge=1023,Wp=1024,kp=1025,Un=1026,di=1027,jp=1028,Xp=1029,$p=1030,qp=1031,Yp=1033,Nr=33776,Br=33777,zr=33778,Gr=33779,Go=35840,Ho=35841,Vo=35842,Wo=35843,Kp=36196,ko=37492,jo=37496,Xo=37808,$o=37809,qo=37810,Yo=37811,Ko=37812,Zo=37813,Jo=37814,Qo=37815,ta=37816,ea=37817,na=37818,ia=37819,ra=37820,sa=37821,Hr=36492,Zp=36283,oa=36284,aa=36285,ca=36286,Lc=3e3,In=3001,Jp=3200,Qp=3201,Pc=0,tm=1,On="",Lt="srgb",$e="srgb-linear",Dc="display-p3",Vr=7680,em=519,la=35044,ua="300 es",Os=1035;class Mn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const he=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wr=Math.PI/180,Fs=180/Math.PI;function Ni(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(he[i&255]+he[i>>8&255]+he[i>>16&255]+he[i>>24&255]+"-"+he[t&255]+he[t>>8&255]+"-"+he[t>>16&15|64]+he[t>>24&255]+"-"+he[e&63|128]+he[e>>8&255]+"-"+he[e>>16&255]+he[e>>24&255]+he[n&255]+he[n>>8&255]+he[n>>16&255]+he[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function nm(i,t){return(i%t+t)%t}function kr(i,t,e){return(1-e)*i+e*t}function ha(i){return(i&i-1)===0&&i!==0}function im(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hi(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Nt{constructor(){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],m=n[5],g=n[8],_=r[0],p=r[3],h=r[6],M=r[1],v=r[4],b=r[7],S=r[2],A=r[5],P=r[8];return s[0]=a*_+o*M+c*S,s[3]=a*p+o*v+c*A,s[6]=a*h+o*b+c*P,s[1]=l*_+u*M+f*S,s[4]=l*p+u*v+f*A,s[7]=l*h+u*b+f*P,s[2]=d*_+m*M+g*S,s[5]=d*p+m*v+g*A,s[8]=d*h+m*b+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=u*a-o*l,d=o*c-u*s,m=l*s-a*c,g=e*f+n*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*l-u*n)*_,t[2]=(o*n-r*a)*_,t[3]=d*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-o*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(jr.makeScale(t,e)),this}rotate(t){return this.premultiply(jr.makeRotation(-t)),this}translate(t,e){return this.premultiply(jr.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jr=new Nt;function Uc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const fa={};function Li(i){i in fa||(fa[i]=!0,console.warn(i))}function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const rm=new Nt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),sm=new Nt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function om(i){return i.convertSRGBToLinear().applyMatrix3(sm)}function am(i){return i.applyMatrix3(rm).convertLinearToSRGB()}const cm={[$e]:i=>i,[Lt]:i=>i.convertSRGBToLinear(),[Dc]:om},lm={[$e]:i=>i,[Lt]:i=>i.convertLinearToSRGB(),[Dc]:am},Ie={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return $e},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=cm[t],r=lm[e];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let Vn;class Ic{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Vn===void 0&&(Vn=yr("canvas")),Vn.width=t.width,Vn.height=t.height;const n=Vn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Vn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ui(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Oc{constructor(t=null){this.isSource=!0,this.uuid=Ni(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($r(r[a].image)):s.push($r(r[a]))}else s=$r(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function $r(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ic.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let um=0;class Me extends Mn{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=ze,r=ze,s=Pe,a=Di,o=Ge,c=Fn,l=Me.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Ni(),this.name="",this.source=new Oc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===In?Lt:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Us:t.x=t.x-Math.floor(t.x);break;case ze:t.x=t.x<0?0:1;break;case Is:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Us:t.y=t.y-Math.floor(t.y);break;case ze:t.y=t.y<0?0:1;break;case Is:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Lt?In:Lc}set encoding(t){Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===In?Lt:On}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=Rc;Me.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,r=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],f=c[8],d=c[1],m=c[5],g=c[9],_=c[2],p=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,b=(m+1)/2,S=(h+1)/2,A=(u+d)/4,P=(f+_)/4,O=(g+p)/4;return v>b&&v>S?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=A/n,s=P/n):b>S?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=A/r,s=O/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=P/s,r=O/s),this.set(n,r,s,e),this}let M=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+m+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nn extends Mn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Li("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===In?Lt:On),this.texture=new Me(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Pe,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Oc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fc extends Me{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ge,this.minFilter=ge,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hm extends Me{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ge,this.minFilter=ge,this.wrapR=ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const d=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(f!==_||c!==d||l!==m||u!==g){let p=1-o;const h=c*d+l*m+u*g+f*_,M=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const S=Math.sqrt(v),A=Math.atan2(S,h*M);p=Math.sin(p*A)/S,o=Math.sin(o*A)/S}const b=o*M;if(c=c*p+d*b,l=l*p+m*b,u=u*p+g*b,f=f*p+_*b,p===1-o){const S=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=S,l*=S,u*=S,f*=S}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+u*f+c*m-l*d,t[e+1]=c*g+u*d+l*f-o*m,t[e+2]=l*g+u*m+o*d-c*f,t[e+3]=u*g-o*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),d=c(n/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"YXZ":this._x=d*u*f+l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"ZXY":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f-d*m*g;break;case"ZYX":this._x=d*u*f-l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f+d*m*g;break;case"YZX":this._x=d*u*f+l*m*g,this._y=l*m*f+d*u*g,this._z=l*u*g-d*m*f,this._w=l*u*f-d*m*g;break;case"XZY":this._x=d*u*f-l*m*g,this._y=l*m*f-d*u*g,this._z=l*u*g+d*m*f,this._w=l*u*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-e)*u)/l,d=Math.sin(e*u)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(da.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(da.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=c*e+a*r-o*n,u=c*n+o*e-s*r,f=c*r+s*n-a*e,d=-s*e-a*n-o*r;return this.x=l*c+d*-s+u*-o-f*-a,this.y=u*c+d*-a+f*-s-l*-o,this.z=f*c+d*-o+l*-a-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qr.copy(this).projectOnVector(t),this.sub(qr)}reflect(t){return this.sub(qr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qr=new U,da=new Bn;class on{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Wn.copy(t.boundingBox),Wn.applyMatrix4(t.matrixWorld),this.union(Wn);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)Ke.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Ke)}else r.boundingBox===null&&r.computeBoundingBox(),Wn.copy(r.boundingBox),Wn.applyMatrix4(t.matrixWorld),this.union(Wn)}const n=t.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mi),Vi.subVectors(this.max,Mi),kn.subVectors(t.a,Mi),jn.subVectors(t.b,Mi),Xn.subVectors(t.c,Mi),ln.subVectors(jn,kn),un.subVectors(Xn,jn),Tn.subVectors(kn,Xn);let e=[0,-ln.z,ln.y,0,-un.z,un.y,0,-Tn.z,Tn.y,ln.z,0,-ln.x,un.z,0,-un.x,Tn.z,0,-Tn.x,-ln.y,ln.x,0,-un.y,un.x,0,-Tn.y,Tn.x,0];return!Yr(e,kn,jn,Xn,Vi)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,kn,jn,Xn,Vi))?!1:(Wi.crossVectors(ln,un),e=[Wi.x,Wi.y,Wi.z],Yr(e,kn,jn,Xn,Vi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ye),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ye=[new U,new U,new U,new U,new U,new U,new U,new U],Ke=new U,Wn=new on,kn=new U,jn=new U,Xn=new U,ln=new U,un=new U,Tn=new U,Mi=new U,Vi=new U,Wi=new U,wn=new U;function Yr(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){wn.fromArray(i,s);const o=r.x*Math.abs(wn.x)+r.y*Math.abs(wn.y)+r.z*Math.abs(wn.z),c=t.dot(wn),l=e.dot(wn),u=n.dot(wn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const fm=new on,Si=new U,Kr=new U;class br{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fm.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Si.subVectors(t,this.center);const e=Si.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Si,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Si.copy(t.center).add(Kr)),this.expandByPoint(Si.copy(t.center).sub(Kr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ze=new U,Zr=new U,ki=new U,hn=new U,Jr=new U,ji=new U,Qr=new U;class qs{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ze)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ze.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ze.copy(this.origin).addScaledVector(this.direction,e),Ze.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Zr.copy(t).add(e).multiplyScalar(.5),ki.copy(e).sub(t).normalize(),hn.copy(this.origin).sub(Zr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(ki),o=hn.dot(this.direction),c=-hn.dot(ki),l=hn.lengthSq(),u=Math.abs(1-a*a);let f,d,m,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zr).addScaledVector(ki,d),m}intersectSphere(t,e){Ze.subVectors(t.center,this.origin);const n=Ze.dot(this.direction),r=Ze.dot(Ze)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ze)!==null}intersectTriangle(t,e,n,r,s){Jr.subVectors(e,t),ji.subVectors(n,t),Qr.crossVectors(Jr,ji);let a=this.direction.dot(Qr),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hn.subVectors(this.origin,t);const c=o*this.direction.dot(ji.crossVectors(hn,ji));if(c<0)return null;const l=o*this.direction.dot(Jr.cross(hn));if(l<0||c+l>a)return null;const u=-o*hn.dot(Qr);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,r,s,a,o,c,l,u,f,d,m,g,_,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=m,h[7]=g,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/$n.setFromMatrixColumn(t,0).length(),s=1/$n.setFromMatrixColumn(t,1).length(),a=1/$n.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,m=a*f,g=o*u,_=o*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=m+g*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const d=c*u,m=c*f,g=l*u,_=l*f;e[0]=d+_*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=m*o-g,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*u,m=c*f,g=l*u,_=l*f;e[0]=d-_*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*u,m=a*f,g=o*u,_=o*f;e[0]=c*u,e[4]=g*l-m,e[8]=d*l+_,e[1]=c*f,e[5]=_*l+d,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-d*f,e[8]=g*f+m,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*f+g,e[10]=d-_*f}else if(t.order==="XZY"){const d=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=d*f+_,e[5]=a*u,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*u,e[10]=_*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dm,t,pm)}lookAt(t,e,n){const r=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),fn.crossVectors(n,Te),fn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),fn.crossVectors(n,Te)),fn.normalize(),Xi.crossVectors(Te,fn),r[0]=fn.x,r[4]=Xi.x,r[8]=Te.x,r[1]=fn.y,r[5]=Xi.y,r[9]=Te.y,r[2]=fn.z,r[6]=Xi.z,r[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],h=n[14],M=n[3],v=n[7],b=n[11],S=n[15],A=r[0],P=r[4],O=r[8],y=r[12],w=r[1],z=r[5],V=r[9],D=r[13],N=r[2],G=r[6],J=r[10],Y=r[14],q=r[3],Z=r[7],tt=r[11],pt=r[15];return s[0]=a*A+o*w+c*N+l*q,s[4]=a*P+o*z+c*G+l*Z,s[8]=a*O+o*V+c*J+l*tt,s[12]=a*y+o*D+c*Y+l*pt,s[1]=u*A+f*w+d*N+m*q,s[5]=u*P+f*z+d*G+m*Z,s[9]=u*O+f*V+d*J+m*tt,s[13]=u*y+f*D+d*Y+m*pt,s[2]=g*A+_*w+p*N+h*q,s[6]=g*P+_*z+p*G+h*Z,s[10]=g*O+_*V+p*J+h*tt,s[14]=g*y+_*D+p*Y+h*pt,s[3]=M*A+v*w+b*N+S*q,s[7]=M*P+v*z+b*G+S*Z,s[11]=M*O+v*V+b*J+S*tt,s[15]=M*y+v*D+b*Y+S*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],f=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],h=t[15];return g*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*m-n*c*m)+_*(+e*c*m-e*l*d+s*a*d-r*a*m+r*l*u-s*c*u)+p*(+e*l*f-e*o*m-s*a*f+n*a*m+s*o*u-n*l*u)+h*(-r*o*u-e*c*f+e*o*d+r*a*f-n*a*d+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],f=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],h=t[15],M=f*p*l-_*d*l+_*c*m-o*p*m-f*c*h+o*d*h,v=g*d*l-u*p*l-g*c*m+a*p*m+u*c*h-a*d*h,b=u*_*l-g*f*l+g*o*m-a*_*m-u*o*h+a*f*h,S=g*f*c-u*_*c-g*o*d+a*_*d+u*o*p-a*f*p,A=e*M+n*v+r*b+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/A;return t[0]=M*P,t[1]=(_*d*s-f*p*s-_*r*m+n*p*m+f*r*h-n*d*h)*P,t[2]=(o*p*s-_*c*s+_*r*l-n*p*l-o*r*h+n*c*h)*P,t[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*m-n*c*m)*P,t[4]=v*P,t[5]=(u*p*s-g*d*s+g*r*m-e*p*m-u*r*h+e*d*h)*P,t[6]=(g*c*s-a*p*s-g*r*l+e*p*l+a*r*h-e*c*h)*P,t[7]=(a*d*s-u*c*s+u*r*l-e*d*l-a*r*m+e*c*m)*P,t[8]=b*P,t[9]=(g*f*s-u*_*s-g*n*m+e*_*m+u*n*h-e*f*h)*P,t[10]=(a*_*s-g*o*s+g*n*l-e*_*l-a*n*h+e*o*h)*P,t[11]=(u*o*s-a*f*s-u*n*l+e*f*l+a*n*m-e*o*m)*P,t[12]=S*P,t[13]=(u*_*r-g*f*r+g*n*d-e*_*d-u*n*p+e*f*p)*P,t[14]=(g*o*r-a*_*r-g*n*c+e*_*c+a*n*p-e*o*p)*P,t[15]=(a*f*r-u*o*r+u*n*c-e*f*c-a*n*d+e*o*d)*P,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,f=o+o,d=s*l,m=s*u,g=s*f,_=a*u,p=a*f,h=o*f,M=c*l,v=c*u,b=c*f,S=n.x,A=n.y,P=n.z;return r[0]=(1-(_+h))*S,r[1]=(m+b)*S,r[2]=(g-v)*S,r[3]=0,r[4]=(m-b)*A,r[5]=(1-(d+h))*A,r[6]=(p+M)*A,r[7]=0,r[8]=(g+v)*P,r[9]=(p-M)*P,r[10]=(1-(d+_))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=$n.set(r[0],r[1],r[2]).length();const a=$n.set(r[4],r[5],r[6]).length(),o=$n.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Oe.copy(this);const l=1/s,u=1/a,f=1/o;return Oe.elements[0]*=l,Oe.elements[1]*=l,Oe.elements[2]*=l,Oe.elements[4]*=u,Oe.elements[5]*=u,Oe.elements[6]*=u,Oe.elements[8]*=f,Oe.elements[9]*=f,Oe.elements[10]*=f,e.setFromRotationMatrix(Oe),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a){const o=this.elements,c=2*s/(e-t),l=2*s/(n-r),u=(e+t)/(e-t),f=(n+r)/(n-r),d=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=c,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,r,s,a){const o=this.elements,c=1/(e-t),l=1/(n-r),u=1/(a-s),f=(e+t)*c,d=(n+r)*l,m=(a+s)*u;return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const $n=new U,Oe=new Qt,dm=new U(0,0,0),pm=new U(1,1,1),fn=new U,Xi=new U,Te=new U,pa=new Qt,ma=new Bn;class Tr{constructor(t=0,e=0,n=0,r=Tr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(_e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ma.setFromEuler(this),this.setFromQuaternion(ma,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tr.DEFAULT_ORDER="XYZ";class Ys{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mm=0;const ga=new U,qn=new Bn,Je=new Qt,$i=new U,Ei=new U,gm=new U,_m=new Bn,_a=new U(1,0,0),va=new U(0,1,0),ya=new U(0,0,1),vm={type:"added"},xa={type:"removed"};class ce extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DEFAULT_UP.clone();const t=new U,e=new Tr,n=new Bn,r=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Nt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ys,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.multiply(qn),this}rotateOnWorldAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.premultiply(qn),this}rotateX(t){return this.rotateOnAxis(_a,t)}rotateY(t){return this.rotateOnAxis(va,t)}rotateZ(t){return this.rotateOnAxis(ya,t)}translateOnAxis(t,e){return ga.copy(t).applyQuaternion(this.quaternion),this.position.add(ga.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_a,t)}translateY(t){return this.translateOnAxis(va,t)}translateZ(t){return this.translateOnAxis(ya,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$i.copy(t):$i.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Je.lookAt(Ei,$i,this.up):Je.lookAt($i,Ei,this.up),this.quaternion.setFromRotationMatrix(Je),r&&(Je.extractRotation(r.matrixWorld),qn.setFromRotationMatrix(Je),this.quaternion.premultiply(qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(vm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xa)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(xa)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Je.multiply(t.parent.matrixWorld)),t.applyMatrix4(Je),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,t,gm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,_m,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(t.shapes,f)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}ce.DEFAULT_UP=new U(0,1,0);ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fe=new U,Qe=new U,ts=new U,tn=new U,Yn=new U,Kn=new U,Ma=new U,es=new U,ns=new U,is=new U;let qi=!1;class Be{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Fe.subVectors(t,e),r.cross(Fe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Fe.subVectors(r,e),Qe.subVectors(n,e),ts.subVectors(t,e);const a=Fe.dot(Fe),o=Fe.dot(Qe),c=Fe.dot(ts),l=Qe.dot(Qe),u=Qe.dot(ts),f=a*l-o*o;if(f===0)return s.set(-2,-1,-1);const d=1/f,m=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,tn),tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(t,e,n,r,s,a,o,c){return qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qi=!0),this.getInterpolation(t,e,n,r,s,a,o,c)}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,tn),c.setScalar(0),c.addScaledVector(s,tn.x),c.addScaledVector(a,tn.y),c.addScaledVector(o,tn.z),c}static isFrontFacing(t,e,n,r){return Fe.subVectors(n,e),Qe.subVectors(t,e),Fe.cross(Qe).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),Fe.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return qi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),qi=!0),Be.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return Be.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Yn.subVectors(r,n),Kn.subVectors(s,n),es.subVectors(t,n);const c=Yn.dot(es),l=Kn.dot(es);if(c<=0&&l<=0)return e.copy(n);ns.subVectors(t,r);const u=Yn.dot(ns),f=Kn.dot(ns);if(u>=0&&f<=u)return e.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Yn,a);is.subVectors(t,s);const m=Yn.dot(is),g=Kn.dot(is);if(g>=0&&m<=g)return e.copy(s);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Kn,o);const p=u*g-m*f;if(p<=0&&f-u>=0&&m-g>=0)return Ma.subVectors(s,r),o=(f-u)/(f-u+(m-g)),e.copy(r).addScaledVector(Ma,o);const h=1/(p+_+d);return a=_*h,o=d*h,e.copy(n).addScaledVector(Yn,a).addScaledVector(Kn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let ym=0;class _i extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=ci,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Tc,this.blendDst=wc,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ne={h:0,s:0,l:0},Yi={h:0,s:0,l:0};function rs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Lt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ie.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Ie.workingColorSpace){if(t=nm(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=rs(a,s,t+1/3),this.g=rs(a,s,t),this.b=rs(a,s,t-1/3)}return Ie.toWorkingColorSpace(this,r),this}setStyle(t,e=Lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Lt){const n=Nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Lt){return Ie.fromWorkingColorSpace(fe.copy(this),t),Math.round(_e(fe.r*255,0,255))*65536+Math.round(_e(fe.g*255,0,255))*256+Math.round(_e(fe.b*255,0,255))}getHexString(t=Lt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ie.workingColorSpace){Ie.fromWorkingColorSpace(fe.copy(this),e);const n=fe.r,r=fe.g,s=fe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Ie.workingColorSpace){return Ie.fromWorkingColorSpace(fe.copy(this),e),t.r=fe.r,t.g=fe.g,t.b=fe.b,t}getStyle(t=Lt){Ie.fromWorkingColorSpace(fe.copy(this),t);const e=fe.r,n=fe.g,r=fe.b;return t!==Lt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ne),Ne.h+=t,Ne.s+=e,Ne.l+=n,this.setHSL(Ne.h,Ne.s,Ne.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ne),t.getHSL(Yi);const n=kr(Ne.h,Yi.h,e),r=kr(Ne.s,Yi.s,e),s=kr(Ne.l,Yi.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fe=new Gt;Gt.NAMES=Nc;class Ks extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ee=new U,Ki=new Ct;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=la,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ki.fromBufferAttribute(this,e),Ki.applyMatrix3(t),this.setXY(e,Ki.x,Ki.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix3(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hi(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hi(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hi(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),r=be(r,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==la&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Bc extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zc extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xm=0;const Le=new Qt,ss=new ce,Zn=new U,we=new on,bi=new on,oe=new U;class He extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uc(t)?zc:Bc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return ss.lookAt(t),ss.updateMatrix(),this.applyMatrix4(ss.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];we.setFromBufferAttribute(s),this.morphTargetsRelative?(oe.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(oe),oe.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(oe)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];bi.setFromBufferAttribute(o),this.morphTargetsRelative?(oe.addVectors(we.min,bi.min),we.expandByPoint(oe),oe.addVectors(we.max,bi.max),we.expandByPoint(oe)):(we.expandByPoint(bi.min),we.expandByPoint(bi.max))}we.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)oe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(oe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)oe.fromBufferAttribute(o,l),c&&(Zn.fromBufferAttribute(t,l),oe.add(Zn)),r=Math.max(r,n.distanceToSquared(oe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,a=e.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let w=0;w<o;w++)l[w]=new U,u[w]=new U;const f=new U,d=new U,m=new U,g=new Ct,_=new Ct,p=new Ct,h=new U,M=new U;function v(w,z,V){f.fromArray(r,w*3),d.fromArray(r,z*3),m.fromArray(r,V*3),g.fromArray(a,w*2),_.fromArray(a,z*2),p.fromArray(a,V*2),d.sub(f),m.sub(f),_.sub(g),p.sub(g);const D=1/(_.x*p.y-p.x*_.y);isFinite(D)&&(h.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(D),M.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(D),l[w].add(h),l[z].add(h),l[V].add(h),u[w].add(M),u[z].add(M),u[V].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,z=b.length;w<z;++w){const V=b[w],D=V.start,N=V.count;for(let G=D,J=D+N;G<J;G+=3)v(n[G+0],n[G+1],n[G+2])}const S=new U,A=new U,P=new U,O=new U;function y(w){P.fromArray(s,w*3),O.copy(P);const z=l[w];S.copy(z),S.sub(P.multiplyScalar(P.dot(z))).normalize(),A.crossVectors(O,z);const D=A.dot(u[w])<0?-1:1;c[w*4]=S.x,c[w*4+1]=S.y,c[w*4+2]=S.z,c[w*4+3]=D}for(let w=0,z=b.length;w<z;++w){const V=b[w],D=V.start,N=V.count;for(let G=D,J=D+N;G<J;G+=3)y(n[G+0]),y(n[G+1]),y(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const r=new U,s=new U,a=new U,o=new U,c=new U,l=new U,u=new U,f=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)oe.fromBufferAttribute(t,e),oe.normalize(),t.setXYZ(e,oe.x,oe.y,oe.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*u;for(let h=0;h<u;h++)d[g++]=l[m++]}return new Xe(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,m=f.length;d<m;d++)u.push(f[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sa=new Qt,We=new qs,Zi=new br,Ea=new U,Jn=new U,Qn=new U,ti=new U,os=new U,Ji=new U,Qi=new Ct,tr=new Ct,er=new Ct,ba=new U,Ta=new U,wa=new U,nr=new U,ir=new U;class Ae extends ce{constructor(t=new He,e=new Ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Ji.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(os.fromBufferAttribute(f,t),a?Ji.addScaledVector(os,u):Ji.addScaledVector(os.sub(e),u))}e.add(Ji)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere),Zi.applyMatrix4(s),We.copy(t.ray).recast(t.near),!(Zi.containsPoint(We.origin)===!1&&(We.intersectSphere(Zi,Ea)===null||We.origin.distanceToSquared(Ea)>(t.far-t.near)**2))&&(Sa.copy(s).invert(),We.copy(t.ray).applyMatrix4(Sa),!(n.boundingBox!==null&&We.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e)))}_computeIntersections(t,e){let n;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,g=f.length;m<g;m++){const _=f[m],p=s[_.materialIndex],h=Math.max(_.start,d.start),M=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let v=h,b=M;v<b;v+=3){const S=a.getX(v),A=a.getX(v+1),P=a.getX(v+2);n=rr(this,p,t,We,c,l,u,S,A,P),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,e.push(n))}}else{const m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let _=m,p=g;_<p;_+=3){const h=a.getX(_),M=a.getX(_+1),v=a.getX(_+2);n=rr(this,s,t,We,c,l,u,h,M,v),n&&(n.faceIndex=Math.floor(_/3),e.push(n))}}else if(o!==void 0)if(Array.isArray(s))for(let m=0,g=f.length;m<g;m++){const _=f[m],p=s[_.materialIndex],h=Math.max(_.start,d.start),M=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let v=h,b=M;v<b;v+=3){const S=v,A=v+1,P=v+2;n=rr(this,p,t,We,c,l,u,S,A,P),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=_.materialIndex,e.push(n))}}else{const m=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let _=m,p=g;_<p;_+=3){const h=_,M=_+1,v=_+2;n=rr(this,s,t,We,c,l,u,h,M,v),n&&(n.faceIndex=Math.floor(_/3),e.push(n))}}}}function Mm(i,t,e,n,r,s,a,o){let c;if(t.side===xe?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===yn,o),c===null)return null;ir.copy(o),ir.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ir);return l<e.near||l>e.far?null:{distance:l,point:ir.clone(),object:i}}function rr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Jn),i.getVertexPosition(c,Qn),i.getVertexPosition(l,ti);const u=Mm(i,t,e,n,Jn,Qn,ti,nr);if(u){r&&(Qi.fromBufferAttribute(r,o),tr.fromBufferAttribute(r,c),er.fromBufferAttribute(r,l),u.uv=Be.getInterpolation(nr,Jn,Qn,ti,Qi,tr,er,new Ct)),s&&(Qi.fromBufferAttribute(s,o),tr.fromBufferAttribute(s,c),er.fromBufferAttribute(s,l),u.uv1=Be.getInterpolation(nr,Jn,Qn,ti,Qi,tr,er,new Ct),u.uv2=u.uv1),a&&(ba.fromBufferAttribute(a,o),Ta.fromBufferAttribute(a,c),wa.fromBufferAttribute(a,l),u.normal=Be.getInterpolation(nr,Jn,Qn,ti,ba,Ta,wa,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new U,materialIndex:0};Be.getNormal(Jn,Qn,ti,f.normal),u.face=f}return u}class an extends He{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(f,2));function g(_,p,h,M,v,b,S,A,P,O,y){const w=b/P,z=S/O,V=b/2,D=S/2,N=A/2,G=P+1,J=O+1;let Y=0,q=0;const Z=new U;for(let tt=0;tt<J;tt++){const pt=tt*z-D;for(let lt=0;lt<G;lt++){const W=lt*w-V;Z[_]=W*M,Z[p]=pt*v,Z[h]=N,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[h]=A>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(lt/P),f.push(1-tt/O),Y+=1}}for(let tt=0;tt<O;tt++)for(let pt=0;pt<P;pt++){const lt=d+pt+G*tt,W=d+pt+G*(tt+1),K=d+(pt+1)+G*(tt+1),it=d+(pt+1)+G*tt;c.push(lt,W,it),c.push(W,K,it),q+=6}o.addGroup(m,q,y),m+=q,d+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function me(i){const t={};for(let e=0;e<i.length;e++){const n=pi(i[e]);for(const r in n)t[r]=n[r]}return t}function Sm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gc(i){return i.getRenderTarget()===null?i.outputColorSpace:$e}const Em={clone:pi,merge:me};var bm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zn extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bm,this.fragmentShader=Tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pi(t.uniforms),this.uniformsGroups=Sm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hc extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class De extends Hc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ei=-90,ni=1;class wm extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new De(ei,ni,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new De(ei,ni,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new De(ei,ni,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new De(ei,ni,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const c=new De(ei,ni,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new De(ei,ni,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,o,c,l]=this.children,u=t.getRenderTarget(),f=t.toneMapping,d=t.xr.enabled;t.toneMapping=sn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,r),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=f,t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Vc extends Me{constructor(t,e,n,r,s,a,o,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:hi,super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Am extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Li("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===In?Lt:On),this.texture=new Vc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new an(5,5,5),s=new zn({name:"CubemapFromEquirect",uniforms:pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xe,blending:_n});s.uniforms.tEquirect.value=e;const a=new Ae(r,s),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=Pe),new wm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const as=new U,Rm=new U,Cm=new Nt;class mn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=as.subVectors(n,e).cross(Rm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(as),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cm.getNormalMatrix(t),r=this.coplanarPoint(as).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new br,sr=new U;class Zs{constructor(t=new mn,e=new mn,n=new mn,r=new mn,s=new mn,a=new mn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,r=n[0],s=n[1],a=n[2],o=n[3],c=n[4],l=n[5],u=n[6],f=n[7],d=n[8],m=n[9],g=n[10],_=n[11],p=n[12],h=n[13],M=n[14],v=n[15];return e[0].setComponents(o-r,f-c,_-d,v-p).normalize(),e[1].setComponents(o+r,f+c,_+d,v+p).normalize(),e[2].setComponents(o+s,f+l,_+m,v+h).normalize(),e[3].setComponents(o-s,f-l,_-m,v-h).normalize(),e[4].setComponents(o-a,f-u,_-g,v-M).normalize(),e[5].setComponents(o+a,f+u,_+g,v+M).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(t){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(t.matrixWorld),this.intersectsSphere(An)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(sr.x=r.normal.x>0?t.max.x:t.min.x,sr.y=r.normal.y>0?t.max.y:t.min.y,sr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wc(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Lm(i,t){const e=t.isWebGL2,n=new WeakMap;function r(l,u){const f=l.array,d=l.usage,m=i.createBuffer();i.bindBuffer(u,m),i.bufferData(u,f,d),l.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const d=u.array,m=u.updateRange;i.bindBuffer(f,l),m.count===-1?i.bufferSubData(f,0,d):(e?i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):i.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:a,remove:o,update:c}}class Ii extends He{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=t/o,d=e/c,m=[],g=[],_=[],p=[];for(let h=0;h<u;h++){const M=h*d-a;for(let v=0;v<l;v++){const b=v*f-s;g.push(b,-M,0),_.push(0,0,1),p.push(v/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let M=0;M<o;M++){const v=M+l*h,b=M+l*(h+1),S=M+1+l*(h+1),A=M+1+l*h;m.push(v,b,A),m.push(b,S,A)}this.setIndex(m),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Im=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nm="vec3 transformed = vec3( position );",Bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Km=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Jm=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",rg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,og=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ag=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,mg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_g=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,wg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ag=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Lg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pg=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ig=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ng=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Yg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Zg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,n_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,s_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,a_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,l_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,u_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,h_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,f_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,p_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,__=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,x_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,M_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,S_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E_=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,b_=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,T_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,D_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,U_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,I_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,F_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,B_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,G_=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,H_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,j_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Z_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ev=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,rv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Dt={alphamap_fragment:Pm,alphamap_pars_fragment:Dm,alphatest_fragment:Um,alphatest_pars_fragment:Im,aomap_fragment:Om,aomap_pars_fragment:Fm,begin_vertex:Nm,beginnormal_vertex:Bm,bsdfs:zm,iridescence_fragment:Gm,bumpmap_pars_fragment:Hm,clipping_planes_fragment:Vm,clipping_planes_pars_fragment:Wm,clipping_planes_pars_vertex:km,clipping_planes_vertex:jm,color_fragment:Xm,color_pars_fragment:$m,color_pars_vertex:qm,color_vertex:Ym,common:Km,cube_uv_reflection_fragment:Zm,defaultnormal_vertex:Jm,displacementmap_pars_vertex:Qm,displacementmap_vertex:tg,emissivemap_fragment:eg,emissivemap_pars_fragment:ng,encodings_fragment:ig,encodings_pars_fragment:rg,envmap_fragment:sg,envmap_common_pars_fragment:og,envmap_pars_fragment:ag,envmap_pars_vertex:cg,envmap_physical_pars_fragment:xg,envmap_vertex:lg,fog_vertex:ug,fog_pars_vertex:hg,fog_fragment:fg,fog_pars_fragment:dg,gradientmap_pars_fragment:pg,lightmap_fragment:mg,lightmap_pars_fragment:gg,lights_lambert_fragment:_g,lights_lambert_pars_fragment:vg,lights_pars_begin:yg,lights_toon_fragment:Mg,lights_toon_pars_fragment:Sg,lights_phong_fragment:Eg,lights_phong_pars_fragment:bg,lights_physical_fragment:Tg,lights_physical_pars_fragment:wg,lights_fragment_begin:Ag,lights_fragment_maps:Rg,lights_fragment_end:Cg,logdepthbuf_fragment:Lg,logdepthbuf_pars_fragment:Pg,logdepthbuf_pars_vertex:Dg,logdepthbuf_vertex:Ug,map_fragment:Ig,map_pars_fragment:Og,map_particle_fragment:Fg,map_particle_pars_fragment:Ng,metalnessmap_fragment:Bg,metalnessmap_pars_fragment:zg,morphcolor_vertex:Gg,morphnormal_vertex:Hg,morphtarget_pars_vertex:Vg,morphtarget_vertex:Wg,normal_fragment_begin:kg,normal_fragment_maps:jg,normal_pars_fragment:Xg,normal_pars_vertex:$g,normal_vertex:qg,normalmap_pars_fragment:Yg,clearcoat_normal_fragment_begin:Kg,clearcoat_normal_fragment_maps:Zg,clearcoat_pars_fragment:Jg,iridescence_pars_fragment:Qg,output_fragment:t_,packing:e_,premultiplied_alpha_fragment:n_,project_vertex:i_,dithering_fragment:r_,dithering_pars_fragment:s_,roughnessmap_fragment:o_,roughnessmap_pars_fragment:a_,shadowmap_pars_fragment:c_,shadowmap_pars_vertex:l_,shadowmap_vertex:u_,shadowmask_pars_fragment:h_,skinbase_vertex:f_,skinning_pars_vertex:d_,skinning_vertex:p_,skinnormal_vertex:m_,specularmap_fragment:g_,specularmap_pars_fragment:__,tonemapping_fragment:v_,tonemapping_pars_fragment:y_,transmission_fragment:x_,transmission_pars_fragment:M_,uv_pars_fragment:S_,uv_pars_vertex:E_,uv_vertex:b_,worldpos_vertex:T_,background_vert:w_,background_frag:A_,backgroundCube_vert:R_,backgroundCube_frag:C_,cube_vert:L_,cube_frag:P_,depth_vert:D_,depth_frag:U_,distanceRGBA_vert:I_,distanceRGBA_frag:O_,equirect_vert:F_,equirect_frag:N_,linedashed_vert:B_,linedashed_frag:z_,meshbasic_vert:G_,meshbasic_frag:H_,meshlambert_vert:V_,meshlambert_frag:W_,meshmatcap_vert:k_,meshmatcap_frag:j_,meshnormal_vert:X_,meshnormal_frag:$_,meshphong_vert:q_,meshphong_frag:Y_,meshphysical_vert:K_,meshphysical_frag:Z_,meshtoon_vert:J_,meshtoon_frag:Q_,points_vert:tv,points_frag:ev,shadow_vert:nv,shadow_frag:iv,sprite_vert:rv,sprite_frag:sv},st={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaTest:{value:0}}},je={basic:{uniforms:me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Dt.meshbasic_vert,fragmentShader:Dt.meshbasic_frag},lambert:{uniforms:me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Dt.meshlambert_vert,fragmentShader:Dt.meshlambert_frag},phong:{uniforms:me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Dt.meshphong_vert,fragmentShader:Dt.meshphong_frag},standard:{uniforms:me([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag},toon:{uniforms:me([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Dt.meshtoon_vert,fragmentShader:Dt.meshtoon_frag},matcap:{uniforms:me([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Dt.meshmatcap_vert,fragmentShader:Dt.meshmatcap_frag},points:{uniforms:me([st.points,st.fog]),vertexShader:Dt.points_vert,fragmentShader:Dt.points_frag},dashed:{uniforms:me([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Dt.linedashed_vert,fragmentShader:Dt.linedashed_frag},depth:{uniforms:me([st.common,st.displacementmap]),vertexShader:Dt.depth_vert,fragmentShader:Dt.depth_frag},normal:{uniforms:me([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Dt.meshnormal_vert,fragmentShader:Dt.meshnormal_frag},sprite:{uniforms:me([st.sprite,st.fog]),vertexShader:Dt.sprite_vert,fragmentShader:Dt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Dt.background_vert,fragmentShader:Dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Dt.backgroundCube_vert,fragmentShader:Dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Dt.cube_vert,fragmentShader:Dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Dt.equirect_vert,fragmentShader:Dt.equirect_frag},distanceRGBA:{uniforms:me([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Dt.distanceRGBA_vert,fragmentShader:Dt.distanceRGBA_frag},shadow:{uniforms:me([st.lights,st.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Dt.shadow_vert,fragmentShader:Dt.shadow_frag}};je.physical={uniforms:me([je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt}}]),vertexShader:Dt.meshphysical_vert,fragmentShader:Dt.meshphysical_frag};const or={r:0,b:0,g:0};function ov(i,t,e,n,r,s,a){const o=new Gt(0);let c=s===!0?0:1,l,u,f=null,d=0,m=null;function g(p,h){let M=!1,v=h.isScene===!0?h.background:null;switch(v&&v.isTexture&&(v=(h.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),M=!0),i.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),M=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),M=!0;break}(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Er)?(u===void 0&&(u=new Ae(new an(1,1,1),new zn({name:"BackgroundCubeMaterial",uniforms:pi(je.backgroundCube.uniforms),vertexShader:je.backgroundCube.vertexShader,fragmentShader:je.backgroundCube.fragmentShader,side:xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Lt,(f!==v||d!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,d=v.version,m=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ae(new Ii(2,2),new zn({name:"BackgroundMaterial",uniforms:pi(je.background.uniforms),vertexShader:je.background.vertexShader,fragmentShader:je.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,l.material.toneMapped=v.colorSpace!==Lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||d!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,d=v.version,m=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,h){p.getRGB(or,Gc(i)),n.buffers.color.setClear(or.r,or.g,or.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(p,h=1){o.set(p),c=h,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:g}}function av(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},c=p(null);let l=c,u=!1;function f(N,G,J,Y,q){let Z=!1;if(a){const tt=_(Y,J,G);l!==tt&&(l=tt,m(l.object)),Z=h(N,Y,J,q),Z&&M(N,Y,J,q)}else{const tt=G.wireframe===!0;(l.geometry!==Y.id||l.program!==J.id||l.wireframe!==tt)&&(l.geometry=Y.id,l.program=J.id,l.wireframe=tt,Z=!0)}q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(Z||u)&&(u=!1,O(N,G,J,Y),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function m(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function _(N,G,J){const Y=J.wireframe===!0;let q=o[N.id];q===void 0&&(q={},o[N.id]=q);let Z=q[G.id];Z===void 0&&(Z={},q[G.id]=Z);let tt=Z[Y];return tt===void 0&&(tt=p(d()),Z[Y]=tt),tt}function p(N){const G=[],J=[],Y=[];for(let q=0;q<r;q++)G[q]=0,J[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:J,attributeDivisors:Y,object:N,attributes:{},index:null}}function h(N,G,J,Y){const q=l.attributes,Z=G.attributes;let tt=0;const pt=J.getAttributes();for(const lt in pt)if(pt[lt].location>=0){const K=q[lt];let it=Z[lt];if(it===void 0&&(lt==="instanceMatrix"&&N.instanceMatrix&&(it=N.instanceMatrix),lt==="instanceColor"&&N.instanceColor&&(it=N.instanceColor)),K===void 0||K.attribute!==it||it&&K.data!==it.data)return!0;tt++}return l.attributesNum!==tt||l.index!==Y}function M(N,G,J,Y){const q={},Z=G.attributes;let tt=0;const pt=J.getAttributes();for(const lt in pt)if(pt[lt].location>=0){let K=Z[lt];K===void 0&&(lt==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),lt==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));const it={};it.attribute=K,K&&K.data&&(it.data=K.data),q[lt]=it,tt++}l.attributes=q,l.attributesNum=tt,l.index=Y}function v(){const N=l.newAttributes;for(let G=0,J=N.length;G<J;G++)N[G]=0}function b(N){S(N,0)}function S(N,G){const J=l.newAttributes,Y=l.enabledAttributes,q=l.attributeDivisors;J[N]=1,Y[N]===0&&(i.enableVertexAttribArray(N),Y[N]=1),q[N]!==G&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,G),q[N]=G)}function A(){const N=l.newAttributes,G=l.enabledAttributes;for(let J=0,Y=G.length;J<Y;J++)G[J]!==N[J]&&(i.disableVertexAttribArray(J),G[J]=0)}function P(N,G,J,Y,q,Z){n.isWebGL2===!0&&(J===i.INT||J===i.UNSIGNED_INT)?i.vertexAttribIPointer(N,G,J,q,Z):i.vertexAttribPointer(N,G,J,Y,q,Z)}function O(N,G,J,Y){if(n.isWebGL2===!1&&(N.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const q=Y.attributes,Z=J.getAttributes(),tt=G.defaultAttributeValues;for(const pt in Z){const lt=Z[pt];if(lt.location>=0){let W=q[pt];if(W===void 0&&(pt==="instanceMatrix"&&N.instanceMatrix&&(W=N.instanceMatrix),pt==="instanceColor"&&N.instanceColor&&(W=N.instanceColor)),W!==void 0){const K=W.normalized,it=W.itemSize,at=e.get(W);if(at===void 0)continue;const L=at.buffer,bt=at.type,St=at.bytesPerElement;if(W.isInterleavedBufferAttribute){const rt=W.data,xt=rt.stride,Bt=W.offset;if(rt.isInstancedInterleavedBuffer){for(let mt=0;mt<lt.locationSize;mt++)S(lt.location+mt,rt.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let mt=0;mt<lt.locationSize;mt++)b(lt.location+mt);i.bindBuffer(i.ARRAY_BUFFER,L);for(let mt=0;mt<lt.locationSize;mt++)P(lt.location+mt,it/lt.locationSize,bt,K,xt*St,(Bt+it/lt.locationSize*mt)*St)}else{if(W.isInstancedBufferAttribute){for(let rt=0;rt<lt.locationSize;rt++)S(lt.location+rt,W.meshPerAttribute);N.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let rt=0;rt<lt.locationSize;rt++)b(lt.location+rt);i.bindBuffer(i.ARRAY_BUFFER,L);for(let rt=0;rt<lt.locationSize;rt++)P(lt.location+rt,it/lt.locationSize,bt,K,it*St,it/lt.locationSize*rt*St)}}else if(tt!==void 0){const K=tt[pt];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(lt.location,K);break;case 3:i.vertexAttrib3fv(lt.location,K);break;case 4:i.vertexAttrib4fv(lt.location,K);break;default:i.vertexAttrib1fv(lt.location,K)}}}}A()}function y(){V();for(const N in o){const G=o[N];for(const J in G){const Y=G[J];for(const q in Y)g(Y[q].object),delete Y[q];delete G[J]}delete o[N]}}function w(N){if(o[N.id]===void 0)return;const G=o[N.id];for(const J in G){const Y=G[J];for(const q in Y)g(Y[q].object),delete Y[q];delete G[J]}delete o[N.id]}function z(N){for(const G in o){const J=o[G];if(J[N.id]===void 0)continue;const Y=J[N.id];for(const q in Y)g(Y[q].object),delete Y[q];delete J[N.id]}}function V(){D(),u=!0,l!==c&&(l=c,m(l.object))}function D(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:V,resetDefaultState:D,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:b,disableUnusedAttributes:A}}function cv(i,t,e,n){const r=n.isWebGL2;let s;function a(l){s=l}function o(l,u){i.drawArrays(s,l,u),e.update(u,s,1)}function c(l,u,f){if(f===0)return;let d,m;if(r)d=i,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,u,f),e.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=c}function lv(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,b=a||t.has("OES_texture_float"),S=v&&b,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:h,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:S,maxSamples:A}}function uv(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new mn,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||r;return r=d,n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,h=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const M=s?0:n,v=M*4;let b=h.clippingState||null;c.value=b,b=u(g,d,v,m);for(let S=0;S!==v;++S)b[S]=e[S];h.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,m,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const h=m+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<h)&&(p=new Float32Array(h));for(let v=0,b=m;v!==_;++v,b+=4)a.copy(f[v]).applyMatrix4(M,o),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function hv(i){let t=new WeakMap;function e(a,o){return o===Ps?a.mapping=hi:o===Ds&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ps||o===Ds)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Am(c.height/2);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class kc extends Hc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ai=4,Aa=[.125,.215,.35,.446,.526,.582],Ln=20,cs=new kc,Ra=new Gt;let ls=null;const Rn=(1+Math.sqrt(5))/2,ii=1/Rn,Ca=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Rn,ii),new U(0,Rn,-ii),new U(ii,0,Rn),new U(-ii,0,Rn),new U(Rn,ii,0),new U(-Rn,ii,0)];class La{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){ls=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Da(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ls),t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ls=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Pe,minFilter:Pe,generateMipmaps:!1,type:Ui,format:Ge,colorSpace:$e,depthBuffer:!1},r=Pa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pa(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fv(s)),this._blurMaterial=dv(s,t,e)}return r}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,cs)}_sceneToCubeUV(t,e,n,r){const o=new De(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Ra),u.toneMapping=sn,u.autoClear=!1;const m=new Ks({name:"PMREM.Background",side:xe,depthWrite:!1,depthTest:!1}),g=new Ae(new an,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Ra),_=!0);for(let h=0;h<6;h++){const M=h%3;M===0?(o.up.set(0,c[h],0),o.lookAt(l[h],0,0)):M===1?(o.up.set(0,0,c[h]),o.lookAt(0,l[h],0)):(o.up.set(0,c[h],0),o.lookAt(0,0,l[h]));const v=this._cubeSize;ar(r,M*v,h>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===hi||t.mapping===fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Da());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;ar(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,cs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ca[(r-1)%Ca.length];this._blur(t,r-1,r,s,a)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ae(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Ln-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Ln;p>Ln&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ln}`);const h=[];let M=0;for(let P=0;P<Ln;++P){const O=P/_,y=Math.exp(-O*O/2);h.push(y),P===0?M+=y:P<p&&(M+=2*y)}for(let P=0;P<h.length;P++)h[P]=h[P]/M;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const b=this._sizeLods[r],S=3*b*(r>v-ai?r-v+ai:0),A=4*(this._cubeSize-b);ar(e,S,A,3*b,2*b),c.setRenderTarget(e),c.render(f,cs)}}function fv(i){const t=[],e=[],n=[];let r=i;const s=i-ai+1+Aa.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-ai?c=Aa[a-i+ai-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,g=6,_=3,p=2,h=1,M=new Float32Array(_*g*m),v=new Float32Array(p*g*m),b=new Float32Array(h*g*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,O=A>2?0:-1,y=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];M.set(y,_*g*A),v.set(d,p*g*A);const w=[A,A,A,A,A,A];b.set(w,h*g*A)}const S=new He;S.setAttribute("position",new Xe(M,_)),S.setAttribute("uv",new Xe(v,p)),S.setAttribute("faceIndex",new Xe(b,h)),t.push(S),r>ai&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Pa(i,t,e){const n=new Nn(i,t,e);return n.texture.mapping=Er,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ar(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function dv(i,t,e){const n=new Float32Array(Ln),r=new U(0,1,0);return new zn({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Da(){return new zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Ua(){return new zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Js(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_n,depthTest:!1,depthWrite:!1})}function Js(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pv(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ps||c===Ds,u=c===hi||c===fi;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new La(i)),f=l?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||u&&f&&r(f)){e===null&&(e=new La(i));const d=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function mv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function gv(i,t,e,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const _=m[g];for(let p=0,h=_.length;p<h;p++)t.update(_[p],i.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const M=m.array;_=m.version;for(let v=0,b=M.length;v<b;v+=3){const S=M[v+0],A=M[v+1],P=M[v+2];d.push(S,A,A,P,P,S)}}else{const M=g.array;_=g.version;for(let v=0,b=M.length/3-1;v<b;v+=3){const S=v+0,A=v+1,P=v+2;d.push(S,A,A,P,P,S)}}const p=new(Uc(d)?zc:Bc)(d,1);p.version=_;const h=s.get(f);h&&t.remove(h),s.set(f,p)}function u(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function _v(i,t,e,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,c;function l(d){o=d.type,c=d.bytesPerElement}function u(d,m){i.drawElements(s,m,o,d*c),e.update(m,s,1)}function f(d,m,g){if(g===0)return;let _,p;if(r)_=i,p="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,d*c,g),e.update(m,s,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=f}function vv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function yv(i,t){return i[0]-t[0]}function xv(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Mv(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,a=new ae,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,f){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let N=function(){V.dispose(),s.delete(u),u.removeEventListener("dispose",N)};_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let O=0;M===!0&&(O=1),v===!0&&(O=2),b===!0&&(O=3);let y=u.attributes.position.count*O,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const z=new Float32Array(y*w*4*g),V=new Fc(z,y,w,g);V.type=Dn,V.needsUpdate=!0;const D=O*4;for(let G=0;G<g;G++){const J=S[G],Y=A[G],q=P[G],Z=y*w*4*G;for(let tt=0;tt<J.count;tt++){const pt=tt*D;M===!0&&(a.fromBufferAttribute(J,tt),z[Z+pt+0]=a.x,z[Z+pt+1]=a.y,z[Z+pt+2]=a.z,z[Z+pt+3]=0),v===!0&&(a.fromBufferAttribute(Y,tt),z[Z+pt+4]=a.x,z[Z+pt+5]=a.y,z[Z+pt+6]=a.z,z[Z+pt+7]=0),b===!0&&(a.fromBufferAttribute(q,tt),z[Z+pt+8]=a.x,z[Z+pt+9]=a.y,z[Z+pt+10]=a.z,z[Z+pt+11]=q.itemSize===4?a.w:1)}}_={count:g,texture:V,size:new Ct(y,w)},s.set(u,_),u.addEventListener("dispose",N)}let p=0;for(let M=0;M<d.length;M++)p+=d[M];const h=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",h),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<m;v++){const b=g[v];b[0]=v,b[1]=d[v]}g.sort(xv);for(let v=0;v<8;v++)v<m&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(yv);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let h=0;for(let v=0;v<8;v++){const b=o[v],S=b[0],A=b[1];S!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+v)!==_[S]&&u.setAttribute("morphTarget"+v,_[S]),p&&u.getAttribute("morphNormal"+v)!==p[S]&&u.setAttribute("morphNormal"+v,p[S]),r[v]=A,h+=A):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const M=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(i,"morphTargetBaseInfluence",M),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function Sv(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);return r.get(f)!==l&&(t.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER)),f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const jc=new Me,Xc=new Fc,$c=new hm,qc=new Vc,Ia=[],Oa=[],Fa=new Float32Array(16),Na=new Float32Array(9),Ba=new Float32Array(4);function vi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Ia[r];if(s===void 0&&(s=new Float32Array(r),Ia[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function re(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wr(i,t){let e=Oa[t];e===void 0&&(e=new Int32Array(t),Oa[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Ev(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;i.uniform2fv(this.addr,t),re(e,t)}}function Tv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ie(e,t))return;i.uniform3fv(this.addr,t),re(e,t)}}function wv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;i.uniform4fv(this.addr,t),re(e,t)}}function Av(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),re(e,t)}else{if(ie(e,n))return;Ba.set(n),i.uniformMatrix2fv(this.addr,!1,Ba),re(e,n)}}function Rv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),re(e,t)}else{if(ie(e,n))return;Na.set(n),i.uniformMatrix3fv(this.addr,!1,Na),re(e,n)}}function Cv(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),re(e,t)}else{if(ie(e,n))return;Fa.set(n),i.uniformMatrix4fv(this.addr,!1,Fa),re(e,n)}}function Lv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;i.uniform2iv(this.addr,t),re(e,t)}}function Dv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ie(e,t))return;i.uniform3iv(this.addr,t),re(e,t)}}function Uv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;i.uniform4iv(this.addr,t),re(e,t)}}function Iv(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Ov(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ie(e,t))return;i.uniform2uiv(this.addr,t),re(e,t)}}function Fv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ie(e,t))return;i.uniform3uiv(this.addr,t),re(e,t)}}function Nv(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ie(e,t))return;i.uniform4uiv(this.addr,t),re(e,t)}}function Bv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||jc,r)}function zv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||$c,r)}function Gv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||qc,r)}function Hv(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Xc,r)}function Vv(i){switch(i){case 5126:return Ev;case 35664:return bv;case 35665:return Tv;case 35666:return wv;case 35674:return Av;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Lv;case 35667:case 35671:return Pv;case 35668:case 35672:return Dv;case 35669:case 35673:return Uv;case 5125:return Iv;case 36294:return Ov;case 36295:return Fv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Bv;case 35679:case 36299:case 36307:return zv;case 35680:case 36300:case 36308:case 36293:return Gv;case 36289:case 36303:case 36311:case 36292:return Hv}}function Wv(i,t){i.uniform1fv(this.addr,t)}function kv(i,t){const e=vi(t,this.size,2);i.uniform2fv(this.addr,e)}function jv(i,t){const e=vi(t,this.size,3);i.uniform3fv(this.addr,e)}function Xv(i,t){const e=vi(t,this.size,4);i.uniform4fv(this.addr,e)}function $v(i,t){const e=vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function qv(i,t){const e=vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yv(i,t){const e=vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Kv(i,t){i.uniform1iv(this.addr,t)}function Zv(i,t){i.uniform2iv(this.addr,t)}function Jv(i,t){i.uniform3iv(this.addr,t)}function Qv(i,t){i.uniform4iv(this.addr,t)}function t0(i,t){i.uniform1uiv(this.addr,t)}function e0(i,t){i.uniform2uiv(this.addr,t)}function n0(i,t){i.uniform3uiv(this.addr,t)}function i0(i,t){i.uniform4uiv(this.addr,t)}function r0(i,t,e){const n=this.cache,r=t.length,s=wr(e,r);ie(n,s)||(i.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||jc,s[a])}function s0(i,t,e){const n=this.cache,r=t.length,s=wr(e,r);ie(n,s)||(i.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||$c,s[a])}function o0(i,t,e){const n=this.cache,r=t.length,s=wr(e,r);ie(n,s)||(i.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||qc,s[a])}function a0(i,t,e){const n=this.cache,r=t.length,s=wr(e,r);ie(n,s)||(i.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Xc,s[a])}function c0(i){switch(i){case 5126:return Wv;case 35664:return kv;case 35665:return jv;case 35666:return Xv;case 35674:return $v;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return Kv;case 35667:case 35671:return Zv;case 35668:case 35672:return Jv;case 35669:case 35673:return Qv;case 5125:return t0;case 36294:return e0;case 36295:return n0;case 36296:return i0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return s0;case 35680:case 36300:case 36308:case 36293:return o0;case 36289:case 36303:case 36311:case 36292:return a0}}class l0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Vv(e.type)}}class u0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=c0(e.type)}}class h0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const us=/(\w+)(\])?(\[|\.)?/g;function za(i,t){i.seq.push(t),i.map[t.id]=t}function f0(i,t,e){const n=i.name,r=n.length;for(us.lastIndex=0;;){const s=us.exec(n),a=us.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){za(e,l===void 0?new l0(o,i,t):new u0(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new h0(o),za(e,f)),e=f}}}class hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);f0(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ga(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let d0=0;function p0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function m0(i){switch(i){case $e:return["Linear","( value )"];case Lt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Ha(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+p0(i.getShaderSource(t),a)}else return r}function g0(i,t){const e=m0(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function _0(i,t){let e;switch(t){case Pp:e="Linear";break;case Dp:e="Reinhard";break;case Up:e="OptimizedCineon";break;case Ip:e="ACESFilmic";break;case Op:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function v0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function y0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function x0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ai(i){return i!==""}function Va(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const M0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ns(i){return i.replace(M0,S0)}function S0(i,t){const e=Dt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Ns(e)}const E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ka(i){return i.replace(E0,b0)}function b0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ja(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function T0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ec?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===en&&(t="SHADOWMAP_TYPE_VSM"),t}function w0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hi:case fi:t="ENVMAP_TYPE_CUBE";break;case Er:t="ENVMAP_TYPE_CUBE_UV";break}return t}function A0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fi:t="ENVMAP_MODE_REFRACTION";break}return t}function R0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ac:t="ENVMAP_BLENDING_MULTIPLY";break;case Cp:t="ENVMAP_BLENDING_MIX";break;case Lp:t="ENVMAP_BLENDING_ADD";break}return t}function C0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function L0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=T0(e),l=w0(e),u=A0(e),f=R0(e),d=C0(e),m=e.isWebGL2?"":v0(e),g=y0(s),_=r.createProgram();let p,h,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Ai).join(`
`),p.length>0&&(p+=`
`),h=[m,g].filter(Ai).join(`
`),h.length>0&&(h+=`
`)):(p=[ja(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),h=[m,ja(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==sn?"#define TONE_MAPPING":"",e.toneMapping!==sn?Dt.tonemapping_pars_fragment:"",e.toneMapping!==sn?_0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Dt.encodings_pars_fragment,g0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ai).join(`
`)),a=Ns(a),a=Va(a,e),a=Wa(a,e),o=Ns(o),o=Va(o,e),o=Wa(o,e),a=ka(a),o=ka(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=M+p+a,b=M+h+o,S=Ga(r,r.VERTEX_SHADER,v),A=Ga(r,r.FRAGMENT_SHADER,b);if(r.attachShader(_,S),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const y=r.getProgramInfoLog(_).trim(),w=r.getShaderInfoLog(S).trim(),z=r.getShaderInfoLog(A).trim();let V=!0,D=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,S,A);else{const N=Ha(r,S,"vertex"),G=Ha(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+N+`
`+G)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(w===""||z==="")&&(D=!1);D&&(this.diagnostics={runnable:V,programLog:y,vertexShader:{log:w,prefix:p},fragmentShader:{log:z,prefix:h}})}r.deleteShader(S),r.deleteShader(A);let P;this.getUniforms=function(){return P===void 0&&(P=new hr(r,_)),P};let O;return this.getAttributes=function(){return O===void 0&&(O=x0(r,_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=e.shaderName,this.id=d0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=A,this}let P0=0;class D0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new U0(t),e.set(t,n)),n}}class U0{constructor(t){this.id=P0++,this.code=t,this.usedTimes=0}}function I0(i,t,e,n,r,s,a){const o=new Ys,c=new D0,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===1?"uv1":y===2?"uv2":y===3?"uv3":"uv"}function p(y,w,z,V,D){const N=V.fog,G=D.geometry,J=y.isMeshStandardMaterial?V.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||J),q=Y&&Y.mapping===Er?Y.image.height:null,Z=g[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pt=tt!==void 0?tt.length:0;let lt=0;G.morphAttributes.position!==void 0&&(lt=1),G.morphAttributes.normal!==void 0&&(lt=2),G.morphAttributes.color!==void 0&&(lt=3);let W,K,it,at;if(Z){const Wt=je[Z];W=Wt.vertexShader,K=Wt.fragmentShader}else W=y.vertexShader,K=y.fragmentShader,c.update(y),it=c.getVertexShaderID(y),at=c.getFragmentShaderID(y);const L=i.getRenderTarget(),bt=D.isInstancedMesh===!0,St=!!y.map,rt=!!y.matcap,xt=!!Y,Bt=!!y.aoMap,mt=!!y.lightMap,Rt=!!y.bumpMap,$t=!!y.normalMap,Xt=!!y.displacementMap,Yt=!!y.emissiveMap,qt=!!y.metalnessMap,ut=!!y.roughnessMap,Tt=y.clearcoat>0,Ht=y.iridescence>0,T=y.sheen>0,x=y.transmission>0,H=Tt&&!!y.clearcoatMap,Q=Tt&&!!y.clearcoatNormalMap,et=Tt&&!!y.clearcoatRoughnessMap,ot=Ht&&!!y.iridescenceMap,R=Ht&&!!y.iridescenceThicknessMap,X=T&&!!y.sheenColorMap,B=T&&!!y.sheenRoughnessMap,ct=!!y.specularMap,dt=!!y.specularColorMap,_t=!!y.specularIntensityMap,ht=x&&!!y.transmissionMap,gt=x&&!!y.thicknessMap,wt=!!y.gradientMap,Ut=!!y.alphaMap,Zt=y.alphaTest>0,C=!!y.extensions,k=!!G.attributes.uv1,nt=!!G.attributes.uv2,ft=!!G.attributes.uv3;return{isWebGL2:u,shaderID:Z,shaderName:y.type,vertexShader:W,fragmentShader:K,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:at,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:bt,instancingColor:bt&&D.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:L===null?i.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:$e,map:St,matcap:rt,envMap:xt,envMapMode:xt&&Y.mapping,envMapCubeUVHeight:q,aoMap:Bt,lightMap:mt,bumpMap:Rt,normalMap:$t,displacementMap:d&&Xt,emissiveMap:Yt,normalMapObjectSpace:$t&&y.normalMapType===tm,normalMapTangentSpace:$t&&y.normalMapType===Pc,metalnessMap:qt,roughnessMap:ut,clearcoat:Tt,clearcoatMap:H,clearcoatNormalMap:Q,clearcoatRoughnessMap:et,iridescence:Ht,iridescenceMap:ot,iridescenceThicknessMap:R,sheen:T,sheenColorMap:X,sheenRoughnessMap:B,specularMap:ct,specularColorMap:dt,specularIntensityMap:_t,transmission:x,transmissionMap:ht,thicknessMap:gt,gradientMap:wt,opaque:y.transparent===!1&&y.blending===ci,alphaMap:Ut,alphaTest:Zt,combine:y.combine,mapUv:St&&_(y.map.channel),aoMapUv:Bt&&_(y.aoMap.channel),lightMapUv:mt&&_(y.lightMap.channel),bumpMapUv:Rt&&_(y.bumpMap.channel),normalMapUv:$t&&_(y.normalMap.channel),displacementMapUv:Xt&&_(y.displacementMap.channel),emissiveMapUv:Yt&&_(y.emissiveMap.channel),metalnessMapUv:qt&&_(y.metalnessMap.channel),roughnessMapUv:ut&&_(y.roughnessMap.channel),clearcoatMapUv:H&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:R&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:X&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:B&&_(y.sheenRoughnessMap.channel),specularMapUv:ct&&_(y.specularMap.channel),specularColorMapUv:dt&&_(y.specularColorMap.channel),specularIntensityMapUv:_t&&_(y.specularIntensityMap.channel),transmissionMapUv:ht&&_(y.transmissionMap.channel),thicknessMapUv:gt&&_(y.thicknessMap.channel),alphaMapUv:Ut&&_(y.alphaMap.channel),vertexTangents:$t&&!!G.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:k,vertexUv2s:nt,vertexUv3s:ft,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(St||Ut),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:lt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:y.toneMapped?i.toneMapping:sn,useLegacyLights:i.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===rn,flipSided:y.side===xe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:C&&y.extensions.derivatives===!0,extensionFragDepth:C&&y.extensions.fragDepth===!0,extensionDrawBuffers:C&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:C&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const z in y.defines)w.push(z),w.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(M(w,y),v(w,y),w.push(i.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function M(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),y.push(o.mask)}function b(y){const w=g[y.type];let z;if(w){const V=je[w];z=Em.clone(V.uniforms)}else z=y.uniforms;return z}function S(y,w){let z;for(let V=0,D=l.length;V<D;V++){const N=l[V];if(N.cacheKey===w){z=N,++z.usedTimes;break}}return z===void 0&&(z=new L0(i,w,y,s),l.push(z)),z}function A(y){if(--y.usedTimes===0){const w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),y.destroy()}}function P(y){c.remove(y)}function O(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:b,acquireProgram:S,releaseProgram:A,releaseShaderCache:P,programs:l,dispose:O}}function O0(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function F0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Xa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function $a(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(f,d,m,g,_,p){let h=i[t];return h===void 0?(h={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[t]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=m,h.groupOrder=g,h.renderOrder=f.renderOrder,h.z=_,h.group=p),t++,h}function o(f,d,m,g,_,p){const h=a(f,d,m,g,_,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):e.push(h)}function c(f,d,m,g,_,p){const h=a(f,d,m,g,_,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function l(f,d){e.length>1&&e.sort(f||F0),n.length>1&&n.sort(d||Xa),r.length>1&&r.sort(d||Xa)}function u(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function N0(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new $a,i.set(n,[a])):r>=s.length?(a=new $a,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function B0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function z0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let G0=0;function H0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function V0(i,t){const e=new B0,n=z0(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,a=new Qt,o=new Qt;function c(u,f){let d=0,m=0,g=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let _=0,p=0,h=0,M=0,v=0,b=0,S=0,A=0,P=0,O=0;u.sort(H0);const y=f===!0?Math.PI:1;for(let z=0,V=u.length;z<V;z++){const D=u[z],N=D.color,G=D.intensity,J=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=N.r*G*y,m+=N.g*G*y,g+=N.b*G*y;else if(D.isLightProbe)for(let q=0;q<9;q++)r.probe[q].addScaledVector(D.sh.coefficients[q],G);else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*y),D.castShadow){const Z=D.shadow,tt=n.get(D);tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,r.directionalShadow[_]=tt,r.directionalShadowMap[_]=Y,r.directionalShadowMatrix[_]=D.shadow.matrix,b++}r.directional[_]=q,_++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(N).multiplyScalar(G*y),q.distance=J,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,r.spot[h]=q;const Z=D.shadow;if(D.map&&(r.spotLightMap[P]=D.map,P++,Z.updateMatrices(D),D.castShadow&&O++),r.spotLightMatrix[h]=Z.matrix,D.castShadow){const tt=n.get(D);tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,r.spotShadow[h]=tt,r.spotShadowMap[h]=Y,A++}h++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(N).multiplyScalar(G),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),r.rectArea[M]=q,M++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity*y),q.distance=D.distance,q.decay=D.decay,D.castShadow){const Z=D.shadow,tt=n.get(D);tt.shadowBias=Z.bias,tt.shadowNormalBias=Z.normalBias,tt.shadowRadius=Z.radius,tt.shadowMapSize=Z.mapSize,tt.shadowCameraNear=Z.camera.near,tt.shadowCameraFar=Z.camera.far,r.pointShadow[p]=tt,r.pointShadowMap[p]=Y,r.pointShadowMatrix[p]=D.shadow.matrix,S++}r.point[p]=q,p++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(G*y),q.groundColor.copy(D.groundColor).multiplyScalar(G*y),r.hemi[v]=q,v++}}M>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=st.LTC_FLOAT_1,r.rectAreaLTC2=st.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=st.LTC_HALF_1,r.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==_||w.pointLength!==p||w.spotLength!==h||w.rectAreaLength!==M||w.hemiLength!==v||w.numDirectionalShadows!==b||w.numPointShadows!==S||w.numSpotShadows!==A||w.numSpotMaps!==P)&&(r.directional.length=_,r.spot.length=h,r.rectArea.length=M,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=A+P-O,r.spotLightMap.length=P,r.numSpotLightShadowsWithMaps=O,w.directionalLength=_,w.pointLength=p,w.spotLength=h,w.rectAreaLength=M,w.hemiLength=v,w.numDirectionalShadows=b,w.numPointShadows=S,w.numSpotShadows=A,w.numSpotMaps=P,r.version=G0++)}function l(u,f){let d=0,m=0,g=0,_=0,p=0;const h=f.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const b=u[M];if(b.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),d++}else if(b.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),g++}else if(b.isRectAreaLight){const S=r.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(h),o.identity(),a.copy(b.matrixWorld),a.premultiply(h),o.extractRotation(a),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){const S=r.point[m];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(h),m++}else if(b.isHemisphereLight){const S=r.hemi[p];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(h),p++}}}return{setup:c,setupView:l,state:r}}function qa(i,t){const e=new V0(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function W0(i,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let c;return o===void 0?(c=new qa(i,t),e.set(s,[c])):a>=o.length?(c=new qa(i,t),o.push(c)):c=o[a],c}function r(){e=new WeakMap}return{get:n,dispose:r}}class k0 extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class j0 extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function q0(i,t,e){let n=new Zs;const r=new Ct,s=new Ct,a=new ae,o=new k0({depthPacking:Qp}),c=new j0,l={},u=e.maxTextureSize,f={[yn]:xe,[xe]:yn,[rn]:rn},d=new zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:X0,fragmentShader:$0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let h=this.type;this.render=function(S,A,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const O=i.getRenderTarget(),y=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),z=i.state;z.setBlending(_n),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=h!==en&&this.type===en,D=h===en&&this.type!==en;for(let N=0,G=S.length;N<G;N++){const J=S[N],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const q=Y.getFrameExtents();if(r.multiply(q),s.copy(Y.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,Y.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,Y.mapSize.y=s.y)),Y.map===null||V===!0||D===!0){const tt=this.type!==en?{minFilter:ge,magFilter:ge}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Nn(r.x,r.y,tt),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const Z=Y.getViewportCount();for(let tt=0;tt<Z;tt++){const pt=Y.getViewport(tt);a.set(s.x*pt.x,s.y*pt.y,s.x*pt.z,s.y*pt.w),z.viewport(a),Y.updateMatrices(J,tt),n=Y.getFrustum(),b(A,P,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===en&&M(Y,P),Y.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(O,y,w)};function M(S,A){const P=t.update(_);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Nn(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,P,d,_,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,P,m,_,null)}function v(S,A,P,O){let y=null;const w=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)y=w;else if(y=P.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=y.uuid,V=A.uuid;let D=l[z];D===void 0&&(D={},l[z]=D);let N=D[V];N===void 0&&(N=y.clone(),D[V]=N),y=N}if(y.visible=A.visible,y.wireframe=A.wireframe,O===en?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=i.properties.get(y);z.light=P}return y}function b(S,A,P,O,y){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===en)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const V=t.update(S),D=S.material;if(Array.isArray(D)){const N=V.groups;for(let G=0,J=N.length;G<J;G++){const Y=N[G],q=D[Y.materialIndex];if(q&&q.visible){const Z=v(S,q,O,y);i.renderBufferDirect(P,null,V,Z,S,Y)}}}else if(D.visible){const N=v(S,D,O,y);i.renderBufferDirect(P,null,V,N,S,null)}}const z=S.children;for(let V=0,D=z.length;V<D;V++)b(z[V],A,P,O,y)}}function Y0(i,t,e){const n=e.isWebGL2;function r(){let C=!1;const k=new ae;let nt=null;const ft=new ae(0,0,0,0);return{setMask:function(vt){nt!==vt&&!C&&(i.colorMask(vt,vt,vt,vt),nt=vt)},setLocked:function(vt){C=vt},setClear:function(vt,Wt,kt,ue,cn){cn===!0&&(vt*=ue,Wt*=ue,kt*=ue),k.set(vt,Wt,kt,ue),ft.equals(k)===!1&&(i.clearColor(vt,Wt,kt,ue),ft.copy(k))},reset:function(){C=!1,nt=null,ft.set(-1,0,0,0)}}}function s(){let C=!1,k=null,nt=null,ft=null;return{setTest:function(vt){vt?L(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(vt){k!==vt&&!C&&(i.depthMask(vt),k=vt)},setFunc:function(vt){if(nt!==vt){switch(vt){case Sp:i.depthFunc(i.NEVER);break;case Ep:i.depthFunc(i.ALWAYS);break;case bp:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Tp:i.depthFunc(i.EQUAL);break;case wp:i.depthFunc(i.GEQUAL);break;case Ap:i.depthFunc(i.GREATER);break;case Rp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}nt=vt}},setLocked:function(vt){C=vt},setClear:function(vt){ft!==vt&&(i.clearDepth(vt),ft=vt)},reset:function(){C=!1,k=null,nt=null,ft=null}}}function a(){let C=!1,k=null,nt=null,ft=null,vt=null,Wt=null,kt=null,ue=null,cn=null;return{setTest:function(Jt){C||(Jt?L(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Jt){k!==Jt&&!C&&(i.stencilMask(Jt),k=Jt)},setFunc:function(Jt,Re,Ve){(nt!==Jt||ft!==Re||vt!==Ve)&&(i.stencilFunc(Jt,Re,Ve),nt=Jt,ft=Re,vt=Ve)},setOp:function(Jt,Re,Ve){(Wt!==Jt||kt!==Re||ue!==Ve)&&(i.stencilOp(Jt,Re,Ve),Wt=Jt,kt=Re,ue=Ve)},setLocked:function(Jt){C=Jt},setClear:function(Jt){cn!==Jt&&(i.clearStencil(Jt),cn=Jt)},reset:function(){C=!1,k=null,nt=null,ft=null,vt=null,Wt=null,kt=null,ue=null,cn=null}}}const o=new r,c=new s,l=new a,u=new WeakMap,f=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,h=!1,M=null,v=null,b=null,S=null,A=null,P=null,O=null,y=!1,w=null,z=null,V=null,D=null,N=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Y=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(q)[1]),J=Y>=1):q.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),J=Y>=2);let Z=null,tt={};const pt=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),W=new ae().fromArray(pt),K=new ae().fromArray(lt);function it(C,k,nt,ft){const vt=new Uint8Array(4),Wt=i.createTexture();i.bindTexture(C,Wt),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<nt;kt++)n&&(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)?i.texImage3D(k,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(k+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return Wt}const at={};at[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(at[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),L(i.DEPTH_TEST),c.setFunc(Ls),Xt(!1),Yt(Uo),L(i.CULL_FACE),Rt(_n);function L(C){d[C]!==!0&&(i.enable(C),d[C]=!0)}function bt(C){d[C]!==!1&&(i.disable(C),d[C]=!1)}function St(C,k){return m[C]!==k?(i.bindFramebuffer(C,k),m[C]=k,n&&(C===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=k),C===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=k)),!0):!1}function rt(C,k){let nt=_,ft=!1;if(C)if(nt=g.get(k),nt===void 0&&(nt=[],g.set(k,nt)),C.isWebGLMultipleRenderTargets){const vt=C.texture;if(nt.length!==vt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Wt=0,kt=vt.length;Wt<kt;Wt++)nt[Wt]=i.COLOR_ATTACHMENT0+Wt;nt.length=vt.length,ft=!0}}else nt[0]!==i.COLOR_ATTACHMENT0&&(nt[0]=i.COLOR_ATTACHMENT0,ft=!0);else nt[0]!==i.BACK&&(nt[0]=i.BACK,ft=!0);ft&&(e.isWebGL2?i.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function xt(C){return p!==C?(i.useProgram(C),p=C,!0):!1}const Bt={[oi]:i.FUNC_ADD,[hp]:i.FUNC_SUBTRACT,[fp]:i.FUNC_REVERSE_SUBTRACT};if(n)Bt[No]=i.MIN,Bt[Bo]=i.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(Bt[No]=C.MIN_EXT,Bt[Bo]=C.MAX_EXT)}const mt={[dp]:i.ZERO,[pp]:i.ONE,[mp]:i.SRC_COLOR,[Tc]:i.SRC_ALPHA,[Mp]:i.SRC_ALPHA_SATURATE,[yp]:i.DST_COLOR,[_p]:i.DST_ALPHA,[gp]:i.ONE_MINUS_SRC_COLOR,[wc]:i.ONE_MINUS_SRC_ALPHA,[xp]:i.ONE_MINUS_DST_COLOR,[vp]:i.ONE_MINUS_DST_ALPHA};function Rt(C,k,nt,ft,vt,Wt,kt,ue){if(C===_n){h===!0&&(bt(i.BLEND),h=!1);return}if(h===!1&&(L(i.BLEND),h=!0),C!==up){if(C!==M||ue!==y){if((v!==oi||A!==oi)&&(i.blendEquation(i.FUNC_ADD),v=oi,A=oi),ue)switch(C){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.ONE,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Io:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}b=null,S=null,P=null,O=null,M=C,y=ue}return}vt=vt||k,Wt=Wt||nt,kt=kt||ft,(k!==v||vt!==A)&&(i.blendEquationSeparate(Bt[k],Bt[vt]),v=k,A=vt),(nt!==b||ft!==S||Wt!==P||kt!==O)&&(i.blendFuncSeparate(mt[nt],mt[ft],mt[Wt],mt[kt]),b=nt,S=ft,P=Wt,O=kt),M=C,y=!1}function $t(C,k){C.side===rn?bt(i.CULL_FACE):L(i.CULL_FACE);let nt=C.side===xe;k&&(nt=!nt),Xt(nt),C.blending===ci&&C.transparent===!1?Rt(_n):Rt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),o.setMask(C.colorWrite);const ft=C.stencilWrite;l.setTest(ft),ft&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ut(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?L(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(C){w!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),w=C)}function Yt(C){C!==cp?(L(i.CULL_FACE),C!==z&&(C===Uo?i.cullFace(i.BACK):C===lp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),z=C}function qt(C){C!==V&&(J&&i.lineWidth(C),V=C)}function ut(C,k,nt){C?(L(i.POLYGON_OFFSET_FILL),(D!==k||N!==nt)&&(i.polygonOffset(k,nt),D=k,N=nt)):bt(i.POLYGON_OFFSET_FILL)}function Tt(C){C?L(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function Ht(C){C===void 0&&(C=i.TEXTURE0+G-1),Z!==C&&(i.activeTexture(C),Z=C)}function T(C,k,nt){nt===void 0&&(Z===null?nt=i.TEXTURE0+G-1:nt=Z);let ft=tt[nt];ft===void 0&&(ft={type:void 0,texture:void 0},tt[nt]=ft),(ft.type!==C||ft.texture!==k)&&(Z!==nt&&(i.activeTexture(nt),Z=nt),i.bindTexture(C,k||at[C]),ft.type=C,ft.texture=k)}function x(){const C=tt[Z];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function H(){try{i.compressedTexImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function et(){try{i.texSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ot(){try{i.texSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function R(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function X(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function B(){try{i.texStorage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ct(){try{i.texStorage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{i.texImage3D.apply(i,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(C){W.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),W.copy(C))}function gt(C){K.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),K.copy(C))}function wt(C,k){let nt=f.get(k);nt===void 0&&(nt=new WeakMap,f.set(k,nt));let ft=nt.get(C);ft===void 0&&(ft=i.getUniformBlockIndex(k,C.name),nt.set(C,ft))}function Ut(C,k){const ft=f.get(k).get(C);u.get(k)!==ft&&(i.uniformBlockBinding(k,ft,C.__bindingPointIndex),u.set(k,ft))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,tt={},m={},g=new WeakMap,_=[],p=null,h=!1,M=null,v=null,b=null,S=null,A=null,P=null,O=null,y=!1,w=null,z=null,V=null,D=null,N=null,W.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:L,disable:bt,bindFramebuffer:St,drawBuffers:rt,useProgram:xt,setBlending:Rt,setMaterial:$t,setFlipSided:Xt,setCullFace:Yt,setLineWidth:qt,setPolygonOffset:ut,setScissorTest:Tt,activeTexture:Ht,bindTexture:T,unbindTexture:x,compressedTexImage2D:H,compressedTexImage3D:Q,texImage2D:dt,texImage3D:_t,updateUBOMapping:wt,uniformBlockBinding:Ut,texStorage2D:B,texStorage3D:ct,texSubImage2D:et,texSubImage3D:ot,compressedTexSubImage2D:R,compressedTexSubImage3D:X,scissor:ht,viewport:gt,reset:Zt}}function K0(i,t,e,n,r,s,a){const o=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,x){return h?new OffscreenCanvas(T,x):yr("canvas")}function v(T,x,H,Q){let et=1;if((T.width>Q||T.height>Q)&&(et=Q/Math.max(T.width,T.height)),et<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ot=x?im:Math.floor,R=ot(et*T.width),X=ot(et*T.height);_===void 0&&(_=M(R,X));const B=H?M(R,X):_;return B.width=R,B.height=X,B.getContext("2d").drawImage(T,0,0,R,X),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+R+"x"+X+")."),B}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return ha(T.width)&&ha(T.height)}function S(T){return o?!1:T.wrapS!==ze||T.wrapT!==ze||T.minFilter!==ge&&T.minFilter!==Pe}function A(T,x){return T.generateMipmaps&&x&&T.minFilter!==ge&&T.minFilter!==Pe}function P(T){i.generateMipmap(T)}function O(T,x,H,Q,et=!1){if(o===!1)return x;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ot=x;return x===i.RED&&(H===i.FLOAT&&(ot=i.R32F),H===i.HALF_FLOAT&&(ot=i.R16F),H===i.UNSIGNED_BYTE&&(ot=i.R8)),x===i.RG&&(H===i.FLOAT&&(ot=i.RG32F),H===i.HALF_FLOAT&&(ot=i.RG16F),H===i.UNSIGNED_BYTE&&(ot=i.RG8)),x===i.RGBA&&(H===i.FLOAT&&(ot=i.RGBA32F),H===i.HALF_FLOAT&&(ot=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ot=Q===Lt&&et===!1?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)),(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function y(T,x,H){return A(T,H)===!0||T.isFramebufferTexture&&T.minFilter!==ge&&T.minFilter!==Pe?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){return T===ge||T===zo||T===Fr?i.NEAREST:i.LINEAR}function z(T){const x=T.target;x.removeEventListener("dispose",z),D(x),x.isVideoTexture&&g.delete(x)}function V(T){const x=T.target;x.removeEventListener("dispose",V),G(x)}function D(T){const x=n.get(T);if(x.__webglInit===void 0)return;const H=T.source,Q=p.get(H);if(Q){const et=Q[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&N(T),Object.keys(Q).length===0&&p.delete(H)}n.remove(T)}function N(T){const x=n.get(T);i.deleteTexture(x.__webglTexture);const H=T.source,Q=p.get(H);delete Q[x.__cacheKey],a.memory.textures--}function G(T){const x=T.texture,H=n.get(T),Q=n.get(x);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)i.deleteFramebuffer(H.__webglFramebuffer[et]),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer[et]);else{if(i.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&i.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&i.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let et=0;et<H.__webglColorRenderbuffer.length;et++)H.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(H.__webglColorRenderbuffer[et]);H.__webglDepthRenderbuffer&&i.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let et=0,ot=x.length;et<ot;et++){const R=n.get(x[et]);R.__webglTexture&&(i.deleteTexture(R.__webglTexture),a.memory.textures--),n.remove(x[et])}n.remove(x),n.remove(T)}let J=0;function Y(){J=0}function q(){const T=J;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),J+=1,T}function Z(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function tt(T,x){const H=n.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.version>0&&H.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{bt(H,T,x);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function pt(T,x){const H=n.get(T);if(T.version>0&&H.__version!==T.version){bt(H,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function lt(T,x){const H=n.get(T);if(T.version>0&&H.__version!==T.version){bt(H,T,x);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function W(T,x){const H=n.get(T);if(T.version>0&&H.__version!==T.version){St(H,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}const K={[Us]:i.REPEAT,[ze]:i.CLAMP_TO_EDGE,[Is]:i.MIRRORED_REPEAT},it={[ge]:i.NEAREST,[zo]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[Pe]:i.LINEAR,[Fp]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR};function at(T,x,H){if(H?(i.texParameteri(T,i.TEXTURE_WRAP_S,K[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,K[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,K[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,it[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,it[x.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(x.wrapS!==ze||x.wrapT!==ze)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,w(x.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==ge&&x.minFilter!==Pe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===ge||x.minFilter!==Fr&&x.minFilter!==Di||x.type===Dn&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===Ui&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(i.texParameterf(T,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function L(T,x){let H=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",z));const Q=x.source;let et=p.get(Q);et===void 0&&(et={},p.set(Q,et));const ot=Z(x);if(ot!==T.__cacheKey){et[ot]===void 0&&(et[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),et[ot].usedTimes++;const R=et[T.__cacheKey];R!==void 0&&(et[T.__cacheKey].usedTimes--,R.usedTimes===0&&N(x)),T.__cacheKey=ot,T.__webglTexture=et[ot].texture}return H}function bt(T,x,H){let Q=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Q=i.TEXTURE_3D);const et=L(T,x),ot=x.source;e.bindTexture(Q,T.__webglTexture,i.TEXTURE0+H);const R=n.get(ot);if(ot.version!==R.__version||et===!0){e.activeTexture(i.TEXTURE0+H),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const X=S(x)&&b(x.image)===!1;let B=v(x.image,X,!1,u);B=Ht(x,B);const ct=b(B)||o,dt=s.convert(x.format,x.colorSpace);let _t=s.convert(x.type),ht=O(x.internalFormat,dt,_t,x.colorSpace);at(Q,x,ct);let gt;const wt=x.mipmaps,Ut=o&&x.isVideoTexture!==!0,Zt=R.__version===void 0||et===!0,C=y(x,B,ct);if(x.isDepthTexture)ht=i.DEPTH_COMPONENT,o?x.type===Dn?ht=i.DEPTH_COMPONENT32F:x.type===Pn?ht=i.DEPTH_COMPONENT24:x.type===li?ht=i.DEPTH24_STENCIL8:ht=i.DEPTH_COMPONENT16:x.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Un&&ht===i.DEPTH_COMPONENT&&x.type!==Cc&&x.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Pn,_t=s.convert(x.type)),x.format===di&&ht===i.DEPTH_COMPONENT&&(ht=i.DEPTH_STENCIL,x.type!==li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=li,_t=s.convert(x.type))),Zt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,ht,B.width,B.height):e.texImage2D(i.TEXTURE_2D,0,ht,B.width,B.height,0,dt,_t,null));else if(x.isDataTexture)if(wt.length>0&&ct){Ut&&Zt&&e.texStorage2D(i.TEXTURE_2D,C,ht,wt[0].width,wt[0].height);for(let k=0,nt=wt.length;k<nt;k++)gt=wt[k],Ut?e.texSubImage2D(i.TEXTURE_2D,k,0,0,gt.width,gt.height,dt,_t,gt.data):e.texImage2D(i.TEXTURE_2D,k,ht,gt.width,gt.height,0,dt,_t,gt.data);x.generateMipmaps=!1}else Ut?(Zt&&e.texStorage2D(i.TEXTURE_2D,C,ht,B.width,B.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,B.width,B.height,dt,_t,B.data)):e.texImage2D(i.TEXTURE_2D,0,ht,B.width,B.height,0,dt,_t,B.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,C,ht,wt[0].width,wt[0].height,B.depth);for(let k=0,nt=wt.length;k<nt;k++)gt=wt[k],x.format!==Ge?dt!==null?Ut?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,gt.width,gt.height,B.depth,dt,gt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,ht,gt.width,gt.height,B.depth,0,gt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?e.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,gt.width,gt.height,B.depth,dt,_t,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,k,ht,gt.width,gt.height,B.depth,0,dt,_t,gt.data)}else{Ut&&Zt&&e.texStorage2D(i.TEXTURE_2D,C,ht,wt[0].width,wt[0].height);for(let k=0,nt=wt.length;k<nt;k++)gt=wt[k],x.format!==Ge?dt!==null?Ut?e.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,gt.width,gt.height,dt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,k,ht,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?e.texSubImage2D(i.TEXTURE_2D,k,0,0,gt.width,gt.height,dt,_t,gt.data):e.texImage2D(i.TEXTURE_2D,k,ht,gt.width,gt.height,0,dt,_t,gt.data)}else if(x.isDataArrayTexture)Ut?(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,C,ht,B.width,B.height,B.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,dt,_t,B.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ht,B.width,B.height,B.depth,0,dt,_t,B.data);else if(x.isData3DTexture)Ut?(Zt&&e.texStorage3D(i.TEXTURE_3D,C,ht,B.width,B.height,B.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,dt,_t,B.data)):e.texImage3D(i.TEXTURE_3D,0,ht,B.width,B.height,B.depth,0,dt,_t,B.data);else if(x.isFramebufferTexture){if(Zt)if(Ut)e.texStorage2D(i.TEXTURE_2D,C,ht,B.width,B.height);else{let k=B.width,nt=B.height;for(let ft=0;ft<C;ft++)e.texImage2D(i.TEXTURE_2D,ft,ht,k,nt,0,dt,_t,null),k>>=1,nt>>=1}}else if(wt.length>0&&ct){Ut&&Zt&&e.texStorage2D(i.TEXTURE_2D,C,ht,wt[0].width,wt[0].height);for(let k=0,nt=wt.length;k<nt;k++)gt=wt[k],Ut?e.texSubImage2D(i.TEXTURE_2D,k,0,0,dt,_t,gt):e.texImage2D(i.TEXTURE_2D,k,ht,dt,_t,gt);x.generateMipmaps=!1}else Ut?(Zt&&e.texStorage2D(i.TEXTURE_2D,C,ht,B.width,B.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,_t,B)):e.texImage2D(i.TEXTURE_2D,0,ht,dt,_t,B);A(x,ct)&&P(Q),R.__version=ot.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function St(T,x,H){if(x.image.length!==6)return;const Q=L(T,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+H);const ot=n.get(et);if(et.version!==ot.__version||Q===!0){e.activeTexture(i.TEXTURE0+H),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const R=x.isCompressedTexture||x.image[0].isCompressedTexture,X=x.image[0]&&x.image[0].isDataTexture,B=[];for(let k=0;k<6;k++)!R&&!X?B[k]=v(x.image[k],!1,!0,l):B[k]=X?x.image[k].image:x.image[k],B[k]=Ht(x,B[k]);const ct=B[0],dt=b(ct)||o,_t=s.convert(x.format,x.colorSpace),ht=s.convert(x.type),gt=O(x.internalFormat,_t,ht,x.colorSpace),wt=o&&x.isVideoTexture!==!0,Ut=ot.__version===void 0||Q===!0;let Zt=y(x,ct,dt);at(i.TEXTURE_CUBE_MAP,x,dt);let C;if(R){wt&&Ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,gt,ct.width,ct.height);for(let k=0;k<6;k++){C=B[k].mipmaps;for(let nt=0;nt<C.length;nt++){const ft=C[nt];x.format!==Ge?_t!==null?wt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,nt,0,0,ft.width,ft.height,_t,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,nt,gt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,nt,0,0,ft.width,ft.height,_t,ht,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,nt,gt,ft.width,ft.height,0,_t,ht,ft.data)}}}else{C=x.mipmaps,wt&&Ut&&(C.length>0&&Zt++,e.texStorage2D(i.TEXTURE_CUBE_MAP,Zt,gt,B[0].width,B[0].height));for(let k=0;k<6;k++)if(X){wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,B[k].width,B[k].height,_t,ht,B[k].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,gt,B[k].width,B[k].height,0,_t,ht,B[k].data);for(let nt=0;nt<C.length;nt++){const vt=C[nt].image[k].image;wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,nt+1,0,0,vt.width,vt.height,_t,ht,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,nt+1,gt,vt.width,vt.height,0,_t,ht,vt.data)}}else{wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,_t,ht,B[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,gt,_t,ht,B[k]);for(let nt=0;nt<C.length;nt++){const ft=C[nt];wt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,nt+1,0,0,_t,ht,ft.image[k]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+k,nt+1,gt,_t,ht,ft.image[k])}}}A(x,dt)&&P(i.TEXTURE_CUBE_MAP),ot.__version=et.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function rt(T,x,H,Q,et){const ot=s.convert(H.format,H.colorSpace),R=s.convert(H.type),X=O(H.internalFormat,ot,R,H.colorSpace);n.get(x).__hasExternalTextures||(et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,0,X,x.width,x.height,x.depth,0,ot,R,null):e.texImage2D(et,0,X,x.width,x.height,0,ot,R,null)),e.bindFramebuffer(i.FRAMEBUFFER,T),ut(x)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,et,n.get(H).__webglTexture,0,qt(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,et,n.get(H).__webglTexture,0),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(T,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let Q=i.DEPTH_COMPONENT16;if(H||ut(x)){const et=x.depthTexture;et&&et.isDepthTexture&&(et.type===Dn?Q=i.DEPTH_COMPONENT32F:et.type===Pn&&(Q=i.DEPTH_COMPONENT24));const ot=qt(x);ut(x)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Q,x.width,x.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Q,x.width,x.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,x.width,x.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const Q=qt(x);H&&ut(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,x.width,x.height):ut(x)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const Q=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let et=0;et<Q.length;et++){const ot=Q[et],R=s.convert(ot.format,ot.colorSpace),X=s.convert(ot.type),B=O(ot.internalFormat,R,X,ot.colorSpace),ct=qt(x);H&&ut(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,B,x.width,x.height):ut(x)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,B,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,B,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Bt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),tt(x.depthTexture,0);const Q=n.get(x.depthTexture).__webglTexture,et=qt(x);if(x.depthTexture.format===Un)ut(x)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===di)ut(x)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function mt(T){const x=n.get(T),H=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Bt(x.__webglFramebuffer,T)}else if(H){x.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Q]),x.__webglDepthbuffer[Q]=i.createRenderbuffer(),xt(x.__webglDepthbuffer[Q],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=i.createRenderbuffer(),xt(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(T,x,H){const Q=n.get(T);x!==void 0&&rt(Q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),H!==void 0&&mt(T)}function $t(T){const x=T.texture,H=n.get(T),Q=n.get(x);T.addEventListener("dispose",V),T.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=x.version,a.memory.textures++);const et=T.isWebGLCubeRenderTarget===!0,ot=T.isWebGLMultipleRenderTargets===!0,R=b(T)||o;if(et){H.__webglFramebuffer=[];for(let X=0;X<6;X++)H.__webglFramebuffer[X]=i.createFramebuffer()}else{if(H.__webglFramebuffer=i.createFramebuffer(),ot)if(r.drawBuffers){const X=T.texture;for(let B=0,ct=X.length;B<ct;B++){const dt=n.get(X[B]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&ut(T)===!1){const X=ot?x:[x];H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let B=0;B<X.length;B++){const ct=X[B];H.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[B]);const dt=s.convert(ct.format,ct.colorSpace),_t=s.convert(ct.type),ht=O(ct.internalFormat,dt,_t,ct.colorSpace,T.isXRRenderTarget===!0),gt=qt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,ht,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,H.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(H.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(et){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),at(i.TEXTURE_CUBE_MAP,x,R);for(let X=0;X<6;X++)rt(H.__webglFramebuffer[X],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X);A(x,R)&&P(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){const X=T.texture;for(let B=0,ct=X.length;B<ct;B++){const dt=X[B],_t=n.get(dt);e.bindTexture(i.TEXTURE_2D,_t.__webglTexture),at(i.TEXTURE_2D,dt,R),rt(H.__webglFramebuffer,T,dt,i.COLOR_ATTACHMENT0+B,i.TEXTURE_2D),A(dt,R)&&P(i.TEXTURE_2D)}e.unbindTexture()}else{let X=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?X=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(X,Q.__webglTexture),at(X,x,R),rt(H.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,X),A(x,R)&&P(X),e.unbindTexture()}T.depthBuffer&&mt(T)}function Xt(T){const x=b(T)||o,H=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0,et=H.length;Q<et;Q++){const ot=H[Q];if(A(ot,x)){const R=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,X=n.get(ot).__webglTexture;e.bindTexture(R,X),P(R),e.unbindTexture()}}}function Yt(T){if(o&&T.samples>0&&ut(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],H=T.width,Q=T.height;let et=i.COLOR_BUFFER_BIT;const ot=[],R=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=n.get(T),B=T.isWebGLMultipleRenderTargets===!0;if(B)for(let ct=0;ct<x.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,X.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglFramebuffer);for(let ct=0;ct<x.length;ct++){ot.push(i.COLOR_ATTACHMENT0+ct),T.depthBuffer&&ot.push(R);const dt=X.__ignoreDepthValues!==void 0?X.__ignoreDepthValues:!1;if(dt===!1&&(T.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),B&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,X.__webglColorRenderbuffer[ct]),dt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[R]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])),B){const _t=n.get(x[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_t,0)}i.blitFramebuffer(0,0,H,Q,0,0,H,Q,et,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ot)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let ct=0;ct<x.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,X.__webglColorRenderbuffer[ct]);const dt=n.get(x[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,X.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,X.__webglMultisampledFramebuffer)}}function qt(T){return Math.min(f,T.samples)}function ut(T){const x=n.get(T);return o&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Tt(T){const x=a.render.frame;g.get(T)!==x&&(g.set(T,x),T.update())}function Ht(T,x){const H=T.colorSpace,Q=T.format,et=T.type;return T.isCompressedTexture===!0||T.format===Os||H!==$e&&H!==On&&(H===Lt?o===!1?t.has("EXT_sRGB")===!0&&Q===Ge?(T.format=Os,T.minFilter=Pe,T.generateMipmaps=!1):x=Ic.sRGBToLinear(x):(Q!==Ge||et!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=tt,this.setTexture2DArray=pt,this.setTexture3D=lt,this.setTextureCube=W,this.rebindTextures=Rt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=ut}function Z0(i,t,e){const n=e.isWebGL2;function r(s,a=On){let o;if(s===Fn)return i.UNSIGNED_BYTE;if(s===Gp)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Hp)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Np)return i.BYTE;if(s===Bp)return i.SHORT;if(s===Cc)return i.UNSIGNED_SHORT;if(s===zp)return i.INT;if(s===Pn)return i.UNSIGNED_INT;if(s===Dn)return i.FLOAT;if(s===Ui)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Vp)return i.ALPHA;if(s===Ge)return i.RGBA;if(s===Wp)return i.LUMINANCE;if(s===kp)return i.LUMINANCE_ALPHA;if(s===Un)return i.DEPTH_COMPONENT;if(s===di)return i.DEPTH_STENCIL;if(s===Os)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===jp)return i.RED;if(s===Xp)return i.RED_INTEGER;if(s===$p)return i.RG;if(s===qp)return i.RG_INTEGER;if(s===Yp)return i.RGBA_INTEGER;if(s===Nr||s===Br||s===zr||s===Gr)if(a===Lt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Nr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Nr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Br)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Go||s===Ho||s===Vo||s===Wo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Go)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ho)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kp)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ko||s===jo)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ko)return a===Lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===jo)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xo||s===$o||s===qo||s===Yo||s===Ko||s===Zo||s===Jo||s===Qo||s===ta||s===ea||s===na||s===ia||s===ra||s===sa)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Xo)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$o)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===qo)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yo)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ko)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zo)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jo)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qo)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ta)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ea)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===na)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ia)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ra)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sa)return a===Lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Hr)return a===Lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Zp||s===oa||s===aa||s===ca)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Hr)return o.COMPRESSED_RED_RGTC1_EXT;if(s===oa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===aa)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ca)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===li?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class J0 extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class cr extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q0={type:"move"};class hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),h=this._getHandJoint(l,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new cr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class ty extends Me{constructor(t,e,n,r,s,a,o,c,l,u){if(u=u!==void 0?u:Un,u!==Un&&u!==di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Un&&(n=Pn),n===void 0&&u===di&&(n=li),super(null,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ge,this.minFilter=c!==void 0?c:ge,this.flipY=!1,this.generateMipmaps=!1}}class ey extends Mn{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,m=null,g=null;const _=e.getContextAttributes();let p=null,h=null;const M=[],v=[],b=new Set,S=new Map,A=new De;A.layers.enable(1),A.viewport=new ae;const P=new De;P.layers.enable(2),P.viewport=new ae;const O=[A,P],y=new J0;y.layers.enable(1),y.layers.enable(2);let w=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=M[W];return K===void 0&&(K=new hs,M[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=M[W];return K===void 0&&(K=new hs,M[W]=K),K.getGripSpace()},this.getHand=function(W){let K=M[W];return K===void 0&&(K=new hs,M[W]=K),K.getHandSpace()};function V(W){const K=v.indexOf(W.inputSource);if(K===-1)return;const it=M[K];it!==void 0&&(it.update(W.inputSource,W.frame,l||a),it.dispatchEvent({type:W.type,data:W.inputSource}))}function D(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",N);for(let W=0;W<M.length;W++){const K=v[W];K!==null&&(v[W]=null,M[W].disconnect(K))}w=null,z=null,t.setRenderTarget(p),m=null,d=null,f=null,r=null,h=null,lt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",D),r.addEventListener("inputsourceschange",N),_.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,K),r.updateRenderState({baseLayer:m}),h=new Nn(m.framebufferWidth,m.framebufferHeight,{format:Ge,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,it=null,at=null;_.depth&&(at=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=_.stencil?di:Un,it=_.stencil?li:Pn);const L={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};f=new XRWebGLBinding(r,e),d=f.createProjectionLayer(L),r.updateRenderState({layers:[d]}),h=new Nn(d.textureWidth,d.textureHeight,{format:Ge,type:Fn,depthTexture:new ty(d.textureWidth,d.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const bt=t.properties.get(h);bt.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),lt.setContext(r),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(W){for(let K=0;K<W.removed.length;K++){const it=W.removed[K],at=v.indexOf(it);at>=0&&(v[at]=null,M[at].disconnect(it))}for(let K=0;K<W.added.length;K++){const it=W.added[K];let at=v.indexOf(it);if(at===-1){for(let bt=0;bt<M.length;bt++)if(bt>=v.length){v.push(it),at=bt;break}else if(v[bt]===null){v[bt]=it,at=bt;break}if(at===-1)break}const L=M[at];L&&L.connect(it)}}const G=new U,J=new U;function Y(W,K,it){G.setFromMatrixPosition(K.matrixWorld),J.setFromMatrixPosition(it.matrixWorld);const at=G.distanceTo(J),L=K.projectionMatrix.elements,bt=it.projectionMatrix.elements,St=L[14]/(L[10]-1),rt=L[14]/(L[10]+1),xt=(L[9]+1)/L[5],Bt=(L[9]-1)/L[5],mt=(L[8]-1)/L[0],Rt=(bt[8]+1)/bt[0],$t=St*mt,Xt=St*Rt,Yt=at/(-mt+Rt),qt=Yt*-mt;K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(qt),W.translateZ(Yt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const ut=St+Yt,Tt=rt+Yt,Ht=$t-qt,T=Xt+(at-qt),x=xt*rt/Tt*ut,H=Bt*rt/Tt*ut;W.projectionMatrix.makePerspective(Ht,T,x,H,ut,Tt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function q(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;y.near=P.near=A.near=W.near,y.far=P.far=A.far=W.far,(w!==y.near||z!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,z=y.far);const K=W.parent,it=y.cameras;q(y,K);for(let at=0;at<it.length;at++)q(it[at],K);it.length===2?Y(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),Z(W,y,K)};function Z(W,K,it){it===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(it.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0);const at=W.children;for(let L=0,bt=at.length;L<bt;L++)at[L].updateMatrixWorld(!0);W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Fs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(W){c=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.getPlanes=function(){return b};let tt=null;function pt(W,K){if(u=K.getViewerPose(l||a),g=K,u!==null){const it=u.views;m!==null&&(t.setRenderTargetFramebuffer(h,m.framebuffer),t.setRenderTarget(h));let at=!1;it.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let L=0;L<it.length;L++){const bt=it[L];let St=null;if(m!==null)St=m.getViewport(bt);else{const xt=f.getViewSubImage(d,bt);St=xt.viewport,L===0&&(t.setRenderTargetTextures(h,xt.colorTexture,d.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(h))}let rt=O[L];rt===void 0&&(rt=new De,rt.layers.enable(L),rt.viewport=new ae,O[L]=rt),rt.matrix.fromArray(bt.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(bt.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(St.x,St.y,St.width,St.height),L===0&&(y.matrix.copy(rt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(rt)}}for(let it=0;it<M.length;it++){const at=v[it],L=M[it];at!==null&&L!==void 0&&L.update(at,K,l||a)}if(tt&&tt(W,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let it=null;for(const at of b)K.detectedPlanes.has(at)||(it===null&&(it=[]),it.push(at));if(it!==null)for(const at of it)b.delete(at),S.delete(at),n.dispatchEvent({type:"planeremoved",data:at});for(const at of K.detectedPlanes)if(!b.has(at))b.add(at),S.set(at,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:at});else{const L=S.get(at);at.lastChangedTime>L&&(S.set(at,at.lastChangedTime),n.dispatchEvent({type:"planechanged",data:at}))}}g=null}const lt=new Wc;lt.setAnimationLoop(pt),this.setAnimationLoop=function(W){tt=W},this.dispose=function(){}}}function ny(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,Gc(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,M,v,b){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),f(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),d(p,h),h.isMeshPhysicalMaterial&&m(p,h,b)):h.isMeshMatcapMaterial?(s(p,h),g(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),_(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,M,v):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===xe&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===xe&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const M=t.get(h).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap){p.lightMap.value=h.lightMap;const v=i.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=h.lightMapIntensity*v,e(h.lightMap,p.lightMapTransform)}h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,M,v){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*M,p.scale.value=v*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function f(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),t.get(h).envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,M){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xe&&p.clearcoatNormalScale.value.negate())),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const M=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function iy(i,t,e,n){let r={},s={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,v){const b=v.program;n.uniformBlockBinding(M,b)}function l(M,v){let b=r[M.id];b===void 0&&(g(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",p));const S=v.program;n.updateUBOMapping(M,S);const A=t.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function u(M){const v=f();M.__bindingPointIndex=v;const b=i.createBuffer(),S=M.__size,A=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=r[M.id],b=M.uniforms,S=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,P=b.length;A<P;A++){const O=b[A];if(m(O,A,S)===!0){const y=O.__offset,w=Array.isArray(O.value)?O.value:[O.value];let z=0;for(let V=0;V<w.length;V++){const D=w[V],N=_(D);typeof D=="number"?(O.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,y+z,O.__data)):D.isMatrix3?(O.__data[0]=D.elements[0],O.__data[1]=D.elements[1],O.__data[2]=D.elements[2],O.__data[3]=D.elements[0],O.__data[4]=D.elements[3],O.__data[5]=D.elements[4],O.__data[6]=D.elements[5],O.__data[7]=D.elements[0],O.__data[8]=D.elements[6],O.__data[9]=D.elements[7],O.__data[10]=D.elements[8],O.__data[11]=D.elements[0]):(D.toArray(O.__data,z),z+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,y,O.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,v,b){const S=M.value;if(b[v]===void 0){if(typeof S=="number")b[v]=S;else{const A=Array.isArray(S)?S:[S],P=[];for(let O=0;O<A.length;O++)P.push(A[O].clone());b[v]=P}return!0}else if(typeof S=="number"){if(b[v]!==S)return b[v]=S,!0}else{const A=Array.isArray(b[v])?b[v]:[b[v]],P=Array.isArray(S)?S:[S];for(let O=0;O<A.length;O++){const y=A[O];if(y.equals(P[O])===!1)return y.copy(P[O]),!0}}return!1}function g(M){const v=M.uniforms;let b=0;const S=16;let A=0;for(let P=0,O=v.length;P<O;P++){const y=v[P],w={boundary:0,storage:0},z=Array.isArray(y.value)?y.value:[y.value];for(let V=0,D=z.length;V<D;V++){const N=z[V],G=_(N);w.boundary+=G.boundary,w.storage+=G.storage}if(y.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=b,P>0){A=b%S;const V=S-A;A!==0&&V-w.boundary<0&&(b+=S-A,y.__offset=b)}b+=w.storage}return A=b%S,A>0&&(b+=S-A),M.__size=b,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}function ry(){const i=yr("canvas");return i.style.display="block",i}class Yc{constructor(t={}){const{canvas:e=ry(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;let m=null,g=null;const _=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Lt,this.useLegacyLights=!0,this.toneMapping=sn,this.toneMappingExposure=1;const h=this;let M=!1,v=0,b=0,S=null,A=-1,P=null;const O=new ae,y=new ae;let w=null,z=e.width,V=e.height,D=1,N=null,G=null;const J=new ae(0,0,z,V),Y=new ae(0,0,z,V);let q=!1;const Z=new Zs;let tt=!1,pt=!1,lt=null;const W=new Qt,K=new U,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function at(){return S===null?D:1}let L=n;function bt(E,F){for(let j=0;j<E.length;j++){const I=E[j],$=e.getContext(I,F);if($!==null)return $}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$s}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",wt,!1),e.addEventListener("webglcontextcreationerror",Ut,!1),L===null){const F=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&F.shift(),L=bt(F,E),L===null)throw bt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let St,rt,xt,Bt,mt,Rt,$t,Xt,Yt,qt,ut,Tt,Ht,T,x,H,Q,et,ot,R,X,B,ct,dt;function _t(){St=new mv(L),rt=new lv(L,St,t),St.init(rt),B=new Z0(L,St,rt),xt=new Y0(L,St,rt),Bt=new vv(L),mt=new O0,Rt=new K0(L,St,xt,mt,rt,B,Bt),$t=new hv(h),Xt=new pv(h),Yt=new Lm(L,rt),ct=new av(L,St,Yt,rt),qt=new gv(L,Yt,Bt,ct),ut=new Sv(L,qt,Yt,Bt),ot=new Mv(L,rt,Rt),H=new uv(mt),Tt=new I0(h,$t,Xt,St,rt,ct,H),Ht=new ny(h,mt),T=new N0,x=new W0(St,rt),et=new ov(h,$t,Xt,xt,ut,d,c),Q=new q0(h,ut,rt),dt=new iy(L,Bt,rt,xt),R=new cv(L,St,Bt,rt),X=new _v(L,St,Bt,rt),Bt.programs=Tt.programs,h.capabilities=rt,h.extensions=St,h.properties=mt,h.renderLists=T,h.shadowMap=Q,h.state=xt,h.info=Bt}_t();const ht=new ey(h,L);this.xr=ht,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=St.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=St.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(z,V,!1))},this.getSize=function(E){return E.set(z,V)},this.setSize=function(E,F,j=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,V=F,e.width=Math.floor(E*D),e.height=Math.floor(F*D),j===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(z*D,V*D).floor()},this.setDrawingBufferSize=function(E,F,j){z=E,V=F,D=j,e.width=Math.floor(E*j),e.height=Math.floor(F*j),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(O)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,F,j,I){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,F,j,I),xt.viewport(O.copy(J).multiplyScalar(D).floor())},this.getScissor=function(E){return E.copy(Y)},this.setScissor=function(E,F,j,I){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,F,j,I),xt.scissor(y.copy(Y).multiplyScalar(D).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(E){xt.setScissorTest(q=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){G=E},this.getClearColor=function(E){return E.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(E=!0,F=!0,j=!0){let I=0;E&&(I|=L.COLOR_BUFFER_BIT),F&&(I|=L.DEPTH_BUFFER_BIT),j&&(I|=L.STENCIL_BUFFER_BIT),L.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",wt,!1),e.removeEventListener("webglcontextcreationerror",Ut,!1),T.dispose(),x.dispose(),mt.dispose(),$t.dispose(),Xt.dispose(),ut.dispose(),ct.dispose(),dt.dispose(),Tt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",vt),ht.removeEventListener("sessionend",Wt),lt&&(lt.dispose(),lt=null),kt.stop()};function gt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function wt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const E=Bt.autoReset,F=Q.enabled,j=Q.autoUpdate,I=Q.needsUpdate,$=Q.type;_t(),Bt.autoReset=E,Q.enabled=F,Q.autoUpdate=j,Q.needsUpdate=I,Q.type=$}function Ut(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Zt(E){const F=E.target;F.removeEventListener("dispose",Zt),C(F)}function C(E){k(E),mt.remove(E)}function k(E){const F=mt.get(E).programs;F!==void 0&&(F.forEach(function(j){Tt.releaseProgram(j)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,j,I,$,Mt){F===null&&(F=it);const Et=$.isMesh&&$.matrixWorld.determinant()<0,At=_l(E,F,j,I,$);xt.setMaterial(I,Et);let Pt=j.index,It=1;I.wireframe===!0&&(Pt=qt.getWireframeAttribute(j),It=2);const Ot=j.drawRange,Ft=j.attributes.position;let Vt=Ot.start*It,de=(Ot.start+Ot.count)*It;Mt!==null&&(Vt=Math.max(Vt,Mt.start*It),de=Math.min(de,(Mt.start+Mt.count)*It)),Pt!==null?(Vt=Math.max(Vt,0),de=Math.min(de,Pt.count)):Ft!=null&&(Vt=Math.max(Vt,0),de=Math.min(de,Ft.count));const Ue=de-Vt;if(Ue<0||Ue===1/0)return;ct.setup($,I,At,j,Pt);let Sn,te=R;if(Pt!==null&&(Sn=Yt.get(Pt),te=X,te.setIndex(Sn)),$.isMesh)I.wireframe===!0?(xt.setLineWidth(I.wireframeLinewidth*at()),te.setMode(L.LINES)):te.setMode(L.TRIANGLES);else if($.isLine){let zt=I.linewidth;zt===void 0&&(zt=1),xt.setLineWidth(zt*at()),$.isLineSegments?te.setMode(L.LINES):$.isLineLoop?te.setMode(L.LINE_LOOP):te.setMode(L.LINE_STRIP)}else $.isPoints?te.setMode(L.POINTS):$.isSprite&&te.setMode(L.TRIANGLES);if($.isInstancedMesh)te.renderInstances(Vt,Ue,$.count);else if(j.isInstancedBufferGeometry){const zt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Rr=Math.min(j.instanceCount,zt);te.renderInstances(Vt,Ue,Rr)}else te.render(Vt,Ue)},this.compile=function(E,F){function j(I,$,Mt){I.transparent===!0&&I.side===rn&&I.forceSinglePass===!1?(I.side=xe,I.needsUpdate=!0,Bi(I,$,Mt),I.side=yn,I.needsUpdate=!0,Bi(I,$,Mt),I.side=rn):Bi(I,$,Mt)}g=x.get(E),g.init(),p.push(g),E.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(g.pushLight(I),I.castShadow&&g.pushShadow(I))}),g.setupLights(h.useLegacyLights),E.traverse(function(I){const $=I.material;if($)if(Array.isArray($))for(let Mt=0;Mt<$.length;Mt++){const Et=$[Mt];j(Et,E,I)}else j($,E,I)}),p.pop(),g=null};let nt=null;function ft(E){nt&&nt(E)}function vt(){kt.stop()}function Wt(){kt.start()}const kt=new Wc;kt.setAnimationLoop(ft),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(E){nt=E,ht.setAnimationLoop(E),E===null?kt.stop():kt.start()},ht.addEventListener("sessionstart",vt),ht.addEventListener("sessionend",Wt),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(F),F=ht.getCamera()),E.isScene===!0&&E.onBeforeRender(h,E,F,S),g=x.get(E,p.length),g.init(),p.push(g),W.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Z.setFromProjectionMatrix(W),pt=this.localClippingEnabled,tt=H.init(this.clippingPlanes,pt),m=T.get(E,_.length),m.init(),_.push(m),ue(E,F,0,h.sortObjects),m.finish(),h.sortObjects===!0&&m.sort(N,G),tt===!0&&H.beginShadows();const j=g.state.shadowsArray;if(Q.render(j,E,F),tt===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(m,E),g.setupLights(h.useLegacyLights),F.isArrayCamera){const I=F.cameras;for(let $=0,Mt=I.length;$<Mt;$++){const Et=I[$];cn(m,E,Et,Et.viewport)}}else cn(m,E,F);S!==null&&(Rt.updateMultisampleRenderTarget(S),Rt.updateRenderTargetMipmap(S)),E.isScene===!0&&E.onAfterRender(h,E,F),ct.resetDefaultState(),A=-1,P=null,p.pop(),p.length>0?g=p[p.length-1]:g=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function ue(E,F,j,I){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Z.intersectsSprite(E)){I&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(W);const Et=ut.update(E),At=E.material;At.visible&&m.push(E,Et,At,j,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Z.intersectsObject(E))){E.isSkinnedMesh&&E.skeleton.frame!==Bt.render.frame&&(E.skeleton.update(),E.skeleton.frame=Bt.render.frame);const Et=ut.update(E),At=E.material;if(I&&(Et.boundingSphere===null&&Et.computeBoundingSphere(),K.copy(Et.boundingSphere.center).applyMatrix4(E.matrixWorld).applyMatrix4(W)),Array.isArray(At)){const Pt=Et.groups;for(let It=0,Ot=Pt.length;It<Ot;It++){const Ft=Pt[It],Vt=At[Ft.materialIndex];Vt&&Vt.visible&&m.push(E,Et,Vt,j,K.z,Ft)}}else At.visible&&m.push(E,Et,At,j,K.z,null)}}const Mt=E.children;for(let Et=0,At=Mt.length;Et<At;Et++)ue(Mt[Et],F,j,I)}function cn(E,F,j,I){const $=E.opaque,Mt=E.transmissive,Et=E.transparent;g.setupLightsView(j),tt===!0&&H.setGlobalState(h.clippingPlanes,j),Mt.length>0&&Jt($,Mt,F,j),I&&xt.viewport(O.copy(I)),$.length>0&&Re($,F,j),Mt.length>0&&Re(Mt,F,j),Et.length>0&&Re(Et,F,j),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function Jt(E,F,j,I){if(lt===null){const At=rt.isWebGL2;lt=new Nn(1024,1024,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?Ui:Fn,minFilter:Di,samples:At&&o===!0?4:0})}const $=h.getRenderTarget();h.setRenderTarget(lt),h.clear();const Mt=h.toneMapping;h.toneMapping=sn,Re(E,j,I),Rt.updateMultisampleRenderTarget(lt),Rt.updateRenderTargetMipmap(lt);let Et=!1;for(let At=0,Pt=F.length;At<Pt;At++){const It=F[At],Ot=It.object,Ft=It.geometry,Vt=It.material,de=It.group;if(Vt.side===rn&&Ot.layers.test(I.layers)){const Ue=Vt.side;Vt.side=xe,Vt.needsUpdate=!0,Ve(Ot,j,I,Ft,Vt,de),Vt.side=Ue,Vt.needsUpdate=!0,Et=!0}}Et===!0&&(Rt.updateMultisampleRenderTarget(lt),Rt.updateRenderTargetMipmap(lt)),h.setRenderTarget($),h.toneMapping=Mt}function Re(E,F,j){const I=F.isScene===!0?F.overrideMaterial:null;for(let $=0,Mt=E.length;$<Mt;$++){const Et=E[$],At=Et.object,Pt=Et.geometry,It=I===null?Et.material:I,Ot=Et.group;At.layers.test(j.layers)&&Ve(At,F,j,Pt,It,Ot)}}function Ve(E,F,j,I,$,Mt){E.onBeforeRender(h,F,j,I,$,Mt),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),$.onBeforeRender(h,F,j,I,E,Mt),$.transparent===!0&&$.side===rn&&$.forceSinglePass===!1?($.side=xe,$.needsUpdate=!0,h.renderBufferDirect(j,F,I,$,E,Mt),$.side=yn,$.needsUpdate=!0,h.renderBufferDirect(j,F,I,$,E,Mt),$.side=rn):h.renderBufferDirect(j,F,I,$,E,Mt),E.onAfterRender(h,F,j,I,$,Mt)}function Bi(E,F,j){F.isScene!==!0&&(F=it);const I=mt.get(E),$=g.state.lights,Mt=g.state.shadowsArray,Et=$.state.version,At=Tt.getParameters(E,$.state,Mt,F,j),Pt=Tt.getProgramCacheKey(At);let It=I.programs;I.environment=E.isMeshStandardMaterial?F.environment:null,I.fog=F.fog,I.envMap=(E.isMeshStandardMaterial?Xt:$t).get(E.envMap||I.environment),It===void 0&&(E.addEventListener("dispose",Zt),It=new Map,I.programs=It);let Ot=It.get(Pt);if(Ot!==void 0){if(I.currentProgram===Ot&&I.lightsStateVersion===Et)return lo(E,At),Ot}else At.uniforms=Tt.getUniforms(E),E.onBuild(j,At,h),E.onBeforeCompile(At,h),Ot=Tt.acquireProgram(At,Pt),It.set(Pt,Ot),I.uniforms=At.uniforms;const Ft=I.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ft.clippingPlanes=H.uniform),lo(E,At),I.needsLights=yl(E),I.lightsStateVersion=Et,I.needsLights&&(Ft.ambientLightColor.value=$.state.ambient,Ft.lightProbe.value=$.state.probe,Ft.directionalLights.value=$.state.directional,Ft.directionalLightShadows.value=$.state.directionalShadow,Ft.spotLights.value=$.state.spot,Ft.spotLightShadows.value=$.state.spotShadow,Ft.rectAreaLights.value=$.state.rectArea,Ft.ltc_1.value=$.state.rectAreaLTC1,Ft.ltc_2.value=$.state.rectAreaLTC2,Ft.pointLights.value=$.state.point,Ft.pointLightShadows.value=$.state.pointShadow,Ft.hemisphereLights.value=$.state.hemi,Ft.directionalShadowMap.value=$.state.directionalShadowMap,Ft.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ft.spotShadowMap.value=$.state.spotShadowMap,Ft.spotLightMatrix.value=$.state.spotLightMatrix,Ft.spotLightMap.value=$.state.spotLightMap,Ft.pointShadowMap.value=$.state.pointShadowMap,Ft.pointShadowMatrix.value=$.state.pointShadowMatrix);const Vt=Ot.getUniforms(),de=hr.seqWithValue(Vt.seq,Ft);return I.currentProgram=Ot,I.uniformsList=de,Ot}function lo(E,F){const j=mt.get(E);j.outputColorSpace=F.outputColorSpace,j.instancing=F.instancing,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function _l(E,F,j,I,$){F.isScene!==!0&&(F=it),Rt.resetTextureUnits();const Mt=F.fog,Et=I.isMeshStandardMaterial?F.environment:null,At=S===null?h.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:$e,Pt=(I.isMeshStandardMaterial?Xt:$t).get(I.envMap||Et),It=I.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ot=!!I.normalMap&&!!j.attributes.tangent,Ft=!!j.morphAttributes.position,Vt=!!j.morphAttributes.normal,de=!!j.morphAttributes.color,Ue=I.toneMapped?h.toneMapping:sn,Sn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,te=Sn!==void 0?Sn.length:0,zt=mt.get(I),Rr=g.state.lights;if(tt===!0&&(pt===!0||E!==P)){const Ee=E===P&&I.id===A;H.setState(I,E,Ee)}let se=!1;I.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==Rr.state.version||zt.outputColorSpace!==At||$.isInstancedMesh&&zt.instancing===!1||!$.isInstancedMesh&&zt.instancing===!0||$.isSkinnedMesh&&zt.skinning===!1||!$.isSkinnedMesh&&zt.skinning===!0||zt.envMap!==Pt||I.fog===!0&&zt.fog!==Mt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==H.numPlanes||zt.numIntersection!==H.numIntersection)||zt.vertexAlphas!==It||zt.vertexTangents!==Ot||zt.morphTargets!==Ft||zt.morphNormals!==Vt||zt.morphColors!==de||zt.toneMapping!==Ue||rt.isWebGL2===!0&&zt.morphTargetsCount!==te)&&(se=!0):(se=!0,zt.__version=I.version);let En=zt.currentProgram;se===!0&&(En=Bi(I,F,$));let uo=!1,xi=!1,Cr=!1;const pe=En.getUniforms(),bn=zt.uniforms;if(xt.useProgram(En.program)&&(uo=!0,xi=!0,Cr=!0),I.id!==A&&(A=I.id,xi=!0),uo||P!==E){if(pe.setValue(L,"projectionMatrix",E.projectionMatrix),rt.logarithmicDepthBuffer&&pe.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),P!==E&&(P=E,xi=!0,Cr=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Ee=pe.map.cameraPosition;Ee!==void 0&&Ee.setValue(L,K.setFromMatrixPosition(E.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&pe.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||$.isSkinnedMesh)&&pe.setValue(L,"viewMatrix",E.matrixWorldInverse)}if($.isSkinnedMesh){pe.setOptional(L,$,"bindMatrix"),pe.setOptional(L,$,"bindMatrixInverse");const Ee=$.skeleton;Ee&&(rt.floatVertexTextures?(Ee.boneTexture===null&&Ee.computeBoneTexture(),pe.setValue(L,"boneTexture",Ee.boneTexture,Rt),pe.setValue(L,"boneTextureSize",Ee.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Lr=j.morphAttributes;if((Lr.position!==void 0||Lr.normal!==void 0||Lr.color!==void 0&&rt.isWebGL2===!0)&&ot.update($,j,En),(xi||zt.receiveShadow!==$.receiveShadow)&&(zt.receiveShadow=$.receiveShadow,pe.setValue(L,"receiveShadow",$.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(bn.envMap.value=Pt,bn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),xi&&(pe.setValue(L,"toneMappingExposure",h.toneMappingExposure),zt.needsLights&&vl(bn,Cr),Mt&&I.fog===!0&&Ht.refreshFogUniforms(bn,Mt),Ht.refreshMaterialUniforms(bn,I,D,V,lt),hr.upload(L,zt.uniformsList,bn,Rt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(hr.upload(L,zt.uniformsList,bn,Rt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&pe.setValue(L,"center",$.center),pe.setValue(L,"modelViewMatrix",$.modelViewMatrix),pe.setValue(L,"normalMatrix",$.normalMatrix),pe.setValue(L,"modelMatrix",$.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Ee=I.uniformsGroups;for(let Pr=0,xl=Ee.length;Pr<xl;Pr++)if(rt.isWebGL2){const ho=Ee[Pr];dt.update(ho,En),dt.bind(ho,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function vl(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function yl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(E,F,j){mt.get(E.texture).__webglTexture=F,mt.get(E.depthTexture).__webglTexture=j;const I=mt.get(E);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=j===void 0,I.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,F){const j=mt.get(E);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,j=0){S=E,v=F,b=j;let I=!0,$=null,Mt=!1,Et=!1;if(E){const Pt=mt.get(E);Pt.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(L.FRAMEBUFFER,null),I=!1):Pt.__webglFramebuffer===void 0?Rt.setupRenderTarget(E):Pt.__hasExternalTextures&&Rt.rebindTextures(E,mt.get(E.texture).__webglTexture,mt.get(E.depthTexture).__webglTexture);const It=E.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);const Ot=mt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?($=Ot[F],Mt=!0):rt.isWebGL2&&E.samples>0&&Rt.useMultisampledRTT(E)===!1?$=mt.get(E).__webglMultisampledFramebuffer:$=Ot,O.copy(E.viewport),y.copy(E.scissor),w=E.scissorTest}else O.copy(J).multiplyScalar(D).floor(),y.copy(Y).multiplyScalar(D).floor(),w=q;if(xt.bindFramebuffer(L.FRAMEBUFFER,$)&&rt.drawBuffers&&I&&xt.drawBuffers(E,$),xt.viewport(O),xt.scissor(y),xt.setScissorTest(w),Mt){const Pt=mt.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,Pt.__webglTexture,j)}else if(Et){const Pt=mt.get(E.texture),It=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pt.__webglTexture,j||0,It)}A=-1},this.readRenderTargetPixels=function(E,F,j,I,$,Mt,Et){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=mt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){xt.bindFramebuffer(L.FRAMEBUFFER,At);try{const Pt=E.texture,It=Pt.format,Ot=Pt.type;if(It!==Ge&&B.convert(It)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=Ot===Ui&&(St.has("EXT_color_buffer_half_float")||rt.isWebGL2&&St.has("EXT_color_buffer_float"));if(Ot!==Fn&&B.convert(Ot)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===Dn&&(rt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-I&&j>=0&&j<=E.height-$&&L.readPixels(F,j,I,$,B.convert(It),B.convert(Ot),Mt)}finally{const Pt=S!==null?mt.get(S).__webglFramebuffer:null;xt.bindFramebuffer(L.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(E,F,j=0){const I=Math.pow(2,-j),$=Math.floor(F.image.width*I),Mt=Math.floor(F.image.height*I);Rt.setTexture2D(F,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,E.x,E.y,$,Mt),xt.unbindTexture()},this.copyTextureToTexture=function(E,F,j,I=0){const $=F.image.width,Mt=F.image.height,Et=B.convert(j.format),At=B.convert(j.type);Rt.setTexture2D(j,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,j.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,j.unpackAlignment),F.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,I,E.x,E.y,$,Mt,Et,At,F.image.data):F.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,I,E.x,E.y,F.mipmaps[0].width,F.mipmaps[0].height,Et,F.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,I,E.x,E.y,Et,At,F.image),I===0&&j.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),xt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,j,I,$=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Mt=E.max.x-E.min.x+1,Et=E.max.y-E.min.y+1,At=E.max.z-E.min.z+1,Pt=B.convert(I.format),It=B.convert(I.type);let Ot;if(I.isData3DTexture)Rt.setTexture3D(I,0),Ot=L.TEXTURE_3D;else if(I.isDataArrayTexture)Rt.setTexture2DArray(I,0),Ot=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Ft=L.getParameter(L.UNPACK_ROW_LENGTH),Vt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),de=L.getParameter(L.UNPACK_SKIP_PIXELS),Ue=L.getParameter(L.UNPACK_SKIP_ROWS),Sn=L.getParameter(L.UNPACK_SKIP_IMAGES),te=j.isCompressedTexture?j.mipmaps[0]:j.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,te.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,te.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,E.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,E.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,E.min.z),j.isDataTexture||j.isData3DTexture?L.texSubImage3D(Ot,$,F.x,F.y,F.z,Mt,Et,At,Pt,It,te.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(Ot,$,F.x,F.y,F.z,Mt,Et,At,Pt,te.data)):L.texSubImage3D(Ot,$,F.x,F.y,F.z,Mt,Et,At,Pt,It,te),L.pixelStorei(L.UNPACK_ROW_LENGTH,Ft),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,de),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Sn),$===0&&I.generateMipmaps&&L.generateMipmap(Ot),xt.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Rt.setTextureCube(E,0):E.isData3DTexture?Rt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Rt.setTexture2DArray(E,0):Rt.setTexture2D(E,0),xt.unbindTexture()},this.resetState=function(){v=0,b=0,S=null,xt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Lt?In:Lc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===In?Lt:$e}}class sy extends Yc{}sy.prototype.isWebGL1Renderer=!0;class oy extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Kc extends _i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ya=new U,Ka=new U,Za=new Qt,fs=new qs,lr=new br;class ay extends ce{constructor(t=new He,e=new Kc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ya.fromBufferAttribute(e,r-1),Ka.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ya.distanceTo(Ka);t.setAttribute("lineDistance",new Se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(r),lr.radius+=s,t.ray.intersectsSphere(lr)===!1)return;Za.copy(r).invert(),fs.copy(t.ray).applyMatrix4(Za);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new U,u=new U,f=new U,d=new U,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const h=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let v=h,b=M-1;v<b;v+=m){const S=g.getX(v),A=g.getX(v+1);if(l.fromBufferAttribute(p,S),u.fromBufferAttribute(p,A),fs.distanceSqToSegment(l,u,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(d);O<t.near||O>t.far||e.push({distance:O,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,a.start),M=Math.min(p.count,a.start+a.count);for(let v=h,b=M-1;v<b;v+=m){if(l.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),fs.distanceSqToSegment(l,u,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(d);A<t.near||A>t.far||e.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}class cy extends Me{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qs extends He{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],l=new U,u=new Ct;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const m=n+f/e*r;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let f=1;f<=e;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Se(a,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class to extends He{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],m=[];let g=0;const _=[],p=n/2;let h=0;M(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(d,3)),this.setAttribute("uv",new Se(m,2));function M(){const b=new U,S=new U;let A=0;const P=(e-t)/n;for(let O=0;O<=s;O++){const y=[],w=O/s,z=w*(e-t)+t;for(let V=0;V<=r;V++){const D=V/r,N=D*c+o,G=Math.sin(N),J=Math.cos(N);S.x=z*G,S.y=-w*n+p,S.z=z*J,f.push(S.x,S.y,S.z),b.set(G,P,J).normalize(),d.push(b.x,b.y,b.z),m.push(D,1-w),y.push(g++)}_.push(y)}for(let O=0;O<r;O++)for(let y=0;y<s;y++){const w=_[y][O],z=_[y+1][O],V=_[y+1][O+1],D=_[y][O+1];u.push(w,z,D),u.push(z,V,D),A+=6}l.addGroup(h,A,0),h+=A}function v(b){const S=g,A=new Ct,P=new U;let O=0;const y=b===!0?t:e,w=b===!0?1:-1;for(let V=1;V<=r;V++)f.push(0,p*w,0),d.push(0,w,0),m.push(.5,.5),g++;const z=g;for(let V=0;V<=r;V++){const N=V/r*c+o,G=Math.cos(N),J=Math.sin(N);P.x=y*J,P.y=p*w,P.z=y*G,f.push(P.x,P.y,P.z),d.push(0,w,0),A.x=G*.5+.5,A.y=J*.5*w+.5,m.push(A.x,A.y),g++}for(let V=0;V<r;V++){const D=S+V,N=z+V;b===!0?u.push(N,N+1,D):u.push(N+1,N,D),O+=3}l.addGroup(h,O,b===!0?1:2),h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class eo extends to{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new eo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vn extends _i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zc extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class ly extends Zc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ds=new Qt,Ja=new U,Qa=new U;class uy{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ja.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ja),Qa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qa),e.updateMatrixWorld(),ds.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ds)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class hy extends uy{constructor(){super(new kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fy extends Zc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DEFAULT_UP),this.updateMatrix(),this.target=new ce,this.shadow=new hy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jc{constructor(t,e,n=0,r=1/0){this.ray=new qs(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ys,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Bs(t,this,n,e),n.sort(tc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Bs(t[r],this,n,e);return n.sort(tc),n}}function tc(i,t){return i.distance-t.distance}function Bs(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)Bs(r[s],t,e,!0)}}class ec{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$s);const ri=new mn,dn=new Jc,Ti=new Ct,nc=new U,ur=new U,ps=new U,ic=new Qt;class dy extends Mn{constructor(t,e,n){super(),n.style.touchAction="none";let r=null,s=null;const a=[],o=this;function c(){n.addEventListener("pointermove",m),n.addEventListener("pointerdown",g),n.addEventListener("pointerup",_),n.addEventListener("pointerleave",_)}function l(){n.removeEventListener("pointermove",m),n.removeEventListener("pointerdown",g),n.removeEventListener("pointerup",_),n.removeEventListener("pointerleave",_),n.style.cursor=""}function u(){l()}function f(){return t}function d(){return dn}function m(h){if(o.enabled!==!1){if(p(h),dn.setFromCamera(Ti,e),r){dn.ray.intersectPlane(ri,ur)&&r.position.copy(ur.sub(nc).applyMatrix4(ic)),o.dispatchEvent({type:"drag",object:r});return}if(h.pointerType==="mouse"||h.pointerType==="pen")if(a.length=0,dn.setFromCamera(Ti,e),dn.intersectObjects(t,!0,a),a.length>0){const M=a[0].object;ri.setFromNormalAndCoplanarPoint(e.getWorldDirection(ri.normal),ps.setFromMatrixPosition(M.matrixWorld)),s!==M&&s!==null&&(o.dispatchEvent({type:"hoveroff",object:s}),n.style.cursor="auto",s=null),s!==M&&(o.dispatchEvent({type:"hoveron",object:M}),n.style.cursor="pointer",s=M)}else s!==null&&(o.dispatchEvent({type:"hoveroff",object:s}),n.style.cursor="auto",s=null)}}function g(h){o.enabled!==!1&&(p(h),a.length=0,dn.setFromCamera(Ti,e),dn.intersectObjects(t,!0,a),a.length>0&&(r=o.transformGroup===!0?t[0]:a[0].object,ri.setFromNormalAndCoplanarPoint(e.getWorldDirection(ri.normal),ps.setFromMatrixPosition(r.matrixWorld)),dn.ray.intersectPlane(ri,ur)&&(ic.copy(r.parent.matrixWorld).invert(),nc.copy(ur).sub(ps.setFromMatrixPosition(r.matrixWorld))),n.style.cursor="move",o.dispatchEvent({type:"dragstart",object:r})))}function _(){o.enabled!==!1&&(r&&(o.dispatchEvent({type:"dragend",object:r}),r=null),n.style.cursor=s?"pointer":"auto")}function p(h){const M=n.getBoundingClientRect();Ti.x=(h.clientX-M.left)/M.width*2-1,Ti.y=-(h.clientY-M.top)/M.height*2+1}c(),this.enabled=!0,this.transformGroup=!1,this.activate=c,this.deactivate=l,this.dispose=u,this.getObjects=f,this.getRaycaster=d}}const rc={type:"change"},ms={type:"start"},sc={type:"end"};class py extends Mn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nn.ROTATE,MIDDLE:nn.DOLLY,RIGHT:nn.PAN},this.touches={ONE:pn.ROTATE,TWO:pn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Tt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Tt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(rc),n.update(),s=r.NONE},this.update=function(){const R=new U,X=new Bn().setFromUnitVectors(t.up,new U(0,1,0)),B=X.clone().invert(),ct=new U,dt=new Bn,_t=2*Math.PI;return function(){const gt=n.object.position;R.copy(gt).sub(n.target),R.applyQuaternion(X),o.setFromVector3(R),n.autoRotate&&s===r.NONE&&y(P()),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let wt=n.minAzimuthAngle,Ut=n.maxAzimuthAngle;return isFinite(wt)&&isFinite(Ut)&&(wt<-Math.PI?wt+=_t:wt>Math.PI&&(wt-=_t),Ut<-Math.PI?Ut+=_t:Ut>Math.PI&&(Ut-=_t),wt<=Ut?o.theta=Math.max(wt,Math.min(Ut,o.theta)):o.theta=o.theta>(wt+Ut)/2?Math.max(wt,o.theta):Math.min(Ut,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=l,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),R.setFromSpherical(o),R.applyQuaternion(B),gt.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||ct.distanceToSquared(n.object.position)>a||8*(1-dt.dot(n.object.quaternion))>a?(n.dispatchEvent(rc),ct.copy(n.object.position),dt.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",x),n.domElement.removeEventListener("pointerdown",Rt),n.domElement.removeEventListener("pointercancel",Xt),n.domElement.removeEventListener("wheel",ut),n.domElement.removeEventListener("pointermove",$t),n.domElement.removeEventListener("pointerup",Xt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Tt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new ec,c=new ec;let l=1;const u=new U;let f=!1;const d=new Ct,m=new Ct,g=new Ct,_=new Ct,p=new Ct,h=new Ct,M=new Ct,v=new Ct,b=new Ct,S=[],A={};function P(){return 2*Math.PI/60/60*n.autoRotateSpeed}function O(){return Math.pow(.95,n.zoomSpeed)}function y(R){c.theta-=R}function w(R){c.phi-=R}const z=function(){const R=new U;return function(B,ct){R.setFromMatrixColumn(ct,0),R.multiplyScalar(-B),u.add(R)}}(),V=function(){const R=new U;return function(B,ct){n.screenSpacePanning===!0?R.setFromMatrixColumn(ct,1):(R.setFromMatrixColumn(ct,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(B),u.add(R)}}(),D=function(){const R=new U;return function(B,ct){const dt=n.domElement;if(n.object.isPerspectiveCamera){const _t=n.object.position;R.copy(_t).sub(n.target);let ht=R.length();ht*=Math.tan(n.object.fov/2*Math.PI/180),z(2*B*ht/dt.clientHeight,n.object.matrix),V(2*ct*ht/dt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(B*(n.object.right-n.object.left)/n.object.zoom/dt.clientWidth,n.object.matrix),V(ct*(n.object.top-n.object.bottom)/n.object.zoom/dt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function N(R){n.object.isPerspectiveCamera?l/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(R){n.object.isPerspectiveCamera?l*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(R){d.set(R.clientX,R.clientY)}function Y(R){M.set(R.clientX,R.clientY)}function q(R){_.set(R.clientX,R.clientY)}function Z(R){m.set(R.clientX,R.clientY),g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const X=n.domElement;y(2*Math.PI*g.x/X.clientHeight),w(2*Math.PI*g.y/X.clientHeight),d.copy(m),n.update()}function tt(R){v.set(R.clientX,R.clientY),b.subVectors(v,M),b.y>0?N(O()):b.y<0&&G(O()),M.copy(v),n.update()}function pt(R){p.set(R.clientX,R.clientY),h.subVectors(p,_).multiplyScalar(n.panSpeed),D(h.x,h.y),_.copy(p),n.update()}function lt(R){R.deltaY<0?G(O()):R.deltaY>0&&N(O()),n.update()}function W(R){let X=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,n.keyPanSpeed),X=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(0,-n.keyPanSpeed),X=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?y(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(n.keyPanSpeed,0),X=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?y(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):D(-n.keyPanSpeed,0),X=!0;break}X&&(R.preventDefault(),n.update())}function K(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),X=.5*(S[0].pageY+S[1].pageY);d.set(R,X)}}function it(){if(S.length===1)_.set(S[0].pageX,S[0].pageY);else{const R=.5*(S[0].pageX+S[1].pageX),X=.5*(S[0].pageY+S[1].pageY);_.set(R,X)}}function at(){const R=S[0].pageX-S[1].pageX,X=S[0].pageY-S[1].pageY,B=Math.sqrt(R*R+X*X);M.set(0,B)}function L(){n.enableZoom&&at(),n.enablePan&&it()}function bt(){n.enableZoom&&at(),n.enableRotate&&K()}function St(R){if(S.length==1)m.set(R.pageX,R.pageY);else{const B=ot(R),ct=.5*(R.pageX+B.x),dt=.5*(R.pageY+B.y);m.set(ct,dt)}g.subVectors(m,d).multiplyScalar(n.rotateSpeed);const X=n.domElement;y(2*Math.PI*g.x/X.clientHeight),w(2*Math.PI*g.y/X.clientHeight),d.copy(m)}function rt(R){if(S.length===1)p.set(R.pageX,R.pageY);else{const X=ot(R),B=.5*(R.pageX+X.x),ct=.5*(R.pageY+X.y);p.set(B,ct)}h.subVectors(p,_).multiplyScalar(n.panSpeed),D(h.x,h.y),_.copy(p)}function xt(R){const X=ot(R),B=R.pageX-X.x,ct=R.pageY-X.y,dt=Math.sqrt(B*B+ct*ct);v.set(0,dt),b.set(0,Math.pow(v.y/M.y,n.zoomSpeed)),N(b.y),M.copy(v)}function Bt(R){n.enableZoom&&xt(R),n.enablePan&&rt(R)}function mt(R){n.enableZoom&&xt(R),n.enableRotate&&St(R)}function Rt(R){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",$t),n.domElement.addEventListener("pointerup",Xt)),H(R),R.pointerType==="touch"?Ht(R):Yt(R))}function $t(R){n.enabled!==!1&&(R.pointerType==="touch"?T(R):qt(R))}function Xt(R){Q(R),S.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",$t),n.domElement.removeEventListener("pointerup",Xt)),n.dispatchEvent(sc),s=r.NONE}function Yt(R){let X;switch(R.button){case 0:X=n.mouseButtons.LEFT;break;case 1:X=n.mouseButtons.MIDDLE;break;case 2:X=n.mouseButtons.RIGHT;break;default:X=-1}switch(X){case nn.DOLLY:if(n.enableZoom===!1)return;Y(R),s=r.DOLLY;break;case nn.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;q(R),s=r.PAN}else{if(n.enableRotate===!1)return;J(R),s=r.ROTATE}break;case nn.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;J(R),s=r.ROTATE}else{if(n.enablePan===!1)return;q(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ms)}function qt(R){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;Z(R);break;case r.DOLLY:if(n.enableZoom===!1)return;tt(R);break;case r.PAN:if(n.enablePan===!1)return;pt(R);break}}function ut(R){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(R.preventDefault(),n.dispatchEvent(ms),lt(R),n.dispatchEvent(sc))}function Tt(R){n.enabled===!1||n.enablePan===!1||W(R)}function Ht(R){switch(et(R),S.length){case 1:switch(n.touches.ONE){case pn.ROTATE:if(n.enableRotate===!1)return;K(),s=r.TOUCH_ROTATE;break;case pn.PAN:if(n.enablePan===!1)return;it(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case pn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;L(),s=r.TOUCH_DOLLY_PAN;break;case pn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;bt(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ms)}function T(R){switch(et(R),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;St(R),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;rt(R),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Bt(R),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;mt(R),n.update();break;default:s=r.NONE}}function x(R){n.enabled!==!1&&R.preventDefault()}function H(R){S.push(R)}function Q(R){delete A[R.pointerId];for(let X=0;X<S.length;X++)if(S[X].pointerId==R.pointerId){S.splice(X,1);return}}function et(R){let X=A[R.pointerId];X===void 0&&(X=new Ct,A[R.pointerId]=X),X.set(R.pageX,R.pageY)}function ot(R){const X=R.pointerId===S[0].pointerId?S[1]:S[0];return A[X.pointerId]}n.domElement.addEventListener("contextmenu",x),n.domElement.addEventListener("pointerdown",Rt),n.domElement.addEventListener("pointercancel",Xt),n.domElement.addEventListener("wheel",ut,{passive:!1}),this.update()}}class my extends py{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:nn.PAN,MIDDLE:nn.DOLLY,RIGHT:nn.ROTATE},this.touches={ONE:pn.PAN,TWO:pn.DOLLY_ROTATE}}}var Qc={exports:{}};(function(i,t){(function(e,n){i.exports=n()})(bl,function(){var e=function(){function n(m){return a.appendChild(m.dom),m}function r(m){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===m?"block":"none";s=m}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(m){m.preventDefault(),r(++s%a.children.length)},!1);var o=(performance||Date).now(),c=o,l=0,u=n(new e.Panel("FPS","#0ff","#002")),f=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:n,showPanel:r,begin:function(){o=(performance||Date).now()},end:function(){l++;var m=(performance||Date).now();if(f.update(m-o,200),m>c+1e3&&(u.update(1e3*l/(m-c),100),c=m,l=0,d)){var g=performance.memory;d.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return m},update:function(){o=this.end()},domElement:a,setMode:r}};return e.Panel=function(n,r,s){var a=1/0,o=0,c=Math.round,l=c(window.devicePixelRatio||1),u=80*l,f=48*l,d=3*l,m=2*l,g=3*l,_=15*l,p=74*l,h=30*l,M=document.createElement("canvas");M.width=u,M.height=f,M.style.cssText="width:80px;height:48px";var v=M.getContext("2d");return v.font="bold "+9*l+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=s,v.fillRect(0,0,u,f),v.fillStyle=r,v.fillText(n,d,m),v.fillRect(g,_,p,h),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(g,_,p,h),{dom:M,update:function(b,S){a=Math.min(a,b),o=Math.max(o,b),v.fillStyle=s,v.globalAlpha=1,v.fillRect(0,0,u,_),v.fillStyle=r,v.fillText(c(b)+" "+n+" ("+c(a)+"-"+c(o)+")",d,m),v.drawImage(M,g+l,_,p-l,h,g,_,p-l,h),v.fillRect(g+p-l,_,l,h),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(g+p-l,_,l,c((1-b/S)*h))}}},e})})(Qc);var gy=Qc.exports;const _y=Hs(gy);function vy(i,t){var e,n=1;i==null&&(i=0),t==null&&(t=0);function r(){var s,a=e.length,o,c=0,l=0;for(s=0;s<a;++s)o=e[s],c+=o.x,l+=o.y;for(c=(c/a-i)*n,l=(l/a-t)*n,s=0;s<a;++s)o=e[s],o.x-=c,o.y-=l}return r.initialize=function(s){e=s},r.x=function(s){return arguments.length?(i=+s,r):i},r.y=function(s){return arguments.length?(t=+s,r):t},r.strength=function(s){return arguments.length?(n=+s,r):n},r}function yy(i){const t=+this._x.call(null,i),e=+this._y.call(null,i);return tl(this.cover(t,e),t,e,i)}function tl(i,t,e,n){if(isNaN(t)||isNaN(e))return i;var r,s=i._root,a={data:n},o=i._x0,c=i._y0,l=i._x1,u=i._y1,f,d,m,g,_,p,h,M;if(!s)return i._root=a,i;for(;s.length;)if((_=t>=(f=(o+l)/2))?o=f:l=f,(p=e>=(d=(c+u)/2))?c=d:u=d,r=s,!(s=s[h=p<<1|_]))return r[h]=a,i;if(m=+i._x.call(null,s.data),g=+i._y.call(null,s.data),t===m&&e===g)return a.next=s,r?r[h]=a:i._root=a,i;do r=r?r[h]=new Array(4):i._root=new Array(4),(_=t>=(f=(o+l)/2))?o=f:l=f,(p=e>=(d=(c+u)/2))?c=d:u=d;while((h=p<<1|_)===(M=(g>=d)<<1|m>=f));return r[M]=s,r[h]=a,i}function xy(i){var t,e,n=i.length,r,s,a=new Array(n),o=new Array(n),c=1/0,l=1/0,u=-1/0,f=-1/0;for(e=0;e<n;++e)isNaN(r=+this._x.call(null,t=i[e]))||isNaN(s=+this._y.call(null,t))||(a[e]=r,o[e]=s,r<c&&(c=r),r>u&&(u=r),s<l&&(l=s),s>f&&(f=s));if(c>u||l>f)return this;for(this.cover(c,l).cover(u,f),e=0;e<n;++e)tl(this,a[e],o[e],i[e]);return this}function My(i,t){if(isNaN(i=+i)||isNaN(t=+t))return this;var e=this._x0,n=this._y0,r=this._x1,s=this._y1;if(isNaN(e))r=(e=Math.floor(i))+1,s=(n=Math.floor(t))+1;else{for(var a=r-e||1,o=this._root,c,l;e>i||i>=r||n>t||t>=s;)switch(l=(t<n)<<1|i<e,c=new Array(4),c[l]=o,o=c,a*=2,l){case 0:r=e+a,s=n+a;break;case 1:e=r-a,s=n+a;break;case 2:r=e+a,n=s-a;break;case 3:e=r-a,n=s-a;break}this._root&&this._root.length&&(this._root=o)}return this._x0=e,this._y0=n,this._x1=r,this._y1=s,this}function Sy(){var i=[];return this.visit(function(t){if(!t.length)do i.push(t.data);while(t=t.next)}),i}function Ey(i){return arguments.length?this.cover(+i[0][0],+i[0][1]).cover(+i[1][0],+i[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function ve(i,t,e,n,r){this.node=i,this.x0=t,this.y0=e,this.x1=n,this.y1=r}function by(i,t,e){var n,r=this._x0,s=this._y0,a,o,c,l,u=this._x1,f=this._y1,d=[],m=this._root,g,_;for(m&&d.push(new ve(m,r,s,u,f)),e==null?e=1/0:(r=i-e,s=t-e,u=i+e,f=t+e,e*=e);g=d.pop();)if(!(!(m=g.node)||(a=g.x0)>u||(o=g.y0)>f||(c=g.x1)<r||(l=g.y1)<s))if(m.length){var p=(a+c)/2,h=(o+l)/2;d.push(new ve(m[3],p,h,c,l),new ve(m[2],a,h,p,l),new ve(m[1],p,o,c,h),new ve(m[0],a,o,p,h)),(_=(t>=h)<<1|i>=p)&&(g=d[d.length-1],d[d.length-1]=d[d.length-1-_],d[d.length-1-_]=g)}else{var M=i-+this._x.call(null,m.data),v=t-+this._y.call(null,m.data),b=M*M+v*v;if(b<e){var S=Math.sqrt(e=b);r=i-S,s=t-S,u=i+S,f=t+S,n=m.data}}return n}function Ty(i){if(isNaN(u=+this._x.call(null,i))||isNaN(f=+this._y.call(null,i)))return this;var t,e=this._root,n,r,s,a=this._x0,o=this._y0,c=this._x1,l=this._y1,u,f,d,m,g,_,p,h;if(!e)return this;if(e.length)for(;;){if((g=u>=(d=(a+c)/2))?a=d:c=d,(_=f>=(m=(o+l)/2))?o=m:l=m,t=e,!(e=e[p=_<<1|g]))return this;if(!e.length)break;(t[p+1&3]||t[p+2&3]||t[p+3&3])&&(n=t,h=p)}for(;e.data!==i;)if(r=e,!(e=e.next))return this;return(s=e.next)&&delete e.next,r?(s?r.next=s:delete r.next,this):t?(s?t[p]=s:delete t[p],(e=t[0]||t[1]||t[2]||t[3])&&e===(t[3]||t[2]||t[1]||t[0])&&!e.length&&(n?n[h]=e:this._root=e),this):(this._root=s,this)}function wy(i){for(var t=0,e=i.length;t<e;++t)this.remove(i[t]);return this}function Ay(){return this._root}function Ry(){var i=0;return this.visit(function(t){if(!t.length)do++i;while(t=t.next)}),i}function Cy(i){var t=[],e,n=this._root,r,s,a,o,c;for(n&&t.push(new ve(n,this._x0,this._y0,this._x1,this._y1));e=t.pop();)if(!i(n=e.node,s=e.x0,a=e.y0,o=e.x1,c=e.y1)&&n.length){var l=(s+o)/2,u=(a+c)/2;(r=n[3])&&t.push(new ve(r,l,u,o,c)),(r=n[2])&&t.push(new ve(r,s,u,l,c)),(r=n[1])&&t.push(new ve(r,l,a,o,u)),(r=n[0])&&t.push(new ve(r,s,a,l,u))}return this}function Ly(i){var t=[],e=[],n;for(this._root&&t.push(new ve(this._root,this._x0,this._y0,this._x1,this._y1));n=t.pop();){var r=n.node;if(r.length){var s,a=n.x0,o=n.y0,c=n.x1,l=n.y1,u=(a+c)/2,f=(o+l)/2;(s=r[0])&&t.push(new ve(s,a,o,u,f)),(s=r[1])&&t.push(new ve(s,u,o,c,f)),(s=r[2])&&t.push(new ve(s,a,f,u,l)),(s=r[3])&&t.push(new ve(s,u,f,c,l))}e.push(n)}for(;n=e.pop();)i(n.node,n.x0,n.y0,n.x1,n.y1);return this}function Py(i){return i[0]}function Dy(i){return arguments.length?(this._x=i,this):this._x}function Uy(i){return i[1]}function Iy(i){return arguments.length?(this._y=i,this):this._y}function no(i,t,e){var n=new io(t??Py,e??Uy,NaN,NaN,NaN,NaN);return i==null?n:n.addAll(i)}function io(i,t,e,n,r,s){this._x=i,this._y=t,this._x0=e,this._y0=n,this._x1=r,this._y1=s,this._root=void 0}function oc(i){for(var t={data:i.data},e=t;i=i.next;)e=e.next={data:i.data};return t}var ye=no.prototype=io.prototype;ye.copy=function(){var i=new io(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,e,n;if(!t)return i;if(!t.length)return i._root=oc(t),i;for(e=[{source:t,target:i._root=new Array(4)}];t=e.pop();)for(var r=0;r<4;++r)(n=t.source[r])&&(n.length?e.push({source:n,target:t.target[r]=new Array(4)}):t.target[r]=oc(n));return i};ye.add=yy;ye.addAll=xy;ye.cover=My;ye.data=Sy;ye.extent=Ey;ye.find=by;ye.remove=Ty;ye.removeAll=wy;ye.root=Ay;ye.size=Ry;ye.visit=Cy;ye.visitAfter=Ly;ye.x=Dy;ye.y=Iy;function ne(i){return function(){return i}}function gn(i){return(i()-.5)*1e-6}function Oy(i){return i.x+i.vx}function Fy(i){return i.y+i.vy}function Ny(i){var t,e,n,r=1,s=1;typeof i!="function"&&(i=ne(i==null?1:+i));function a(){for(var l,u=t.length,f,d,m,g,_,p,h=0;h<s;++h)for(f=no(t,Oy,Fy).visitAfter(o),l=0;l<u;++l)d=t[l],_=e[d.index],p=_*_,m=d.x+d.vx,g=d.y+d.vy,f.visit(M);function M(v,b,S,A,P){var O=v.data,y=v.r,w=_+y;if(O){if(O.index>d.index){var z=m-O.x-O.vx,V=g-O.y-O.vy,D=z*z+V*V;D<w*w&&(z===0&&(z=gn(n),D+=z*z),V===0&&(V=gn(n),D+=V*V),D=(w-(D=Math.sqrt(D)))/D*r,d.vx+=(z*=D)*(w=(y*=y)/(p+y)),d.vy+=(V*=D)*w,O.vx-=z*(w=1-w),O.vy-=V*w)}return}return b>m+w||A<m-w||S>g+w||P<g-w}}function o(l){if(l.data)return l.r=e[l.data.index];for(var u=l.r=0;u<4;++u)l[u]&&l[u].r>l.r&&(l.r=l[u].r)}function c(){if(t){var l,u=t.length,f;for(e=new Array(u),l=0;l<u;++l)f=t[l],e[f.index]=+i(f,l,t)}}return a.initialize=function(l,u){t=l,n=u,c()},a.iterations=function(l){return arguments.length?(s=+l,a):s},a.strength=function(l){return arguments.length?(r=+l,a):r},a.radius=function(l){return arguments.length?(i=typeof l=="function"?l:ne(+l),c(),a):i},a}function By(i){return i.index}function ac(i,t){var e=i.get(t);if(!e)throw new Error("node not found: "+t);return e}function zy(i){var t=By,e=f,n,r=ne(30),s,a,o,c,l,u=1;i==null&&(i=[]);function f(p){return 1/Math.min(o[p.source.index],o[p.target.index])}function d(p){for(var h=0,M=i.length;h<u;++h)for(var v=0,b,S,A,P,O,y,w;v<M;++v)b=i[v],S=b.source,A=b.target,P=A.x+A.vx-S.x-S.vx||gn(l),O=A.y+A.vy-S.y-S.vy||gn(l),y=Math.sqrt(P*P+O*O),y=(y-s[v])/y*p*n[v],P*=y,O*=y,A.vx-=P*(w=c[v]),A.vy-=O*w,S.vx+=P*(w=1-w),S.vy+=O*w}function m(){if(a){var p,h=a.length,M=i.length,v=new Map(a.map((S,A)=>[t(S,A,a),S])),b;for(p=0,o=new Array(h);p<M;++p)b=i[p],b.index=p,typeof b.source!="object"&&(b.source=ac(v,b.source)),typeof b.target!="object"&&(b.target=ac(v,b.target)),o[b.source.index]=(o[b.source.index]||0)+1,o[b.target.index]=(o[b.target.index]||0)+1;for(p=0,c=new Array(M);p<M;++p)b=i[p],c[p]=o[b.source.index]/(o[b.source.index]+o[b.target.index]);n=new Array(M),g(),s=new Array(M),_()}}function g(){if(a)for(var p=0,h=i.length;p<h;++p)n[p]=+e(i[p],p,i)}function _(){if(a)for(var p=0,h=i.length;p<h;++p)s[p]=+r(i[p],p,i)}return d.initialize=function(p,h){a=p,l=h,m()},d.links=function(p){return arguments.length?(i=p,m(),d):i},d.id=function(p){return arguments.length?(t=p,d):t},d.iterations=function(p){return arguments.length?(u=+p,d):u},d.strength=function(p){return arguments.length?(e=typeof p=="function"?p:ne(+p),g(),d):e},d.distance=function(p){return arguments.length?(r=typeof p=="function"?p:ne(+p),_(),d):r},d}var Gy={value:()=>{}};function el(){for(var i=0,t=arguments.length,e={},n;i<t;++i){if(!(n=arguments[i]+"")||n in e||/[\s.]/.test(n))throw new Error("illegal type: "+n);e[n]=[]}return new fr(e)}function fr(i){this._=i}function Hy(i,t){return i.trim().split(/^|\s+/).map(function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}})}fr.prototype=el.prototype={constructor:fr,on:function(i,t){var e=this._,n=Hy(i+"",e),r,s=-1,a=n.length;if(arguments.length<2){for(;++s<a;)if((r=(i=n[s]).type)&&(r=Vy(e[r],i.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<a;)if(r=(i=n[s]).type)e[r]=cc(e[r],i.name,t);else if(t==null)for(r in e)e[r]=cc(e[r],i.name,null);return this},copy:function(){var i={},t=this._;for(var e in t)i[e]=t[e].slice();return new fr(i)},call:function(i,t){if((r=arguments.length-2)>0)for(var e=new Array(r),n=0,r,s;n<r;++n)e[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(s=this._[i],n=0,r=s.length;n<r;++n)s[n].value.apply(t,e)},apply:function(i,t,e){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,s=n.length;r<s;++r)n[r].value.apply(t,e)}};function Vy(i,t){for(var e=0,n=i.length,r;e<n;++e)if((r=i[e]).name===t)return r.value}function cc(i,t,e){for(var n=0,r=i.length;n<r;++n)if(i[n].name===t){i[n]=Gy,i=i.slice(0,n).concat(i.slice(n+1));break}return e!=null&&i.push({name:t,value:e}),i}var mi=0,Ri=0,wi=0,nl=1e3,xr,Ci,Mr=0,Gn=0,Ar=0,Oi=typeof performance=="object"&&performance.now?performance:Date,il=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function rl(){return Gn||(il(Wy),Gn=Oi.now()+Ar)}function Wy(){Gn=0}function zs(){this._call=this._time=this._next=null}zs.prototype=sl.prototype={constructor:zs,restart:function(i,t,e){if(typeof i!="function")throw new TypeError("callback is not a function");e=(e==null?rl():+e)+(t==null?0:+t),!this._next&&Ci!==this&&(Ci?Ci._next=this:xr=this,Ci=this),this._call=i,this._time=e,Gs()},stop:function(){this._call&&(this._call=null,this._time=1/0,Gs())}};function sl(i,t,e){var n=new zs;return n.restart(i,t,e),n}function ky(){rl(),++mi;for(var i=xr,t;i;)(t=Gn-i._time)>=0&&i._call.call(void 0,t),i=i._next;--mi}function lc(){Gn=(Mr=Oi.now())+Ar,mi=Ri=0;try{ky()}finally{mi=0,Xy(),Gn=0}}function jy(){var i=Oi.now(),t=i-Mr;t>nl&&(Ar-=t,Mr=i)}function Xy(){for(var i,t=xr,e,n=1/0;t;)t._call?(n>t._time&&(n=t._time),i=t,t=t._next):(e=t._next,t._next=null,t=i?i._next=e:xr=e);Ci=i,Gs(n)}function Gs(i){if(!mi){Ri&&(Ri=clearTimeout(Ri));var t=i-Gn;t>24?(i<1/0&&(Ri=setTimeout(lc,i-Oi.now()-Ar)),wi&&(wi=clearInterval(wi))):(wi||(Mr=Oi.now(),wi=setInterval(jy,nl)),mi=1,il(lc))}}const $y=1664525,qy=1013904223,uc=4294967296;function Yy(){let i=1;return()=>(i=($y*i+qy)%uc)/uc}function Ky(i){return i.x}function Zy(i){return i.y}var Jy=10,Qy=Math.PI*(3-Math.sqrt(5));function tx(i){var t,e=1,n=.001,r=1-Math.pow(n,1/300),s=0,a=.6,o=new Map,c=sl(f),l=el("tick","end"),u=Yy();i==null&&(i=[]);function f(){d(),l.call("tick",t),e<n&&(c.stop(),l.call("end",t))}function d(_){var p,h=i.length,M;_===void 0&&(_=1);for(var v=0;v<_;++v)for(e+=(s-e)*r,o.forEach(function(b){b(e)}),p=0;p<h;++p)M=i[p],M.fx==null?M.x+=M.vx*=a:(M.x=M.fx,M.vx=0),M.fy==null?M.y+=M.vy*=a:(M.y=M.fy,M.vy=0);return t}function m(){for(var _=0,p=i.length,h;_<p;++_){if(h=i[_],h.index=_,h.fx!=null&&(h.x=h.fx),h.fy!=null&&(h.y=h.fy),isNaN(h.x)||isNaN(h.y)){var M=Jy*Math.sqrt(.5+_),v=_*Qy;h.x=M*Math.cos(v),h.y=M*Math.sin(v)}(isNaN(h.vx)||isNaN(h.vy))&&(h.vx=h.vy=0)}}function g(_){return _.initialize&&_.initialize(i,u),_}return m(),t={tick:d,restart:function(){return c.restart(f),t},stop:function(){return c.stop(),t},nodes:function(_){return arguments.length?(i=_,m(),o.forEach(g),t):i},alpha:function(_){return arguments.length?(e=+_,t):e},alphaMin:function(_){return arguments.length?(n=+_,t):n},alphaDecay:function(_){return arguments.length?(r=+_,t):+r},alphaTarget:function(_){return arguments.length?(s=+_,t):s},velocityDecay:function(_){return arguments.length?(a=1-_,t):1-a},randomSource:function(_){return arguments.length?(u=_,o.forEach(g),t):u},force:function(_,p){return arguments.length>1?(p==null?o.delete(_):o.set(_,g(p)),t):o.get(_)},find:function(_,p,h){var M=0,v=i.length,b,S,A,P,O;for(h==null?h=1/0:h*=h,M=0;M<v;++M)P=i[M],b=_-P.x,S=p-P.y,A=b*b+S*S,A<h&&(O=P,h=A);return O},on:function(_,p){return arguments.length>1?(l.on(_,p),t):l.on(_)}}}function ex(){var i,t,e,n,r=ne(-30),s,a=1,o=1/0,c=.81;function l(m){var g,_=i.length,p=no(i,Ky,Zy).visitAfter(f);for(n=m,g=0;g<_;++g)t=i[g],p.visit(d)}function u(){if(i){var m,g=i.length,_;for(s=new Array(g),m=0;m<g;++m)_=i[m],s[_.index]=+r(_,m,i)}}function f(m){var g=0,_,p,h=0,M,v,b;if(m.length){for(M=v=b=0;b<4;++b)(_=m[b])&&(p=Math.abs(_.value))&&(g+=_.value,h+=p,M+=p*_.x,v+=p*_.y);m.x=M/h,m.y=v/h}else{_=m,_.x=_.data.x,_.y=_.data.y;do g+=s[_.data.index];while(_=_.next)}m.value=g}function d(m,g,_,p){if(!m.value)return!0;var h=m.x-t.x,M=m.y-t.y,v=p-g,b=h*h+M*M;if(v*v/c<b)return b<o&&(h===0&&(h=gn(e),b+=h*h),M===0&&(M=gn(e),b+=M*M),b<a&&(b=Math.sqrt(a*b)),t.vx+=h*m.value*n/b,t.vy+=M*m.value*n/b),!0;if(m.length||b>=o)return;(m.data!==t||m.next)&&(h===0&&(h=gn(e),b+=h*h),M===0&&(M=gn(e),b+=M*M),b<a&&(b=Math.sqrt(a*b)));do m.data!==t&&(v=s[m.data.index]*n/b,t.vx+=h*v,t.vy+=M*v);while(m=m.next)}return l.initialize=function(m,g){i=m,e=g,u()},l.strength=function(m){return arguments.length?(r=typeof m=="function"?m:ne(+m),u(),l):r},l.distanceMin=function(m){return arguments.length?(a=m*m,l):Math.sqrt(a)},l.distanceMax=function(m){return arguments.length?(o=m*m,l):Math.sqrt(o)},l.theta=function(m){return arguments.length?(c=m*m,l):Math.sqrt(c)},l}function nx(i,t,e){var n,r=ne(.1),s,a;typeof i!="function"&&(i=ne(+i)),t==null&&(t=0),e==null&&(e=0);function o(l){for(var u=0,f=n.length;u<f;++u){var d=n[u],m=d.x-t||1e-6,g=d.y-e||1e-6,_=Math.sqrt(m*m+g*g),p=(a[u]-_)*s[u]*l/_;d.vx+=m*p,d.vy+=g*p}}function c(){if(n){var l,u=n.length;for(s=new Array(u),a=new Array(u),l=0;l<u;++l)a[l]=+i(n[l],l,n),s[l]=isNaN(a[l])?0:+r(n[l],l,n)}}return o.initialize=function(l){n=l,c()},o.strength=function(l){return arguments.length?(r=typeof l=="function"?l:ne(+l),c(),o):r},o.radius=function(l){return arguments.length?(i=typeof l=="function"?l:ne(+l),c(),o):i},o.x=function(l){return arguments.length?(t=+l,o):t},o.y=function(l){return arguments.length?(e=+l,o):e},o}function ix(i){var t=ne(.1),e,n,r;typeof i!="function"&&(i=ne(i==null?0:+i));function s(o){for(var c=0,l=e.length,u;c<l;++c)u=e[c],u.vx+=(r[c]-u.x)*n[c]*o}function a(){if(e){var o,c=e.length;for(n=new Array(c),r=new Array(c),o=0;o<c;++o)n[o]=isNaN(r[o]=+i(e[o],o,e))?0:+t(e[o],o,e)}}return s.initialize=function(o){e=o,a()},s.strength=function(o){return arguments.length?(t=typeof o=="function"?o:ne(+o),a(),s):t},s.x=function(o){return arguments.length?(i=typeof o=="function"?o:ne(+o),a(),s):i},s}function rx(i){var t=ne(.1),e,n,r;typeof i!="function"&&(i=ne(i==null?0:+i));function s(o){for(var c=0,l=e.length,u;c<l;++c)u=e[c],u.vy+=(r[c]-u.y)*n[c]*o}function a(){if(e){var o,c=e.length;for(n=new Array(c),r=new Array(c),o=0;o<c;++o)n[o]=isNaN(r[o]=+i(e[o],o,e))?0:+t(e[o],o,e)}}return s.initialize=function(o){e=o,a()},s.strength=function(o){return arguments.length?(t=typeof o=="function"?o:ne(+o),a(),s):t},s.y=function(o){return arguments.length?(i=typeof o=="function"?o:ne(+o),a(),s):i},s}const sx=Object.freeze(Object.defineProperty({__proto__:null,forceCenter:vy,forceCollide:Ny,forceLink:zy,forceManyBody:ex,forceRadial:nx,forceSimulation:tx,forceX:ix,forceY:rx},Symbol.toStringTag,{value:"Module"})),le=Math.random,ox=function i(t){function e(n,r){return n=n==null?0:+n,r=r==null?1:+r,arguments.length===1?(r=n,n=0):r-=n,function(){return t()*r+n}}return e.source=i,e}(le),ax=function i(t){function e(n,r){return arguments.length<2&&(r=n,n=0),n=Math.floor(n),r=Math.floor(r)-n,function(){return Math.floor(t()*r+n)}}return e.source=i,e}(le),ro=function i(t){function e(n,r){var s,a;return n=n==null?0:+n,r=r==null?1:+r,function(){var o;if(s!=null)o=s,s=null;else do s=t()*2-1,o=t()*2-1,a=s*s+o*o;while(!a||a>1);return n+r*o*Math.sqrt(-2*Math.log(a)/a)}}return e.source=i,e}(le),cx=function i(t){var e=ro.source(t);function n(){var r=e.apply(this,arguments);return function(){return Math.exp(r())}}return n.source=i,n}(le),ol=function i(t){function e(n){return(n=+n)<=0?()=>0:function(){for(var r=0,s=n;s>1;--s)r+=t();return r+s*t()}}return e.source=i,e}(le),lx=function i(t){var e=ol.source(t);function n(r){if((r=+r)==0)return t;var s=e(r);return function(){return s()/r}}return n.source=i,n}(le),ux=function i(t){function e(n){return function(){return-Math.log1p(-t())/n}}return e.source=i,e}(le),hx=function i(t){function e(n){if((n=+n)<0)throw new RangeError("invalid alpha");return n=1/-n,function(){return Math.pow(1-t(),n)}}return e.source=i,e}(le),fx=function i(t){function e(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return function(){return Math.floor(t()+n)}}return e.source=i,e}(le),al=function i(t){function e(n){if((n=+n)<0||n>1)throw new RangeError("invalid p");return n===0?()=>1/0:n===1?()=>1:(n=Math.log1p(-n),function(){return 1+Math.floor(Math.log1p(-t())/n)})}return e.source=i,e}(le),so=function i(t){var e=ro.source(t)();function n(r,s){if((r=+r)<0)throw new RangeError("invalid k");if(r===0)return()=>0;if(s=s==null?1:+s,r===1)return()=>-Math.log1p(-t())*s;var a=(r<1?r+1:r)-1/3,o=1/(3*Math.sqrt(a)),c=r<1?()=>Math.pow(t(),1/r):()=>1;return function(){do{do var l=e(),u=1+o*l;while(u<=0);u*=u*u;var f=1-t()}while(f>=1-.0331*l*l*l*l&&Math.log(f)>=.5*l*l+a*(1-u+Math.log(u)));return a*u*c()*s}}return n.source=i,n}(le),cl=function i(t){var e=so.source(t);function n(r,s){var a=e(r),o=e(s);return function(){var c=a();return c===0?0:c/(c+o())}}return n.source=i,n}(le),ll=function i(t){var e=al.source(t),n=cl.source(t);function r(s,a){return s=+s,(a=+a)>=1?()=>s:a<=0?()=>0:function(){for(var o=0,c=s,l=a;c*l>16&&c*(1-l)>16;){var u=Math.floor((c+1)*l),f=n(u,c-u+1)();f<=l?(o+=u,c-=u,l=(l-f)/(1-f)):(c=u-1,l/=f)}for(var d=l<.5,m=d?l:1-l,g=e(m),_=g(),p=0;_<=c;++p)_+=g();return o+(d?p:c-p)}}return r.source=i,r}(le),dx=function i(t){function e(n,r,s){var a;return(n=+n)==0?a=o=>-Math.log(o):(n=1/n,a=o=>Math.pow(o,n)),r=r==null?0:+r,s=s==null?1:+s,function(){return r+s*a(-Math.log1p(-t()))}}return e.source=i,e}(le),px=function i(t){function e(n,r){return n=n==null?0:+n,r=r==null?1:+r,function(){return n+r*Math.tan(Math.PI*t())}}return e.source=i,e}(le),mx=function i(t){function e(n,r){return n=n==null?0:+n,r=r==null?1:+r,function(){var s=t();return n+r*Math.log(s/(1-s))}}return e.source=i,e}(le),gx=function i(t){var e=so.source(t),n=ll.source(t);function r(s){return function(){for(var a=0,o=s;o>16;){var c=Math.floor(.875*o),l=e(c)();if(l>o)return a+n(c-1,o/l)();a+=c,o-=l}for(var u=-Math.log1p(-t()),f=0;u<=o;++f)u-=Math.log1p(-t());return a+f}}return r.source=i,r}(le),_x=1664525,vx=1013904223,hc=1/4294967296;function yx(i=Math.random()){let t=(0<=i&&i<1?i/hc:Math.abs(i))|0;return()=>(t=_x*t+vx|0,hc*(t>>>0))}const xx=Object.freeze(Object.defineProperty({__proto__:null,randomBates:lx,randomBernoulli:fx,randomBeta:cl,randomBinomial:ll,randomCauchy:px,randomExponential:ux,randomGamma:so,randomGeometric:al,randomInt:ax,randomIrwinHall:ol,randomLcg:yx,randomLogNormal:cx,randomLogistic:mx,randomNormal:ro,randomPareto:hx,randomPoisson:gx,randomUniform:ox,randomWeibull:dx},Symbol.toStringTag,{value:"Module"}));class Fi{}Fi.setFromObject=(i,t,e=!0)=>(i||(i=new on),e?i.setFromObject(t):(i.makeEmpty(),Fi.expandByObject(i,t,e)));Fi.expandByObject=(i,t)=>{const e=new on;t.updateWorldMatrix(!1,!1);const n=t.geometry;return n!==void 0&&(n.boundingBox===null&&n.computeBoundingBox(),e.copy(n.boundingBox),e.applyMatrix4(t.matrixWorld),i.union(e)),i};class Pi{}Pi.copyWith=(i,t,e,n)=>{const r=i.groups,s=new an(t,e,n);return s.groups=r,s};class Mx{constructor(t,e,n){this.objects=t,this.classes=e,this.rootFrame=n}createCursor(){return new Ax(this)}}class gi{constructor(){yt(this,"name");yt(this,"class");yt(this,"fields");yt(this,"fieldHistories")}static valueToString(t){return t instanceof gi?t.name:t.toString()}}class Sx{constructor(){yt(this,"name");yt(this,"category")}}class Ex{constructor(t,e){this.name=t,this.package=e}}class bx{constructor(t){this.name=t}}class Tx{constructor(t,e){this.times=t,this.values=e}}class wx{constructor(t,e,n,r,s,a,o){this.receiver=t,this.message=e,this.arguments=n,this.answer=r,this.startTime=s,this.endTime=a,this.children=o}allFrames(){return[this,...this.children.flatMap(t=>t.allFrames())]}toString(){return`${this.receiver.class.name}>>${this.message}`}}class fc{constructor(t){yt(this,"objects",{});yt(this,"classes",{});yt(this,"classCategories",{});yt(this,"packages",{});this.traceData=t}static readTrace(t){return new this(t).getTrace()}static async readTraceFromLocalFile(t){const e=new FileReader;e.readAsText(t);const n=await new Promise((s,a)=>{e.onload=()=>s(e.result),e.onerror=()=>a(e.error)}),r=JSON.parse(n);return this.readTrace(r)}static async readTraceFromServerFile(t){const e=await fetch(t);if(!e.ok)throw new Error(`Failed to load trace: ${e.status} ${e.statusText}`);const n=await e.json();return this.readTrace(n)}getTrace(){const t=this.getObjects(this.traceData.objects),e=this.getClasses(this.traceData.classes),n=this.getFrame(this.traceData.trace);return new Mx(t,e,n)}getObjects(t){return jt(t).map((e,n)=>this.getObject(n,e)).values().all()}getObject(t,e=void 0){let n=this.objects[t];return n==null&&(n=new gi,this.objects[t]=n),e===void 0||(n.name=e.name,n.class=this.getClass(e.class),n.fields=jt(e.fields).map(r=>this.getStringOrObject(r)).all(),n.fieldHistories=this.getFieldHistories(e.historicFields)),n}getClass(t,e=void 0){let n=this.classes[t];return n==null&&(n=new Sx,this.classes[t]=n),e===void 0||(n.name=t,n.category=this.getClassCategory(e.category,e.package)),n}getClassCategory(t,e){let n=this.classCategories[t];if(n!=null)return n;const r=this.getPackage(e);return n=new Ex(t,r),this.classCategories[t]=n,n}getPackage(t){let e=this.packages[t];return e!=null||(e=new bx(t),this.packages[t]=e),e}getClasses(t){return jt(t).map((e,n)=>this.getClass(n,e)).all()}getFieldHistories(t){return jt(t).map((e,n)=>this.getFieldHistory(e)).all()}getFieldHistory(t){if(t==null)return null;const e=t.times,n=t.values.map(r=>this.getStringOrObject(r));return new Tx(e,n)}getStringOrObject(t){return t[0]!=="@"?t[0]==="\\"?t.substring(1):t:this.getObject(t)}getFrame(t){const e=this.getObject(t.receiver),n=t.message,r=t.arguments.map(l=>this.getStringOrObject(l)),s=t.answer!=null?this.getStringOrObject(t.answer):null,a=t.startTime,o=t.endTime,c=t.children.map(l=>this.getFrame(l));return new wx(e,n,r,s,a,o,c)}}class Ax{constructor(t){yt(this,"trace");yt(this,"currentTime");yt(this,"currentStack");this.trace=t,this.reset()}get startTime(){return this.trace.rootFrame.startTime}get endTime(){return this.trace.rootFrame.endTime}reset(){this.currentTime=this.startTime-1,this.currentStack=[]}step(t,e={}){t>0?(t=Math.min(t,this.endTime+1-this.currentTime),this.stepForward(t,e)):t<0&&(t=Math.max(t,this.startTime-1-this.currentTime),this.stepBackward(-t,e))}stepTo(t,e={}){this.step(t-this.currentTime,e)}stepForward(t,e={}){const{visitFrame:n}=e;this.currentTime===this.startTime-1&&(this.currentTime++,this._stepInto(this.trace.rootFrame));let r=t;for(;r>0;){if(this.currentStack.length===0)throw new Error(`Ran out of frames after ${t-r} steps`);const s=this.currentStack[this.currentStack.length-1],a=s.children.find(l=>l.startTime>this.currentTime),c=(a?a.startTime:s.endTime+1)-this.currentTime;c>0&&(n==null||n(s,this)),c>r?(this.currentTime+=r,r=0):(this.currentTime+=c,r-=c,a!=null?this._stepInto(a):this._stepOut())}}stepBackward(t,e={}){const{visitFrame:n}=e;this.currentTime===this.endTime+1&&(this.currentTime--,this._stepInto(this.trace.rootFrame));let r=t;for(;r>0;){if(this.currentStack.length===0)throw new Error(`Ran out of frames after ${t-r} steps`);const s=this.currentStack[this.currentStack.length-1],a=s.children.slice().reverse().find(l=>l.endTime<this.currentTime),o=a?a.endTime:s.startTime-1,c=this.currentTime-o;c>0&&(n==null||n(s,this)),c>r?(this.currentTime-=r,r=0):(this.currentTime-=c,r-=c,a!=null?this._stepInto(a):this._stepOut())}}canStepForward(t=1){return this.currentTime+t<=this.endTime}canStepBackward(t=1){return this.currentTime-t>=this.startTime}_stepInto(t){this.currentStack.push(t)}_stepOut(){this.currentStack.pop()}}const si={...sx,...xx};class ul{constructor(){yt(this,"parent",null);yt(this,"focusStates",[]);yt(this,"connections",[]);yt(this,"hoveredEntities",[])}get object3d(){return this.cuboid}get path(){var t;return(((t=this.parent)==null?void 0:t.path)??[]).concat([this])}get root(){var t;return((t=this.parent)==null?void 0:t.root)??this}get width(){return this.object3d.geometry.parameters.width}get depth(){return this.object3d.geometry.parameters.depth}get height(){return this.object3d.geometry.parameters.height}get description(){return`${this.name}`}sortAllChildren(){}allEntities(t=null){return t==null||t(this)?[this]:[]}allObjectEntities(){return this.allEntities(t=>t instanceof ke)}build(t,e={}){return this.buildObject3d(t,e),this.cuboid.entity=this,(e.deferLabels??!1)||this.buildAllLabels(),this.wantsDrag()&&t.registerDraggable(this.cuboid),this.cuboid}buildAllLabels(){this.buildLabel(),this.updateDisplayState()}buildObject3d(t,e={}){const n=this.buildCuboidGeometry(t);this.cuboid=new Ae(n),this.cuboid.castShadow=!0,this.cuboid.receiveShadow=!0,this.baseMaterial=new vn({roughness:.75,metalness:0,flatShading:!0,transparent:!0}),this.topMaterial=new vn({roughness:.75,metalness:0,flatShading:!0,transparent:!0}),this.sideMaterial=new vn({roughness:.75,metalness:0,flatShading:!0,transparent:!0}),this.cuboid.material=[this.baseMaterial,this.topMaterial,this.sideMaterial],n.clearGroups(),n.addGroup(0,1/0,0),n.addGroup(0,6,2),n.addGroup(6,6,2),n.addGroup(12,6,1),n.addGroup(24,6,2),n.addGroup(30,6,2)}buildCuboidGeometry(t){return new an(30,30,10)}buildLabel(){var n,r;const e=((n=this.name)==null?void 0:n.length)>24?((r=this.name)==null?void 0:r.substring(0,23))+"…":this.name;this.topMaterial.map=this.buildLabelTexture(e,{allSides:!0,align:"center"}),this.topMaterial.needsUpdate=!0,this.sideMaterial.map=this.buildLabelTexture(e,{allSides:!1,align:"center",ratioOrientation:"side"}),this.sideMaterial.needsUpdate=!0}buildLabelTexture(t,e={}){const n=e.resolution??128,s=(e.ratioOrientation??"top")==="top"?this.object3d.geometry.parameters.width/this.object3d.geometry.parameters.depth:this.object3d.geometry.parameters.width/this.object3d.geometry.parameters.height,a=n*s,o=n,c=document.createElement("canvas");c.width=a*2,c.height=o*2;const l=c.getContext("2d"),u=e.color??"transparent";if(l.fillStyle=typeof u=="number"?`#${u.toString(16).padStart(6,"0")}`:u,l.fillRect(0,0,c.width,c.height),t){const d=e.textColor??"#000000",m=e.fontScale??1,g=e.allSides??!1,_=e.align??"left",p=e.margin??0;l.fillStyle=d;const h=360*m*n/1024;l.font=`bolder ${h}px Comic Sans MS`;const M=l.measureText(t).width;let v=c.height*p;v+=.75*h;let b=c.width*p;g&&(b=v);let S=c.width;S-=b*2;let A=c.height;A-=v*2;const P=Math.min(M,S),O=Math.min(M,A);l.translate(b,0);const y=g?4:1;for(let w=0;w<y;w++){const z=w%2,V=_==="center"?((z?A:S)-(z?O:P))/2:z?v:b;l.fillText(t,V,v,z?A:S),z?l.translate(o*2-b,v):l.translate(a*2-v,b),l.rotate(Math.PI/2)}}const f=new cy(c);return f.needsUpdate=!0,f}addConnection(t,e,n){let r=this.children.filter(s=>s.name===t);return r.length||(r=this),this.parent.addChildConnection(r,e,n)}moveTo(t,e,n){this.object3d.position.set(t,e,n),this.moved()}setFocusState(t,e=!0){if(!e)return this.unsetFocusState(t);this.focusStates.includes(t)||(this.focusStates.push(t),this.updateDisplayState())}unsetFocusState(t){this.focusStates.includes(t)&&(this.focusStates.splice(this.focusStates.indexOf(t),1),this.updateDisplayState())}setGlowState(t,e=1){var n;if(!e)return this.unsetGlowState(t);((n=this.glowFractions)==null?void 0:n[t])!==e&&(this.glowFractions??(this.glowFractions={}),this.glowFractions[t]=e,this.updateDisplayState())}unsetGlowState(t){var e,n;(e=this.glowFractions)!=null&&e[t]&&((n=this.glowFractions)==null||delete n[t],this.updateDisplayState())}getGlowFraction(t){var e;return((e=this.glowFractions)==null?void 0:e[t])??0}updateDisplayState(){if(this.baseMaterial){let t=this.constructor.colors[jt(["drag","hover"]).intersect(this.focusStates).first()??"default"],e=null;this.glowFractions&&jt(this.glowFractions).each((n,r)=>{let s=this.constructor.glowColors[r];if(!s)return;t?e||(e=new Gt().setHSL(t.h,t.s,t.l)):t=e.getHSL(),s={...t,...s},e=new Gt().setHSL(s.h,s.s,s.l).lerp(e,1-n),t=null}),e||(e=new Gt().setHSL(t.h,t.s,t.l)),this.baseMaterial.color=e,this.baseMaterial.needsUpdate=!0}this.connections.forEach(t=>{t.setFocusState("hoverEntity",this.focusStates.includes("hover")||this.focusStates.includes("drag"))})}addHoveredEntity(t){this.hoveredEntities.push(t),this.hoveredEntities.length&&this.setFocusState("hover")}removeHoveredEntity(t){const e=this.hoveredEntities.indexOf(t);e!==-1&&(this.hoveredEntities.splice(e,1),this.hoveredEntities.length||this.unsetFocusState("hover"))}wantsClick(t){return!0}wantsDrag(t){return!0}onHoverStart(t){this.addHoveredEntity(this)}onHoverEnd(t){this.removeHoveredEntity(this)}onClick(t){window.selectedEntity=this,console.log(this.object??this.organization??this),alert(this.description)}onDragStart(t){this.object3d.positionBeforeDrag=this.object3d.position.clone()}onDragEnd(t){this.unsetFocusState("drag"),delete this.object3d.positionBeforeDrag}onDrag(t){var e,n;this.setFocusState("drag"),(n=(e=this.root).onChildStartDrag)==null||n.call(e,this),this.constrainDrag(t)&&(this.moved(),this.d3Node&&(this.d3Node.x=this.object3d.position.x,this.d3Node.y=this.object3d.position.z))}constrainDrag(t){if(!this.wantsDrag(t))return this.object3d.position.copy(this.object3d.positionBeforeDrag),!1;if(!this.object3d.positionBeforeDrag)return console.warn("no positionBeforeDrag",this),!1;this.object3d.position.y=this.object3d.positionBeforeDrag.y;const e=t.target.getObjects().filter(c=>c!==t.object),n=.1,r=Fi.setFromObject(null,this.object3d,!1).expandByScalar(-n);if(e.some(c=>{const l=Fi.setFromObject(null,c,!1).expandByScalar(-n);return r.intersectsBox(l)}))return this.object3d.position.copy(this.object3d.positionBeforeDrag),!1;const a=(this.parent.width-this.width)/2,o=(this.parent.depth-this.depth)/2;return this.object3d.position.x=Math.max(-a,Math.min(a,this.object3d.position.x)),this.object3d.position.z=Math.max(-o,Math.min(o,this.object3d.position.z)),this.object3d.positionBeforeDrag=this.object3d.position.clone(),!0}moved(){this.connections.forEach(t=>{t.updatePosition()})}}class yi extends ul{constructor(e){super();yt(this,"children",[]);yt(this,"childConnections",[]);this.organization=e}get name(){return this.organization.name}addChild(e){this.children.push(e),e.parent=this}removeChild(e){this.children.splice(this.children.indexOf(e),1),e.parent=null}sortAllChildren(){this.children.forEach(e=>e.sortAllChildren()),this.children.sort((e,n)=>e.name.localeCompare(n.name))}allEntities(e=null){const n=[];return(e==null||e(this))&&n.push(this),this.children.forEach(r=>{n.push(...r.allEntities(e))}),n}build(e,n={}){return this.buildObject3d(e,n),this.cuboid.entity=this,this.buildChildren(e,{deferLabels:!0,...n}),this.layoutChildren(),(n.deferLabels??!1)||this.buildAllLabels(),this.buildChildConnections(e),this.wantsDrag()&&e.registerDraggable(this.cuboid),this.cuboid}buildAllLabels(){super.buildAllLabels(),this.children.forEach(e=>{e.buildAllLabels()})}buildChildren(e,n={}){let r=0;const s=this.children.length,a=this.children.map(o=>(r++%100==0&&console.log(`${r} / ${s}`),o.build(e,n)));a.length!=0&&this.object3d.add(...a)}buildChildConnections(e){this.childConnections.forEach(n=>{this.object3d.add(n.build())})}addChildConnection(e,n,r){const s=new pr(e,n,r);return(Array.isArray(e)?e:[e]).forEach(a=>{a.connections.push(s)}),n.connections.push(s),this.childConnections.push(s),s}get height(){return 10}adoptSize(e,n){this.cuboid.geometry=Pi.copyWith(this.cuboid.geometry,e,this.height,n)}layoutChildren(){this.layoutChildrenOnGrid({resizeMode:"shrinkWrap",offset:10*.5**(this.path.length-1),margin:{absolute:10}})}layoutChildrenOnGrid(e={}){var L,bt,St,rt,xt,Bt,mt,Rt,$t,Xt,Yt,qt;const n=e.childObjects??this.object3d.children;if(n.length==0)return;const r=e.groupBy;if(r!=null){const{groupBy:ut,groupExtract:Tt,...Ht}=e;return jt(n).groupBy(T=>{var x;return(x=T.entity)==null?void 0:x[r]}).map((T,x)=>this.layoutChildrenOnGrid({childObjects:T.all(),...Tt?{[Tt]:x}:{},...Ht})).all()}const s=e.resizeMode??"spaceFill",a=e.side??"top",o=e.idealCellRatio??1,c=e.childExtentW,l=e.query??null,u=e.dryRun??!1,f=typeof e.offset=="number"?e.offset:0,d=((L=e.offset)==null?void 0:L.u)??f,m=((bt=e.offset)==null?void 0:bt.v)??f,g=((St=e.offset)==null?void 0:St.left)??d,_=((rt=e.offset)==null?void 0:rt.top)??m,p=((xt=e.offset)==null?void 0:xt.right)??d,h=((Bt=e.offset)==null?void 0:Bt.bottom)??m,M=((mt=e.margin)==null?void 0:mt.absolute)??0,v=((Rt=e.margin)==null?void 0:Rt.absoluteU)??M,b=(($t=e.margin)==null?void 0:$t.absoluteV)??M,S=((Xt=e.margin)==null?void 0:Xt.relative)??0,A=((Yt=e.margin)==null?void 0:Yt.relativeU)??S,P=((qt=e.margin)==null?void 0:qt.relativeV)??S,O=this.object3d,y=Math.ceil(Math.sqrt(n.length)/o),w=Math.ceil(n.length/y);if(l==="gridCountU")return y;if(l==="gridCountV")return w;let z=new U(g,0,_),V=new U(p,0,h),D=new U(1,1,1);at(null,D),z.divide(D),V.divide(D);const N=z.x,G=z.z,J=V.x,Y=V.z,Z=(this[K("w")]??it(this.object3d,"w"))/2,{marginU:tt,marginV:pt,cellExtentU:lt,cellExtentV:W}={shrinkWrap:()=>{const ut=jt(n).map(x=>it(x,"u")).max(),Tt=jt(n).map(x=>it(x,"v")).max(),Ht=v+ut*A,T=b+Tt*P;return{marginU:Ht,marginV:T,cellExtentU:ut,cellExtentV:Tt}},spaceFill:()=>{const ut=v,Tt=b,Ht=this[K("u")]??it(this.object3d,"u"),T=this[K("v")]??it(this.object3d,"v"),x=Ht-N-J,H=T-G-Y,Q=(x-ut*(y-1))/y,et=(H-Tt*(w-1))/w;return{marginU:ut,marginV:Tt,cellExtentU:Q,cellExtentV:et,originOffsetU:N,originOffsetV:G,cornerOffsetU:J,cornerOffsetV:Y}}}[s]();if(u)return;n.forEach((ut,Tt)=>{var B;const Ht=Tt%y,T=Math.floor(Tt/y),x=N/2+(Ht-(y/2-.5))*(lt+tt),H=G/2+(T-(w/2-.5))*(W+pt),Q=Z+(c??it(ut,"w"))/2,[et,ot,R]=[x,Q,H];if(ut.position.set(et,ot,R),s==="spaceFill"&&((B=ut.entity)==null||B.adoptSize(lt,W)),a==="top")return;const X=ut.position.clone();ut.translateX(-X.x),ut.translateY(-X.y),ut.translateZ(-X.z),at(ut,X),ut.translateX(X.x),ut.translateY(X.y),ut.translateZ(X.z)}),s==="shrinkWrap"&&this.adoptSize(lt*y+tt*(y-1)+N+J,W*w+pt*(w-1)+G+Y);function K(ut){return["width","depth","height"]["uvw".indexOf(ut)]}function it(ut,Tt){return ut.geometry.parameters[K(Tt)]}function at(ut,Tt){if(ut==null||ut.rotateX(Math.PI*({top:0,bottom:1}[a]??.5)),a==="top"||a==="bottom")return;const Ht=O.geometry,T=Ht.parameters.height/Ht.parameters.depth;if(Tt.y/=T,Tt.z*=T,ut!=null&&(ut.geometry=Pi.copyWith(ut.geometry,ut.geometry.parameters.width,ut.geometry.parameters.height,ut.geometry.parameters.depth*T),ut.rotateZ(Math.PI*({back:1,right:.5,left:-.5}[a]??0))),!(a==="left"||a==="right"))return;const x=Ht.parameters.depth/Ht.parameters.width;Tt.x*=x,Tt.y/=x,ut!=null&&(ut.geometry=Pi.copyWith(ut.geometry,ut.geometry.parameters.width*x,ut.geometry.parameters.height,ut.geometry.parameters.depth))}}layoutChildrenOnGridQuery(e,n={}){return this.layoutChildrenOnGrid({query:e,dryRun:!0,...n})}layoutFDG(e,n,r={}){const c=this.children.map((g,_)=>g.d3Node={index:_,entity:g,x:g.object3d.position.x,y:g.object3d.position.z,radius:new on().setFromObject(g.object3d).getSize(new U).setY(0).length()/2}),l=[];n(this.children,(g,_,p)=>{l.push({source:g.d3Node,target:_.d3Node,strength:p*.1})}),this.simulation=si.forceSimulation(c),this.simulation.force("x",si.forceX().strength(.001)).force("y",si.forceY().strength(.001)).force("link",si.forceLink(l).id(g=>g.index).strength(g=>g.strength)).force("charge",si.forceManyBody().strength(-.2)),this.simulation.alpha(1).alphaDecay(0),this.simulation.force("collide",si.forceCollide().strength(1).radius(g=>g.radius).iterations(10)),this.simulation.alpha(1).alphaDecay(1e-4).on("tick",()=>{this.simulation.tick(100);const g=this.height/2;this.children.forEach(v=>{v.moveTo(v.d3Node.x,g+v.object3d.geometry.parameters.height/2,v.d3Node.y)});function _(v,b){document.createElement("div"),b.isT4dSimulated=!0;try{v.dispatchEvent(b)}finally{delete b.isT4dSimulated}}e.lastMouseMoveEvent!=null&&Promise.resolve().then(()=>{_(e.renderer.domElement,e.lastMouseMoveEvent)}),e.lastPointerMoveEvent!=null&&Promise.resolve().then(()=>{_(e.renderer.domElement,e.lastPointerMoveEvent)});const p=r.offset??20,h=Math.max(jt(c).map(v=>v.x).max(),-jt(c).map(v=>v.x).min())*2,M=Math.max(jt(c).map(v=>v.y).max(),-jt(c).map(v=>v.y).min())*2;this.adoptSize(h+p,M+p),e.updateScene()}).restart();const u=(jt(c).map(g=>g.x).min()+jt(c).map(g=>g.x).max())/2,f=(jt(c).map(g=>g.y).min()+jt(c).map(g=>g.y).max())/2;c.forEach(g=>{g.x-=u,g.y-=f}),this.children.forEach(g=>{g.moveTo(g.d3Node.x,g.object3d.geometry.parameters.height,g.d3Node.y)});const d=new on().setFromObject(this.object3d).getSize(new U),m=10;this.adoptSize(d.x+m,d.z+m)}onChildStartDrag(){this.simulation&&(this.simulation.alpha(1),this.simulation.restart())}moved(){super.moved(),this.children.forEach(e=>{e.moved()})}}yt(yi,"colors",{default:{h:.333,s:1,l:.25},hover:{h:.333,s:1,l:.5}});class oo extends yi{constructor(t){super(t)}get object3d(){return this.plane}get depth(){return this.plane.geometry.parameters.height}build(t,e={}){const n=new Ii(100,100);return n.rotateX(-Math.PI/2),this.plane=new Ae(n,this.constructor.planeMaterial),this.plane.entity=this,this.plane.receiveShadow=!0,this.buildChildren(t,{deferLabels:!0,...e}),this.layoutChildren(),(e.deferLabels??!1)||this.buildAllLabels(),this.buildChildConnections(t),this.plane}buildLabel(){}get height(){return 0}adoptSize(t,e){this.plane.geometry=new Ii(t,e).rotateX(-Math.PI/2)}updateDisplayState(){}wantsClick(t){return!1}wantsDrag(t){return!1}onHoverStart(t){}onHoverEnd(t){}}yt(oo,"planeMaterial",new vn({color:7829367}));class hl extends yi{constructor(t){super(t)}}yt(hl,"colors",{default:{h:0,s:1,l:.13},hover:{h:0,s:1,l:.16},drag:{h:0,s:1,l:.19}});class fl extends yi{constructor(t){super(t)}}yt(fl,"colors",{default:{h:.083,s:1,l:.13},hover:{h:.083,s:1,l:.16},drag:{h:.083,s:1,l:.19}});class dl extends yi{constructor(t){super(t)}}yt(dl,"colors",{default:{h:.167,s:1,l:.13},hover:{h:.167,s:1,l:.16},drag:{h:.167,s:1,l:.19}});const co=class extends yi{constructor(t){super(t)}get object(){return this.organization}get description(){let t=super.description;return this.object&&(t+=`
${this.object.class.category.name}`,this.object.fields&&(t+=`
`,t+=`
${jt(this.object.fields).map((e,n)=>`${n}: ${gi.valueToString(e)}`).join(`
`)}`)),t}get height(){function t(n,r=null){if(n.isEmpty())return r;if(n.count()!==1)throw new Error("collection does not contain exactly one element");return n.first()}const e=t(jt(this.layoutChildrenOnGridQuery("gridCountV",{childObjects:jt(this.object.fields).keys().all(),...this.constructor.gridLayoutOptions})).values().unique(),0);return this.constructor.headerHeight+this.constructor.fieldHeight*e}buildCuboidGeometry(t){return new an(10,this.height,10)}addConnection(t,e,n){const r=super.addConnection(t,e,n);return r.source===this&&(r.sourceAbsoluteY=this.constructor.headerHeight/2),r.targetAbsoluteY=this.constructor.headerHeight/2,r}layoutChildren(){this.layoutChildrenOnGrid(this.constructor.gridLayoutOptions)}};let ke=co;yt(ke,"colors",{default:{h:.333,s:1,l:.13},hover:{h:.333,s:1,l:.16},drag:{h:.333,s:1,l:.19}}),yt(ke,"glowColors",{active:{h:0}}),yt(ke,"headerHeight",3.5),yt(ke,"fieldHeight",3),yt(ke,"gridLayoutOptions",{resizeMode:"spaceFill",groupBy:"side",groupExtract:"side",margin:{absolute:0},offset:{top:co.headerHeight},idealCellRatio:2});class dr extends ul{constructor(e,n){super();yt(this,"primary",null);yt(this,"twins",[]);this.name=e,this.value=n}get description(){return`${this.name}: ${gi.valueToString(this.value)}`}buildObject3d(e,n={}){const r=new an(10,.1,2.5);if(this.cuboid=new Ae(r),this.primary)this.cuboid.material=this.primary.cuboid.material;else{if((n.deferLabels??!1)||this.buildAllLabels(),this.baseMaterial=new vn({roughness:.75,metalness:0,flatShading:!0,transparent:!0,opacity:this.constructor.opacity}),this.topMaterial=new vn({roughness:.75,metalness:0,flatShading:!0,transparent:!0}),this.constructor.sideMaterial===void 0){this.constructor.sideMaterial=new vn({roughness:.75,metalness:0,flatShading:!0,transparent:!0});const s=this.buildLabelTexture(null);this.constructor.sideMaterial.map=s,this.constructor.sideMaterial.needsUpdate=!0}this.cuboid.material=[this.baseMaterial,this.topMaterial,this.constructor.sideMaterial]}r.clearGroups(),r.addGroup(0,1/0,0),r.addGroup(0,6,2),r.addGroup(6,6,2),r.addGroup(12,6,1),r.addGroup(24,6,2),r.addGroup(30,6,2),this.cuboid.castShadow=!0,this.cuboid.receiveShadow=!0}buildLabel(){if(this.primary)return;const e=24,n=`${this.name}: ${gi.valueToString(this.value)}`,r=n.length>e?n.substring(0,e-1)+"…":n;this.topMaterial.map=this.buildLabelTexture(r,{align:"left",fontScale:2.5,margin:.01,ratioOrientation:"top"}),this.topMaterial.needsUpdate=!0}adoptSize(e,n){this.cuboid.geometry=Pi.copyWith(this.cuboid.geometry,e,this.height,n)}setFocusState(e,n){return this.primary?this.primary.setFocusState(e,n):super.setFocusState(e,n)}unsetFocusState(e){return this.primary?this.primary.unsetFocusState(e):super.unsetFocusState(e)}setGlowState(e,n){return this.primary?this.primary.setGlowState(e,n):super.setGlowState(e,n)}unsetGlowState(e){return this.primary?this.primary.unsetGlowState(e):super.unsetGlowState(e)}getGlowFraction(e){return this.primary?this.primary.getGlowFraction(e):super.getGlowFraction(e)}wantsDrag(e){return!1}onHoverStart(e){var n;super.onHoverStart(e),(n=this.parent)==null||n.addHoveredEntity(this),this.twins.forEach(r=>r.addHoveredEntity(r))}onHoverEnd(e){var n;super.onHoverEnd(e),(n=this.parent)==null||n.removeHoveredEntity(this),this.twins.forEach(r=>r.removeHoveredEntity(r))}}yt(dr,"colors",{default:{h:0,s:0,l:.25},hover:{h:0,s:0,l:.5},drag:{h:0,s:0,l:.75}}),yt(dr,"opacity",.5),yt(dr,"sideMaterials");class pr{constructor(t,e,n){yt(this,"focusStates",[]);this.source=t,this.target=e,this.strength=n}build(){const t=Array.isArray(this.source)?this.source[0]:this.source,e=new He().setFromPoints([t.object3d.position,this.target.object3d.position]),n=new Kc({transparent:!0,linewidth:this.strength});this.line=new ay(e,n),this.line.castShadow=!0,this.line.receiveShadow=!0;const r=new eo(this.strength,2);r.rotateX(Math.PI/2);const s=new Ks({transparent:!0,color:this.constructor.color});this.chevronCones=[];const a=10;for(let o=0;o<a;o++){const c=new Ae(r,s);c.castShadow=!0,c.receiveShadow=!0,this.chevronCones.push(c),this.line.add(c)}return this.updateDisplayState(),this.updatePosition(),this.line}updatePosition(){const t=Array.isArray(this.source)?jt(this.source).sortBy(o=>this.line.worldToLocal(o.object3d.getWorldPosition(new U)).distanceTo(this.target.object3d.position)).first():this.source;let e=this.line.worldToLocal(t.object3d.getWorldPosition(new U));this.sourceAbsoluteY!=null&&(e.y=this.sourceAbsoluteY);let n=this.target.object3d.position;this.targetAbsoluteY!=null&&(n=n.clone(),n.y=this.targetAbsoluteY);const r=this.line.geometry;r.attributes.position.array[0]=e.x,r.attributes.position.array[1]=e.y,r.attributes.position.array[2]=e.z,r.attributes.position.array[3]=n.x,r.attributes.position.array[4]=n.y,r.attributes.position.array[5]=n.z,r.attributes.position.needsUpdate=!0;const s=n.distanceTo(e),a=Math.min(s/8,this.chevronCones.length);this.chevronCones.forEach((o,c)=>{o.visible=c<a,o.visible&&(o.position.copy(e),o.position.lerp(n,(c+1)/(a+1)),o.lookAt(n))})}setFocusState(t,e){if(!e)return this.unsetFocusState(t);this.focusStates.includes(t)||(this.focusStates.push(t),this.updateDisplayState())}unsetFocusState(t){this.focusStates.includes(t)&&(this.focusStates.splice(this.focusStates.indexOf(t),1),this.updateDisplayState())}updateDisplayState(){this.focusStates.includes("hoverEntity")?(this.line.material.opacity=this.constructor.hoverOpacity,this.chevronCones.forEach(t=>t.material.opacity=this.constructor.hoverOpacity)):(this.line.material.opacity=this.constructor.opacity,this.chevronCones.forEach(t=>t.material.opacity=this.constructor.opacity))}}yt(pr,"color",12303291),yt(pr,"opacity",.5),yt(pr,"hoverOpacity",1);var pl={exports:{}};(function(i){var t=Object.prototype.hasOwnProperty,e="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(e=!1));function r(c,l,u){this.fn=c,this.context=l,this.once=u||!1}function s(c,l,u,f,d){if(typeof u!="function")throw new TypeError("The listener must be a function");var m=new r(u,f||c,d),g=e?e+l:l;return c._events[g]?c._events[g].fn?c._events[g]=[c._events[g],m]:c._events[g].push(m):(c._events[g]=m,c._eventsCount++),c}function a(c,l){--c._eventsCount===0?c._events=new n:delete c._events[l]}function o(){this._events=new n,this._eventsCount=0}o.prototype.eventNames=function(){var l=[],u,f;if(this._eventsCount===0)return l;for(f in u=this._events)t.call(u,f)&&l.push(e?f.slice(1):f);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(u)):l},o.prototype.listeners=function(l){var u=e?e+l:l,f=this._events[u];if(!f)return[];if(f.fn)return[f.fn];for(var d=0,m=f.length,g=new Array(m);d<m;d++)g[d]=f[d].fn;return g},o.prototype.listenerCount=function(l){var u=e?e+l:l,f=this._events[u];return f?f.fn?1:f.length:0},o.prototype.emit=function(l,u,f,d,m,g){var _=e?e+l:l;if(!this._events[_])return!1;var p=this._events[_],h=arguments.length,M,v;if(p.fn){switch(p.once&&this.removeListener(l,p.fn,void 0,!0),h){case 1:return p.fn.call(p.context),!0;case 2:return p.fn.call(p.context,u),!0;case 3:return p.fn.call(p.context,u,f),!0;case 4:return p.fn.call(p.context,u,f,d),!0;case 5:return p.fn.call(p.context,u,f,d,m),!0;case 6:return p.fn.call(p.context,u,f,d,m,g),!0}for(v=1,M=new Array(h-1);v<h;v++)M[v-1]=arguments[v];p.fn.apply(p.context,M)}else{var b=p.length,S;for(v=0;v<b;v++)switch(p[v].once&&this.removeListener(l,p[v].fn,void 0,!0),h){case 1:p[v].fn.call(p[v].context);break;case 2:p[v].fn.call(p[v].context,u);break;case 3:p[v].fn.call(p[v].context,u,f);break;case 4:p[v].fn.call(p[v].context,u,f,d);break;default:if(!M)for(S=1,M=new Array(h-1);S<h;S++)M[S-1]=arguments[S];p[v].fn.apply(p[v].context,M)}}return!0},o.prototype.on=function(l,u,f){return s(this,l,u,f,!1)},o.prototype.once=function(l,u,f){return s(this,l,u,f,!0)},o.prototype.removeListener=function(l,u,f,d){var m=e?e+l:l;if(!this._events[m])return this;if(!u)return a(this,m),this;var g=this._events[m];if(g.fn)g.fn===u&&(!d||g.once)&&(!f||g.context===f)&&a(this,m);else{for(var _=0,p=[],h=g.length;_<h;_++)(g[_].fn!==u||d&&!g[_].once||f&&g[_].context!==f)&&p.push(g[_]);p.length?this._events[m]=p.length===1?p[0]:p:a(this,m)}return this},o.prototype.removeAllListeners=function(l){var u;return l?(u=e?e+l:l,this._events[u]&&a(this,u)):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=e,o.EventEmitter=o,i.exports=o})(pl);var Rx=pl.exports;const ml=Hs(Rx);class Cx extends ml{constructor(e,n){super();yt(this,"isPlaying",!1);yt(this,"ticksPerSecond",60);yt(this,"stepsPerSecond",50);yt(this,"glowTime",1);this.cursor=e.createCursor(),this.traceEntity=n,this.updateEntities()}install(){this.isInstalled=!0,setTimeout(()=>this.tick(),0)}uninstall(){this.isInstalled=!1}start(){this.resume()}stop(){this.pause(),this.reset()}restart(){this.stop(),this.start()}resume(){this.isPlaying=!0}pause(){this.isPlaying=!1}reset(){this.resetSteps()}get currentTime(){return this.cursor.currentTime}set currentTime(e){this._tick(e-this.currentTime)}tick(){this.isInstalled&&(setTimeout(()=>this.tick(),1e3/this.ticksPerSecond),this.isPlaying?this._tick():this._tick(0))}_tick(e=void 0){const n=Date.now(),r=(n-this.lastTick)/1e3;let s;if(e===void 0){let a=r*this.stepsPerSecond;a+=this.stepsRoundingError||0,s=Math.round(a),this.stepsRoundingError=a-e}else s=e,delete this.stepsRoundingError;this.doSteps(s,r),this.lastTick=n,e===void 0&&!this.canStepForward()&&this.pause()}doSteps(e,n){const r=new Set;this.cursor.step(e,{visitFrame:s=>{console.log(s.toString()),r.add(s.receiver)}}),this.objectEntities.forEach(s=>{s.setGlowState("active",r.has(s.object)?1:Math.max(0,s.getGlowFraction("active")-n/this.glowTime))}),this.emit("step")}resetSteps(){this.cursor.reset()}canStepForward(){return this.cursor.canStepForward()}updateEntities(){this.updateObjectEntities()}updateObjectEntities(){this.objectEntities=this.traceEntity.allObjectEntities()}}class Lx extends ml{constructor(e){super();yt(this,"minTime");yt(this,"maxTime");this.domElement=e,this.init()}init(){this.cursor=this.domElement.querySelector("#cursor"),this.domElement.addEventListener("pointerdown",this._boundEventHandler("onPointerDown"))}get time(){return this.minTime+this._cursorX/(this.domElement.clientWidth-this.cursor.clientWidth)*(this.maxTime-this.minTime)}set time(e){this._cursorX=(e-this.minTime)/(this.maxTime-this.minTime)*(this.domElement.clientWidth-this.cursor.clientWidth)}get _cursorX(){return new DOMMatrixReadOnly(getComputedStyle(this.cursor).transform).m41}set _cursorX(e){this.cursor.style.transform=`translateX(${e}px)`}onPointerDown(e){this.dragging=!0,this.setCursorFromPointer(e);const n=this.domElement.ownerDocument;n.addEventListener("pointermove",this._boundEventHandler("onPointerMove"),!0),n.addEventListener("pointerup",this._boundEventHandler("onPointerUp"),!0),this.emit("startDrag")}onPointerMove(e){e.isT4dSimulated||this.dragging&&(console.log("move",e),this.setCursorFromPointer(e))}onPointerUp(e){if(e.isT4dSimulated)return;this.setCursorFromPointer(e),this.dragging=!1;const n=this.domElement.ownerDocument;n.removeEventListener("pointermove",this._boundEventHandler("onPointerMove"),!0),n.removeEventListener("pointerup",this._boundEventHandler("onPointerUp"),!0),this.emit("endDrag")}setCursorFromPointer(e){let n=e.pageX-this.domElement.getBoundingClientRect().left;n=Math.max(this.cursor.clientWidth/2,Math.min(this.domElement.clientWidth-this.cursor.clientWidth/2,n)),n-=this.cursor.clientWidth/2,this._cursorX=n,this.emit("time")}_boundEventHandler(e){var n;return(n=this._boundEventHandlers??(this._boundEventHandlers={}))[e]??(n[e]=this[e].bind(this))}}const Px={LEFT:1,MIDDLE:2,RIGHT:4,BACK:8,FORWARD:16};class ao{static forStyle(t=void 0){if(t==null)return this.forStyle("flatFDG");switch(t){case"hierarchical":return Dx;case"flatFDG":return gl}throw new Error(`Unknown style: ${t}`)}static newForStyle(t,e=void 0){return new(this.forStyle(t))(e)}constructor(t){this.trace=t}buildAllFieldEntities(t,e){let n=jt(t.fields);const r=20;return n=n.take(r),n.map((s,a)=>this.buildFieldEntities(a,s,e))}buildFieldEntities(t,e,n){let r=null;const s=["front","left","back","right"].map(a=>{const o=new dr(t,e);return o.side=a,r===null?r=o:o.primary=r,n.addChild(o),o});return s.forEach(a=>{a.twins=s.filter(o=>o!==a)}),s}}class Dx extends ao{constructor(){super(...arguments);yt(this,"allFieldEntities",new Map);yt(this,"objectEntities",new Map);yt(this,"classEntities",new Map);yt(this,"classCategoryEntities",new Map);yt(this,"packageEntities",new Map);yt(this,"traceEntity",null)}build(e){jt(this.trace.classes).each(r=>{this.getClassEntity(r)}),jt(this.trace.objects).each(r=>{this.getObjectEntity(r);const s=20;jt(r.fields).take(s).each((a,o)=>{this.getFieldEntities(o,a,r)})});const n=this.getTraceEntity();return n.sortAllChildren(),n.build(e)}getFieldEntities(e,n,r){let s=this.allFieldEntities.get(n);if(s)return s;const a=this.getObjectEntity(r);return this.buildFieldEntities(e,n,a),this.allFieldEntities.set(n,s),s}getObjectEntity(e){let n=this.objectEntities.get(e);return n||(n=new ke(e),this.getClassEntity(e.class).addChild(n),this.objectEntities.set(e,n),n)}getClassEntity(e){let n=this.classEntities.get(e);return n||(n=new dl(e),this.getClassCategoryEntity(e.category).addChild(n),this.classEntities.set(e,n),n)}getClassCategoryEntity(e){let n=this.classCategoryEntities.get(e);return n||(n=new fl(e),this.getPackageEntity(e.package).addChild(n),this.classCategoryEntities.set(e,n),n)}getPackageEntity(e){let n=this.packageEntities.get(e);return n||(n=new hl(e),this.getTraceEntity().addChild(n),this.packageEntities.set(e,n),n)}getTraceEntity(){return this.traceEntity?this.traceEntity:(this.traceEntity=new oo(this.trace),this.traceEntity)}}class gl extends ao{constructor(){super(...arguments);yt(this,"excludedObjectNames",[]);yt(this,"excludedClassNames",["Boolean","True","False","UndefinedObject","SmallInteger","LargePositiveInteger","LargeNegativeInteger","SmallFloat64","FullBlockClosure","CompiledBlock","CompiledMethod","CompiledMethodTrailer","Association","Array","OrderedCollection","Point","Rectangle"]);yt(this,"excludeClasses",!0);yt(this,"forceWeights",{references:1,organization:{force:.005,sameClass:2,sameHierarchy:1,sameCategory:.01,samePackage:.001},communication:1e-4})}build(e){const n=this.trace.objects.filter(a=>this.shouldShowObject(a)).map(a=>this.buildObjectEntity(a)),r=new oo(this.trace);n.forEach(a=>r.addChild(a)),r.sortAllChildren(),this.addConnections(n);const s=r.build(e);return r.layoutFDG(e,this.computeForces.bind(this)),s}shouldShowObject(e){return!(this.excludedClassNames.includes(e.class.name)||this.excludedObjectNames.includes(e.name)||this.excludeClasses&&e.class.name.endsWith(" class"))}buildObjectEntity(e){const n=new ke(e);return this.buildAllFieldEntities(e,n),n}addConnections(e){e.forEach((n,r)=>{e.forEach((s,a)=>{jt(n.object.fields).each((o,c)=>{o===s.object&&n.addConnection(c,s,1)})})})}computeForces(e,n){const r=(s,a)=>s===void 0?r(a):s instanceof Function?o=>s(o??1):o=>(o??1)*s;if(this.forceWeights.references){const s=r(this.forceWeights.references);e.forEach(a=>{const o=a.object;e.forEach(c=>{const l=c.object,u=jt(o.fields).filter(f=>f===l).count();u>0&&n(a,c,s(u))})})}if(this.forceWeights.organization){const s=r(this.forceWeights.organization.force,1),a=r(this.forceWeights.organization.sameClass),o=r(this.forceWeights.organization.sameHierarchy),c=r(this.forceWeights.organization.sameCategory),l=r(this.forceWeights.organization.samePackage);e.forEach(u=>{const f=u.object;e.forEach(d=>{const m=d.object;let g=0;if(a&&f.class===m.class&&(g+=a()),c&&f.class.category===m.class.category&&(g+=c()),o&&f.class.category===m.class.category){const _=/^Rxs[A-Z]/.test(f.class.name),p=/^Rxs[A-Z]/.test(m.class.name);_&&p&&(g+=o());const h=/^Rxm[A-Z]/.test(f.class.name),M=/^Rxm[A-Z]/.test(m.class.name);h&&M&&(g+=o())}l&&f.class.category.package===m.class.category.package&&(g+=l()),g>0&&n(u,d,s(g))})})}if(this.forceWeights.communication){const s=r(this.forceWeights.communication),a=o=>{const c=e.find(l=>l.object===o.receiver);o.children.forEach(l=>{const u=e.find(f=>f.object===l.receiver);c!=null&&u!=null&&n(c,u,s()),a(l)})};a(this.trace.rootFrame)}}}class Ux{constructor(t={}){yt(this,"defaultStyle","flatFDG");this.options=t}buildMap(t){this.scene=new oy,this.camera=new De,this.camera.position.set(0,50,100),this.camera.far=1e4,this.renderer=new Yc,this.window=t.ownerDocument.defaultView||t.ownerDocument.parentWindow,this.window.traceMap=this;const e=t.querySelector("#three");e.appendChild(this.renderer.domElement),new ResizeObserver(()=>this.updateViewport()).observe(e);const n=t.querySelector("#timeline");this.timeline=new Lx(n),this.buildConsoleInterface(),this.buildControls(),this.buildScene(),this.renderer.setAnimationLoop(()=>this.render())}buildConsoleInterface(){[gl].forEach(t=>{this.window[t.name]=t}),console.log("%ctrace4d","color: #0000ff; font-size: larger; font-weight: bold"),console.log("%cAdjust the map like this:","color: #0000ff"),console.log(`
traceMap.entityBuilder.forceWeights.references = 0.5
traceMap.entityBuilder.forceWeights.organization.sameClass = 0.1
traceMap.entityBuilder.excludedObjectNames.push("''")
traceMap.entityBuilder.excludedClassNames.push('ByteString')
traceMap.entityBuilder.excludeClasses = false
traceMap.reloadTrace()
`)}buildControls(){(this.options.countFPS??!1)!==!1&&this.buildFPSCounter(),this.buildMapControls(),this.buildDragControls(),this.buildMouseHandler()}buildFPSCounter(){this.stats=new _y,this.stats.showPanel(0),this.window.document.body.appendChild(this.stats.dom)}buildMapControls(){this.mapControls=new my(this.camera,this.renderer.domElement),this.mapControls.enableDamping=!0,this.mapControls.dampingFactor=.05,this.mapControls.enablePan=!0,this.mapControls.minDistance=20,this.mapControls.enableRotate=!0,this.mapControls.maxPolarAngle=Math.PI/2-.1,this.mapControls.addEventListener("change",()=>this.updateScene()),this.mapControls.keyPanSpeed=20,this.mapControls.listenToKeyEvents(this.window.document)}buildDragControls(){this.dragControls=new dy([],this.camera,this.renderer.domElement),this.dragControls.addEventListener("hoveron",t=>{var e,n;(n=(e=t.object.entity)==null?void 0:e.onDragStart)==null||n.call(e,t)}),this.dragControls.addEventListener("hoveroff",t=>{var e,n;this.dragEntity=null,(n=(e=t.object.entity)==null?void 0:e.onDragEnd)==null||n.call(e,t)}),this.dragControls.addEventListener("drag",t=>{var e,n;this.dragEntity=t.object.entity,this.lastDragEvent=t,(n=(e=t.object.entity)==null?void 0:e.onDrag)==null||n.call(e,t),this.updateScene()}),this.dragControls.enabled=!1}registerDraggable(t){this.dragControls.getObjects().push(t)}unregisterDraggable(t){const e=this.dragControls.getObjects().indexOf(t);e>=0&&this.dragControls.getObjects().splice(e,1)}buildMouseHandler(){const t=new Jc,e=new Ct;this.mouseOverEntities=[],this.focusEntity=null,this.renderer.domElement.addEventListener("pointermove",s=>{var l,u,f,d,m;this.lastPointerMoveEvent=s,e.x=s.clientX/this.window.innerWidth*2-1,e.y=-(s.clientY/this.window.innerHeight)*2+1,t.setFromCamera(e,this.camera);const a=t.intersectObjects(this.scene.children,!0),o=this.focusEntity,c=this.mouseOverEntities.slice();this.mouseOverEntities=a.slice().reverse().map(g=>g.object.entity).filter(g=>g),c.forEach(g=>{var _;this.mouseOverEntities.includes(g)||(_=g.onMouseLeave)==null||_.call(g,s)}),this.mouseOverEntities.forEach(g=>{var _;c.includes(g)||(_=g.onMouseEnter)==null||_.call(g,s)}),this.focusEntity=this.mouseOverEntities[this.mouseOverEntities.length-1],this.focusEntity!==o&&((l=o==null?void 0:o.onHoverEnd)==null||l.call(o,s),s.buttons&Px.LEFT||(f=(u=this.focusEntity)==null?void 0:u.onHoverStart)==null||f.call(u,s)),a.some(g=>{var _,p;(p=(_=g.object.entity)==null?void 0:_.onHover)==null||p.call(_,s)}),this.dragControls.enabled&&!this.dragEntity&&(this.dragEntity=this.focusEntity,(m=(d=this.dragEntity)==null?void 0:d.onDragStart)==null||m.call(d,s)),this.updateCursor(),this.updateScene()},{capture:!0}),this.renderer.domElement.parentElement.addEventListener("mousemove",s=>{this.lastMouseMoveEvent=s},{capture:!0});let n=null,r=null;this.renderer.domElement.addEventListener("mousedown",s=>{n=e.clone(),r=!0},!1),this.renderer.domElement.addEventListener("mousemove",s=>{r=r&&n.distanceTo(e)<.01},!1),this.renderer.domElement.addEventListener("click",s=>{var a,o,c,l;r&&(r=null,n=null,!this.dragEntity&&((o=(a=this.focusEntity)==null?void 0:a.wantsClick)!=null&&o.call(a,s))&&((l=(c=this.focusEntity).onClick)==null||l.call(c,s)))},!1),this.window.addEventListener("keydown",s=>{var a,o,c,l;if(s.key==="Shift"){if(this.mapControls.enabled=!1,this.dragControls.enabled=!0,this.dragEntity!==null||!((o=(a=this.focusEntity)==null?void 0:a.wantsDrag)!=null&&o.call(a,s)))return;this.dragEntity=this.focusEntity,(l=(c=this.dragEntity)==null?void 0:c.onDragStart)==null||l.call(c,s),this.updateCursor(s),this.updateScene()}},!1),this.window.addEventListener("keyup",s=>{var a,o;s.key==="Shift"&&(this.mapControls.enabled=!0,this.dragControls.enabled=!1,(o=(a=this.dragEntity)==null?void 0:a.onDragEnd)==null||o.call(a,s),this.dragEntity=null,this.updateCursor(s),this.updateScene())},!1)}buildScene(){const t=new fy(16777198);t.position.set(250,300,200),t.castShadow=!0,t.shadow.camera.left=-400,t.shadow.camera.right=400,t.shadow.camera.top=400,t.shadow.camera.bottom=-400,t.shadow.mapSize.width=4096,t.shadow.mapSize.height=4096,this.scene.add(t);const e=8900331,n=16177072,r=new ly(e,n,.7);this.scene.add(r);const s=new Ae(new Qs(1e5,64),new vn({color:n,roughness:1,metalness:0,flatShading:!0}));s.rotation.x=-Math.PI/2,s.position.y=-10,this.scene.add(s),this.renderer.setClearColor(e),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=bc,this.updateScene()}buildTrace(t){this.traceObject3d&&this.scene.remove(this.traceObject3d),this.traceObject3d=t,this.scene.add(t),this.updateScene()}async loadTraceFromServerFile(t,e){return this.loadTrace(await fc.readTraceFromServerFile(t),e)}async loadTraceFromLocalFile(t,e){return this.loadTrace(await fc.readTraceFromLocalFile(t),e)}loadTrace(t,e=void 0){this.trace=t,e??(e=this.defaultStyle),this.entityBuilder=ao.newForStyle(e,this.trace),this.reloadTrace()}reloadTrace(){this.player&&(this.player.uninstall(),this.player=null);const t=this.entityBuilder.build(this);this.buildTrace(t),this.loadPlayer(),setTimeout(()=>this.player.start(),3e3)}loadPlayer(){this.player=new Cx(this.trace,this.traceObject3d.entity),this.player.on("step",()=>this.updateScene()),this.timeline.minTime=this.trace.rootFrame.startTime,this.timeline.maxTime=this.trace.rootFrame.endTime,this.player.on("step",()=>this.timeline.time=this.player.cursor.currentTime);{let t=!1;this.timeline.on("startDrag",()=>{t=this.player.isPlaying,this.player.pause()}),this.timeline.on("endDrag",()=>{t&&this.player.resume()})}this.timeline.on("time",()=>this.player.currentTime=this.timeline.time),this.player.install()}updateScene(){this.renderRequired=!0}render(){var t,e;this.renderRequired&&(this.renderer.render(this.scene,this.camera),this.renderRequired=!1),(t=this.mapControls)==null||t.update(),(e=this.stats)==null||e.update()}updateCursor(t){let e="auto";this.dragControls.enabled?this.mouseOverEntities.forEach(n=>{if(this.dragControls.getObjects().some(r=>r===n.object3d)){e="move";return}}):this.mouseOverEntities.forEach(n=>{if(n.wantsClick(t)){e="pointer";return}}),this.renderer.domElement.style.cursor=e}updateViewport(){this.renderer.setSize(this.renderer.domElement.parentElement.clientWidth,this.renderer.domElement.parentElement.clientHeight),this.camera.aspect=this.renderer.domElement.clientWidth/this.renderer.domElement.clientHeight,this.camera.updateProjectionMatrix(),this.updateScene()}}if(!fo.isWebGLAvailable()){const i=fo.getWebGLErrorMessage();throw document.getElementById("container").appendChild(i),new Error("WebGL is not available")}async function Ix(){const i=new Ux,t="traces/regexParse.json",e="flatFDG",n=new URLSearchParams(window.location.search),r=n.get("trace")??t,s=n.get("style")??e,a=Object.fromEntries(n.entries());delete a.trace,delete a.style,Object.assign(i.options,a),i.buildMap(document.querySelector("#container")),await i.loadTraceFromServerFile(r,s)}await Ix();
