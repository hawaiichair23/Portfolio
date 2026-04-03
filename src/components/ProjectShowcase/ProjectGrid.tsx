import ProjectCard from './ProjectCard';

interface ProjectGridProps {
    projects: any[];
    theme: 'light' | 'dark';
}

function ProjectGrid({ projects, theme }: ProjectGridProps) {
    return (
        <div className="projects-section">
            <div className="projects-grid" data-theme={theme}>
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} theme={theme} />
                ))}
            </div>
        </div>
    );
}

export default ProjectGrid;