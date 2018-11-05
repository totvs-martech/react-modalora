import React from 'react'
import PropTypes from 'prop-types'

const overlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, .2)',
  bottom: 0,
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  transform: 'translate3d(0px, -1px, 0px)',
  width: '100%',
  padding: 0,
  margin: 0,
  border: 0
}

const Overlay = ({ closeOnOverlayClick, closeModal }) => closeOnOverlayClick
  ? <button style={overlayStyle} onClick={() => closeModal()} />
  : <div style={overlayStyle} />

Overlay.propTypes = {
  closeOnOverlayClick: PropTypes.bool,
  closeModal: PropTypes.func
}

const containerStyle = {
  alignItems: 'flex-start',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  maxHeight: '100vh',
  maxWidth: '100vw',
  overflow: 'auto',
  position: 'fixed',
  right: 0,
  top: 0
}

const DefaultModalContainer = ({ children, closeOnOverlayClick, closeModal }) => (
  <div style={containerStyle}>
    <Overlay closeOnOverlayClick={closeOnOverlayClick} closeModal={closeModal} />
    {children}
  </div>
)

DefaultModalContainer.displayName = 'DefaultModalContainer'

DefaultModalContainer.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func,
  closeOnOverlayClick: PropTypes.bool
}

export default DefaultModalContainer
