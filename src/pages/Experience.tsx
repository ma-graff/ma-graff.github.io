import { useState, useMemo } from 'react';
import { useLanguage } from '../i18n';
import { experiences } from '../data/experiences';
import { ExperienceCard } from '../components/ExperienceCard';
import { TagFilter } from '../components/TagFilter';
import { AVAILABLE_TAGS, type TagType, type ExperienceType } from '../types';
import './Experience.css';

const EXPERIENCE_TYPES: { type: ExperienceType | 'all'; label: string }[] = [
    { type: 'all', label: 'All' },
    { type: 'work', label: 'Work' },
    { type: 'project', label: 'Projects' },
    { type: 'education', label: 'Education' },
];

export function Experience() {
    const { t } = useLanguage();
    const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
    const [selectedType, setSelectedType] = useState<ExperienceType | 'all'>('all');

    const handleTagToggle = (tag: TagType) => {
        setSelectedTags((prev) =>
            prev.includes(tag)
                ? prev.filter((t) => t !== tag)
                : [...prev, tag]
        );
    };

    const filteredExperiences = useMemo(() => {
        let filtered = experiences;

        // Filter by type
        if (selectedType !== 'all') {
            filtered = filtered.filter((exp) => exp.type === selectedType);
        }

        // Filter by tags
        if (selectedTags.length > 0) {
            filtered = filtered.filter((exp) =>
                selectedTags.some((tag) => exp.tags.includes(tag))
            );
        }

        return filtered;
    }, [selectedTags, selectedType]);

    return (
        <div className="experience-page">
            <div className="container">
                <header className="experience-page__header fade-in">
                    <h1 className="experience-page__title">{t.experience.title}</h1>
                    <p className="experience-page__subtitle">
                        {t.experience.subtitle}
                    </p>
                </header>

                <div className="experience-page__filters fade-in">
                    <div className="type-filter">
                        {EXPERIENCE_TYPES.map(({ type, label }) => (
                            <button
                                key={type}
                                data-type={type}
                                className={`type-filter__btn ${selectedType === type ? 'type-filter__btn--active' : ''}`}
                                onClick={() => setSelectedType(type)}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    <TagFilter
                        tags={AVAILABLE_TAGS}
                        selectedTags={selectedTags}
                        onTagToggle={handleTagToggle}
                    />
                </div>

                <div className="experience-page__grid">
                    {filteredExperiences.length > 0 ? (
                        filteredExperiences.map((exp) => (
                            <ExperienceCard key={exp.id} experience={exp} />
                        ))
                    ) : (
                        <p className="experience-page__empty">
                            {t.experience.noResults}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
