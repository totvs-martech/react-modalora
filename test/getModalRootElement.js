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
    global.getModalRootElement = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function getModalRootElement(input, {
    document,
    HTMLElement
  } = window) {
    if (input instanceof HTMLElement) {
      return input;
    }

    if (typeof input === 'string') {
      let modalRoot = document.body.querySelector(input);

      if (!modalRoot) {
        modalRoot = document.getElementById(input);
      }

      if (modalRoot) {
        return modalRoot;
      }
    }

    return document.body;
  }

  var _default = getModalRootElement;
  _exports.default = _default;
});
//# sourceMappingURL=getModalRootElement.js.map