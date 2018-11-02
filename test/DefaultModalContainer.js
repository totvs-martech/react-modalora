(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.DefaultModalContainer = mod.exports;
  }
})(this, function (_exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, .2)',
    bottom: 0,
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
    transform: 'translate3d(0px, -1px, 0px)'
  };

  const Overlay = () => _react.default.createElement("div", {
    style: overlayStyle
  });

  const containerStyle = {
    alignItems: 'flex-start',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    left: 0,
    maxHeight: '100vh',
    maxWidth: '100vw',
    overflow: 'auto',
    position: 'fixed',
    right: 0,
    top: 0
  };

  const DefaultModalContainer = ({
    children
  }) => _react.default.createElement("div", {
    style: containerStyle
  }, _react.default.createElement(Overlay, null), children);

  DefaultModalContainer.displayName = 'DefaultModalContainer';
  var _default = DefaultModalContainer;
  _exports.default = _default;
});
//# sourceMappingURL=DefaultModalContainer.js.map