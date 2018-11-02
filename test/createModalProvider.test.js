(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "react-testing-library", "./createModalProvider"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("react-testing-library"), require("./createModalProvider"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.reactTestingLibrary, global.createModalProvider);
    global.createModalProviderTest = mod.exports;
  }
})(this, function (_react, _reactTestingLibrary, _createModalProvider) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _createModalProvider = _interopRequireDefault(_createModalProvider);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  describe('createModalProvider', function () {
    it('should create an ModalProvider and match snapshot', function () {
      const ModalProvider = (0, _createModalProvider.default)();
      (0, _reactTestingLibrary.render)(_react.default.createElement(ModalProvider, null, () => 'foo'));
      expect(document.body.innerHTML).toMatchSnapshot();
    });
    it('should pass custom props', function () {
      const content = () => 'bar';

      const ModalProvider = (0, _createModalProvider.default)({
        content
      });
      (0, _reactTestingLibrary.render)(_react.default.createElement(ModalProvider, null, () => 'foo'));
      expect(document.body.innerHTML).toMatchSnapshot();
    });
  });
});
//# sourceMappingURL=createModalProvider.test.js.map