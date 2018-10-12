import { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'

class ModalPortal extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    modalRoot: PropTypes.instanceOf(HTMLElement),
    onClose: PropTypes.func.isRequired,
    onOpen: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.el = document.createElement('div')
  }

  componentDidMount () {
    const { modalRoot, onOpen } = this.props
    onOpen()
    modalRoot.appendChild(this.el)
  }

  componentWillUnmount () {
    const { modalRoot, onClose } = this.props
    onClose()
    modalRoot.removeChild(this.el)
  }

  render () {
    const { children } = this.props

    return createPortal(
      children,
      this.el
    )
  }
}

export default ModalPortal
