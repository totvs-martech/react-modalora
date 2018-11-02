(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "react-dom", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("react-dom"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactDom, global.propTypes);
    global.ModalPortal = mod.exports;
  }
})(this, function (_exports, _react, _reactDom, _propTypes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  class ModalPortal extends _react.PureComponent {
    constructor(props) {
      super(props);
      this.el = document.createElement('div');
    }

    componentDidMount() {
      const _this$props = this.props,
            modalRoot = _this$props.modalRoot,
            onOpen = _this$props.onOpen;
      onOpen();
      modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
      const _this$props2 = this.props,
            modalRoot = _this$props2.modalRoot,
            onClose = _this$props2.onClose;
      onClose();
      modalRoot.removeChild(this.el);
    }

    render() {
      const children = this.props.children;
      return (0, _reactDom.createPortal)(children, this.el);
    }

  }

  var _default = ModalPortal;
  _exports.default = _default;
});
//# sourceMappingURL=ModalPortal.js.map