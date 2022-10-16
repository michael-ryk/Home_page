import { welcome } from '../assets/Constants';
import styled from 'styled-components';

const Welcome = () => {
  const {intro, myName, whoAmI, aboutMeText } = welcome;
  return (
    <WelcomeStyle>
      <p>{intro}</p>
      <h1 className='my-name'>{myName}</h1>
      <h2>{whoAmI}</h2>
      <p>{aboutMeText}</p>
      <h3>View my work</h3>
    </WelcomeStyle>
  )
}

const WelcomeStyle = styled.section`
  animation: fadeIn 5s;
  .my-name {
    background: linear-gradient(45deg, #23d5ab, #ee7752, #e73c7e, #23a6d5, #23d5ab, #ee7752, #e73c7e, #23a6d5);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;    /*may need in other browsers*/
    -webkit-text-fill-color: transparent;
    animation: changingBackgroundGradient 5s linear infinite;
  }

  @keyframes changingBackgroundGradient {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }

  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }
`

export default Welcome;