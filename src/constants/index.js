const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 5,
        name: "Expertise",
        type: "expertise",
    },
    {
        id: 6,
        name: "Timeline",
        type: "timeline",
    },
    {
        id: 7,
        name: "Other Works",
        type: "otherworks",
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
        id: "expertise",
        name: "Expertise",
        // Placeholder icon — drop a custom PNG in /public/images and update this.
        icon: "/images/figma.png",
        canOpen: true,
    },
    {
        id: "timeline",
        name: "Timeline",
        icon: "/images/folder3.png",
        canOpen: true,
    },
    {
        id: "otherworks",
        name: "Other Works",
        icon: "/images/folder2.png",
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
        link: "vet-hub-enterprise.vercel.app",
    },
    {
        id: 2,
        date: "Aug 28, 2025",
        title: "The Ultimate Guide to Mastering Three.js for 3D Development",
        image: "/images/blog2.png",
        link: "https://crystalvets.com/#services",
    },
    {
        id: 3,
        date: "Aug 15, 2025",
        title: "The Ultimate Guide to Mastering GSAP Animations",
        image: "/images/blog3.png",
        link: "https://woadvocates.vercel.app/blog",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["Vue.js", "React.js", "Next.js", ],
    },
    {
        category: "Mobile",
        items: ["Android Native", "Flutter(Multiplatform)",],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS", "Bootstrap"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "PHP(Phalcon)"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "BitBucket", "NPM", "Yarn"],
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
        img: "/images/jonel-1.jpg",
    },
    {
        id: 2,
        img: "/images/blog3.png",
    },
    {
        id: 3,
        img: "/images/jonel-3.png",
    },
    {
        id: 4,
        img: "/images/jonel-4.png",
    },
];

// ---------------------------------------------------------------------------
// Expertise — professional competencies / services, distinct from the raw
// tech stack in `techStack`. Each item is a higher-level capability.
// EDIT ME: tweak the blurbs and add/remove items to match your real offering.
// ---------------------------------------------------------------------------
const expertise = [
    {
        id: 1,
        title: "DUNS Number Application",
        blurb:
            "End-to-end guidance through the Dun & Bradstreet D-U-N-S registration — preparing business details, submitting the application, and following through to issuance so the number is ready for app-store, grant, and vendor onboarding requirements.",
        // Placeholder images — swap these SVGs for real screenshots when ready.
        screenshots: ["/images/dun-no-1.svg", "/images/dun-no-2.svg"],
    },
    {
        id: 2,
        title: "Search Engine Optimization (SEO)",
        blurb:
            "On-page and technical SEO: semantic markup, metadata, sitemaps, Core Web Vitals, and content structure that helps sites rank and load fast.",
        screenshots: ["/images/seo-1.svg"],
    },
    {
        id: 3,
        title: "Design",
        blurb:
            "Interface and visual design — layout, typography, color systems, and design systems that keep products consistent and on-brand.",
        screenshots: ["/images/design-1.svg"],
    },
    {
        id: 4,
        title: "Prototyping",
        blurb:
            "Rapid interactive prototypes that validate ideas and flows before a line of production code is written.",
        screenshots: ["/images/prototype-1.svg"],
    },
    // EDIT ME: add more expertise areas here, same shape
    // { id, title, blurb, screenshots: [..urls] }. `screenshots` is optional.
];

// ---------------------------------------------------------------------------
// Timeline — career / work history over a long span, newest first.
// EDIT ME: replace the placeholder entries with your real roles & dates.
// `period` is free text (e.g. "2024 — Present", "2021 — 2023").
// ---------------------------------------------------------------------------
const timeline = [
    {
        id: 1,
        period: "2024 — Present",
        role: "Role / Title here",
        org: "Company or Client",
        summary:
            "Placeholder — describe what you do here: the product, the stack, and the impact. One or two sentences.",
    },
    {
        id: 2,
        period: "2022 — 2024",
        role: "Role / Title here",
        org: "Company or Client",
        summary:
            "Placeholder — a previous chapter. Swap in the real role, dates, and a short summary of what you shipped.",
    },
    {
        id: 3,
        period: "2020 — 2022",
        role: "Role / Title here",
        org: "Company or Client",
        summary:
            "Placeholder — an earlier role. Keep these newest-first so the timeline reads top to bottom.",
    },
    // EDIT ME: add earlier entries here, same shape { id, period, role, org, summary }.
];

