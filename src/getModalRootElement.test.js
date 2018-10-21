import getModalRootElement from './getModalRootElement'

describe('getModalRootElement', function () {
  it('should return body by default', function () {
    expect(getModalRootElement()).toBe(document.body)
  })

  describe('passing input', function () {
    let mockElement

    beforeEach(function () {
      mockElement = document.createElement('div')
    })

    describe('as HTMLElement', function () {
      it('should return passed input', function () {
        expect(getModalRootElement(mockElement)).toBe(mockElement)
      })
    })

    describe('as string', function () {
      it('should look for id', function () {
        const mockElementId = 'mock-element'
        mockElement.id = mockElementId
        document.body.appendChild(mockElement)

        expect(getModalRootElement(mockElementId)).toBe(mockElement)
      })

      it('should look for using querySelector', function () {
        const mockElementId = 'mock-element'
        mockElement.id = mockElementId
        document.body.appendChild(mockElement)

        expect(getModalRootElement(`#${mockElementId}`)).toEqual(mockElement)
      })
    })

    describe('that not exists', () => {
      it('should return body', () => {
        expect(getModalRootElement('foo')).toBe(document.body)
      })
    })
  })
})
