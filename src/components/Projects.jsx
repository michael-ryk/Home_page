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

const ProjectsStyle = styled.section`
  max-width: 90%;
  height: 100vh;
  margin: 0 auto;

  
  .projects-description {
    margin: 2rem auto;
  }
  
  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr));
    justify-content: center;
    gap: var(--grid-layout-gap);
  }

`

export default Projects;