import React from 'react'
import PropTypes from 'prop-types'
import ModalController from './ModalController'
import ModalPortal from './ModalPortal'
import DefaultContentWrapper from './DefaultContentWrapper'
import DefaultModalContainer from './DefaultModalContainer'
import DefaultModalComponent from './DefaultModalComponent'
import defaultOnClose from './defaultOnClose'
import defaultOnOpen from './defaultOnOpen'
import getModalRootElement from './getModalRootElement'

function ModalProvider ({
  children,
  modalRoot,
  ContentWrapper = DefaultContentWrapper,
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
