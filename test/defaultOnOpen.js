(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.defaultOnOpen = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function defaultOnOpen(bodyStyle = document.body.style) {
    bodyStyle.overflow = 'hidden';
  }

  var _default = defaultOnOpen;
  _exports.default = _default;
});
//# sourceMappingURL=defaultOnOpen.js.map