import React from 'react'
import PropTypes from 'prop-types'

const DefaultContentWrapper = ({ children }) => <div>{ children }</div>

DefaultContentWrapper.propTypes = {
  children: PropTypes.node
}

export default DefaultContentWrapper
