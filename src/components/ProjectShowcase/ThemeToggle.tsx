import brightnessIcon from '../../assets/brightness.png';
import moonIcon from '../../assets/moon.png';
import './ThemeToggle.css';

interface ThemeToggleProps {
    theme: 'light' | 'dark';
    onThemeChange: (theme: 'light' | 'dark') => void;
}

function ThemeToggle({ theme, onThemeChange }: ThemeToggleProps) {
    const toggleTheme = () => {
        onThemeChange(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button className="theme-toggle" onClick={toggleTheme}>
            <img
                src={theme === 'dark' ? brightnessIcon : moonIcon}
                alt="Toggle theme"
            />
        </button>
    );
}

export default ThemeToggle;