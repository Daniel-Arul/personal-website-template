import React from 'react';
import './Projects.css';
import './defaults.css';

class Project extends React.Component {
    render() {
        return (
            <div class="column">
                <body>
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h1>{this.props.projectName}</h1> 
                                <p> {this.props.projectTidBit}</p>
                            </div>
                            <div class="flip-card-back">
                                <h1>Made With</h1> 
                                <p> {this.props.projectTools} </p>
                            </div>
                        </div>
                    </div>
                </body>
            </div>
        )
    }
}

class Projects extends React.Component {
    render() {
        return (
            <div class = "block" >
                <h1 class ="Section-Title"> Projects </h1>
                <div class="row">
                    <Project projectName = "Project Name" projectTidBit = "About the Project" projectTools = "Anything made with it"/>
                    <Project projectName = "Website" projectTidBit = "Built to display attributes" projectTools = "React,HTML,CSS,JSX,GitHub"/>
                    <Project projectName = "Project Name" projectTidBit = "About the Project" projectTools = "Anything made with it"/>
                    <Project projectName = "Website" projectTidBit = "Built to display attributes" projectTools = "React,HTML,CSS,JSX,GitHub"/>
                    <Project projectName = "Project Name" projectTidBit = "About the Project" projectTools = "Anything made with it"/>
                    <Project projectName = "Website" projectTidBit = "Built to display attributes" projectTools = "React,HTML,CSS,JSX,GitHub"/>
                </div>
            </div>
        )
    }
}


export default Projects;