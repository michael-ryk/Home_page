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
        <span>View my work </span>
        <span> Contact me</span>
      </div>
    </WelcomeStyle>
  )
}

const WelcomeStyle = styled.section`
  max-width: 800px;
  height: 100vh;
  .fade-in {
    opacity: 0;
    animation: fadeIn 1s ease-in forwards;
  }
  .my-name-container {animation-delay: 0.5s;}
  .my-name {
    background: linear-gradient(45deg, #23d5ab, #ee7752, #e73c7e, #23a6d5, #23d5ab, #ee7752, #e73c7e, #23a6d5);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;    /*may need in other browsers*/
    -webkit-text-fill-color: transparent;
    animation: changingBackgroundGradient 5s linear infinite;
  }
  .who-am-i {animation-delay: 1s;}
  .about-me {
    animation-delay: 1.5s;
    text-align: left;
  }
  .quick-links {animation-delay: 2s;}

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