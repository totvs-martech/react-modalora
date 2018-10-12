import React from 'react'
import ModalProvider from './ModalProvider'

const createModalProvider = opts => ({ children, ...props }) =>
  <ModalProvider {...opts} {...props}>{children}</ModalProvider>

export default createModalProvider
