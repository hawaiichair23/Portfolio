import './Page.css';
import HeroSection from '../components/ProjectShowcase/HeroSection';

interface ContactProps {
    theme: 'light' | 'dark';
}

function Contact({ theme }: ContactProps) {
    return (
        <div className="page">
            <HeroSection theme={theme} title="Contact" />
            <div className="page-content centered-text">
                <p>Get in touch at jt.vick22@gmail.com</p>
            </div>
        </div>
    );
}

export default Contact;
