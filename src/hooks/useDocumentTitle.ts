import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const pageTitles: Record<string, { en: string; fr: string }> = {
    '/': { en: 'Home', fr: 'Accueil' },
    '/about': { en: 'About', fr: 'À propos' },
    '/experience': { en: 'Experience', fr: 'Expérience' },
    '/contact': { en: 'Contact', fr: 'Contact' },
};

export function useDocumentTitle() {
    const location = useLocation();
    const { language } = useLanguage();

    useEffect(() => {
        const path = location.pathname;
        const pageInfo = pageTitles[path] || pageTitles['/'];
        const pageTitle = pageInfo[language];
        document.title = `Matt Graff - ${pageTitle}`;
    }, [location.pathname, language]);
}
