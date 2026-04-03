import './Page.css';
import './Home.css';
import HeroSection from '../components/ProjectShowcase/HeroSection';
import RotatingCube from '../components/RotatingCube';

interface HomeProps {
    theme: 'light' | 'dark';
}

function Home({ theme }: HomeProps) {
    return (
            <div className="page-content centered-text">
                <HeroSection theme={theme} title="Welcome to My Portfolio" />
                <div className="page-content">
                    <p>I'm Jordan Vick. I'm a full-stack developer who loves building cool stuff.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
                        <RotatingCube />
                    </div>
                </div>
            </div>
    );
}

export default Home;