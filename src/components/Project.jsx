import styled from 'styled-components';

const Project = ({name, description, thumbnailUrl, githubLink, liveDemoLink, creationDate}) => {

  return (
    <ProjectStyle>
      <h2>{name}</h2>
      <div className='image-container'>
        <img src={thumbnailUrl} alt="project preview" />
      </div>
      <p className='description'>{description}</p>
      <div className='button-container'>
        <button>Live Demo</button>
        <button>Git Repo</button>
      </div>
    </ProjectStyle>
  )
}

const ProjectStyle = styled.section`
  position: relative;   /* For align buttons to bottom */
  border: 1px solid white;
  border-radius: 1.5rem;
  min-height: 300px;
  padding: 0.5rem 1rem 2rem;
  transition: transform .4s;
  background-color: var(--secondary-color);
  .image-container {
    border-radius: 0.5rem;
    img {
      border-radius: 0.3rem;
      border: 2px solid white;
      width: 100%;
      height: 15vw;
      object-fit: cover;
    }
  }

  &:hover {
    transform: scale(1.05);
  }

  .description {
    font-size: 1.2rem;
    margin: 1rem 0 2.5rem;
    text-align: left;
  }

  .button-container {
    position: absolute; /* For align buttons to bottom */
    bottom: 0.7rem;
    width: 93%;         /*//TODO make it spread to max width instead set to approximate */
    display: flex;
    justify-content: space-between;
    button {
        font: inherit;
        font-size: 1.2rem;
        font-weight: bold;
        padding: 0.5rem 2rem;
        border: 2px solid #007099;
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
`

export default Project;