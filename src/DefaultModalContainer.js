import React from 'react'
import PropTypes from 'prop-types'

const overlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, .2)',
  bottom: 0,
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  transform: 'translate3d(0px, -1px, 0px)'
}

const Overlay = () => <div style={overlayStyle} />

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

const DefaultModalContainer = ({ children }) => (
  <div style={containerStyle}>
    <Overlay />
    {children}
  </div>
)

DefaultModalContainer.displayName = 'DefaultModalContainer'

DefaultModalContainer.propTypes = {
  children: PropTypes.node
}

export default DefaultModalContainer
