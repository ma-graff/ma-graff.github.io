import './FloatingImages.css';
import { heroImages, placeholderImages, usePlaceholders } from '../data/heroImages';

interface FloatingImagesProps {
    className?: string;
}

export function FloatingImages({ className = '' }: FloatingImagesProps) {
    // Use custom images or fall back to placeholders
    const images = usePlaceholders ? placeholderImages : heroImages;

    return (
        <div className={`floating-images ${className}`}>
            <div className="floating-images__orbit">
                {images.map((img, index) => {
                    // Distribute images evenly around the circle via negative delay
                    const orbitDelay = -(index / images.length) * 60; // Stagger start positions
                    const floatDelay = index * 0.15;
                    const radiusVariation = 0.85 + Math.random() * 0.3;

                    return (
                        <div
                            key={img.id}
                            className="floating-images__item"
                            style={{
                                '--delay': `${orbitDelay}s`,
                                '--radius': radiusVariation,
                                animationDelay: `${orbitDelay}s, ${floatDelay}s`,
                            } as React.CSSProperties}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="floating-images__img"
                                loading="lazy"
                            />
                            <span className="floating-images__caption">{img.caption}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

