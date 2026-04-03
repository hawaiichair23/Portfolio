import StatusBadge from './StatusBadge';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
    project: Project;
    theme: 'light' | 'dark';
}

function ProjectCard({ project, theme }: ProjectCardProps) {
    return (
        <div className="project-card" data-theme={theme}>
            <StatusBadge status={project.status} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">{project.techStack.join(' • ')}</div>
            <div className="project-links">
                <a
                    href={project.projectLink}
                    className="btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {project.id === 4 ? 'You Are Here' : 'View Project'}
                </a>
                <a
                    href={project.githubLink}
                    className="btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;