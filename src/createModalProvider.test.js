import React from 'react'
import { render } from 'react-testing-library'
import createModalProvider from './createModalProvider'

describe('createModalProvider', function () {
  it('should create an ModalProvider and match snapshot', function () {
    const ModalProvider = createModalProvider()
    render(<ModalProvider>{() => 'foo'}</ModalProvider>)
    expect(document.body.innerHTML).toMatchSnapshot()
  })

  it('should pass custom props', function () {
    const content = () => 'bar'
    const ModalProvider = createModalProvider({
      content
    })
    render(<ModalProvider>{() => 'foo'}</ModalProvider>)
    expect(document.body.innerHTML).toMatchSnapshot()
  })

  it('should be able to optionaly close the modal on overlay click', function () {
    const content = () => 'bar'
    const ModalProvider = createModalProvider({
      content,
      closeOnOverlayClick: true
    })
    render(<ModalProvider>{() => 'foo'}</ModalProvider>)
    expect(document.body.innerHTML).toMatchSnapshot()
  })
})
