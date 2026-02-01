import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n';
import { experiences } from '../data/experiences';
import { ExperienceCard } from '../components/ExperienceCard';
import { FloatingImages } from '../components/FloatingImages';
import './Home.css';

// Flat icon components
const MapIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
);

const CloudIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
);

const CodeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

const SparklesIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v1m0 16v1m-8-9H3m18 0h-1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
        <circle cx="12" cy="12" r="4" />
    </svg>
);

export function Home() {
    const { t } = useLanguage();
    // Show first 3 experiences as featured
    const featuredExperiences = experiences.slice(0, 3);

    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero__content fade-in">
                        <span className="hero__greeting">{t.hero.greeting}</span>
                        <h1 className="hero__title">
                            <span className="hero__name">
                                {t.hero.name.split('').map((char, i) => (
                                    <span
                                        key={i}
                                        className="hero__name-char"
                                        style={{ animationDelay: `${i * 0.05}s` }}
                                    >
                                        {char === ' ' ? '\u00A0' : char}
                                    </span>
                                ))}
                            </span>
                        </h1>
                        <p className="hero__subtitle">
                            {t.hero.subtitle}
                        </p>
                        <p className="hero__description">
                            {t.hero.description}
                        </p>
                        <div className="hero__actions">
                            <Link to="/experience" className="btn btn-primary">
                                {t.hero.viewWork}
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                {t.hero.getInTouch}
                            </Link>
                        </div>
                    </div>

                    <div className="hero__visual fade-in">
                        <FloatingImages />
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="section container">
                <h2 className="section__title">{t.skills.title}</h2>
                <div className="skills-grid grid grid--4">
                    <div className="skill-card card fade-in">
                        <div className="skill-card__icon"><CodeIcon /></div>
                        <h3 className="skill-card__title">{t.skills.fullstack.title}</h3>
                        <p className="skill-card__description">
                            {t.skills.fullstack.description}
                        </p>
                    </div>
                    <div className="skill-card card fade-in">
                        <div className="skill-card__icon"><MapIcon /></div>
                        <h3 className="skill-card__title">{t.skills.geospatial.title}</h3>
                        <p className="skill-card__description">
                            {t.skills.geospatial.description}
                        </p>
                    </div>
                    <div className="skill-card card fade-in">
                        <div className="skill-card__icon"><CloudIcon /></div>
                        <h3 className="skill-card__title">{t.skills.cloud.title}</h3>
                        <p className="skill-card__description">
                            {t.skills.cloud.description}
                        </p>
                    </div>
                    <div className="skill-card card fade-in">
                        <div className="skill-card__icon"><SparklesIcon /></div>
                        <h3 className="skill-card__title">{t.skills.other.title}</h3>
                        <p className="skill-card__description">
                            {t.skills.other.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Experience */}
            <section className="section container">
                <h2 className="section__title">{t.experience.recentTitle}</h2>
                <div className="grid grid--2">
                    {featuredExperiences.map((exp) => (
                        <ExperienceCard key={exp.id} experience={exp} />
                    ))}
                </div>
                <div className="section__cta">
                    <Link to="/experience" className="btn btn-secondary">
                        {t.experience.viewAll}
                    </Link>
                </div>
            </section>
        </div>
    );
}
