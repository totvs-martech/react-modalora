# react-modalora

> Modal for React 16+

## Basic Usage

```js
import ModalProvider from 'react-modalora'

const ModalContentComponent = ({ closeModal }) => (
  <button onClick={closeModal}>
    close
  </button>
)

const openModalOnClick = ({ openModal, closeModal }) => () =>
  openModal(() => <ModalContentComponent closeModal={closeModal} />)

const App = () => (
  <ModalProvider>
    {({ openModal, closeModal }) => (
      <button
        onClick={openModalOnClick({ openModal, closeModal })}>
        Open Modal
      </button>
    )}
  </ModalProvider>
)
```
