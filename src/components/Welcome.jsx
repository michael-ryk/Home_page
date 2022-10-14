import { welcome } from '../assets/Constants';

const Welcome = () => {
  const {intro, myName, whoAmI, aboutMeText } = welcome;
  return (
    <div>
      <p>{intro}</p>
      <h1 className='my-name'>{myName}</h1>
      <h2>{whoAmI}</h2>
      <p>{aboutMeText}</p>
      <h3>View my work</h3>
    </div>
  )
}

export default Welcome;