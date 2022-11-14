import Modal from './UI/Modal';
import styled from 'styled-components';

const ContactForm = ({onCloseClick}) => {
return (
  <Modal onBackdropClick={onCloseClick}>
    <ModalStyles>
      <form>
        <h2>Please fill your details:</h2>
        <div className='inputs-container'>
          <div className='input-item'>
            <label>Your name:</label>
            <input required='required'/>
          </div>
          <div className='input-item'>
            <label>Your message:</label>
            <input required='required'/>
          </div>
          <div className='input-item'>
            <label>Email to respond:</label>
            <input type='email' required='required'/>
          </div>
        </div>
        <div className='buttons-container'>
          <button>Submit</button>
          <button onClick={onCloseClick}>Close</button>
        </div>
      </form>
    </ModalStyles>
  </Modal>
)
}

const ModalStyles = styled.div`
margin: 0 auto;
width: 100%;
form {
  h2 {
    text-decoration: underline;
  }
  .inputs-container {
    display: flex;
    flex-direction: column;
    justify-self: left;
    .input-item {
      margin: 0.5rem auto;
      label{
        font-size: 1.3rem;
        margin-right: 0.5rem;
      }
      input {
        color: black;
        font-size: 1.2rem;
        text-align: left;
      }
    }
  }
  .buttons-container {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0 0.5rem;
  }
  button {
    font: inherit;
    font-size: 1.5rem;
    padding: 0.6rem 1rem;
    border: 4px solid #007099;
    border-radius: 0.5rem;
    color: white;
    background: transparent;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;
    text-decoration: none;
  }
}
`

export default ContactForm;