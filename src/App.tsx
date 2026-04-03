import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ThemeToggle from './components/ProjectShowcase/ThemeToggle';
import Nav from './components/ProjectShowcase/Nav';
import GitHubButton from './components/ProjectShowcase/GitHubButton';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as 'light' | 'dark') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.style.transition = 'background 0.15s ease';
    document.body.style.background = theme === 'dark' ? '#101010ff' : '#f7f7f7ff';
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="mobile-header">
        <ThemeToggle theme={theme} onThemeChange={setTheme} />
        <GitHubButton />
      </div>
      <Nav theme={theme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="/about" element={<About theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;