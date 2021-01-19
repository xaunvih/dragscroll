/*!
 * 
 *     Copyright (c) 2020 XuanVinh
 *     name: dragscroll-ts
 *     license: MIT
 *     author: vinhmai <vinhmai079@gmail.com>
 *     repository: git+https://github.com/xaunvih/dragscroll-ts
 *     version: 1.0.0
 */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("DragScroll",[],n):"object"==typeof exports?exports.DragScroll=n():t.DragScroll=n()}(window,(function(){return function(t){var n={};function o(i){if(n[i])return n[i].exports;var e=n[i]={i:i,l:!1,exports:{}};return t[i].call(e.exports,e,e.exports,o),e.l=!0,e.exports}return o.m=t,o.c=n,o.d=function(t,n,i){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var e in t)o.d(i,e,function(n){return t[n]}.bind(null,e));return i},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=1)}([function(t,n){window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){return window.setTimeout(t,16)}},function(t,n,o){"use strict";o.r(n);o(0);var i=function(){function t(){var t;this.emitter={all:t=t||new Map,on:function(n,o){var i=t.get(n);i&&i.push(o)||t.set(n,[o])},off:function(n,o){var i=t.get(n);i&&i.splice(i.indexOf(o)>>>0,1)},emit:function(n,o){(t.get(n)||[]).slice().map((function(t){t(o)})),(t.get("*")||[]).slice().map((function(t){t(n,o)}))}}}return t.prototype.on=function(t,n){this.emitter.on(t,n)},t.prototype.off=function(t,n){this.emitter.off(t,n)},t.prototype.trigger=function(t,n){this.emitter.emit(t,n)},t}();var e,r=(e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])})(t,n)},function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}),s=function(){return(s=Object.assign||function(t){for(var n,o=1,i=arguments.length;o<i;o++)for(var e in n=arguments[o])Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t}).apply(this,arguments)},a=function(t){function n(n){var o=t.call(this)||this;o.options=Object.assign({axis:"x",allowInputFocus:!0,allowSelectText:!0},n);var i={x:0,y:0};return o.state={startPosition:s({},i),previousPosition:s({},i),position:s({},i),dragPosition:s({},i),velocity:s({},i),dragOffset:s({},i),targetPosition:s({},i),isRunning:!1,isDragging:!1,isScrollToRunning:!1},o.friction=.95,o.frictionTarget=.08,o.$container=o.options.$container,o.$content=o.options.$content,o.onDragStart=o.onDragStart.bind(o),o.onDraging=o.onDraging.bind(o),o.onDragEnd=o.onDragEnd.bind(o),o.onClick=o.onClick.bind(o),o.animate=o.animate.bind(o),o.bindEvents(),o}return r(n,t),n.prototype.bindEvents=function(){this.$content.addEventListener("click",this.onClick),this.$content.addEventListener("mousedown",this.onDragStart),window.addEventListener("mousemove",this.onDraging),window.addEventListener("mouseup",this.onDragEnd),this.$content.addEventListener("touchstart",this.onDragStart),window.addEventListener("touchmove",this.onDraging),window.addEventListener("touchend",this.onDragEnd)},n.prototype.destroy=function(){this.$content.removeEventListener("click",this.onClick),this.$content.removeEventListener("mousedown",this.onDragStart),window.removeEventListener("mousemove",this.onDraging),window.removeEventListener("mouseup",this.onDragEnd),this.$content.removeEventListener("touchstart",this.onDragStart),window.removeEventListener("touchmove",this.onDraging),window.removeEventListener("touchend",this.onDragEnd)},n.prototype.update=function(){var t=this.state,n=t.isDragging,o=t.isScrollToRunning;n&&this.applyDragForce(),n||this.applyAllBoundForce(),o&&this.applyTargetForce();var i=this.state,e=i.position,r=i.velocity,s=this.options.axis;r.x*=this.friction,r.y*=this.friction,"y"!==s&&(e.x+=r.x),"x"!==s&&(e.y+=r.y)},n.prototype.applyForce=function(t){var n=this.state.velocity;n.x+=t.x,n.y+=t.y},n.prototype.applyTargetForce=function(){var t=this.state,n=t.position,o=t.velocity,i=t.targetPosition;this.applyForce({x:(i.x-n.x)*this.frictionTarget-o.x,y:(i.y-n.y)*this.frictionTarget-o.y})},n.prototype.applyDragForce=function(){var t=this.state,n=t.position,o=t.dragPosition,i=t.velocity,e={x:o.x-n.x-i.x,y:o.y-n.y-i.y};this.applyForce(e)},n.prototype.applyAllBoundForce=function(){var t=this;[{bound:this.$container.clientWidth-this.$content.clientWidth,axis:"x"},{bound:0,isForward:!0,axis:"x"},{bound:this.$container.clientHeight-this.$content.clientHeight,axis:"y"},{bound:0,isForward:!0,axis:"y"}].forEach((function(n){return t.applyBoundForce(n)}))},n.prototype.applyBoundForce=function(t){var n,o=t.bound,i=t.isForward,e=void 0!==i&&i,r=t.axis,s=this.state,a=s.velocity,c=s.position[r],u=a[r];if(!(e?c<o:c>o)){var p=o-c,f=p*this.frictionTarget,l=c+(u+f)*this.friction/(1-this.friction);(e?l>o:l<o)||(f=p*this.frictionTarget-u),this.applyForce(((n={x:0,y:0})[r]=f,n))}},n.prototype.onClick=function(t){var n=this.state.dragOffset;(Math.abs(n.x)>5||Math.abs(n.y)>5)&&(t.preventDefault(),t.stopPropagation())},n.prototype.onDragStart=function(t){var n=t.target;if(!(this.options.allowInputFocus&&["input","textarea","button","select","label"].indexOf(n.nodeName.toLowerCase())>-1)){var o=t instanceof TouchEvent?t.targetTouches[0]:t,i=o.clientX,e=o.clientY;this.options.allowSelectText&&function(t,n,o){for(var i=t.childNodes,e=document.createRange(),r=0;r<i.length;r++){var s=i[r];if(3===s.nodeType){e.selectNodeContents(s);var a=e.getBoundingClientRect();if(n>=a.left&&o>=a.top&&n<=a.right&&o<=a.bottom)return!0}}return!1}(n,i,e)||(t.preventDefault(),t.stopPropagation(),this.trigger("dragstart",t),this.state.isDragging=!0,this.state.startPosition={x:i,y:e},this.state.previousPosition=s({},this.state.position),this.setDragPosition(this.state.startPosition),this.startAnimation())}},n.prototype.onDraging=function(t){if(this.state.isDragging){var n=t instanceof TouchEvent?t.targetTouches[0]:t,o=n.clientX,i=n.clientY;this.setDragPosition({x:o,y:i}),this.trigger("dragging",t)}},n.prototype.onDragEnd=function(t){this.state.isDragging&&this.trigger("dragend",t),this.state.isDragging=!1},n.prototype.setDragPosition=function(t){var n=t.x,o=t.y,i=this.state,e=i.startPosition,r=i.dragPosition,s=i.previousPosition,a=i.dragOffset;a.x=n-e.x,a.y=o-e.y,r.x=s.x+a.x,r.y=s.y+a.y},n.prototype.setInputCanBeFocused=function(t){void 0===t&&(t=!1),this.options.allowInputFocus=t},n.prototype.scrollTo=function(t){var n=s({x:0,y:0},t);this.state.isScrollToRunning=!0,this.state.targetPosition=n,this.startAnimation()},n.prototype.adaptContentPosition=function(){var t=this.state.position;this.$content.style.transform="translate("+t.x+"px,"+t.y+"px)"},n.prototype.isMoving=function(){var t=this.state,n=t.isDragging,o=t.velocity;return n||Math.abs(o.x)>=.01||Math.abs(o.y)>=.01},n.prototype.animate=function(){this.state.isRunning&&(this.update(),this.isMoving()||(this.state.isRunning=!1,this.state.isScrollToRunning=!1),this.adaptContentPosition(),this.rafID=window.requestAnimationFrame(this.animate))},n.prototype.startAnimation=function(){this.state.isRunning=!0,window.cancelAnimationFrame(this.rafID),this.rafID=window.requestAnimationFrame(this.animate)},n}(i);n.default=a}]).default}));