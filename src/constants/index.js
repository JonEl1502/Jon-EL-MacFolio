const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "/images/finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "/images/safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "/images/photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "/images/contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "/images/terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "/images/trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Sep 2, 2025",
        title:
            "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
        image: "/images/blog1.png",
        link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "The Ultimate Guide to Mastering Three.js for 3D Development",
        image: "/images/blog2.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: "/images/blog3.png",
        link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "NestJS", "Hono"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/JonEl1502",
    },
    // {
    //     id: 2,
    //     text: "Platform",
    //     icon: "/icons/atom.svg",
    //     bg: "#4bcb63",
    //     link: "https://jsmastery.com/",
    // },
    // {
    //     id: 3,
    //     text: "Twitter/X",
    //     icon: "/icons/twitter.svg",
    //     bg: "#ff866b",
    //     link: "https://x.com/jsmasterypro",
    // },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/john-kabiu-mwaura/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        {
            id: 5,
            name: "Tribe All Community Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-5 left-5",
            children: [
                {
                    id: 1,
                    name: "Tribe All Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-12 left-16",
                    description: [
                        "Tribe All is a comprehensive community platform designed to connect people and foster meaningful relationships.",
                        "Instead of scattered social interactions, it provides a unified space for communities to thrive with organized discussions, events, and collaboration tools.",
                        "Think of it like having your entire community in one place—accessible, organized, and engaging.",
                        "It's built with modern web technologies, ensuring seamless performance, responsive design, and intuitive user experience.",
                    ],
                },
                {
                    id: 2,
                    name: "tribe-all.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://tribe-all-crochets.vercel.app/",
                    position: "top-8 right-24",
                },
                {
                    id: 3,
                    name: "tribe-all-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-48 right-16",
                    imageUrl: "/images/tribe-all-1.png",
                },
                {
                    id: 4,
                    name: "tribe-all-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-64 left-8",
                    imageUrl: "/images/tribe-all-2.png",
                },
            ],
        },

        {
            id: 6,
            name: "VertiGrow Vertical Farming",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-33 left-5",
            children: [
                {
                    id: 1,
                    name: "VertiGrow Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-20 left-12",
                    description: [
                        "VertiGrow is an innovative vertical farming platform that revolutionizes sustainable agriculture.",
                        "Instead of traditional farming methods, it provides smart solutions for urban farming with automated systems and data-driven insights.",
                        "Think of it like bringing the farm to the city—efficient, sustainable, and technology-powered.",
                        "It's built with IoT integration and modern web technologies, ensuring optimal growing conditions and user-friendly management.",
                    ],
                },
                {
                    id: 2,
                    name: "verti-grow.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://verti-grow-hydroponics.vercel.app/",
                    position: "top-6 right-20",
                },
                {
                    id: 3,
                    name: "verti-grow-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-56 right-8",
                    imageUrl: "/images/verti-grow-1.png",
                },
                {
                    id: 4,
                    name: "verti-grow-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-40 left-24",
                    imageUrl: "/images/verti-grow-2.png",
                },
            ],
        },

        // Shower to Shower Project
        {
            id: 6,
            name: "Shower to Shower Online Store",
            icon: "/images/folder2.png",
            kind: "folder",
            position: "top-113 right-5",
            // position: "top-113 left-5",
            children: [
                {
                    id: 1,
                    name: "Shower to Shower Brand.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-12",
                    description: [
                        "Shower to Shower is an online store dedicated to providing high-quality personal care products.",
                    ],
                },
                {
                    id: 2,
                    name: "shower-to-shower.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://shower-to-shower.vercel.app/",
                    position: "top-6 right-20",
                },
                {
                    id: 3,
                    name: "Image-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-66 right-8",
                    imageUrl: "/images/shower-to-shower-1.png",
                },
                {
                    id: 4,
                    name: "Image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 left-54",
                    imageUrl: "/images/shower-to-shower-2.png",
                },
                {
                    id: 5,
                    name: "Image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 right-54",
                    imageUrl: "/images/shower-to-shower-3.png",
                },
                {
                    id: 4,
                    name: "Image-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 left-14",
                    imageUrl: "/images/shower-to-shower-4.png",
                },
            ],
        },

        // {
        //     id: 7,
        //     name: "Food Delivery App",
        //     icon: "/images/folder.png",
        //     kind: "folder",
        //     position: "top-62 left-10",
        //     children: [
        //         {
        //             id: 1,
        //             name: "Food Delivery App Project.txt",
        //             icon: "/images/txt.png",
        //             kind: "file",
        //             fileType: "txt",
        //             position: "top-16 right-12",
        //             description: [
        //                 "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
        //                 "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
        //                 "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
        //                 "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
        //             ],
        //         },
        //         {
        //             id: 2,
        //             name: "food-delivery-app.com",
        //             icon: "/images/safari.png",
        //             kind: "file",
        //             fileType: "url",
        //             href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
        //             position: "top-4 left-20",
        //         },
        //         {
        //             id: 3,
        //             name: "food-delivery-app.png",
        //             icon: "/images/image.png",
        //             kind: "file",
        //             fileType: "img",
        //             position: "top-44 left-16",
        //             imageUrl: "/images/project-3.png",
        //         },
        //         {
        //             id: 4,
        //             name: "food-delivery-app-2.png",
        //             icon: "/images/image.png",
        //             kind: "file",
        //             fileType: "img",
        //             position: "top-60 right-24",
        //             imageUrl: "/images/project-3.png",
        //         },
        //     ],
        // },

        // Westland Paws Clinic Project
        {
            id: 8,
            name: "Westland-Paws Clinic Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-85 left-6",
            children: [
                {
                    id: 1,
                    name: "Westlands Paws Clinic Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-8 left-20",
                    description: [
                        "Westland Paws Clinic is a veterinary clinic that provides exceptional care for pets. ",
                        "The website is designed to showcase their services, facilities, and team members, ",
                        "while also providing easy access to contact information and appointment scheduling.",
                        "It features a user-friendly interface, clear navigation, and high-quality images showcasing ",
                        "the clinic's amenities."
                    ],
                },
                {
                    id: 2,
                    name: "Westlands Paws Clinic",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://westlandspawsclinic.vercel.app/",
                    position: "top-24 right-16",
                },
                {
                    id: 3,
                    name: "westlandspaws-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-12",
                    imageUrl: "/images/westlandspaws-1.png",
                },
                {
                    id: 4,
                    name: "westlandspaws-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-36 right-8",
                    imageUrl: "/images/westlandspaws-2.png",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-8 left-12",
            imageUrl: "/images/adrian.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-32 right-20",
            imageUrl: "/images/adrian-2.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-56 left-24",
            imageUrl: "/images/adrian-3.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-16 right-12",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/adrian.jpg",
            description: [
                "Hey! I’m John Kabiu,👋, a software developer who enjoys building sleek, interactive websites, mobile apps, and more, with a focus on creating experiences that actually work well.",
                "I specialize in JavaScript & TypeScript(React.js, Next.js, Vue.js), Node.js (Express), Flutter and Native Android(Kotlin, Java, Jetpack Compose) — and I love making things feel smooth, fast, and just a little bit delightful.",
                "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
                "Outside of dev work, you'll find me making vertical hydronic towers, exploring new places, racing, or just chilling at home with my friends, chatting about sports cutting edge tech, and so many other things 😅",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-16 left-20",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-48 right-16",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    gallery: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };