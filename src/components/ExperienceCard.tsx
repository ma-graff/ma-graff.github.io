import type { Experience } from '../types';
import { useLanguage } from '../i18n';
import './ExperienceCard.css';

interface ExperienceCardProps {
    experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    const { t } = useLanguage();

    const getTypeLabel = () => {
        switch (experience.type) {
            case 'work': return t.experience.workLabel;
            case 'project': return t.experience.projectLabel;
            case 'education': return t.experience.educationLabel;
            default: return experience.type;
        }
    };

    const typeLabel = getTypeLabel();

    return (
        <article className="experience-card card">
            <div className="experience-card__header">
                <div className="experience-card__title-row">
                    <h3 className="experience-card__title">{experience.title}</h3>
                    <span className={`experience-card__type experience-card__type--${experience.type}`}>
                        {typeLabel}
                    </span>
                </div>
                <span className="experience-card__date">{experience.date}</span>
            </div>

            <div className="experience-card__company">
                <span>{experience.company}</span>
                {experience.location && (
                    <>
                        <span className="experience-card__separator">•</span>
                        <span>{experience.location}</span>
                    </>
                )}
            </div>

            {experience.link && (
                <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-card__link experience-card__link--header"
                >
                    View Project →
                </a>
            )}

            <p className="experience-card__description">{experience.description}</p>

            {
                experience.highlights && experience.highlights.length > 0 && (
                    <ul className="experience-card__highlights">
                        {experience.highlights.map((highlight, index) => (
                            <li key={index}>{highlight}</li>
                        ))}
                    </ul>
                )
            }

            <div className="experience-card__footer">
                <div className="experience-card__tags">
                    {experience.tags.map((tag) => (
                        <span key={tag} className={`tag tag--${tag}`}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article >
    );
}
