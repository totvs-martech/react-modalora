function getModalRootElement (input) {
  if (input instanceof HTMLElement) {
    return input
  }

  if (typeof input === 'string') {
    let modalRoot = document.body.querySelector(input)

    if (!modalRoot) {
      modalRoot = document.body.getElementById(input)
    }
  }

  return document.body
}

export default getModalRootElement
