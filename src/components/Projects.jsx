import Project from './Project';

import projects from '../assets/Projects';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsStyle>
      <div className='projects-description'>
        <h1 id='my-projects'>My Projects</h1>
        <h3>Here is a list of my projects done and which technologies learn</h3>
      </div>
      <div className='projects-container'>
        {projects.map(item => <Project key={item.id} {...item}/>)}
      </div>
    </ProjectsStyle>
  )
}

const ProjectsStyle = styled.section`
  max-width: 80%;
  height: 100vh;
  margin: 0 auto;
  
  @media only screen and (max-width: 650px){
    max-width: 95%;
  }

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