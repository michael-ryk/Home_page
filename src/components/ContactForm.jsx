import Modal from './UI/Modal';
import styled from 'styled-components';

const ContactForm = ({onCloseClick}) => {

const submitHandler = (e) => {
  e.preventDefault();
  alert("Your submit registered")
}

return (
  <Modal onBackdropClick={onCloseClick}>
    <ModalStyles>
      <form onSubmit={submitHandler}>
        <h2>Please fill your details:</h2>
        <div className='inputs-container'>
          <label>Your name:</label>
          <input required='required' name='name' placeholder='John Doe'/>
          <label>Your Email:</label>
          <input type='email' required='required' placeholder='example@mail.com' name='email'/>
          <label>Your message:</label>
          <textarea required='required' type='text' minLength='20' rows='10' cols='30' placeholder='Type your message here...' name='message'/>
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
  .inputs-container {
    display: flex;
    flex-direction: column;
    justify-self: left;
    max-width: 500px;
    margin: 0.5rem auto;
    font-size: 1.3rem;
    label{
      margin: 0.5rem 0 0.25rem;
      text-align: left;
    }
    input,
    textarea {
      color: black;
      font-size: 1.2rem;
      text-align: left;
      padding: 0.3rem;
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