import { useState, useEffect } from 'react';
import axios from 'axios';
import './projects.css';

const GROUPS = [
    { title: 'LittleChef', repos: ['little-chef'] },
    { title: 'BigBro', repos: ['bigbro', 'bigbro-kit', 'bigbro-test'] },
    { title: 'Derm DX', repos: ['derm_dx', 'skin_lesion_classifier'] },
];

const INDIVIDUALS = ['advent-of-code', 'portfolio-website'];

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub
            </a>
        </div>
    );
}

function Projects() {
    const [repoMap, setRepoMap] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/cedricnagata/repos?per_page=100');
                const map = {};
                response.data.forEach((repo) => { map[repo.name] = repo; });
                setRepoMap(map);
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

            {GROUPS.map((group) => {
                const groupRepos = group.repos.map((name) => repoMap[name]).filter(Boolean);
                if (groupRepos.length === 0) return null;
                return (
                    <div key={group.title} className="project-group">
                        <h2 className="project-group-title">{group.title}</h2>
                        <div className="projects-grid">
                            {groupRepos.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    </div>
                );
            })}

            <div className="projects-grid">
                {INDIVIDUALS.map((name) => repoMap[name]).filter(Boolean).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
