//
import {clsx} from "clsx";
import {useGSAP} from "@gsap/react";
import {Draggable} from "gsap/Draggable";

// Internal
import {locations} from '#constants'
import useWindowStore from "#store/window.js";
import useLocationStore from "#store/location.js";

const projects = locations.work.children ?? [];

// Convert a position string like "top-12 left-16" into an inline style object.
const parsePositionToStyle = (pos = "") => {
    const style = {};
    const tokens = String(pos).split(/\s+/).filter(Boolean);

    // Tailwind-like spacing map (rem values)
    const spacing = {
        0: 0,
        0.5: 0.125,
        1: 0.25,
        1.5: 0.375,
        2: 0.5,
        2.5: 0.625,
        3: 0.75,
        3.5: 0.875,
        4: 1,
        5: 1.25,
        6: 1.5,
        8: 2,
        10: 2.5,
        12: 3,
        16: 4,
        20: 5,
        24: 6,
        28: 7,
        32: 8,
        36: 9,
        40: 10,
        44: 11,
        48: 12,
        52: 13,
        56: 14,
        60: 15,
        64: 16,
        72: 18,
        80: 20,
        96: 24,
    };

    tokens.forEach((t) => {
        // match e.g. top-12, left-5, right-24
        const m = t.match(/^(top|left|right|bottom)-([0-9.]+)$/);
        if (!m) return;
        const dir = m[1];
        const val = Number(m[2]);

        // If value matches known spacing, convert to rem->px, else treat as px
        if (Object.prototype.hasOwnProperty.call(spacing, val)) {
            const rem = spacing[val];
            style[dir] = `${rem * 16}px`;
        } else {
            // fallback: treat as px
            style[dir] = `${val}px`;
        }
    });

    return style;
};
const Home = () => {
    const {setActiveLocation} = useLocationStore();
    const {openWindow} = useWindowStore();

    const handleOpenProjectFinder = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    };

    //GSAP
    useGSAP(() => {
        Draggable.create(".folder");
    }, []);
    // Render
    return <section id="home">
        <ul>
            {projects.map((project) => (
                    <li key={project.id}
                        className={clsx("group folder")}
                        style={parsePositionToStyle(project.position)}
                    >
                        <img src="/images/folder.png" alt={project.name}
                             onClick={() => handleOpenProjectFinder(project)}
                        />
                        <p>{project.name}</p>
                    </li>
                )
            )}
        </ul>
    </section>
}
export default Home
