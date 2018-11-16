# react-modalora

> Another highly customizable logic component for modals using React Portal

## Prerequisites

It uses `render prop` to expose some functions and `React Portal` to allocate
modal markup.

Also needs `react@^16.2.0` & `react-dom@^16.2.1` installed on project because it uses `React.Portal` (v16.0) and `React.Fragment` (v16.2).

## Instalation

> npm i --save react-modalora

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

## Advanced

<!-- TOC depthFrom:3 -->

- [ModalProvider complete structure](#modalprovider-complete-structure)
- [API](#api)
  - [ModalProvider Props](#modalprovider-props)
    - [children](#children)
      - [openModal](#openmodal)
      - [closeModal](#closemodal)
    - [modalRoot](#modalroot)
    - [ContentWrapper](#contentwrapper)
    - [ModalComponent](#modalcomponent)
    - [ModalContainer](#modalcontainer)
    - [onClose](#onclose)
    - [onOpen](#onopen)

<!-- /TOC -->

### ModalProvider complete structure

```js
<ModalProvider>
  <ModalController>
    <ContentWrapper>
      {children}
    </ContentWrapper>

    <ModalPortal>
      <ModalContainer>
        <ModalComponent>
          <ContentComponent />
        </ModalComponent>
      </ModalContainer>
    </ModalPortal>
  </ModalController>
</ModalProvider>
```

As exemple, [Basic Usage](#basic-usage) will render:

```html
<div>

  <!-- ContentWrapper -->

    <!-- children -->
    <button
      onClick={openModalOnClick({ openModal, closeModal })}>
      Open Modal
    </button>
    <!-- /children -->

  <!-- /ContentWrapper -->

</div>
<div>

  <!-- ModalContainer -->
  <div style="align-items: flex-start; bottom: 0px; display: flex; justify-content: center; left: 0px; max-height: 100vh; max-width: 100vw; overflow: auto; position: fixed; right: 0px; top: 0px;">
    <div style="background-color: rgba(0, 0, 0, 0.2); bottom: 0px; left: 0px; position: fixed; right: 0px; top: 0px; transform: translate3d(0px, -1px, 0px);"></div>

    <!-- ModalComponent -->
    <div role="dialog" style="background-color: rgb(255, 255, 255); margin: 3rem auto; max-width: 100vw; padding: 1.5rem; transform: translate3d(0px, 1px, 0px); width: 80rem;"
    >

      <!-- ContentComponent (passed through openModal) -->
      <button onClick={closeModal}>
        close
      </button>
      <!-- /ContentComponent -->

    </div>
    <!-- /ModalComponent -->

  </div>
  <!-- /ModalContainer -->

</div>
```

And every markup can be changed

### API

#### ModalProvider Props

##### children

**type**: function

A render props that exposes `openModal` and `closeModal` inside it's first argument.

###### openModal

**type**: function

Function used to open modal, passing content as a **React Component**.

As second argument you can pass _ModalComponent_ that can be used only with that modal.

Examples:

```js
openModal(() => <div>Stateless Functional Component</div>)

openModal(MyComponent)

openModal(MyComponent, ModalComponent)
```

###### closeModal

**type**: function

Function that closes modal and should be used inside modal.

Usage:

```js
<button onClick={() => closeModal()}>close</button>
```

##### modalRoot

**type**: string

You can change where **React Portal** will render your modal. By default it will
render on `document.body`. You can pass a `DOM Element` or a `string` that maps
to an element id or a querySelector.

##### ContentWrapper

**type**: React Component

A container for your children. It receives an `isOpen` props that you could control
some effects like blur your content while modal is open.

```js

const MyContentWrapper = ({ children, isOpen }) => (
  <div style={{ filter: isOpen ? 'blur(2px)' : 'none' }}>
    {children}
  </div>
)

<ModalProvider ContentWrapper={MyContentWrapper}>
  {({ openModal, closeModal }) => (
    <button
      onClick={openModalOnClick({ openModal, closeModal })}>
      Open Modal
    </button>
  )}
</ModalProvider>

```

##### ModalComponent

**type**: React Component

Here you can set your default ModalComponent for every modals.

##### ModalContainer

**type**: React Component

Contains modal and it's overlay, when opened.

##### onClose

**type**: function

Hook for closing modal. By default it removes `overflow: hidden` on `<body>`.

##### onOpen

**type**: function

Hook for opening modal. By default it sets `overflow: hidden` on `<body>`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contributing

1. Fork it (https://github.com/totvs-store/react-modalora/fork)
2. Create your feature branch (`git checkout -b feature/foo-bar`)
3. Commit your changes (`git commit -am 'Add some foo-bar'`)
4. Push to the branch (`git push origin feature/foo-bar`)
5. Create a new Pull Request
