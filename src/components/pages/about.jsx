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

            <div className="experience">
                <h3>Experience</h3>

                <p>
                    <strong>Software Engineer — Empowerly</strong> <em>(Jun 2026 – Present)</em>
                </p>
                <ul>
                    <li>Full-stack engineer on the Growth team, building with Next.js and NestJS</li>
                    <li>Building internal tools for marketing insights and A/B testing experimentation</li>
                    <li>Managing cloud containers and environments for growth infrastructure</li>
                </ul>

                <p>
                    <strong>Software Engineer II — Gideon Taylor</strong> <em>(Oct 2024 – May 2026)</em>
                </p>
                <ul>
                    <li>Developed Agentic AI solutions and LLM tool integrations in Python for the Ida Enterprise AI Agent</li>
                    <li>Developed REST APIs for a Retrieval-Augmented Generation (RAG) LLM service</li>
                    <li>Developed a RAG pipeline and vector storage solution for LLM knowledge</li>
                    <li>Managed Docker &amp; Kubernetes containers for cloud deployment through Oracle Cloud Infrastructure (OCI)</li>
                    <li>Full-stack engineer for a cloud-native web app for GT eForms for Cloud with React and Node.js</li>
                </ul>

                <p>
                    <strong>Software Engineering Intern — Tyler Technologies</strong> <em>(Jun 2022 – Sep 2023)</em>
                </p>
                <ul>
                    <li>Developed REST APIs with Python and Django for a cloud-native web application</li>
                    <li>Used Form.io for UI, ElasticSearch for storage and querying, and Azure for cloud hosting</li>
                    <li>Optimized development and deployment workflows with Docker to containerize connected servers</li>
                </ul>
            </div>

            <div className="current-projects">
                <h3>Projects</h3>
                <p>Outside of work, I build projects that push the boundaries of AI and mobile development:</p>
                <ul>
                    <li><strong>LittleChef</strong> — An AI-powered, hands-free cooking assistant with recipe generation from text, websites, and images. Features a custom AI agent for timers, ingredient substitutions, and step-by-step guidance, plus on-device and Mac-offloaded inference.</li>
                    <li><strong>BigBro</strong> — A macOS terminal daemon that lets nearby iPhones offload model inference to Mac compute power over the local network via in-process MLX, along with a BigBroKit Swift package for easy integration.</li>
                    <li><strong>DERM DX</strong> — A mobile app using a CNN model trained on 44,033 images to classify skin lesions, backed by a Python/Flask REST API for image classification.</li>
                </ul>
            </div>

            <div className="aspirations">
                <h3>Skills</h3>
                <p>Python, TypeScript, JavaScript, Java, SQL, Node.js, Next.js, NestJS, React.js, Docker, Kubernetes, Redis, Git, AWS, OCI, Azure, PostgreSQL, REST APIs</p>
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
