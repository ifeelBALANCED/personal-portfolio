import { DiFirebase, DiReact, DiZend } from "react-icons/di";

export const projects = [
    {
        title: 'Breaking Bad Heroes',
        description: "Breaking Bad Next.js app with dark theme and every hero overview using its API and Chakra UI",
        image: '/images/breaking-bad.png',
        tags: ['Next.js', 'Chakra UI', 'Breaking Bad API'],
        source: 'https://github.com/mmnkuh/next-breakingbad',
        visit: 'https://next-breakingbad.vercel.app',
        id: 0,
    },
    {
        title: 'Pizza builder',
        description: "Build your pizza with this app, including various components of food",
        image: '/images/pizza-builder.png',
        tags: ['React', 'LocalStorage', 'Frame Motion'],
        source: 'https://github.com/mmnkuh/pizza-builder',
        visit: 'https://pizzabuilder.netlify.app',
        id: 1,
    },
    {
        title: 'Image Gallery',
        description: "Image gallery using React + Tailwind.css, search and gallery API",
        image: '/images/image-gallery.png',
        tags: ['React', 'Tailwind.css'],
        source: 'https://github.com/mmnkuh/react-pixabar-gallery',
        visit: 'https://tailwind-react-gallery.netlify.app',
        id: 2,
    },
    {
        title: 'Weather App',
        description: "Weather app using React and weather API",
        image: '/images/weather-app.png',
        tags: ['React', 'WeatherAPI'],
        source: 'https://github.com/mmnkuh/weather-app',
        visit: 'https://weather-mrx.netlify.app',
        id: 3,
    },
    {
        title: 'Chuck Norris phases',
        description: "This assignment was offered as a test assignment for a trainee / junior position at codeEmpire.",
        image: '/images/chuck.png',
        tags: ['React', 'TypeScript', 'Effector', 'Chakra UI', 'Web Speech API'],
        source: 'https://github.com/mmnkuh/Codempire-Chuck-Norris',
        visit: 'https://cowboy-chuck.netlify.app',
        id: 4,
    },
];

export const TimeLineData = [
    { year: 2018, text: 'Started my journey', },
    { year: 2010, text: 'Worked as a freelance developer', },
    { year: 2020, text: 'Found my own way in web development', },
    { year: 2021, text: 'Shared my projects with the world', },
];

export const cards = [
    { number: 20, text: 'Open Source Projects' },
    { number: 1000, text: 'Students', },
    { number: 1900, text: 'Github Followers', },
    { number: 5000, text: 'Github Stars', }
];

export const links = [
    { href: '#projects', text: 'Projects' },
    { href: '#tech', text: 'Technologies' },
    { href: '#about', text: 'About' },
]

export const technologies = [
    { icon: <DiReact size="3rem"/>, listText: 'Front-End', text: 'React.js' },
    { icon: <DiFirebase size="3rem"/>, listText: 'Back-End', text: 'Node and Databases' },
    { icon: <DiZend size="3rem"/>, listText: 'UI/UX', text: 'tools like Figma' },
]
