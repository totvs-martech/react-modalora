(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./ModalController", "./ModalPortal", "./DefaultContentWrapper", "./DefaultModalContainer", "./DefaultModalComponent", "./defaultOnClose", "./defaultOnOpen", "./getModalRootElement"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./ModalController"), require("./ModalPortal"), require("./DefaultContentWrapper"), require("./DefaultModalContainer"), require("./DefaultModalComponent"), require("./defaultOnClose"), require("./defaultOnOpen"), require("./getModalRootElement"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.ModalController, global.ModalPortal, global.DefaultContentWrapper, global.DefaultModalContainer, global.DefaultModalComponent, global.defaultOnClose, global.defaultOnOpen, global.getModalRootElement);
    global.ModalProvider = mod.exports;
  }
})(this, function (_exports, _react, _propTypes, _ModalController, _ModalPortal, _DefaultContentWrapper, _DefaultModalContainer, _DefaultModalComponent, _defaultOnClose, _defaultOnOpen, _getModalRootElement) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.onOpen = _exports.onClose = _exports.ModalContainer = _exports.ModalComponent = _exports.ContentWrapper = void 0;
  _react = _interopRequireDefault(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _ModalController = _interopRequireDefault(_ModalController);
  _ModalPortal = _interopRequireDefault(_ModalPortal);
  _DefaultContentWrapper = _interopRequireDefault(_DefaultContentWrapper);
  _DefaultModalContainer = _interopRequireDefault(_DefaultModalContainer);
  _DefaultModalComponent = _interopRequireDefault(_DefaultModalComponent);
  _defaultOnClose = _interopRequireDefault(_defaultOnClose);
  _defaultOnOpen = _interopRequireDefault(_defaultOnOpen);
  _getModalRootElement = _interopRequireDefault(_getModalRootElement);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function ModalProvider({
    children,
    modalRoot,
    content,
    ContentWrapper = _DefaultContentWrapper.default,
    getModalRootElement = _getModalRootElement.default,
    ModalComponent = _DefaultModalComponent.default,
    ModalContainer = _DefaultModalContainer.default,
    onClose = _defaultOnClose.default,
    onOpen = _defaultOnOpen.default
  } = {}) {
    const modalRootElement = getModalRootElement(modalRoot);
    return _react.default.createElement(_ModalController.default, {
      ModalComponent: ModalComponent,
      ContentComponent: content
    }, ({
      ContentComponent,
      openModal,
      closeModal
    }) => {
      if (!ContentComponent) {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ContentWrapper, {
          onClick: closeModal,
          isOpen: false
        }, children({
          openModal,
          closeModal
        })));
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ContentWrapper, {
        onClick: closeModal,
        isOpen: true
      }, children({
        openModal,
        closeModal
      })), _react.default.createElement(_ModalPortal.default, {
        modalRoot: modalRootElement,
        onOpen: onOpen,
        onClose: onClose
      }, _react.default.createElement(ModalContainer, null, _react.default.createElement(ContentComponent, null))));
    });
  }
  /* eslint-disable react/no-unused-prop-types */


  const ContentWrapper = _DefaultContentWrapper.default;
  _exports.ContentWrapper = ContentWrapper;
  const ModalComponent = _DefaultModalComponent.default;
  _exports.ModalComponent = ModalComponent;
  const ModalContainer = _DefaultModalContainer.default;
  _exports.ModalContainer = ModalContainer;
  const onClose = _defaultOnClose.default;
  _exports.onClose = onClose;
  const onOpen = _defaultOnOpen.default;
  _exports.onOpen = onOpen;
  var _default = ModalProvider;
  _exports.default = _default;
});
//# sourceMappingURL=ModalProvider.js.map