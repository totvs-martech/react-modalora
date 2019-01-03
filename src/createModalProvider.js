import React from 'react'
import ModalProviderOriginal from './ModalProvider'

const createModalProvider = ({ ModalProvider = ModalProviderOriginal, ...opts } = {}) =>
  props => <ModalProvider {...opts} {...props} />

export default createModalProvider
