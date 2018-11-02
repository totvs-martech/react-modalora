(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "react-testing-library", "./ModalProvider"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("react-testing-library"), require("./ModalProvider"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.reactTestingLibrary, global.ModalProvider);
    global.ModalProviderTest = mod.exports;
  }
})(this, function (_react, _reactTestingLibrary, _ModalProvider) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _ModalProvider = _interopRequireDefault(_ModalProvider);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /* eslint-disable react/prop-types */
  describe('ModalProvider', function () {
    describe('basic usage', function () {
      it('should match snapshot', function () {
        (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, null, () => _react.default.createElement(_react.default.Fragment, null, "Modal content")));
        expect(document.body.innerHTML).toMatchSnapshot();
      });
    });
    describe('providing content', function () {
      it('should render snapshot', function () {
        const MockContent = () => _react.default.createElement(_react.default.Fragment, null, "content");

        (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, {
          content: MockContent
        }, () => _react.default.createElement(_react.default.Fragment, null, "Modal content")));
        expect(document.body.innerHTML).toMatchSnapshot();
      });
    });
    describe('calling openModal', function () {
      it('should render snapshots', function () {
        const MockContent = () => _react.default.createElement(_react.default.Fragment, null, "content");

        let openModalRef;
        (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, null, ({
          openModal
        }) => {
          openModalRef = openModal;
          return _react.default.createElement(_react.default.Fragment, null, "Modal content");
        }));
        expect(document.body.innerHTML).toMatchSnapshot('before openModal');
        openModalRef(MockContent);
        expect(document.body.innerHTML).toMatchSnapshot('after openModal');
      });
      it('should set body.style.overflow=hidden', () => {
        const MockContent = () => _react.default.createElement(_react.default.Fragment, null, "content");

        let openModalRef;
        (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, null, ({
          openModal
        }) => {
          openModalRef = openModal;
          return _react.default.createElement(_react.default.Fragment, null, "Modal content");
        }));
        expect(document.body.style.overflow).not.toBe('hidden');
        openModalRef(MockContent);
        expect(document.body.style.overflow).toBe('hidden');
      });
    });
    describe('calling closeModal', function () {
      it('should render snapshots', function () {
        const MockContent = () => _react.default.createElement(_react.default.Fragment, null, "content");

        let closeModalRef;
        (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, {
          content: MockContent
        }, ({
          closeModal
        }) => {
          closeModalRef = closeModal;
          return _react.default.createElement(_react.default.Fragment, null, "Modal content");
        }));
        expect(document.body.innerHTML).toMatchSnapshot('before closeModal');
        closeModalRef();
        expect(document.body.innerHTML).toMatchSnapshot('after closeModal');
      });
      it('should unset body.style.overflow=hidden', function () {
        const MockContent = () => _react.default.createElement(_react.default.Fragment, null, "content");

        let closeModalRef;
        (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, {
          content: MockContent
        }, ({
          closeModal
        }) => {
          closeModalRef = closeModal;
          return _react.default.createElement(_react.default.Fragment, null, "Modal content");
        }));
        expect(document.body.style.overflow).toBe('hidden');
        closeModalRef();
        expect(document.body.style.overflow).not.toBe('hidden');
      });
    });
    describe('passing custom', function () {
      describe('ContentWrapper', function () {
        it('should match snapshots', () => {
          const MockContentWrapper = ({
            children,
            isOpen
          }) => _react.default.createElement("div", {
            "data-isopen": isOpen
          }, children);

          const MockContent = () => _react.default.createElement(_react.default.Fragment, null, "content");

          let openModalRef;
          (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, {
            ContentWrapper: MockContentWrapper
          }, ({
            openModal
          }) => {
            openModalRef = openModal;
            return _react.default.createElement(_react.default.Fragment, null, "Modal content");
          }));
          expect(document.body.innerHTML).toMatchSnapshot('with isOpen=false');
          openModalRef(MockContent);
          expect(document.body.innerHTML).toMatchSnapshot('with isOpen=true');
        });
      });
      describe('ModalContainer', function () {
        it('should match snapshot', function () {
          const MockModalContainer = ({
            children
          }) => _react.default.createElement("div", {
            "data-testid": "modal-container"
          }, children);

          const MockContent = () => _react.default.createElement(_react.default.Fragment, null, "content");

          (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, {
            ModalContainer: MockModalContainer,
            content: MockContent
          }, ({
            openModal
          }) => _react.default.createElement(_react.default.Fragment, null, "Modal content")));
          expect(document.body.innerHTML).toMatchSnapshot();
        });
      });
      describe('ModalComponent', function () {
        it('should match snapshot', function () {
          const MockModalComponent = ({
            children
          }) => _react.default.createElement("div", {
            "data-testid": "modal-component"
          }, children);

          const MockContent = () => _react.default.createElement(_react.default.Fragment, null, "content");

          (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, {
            ModalComponent: MockModalComponent,
            content: MockContent
          }, ({
            openModal
          }) => _react.default.createElement(_react.default.Fragment, null, "Modal content")));
          expect(document.body.innerHTML).toMatchSnapshot();
        });
      });
      describe('modalRoot', function () {
        it('should pass modalRoot to getModalRootElement', () => {
          const mockGetModalRootElement = jest.fn(() => document.body);
          const mockModalRoot = 'modal-root';
          (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, {
            getModalRootElement: mockGetModalRootElement,
            modalRoot: mockModalRoot
          }, ({
            openModal
          }) => _react.default.createElement(_react.default.Fragment, null, "Modal content")));
          expect(mockGetModalRootElement).toHaveBeenCalledWith(mockModalRoot);
        });
      });
      describe('onOpen', () => {
        it('should be called passing content', () => {
          const mockOnOpen = jest.fn();

          const MockContent = () => _react.default.createElement(_react.default.Fragment, null, "content");

          (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, {
            onOpen: mockOnOpen,
            content: MockContent
          }, () => _react.default.createElement(_react.default.Fragment, null, "Modal content")));
          expect(mockOnOpen).toHaveBeenCalled();
        });
        it('should be called on calling openModal', () => {
          const mockOnOpen = jest.fn();

          const MockContent = () => _react.default.createElement(_react.default.Fragment, null, "content");

          let openModalRef;
          (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, {
            onOpen: mockOnOpen
          }, ({
            openModal
          }) => {
            openModalRef = openModal;
            return _react.default.createElement(_react.default.Fragment, null, "Modal content");
          }));
          expect(mockOnOpen).not.toHaveBeenCalled();
          openModalRef(MockContent);
          expect(mockOnOpen).toHaveBeenCalled();
        });
      });
      describe('onClose', () => {
        it('should be called', () => {
          const mockOnClose = jest.fn();

          const MockContent = () => _react.default.createElement(_react.default.Fragment, null, "content");

          let closeModalRef;
          (0, _reactTestingLibrary.render)(_react.default.createElement(_ModalProvider.default, {
            onClose: mockOnClose,
            content: MockContent
          }, ({
            closeModal
          }) => {
            closeModalRef = closeModal;
            return _react.default.createElement(_react.default.Fragment, null, "Modal content");
          }));
          expect(mockOnClose).not.toHaveBeenCalled();
          closeModalRef();
          expect(mockOnClose).toHaveBeenCalled();
        });
      });
    });
  });
});
//# sourceMappingURL=ModalProvider.test.js.map