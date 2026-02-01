
export interface HeroImage {
    id: number;
    src: string;
    alt: string;
    caption: string;
}

export const heroImages: HeroImage[] = [
    {
        id: 1,
        src: 'https://s1.it.atcdn.net/wp-content/uploads/2018/02/Hero-46190-Credit-FR-%C2%A9-Eva-Blue-Tourisme-Montreal-EN-Credit-%C2%A9-Eva-Blue-Tourisme-Montreal.jpg',
        alt: 'Montreal cityscape',
        caption: 'I live in Montreal, Canada',
    },
    {
        id: 2,
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtf16ixCJstAgtckjyf79X3_SmoHdqyAwvTQ&s',
        alt: 'Transit map',
        caption: 'I\'m passionate about sustainable transportation',
    },
    {
        id: 3,
        src: 'https://ires.ubc.ca/files/2021/09/Uvic.png',
        alt: 'UVic',
        caption: 'I went to UVic for my undergrad',
    },
    {
        id: 4,
        src: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Bixi_Bike_Rental_%283608205057%29.jpg',
        alt: 'Ville de Montréal biking',
        caption: 'I love cycling',
    },
    {
        id: 5,
        src: 'https://www.yellowscan.com/wp-content/uploads/2024/11/Remote-sensing.jpg',
        alt: 'Remote sensing',
        caption: 'I have a background in remote sensing and GIS',
    },
    {
        id: 6,
        src: 'https://taraenergy.com/wp-content/uploads/2021/02/renewable-energy-technology-defined-solar-panels.jpg',
        alt: 'Solar panels',
        caption: 'I\'m passionate about renewable energy',
    },
    {
        id: 7,
        src: 'https://wildlifeimages.org/wp-content/uploads/2024/03/0002_BallPython.jpg',
        alt: 'Ball python',
        caption: 'I\'m good at Python',
    },
    {
        id: 8,
        src: 'https://helicon.ai/media/blog/covers/ts-react.png.1080x675_q85_crop.png',
        alt: 'React and TypeScript',
        caption: 'I\'m good at React and TypeScript',
    },
    {
        id: 9,
        src: 'https://static.vecteezy.com/system/resources/previews/014/808/585/non_2x/data-engineering-line-icon-vector.jpg',
        alt: 'Data engineering',
        caption: 'I\'m learning data engineering',
    },
    {
        id: 10,
        src: 'https://thelinknewspaper.ca/images/made/images/articles/Volume_31/11/_resized/9ls.Runnin(MavidDurphy)__900_600_90.jpg',
        alt: 'Running',
        caption: 'I am running my first 10k in 2026!',
    },
    {
        id: 11,
        src: 'https://static.vecteezy.com/system/resources/previews/014/724/680/non_2x/full-stack-developer-line-icon-vector.jpg',
        alt: 'Full stack developer',
        caption: 'I am a full-stack developer, with a focus on backend and data',
    },
    {
        id: 12,
        src: 'https://img.freepik.com/premium-vector/deep-learning-ai-linear-icon-neural-network-with-cogwheels-thin-line-illustration-digital-brain-artificial-intelligence-symbol-vector-isolated-cyber-humanoid-chat_721440-1343.jpg',
        alt: 'AI Icon',
        caption: 'I am learning Machine Learning and AI',
    },
    {
        id: 13,
        src: 'https://www.weavertech.us/wp-content/uploads/2023/05/Comparing-Amazon-AWS-Google-Cloud-and-Microsoft-Azure-Choosing-the-Right-Cloud-Provider-for-Your-Business.png',
        alt: 'Cloud Icon',
        caption: 'I have experience with cloud computing',
    },
    {
        id: 14,
        src: 'https://i.redd.it/723u0xiuu5g71.png',
        alt: 'French Language',
        caption: 'I am learning French',
    },
];

// placeholder images
export const usePlaceholders = false;

// Generate placeholder images (used when usePlaceholders is true)
export const placeholderImages: HeroImage[] = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    src: `https://picsum.photos/seed/${i + 100}/120/120`,
    alt: `Memory ${i + 1}`,
    caption: `Photo ${i + 1}`,
}));
