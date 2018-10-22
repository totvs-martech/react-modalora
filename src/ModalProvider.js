import React from 'react'
import PropTypes from 'prop-types'
import ModalController from './ModalController'
import ModalPortal from './ModalPortal'
import DefaultContentWrapper from './DefaultContentWrapper'
import DefaultModalContainer from './DefaultModalContainer'
import DefaultModalComponent from './DefaultModalComponent'
import defaultOnClose from './defaultOnClose'
import defaultOnOpen from './defaultOnOpen'
import getModalRootElementOriginal from './getModalRootElement'

function ModalProvider ({
  children,
  modalRoot,
  content,
  ContentWrapper = DefaultContentWrapper,
  getModalRootElement = getModalRootElementOriginal,
  ModalComponent = DefaultModalComponent,
  ModalContainer = DefaultModalContainer,
  onClose = defaultOnClose,
  onOpen = defaultOnOpen
} = {}) {
  const modalRootElement = getModalRootElement(modalRoot)

  return (
    <ModalController ModalComponent={ModalComponent} ContentComponent={content}>
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
  content: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
  ContentWrapper: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
  getModalRootElement: PropTypes.func,
  ModalComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
  ModalContainer: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
  modalRoot: PropTypes.oneOfType([PropTypes.instanceOf(HTMLElement), PropTypes.string]),
  onClose: PropTypes.func,
  onOpen: PropTypes.func
}
/* eslint-enable */

export const ContentWrapper = DefaultContentWrapper
export const ModalComponent = DefaultModalComponent
export const ModalContainer = DefaultModalContainer
export const onClose = defaultOnClose
export const onOpen = defaultOnOpen

export default ModalProvider
