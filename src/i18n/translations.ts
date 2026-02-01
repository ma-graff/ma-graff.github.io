export type Language = 'en' | 'fr';

export const translations = {
    en: {
        // Navbar
        nav: {
            home: 'Home',
            about: 'About',
            experience: 'Experience',
            contact: 'Contact',
        },
        // Hero
        hero: {
            greeting: "Hello, I'm",
            name: 'Matt Graff',
            subtitle: 'Full-Stack Developer + Geospatial',
            description: 'Focused on backend and data. Urban sustainability enthusiast, with geospatial background.',
            viewWork: 'View My Work',
            getInTouch: 'Get In Touch',
        },
        // Skills
        skills: {
            title: 'What I Do',
            geospatial: {
                title: 'Geospatial',
                description: 'Mapping applications, spatial analysis, and GIS automation with Python, PostGIS, GDAL, and visualization tools like MapLibre.',
            },
            cloud: {
                title: 'Cloud Architecture',
                description: 'Scalable cloud infrastructure on AWS/GCP, containerization with Docker, and serverless solutions.',
            },
            fullstack: {
                title: 'Full-Stack Development',
                description: 'Python backend development, React/TypeScript frontends, and databases like PostgreSQL.',
            },
            other: {
                title: 'A Few Other Things',
                description: 'AI/ML and data visualization, graphic design and UX/UI, and technical writing.',
            },
        },
        // Experience
        experience: {
            title: 'Experience',
            subtitle: 'My journey from geospatial development to full-stack engineering',
            filterBy: 'Filter by:',
            clearAll: 'Clear all',
            noResults: 'No experiences match the selected filters.',
            recentTitle: 'Recent Experience',
            viewAll: 'View All Experience →',
            workLabel: 'Work',
            projectLabel: 'Project',
            educationLabel: 'Education',
        },
        // Contact
        contact: {
            title: 'Get In Touch',
            subtitle: "Have a project in mind? Let's talk about it.",
            connectTitle: "Let's Connect",
            connectDescription: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.",
            formName: 'Name',
            formNamePlaceholder: 'Your name',
            formEmail: 'Email',
            formEmailPlaceholder: 'your.email@example.com',
            formMessage: 'Message',
            formMessagePlaceholder: 'Tell me about your project...',
            formSubmit: 'Send Message',
            formSuccess: "Thanks for reaching out! I'll get back to you soon.",
        },
        // About
        about: {
            title: 'About Me',
            subtitle: '',
            introTitle: 'Who I Am',
            introText: 'Hi, I\'m Matt. I have experience with Python, full-stack dev, data science/engineering, and geospatial. I\’m particularly interested in tech roles with opportunities to learn.',
            passionsTitle: 'What Drives Me',
            passionsText: 'I love building things that help people. I especially care about the environment (through earth observation, public transit, sustainable development), using AI for good, and self-improvement.',
            backgroundTitle: 'My Background',
            backgroundText: 'My journey started in GIS and spatial analysis, which led me to data science, and then full-stack development. Today, I combine these skills to build creative solutions.',
            technologiesTitle: 'Technologies',
            quickFactsTitle: 'Quick Facts',
            fact1: 'Based in Montreal, Quebec, Canada',
            fact2: 'Fluent in English, French (almost)',
            fact3: 'BSc in Comp. Sci. & Geography',
        },
        // Footer
        footer: {
            copyright: '© {year} All rights reserved.',
        },
    },
    fr: {
        // Navbar
        nav: {
            home: 'Accueil',
            about: 'À propos',
            experience: 'Expérience',
            contact: 'Contact',
        },
        // Hero
        hero: {
            greeting: 'Bonjour, je suis',
            name: 'Matt Graff',
            subtitle: 'Développeur Full-Stack + Géospatial',
            description: 'Axé sur le backend et les données. Passionné par la durabilité urbaine, avec l\'expérience en géospatial.',
            viewWork: 'Voir mon travail',
            getInTouch: 'Me contacter',
        },
        // Skills
        skills: {
            title: 'Ce que je fais',
            geospatial: {
                title: 'Géospatial',
                description: 'Applications cartographiques, analyse spatiale et automatisation SIG avec Python, PostGIS, GDAL et des outils de visualisation comme MapLibre.',
            },
            cloud: {
                title: 'Architecture cloud',
                description: 'Infrastructure cloud évolutive sur AWS/GCP, conteneurisation avec Docker et solutions sans serveur (serverless).',
            },
            fullstack: {
                title: 'Développement full-stack',
                description: 'Développement backend Python, frontends React/TypeScript et bases de données comme PostgreSQL.',
            },
            other: {
                title: 'Quelques autres choses',
                description: 'IA/apprentissage automatique et visualisation de données, design graphique et UX/UI, et rédaction technique.',
            },
        },
        // Experience
        experience: {
            title: 'Expérience',
            subtitle: 'Mon parcours du développement géospatial à l\'ingénierie full-stack',
            filterBy: 'Filtrer par :',
            clearAll: 'Tout effacer',
            noResults: 'Aucune expérience ne correspond aux filtres sélectionnés.',
            recentTitle: 'Expérience récente',
            viewAll: 'Voir toute l\'expérience →',
            workLabel: 'Emploi',
            projectLabel: 'Projet',
            educationLabel: 'Éducation',
        },
        // Contact
        contact: {
            title: 'Me contacter',
            subtitle: 'Vous avez un projet en tête? Discutons-en.',
            connectTitle: 'Restons en contact',
            connectDescription: 'Je suis toujours ouvert à discuter de nouvelles opportunités, de projets intéressants ou simplement à parler technologie.',
            formName: 'Nom',
            formNamePlaceholder: 'Votre nom',
            formEmail: 'Courriel',
            formEmailPlaceholder: 'votre.courriel@exemple.com',
            formMessage: 'Message',
            formMessagePlaceholder: 'Parlez-moi de votre projet...',
            formSubmit: 'Envoyer le message',
            formSuccess: 'Merci de m\'avoir contacté! Je vous répondrai sous peu.',
        },
        // About
        about: {
            title: 'À propos',
            subtitle: '',
            introTitle: 'Qui suis-je',
            introText: 'Bonjour, je suis Matt. J\'ai de l\'expérience avec Python, le développement full-stack, la science/ingénierie des données et le géospatial. Je suis particulièrement intéressé par des rôles techniques offrant des opportunités d\'apprentissage.',
            passionsTitle: 'Ce qui me motive',
            passionsText: 'J\'aime bâtir des solutions qui aident les gens. Je me soucie particulièrement de l\'environnement (observation de la Terre, transport collectif, développement durable), de l\'utilisation de l\'IA pour le bien commun et du développement personnel.',
            backgroundTitle: 'Mon parcours',
            backgroundText: 'Mon parcours a débuté dans le SIG et l\'analyse spatiale, ce qui m\'a mené à la science des données, puis au développement full-stack. Aujourd\'hui, je combine ces compétences pour créer des solutions créatives.',
            technologiesTitle: 'Technologies',
            quickFactsTitle: 'En bref',
            fact1: 'Basé à Montréal, Québec, Canada',
            fact2: 'Anglais courant, Français (presque)',
            fact3: 'B.Sc. en Informatique et Géographie',
        },
        // Footer
        footer: {
            copyright: '© {year} Tous droits réservés.',
        },
    },
} as const;

