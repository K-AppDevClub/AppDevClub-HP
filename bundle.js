!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);!function(){function t(t){this.sourceRandomCharacter="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",this.emptyCharacter="-",this.duration=600,this._isRunning=!1,this._originalStr="",this._originalLength=0,this._timeCurrent=0,this._timeStart=0,this._randomIndex=[],this._element=null,this._requestAnimationFrameId=0,this._element=t,this.setText(t.innerHTML)}t.prototype.setText=function(t){this._originalStr=t,this._originalLength=t.length},Object.defineProperty(t.prototype,"isRunning",{get:function(){return this.isRunning},enumerable:!0,configurable:!0}),t.prototype.start=function(){var t=this;this.stop(),this._randomIndex=[];for(var e="",n=0;n<this._originalLength;n++){var r=n/this._originalLength;this._randomIndex[n]=Math.random()*(1-r)+r,e+=this.emptyCharacter}this._timeStart=(new Date).getTime(),this._isRunning=!0,this._requestAnimationFrameId=requestAnimationFrame(function(){t._onInterval()}),this._element.innerHTML=e},t.prototype.stop=function(){this._isRunning=!1,cancelAnimationFrame(this._requestAnimationFrameId)},t.prototype.dispose=function(){cancelAnimationFrame(this._requestAnimationFrameId),this.sourceRandomCharacter=null,this.emptyCharacter=null,this._isRunning=!1,this.duration=0,this._originalStr=null,this._originalLength=0,this._timeCurrent=0,this._timeStart=0,this._randomIndex=null,this._element=null,this._requestAnimationFrameId=0},t.prototype._onInterval=function(){var t=this;this._timeCurrent=(new Date).getTime()-this._timeStart;for(var e=this._timeCurrent/this.duration,n="",r=0;r<this._originalLength;r++)e>=this._randomIndex[r]?n+=this._originalStr.charAt(r):e<this._randomIndex[r]/3?n+=this.emptyCharacter:n+=this.sourceRandomCharacter.charAt(Math.floor(Math.random()*this.sourceRandomCharacter.length));e>1&&(n=this._originalStr,this._isRunning=!1),this._element.innerHTML=n,!0===this._isRunning&&(this._requestAnimationFrameId=requestAnimationFrame(function(){t._onInterval()}))}}();n(5);var r={el:null,next:null,prev:null},i={el:null,next:null,prev:null},o={el:null,next:null,prev:null},a={el:null,next:null,prev:null};let s=0,l=r;r.next=i,r.prev=a,i.next=o,i.prev=r,o.next=a,o.prev=i,a.next=r,a.prev=o;const u=function(){let t=document.getElementById("canvas-container"),e=document.getElementById("myCanvas");e.width=t.clientWidth,e.height=t.clientHeight};onload=function(){let t=0;const e=document.getElementById("cube");r.el=document.getElementById("front"),i.el=document.getElementById("right"),a.el=document.getElementById("left"),o.el=document.getElementById("backk"),l.el.classList.add("fadeInBlur"),u();const n=new createjs.Stage("myCanvas"),c=new particlejs.ParticleSystem;n.addChild(c.container),c.importFromJson({bgColor:"#00000",width:728,height:415,emitFrequency:10,startX:365,startXVariance:862,startY:218,startYVariance:376,initialDirection:0,initialDirectionVariance:"360",initialSpeed:1,initialSpeedVariance:"3.7",friction:.1165,accelerationSpeed:0,accelerationDirection:"360",startScale:.88,startScaleVariance:"1",finishScale:.18,finishScaleVariance:.68,lifeSpan:70,lifeSpanVariance:80,startAlpha:"0.5",startAlphaVariance:"0",finishAlpha:.51,finishAlphaVariance:.5,shapeIdList:["blur_circle","circle"],startColor:{hue:195,hueVariance:21,saturation:70,saturationVariance:"0",luminance:77,luminanceVariance:37},blendMode:!0,alphaCurveType:"1",VERSION:"0.1.3"}),createjs.Ticker.framerate=60,createjs.Ticker.timingMode=createjs.Ticker.RAF,createjs.Ticker.addEventListener("tick",function(){c.update(),n.update()}),window.addEventListener("resize",function(t){u()}),document.getElementById("next").onclick=function(){s+=1,t-=90,l.el.classList.remove("fadeInBlur"),l.el.classList.add("fadeOutBlur"),(l=l.next).el.classList.remove("fadeOutBlur"),l.el.classList.add("fadeInBlur"),e.style.webkitTransform="rotateY("+t+"deg)"},document.getElementById("back").onclick=function(){s-=1,t+=90,l.el.classList.remove("fadeInBlur"),l.el.classList.add("fadeOutBlur"),(l=l.prev).el.classList.remove("fadeOutBlur"),l.el.classList.add("fadeInBlur"),e.style.webkitTransform="rotateY("+t+"deg)"}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,r=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,u=0,c=[],f=n(1);function d(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function h(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}function p(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function v(t){var e=document.createElement("style");return t.attrs.type="text/css",b(e,t.attrs),p(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,r,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var a=u++;n=l||(l=v(e)),r=x.bind(null,n,a,!1),i=x.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",b(e,t.attrs),p(t,e),e}(e),r=function(t,e,n){var r=n.css,i=n.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(r=f(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),i=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),r=function(t,e){var n=e.css,r=e.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){m(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return d(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}t&&d(h(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var y,w=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function x(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=w(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"body{color:#fff;margin:0}p{font-weight:200}.bg{position:absolute;top:0;left:0;z-index:-1;width:102vw;height:152vh;background:linear-gradient(180deg,#729401 0,#af2a37);opacity:.8;animation:huerotator 15s infinite alternate}@keyframes huerotator{0%{-webkit-filter:hue-rotate(0deg);filter:hue-rotate(0deg)}to{-webkit-filter:hue-rotate(1turn);filter:hue-rotate(1turn)}}.fadeInBlur{opacity:1;-webkit-filter:blur(0);-moz-filter:blur(0);-o-filter:blur(0);-ms-filter:blur(0);filter:blur(0)}.fadeInBlur,.fadeOutBlur{-webkit-transition:all .5s}.fadeOutBlur{opacity:0;-webkit-filter:blur(5px);-moz-filter:blur(5px);-o-filter:blur(5px);-ms-filter:blur(5px);filter:blur(5px)}div.next-btn{right:0}div.back-btn,div.next-btn{position:fixed;top:0;width:20vw;height:100vh;z-index:2}div.back-btn{left:0}#canvas-container{width:100vw;height:100vh;position:absolute;top:0;left:0;z-index:-1}div.stage{position:relative;-webkit-perspective:5000vw}div.stage div.cube{position:relative;-webkit-transform-style:preserve-3d;-webkit-transition:all .5s;left:4px}div.stage div.cube,div.stage div.cube div{width:100vw;height:100vh;box-sizing:border-box}div.stage div.cube div{text-align:center;position:absolute;z-index:-2}div.stage div.cube div.front{top:0;left:0;-webkit-transform:translateZ(50vw);-webkit-transition:all 5.5s}div.stage div.cube div.back{top:0;left:0;-webkit-transform:translateZ(-50vw) rotateY(180deg)}div.stage div.cube div.left{top:0;right:50vw;-webkit-transform:rotateY(-90deg)}div.stage div.cube div.right{top:0;left:50vw;-webkit-transform:rotateY(90deg)}",""])},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(2)(r,i);r.locals&&(t.exports=r.locals)}]);