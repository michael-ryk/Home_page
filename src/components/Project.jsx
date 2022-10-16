import styled from 'styled-components';

const Project = ({name, description, creationDate}) => {

  return (
    <ProjectStyle>
      <div className='image-container'>
        {/* Image will be here */}
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{creationDate}</p>
    </ProjectStyle>
  )
}

const ProjectStyle = styled.section`
  border: 1px solid white;
  min-height: 300px;

  .image-container {
    width: 300px;
  }
`

export default Project;