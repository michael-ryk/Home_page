import { welcome } from '../assets/Constants';
import styled from 'styled-components';

const Welcome = () => {
  const {intro, myName, whoAmI, aboutMeText } = welcome;
  return (
    <WelcomeStyle>
      <p className='appearing'>{intro}</p>
      <h1 className='my-name appearing'>{myName}</h1>
      <h2 className='appearing'>{whoAmI}</h2>
      <p className='appearing'>{aboutMeText}</p>
      <h3 className='appearing'>View my work</h3>
    </WelcomeStyle>
  )
}

const WelcomeStyle = styled.section`
  .my-name {
    background: linear-gradient(45deg, #23d5ab, #ee7752, #e73c7e, #23a6d5, #23d5ab, #ee7752, #e73c7e, #23a6d5);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;    /*may need in other browsers*/
    -webkit-text-fill-color: transparent;
    animation: changingBackgroundGradient 3s linear infinite;
  }

  .appearing {
    animation: appearingEffect 5s linear ;
  }

  @keyframes appearingEffect {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes changingBackgroundGradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

export default Welcome;