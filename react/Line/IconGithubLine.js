!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.InstructureIconsLine=t(require("react")):e.InstructureIconsLine=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}({0:function(e,t,r){e.exports=r(78)},1:function(e,t,r){"use strict";function n(){p=!1}function o(e){if(!e)return void(l!==h&&(l=h,n()));if(e!==l){if(e.length!==h.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,r){return t!==r.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+h.length+" unique characters. These characters were not unique: "+t.join(", "));l=e,n()}}function i(e){return o(e),l}function u(e){d.seed(e),f!==e&&(n(),f=e)}function s(){l||o(h);for(var e,t=l.split(""),r=[],n=d.nextValue();t.length>0;)n=d.nextValue(),e=Math.floor(n*t.length),r.push(t.splice(e,1)[0]);return r.join("")}function c(){return p?p:p=s()}function a(e){var t=c();return t[e]}var l,f,p,d=r(10),h="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";e.exports={characters:i,seed:u,lookup:a,shuffled:c}},2:function(t,r){t.exports=e},3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(2),a=n(c),l=r(4),f=n(l),p=function(e){function t(e){o(this,t);var r=i(this,Object.getPrototypeOf(t).call(this));return r.titleId=e.name+"__"+f["default"].generate(),r.descId=e.name+"__"+f["default"].generate(),r}return u(t,e),s(t,[{key:"renderTitle",value:function(){var e=this.props.title;return e?a["default"].createElement("title",{id:this.titleId},e):null}},{key:"renderDesc",value:function(){var e=this.props.desc;return e?a["default"].createElement("desc",{id:this.descId},e):null}},{key:"render",value:function(){var e=this.props,t=e.title,r=e.width,n=e.height,o=e.viewBox,i={fill:"currentColor"};return a["default"].createElement("svg",{style:i,width:r,height:n,viewBox:o,"aria-hidden":t?null:"true","aria-labelledby":this.labelledBy,role:this.role},this.renderTitle(),this.renderDesc(),a["default"].createElement("g",{role:"presentation"},this.props.children))}},{key:"role",get:function(){return this.props.title?"img":"presentation"}},{key:"labelledBy",get:function(){var e=[];return this.props.title&&e.push(this.titleId),this.props.desc&&e.push(this.descId),e.length>0?e.join(" "):null}}]),t}(c.Component);p.propTypes={name:c.PropTypes.string.isRequired,children:c.PropTypes.node.isRequired,viewBox:c.PropTypes.string.isRequired,title:c.PropTypes.string,desc:c.PropTypes.string,width:c.PropTypes.string,height:c.PropTypes.string},p.defaultProps={width:"1em",height:"1em"},t["default"]=p},4:function(e,t,r){"use strict";e.exports=r(7)},5:function(e,t,r){"use strict";function n(e){var t=o.shuffled();return{version:15&t.indexOf(e.substr(0,1)),worker:15&t.indexOf(e.substr(1,1))}}var o=r(1);e.exports=n},6:function(e,t,r){"use strict";function n(e,t){for(var r,n=0,i="";!r;)i+=e(t>>4*n&15|o()),r=t<Math.pow(16,n+1),n++;return i}var o=r(9);e.exports=n},7:function(e,t,r){"use strict";function n(){var e="",t=Math.floor(.001*(Date.now()-d));return t===c?s++:(s=0,c=t),e+=l(a.lookup,h),e+=l(a.lookup,y),s>0&&(e+=l(a.lookup,s)),e+=l(a.lookup,t)}function o(t){return a.seed(t),e.exports}function i(t){return y=t,e.exports}function u(e){return void 0!==e&&a.characters(e),a.shuffled()}var s,c,a=r(1),l=r(6),f=r(5),p=r(8),d=1459707606518,h=6,y=r(11)||0;e.exports=n,e.exports.generate=n,e.exports.seed=o,e.exports.worker=i,e.exports.characters=u,e.exports.decode=f,e.exports.isValid=p},8:function(e,t,r){"use strict";function n(e){if(!e||"string"!=typeof e||e.length<6)return!1;for(var t=o.characters(),r=e.length,n=0;r>n;n++)if(-1===t.indexOf(e[n]))return!1;return!0}var o=r(1);e.exports=n},9:function(e,t){"use strict";function r(){if(!n||!n.getRandomValues)return 48&Math.floor(256*Math.random());var e=new Uint8Array(1);return n.getRandomValues(e),48&e[0]}var n="object"==typeof window&&(window.crypto||window.msCrypto);e.exports=r},10:function(e,t){"use strict";function r(){return o=(9301*o+49297)%233280,o/233280}function n(e){o=e}var o=1;e.exports={nextValue:r,seed:n}},11:function(e,t){"use strict";e.exports=0},78:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(2),l=n(a),f=r(3),p=n(f),d=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return l["default"].createElement(p["default"],s({},this.props,{name:"IconGithubLine",viewBox:"0 0 1920 1920"}),l["default"].createElement("path",{d:"M1089.2 1189.574c0-49 11.75-91 35.2-125.9 23.45-34.9 51.65-52.4 84.5-52.4 33.4 0 61.8 17.5 85.3 52.4s35.2 77 35.2 126-11.75 91-35.2 125.9c-23.45 34.9-51.9 52.4-85.3 52.4-32.85 0-61-17.5-84.5-52.4s-35.2-77-35.2-126zm-503.15 0c0-49 11.8-91 35.25-125.9 23.45-34.9 51.9-52.4 85.3-52.4 33.5 0 61.75 17.35 85 52s34.75 76.85 34.75 126.4c0 49.55-11.6 91.65-34.8 126.35-23.2 34.7-51.5 52-85 52-33.35 0-61.75-17.5-85.25-52.4s-35.2-77-35.2-126l-.05-.05zm-227.65-13.3c0 44.85 5.6 84.65 16.8 119.3 11.2 34.65 25.5 63.8 43 87.3s41.8 43.5 72.8 59.85 61.3 29.1 90.75 38c29.5 8.8 67.3 15.75 113.5 20.7 46.2 4.95 87.3 8 123.5 9 36.3 1 82.35 1.5 138.15 1.5 55.8 0 101.85-.5 138.1-1.5s77.5-4 123.6-9c46.1-5 84-11.85 113.5-20.75 29.4-8.85 59.65-21.5 90.7-38 31.05-16.5 55.3-36.35 72.75-59.8 17.45-23.45 31.85-52.5 43.1-87.25 11.2-34.65 16.8-74.4 16.8-119.25 0-76.15-34.15-145-102.5-206.5-20.35-18.85-44-33-71.2-42.7-27.2-9.7-57.75-15-92-16.4-34.1-1.3-66.85-1-98.15.8-31.3 1.8-69.85 4.3-115.75 7.5-45.9 3.1-85.5 4.65-118.9 4.65-33.4 0-73-1.5-118.9-4.65-46-3.15-84.5-5.6-115.85-7.5-31.35-1.9-64-2-98.2-.75-34.2 1.3-64.85 6.8-92 16.5-27.15 9.7-50.85 23.8-71.2 42.6-68.35 62.6-102.5 131.5-102.5 206.5l.1-.15zM162 979.924c0-129.35 43.3-241.25 129.9-335.65-4.7-12.5-9-26.75-12.9-42.65-3.9-15.9-7.5-38.6-11-68s-2-63.5 4-102.15c6-38.65 17-78 33.2-118.2 3.15-1 7.5-2 12.9-2.75s18.65-.1 39.5 2 43.3 6.65 67.3 13.7c24 7.05 56.2 20.6 96.65 40.7s82.85 45.25 127.2 75.5c76.15-20.85 180.5-31.3 313-31.3 133 0 237.5 10.5 313.7 31.3 44.35-30.25 86.5-55.4 126.35-75.5 39.85-20.1 72.5-33.65 97.8-40.7 25.35-7 47.5-11.75 66.5-14.1 19-2.35 32.8-2.75 41.15-1.2l11.75 2.35c16.15 40.15 27.25 79.5 33.25 118.15 6 38.65 7.3 72.65 3.9 102.1-3.4 29.45-7 52.15-10.9 68-3.9 15.85-8.2 30.15-12.9 42.7 86.45 94.4 129.65 206.3 129.65 335.65 0 72.5-6.75 138.1-20.3 196.75-13.55 58.65-32.5 109.65-56.7 153-24.2 43.35-55 81.3-92.3 114.2-37.3 32.85-77.7 59.7-121.25 80.6-43.55 20.9-93.3 37.8-149.1 50.85-55.8 13.05-112.65 22.15-170.5 27.4-63.75 5.45-127.75 8.05-191.75 7.8-69.35 0-133-2.65-190.9-7.85-57.9-5.2-114.6-14.35-170.15-27.4-55.5-13-105-30-148.25-50.85s-83.5-47.7-120.5-80.6c-37-32.85-67.5-71-91.5-114.25s-42.8-94.2-56.4-152.85c-13.55-58.75-20.4-124.3-20.4-196.8v.05z",stroke:"none",strokeWidth:"1",fillRule:"evenodd"}))}}]),t}(a.Component);t["default"]=d}})});