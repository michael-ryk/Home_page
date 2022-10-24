import Modal from './UI/Modal';
import styled from 'styled-components';

const ContactForm = ({onCloseClick}) => {
return (
  <Modal onBackdropClick={onCloseClick}>
    <ModalStyles>
      <form>
        <div>
          <label>Your name</label>
          <input />
        </div>
        <div>
          <label>Your message</label>
          <input />
        </div>
        <button>Submit</button>
        <button onClick={onCloseClick}>Close</button>
      </form>
    </ModalStyles>
  </Modal>
)
}

const ModalStyles = styled.div`
margin: 0 auto;
width: 100%;
form {}
button {
  font: inherit;
  font-size: 2rem;
  padding: 0.6rem 1rem;
  border: 4px solid #007099;
  border-radius: 0.5rem;
  color: white;
  background: transparent;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  text-decoration: none;
}
`

export default ContactForm;