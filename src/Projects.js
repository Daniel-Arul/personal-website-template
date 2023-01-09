import './techskills.css';

const Skills = () => {
    return (
        <section id="skills" class="skills">
        <h1 id="techskills">Technical <span id="skillmark">Skills</span></h1>
        <div class="container">
            <div class="skills-icons">
                <img src="/pics/GitHub-Mark.png"/>
                <p class="skill-name">GitHub</p>
            </div>
            <div class="skills-icons">
                <img src="/pics/HTML5_Badge_512.png"/>
                <p class="skill-name">HTML</p>
            </div>
            <div class="skills-icons">
                <img src="/pics/CSS3_logo.svg.png"/>
                <p class="skill-name">CSS</p>
            </div>
            <div class="skills-icons">
                <img src="/pics/React-icon.svg.png"/>
                <p class="skill-name">React</p>
            </div>
            <div class="skills-icons">
                <img src="/pics/Python-logo-notext.svg.png"/>
                <p class="skill-name">Python</p>
            </div>
            <div class="skills-icons">
                <img src="/pics/Fortnite_F_lettermark_logo.png"/>
                <p class="skill-name">Fortnite</p>
            </div>
            {/* Keep adding divs to increase the line :) */}
            

        </div>
        </section>
    );
}
export default Skills;