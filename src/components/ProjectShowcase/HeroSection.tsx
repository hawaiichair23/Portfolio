import './HeroSection.css';

interface HeroSectionProps {
    theme: 'light' | 'dark';
    title?: string;
}

function HeroSection({ theme, title = 'My Projects' }: HeroSectionProps) {
    const textColor = theme === 'dark' ? '#ffffffff' : '#191919ff';

    return (
        <div className="hero-section centered-hero">
            <h1 style={{ color: textColor, fontFamily: "'Instrument Serif', serif" }}>
                {title}
            </h1>
        </div>
    );
}

export default HeroSection;