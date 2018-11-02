(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./ModalProvider"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./ModalProvider"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.ModalProvider);
    global.createModalProvider = mod.exports;
  }
})(this, function (_exports, _react, _ModalProvider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _ModalProvider = _interopRequireDefault(_ModalProvider);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  const createModalProvider = (_ref = {}) => {
    let _ref$ModalProvider = _ref.ModalProvider,
        ModalProvider = _ref$ModalProvider === void 0 ? _ModalProvider.default : _ref$ModalProvider,
        opts = _objectWithoutProperties(_ref, ["ModalProvider"]);

    return (_ref2) => {
      let children = _ref2.children,
          props = _objectWithoutProperties(_ref2, ["children"]);

      return _react.default.createElement(ModalProvider, _extends({}, opts, props), children);
    };
  };

  var _default = createModalProvider;
  _exports.default = _default;
});
//# sourceMappingURL=createModalProvider.js.map