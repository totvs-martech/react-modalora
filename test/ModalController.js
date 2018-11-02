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
    global.ModalController = mod.exports;
  }
})(this, function (_exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class ModalController extends _react.PureComponent {
    constructor(props) {
      super(props);

      _defineProperty(this, "closeModal", () => this.setState(state => ({
        ContentComponent: undefined
      })));

      _defineProperty(this, "openModal", (_ContentComponent2, ModalComponent = this.props.ModalComponent) => this.setState(state => _objectSpread({}, state, {
        ContentComponent: () => _react.default.createElement(ModalComponent, null, _react.default.createElement(_ContentComponent2, null))
      })));

      const _ContentComponent = props.ContentComponent,
            _ModalComponent = props.ModalComponent;
      this.state = {
        ContentComponent: !_ContentComponent ? null : () => _react.default.createElement(_ModalComponent, null, _react.default.createElement(_ContentComponent, null))
      };
    }

    render() {
      const openModal = this.openModal,
            closeModal = this.closeModal;
      const children = this.props.children;
      const ContentComponent = this.state.ContentComponent;
      return children({
        ContentComponent,
        openModal,
        closeModal
      });
    }

  }

  var _default = ModalController;
  _exports.default = _default;
});
//# sourceMappingURL=ModalController.js.map