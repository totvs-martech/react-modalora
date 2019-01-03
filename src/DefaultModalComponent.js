import React from 'react'
import PropTypes from 'prop-types'

const defaultModalComponentStyle = {
  backgroundColor: '#fff',
  margin: '3rem auto',
  maxWidth: '100vw',
  padding: '1.5rem',
  transform: 'translate3d(0px, 1px, 0px)'
}

const DefaultModalComponent = ({ children }) =>
  <div role='dialog' style={defaultModalComponentStyle}>{children}</div>

DefaultModalComponent.displayName = 'DefaultModalComponent'

DefaultModalComponent.propTypes = {
  children: PropTypes.node.isRequired
}

export default DefaultModalComponent
