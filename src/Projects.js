import React from 'react';
import './Projects.css';

class Project extends React.Component {
    render() {
        return (
            <div>
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


export default Project;