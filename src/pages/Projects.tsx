import ProjectShowcase from '../components/ProjectShowcase/ProjectShowcase';
import './Page.css';

interface ProjectsProps {
    theme: 'light' | 'dark';
}

function Projects({ theme }: ProjectsProps) {
    return (
        <div className="page">
            <ProjectShowcase theme={theme} />
        </div>
    );
}

export default Projects;
