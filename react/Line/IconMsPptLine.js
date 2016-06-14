!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.InstructureIconsLine=t(require("react")):e.InstructureIconsLine=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}({0:function(e,t,r){e.exports=r(116)},1:function(e,t,r){"use strict";function n(){p=!1}function o(e){if(!e)return void(l!==d&&(l=d,n()));if(e!==l){if(e.length!==d.length)throw new Error("Custom alphabet for shortid must be "+d.length+" unique characters. You submitted "+e.length+" characters: "+e);var t=e.split("").filter(function(e,t,r){return t!==r.lastIndexOf(e)});if(t.length)throw new Error("Custom alphabet for shortid must be "+d.length+" unique characters. These characters were not unique: "+t.join(", "));l=e,n()}}function i(e){return o(e),l}function u(e){h.seed(e),f!==e&&(n(),f=e)}function s(){l||o(d);for(var e,t=l.split(""),r=[],n=h.nextValue();t.length>0;)n=h.nextValue(),e=Math.floor(n*t.length),r.push(t.splice(e,1)[0]);return r.join("")}function c(){return p?p:p=s()}function a(e){var t=c();return t[e]}var l,f,p,h=r(10),d="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";e.exports={characters:i,seed:u,lookup:a,shuffled:c}},2:function(t,r){t.exports=e},3:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(2),a=n(c),l=r(4),f=n(l),p=function(e){function t(e){o(this,t);var r=i(this,Object.getPrototypeOf(t).call(this));return r.titleId=e.name+"__"+f["default"].generate(),r.descId=e.name+"__"+f["default"].generate(),r}return u(t,e),s(t,[{key:"renderTitle",value:function(){var e=this.props.title;return e?a["default"].createElement("title",{id:this.titleId},e):null}},{key:"renderDesc",value:function(){var e=this.props.desc;return e?a["default"].createElement("desc",{id:this.descId},e):null}},{key:"render",value:function(){var e=this.props,t=e.title,r=e.width,n=e.height,o=e.viewBox,i={fill:"currentColor"};return a["default"].createElement("svg",{style:i,width:r,height:n,viewBox:o,"aria-hidden":t?null:"true","aria-labelledby":this.labelledBy,role:this.role},this.renderTitle(),this.renderDesc(),a["default"].createElement("g",{role:"presentation"},this.props.children))}},{key:"role",get:function(){return this.props.title?"img":"presentation"}},{key:"labelledBy",get:function(){var e=[];return this.props.title&&e.push(this.titleId),this.props.desc&&e.push(this.descId),e.length>0?e.join(" "):null}}]),t}(c.Component);p.propTypes={name:c.PropTypes.string.isRequired,children:c.PropTypes.node.isRequired,viewBox:c.PropTypes.string.isRequired,title:c.PropTypes.string,desc:c.PropTypes.string,width:c.PropTypes.string,height:c.PropTypes.string},p.defaultProps={width:"1em",height:"1em"},t["default"]=p},4:function(e,t,r){"use strict";e.exports=r(7)},5:function(e,t,r){"use strict";function n(e){var t=o.shuffled();return{version:15&t.indexOf(e.substr(0,1)),worker:15&t.indexOf(e.substr(1,1))}}var o=r(1);e.exports=n},6:function(e,t,r){"use strict";function n(e,t){for(var r,n=0,i="";!r;)i+=e(t>>4*n&15|o()),r=t<Math.pow(16,n+1),n++;return i}var o=r(9);e.exports=n},7:function(e,t,r){"use strict";function n(){var e="",t=Math.floor(.001*(Date.now()-h));return t===c?s++:(s=0,c=t),e+=l(a.lookup,d),e+=l(a.lookup,v),s>0&&(e+=l(a.lookup,s)),e+=l(a.lookup,t)}function o(t){return a.seed(t),e.exports}function i(t){return v=t,e.exports}function u(e){return void 0!==e&&a.characters(e),a.shuffled()}var s,c,a=r(1),l=r(6),f=r(5),p=r(8),h=1459707606518,d=6,v=r(11)||0;e.exports=n,e.exports.generate=n,e.exports.seed=o,e.exports.worker=i,e.exports.characters=u,e.exports.decode=f,e.exports.isValid=p},8:function(e,t,r){"use strict";function n(e){if(!e||"string"!=typeof e||e.length<6)return!1;for(var t=o.characters(),r=e.length,n=0;r>n;n++)if(-1===t.indexOf(e[n]))return!1;return!0}var o=r(1);e.exports=n},9:function(e,t){"use strict";function r(){if(!n||!n.getRandomValues)return 48&Math.floor(256*Math.random());var e=new Uint8Array(1);return n.getRandomValues(e),48&e[0]}var n="object"==typeof window&&(window.crypto||window.msCrypto);e.exports=r},10:function(e,t){"use strict";function r(){return o=(9301*o+49297)%233280,o/233280}function n(e){o=e}var o=1;e.exports={nextValue:r,seed:n}},11:function(e,t){"use strict";e.exports=0},116:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(2),l=n(a),f=r(3),p=n(f),h=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return l["default"].createElement(p["default"],s({},this.props,{name:"IconMsPptLine",viewBox:"0 0 1920 1920"}),l["default"].createElement("g",{stroke:"none",strokeWidth:"1",fillRule:"evenodd"},l["default"].createElement("path",{d:"M453.2 307.91h724v289.817h289.6v72.455h144.8V495.277L1279.574 163H453.2c-79.857 0-144.8 65.064-144.8 144.91v362.272h144.8V307.909zM1466.8 1612.09H453.2v-72.454H308.4v72.455c0 79.917 64.943 144.909 144.8 144.909h1013.6c79.857 0 144.8-64.992 144.8-144.91v-72.454h-144.8v72.455zM1249.6 815.09V960h144.8v434.727h144.8V960H1684V815.09zM380.8 960h72.4c39.892 0 72.4 32.46 72.4 72.455 0 39.994-32.508 72.454-72.4 72.454h-72.4V960zm0 289.818h72.4c119.75 0 217.2-97.524 217.2-217.363 0-119.84-97.45-217.364-217.2-217.364H236v579.636h144.8v-144.909zM1032.4 1032.455c0 39.994-32.508 72.454-72.4 72.454h-72.4V960H960c39.892 0 72.4 32.46 72.4 72.455zM742.8 815.09v579.636h144.8v-144.909H960c119.75 0 217.2-97.524 217.2-217.363 0-119.84-97.45-217.364-217.2-217.364H742.8z"})))}}]),t}(a.Component);t["default"]=h}})});