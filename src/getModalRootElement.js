function getModalRootElement (input, { document: { body }, HTMLElement } = window) {
  if (input instanceof HTMLElement) {
    return input
  }

  if (typeof input === 'string') {
    let modalRoot = body.querySelector(input)

    if (!modalRoot) {
      modalRoot = body.getElementById(input)
    }
  }

  return body
}

export default getModalRootElement
