import React from 'react'
import PropTypes from 'prop-types'
import ModalController from './ModalController'
import ModalPortal from './ModalPortal'
import DefaultContentWrapper from './DefaultContentWrapper'
import DefaultModalContainer from './DefaultModalContainer'
import DefaultModalComponent from './DefaultModalComponent'

function getModalRootElement (input) {
  if (input instanceof HTMLElement) {
    return input
  }

  if (typeof input === 'string') {
    let modalRoot = document.body.querySelector(input)

    if (!modalRoot) {
      modalRoot = document.body.getElementById(input)
    }
  }

  return document.body
}

function defaultOnClose () {
  document.body.style.overflow = 'initial'
}

function defaultOnOpen () {
  document.body.style.overflow = 'hidden'
}

function ModalProvider ({
  children,
  modalRoot,
  ContentWrapper = DefaultContentWrapper, // eslint-disable-line react/prop-types
  ModalComponent = DefaultModalComponent,
  ModalContainer = DefaultModalContainer,
  onClose = defaultOnClose,
  onOpen = defaultOnOpen
} = {}) {
  const modalRootElement = getModalRootElement(modalRoot)

  return (
    <ModalController ModalComponent={ModalComponent}>
      {({ ContentComponent, openModal, closeModal }) => {
        if (!ContentComponent) {
          return (
            <>
              <ContentWrapper isOpen={false}>
                {children({ openModal, closeModal })}
              </ContentWrapper>
            </>
          )
        }

        return (
          <>
            <ContentWrapper isOpen>
              {children({ openModal, closeModal })}
            </ContentWrapper>

            <ModalPortal modalRoot={modalRootElement} onOpen={onOpen} onClose={onClose}>
              <ModalContainer>
                <ContentComponent />
              </ModalContainer>
            </ModalPortal>
          </>
        )
      }}
    </ModalController>
  )
}

/* eslint-disable react/no-unused-prop-types */
ModalProvider.propTypes = {
  children: PropTypes.func.isRequired,
  ContentWrapper: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
  ModalComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
  ModalContainer: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
  modalRoot: PropTypes.oneOfType([PropTypes.instanceOf(HTMLElement), PropTypes.string]),
  onClose: PropTypes.func,
  onOpen: PropTypes.func
}
/* eslint-enable */

export default ModalProvider
