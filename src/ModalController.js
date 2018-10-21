import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ModalController extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
    ContentComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func]),
    ModalComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.func])
  }

  constructor (props) {
    super(props)

    const { ContentComponent, ModalComponent } = props

    this.state = {
      ContentComponent: !ContentComponent ? null : () => (
        <ModalComponent>
          <ContentComponent />
        </ModalComponent>
      )
    }
  }

  closeModal = () =>
    this.setState(state => ({
      ContentComponent: undefined
    }))

  openModal = (ContentComponent, ModalComponent = this.props.ModalComponent) =>
    this.setState(state => ({
      ...state,
      ContentComponent: () => (
        <ModalComponent>
          <ContentComponent />
        </ModalComponent>
      )
    }))

  render () {
    const { openModal, closeModal } = this
    const { children } = this.props
    const { ContentComponent } = this.state

    return children({ ContentComponent, openModal, closeModal })
  }
}

export default ModalController
