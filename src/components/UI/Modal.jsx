import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Backdrop = ({onBackdropClick}) => {
  return (
    <ModalStyle>
      <div className='backdrop' onClick={onBackdropClick} />
    </ModalStyle>
  )
}

const ModalOverlay = ({children}) => {
  return (
    <ModalStyle>
      <div className='modal'>{children}</div>
    </ModalStyle>
  )
}

const portalElement = document.getElementById('portalElement');

const Modal = ({children, onBackdropClick}) => {
  return (
    <>
      {createPortal(<Backdrop onBackdropClick={onBackdropClick} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  )
}

const ModalStyle = styled.div`

  /* Popup modal window */
  .modal {
    position: fixed;
    top: 30vh;
    left: 30vw;
    width: 40vw;
    background-color: black;
    padding: 1rem;
    border: 1px solid white;
    border-radius: 0.6rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 6;
  }
  
  @media only screen and (max-width: 1100px){
    .modal {
      left: 5vw;
      width: 90vw;
    }
  }

  /* Background Fog */
  .backdrop {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.75);
  }
`

export default Modal;