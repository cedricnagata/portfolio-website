import { useState, useEffect } from 'react';
import './projects.css';

const KNOWN_REPOS = new Set([
    'little-chef',
    'bigbro', 'bigbro-kit', 'bigbro-test',
    'derm_dx', 'skin_lesion_classifier',
]);

const PROJECTS = [
    {
        id: 'littlechef',
        label: 'LittleChef',
        tag: 'iOS App',
        tagColor: '#ff6b35',
        description:
            'An AI-powered, hands-free cooking assistant and recipe manager. Import recipes from text, URLs, or photos — then cook with a custom AI agent that handles timers, ingredient substitutions, and step-by-step voice guidance. Supports full on-device inference via BigBro.',
        links: [
            {
                label: 'GitHub',
                href: 'https://github.com/cedricnagata/little-chef',
                icon: 'github',
                variant: 'ghost',
            },
            {
                label: 'Try now on TestFlight!',
                href: null,
                hrefSource: {
                    type: 'githubReadme',
                    owner: 'cedricnagata',
                    repo: 'little-chef',
                    pattern: /https:\/\/testflight\.apple\.com\/join\/[A-Za-z0-9]+/,
                },
                icon: 'apple',
                variant: 'primary',
            },
        ],
        setup: null,
    },
    {
        id: 'bigbro',
        label: 'BigBro',
        tag: 'macOS App',
        tagColor: '#4a9eff',
        description:
            'A macOS menu bar app that turns your Mac into a local AI inference server for nearby iOS devices. Advertises itself on your local network, accepts pairing requests with per-device approval, and proxies requests to a local Ollama instance — full streaming, tool calling, and image support.',
        links: [
            {
                label: 'GitHub',
                href: 'https://github.com/cedricnagata/bigbro',
                icon: 'github',
                variant: 'ghost',
            },
            {
                label: 'Latest Release',
                href: 'https://github.com/cedricnagata/bigbro/releases/latest',
                icon: 'download',
                variant: 'primary',
            },
        ],
        setup: {
            title: 'Setup',
            steps: [
                {
                    step: '01',
                    title: 'Requirements',
                    body: 'macOS 14 Sonoma or later. Install Ollama from ollama.ai and pull at least one model.',
                    link: { label: 'Get Ollama', href: 'https://ollama.ai' },
                },
                {
                    step: '02',
                    title: 'Install',
                    body: 'Download the DMG above, open it, and drag BigBro.app into your Applications folder.',
                },
                {
                    step: '03',
                    title: 'Launch',
                    body: 'Open BigBro — it lives in your menu bar. Click the icon to see paired devices and model status.',
                },
                {
                    step: '04',
                    title: 'Pair',
                    body: 'Open an iOS app built with BigBroKit on the same Wi-Fi network. Approve the pairing dialog on your Mac — the device is remembered for future sessions.',
                },
            ],
        },
    },
    {
        id: 'dermdx',
        label: 'DermDX',
        tag: 'ML / iOS',
        tagColor: '#34c98a',
        description:
            'A mobile app that uses machine learning and computer vision to help patients identify skin conditions. A CNN model trained on over 44,000 labeled images classifies skin lesions, backed by a Python/Flask REST API that handles image inference.',
        links: [
            {
                label: 'derm_dx',
                href: 'https://github.com/cedricnagata/derm_dx',
                icon: 'github',
                variant: 'ghost',
            },
            {
                label: 'skin_lesion_classifier',
                href: 'https://github.com/cedricnagata/skin_lesion_classifier',
                icon: 'github',
                variant: 'ghost',
            },
        ],
        setup: null,
    },
    {
        id: 'other',
        label: 'Other',
        tag: null,
        tagColor: '#aaaaaa',
        type: 'list',
        description: null,
        links: [],
        setup: null,
    },
];

const GitHubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
);

const AppleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
);

const DownloadIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const ICONS = { github: GitHubIcon, apple: AppleIcon, download: DownloadIcon };

