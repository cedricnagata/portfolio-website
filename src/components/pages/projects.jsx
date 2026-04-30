import { useState, useEffect } from 'react';
import axios from 'axios';
import './projects.css';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/cedricnagata/repos?per_page=100');
                const fetchedProjects = response.data
                    .filter((project) => !project.fork)
                    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

                setProjects(fetchedProjects);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setError(error);
            }
        };

        fetchProjects();
    }, []);


    return (
        <div className="container">
            <h1>Projects</h1>
            {error && <p>{error.message}</p>}
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
