import type { TagType } from '../types';
import { useLanguage } from '../i18n';
import './TagFilter.css';

interface TagFilterProps {
    tags: TagType[];
    selectedTags: TagType[];
    onTagToggle: (tag: TagType) => void;
}

export function TagFilter({ tags, selectedTags, onTagToggle }: TagFilterProps) {
    const { t } = useLanguage();

    return (
        <div className="tag-filter">
            <span className="tag-filter__label">{t.experience.filterBy}</span>
            <div className="tag-filter__tags">
                {tags.map((tag) => (
                    <button
                        key={tag}
                        className={`tag-filter__tag tag--${tag} ${selectedTags.includes(tag) ? 'tag-filter__tag--active' : ''
                            }`}
                        onClick={() => onTagToggle(tag)}
                    >
                        {tag}
                    </button>
                ))}
                {selectedTags.length > 0 && (
                    <button
                        className="tag-filter__clear"
                        onClick={() => selectedTags.forEach(tag => onTagToggle(tag))}
                    >
                        {t.experience.clearAll}
                    </button>
                )}
            </div>
        </div>
    );
}
