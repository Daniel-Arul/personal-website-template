import './Projects.css';

const Projects = () => {
    return (
        <div>
            <body>
                <h1>Card Flip with Text</h1>
                <h3>Hover over the image below:</h3>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;" />
                        </div>
                        <div class="flip-card-back">
                            <h1>John Doe</h1> 
                            <p>Architect & Engineer</p> 
                            <p>We love that guy</p>
                        </div>
                    </div>
                </div>

            </body>
        </div>
    )
};
 export default Projects;