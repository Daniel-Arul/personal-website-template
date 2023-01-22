import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects'
import Skills from './skills';
import Contact from './Contact'

function App() {
  return (
    <div>
      <div class="Background-White">
        <AboutMe />
      </div>
      <div class="Background-Blue">
        <Projects />
      </div>
      <div class="Background-White">
        <Skills />
      </div>
      <div class="Background-Blue">
        <Contact />
      </div>
    </div>
  );
}

export default App;
