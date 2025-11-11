import './contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="page-title">Contact Me</h1>
            <div className="contact-details">
                <p><i className="fas fa-envelope"></i> <a href="mailto:cedric.nagata@gmail.com">cedric.nagata@gmail.com</a></p>
                <p><i className="fas fa-phone"></i> <a href="tel:425-691-7180">425-691-7180</a></p>
            </div>
            <div className="social-links">
                <a href="https://github.com/cedricnagata" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/cedric-nagata/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
    );
}

export default Contact;
