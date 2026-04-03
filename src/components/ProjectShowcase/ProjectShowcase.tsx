import HeroSection from './HeroSection';
import ProjectGrid from './ProjectGrid';
import { projects } from '../../data/projects';
import './ProjectShowcase.css';

interface ProjectShowcaseProps {
    theme: 'light' | 'dark';
}

function ProjectShowcase({ theme }: ProjectShowcaseProps) {
    return (
        <div>
            <HeroSection theme={theme} />
            <ProjectGrid projects={projects} theme={theme} />
        </div>
    );
}

export default ProjectShowcase;