function Projects() {
    const getHashId = () => {
        const hash = window.location.hash.replace('#', '');
        return PROJECTS.find((p) => p.id === hash) ? hash : 'littlechef';
    };

    const [active, setActive] = useState(getHashId);
    const [resolvedHrefs, setResolvedHrefs] = useState({});
    const [otherRepos, setOtherRepos] = useState([]);

    useEffect(() => {
        const onHashChange = () => setActive(getHashId());
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    useEffect(() => {
        let cancelled = false;
        const resolveLink = async (projectId, link) => {
            const { owner, repo, pattern } = link.hrefSource;
            const key = `${projectId}::${link.label}`;
            for (const branch of ['main', 'master']) {
                try {
                    const res = await fetch(`https://raw.githubusercontent.com/${owner}/${repo}/${branch}/README.md`);
                    if (!res.ok) continue;
                    const text = await res.text();
                    const match = text.match(pattern);
                    if (match && !cancelled) {
                        setResolvedHrefs((prev) => ({ ...prev, [key]: match[0] }));
                        return;
                    }
                } catch {}
            }
        };
        for (const p of PROJECTS) {
            for (const link of p.links) {
                if (link.hrefSource?.type === 'githubReadme') resolveLink(p.id, link);
            }
        }
        return () => { cancelled = true; };
    }, []);

    useEffect(() => {
        fetch('https://api.github.com/users/cedricnagata/repos?per_page=100')
            .then((r) => r.json())
            .then((data) => {
                const repos = data
                    .filter((r) => !r.fork && !KNOWN_REPOS.has(r.name))
                    .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
                setOtherRepos(repos);
            })
            .catch(() => {});
    }, []);

    const selectTab = (id) => {
        window.location.hash = id;
        setActive(id);
    };

    const project = PROJECTS.find((p) => p.id === active);

    return (
        <div className="container projects-container">
            <h1 className="projects-heading">Projects</h1>

            <div className="tabs-bar">
                {PROJECTS.map((p) => (
                    <button
                        key={p.id}
                        className={`tab-btn${active === p.id ? ' tab-btn--active' : ''}`}
                        onClick={() => selectTab(p.id)}
                        style={active === p.id ? { '--accent': p.tagColor } : {}}
                    >
                        {p.label}
                        {active === p.id && (
                            <span className="tab-indicator" style={{ background: p.tagColor }} />
                        )}
                    </button>
                ))}
            </div>

            <div className="tab-panel" key={active}>
                {project.type === 'list' ? (
                    <div className="other-grid-panel">
                        {otherRepos.length === 0 ? (
                            <p className="other-empty">No additional repositories found.</p>
                        ) : (
                            <div className="other-grid">
                                {otherRepos.map((repo) => (
                                    <a
                                        key={repo.id}
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="other-card"
                                    >
                                        <div className="other-card-top">
                                            <GitHubIcon />
                                            <span className="other-card-name">{repo.name}</span>
                                        </div>
                                        {repo.description && (
                                            <p className="other-card-desc">{repo.description}</p>
                                        )}
                                        {repo.language && (
                                            <span className="other-card-lang">{repo.language}</span>
                                        )}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <div className="panel-header">
                            <div className="panel-title-row">
                                <h2 className="panel-title">{project.label}</h2>
                                {project.tag && (
                                    <span className="panel-tag" style={{ color: project.tagColor, borderColor: project.tagColor }}>
                                        {project.tag}
                                    </span>
                                )}
                            </div>
                            <p className="panel-description">{project.description}</p>
                            <div className="panel-links">
                                {project.links.map((link) => {
                                    const Icon = ICONS[link.icon];
                                    const href = link.href ?? resolvedHrefs[`${project.id}::${link.label}`];
                                    if (!href) return null;
                                    return (
                                        <a
                                            key={link.label}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`panel-btn panel-btn--${link.variant}`}
                                            style={link.variant === 'primary' ? { '--btn-accent': project.tagColor } : {}}
                                        >
                                            {Icon && <Icon />}
                                            {link.label}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {project.setup && (
                            <div className="setup-section">
                                <h3 className="setup-title">{project.setup.title}</h3>
                                <div className="setup-steps">
                                    {project.setup.steps.map((s) => (
                                        <div className="setup-step" key={s.step}>
                                            <span className="step-number">{s.step}</span>
                                            <div className="step-content">
                                                <strong className="step-title">{s.title}</strong>
                                                <p className="step-body">{s.body}</p>
                                                {s.link && (
                                                    <a href={s.link.href} target="_blank" rel="noopener noreferrer" className="step-link">
                                                        {s.link.label} →
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Projects;
