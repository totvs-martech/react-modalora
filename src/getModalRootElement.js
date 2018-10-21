function getModalRootElement (input, { document, HTMLElement } = window) {
  if (input instanceof HTMLElement) {
    return input
  }

  if (typeof input === 'string') {
    let modalRoot = document.body.querySelector(input)

    if (!modalRoot) {
      modalRoot = document.getElementById(input)
    }

    if (modalRoot) {
      return modalRoot
    }
  }

  return document.body
}

export default getModalRootElement
