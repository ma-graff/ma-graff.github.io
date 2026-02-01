import type { Experience } from '../types';

export const experiences: Experience[] = [
    // Work Experience
    {
        id: '1',
        type: 'work',
        title: 'Data Scientist (Co-op)',
        company: 'Canadian Space Agency',
        location: 'Montréal, QC',
        date: 'Sep 2025 - Present',
        tags: ['data', 'backend'],
        description: 'Supporting open science initiatives and executive decision-making at Canada\'s space agency through Python tools, data visualizations, and governance frameworks.',
        highlights: [
            'Built interactive Python tutorials streamlining data access for open science users',
            'Created PowerBI dashboards translating complex data into actionable insights for senior leadership',
            'Contributed to Data and AI Governance guidelines, optimizing organizational workflows'
        ]
    },
    {
        id: '2',
        type: 'work',
        title: 'Geospatial Software Developer (Co-op)',
        company: 'GeoBC',
        location: 'Victoria, BC',
        date: 'May 2024 - Sep 2024',
        tags: ['geospatial', 'backend', 'cloud'],
        description: 'Designed scalable geospatial data infrastructure and automation tools for provincial emergency services and wildfire response.',
        highlights: [
            'Designed archival system for 20TB+ of wildfire remote sensing data using Python, AWS S3, and GeoServer',
            'Developed Python address validation tool for NG911 emergency services, improving processing efficiency by 80%'
        ]
    },
    {
        id: '3',
        type: 'project',
        title: 'BIXI Bike Dashboard',
        company: 'Personal Project',
        location: 'Montréal, QC',
        date: 'Jan 2026 - Present',
        tags: ['fullstack', 'data', 'geospatial'],
        description: 'Interactive fullstack web application for real-time and historical BIXI bike-share data visualization.',
        highlights: [
            'Built React/TypeScript frontend with interactive mapping and data visualization',
            'Developed Python backend for data processing',
            'Analyzed citywide bike-share patterns to support urban mobility insights'
        ],
        link: 'https://ma-graff.github.io/bixi-dashboard/'
    },
    {
        id: '4',
        type: 'work',
        title: 'Data Analyst',
        company: 'Avenue Road Property Management',
        location: 'Remote',
        date: 'Oct 2023 - Apr 2025',
        tags: ['data', 'backend'],
        description: 'Aggregated and analyzed historical and forecast weather data using Python to produce weekly reports supporting property management decisions.',
        highlights: [
            'Engineered end-to-end automated ETL pipelines using Python and SQL',
            'Delivered 8+ detailed weather and snow forecasts per month for data-driven client decisions',
            'Maintained SQLite database of thousands of weather records ensuring model consistency and reliability'
        ]
    },
    {
        id: '5',
        type: 'work',
        title: 'GIS Technician (Co-op)',
        company: 'GeoBC, Government of British Columbia',
        location: 'Victoria, BC',
        date: 'May 2023 - Sep 2023',
        tags: ['geospatial', 'data'],
        description: 'Developed custom automation tools and collaborated on editing the Digital Road Atlas (DRA), vital for emergency services routing across British Columbia.',
        highlights: [
            'Developed custom tools using Python with user interfaces in ArcGIS Pro',
            'Collaborated on editing the provincial Digital Road Atlas for emergency routing',
            'Managed critical geospatial datasets and resolved technical issues via Jira in Agile environment'
        ]
    },
    // Projects
    {
        id: '6',
        type: 'project',
        title: 'SKEMA ML Classification',
        company: 'University of Victoria',
        date: 'May 2025 - Sep 2025',
        tags: ['data', 'geospatial', 'fullstack'],
        description: 'Validated a Deep Learning model for automated kelp bed classification using multi-spectral satellite imagery.',
        highlights: [
            'Tested PyTorch model for kelp bed classification from Sentinel-2 imagery',
            'Worked with multi-spectral remote sensing data for environmental monitoring',
            'Developed a web application for visualizing kelp bed classification results'
        ]
    },
    // Education
    {
        id: '7',
        type: 'education',
        title: 'B.Sc. Computer Science and Geography',
        company: 'University of Victoria (UVic)',
        location: 'Victoria, BC',
        date: '2021 - 2026',
        tags: ['geospatial', 'backend', 'fullstack'],
        description: 'Combined program focusing on software development, geospatial analysis, data engineering, and geomatics.',
        highlights: [
            'Specialization in Geomatics and spatial data science',
            'Certifications: Advanced Python 3 (Codecademy), Agile Foundations (LinkedIn Learning)',
            'Skills: Python, SQL, AWS, GeoPandas, Rasterio, PostGIS, Docker, CI/CD'
        ]
    }
];
