(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./ModalProvider", "./createModalProvider"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./ModalProvider"), require("./createModalProvider"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ModalProvider, global.createModalProvider);
    global.index = mod.exports;
  }
})(this, function (_exports, _ModalProvider, _createModalProvider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _ModalProvider.default;
    }
  });
  Object.defineProperty(_exports, "ContentWrapper", {
    enumerable: true,
    get: function get() {
      return _ModalProvider.ContentWrapper;
    }
  });
  Object.defineProperty(_exports, "ModalComponent", {
    enumerable: true,
    get: function get() {
      return _ModalProvider.ModalComponent;
    }
  });
  Object.defineProperty(_exports, "ModalContainer", {
    enumerable: true,
    get: function get() {
      return _ModalProvider.ModalContainer;
    }
  });
  Object.defineProperty(_exports, "onClose", {
    enumerable: true,
    get: function get() {
      return _ModalProvider.onClose;
    }
  });
  Object.defineProperty(_exports, "onOpen", {
    enumerable: true,
    get: function get() {
      return _ModalProvider.onOpen;
    }
  });
  Object.defineProperty(_exports, "createModalProvider", {
    enumerable: true,
    get: function get() {
      return _createModalProvider.default;
    }
  });
  _ModalProvider = _interopRequireWildcard(_ModalProvider);
  _createModalProvider = _interopRequireDefault(_createModalProvider);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
});
//# sourceMappingURL=index.js.map