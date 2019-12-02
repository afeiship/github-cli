!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("classnames"),require("@feizheng/noop"),require("react-dom"),require("object-assign")):"function"==typeof define&&define.amd?define(["react","prop-types","classnames","@feizheng/noop","react-dom","object-assign"],t):"object"==typeof exports?exports.ReactRemovableList=t(require("react"),require("prop-types"),require("classnames"),require("@feizheng/noop"),require("react-dom"),require("object-assign")):e.ReactRemovableList=t(e.react,e["prop-types"],e.classnames,e["@feizheng/noop"],e["react-dom"],e["object-assign"])}(window,(function(e,t,n,r,o,a){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=(n(4),n(1)),u=n.n(a),i=n(2),c=n.n(i),l=n(3),f=n.n(l);n(5);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&v(e.prototype,t),n&&v(e,n),e}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h="react-removable-list",O=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=b(this,m(t).call(this,e))).onRemove=function(e){var t=e.index,r=n.props.onChange,o=n.state.value,a={value:o};o.splice(t,1),n.setState(a,(function(){r({target:a})}))},n.state={value:e.value},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),d(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.value;return n!==t.value?{value:n}:null}}]),d(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=(e.value,e.template,y(e,["className","value","template"]));return o.a.createElement("div",p({"data-component":h,className:c()(h,t)},n),this.childView)}},{key:"childView",get:function(){var e=this,t=this.props.template;return this.state.value.map((function(n,r){var o={item:n,index:r},a=e.onRemove.bind(e,o);return t(o,a)}))}}]),t}(r.Component);O.displayName=h,O.propTypes={className:u.a.string,value:u.a.array,template:u.a.func,onChange:u.a.func},O.defaultProps={value:[],template:function(e,t){var n=e.item;return o.a.createElement("div",{className:"is-item",key:n.value,value:n.value},n.label,o.a.createElement("button",{onClick:t,className:"is-action"},"REMOVE"))},onChange:f.a};t.default=O}])}));