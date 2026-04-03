import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';

interface NavProps {
    theme: 'light' | 'dark';
}

function Nav({ theme }: NavProps) {
    const location = useLocation();
    const navRef = useRef<HTMLDivElement>(null);
    const [transitionsEnabled, setTransitionsEnabled] = useState(false);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    const activeIdx = links.findIndex(link => link.path === location.pathname);

    useEffect(() => {
        setTransitionsEnabled(true);
    }, []);

    useEffect(() => {
        updatePill();
    }, [activeIdx]);

    const updatePill = () => {
        if (!navRef.current) return;
        const activeLink = navRef.current.querySelector('a.active');
        if (activeLink) {
            const position = (activeLink as HTMLElement).offsetLeft;
            const width = (activeLink as HTMLElement).offsetWidth;
            navRef.current.style.setProperty('--pill-position', `${position}px`);
            navRef.current.style.setProperty('--pill-width', `${width}px`);
        }
    };

    return (
        <div className="nav-container" data-theme={theme}>
            <div
                ref={navRef}
                className={`nav-links-minimal ${transitionsEnabled ? 'transitions-enabled' : ''}`}
            >
                {links.map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        className={index === activeIdx ? 'active' : ''}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Nav;