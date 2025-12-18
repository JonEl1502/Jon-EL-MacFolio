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
        // Tribe All Project
        {
            id: 5,
            name: "Tribe All Community Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-5 left-5",
            children: [
                {
                    id: 501,
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
                    id: 502,
                    name: "tribe-all.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://tribe-all-crochets.vercel.app/",
                    position: "top-8 right-24",
                },
                {
                    id: 503,
                    name: "tribe-all-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-48 right-16",
                    imageUrl: "/images/tribe-all-1.png",
                },
                {
                    id: 504,
                    name: "tribe-all-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-64 left-8",
                    imageUrl: "/images/tribe-all-2.png",
                },
            ],
        },

        // VertiGrow Project
        {
            id: 6,
            name: "VertiGrow Vertical Farming",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-33 left-315",
            children: [
                {
                    id: 601,
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
                    id: 602,
                    name: "verti-grow.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://verti-grow-hydroponics.vercel.app/",
                    position: "top-6 right-20",
                },
                {
                    id: 603,
                    name: "verti-grow-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-56 right-8",
                    imageUrl: "/images/verti-grow-1.png",
                },
                {
                    id: 604,
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
            id: 7,
            name: "Shower to Shower Online Store",
            icon: "/images/folder2.png",
            kind: "folder",
            position: "top-193 right-5",
            children: [
                {
                    id: 701,
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
                    id: 702,
                    name: "shower-to-shower.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://shower-to-shower.vercel.app/",
                    position: "top-6 right-20",
                },
                {
                    id: 703,
                    name: "Image-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-66 right-8",
                    imageUrl: "/images/shower-to-shower-1.png",
                },
                {
                    id: 704,
                    name: "Image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 left-54",
                    imageUrl: "/images/shower-to-shower-2.png",
                },
                {
                    id: 705,
                    name: "Image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 right-54",
                    imageUrl: "/images/shower-to-shower-3.png",
                },
                {
                    id: 706,
                    name: "Image-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 left-14",
                    imageUrl: "/images/shower-to-shower-4.png",
                },
            ],
        },

        // Westland Paws Clinic Project
        {
            id: 8,
            name: "Westland-Paws Clinic Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-185 left-6",
            children: [
                {
                    id: 801,
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
                    id: 802,
                    name: "westlands-paws.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://westlandspawsclinic.vercel.app/",
                    position: "top-76 right-38",
                },
                {
                    id: 803,
                    name: "westlandspaws-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-12",
                    imageUrl: "/images/westlandspaws-1.png",
                },
                {
                    id: 804,
                    name: "westlandspaws-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-24 right-16",
                    imageUrl: "/images/westlandspaws-2.png",
                },
            ],
        },


        // WOAdvocates Project
        {
            id: 9,
            name: "WOAdvocates Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-382 right-80",
            children: [
                {
                    id: 901,
                    name: "WOAdvocates.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-8 left-20",
                    description: [
                        "Wanzau, Odhiambo & Associates Advocates is a law firm formed and registered in 2020 that is committed to providing its clients with top notch legal services. The firm offers tailored services that are unique to the changing needs of our clients in different environments.",
                        "We provide clear and practical advice based on an in-depth knowledge of the legal, regulatory and policy framework within which our clients operate in order to deliver practical solutions to our clients and while at it, do an outstanding job.",
                        "Our size, resources, combination of breadth of skills, communications, facilities and geographic spread enable us to handle the largest and most time-critical transactions when required. We are fully aware of the need for legal advice and legal structures to be compatible with the needs of modern commerce, industry and finance."
                    ],
                },
                {
                    id: 902,
                    name: "woadvocates.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://woadvocates.vercel.app/",
                    position: "top-24 right-16",
                },
                {
                    id: 903,
                    name: "woa-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-12",
                    imageUrl: "/images/woa-1.png",
                },
                {
                    id: 904,
                    name: "woa-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-112 right-8",
                    imageUrl: "/images/woa-2.png",
                },
                {
                    id: 905,
                    name: "woa-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-133 left-8",
                    imageUrl: "/images/woa-3.png",
                },
                {
                    id: 906,
                    name: "woa-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-56 right-18",
                    imageUrl: "/images/woa-4.png",
                },
            ],
        },


        // Meat Lovers Project
        {
            id: 10,
            name: "Meat Lovers Website Project",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-362 left-60",
            children: [
                {
                    id: 1001,
                    name: "Meat Lovers Restaurant.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-16 right-12",
                    description: [
                        "Meat Lovers Restaurant is a fantastic eatery in Nairobi, Kenya. ",
                        "We are located at Agriculture House, Mezzanine Floor at the junction of Moi Avenue and Harambee Avenue. Next to Quickmart Supermarket near Bomblast Memorial."
                    ],
                },
                {
                    id: 1002,
                    name: "meat-lovers-restaurant.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://meat-lovers-restaurant.vercel.app/",
                    position: "top-4 left-20",
                },
                {
                    id: 1003,
                    name: "image-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 left-16",
                    imageUrl: "/images/meat-lovers-1.png",
                },
                {
                    id: 1004,
                    name: "image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-60 right-24",
                    imageUrl: "/images/meat-lovers-2.png",
                },
                {
                    id: 1005,
                    name: "image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-80 left-24",
                    imageUrl: "/images/meat-lovers-3.png",
                },
            ],
        },


        // CVets Project
        {
            id: 11,
            name: "CVets Clinic Website Project",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-92 right-80",
            children: [
                {
                    id: 1101,
                    name: "CVets Clinic.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-16 right-12",
                    description: [
                        "CVets Clinic is a premier veterinary clinic dedicated to providing exceptional care for your",
                        " beloved pets. Located in Nairobi, Kenya, we offer a wide range of services including wellness exams, vaccinations, surgical procedures, dental care, and emergency services. Our team of experienced veterinarians and compassionate staff are committed to ensuring the health and well-being of your furry family members. At CVets Clinic, we believe in building lasting relationships with our clients and their pets through personalized care and attention.",
                    ],
                },
                {
                    id: 1102,
                    name: "cvetsveterinaryclinic.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://cvetsveterinaryclinic.vercel.app/",
                    position: "top-4 left-20",
                },
                {
                    id: 1103,
                    name: "image-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 left-16",
                    imageUrl: "/images/cvets-1.png",
                },
                // {
                //     id: 1004,
                //     name: "image-2.png",
                //     icon: "/images/image.png",
                //     kind: "file",
                //     fileType: "img",
                //     position: "top-60 right-24",
                //     imageUrl: "/images/meat-lovers-2.png",
                // },
                // {
                //     id: 1005,
                //     name: "image-3.png",
                //     icon: "/images/image.png",
                //     kind: "file",
                //     fileType: "img",
                //     position: "top-80 left-24",
                //     imageUrl: "/images/meat-lovers-3.png",
                // },
            ],
        },

    ],


    children2: [
        // Tribe All Project
        {
            id: 5,
            name: "Tribe All Community Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-5 left-5",
            children: [
                {
                    id: 501,
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
                    id: 502,
                    name: "tribe-all.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://tribe-all-crochets.vercel.app/",
                    position: "top-8 right-24",
                },
                {
                    id: 503,
                    name: "tribe-all-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-48 right-16",
                    imageUrl: "/images/tribe-all-1.png",
                },
                {
                    id: 504,
                    name: "tribe-all-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-64 left-8",
                    imageUrl: "/images/tribe-all-2.png",
                },
            ],
        },

        // VertiGrow Project
        {
            id: 6,
            name: "VertiGrow Vertical Farming",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-33 left-5",
            children: [
                {
                    id: 601,
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
                    id: 602,
                    name: "verti-grow.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://verti-grow-hydroponics.vercel.app/",
                    position: "top-6 right-20",
                },
                {
                    id: 603,
                    name: "verti-grow-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-56 right-8",
                    imageUrl: "/images/verti-grow-1.png",
                },
                {
                    id: 604,
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
            id: 7,
            name: "Shower to Shower Online Store",
            icon: "/images/folder2.png",
            kind: "folder",
            position: "top-113 right-45",
            children: [
                {
                    id: 701,
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
                    id: 702,
                    name: "shower-to-shower.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://shower-to-shower.vercel.app/",
                    position: "top-6 right-20",
                },
                {
                    id: 703,
                    name: "Image-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-66 right-8",
                    imageUrl: "/images/shower-to-shower-1.png",
                },
                {
                    id: 704,
                    name: "Image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 left-54",
                    imageUrl: "/images/shower-to-shower-2.png",
                },
                {
                    id: 705,
                    name: "Image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 right-54",
                    imageUrl: "/images/shower-to-shower-3.png",
                },
                {
                    id: 706,
                    name: "Image-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 left-14",
                    imageUrl: "/images/shower-to-shower-4.png",
                },
            ],
        },

        // Westland Paws Clinic Project
        {
            id: 8,
            name: "Westland-Paws Clinic Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-85 left-6",
            children: [
                {
                    id: 801,
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
                    id: 802,
                    name: "westlands-paws.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://westlandspawsclinic.vercel.app/",
                    position: "top-76 right-38",
                },
                {
                    id: 803,
                    name: "westlandspaws-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-12",
                    imageUrl: "/images/westlandspaws-1.png",
                },
                {
                    id: 804,
                    name: "westlandspaws-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-24 right-16",
                    imageUrl: "/images/westlandspaws-2.png",
                },
            ],
        },


        // WOAdvocates Project
        {
            id: 9,
            name: "WOAdvocates Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-5 left-70",
            children: [
                {
                    id: 901,
                    name: "WOAdvocates.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-8 left-20",
                    description: [
                        "Wanzau, Odhiambo & Associates Advocates is a law firm formed and registered in 2020 that is committed to providing its clients with top notch legal services. The firm offers tailored services that are unique to the changing needs of our clients in different environments.",
                        "We provide clear and practical advice based on an in-depth knowledge of the legal, regulatory and policy framework within which our clients operate in order to deliver practical solutions to our clients and while at it, do an outstanding job.",
                        "Our size, resources, combination of breadth of skills, communications, facilities and geographic spread enable us to handle the largest and most time-critical transactions when required. We are fully aware of the need for legal advice and legal structures to be compatible with the needs of modern commerce, industry and finance."
                    ],
                },
                {
                    id: 902,
                    name: "woadvocates.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://woadvocates.vercel.app/",
                    position: "top-24 right-16",
                },
                {
                    id: 903,
                    name: "woa-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-12",
                    imageUrl: "/images/woa-1.png",
                },
                {
                    id: 904,
                    name: "woa-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-112 right-8",
                    imageUrl: "/images/woa-2.png",
                },
                {
                    id: 905,
                    name: "woa-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-133 left-8",
                    imageUrl: "/images/woa-3.png",
                },
                {
                    id: 906,
                    name: "woa-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-56 right-18",
                    imageUrl: "/images/woa-4.png",
                },
            ],
        },


        // Meat Lovers Project
        {
            id: 10,
            name: "Meat Lovers Website Project",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-62 left-60",
            children: [
                {
                    id: 1001,
                    name: "Meat Lovers Restaurant.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-16 right-12",
                    description: [
                        "Meat Lovers Restaurant is a fantastic eatery in Nairobi, Kenya. ",
                        "We are located at Agriculture House, Mezzanine Floor at the junction of Moi Avenue and Harambee Avenue. Next to Quickmart Supermarket near Bomblast Memorial."
                    ],
                },
                {
                    id: 1002,
                    name: "meat-lovers-restaurant.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://meat-lovers-restaurant.vercel.app/",
                    position: "top-4 left-20",
                },
                {
                    id: 1003,
                    name: "image-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 left-16",
                    imageUrl: "/images/meat-lovers-1.png",
                },
                {
                    id: 1004,
                    name: "image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-60 right-24",
                    imageUrl: "/images/meat-lovers-2.png",
                },
                {
                    id: 1005,
                    name: "image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-80 left-24",
                    imageUrl: "/images/meat-lovers-3.png",
                },
            ],
        },


        // CVets Project
        {
            id: 11,
            name: "CVets Clinic Website Project",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-22 right-40",
            children: [
                {
                    id: 1101,
                    name: "CVets Clinic.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-16 right-12",
                    description: [
                        "CVets Clinic is a premier veterinary clinic dedicated to providing exceptional care for your",
                        " beloved pets. Located in Nairobi, Kenya, we offer a wide range of services including wellness exams, vaccinations, surgical procedures, dental care, and emergency services. Our team of experienced veterinarians and compassionate staff are committed to ensuring the health and well-being of your furry family members. At CVets Clinic, we believe in building lasting relationships with our clients and their pets through personalized care and attention.",
                    ],
                },
                {
                    id: 1102,
                    name: "cvetsveterinaryclinic.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://cvetsveterinaryclinic.vercel.app/",
                    position: "top-4 left-20",
                },
                {
                    id: 1103,
                    name: "image-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 left-16",
                    imageUrl: "/images/cvets-1.png",
                },
            ],
        },

    ],
};

const WORK_LOCATION2 = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // Tribe All Project
        {
            id: 5,
            name: "Tribe All Community Platform",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-5 left-5",
            children: [
                {
                    id: 501,
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
                    id: 502,
                    name: "tribe-all.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://tribe-all-crochets.vercel.app/",
                    position: "top-8 right-24",
                },
                {
                    id: 503,
                    name: "tribe-all-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-48 right-16",
                    imageUrl: "/images/tribe-all-1.png",
                },
                {
                    id: 504,
                    name: "tribe-all-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-64 left-8",
                    imageUrl: "/images/tribe-all-2.png",
                },
            ],
        },

        // VertiGrow Project
        {
            id: 6,
            name: "VertiGrow Vertical Farming",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-53 left-5",
            children: [
                {
                    id: 601,
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
                    id: 602,
                    name: "verti-grow.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://verti-grow-hydroponics.vercel.app/",
                    position: "top-6 right-20",
                },
                {
                    id: 603,
                    name: "verti-grow-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-56 right-8",
                    imageUrl: "/images/verti-grow-1.png",
                },
                {
                    id: 604,
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
            id: 7,
            name: "Shower to Shower Online Store",
            icon: "/images/folder2.png",
            kind: "folder",
            position: "top-93 right-15",
            children: [
                {
                    id: 701,
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
                    id: 702,
                    name: "shower-to-shower.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://shower-to-shower.vercel.app/",
                    position: "top-6 right-20",
                },
                {
                    id: 703,
                    name: "Image-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-66 right-8",
                    imageUrl: "/images/shower-to-shower-1.png",
                },
                {
                    id: 704,
                    name: "Image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 left-54",
                    imageUrl: "/images/shower-to-shower-2.png",
                },
                {
                    id: 705,
                    name: "Image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 right-54",
                    imageUrl: "/images/shower-to-shower-3.png",
                },
                {
                    id: 706,
                    name: "Image-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 left-14",
                    imageUrl: "/images/shower-to-shower-4.png",
                },
            ],
        },

        // Westland Paws Clinic Project
        {
            id: 8,
            name: "Westland-Paws Clinic Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-85 left-5",
            children: [
                {
                    id: 801,
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
                    id: 802,
                    name: "westlands-paws.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://westlandspawsclinic.vercel.app/",
                    position: "top-76 right-38",
                },
                {
                    id: 803,
                    name: "westlandspaws-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-12",
                    imageUrl: "/images/westlandspaws-1.png",
                },
                {
                    id: 804,
                    name: "westlandspaws-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-24 right-16",
                    imageUrl: "/images/westlandspaws-2.png",
                },
            ],
        },


        // WOAdvocates Project
        {
            id: 9,
            name: "WOAdvocates Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-5 left-70",
            children: [
                {
                    id: 901,
                    name: "WOAdvocates.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-8 left-20",
                    description: [
                        "Wanzau, Odhiambo & Associates Advocates is a law firm formed and registered in 2020 that is committed to providing its clients with top notch legal services. The firm offers tailored services that are unique to the changing needs of our clients in different environments.",
                        "We provide clear and practical advice based on an in-depth knowledge of the legal, regulatory and policy framework within which our clients operate in order to deliver practical solutions to our clients and while at it, do an outstanding job.",
                        "Our size, resources, combination of breadth of skills, communications, facilities and geographic spread enable us to handle the largest and most time-critical transactions when required. We are fully aware of the need for legal advice and legal structures to be compatible with the needs of modern commerce, industry and finance."
                    ],
                },
                {
                    id: 902,
                    name: "woadvocates.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://woadvocates.vercel.app/",
                    position: "top-24 right-16",
                },
                {
                    id: 903,
                    name: "woa-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-12",
                    imageUrl: "/images/woa-1.png",
                },
                {
                    id: 904,
                    name: "woa-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-112 right-8",
                    imageUrl: "/images/woa-2.png",
                },
                {
                    id: 905,
                    name: "woa-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-133 left-8",
                    imageUrl: "/images/woa-3.png",
                },
                {
                    id: 906,
                    name: "woa-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-56 right-18",
                    imageUrl: "/images/woa-4.png",
                },
            ],
        },


        // Meat Lovers Project
        {
            id: 10,
            name: "Meat Lovers Website Project",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-33 left-70",
            children: [
                {
                    id: 1001,
                    name: "Meat Lovers Restaurant.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-16 right-12",
                    description: [
                        "Meat Lovers Restaurant is a fantastic eatery in Nairobi, Kenya. ",
                        "We are located at Agriculture House, Mezzanine Floor at the junction of Moi Avenue and Harambee Avenue. Next to Quickmart Supermarket near Bomblast Memorial."
                    ],
                },
                {
                    id: 1002,
                    name: "meat-lovers-restaurant.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://meat-lovers-restaurant.vercel.app/",
                    position: "top-4 left-20",
                },
                {
                    id: 1003,
                    name: "image-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 left-16",
                    imageUrl: "/images/meat-lovers-1.png",
                },
                {
                    id: 1004,
                    name: "image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-60 right-24",
                    imageUrl: "/images/meat-lovers-2.png",
                },
                
                {
                    id: 1005,
                    name: "image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-80 left-24",
                    imageUrl: "/images/meat-lovers-3.png",
                },
            ],
        },


        // CVets Project
        {
            id: 11,
            name: "CVets Clinic Website Project",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-72 left-70",
            children: [
                {
                    id: 1101,
                    name: "CVets Clinic.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-16 right-12",
                    description: [
                        "CVets Clinic is a premier veterinary clinic dedicated to providing exceptional care for your",
                        " beloved pets. Located in Nairobi, Kenya, we offer a wide range of services including wellness exams, vaccinations, surgical procedures, dental care, and emergency services. Our team of experienced veterinarians and compassionate staff are committed to ensuring the health and well-being of your furry family members. At CVets Clinic, we believe in building lasting relationships with our clients and their pets through personalized care and attention.",
                    ],
                },
                {
                    id: 1102,
                    name: "cvetsveterinaryclinic.co.ke",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://cvetsveterinaryclinic.vercel.app/",
                    position: "top-4 left-20",
                },
                {
                    id: 1103,
                    name: "image-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 left-16",
                    imageUrl: "/images/cvets-1.png",
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
            id: 201,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-8 left-12",
            imageUrl: "/images/jonel-1.jpg",
        },
        {
            id: 202,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-32 right-20",
            imageUrl: "/images/adrian-2.jpg",
        },
        {
            id: 203,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-56 left-24",
            imageUrl: "/images/adrian-3.jpeg",
        },
        {
            id: 204,
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
            id: 301,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            position: "top-16 left-12",
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
            id: 401,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-16 left-20",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 402,
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
    workhome: WORK_LOCATION2,
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