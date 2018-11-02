(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./getModalRootElement"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./getModalRootElement"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.getModalRootElement);
    global.getModalRootElementTest = mod.exports;
  }
})(this, function (_getModalRootElement) {
  "use strict";

  _getModalRootElement = _interopRequireDefault(_getModalRootElement);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  describe('getModalRootElement', function () {
    it('should return body by default', function () {
      expect((0, _getModalRootElement.default)()).toBe(document.body);
    });
    describe('passing input', function () {
      let mockElement;
      beforeEach(function () {
        mockElement = document.createElement('div');
      });
      describe('as HTMLElement', function () {
        it('should return passed input', function () {
          expect((0, _getModalRootElement.default)(mockElement)).toBe(mockElement);
        });
      });
      describe('as string', function () {
        it('should look for id', function () {
          const mockElementId = 'mock-element';
          mockElement.id = mockElementId;
          document.body.appendChild(mockElement);
          expect((0, _getModalRootElement.default)(mockElementId)).toBe(mockElement);
        });
        it('should look for using querySelector', function () {
          const mockElementId = 'mock-element';
          mockElement.id = mockElementId;
          document.body.appendChild(mockElement);
          expect((0, _getModalRootElement.default)(`#${mockElementId}`)).toEqual(mockElement);
        });
      });
      describe('that not exists', () => {
        it('should return body', () => {
          expect((0, _getModalRootElement.default)('foo')).toBe(document.body);
        });
      });
    });
  });
});
//# sourceMappingURL=getModalRootElement.test.js.map