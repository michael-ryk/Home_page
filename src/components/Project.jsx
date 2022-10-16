import styled from 'styled-components';

const Project = ({name, description, creationDate}) => {

  return (
    <ProjectStyle>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{creationDate}</p>
    </ProjectStyle>
  )
}

const ProjectStyle = styled.section`
  border: 1px solid white;
  width: 350px;
  min-height: 300px;
`

export default Project;