!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("DragScroll",[],n):"object"==typeof exports?exports.DragScroll=n():t.DragScroll=n()}(window,(function(){return function(t){var n={};function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(i,o,function(n){return t[n]}.bind(null,o));return i},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=5)}([function(t,n,e){var i=e(1),o=e(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);t.exports=o.locals||{}},function(t,n,e){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var t={};return function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}t[n]=e}return t[n]}}(),a=[];function s(t){for(var n=-1,e=0;e<a.length;e++)if(a[e].identifier===t){n=e;break}return n}function c(t,n){for(var e={},i=[],o=0;o<t.length;o++){var r=t[o],c=n.base?r[0]+n.base:r[0],u=e[c]||0,l="".concat(c," ").concat(u);e[c]=u+1;var d=s(l),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:l,updater:g(f,n),references:1}),i.push(l)}return i}function u(t){var n=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var o=e.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(t){n.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(n);else{var a=r(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(t,n){return l[t]=n,l.filter(Boolean).join("\n")});function f(t,n,e,i){var o=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=d(n,o);else{var r=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(r,a[n]):t.appendChild(r)}}function p(t,n,e){var i=e.css,o=e.media,r=e.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var h=null,m=0;function g(t,n){var e,i,o;if(n.singleton){var r=m++;e=h||(h=u(n)),i=f.bind(null,e,r,!1),o=f.bind(null,e,r,!0)}else e=u(n),i=p.bind(null,e,n),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)};return i(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;i(t=n)}else o()}}t.exports=function(t,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var e=c(t=t||[],n);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<e.length;i++){var o=s(e[i]);a[o].references--}for(var r=c(t,n),u=0;u<e.length;u++){var l=s(e[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}e=r}}}},function(t,n,e){(n=e(3)(!1)).push([t.i,".drag-scroll{overflow:auto;-ms-overflow-style:none;scrollbar-width:none}.drag-scroll::-webkit-scrollbar{display:none}\n",""]),t.exports=n},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e=function(t,n){var e=t[1]||"",i=t[3];if(!i)return e;if(n&&"function"==typeof btoa){var o=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[e].concat(r).concat([o]).join("\n")}var a,s,c;return[e].join("\n")}(n,t);return n[2]?"@media ".concat(n[2]," {").concat(e,"}"):e})).join("")},n.i=function(t,e,i){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);i&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),n.push(c))}},n}},function(t,n){window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return window.setTimeout(t,16)}},function(t,n,e){"use strict";e.r(n);e(0),e(4);var i=function(){function t(t){this.state={start:{x:0,y:0},previous:{x:0,y:0},distance:{x:0,y:0},isDown:!1,isDragging:!1,isRunning:!1,mouse:{clickEnabled:!1,isMoving:!1,movingTimeoutId:null}},this.options=Object.assign({allowInputFocus:!0,hideScroll:!0,onDragStart:null,onDragging:null,onDragEnd:null},t),this.$container=this.options.$container,this.$content=this.options.$content,this.onClick=this.onClick.bind(this),this.onDragStart=this.onDragStart.bind(this),this.onDraging=this.onDraging.bind(this),this.onDragEnd=this.onDragEnd.bind(this),this.doAnimate=this.doAnimate.bind(this),this.initDom(),this.bindEvents()}return Object.defineProperty(t,"DIRECTION",{get:function(){return{ALL:"ALL",HORIZONTAL:"HORIZONTAL",VERTICAL:"VERTICAL"}},enumerable:!1,configurable:!0}),t.prototype.initDom=function(){this.options.hideScroll&&this.$container.classList.add("drag-scroll")},t.prototype.bindEvents=function(){this.$content.addEventListener("click",this.onClick,!0),this.$content.addEventListener("mousedown",this.onDragStart,!0),window.addEventListener("mousemove",this.onDraging),window.addEventListener("mouseup",this.onDragEnd)},t.prototype.onClick=function(t){this.state.mouse.clickEnabled||(t.preventDefault(),t.stopPropagation())},t.prototype.onDragStart=function(t){var n=1,e=2;if(t.button!==e&&t.button!==n){t.preventDefault(),t.stopPropagation();if(!(this.options.allowInputFocus&&["input","textarea","button","select","label"].indexOf(t.target.nodeName.toLowerCase())>-1)){var i=this.state.mouse;i.clickEnabled=!1,i.isMoving=!1,i.movingTimeoutId=null,this.state.isDragging=!0,this.state.start={x:t.clientX,y:t.clientY},this.state.previous={x:this.$container.scrollLeft,y:this.$container.scrollTop}}}},t.prototype.onDraging=function(t){var n=this;if(this.state.isDragging){this.state.mouse.movingTimeoutId||(this.state.mouse.movingTimeoutId=setTimeout((function(){n.state.mouse.isMoving=!0}),70));var e=this.state.start;this.state.distance={x:2*(t.clientX-e.x),y:2*(t.clientY-e.y)},this.startAnimationLoop()}},t.prototype.onDragEnd=function(){this.state.isDragging=!1;var t=this.state.mouse;t.isMoving||(t.clickEnabled=!0),t.isMoving=!1},t.prototype.adaptContentPosition=function(){var t=this.state.distance,n=t.x,e=t.y,i=this.state.previous,o=i.x,r=i.y;this.$container.scrollLeft=-n+o,this.$container.scrollTop=-e+r},t.prototype.doAnimate=function(){this.state.isRunning&&(this.state.mouse.isMoving||(this.state.isRunning=!1),this.adaptContentPosition(),this.rafID=window.requestAnimationFrame(this.doAnimate))},t.prototype.startAnimationLoop=function(){this.state.isRunning=!0,window.cancelAnimationFrame(this.rafID),this.rafID=window.requestAnimationFrame(this.doAnimate)},t}();n.default=i}]).default}));