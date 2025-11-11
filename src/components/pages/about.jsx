import './about.css';

function About() {
    return (
        <div className="container">
            <h1>About Me</h1>
            <div class="intro">
                <p><strong>Hello! I'm Cedric Nagata, </strong> 
                    a full-stack software engineer with a Computer Science degree from the University of Washington. 
                    I specialize in designing and building impactful applications that blend intuitive user experiences with robust, 
                    scalable backend systems. My work spans AI integration, cloud-native deployment, and modern web and mobile development.</p>
            </div>

            <div class="experience">
                <h3>Experience:</h3>
                <p>At <strong>Gideon Taylor</strong>, I develop REST APIs for Retrieval-Augmented Generation (RAG) LLM services, 
                    manage vector database knowledge with Qdrant, and build production-ready full-stack applications
                    with React, Node.js, and Python. I leverage Docker and Kubernetes for container orchestration 
                    and deploy to Oracle Cloud, ensuring efficient, reliable, and maintainable solutions. 
                    My role blends backend engineering, frontend development, and DevOps practices to deliver high-quality, user-focused products.</p>
            </div>

            <div class="current-projects">
                <h3>Current Projects:</h3>
                <p>Outside of my professional work, I’ve created innovative projects including <strong>LittleChef</strong>, 
                    an AI-powered cooking assistant with a “swipe-to-match” recipe finder and immersive cooking mode, 
                    and <strong>DERM DX</strong>, a cross-platform mobile app that uses computer vision to classify skin lesions from 
                    over 44,000 training images. Each project showcases my ability to merge AI capabilities, intuitive 
                    interfaces, and solid backend systems into practical, impactful tools.</p>
            </div>

            <div class="aspirations">
                <h3>Career Aspirations:</h3>
                <p>I aim to join a forward-thinking software team where I can apply my technical expertise, 
                    creativity, and collaborative mindset to build products that solve real-world problems. 
                    I’m passionate about clean architecture, scalable systems, and using technology to make a meaningful difference.</p>
            </div>

            <div class="invitation">
                <p>I invite you to browse through my portfolio to learn more about my adventures in computer science. 
                    Your thoughts, opportunities, and collaborative ideas are warmly welcomed as I am always eager for engaging projects 
                    and enriching interactions in the tech landscape.</p>
            </div>
        </div>
    );
}

export default About;
