import './Page.css'; 
import './About.css';
import HeroSection from '../components/ProjectShowcase/HeroSection';

interface AboutProps {
    theme: 'light' | 'dark';
}

function About({ theme }: AboutProps) {
    return (
                <div className="page-content">
            <HeroSection theme={theme} title="About Me" />
            <div className="about-content">
                <p> I'm a full-stack developer who enjoys building fun, effortless, valuable tools. </p><br></br>
                <p> I graduated with honors from Texas A&M University in 2022 with a Bachelor's in Political Science. I have a background as a professional artist. After living for 6 months in Europe, I began building software seriously about a year ago. Since then, I've shipped several projects including Texterity, KarmaFinder and Blueprint, with more in active development. I'm comfortable across frontend, backend, databases, and production deployment.
</p>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                    My Resume
                </a>
            </div>
        </div>
    );
}

export default About;