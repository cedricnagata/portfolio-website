import './about.css';

function About() {
    return (
        <div className="container">
            <h1>About Me</h1>
            <div className="intro">
                <p><strong>Hello! I'm Cedric Nagata,</strong> a software engineer with experience building
                    Agentic AI solutions, LLM integrations, RAG services, and full-stack cloud-native web
                    applications. I hold a B.S. in Computer Science from the University of Washington.</p>
            </div>

            <div className="linkedin-section">
                <h3>Experience</h3>
                <p>For my up-to-date work history, projects, and skills, connect with me on LinkedIn.</p>
                <a
                    href="https://www.linkedin.com/in/cedric-nagata/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                >
                    <i className="fab fa-linkedin"></i> View my LinkedIn profile
                </a>
            </div>

            <div className="invitation">
                <p>I invite you to browse my portfolio and explore my projects on GitHub. Opportunities and
                    collaborative ideas are always welcome — I'm eager to work on meaningful problems in software
                    and AI.</p>
            </div>
        </div>
    );
}

export default About;
