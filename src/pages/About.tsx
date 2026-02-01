import { useLanguage } from '../i18n';
import './About.css';

// Flat icon components
const UserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const HeartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);

const BookIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
);

export function About() {
    const { t } = useLanguage();

    return (
        <div className="about-page">
            <div className="container">
                <header className="about-page__header fade-in">
                    <h1 className="about-page__title">{t.about.title}</h1>
                    <p className="about-page__subtitle">
                        {t.about.subtitle}
                    </p>
                </header>

                <div className="about-page__content">
                    <div className="about-page__main fade-in">
                        <div className="about-card card">
                            <div className="about-card__icon"><UserIcon /></div>
                            <h2>{t.about.introTitle}</h2>
                            <p>{t.about.introText}</p>
                        </div>

                        <div className="about-card card">
                            <div className="about-card__icon"><HeartIcon /></div>
                            <h2>{t.about.passionsTitle}</h2>
                            <p>{t.about.passionsText}</p>
                        </div>

                        <div className="about-card card">
                            <div className="about-card__icon"><BookIcon /></div>
                            <h2>{t.about.backgroundTitle}</h2>
                            <p>{t.about.backgroundText}</p>
                        </div>
                    </div>

                    <aside className="about-page__sidebar fade-in">
                        <div className="about-skills card">
                            <h3>{t.about.technologiesTitle}</h3>
                            <div className="about-skills__grid">
                                <span className="about-skill">Python</span>
                                <span className="about-skill">TypeScript</span>
                                <span className="about-skill">React</span>
                                <span className="about-skill">PostgreSQL</span>
                                <span className="about-skill">GCP</span>
                                <span className="about-skill">AWS</span>
                                <span className="about-skill">Git</span>
                                <span className="about-skill">Docker</span>
                                <span className="about-skill">PostGIS</span>
                                <span className="about-skill">GDAL</span>
                                <span className="about-skill">ESRI</span>
                            </div>
                        </div>

                        <div className="about-facts card">
                            <h3>{t.about.quickFactsTitle}</h3>
                            <ul className="about-facts__list">
                                <li>{t.about.fact1}</li>
                                <li>{t.about.fact2}</li>
                                <li>{t.about.fact3}</li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
