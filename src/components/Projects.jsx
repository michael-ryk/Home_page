import Project from './Project';

import projects from '../assets/Projects';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsStyle>
      <div className='projects-description'>
        <h1>My Projects</h1>
        <p>Here is a list of my projects done and which technologies learn</p>
      </div>
      <div className='projects-container'>
        {projects.map(item => <Project key={item.id} {...item}/>)}
      </div>
    </ProjectsStyle>
  )
}

const ProjectsStyle = styled.header`
  /* width: 100%; */
  height: 100vh;

  .projects-description {
    margin: 2rem auto;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    gap: 10px;
  }

`

export default Projects;