// ---------------------------------------------------------------------------
// Other Works — small side projects that don't warrant a full portfolio
// entry. Shown lightly: a short README write-up plus screenshots (and an
// optional live link). `readme` is an array of paragraphs.
// EDIT ME: replace placeholder copy and screenshots with the real thing.
// Screenshots below reuse existing images purely as placeholders.
// ---------------------------------------------------------------------------
const otherWorks = [
    {
        id: 1,
        name: "SokaPro",
        blurb: "Short one-liner about SokaPro.",
        url: "",
        readme: [
            "SokaPro — placeholder README. Describe what it is, why you built it, and the stack. Swap the screenshot for a real capture when ready.",
        ],
        screenshots: ["/images/sokapro-1.svg"],
    },
    {
        id: 2,
        name: "BidsMoto",
        blurb: "Short one-liner about BidsMoto.",
        url: "",
        readme: [
            "BidsMoto — placeholder README. Add the details whenever you're ready.",
        ],
        screenshots: ["/images/bidsmoto-1.svg"],
    },
    {
        id: 3,
        name: "Tiko254",
        blurb: "Short one-liner about Tiko254.",
        url: "",
        readme: [
            "Tiko254 — placeholder README. Add the details whenever you're ready.",
        ],
        screenshots: ["/images/tiko254-1.svg"],
    },
    {
        id: 4,
        name: "Micro-Fin USSD",
        blurb: "Short one-liner about the Micro-Fin USSD service.",
        url: "",
        readme: [
            "Micro-Fin USSD — placeholder README. Add the details whenever you're ready.",
        ],
        screenshots: ["/images/microfin-ussd-1.svg"],
    },
    // EDIT ME: add more small works here, same shape
    // { id, name, blurb, url, readme: [..paragraphs], screenshots: [..urls] }.
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
    expertise,
    timeline,
    otherWorks,
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
            name: "Tribe-All-Crochets Online Store",
            icon: "/images/folder3.png",
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
                        "Tribe All Crochets Online Store is a vibrant e-commerce platform dedicated to showcasing and selling handcrafted crochet products made by talented artisans from various communities.",
                        "Instead of mass-produced items, it offers unique, high-quality crochet pieces that reflect the rich cultural heritage and creativity of the artisans.",
                        "Think of it like a virtual marketplace where customers can explore and purchase one-of-a-kind crochet items while supporting local craftsmanship.",
                        "It's built with modern web technologies, ensuring a seamless shopping experience, secure transactions, and responsive design for all devices.",
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
                    imageUrl: "/images/tribe-all-1.webp",
                },
                {
                    id: 504,
                    name: "tribe-all-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-64 left-8",
                    imageUrl: "/images/tribe-all-2.webp",
                },
            ],
        },

        // VertiGrow Project
        {
            id: 6,
            name: "VertiGrow Online Store",
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
                    imageUrl: "/images/verti-grow-1.webp",
                },
                {
                    id: 604,
                    name: "verti-grow-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-40 left-24",
                    imageUrl: "/images/verti-grow-2.webp",
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
                    imageUrl: "/images/shower-to-shower-1.webp",
                },
                {
                    id: 704,
                    name: "Image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 left-54",
                    imageUrl: "/images/shower-to-shower-2.webp",
                },
                {
                    id: 705,
                    name: "Image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 right-54",
                    imageUrl: "/images/shower-to-shower-3.webp",
                },
                {
                    id: 706,
                    name: "Image-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 left-14",
                    imageUrl: "/images/shower-to-shower-4.webp",
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
                    imageUrl: "/images/westlandspaws-1.webp",
                },
                {
                    id: 804,
                    name: "westlandspaws-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-24 right-16",
                    imageUrl: "/images/westlandspaws-2.webp",
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
                    imageUrl: "/images/woa-1.webp",
                },
                {
                    id: 904,
                    name: "woa-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-112 right-8",
                    imageUrl: "/images/woa-2.webp",
                },
                {
                    id: 905,
                    name: "woa-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-133 left-8",
                    imageUrl: "/images/woa-3.webp",
                },
                {
                    id: 906,
                    name: "woa-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-56 right-18",
                    imageUrl: "/images/woa-4.webp",
                },
            ],
        },


        // Meat Lovers Project
        {
            id: 10,
            name: "Meat Lovers Restaurant Website",
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
                    imageUrl: "/images/meat-lovers-1.webp",
                },
                {
                    id: 1004,
                    name: "image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-60 right-24",
                    imageUrl: "/images/meat-lovers-2.webp",
                },
                {
                    id: 1005,
                    name: "image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-80 left-24",
                    imageUrl: "/images/meat-lovers-3.webp",
                },
            ],
        },


        // Crystal Vets Project
        {
            id: 11,
            name: "Crystal Vets Website",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-92 right-80",
            children: [
                {
                    id: 1101,
                    name: "Crystal Vets.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-16 right-12",
                    description: [
                        "Crystal Vets is a premier veterinary clinic dedicated to providing exceptional care for your",
                        " beloved pets. Located in Nairobi, Kenya, we offer a wide range of services including wellness exams, vaccinations, surgical procedures, dental care, and emergency services. Our team of experienced veterinarians and compassionate staff are committed to ensuring the health and well-being of your furry family members. At Crystal Vets, we believe in building lasting relationships with our clients and their pets through personalized care and attention.",
                    ],
                },
                {
                    id: 1102,
                    name: "crystalvets.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://crystalvets.com/",
                    position: "top-4 left-20",
                },
                {
                    id: 1103,
                    name: "image-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 left-16",
                    imageUrl: "/images/cvets-1.webp",
                },
                {
                    id: 1104,
                    name: "image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-60 right-24",
                    imageUrl: "/images/cvets-2.webp",
                },
                {
                    id: 1105,
                    name: "image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-80 left-24",
                    imageUrl: "/images/cvets-3.webp",
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
            name: "Tribe All Crochets Online Store",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-5 left-5",
            owner: "Tribe All Crochets",
            // desktop_home: set to false to hide this project from the desktop/mobile home.
            desktop_home: true,
            project_type: "web_app",
            children: [
                {
                    id: 501,
                    name: "Tribe All Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-12 left-16",
                    description: [
                        "Tribe All Crochets Online Store is a vibrant e-commerce platform dedicated to showcasing and selling handcrafted crochet products made by talented artisans from various communities.",
                        "Instead of mass-produced items, it offers unique, high-quality crochet pieces that reflect the rich cultural heritage and creativity of the artisans.",
                        "Think of it like a virtual marketplace where customers can explore and purchase one-of-a-kind crochet items while supporting local craftsmanship.",
                        "It's built with modern web technologies, ensuring a seamless shopping experience, secure transactions, and responsive design for all devices.",
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
                    imageUrl: "/images/tribe-all-1.webp",
                },
                {
                    id: 504,
                    name: "tribe-all-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-64 left-8",
                    imageUrl: "/images/tribe-all-2.webp",
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
            owner: "VertiGrow",
            desktop_home: true,
            project_type: "web_app",
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
                    imageUrl: "/images/verti-grow-1.webp",
                },
                {
                    id: 604,
                    name: "verti-grow-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-40 left-24",
                    imageUrl: "/images/verti-grow-2.webp",
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
            owner: "Shower to Shower",
            desktop_home: true,
            project_type: "web_app",
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
                    imageUrl: "/images/shower-to-shower-1.webp",
                },
                {
                    id: 704,
                    name: "Image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 left-54",
                    imageUrl: "/images/shower-to-shower-2.webp",
                },
                {
                    id: 705,
                    name: "Image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-50 right-54",
                    imageUrl: "/images/shower-to-shower-3.webp",
                },
                {
                    id: 706,
                    name: "Image-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-90 left-14",
                    imageUrl: "/images/shower-to-shower-4.webp",
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
            owner: "Westland Paws Clinic",
            desktop_home: true,
            project_type: "web_app",
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
                    imageUrl: "/images/westlandspaws-1.webp",
                },
                {
                    id: 804,
                    name: "westlandspaws-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-24 right-16",
                    imageUrl: "/images/westlandspaws-2.webp",
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
            owner: "Wanzau, Odhiambo & Associates Advocates",
            desktop_home: true,
            project_type: "web_app",
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
                    imageUrl: "/images/woa-1.webp",
                },
                {
                    id: 904,
                    name: "woa-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-112 right-8",
                    imageUrl: "/images/woa-2.webp",
                },
                {
                    id: 905,
                    name: "woa-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-133 left-8",
                    imageUrl: "/images/woa-3.webp",
                },
                {
                    id: 906,
                    name: "woa-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-56 right-18",
                    imageUrl: "/images/woa-4.webp",
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
            owner: "Meat Lovers Restaurant",
            desktop_home: true,
            project_type: "web_app",
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
                    imageUrl: "/images/meat-lovers-1.webp",
                },
                {
                    id: 1004,
                    name: "image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-60 right-24",
                    imageUrl: "/images/meat-lovers-2.webp",
                },
                
                {
                    id: 1005,
                    name: "image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-80 left-24",
                    imageUrl: "/images/meat-lovers-3.webp",
                },
            ],
        },


        // Crystal Vets Project
        {
            id: 11,
            name: "Crystal Vets Website Project",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-72 left-70",
            owner: "Crystal Vets",
            desktop_home: true,
            project_type: "web_app",
            children: [
                {
                    id: 1101,
                    name: "Crystal Vets.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-16 right-12",
                    description: [
                        "Crystal Vets is a premier veterinary clinic dedicated to providing exceptional care for your",
                        " beloved pets. Located in Nairobi, Kenya, we offer a wide range of services including wellness exams, vaccinations, surgical procedures, dental care, and emergency services. Our team of experienced veterinarians and compassionate staff are committed to ensuring the health and well-being of your furry family members. At Crystal Vets, we believe in building lasting relationships with our clients and their pets through personalized care and attention.",
                    ],
                },
                {
                    id: 1102,
                    name: "crystalvets.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://crystalvets.com/",
                    position: "top-4 left-20",
                },
                {
                    id: 1103,
                    name: "image-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 left-16",
                    imageUrl: "/images/cvets-1.webp",
                },
                {
                    id: 1104,
                    name: "image-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-60 right-24",
                    imageUrl: "/images/cvets-2.webp",
                },
                {
                    id: 1105,
                    name: "image-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-80 left-24",
                    imageUrl: "/images/cvets-3.webp",
                },
            ],
        },

        // MossBets Project (Android app on Google Play)
        {
            id: 12,
            name: "MossBets App",
            icon: "/images/folder.png",
            appIcon: "/images/mossbets-1.webp",
            kind: "folder",
            position: "top-130 left-70",
            owner: "MossBerg Solutions",
            desktop_home: true,
            project_type: "mob_app",
            children: [
                {
                    id: 1201,
                    name: "MossBets.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-12 left-12",
                    description: [
                        "MossBets is a Flutter sports-betting app on Google Play. Live odds board, in-play match center, expandable markets, and a persistent bet slip with singles + accumulators.",
                        "Built with GetX for state, a repository pattern over a REST API, and signed requests. Tuned for shaky mobile networks: skeleton loaders, offline detection, and pull-to-refresh throughout.",
                    ],
                },
                {
                    id: 1202,
                    name: "play.google.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://play.google.com/store/apps/details?id=com.mossberg.mossbets",
                    position: "top-8 right-20",
                },
                {
                    id: 1203,
                    name: "mossbets-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 right-12",
                    imageUrl: "/images/mossbets-1.webp",
                },
            ],
        },

        // Macfolio (this site)
        {
            id: 13,
            name: "Jon-EL's Macfolio",
            icon: "/images/folder.png",
            appIcon: "/macbook.png",
            kind: "folder",
            position: "top-170 left-5",
            owner: "Personal",
            desktop_home: true,
            project_type: "web_app",
            children: [
                {
                    id: 1301,
                    name: "Macfolio.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-10 left-10",
                    description: [
                        "This site. A portfolio with two faces: a macOS-style desktop UI — draggable windows, finder, dock, terminal — and an Android-style mobile UI with an app grid, persistent dock, launch animations, back-stack navigation, and pull-to-refresh.",
                        "React + Vite + GSAP + Zustand, built once, served as static files from an Nginx container on a Hostinger VPS. Push to main → GitHub Actions builds and rsyncs in under a minute.",
                    ],
                },
                {
                    id: 1302,
                    name: "kabiujohn.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://kabiujohn.com",
                    position: "top-6 right-16",
                },
                {
                    id: 1303,
                    name: "macfolio-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-40 left-12",
                    imageUrl: "/images/macfolio-1.webp",
                },
                {
                    id: 1304,
                    name: "macfolio-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-56 right-8",
                    imageUrl: "/images/macfolio-2.webp",
                },
                {
                    id: 1305,
                    name: "macfolio-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-72 left-20",
                    imageUrl: "/images/macfolio-3.webp",
                },
                {
                    id: 1306,
                    name: "macfolio-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-88 right-20",
                    imageUrl: "/images/macfolio-4.webp",
                },
            ],
        },

        // Fleeks Dashboard
        // EDIT ME: replace the placeholder copy and swap the screenshot SVGs
        // for real captures when ready.
        {
            id: 14,
            name: "Fleeks Dashboard",
            icon: "/images/folder.png",
            // appIcon = the app/site logo shown on the mobile app grid AND the
            // desktop home. Set this per project to use a real brand icon.
            appIcon: "/images/fleeks-favicon.png",
            kind: "folder",
            position: "top-210 left-5",
            owner: "Liden Co LTD",
            desktop_home: true,
            project_type: "web_app",
            children: [
                {
                    id: 1410,
                    name: "fleeks.io",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://fleeks.io",
                    position: "top-8 right-16",
                },
                {
                    id: 1401,
                    name: "Fleeks Dashboard.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-12 left-12",
                    description: [
                        "Fleeks is a bulk mobile-messaging platform for businesses across Africa — SMS, USSD, Voice, Airtime and Mobile Data APIs with 80+ telco connections in one unified engagement console.",
                        "I was responsible for upgrading its UI and the underlying tech.",
                        "The dashboard covers wallet & billing, a campaign outbox with live delivery analytics, contact management, premium & shortcode SMS, and admin tooling.",
                        "Note: figures in these screenshots are blurred demo/client data.",
                    ],
                },
                {
                    id: 1411,
                    name: "README.md",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-12 right-12",
                    description: [
                        "Fleeks — Bulk Mobile Messaging Platform",
                        "Fleeks is a unified engagement platform for businesses across Africa: SMS, USSD, Voice, Airtime and Mobile Data APIs over 80+ telco connections — bridging enterprise-grade marketing automation with developer APIs.",
                        "— My role —",
                        "I led the upgrade of the product's UI and its underlying tech.",
                        "— Authentication —",
                        "Sign in by phone (with country code, e.g. KE +254) or by email, with password visibility toggle, remember-me, and account creation.",
                        "— Dashboard —",
                        "Wallet overview (balance, top-up, alert threshold), message statistics (sent / delivered / failed / pending), analytics charts (delivery, trends, costs, balance) and SMS usage — in both light and dark themes.",
                        "— Messaging —",
                        "Bulk SMS outbox (sent / scheduled / pending) with per-campaign delivery breakdowns, plus Premium SMS reports, Shortcode and Alphanumeric sender IDs. Compose supports a sender ID, recipients or saved contacts, campaign naming, CSV/file upload, and scheduling.",
                        "— Contacts & operations —",
                        "Contact groups with CSV import and custom fields, an Inbox, USSD, Billing (BulkRate Card and invoices), plus Admin and user management.",
                        "— Stack —",
                        "React front-end with a PHP backend.",
                        "Note: all figures in the screenshots are blurred demo/client data.",
                    ],
                },
                {
                    id: 1402,
                    name: "fleeks-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 left-16",
                    imageUrl: "/images/fleeks-1.webp",
                },
                {
                    id: 1403,
                    name: "fleeks-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 right-16",
                    imageUrl: "/images/fleeks-2.webp",
                },
                {
                    id: 1404,
                    name: "fleeks-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-72 left-16",
                    imageUrl: "/images/fleeks-3.webp",
                },
                {
                    id: 1405,
                    name: "fleeks-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-72 right-16",
                    imageUrl: "/images/fleeks-4.webp",
                },
                {
                    id: 1406,
                    name: "fleeks-5.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-96 left-16",
                    imageUrl: "/images/fleeks-5.webp",
                },
                {
                    id: 1407,
                    name: "fleeks-6.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-96 right-16",
                    imageUrl: "/images/fleeks-6.webp",
                },
                {
                    id: 1408,
                    name: "fleeks-7.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-[28rem] left-16",
                    imageUrl: "/images/fleeks-7.webp",
                },
                {
                    id: 1409,
                    name: "fleeks-8.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-[28rem] right-16",
                    imageUrl: "/images/fleeks-8.webp",
                },
            ],
        },

        // MossBets Dashboard (PHP Backend)
        {
            id: 15,
            name: "MossBets Dashboard + PHP BE",
            icon: "/images/folder.png",
            appIcon: "/images/mossbets-logo.png",
            // Wide wordmark — show it sitting on a (yellow) folder on the desktop home.
            iconOnFolder: true,
            folderImg: "/images/folder-yellow.png",
            kind: "folder",
            position: "top-210 left-70",
            owner: "MossBerg Solutions",
            desktop_home: true,
            project_type: ["web_app", "be_app"],
            children: [
                {
                    id: 1501,
                    name: "MossBets BO.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-12 left-12",
                    description: [
                        "MossBets Back Office — the internal admin/operator console for the MossBets betting platform (Vue 3 front-end over a PHP REST backend). I upgraded its UI and underlying tech.",
                        "Open README.md for the full write-up. All figures in the screenshots are blurred demo data.",
                    ],
                },
                {
                    id: 1502,
                    name: "README.md",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-12 right-12",
                    description: [
                        "MossBets Back Office (BO) — Betting Operations Console",
                        "The MossBets BO is the internal admin/operator console for the MossBets sportsbook & casino platform: customer management, transactions, sportsbook & bets, bonuses, taxes, SMS campaigns, reporting and system administration — all over a PHP REST backend.",
                        "— My role —",
                        "I led the upgrade of the BO's UI and its underlying tech.",
                        "— Highlights —",
                        "Secure login with OTP verification; a date-range dashboard with revenue / stake / wins / liabilities KPIs and charts; deep customer search (phone, M-Pesa code, bet ref, profile & account IDs) opening full 360° profiles with account, financial and betting summaries.",
                        "Bulk SMS with audience targeting (profile status, game type, balance, depositor type, date range), live character/page counting, an SMS preview, and send-now or scheduled delivery.",
                        "Granular RBAC: roles plus 120+ individual permissions per system user, with create/edit-user flows and confirm dialogs.",
                        "— Responsive tables —",
                        "A reusable DataTable component makes every table responsive: it switches to a label/value card view on mobile (≤768px), hides lower-priority columns per breakpoint (hidden-mobile / hidden-tablet), and adds momentum scrolling with custom scrollbars — keeping dense operational data usable on phone, tablet and desktop.",
                        "— Stack —",
                        "Vue 3 + Vite, Vuex (persisted state) and Vue Router; Tailwind CSS + Sass; Axios against a PHP REST API; Chart.js for analytics, SweetAlert2 for dialogs, vue-pincode-input for OTP, and SheetJS (xlsx) for report exports.",
                        "Note: all figures, names, numbers and the URL in the screenshots are blurred/redacted demo data.",
                    ],
                },
                {
                    id: 1503,
                    name: "mossbets-web-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 left-16",
                    imageUrl: "/images/mossbets-web-1.webp",
                },
                {
                    id: 1504,
                    name: "mossbets-web-2.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 right-16",
                    imageUrl: "/images/mossbets-web-2.webp",
                },
                {
                    id: 1505,
                    name: "mossbets-web-3.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-72 left-16",
                    imageUrl: "/images/mossbets-web-3.webp",
                },
                {
                    id: 1506,
                    name: "mossbets-web-4.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-72 right-16",
                    imageUrl: "/images/mossbets-web-4.webp",
                },
                {
                    id: 1507,
                    name: "mossbets-web-5.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-96 left-16",
                    imageUrl: "/images/mossbets-web-5.webp",
                },
                {
                    id: 1508,
                    name: "mossbets-web-6.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-96 right-16",
                    imageUrl: "/images/mossbets-web-6.webp",
                },
                {
                    id: 1509,
                    name: "mossbets-web-7.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-[28rem] left-16",
                    imageUrl: "/images/mossbets-web-7.webp",
                },
                {
                    id: 1510,
                    name: "mossbets-web-8.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-[28rem] right-16",
                    imageUrl: "/images/mossbets-web-8.webp",
                },
                {
                    id: 1511,
                    name: "mossbets-web-9.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-[34rem] left-16",
                    imageUrl: "/images/mossbets-web-9.webp",
                },
                {
                    id: 1512,
                    name: "mossbets-web-10.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-[34rem] right-16",
                    imageUrl: "/images/mossbets-web-10.webp",
                },
            ],
        },

        // MossBets B2B Dashboard (PHP Backend)
        {
            id: 16,
            name: "MossBets B2B Dashboard + PHP BE",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-250 left-5",
            owner: "MossBerg Solutions",
            desktop_home: true,
            project_type: ["web_app", "be_app"],
            children: [
                {
                    id: 1601,
                    name: "MossBets B2B Dashboard.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-12 left-12",
                    description: [
                        "MossBets B2B Dashboard with a PHP backend — placeholder description. Add the partner/agent-facing features and the PHP API behind it.",
                    ],
                },
                {
                    id: 1602,
                    name: "mossbets-b2b-1.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-44 left-16",
                    imageUrl: "/images/mossbets-b2b-1.svg",
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
    expertise: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    timeline: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    otherworks: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };