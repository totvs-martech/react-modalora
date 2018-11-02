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
    global.DefaultModalComponent = mod.exports;
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

  const defaultModalComponentStyle = {
    backgroundColor: '#fff',
    margin: '3rem auto',
    maxWidth: '100vw',
    padding: '1.5rem',
    transform: 'translate3d(0px, 1px, 0px)',
    width: '80rem'
  };

  const DefaultModalComponent = ({
    children
  }) => _react.default.createElement("div", {
    role: "dialog",
    style: defaultModalComponentStyle
  }, children);

  DefaultModalComponent.displayName = 'DefaultModalComponent';
  var _default = DefaultModalComponent;
  _exports.default = _default;
});
//# sourceMappingURL=DefaultModalComponent.js.map