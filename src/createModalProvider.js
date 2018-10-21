import React from 'react'
import ModalProviderOriginal from './ModalProvider'

const createModalProvider = ({ ModalProvider = ModalProviderOriginal, ...opts } = {}) =>
  ({ children, ...props }) =>
    <ModalProvider {...opts} {...props}>{children}</ModalProvider>

export default createModalProvider
