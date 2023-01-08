import './contact.css';

const Contact = () => {
    return ( 
        <div className="Boop">
            <div>
                <h1>Contact Information</h1>
                <h2>Email: example@gmail.com</h2>
            </div>
            
        <div className="wrapper">
                <a href="#" className="icon linkedin">
                    <div className="tooltip">linkedin</div>
                    <span><i className="fab fa-linkedin"></i></span>
                </a>
                <a href="#" className="icon twitter">
                    <div className="tooltip">Twitter</div>
                    <span><i className="fab fa-twitter"></i></span>
                </a>
                <a href="#" className="icon instagram">
                    <div className="tooltip">Instagram</div>
                    <span><i className="fab fa-instagram"></i></span>
                </a>
                <a href="#" className="icon github">
                    <div className="tooltip">Github</div>
                    <span><i className="fab fa-github"></i></span>
                </a>
                <a href="#" className="icon youtube">
                    <div className="tooltip">Youtube</div>
                    <span><i className="fab fa-youtube"></i></span>
                </a>
            </div>
            
        </div>
     );
}
 
export default Contact;