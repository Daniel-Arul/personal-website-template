import React from 'react';
import AboutMe from './AboutMe';
import Project from './Projects'
import Skills from './skills';
import Contact from './Contact'

function App() {
  return (
    <div>
      <AboutMe />
      <h1>Projects</h1>
      <div class="row">
        <Project projectName = "Project Name" projectTidBit = "About the Project" projectTools = "Anything made with it"/>
        <Project projectName = "Website" projectTidBit = "Built to display attributes" projectTools = "React,HTML,CSS,JSX,GitHub"/>
        <Project projectName = "Project Name" projectTidBit = "About the Project" projectTools = "Anything made with it"/>
        <Project projectName = "Website" projectTidBit = "Built to display attributes" projectTools = "React,HTML,CSS,JSX,GitHub"/>
        <Project projectName = "Project Name" projectTidBit = "About the Project" projectTools = "Anything made with it"/>
        <Project projectName = "Website" projectTidBit = "Built to display attributes" projectTools = "React,HTML,CSS,JSX,GitHub"/>
      </div>
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
