import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../i18n';
import './Navbar.css';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="navbar">
            <div className="container navbar__container">
                <NavLink to="/" className="navbar__logo">
                    <span className="navbar__logo-text">Matt Graff</span>
                </NavLink>

                <div className="navbar__right">
                    <button
                        className="navbar__lang-toggle"
                        onClick={toggleLanguage}
                        aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
                    >
                        <span className={`navbar__lang ${language === 'en' ? 'navbar__lang--active' : ''}`}>EN</span>
                        <span className="navbar__lang-divider">/</span>
                        <span className={`navbar__lang ${language === 'fr' ? 'navbar__lang--active' : ''}`}>FR</span>
                    </button>

                    <button
                        className={`navbar__toggle ${isMenuOpen ? 'navbar__toggle--open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`navbar__nav ${isMenuOpen ? 'navbar__nav--open' : ''}`}>
                        <NavLink
                            to="/"
                            className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.nav.home}
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.nav.about}
                        </NavLink>
                        <NavLink
                            to="/experience"
                            className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.nav.experience}
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {t.nav.contact}
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}
