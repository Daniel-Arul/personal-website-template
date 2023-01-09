import React from 'react';
import Projects from './Projects';

function App() {
  return (
    <div>
      <Projects projectName = "Project Name" projectTidBit = "About the Project" projectTools = "Anything made with it"/>
      <Projects projectName = "Website" projectTidBit = "Built to display attributes" projectTools = "React,HTML,CSS,JSX,GitHub"/>
    </div>
  );
}

export default App;
