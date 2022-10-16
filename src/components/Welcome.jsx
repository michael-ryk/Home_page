import { welcome } from '../assets/Constants';
import styled from 'styled-components';

const Welcome = () => {
  const {intro, myName, whoAmI, aboutMeText } = welcome;
  return (
    <WelcomeStyle>
      <p className='fade-in'>{intro}</p>
      <div className='fade-in my-name-container'>
        <h1 className='my-name'>{myName}</h1>
      </div>
      <h2 className='fade-in who-am-i'>{whoAmI}</h2>
      <p className='fade-in about-me'>{aboutMeText}</p>
      <div className='fade-in quick-links'>
        <button>View my work</button>
        <button>Contact me</button>
      </div>
    </WelcomeStyle>
  )
}

const WelcomeStyle = styled.section`
  max-width: 800px;
  height: 100vh;
  margin: 10rem auto 0;
  .fade-in {
    opacity: 0;
    animation: fadeIn 1s ease-in forwards;
  }
  .my-name-container {
    margin: 1.5rem auto;
    animation-delay: 0.5s;
  }
  .my-name {
    font-size: 4rem;
    background: linear-gradient(45deg, #23d5ab, #ee7752, #e73c7e, #23a6d5, #23d5ab, #ee7752, #e73c7e, #23a6d5);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;    /*may need in other browsers*/
    -webkit-text-fill-color: transparent;
    animation: changingBackgroundGradient 5s linear infinite;
  }
  .who-am-i {
    animation-delay: 1s;
    font-size: 2.5rem;
  }
  .about-me {
    animation-delay: 1.5s;
    margin: 2.5rem auto;
    text-align: left;
  }
  .quick-links {
    animation-delay: 2s;
    margin-top: 5rem;
    display: flex;
    justify-content: space-around;
    button {
      font: inherit;
      padding: 0.5rem 1rem;
      border: 4px solid #007099;
      border-radius: 0.5rem;
      color: white;
      background: transparent;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
      cursor: pointer;
    }
    button:hover,
    button:active {
      background: #007099;
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }
  }

  @keyframes changingBackgroundGradient {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }

  @keyframes fadeIn {
    from {opacity: 0;}
    to {opacity: 1;}
  }
`

export default Welcome;