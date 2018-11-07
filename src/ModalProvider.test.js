/* eslint-disable react/prop-types */
import React from 'react'
import { fireEvent, render } from 'react-testing-library'
import ModalProvider from './ModalProvider'

describe('ModalProvider', function () {
  describe('basic usage', function () {
    it('should match snapshot', function () {
      render(
        <ModalProvider>
          {() => (
            <>
              Modal content
            </>
          )}
        </ModalProvider>
      )

      expect(document.body.innerHTML).toMatchSnapshot()
    })
  })

  describe('providing content', function () {
    it('should render snapshot', function () {
      const MockContent = () => <>content</>

      render(
        <ModalProvider content={MockContent}>
          {() => (
            <>
              Modal content
            </>
          )}
        </ModalProvider>
      )

      expect(document.body.innerHTML).toMatchSnapshot()
    })
  })

  describe('calling openModal', function () {
    it('should render snapshots', function () {
      const MockContent = () => <>content</>
      let openModalRef

      render(
        <ModalProvider>
          {({ openModal }) => {
            openModalRef = openModal

            return (
              <>
                Modal content
              </>
            )
          }}
        </ModalProvider>
      )

      expect(document.body.innerHTML).toMatchSnapshot('before openModal')

      openModalRef(MockContent)
      expect(document.body.innerHTML).toMatchSnapshot('after openModal')
    })

    it('should set body.style.overflow=hidden', () => {
      const MockContent = () => <>content</>
      let openModalRef

      render(
        <ModalProvider>
          {({ openModal }) => {
            openModalRef = openModal

            return (
              <>
                Modal content
              </>
            )
          }}
        </ModalProvider>
      )

      expect(document.body.style.overflow).not.toBe('hidden')

      openModalRef(MockContent)
      expect(document.body.style.overflow).toBe('hidden')
    })
  })

  describe('calling closeModal', function () {
    it('should render snapshots', function () {
      const MockContent = () => <>content</>
      let closeModalRef

      render(
        <ModalProvider content={MockContent}>
          {({ closeModal }) => {
            closeModalRef = closeModal

            return (
              <>
                Modal content
              </>
            )
          }}
        </ModalProvider>
      )

      expect(document.body.innerHTML).toMatchSnapshot('before closeModal')

      closeModalRef()
      expect(document.body.innerHTML).toMatchSnapshot('after closeModal')
    })

    it('should unset body.style.overflow=hidden', function () {
      const MockContent = () => <>content</>
      let closeModalRef

      render(
        <ModalProvider content={MockContent}>
          {({ closeModal }) => {
            closeModalRef = closeModal

            return (
              <>
                Modal content
              </>
            )
          }}
        </ModalProvider>
      )

      expect(document.body.style.overflow).toBe('hidden')

      closeModalRef()
      expect(document.body.style.overflow).not.toBe('hidden')
    })
  })

  describe('passing closeOnOverlayClick=true', function () {
    it('should render snapshots', function () {
      const MockContent = () => <>content</>

      const { getByTestId } = render(
        <ModalProvider closeOnOverlayClick content={MockContent}>
          {() => (
            <>
              Modal content
            </>
          )}
        </ModalProvider>
      )

      expect(document.body.innerHTML).toMatchSnapshot('before click overlay')

      fireEvent.click(getByTestId('overlay'))

      expect(document.body.innerHTML).toMatchSnapshot('after click overlay')
    })
  })

  describe('passing custom', function () {
    describe('ContentWrapper', function () {
      it('should match snapshots', () => {
        const MockContentWrapper = ({ children, isOpen }) => <div data-isopen={isOpen}>{children}</div>
        const MockContent = () => <>content</>
        let openModalRef

        render(
          <ModalProvider ContentWrapper={MockContentWrapper}>
            {({ openModal }) => {
              openModalRef = openModal

              return (
                <>
                  Modal content
                </>
              )
            }}
          </ModalProvider>
        )

        expect(document.body.innerHTML).toMatchSnapshot('with isOpen=false')

        openModalRef(MockContent)
        expect(document.body.innerHTML).toMatchSnapshot('with isOpen=true')
      })
    })

    describe('ModalContainer', function () {
      it('should match snapshot', function () {
        const MockModalContainer = ({ children }) => <div data-testid='modal-container'>{children}</div>
        const MockContent = () => <>content</>

        render(
          <ModalProvider ModalContainer={MockModalContainer} content={MockContent}>
            {({ openModal }) => (
              <>
                Modal content
              </>
            )}
          </ModalProvider>
        )

        expect(document.body.innerHTML).toMatchSnapshot()
      })
    })

    describe('ModalComponent', function () {
      it('should match snapshot', function () {
        const MockModalComponent = ({ children }) => <div data-testid='modal-component'>{children}</div>
        const MockContent = () => <>content</>

        render(
          <ModalProvider ModalComponent={MockModalComponent} content={MockContent}>
            {({ openModal }) => (
              <>
                Modal content
              </>
            )}
          </ModalProvider>
        )

        expect(document.body.innerHTML).toMatchSnapshot()
      })
    })

    describe('modalRoot', function () {
      it('should pass modalRoot to getModalRootElement', () => {
        const mockGetModalRootElement = jest.fn(() => document.body)
        const mockModalRoot = 'modal-root'

        render(
          <ModalProvider getModalRootElement={mockGetModalRootElement} modalRoot={mockModalRoot}>
            {({ openModal }) => (
              <>
                Modal content
              </>
            )}
          </ModalProvider>
        )

        expect(mockGetModalRootElement).toHaveBeenCalledWith(mockModalRoot)
      })
    })

    describe('onOpen', () => {
      it('should be called passing content', () => {
        const mockOnOpen = jest.fn()
        const MockContent = () => <>content</>

        render(
          <ModalProvider onOpen={mockOnOpen} content={MockContent}>
            {() => (
              <>
                Modal content
              </>
            )}
          </ModalProvider>
        )

        expect(mockOnOpen).toHaveBeenCalled()
      })

      it('should be called on calling openModal', () => {
        const mockOnOpen = jest.fn()
        const MockContent = () => <>content</>
        let openModalRef

        render(
          <ModalProvider onOpen={mockOnOpen}>
            {({ openModal }) => {
              openModalRef = openModal

              return (
                <>
                  Modal content
                </>
              )
            }}
          </ModalProvider>
        )

        expect(mockOnOpen).not.toHaveBeenCalled()
        openModalRef(MockContent)
        expect(mockOnOpen).toHaveBeenCalled()
      })
    })

    describe('onClose', () => {
      it('should be called', () => {
        const mockOnClose = jest.fn()
        const MockContent = () => <>content</>
        let closeModalRef

        render(
          <ModalProvider onClose={mockOnClose} content={MockContent}>
            {({ closeModal }) => {
              closeModalRef = closeModal

              return (
                <>
                  Modal content
                </>
              )
            }}
          </ModalProvider>
        )

        expect(mockOnClose).not.toHaveBeenCalled()
        closeModalRef()
        expect(mockOnClose).toHaveBeenCalled()
      })
    })
  })
})