export interface Translations {
    nav: {
        home: string;
        about: string;
        experience: string;
        contact: string;
    };
    hero: {
        greeting: string;
        name: string;
        subtitle: string;
        description: string;
        viewWork: string;
        getInTouch: string;
    };
    skills: {
        title: string;
        geospatial: { title: string; description: string };
        cloud: { title: string; description: string };
        fullstack: { title: string; description: string };
        other: { title: string; description: string };
    };
    experience: {
        title: string;
        subtitle: string;
        filterBy: string;
        clearAll: string;
        noResults: string;
        recentTitle: string;
        viewAll: string;
        workLabel: string;
        projectLabel: string;
        educationLabel: string;
    };
    contact: {
        title: string;
        subtitle: string;
        connectTitle: string;
        connectDescription: string;
        formName: string;
        formNamePlaceholder: string;
        formEmail: string;
        formEmailPlaceholder: string;
        formMessage: string;
        formMessagePlaceholder: string;
        formSubmit: string;
        formSuccess: string;
    };
    about: {
        title: string;
        subtitle: string;
        introTitle: string;
        introText: string;
        passionsTitle: string;
        passionsText: string;
        backgroundTitle: string;
        backgroundText: string;
        technologiesTitle: string;
        quickFactsTitle: string;
        fact1: string;
        fact2: string;
        fact3: string;
    };
    footer: {
        copyright: string;
    };
}

export type TranslationKey = Translations;
