//
import {useEffect, useState} from "react";
import {clsx} from "clsx";
import {useGSAP} from "@gsap/react";
import {Draggable} from "gsap/Draggable";

// Internal
import {locations} from '#constants'
import {TYPE_META, typeList} from '#constants/projectTypes.js'
import useWindowStore from "#store/window.js";
import useLocationStore from "#store/location.js";

// Desktop "home" icons come from the same project list as the mobile home, so
// the two stay in sync. Only projects with `desktop_home !== false` are shown.
const projects = (locations.workhome.children ?? []).filter((p) => p.desktop_home !== false);

// Lay the icons out on a tidy grid, but nudge each one a little so the desktop
// feels hand-arranged rather than robotic ("orderly, but not soo orderly").
// Jitter is derived from the project id so it's stable across renders.
//
// The column count is derived from the window width so icons wrap instead of
// running off the right edge on a narrow window, and the gaps tighten (down to
// a floor) when the remaining space is smaller than the ideal spacing.
const MAX_COLS = 6;
const COL_GAP = 220;   // ideal px between columns
const ROW_GAP = 175;   // ideal px between rows
const MIN_COL_GAP = 176;
const MIN_ROW_GAP = 118;
const ORIGIN_X = 40;
const ORIGIN_Y = 36;
const ICON_W = 160;    // widest an icon + its label gets (p is max-w-40)
const ICON_H = 120;    // icon + up to three label lines
const NAVBAR_H = 52;
const DOCK_H = 110;

const clamp = (min, v, max) => Math.max(min, Math.min(max, v));

const useViewport = () => {
    const [size, setSize] = useState(() => ({
        w: typeof window === "undefined" ? 1440 : window.innerWidth,
        h: typeof window === "undefined" ? 900 : window.innerHeight,
    }));
    useEffect(() => {
        const onResize = () => setSize({w: window.innerWidth, h: window.innerHeight});
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);
    return size;
};

const buildGrid = ({w, h}, count) => {
    const usableW = Math.max(ICON_W, w - ORIGIN_X * 2);
    // Pack columns at the tightest allowed spacing, then spread them back out
    // to the ideal gap if there's room — a narrow window gets more columns of
    // closer icons rather than extra rows that run under the dock.
    const cols = clamp(1, Math.floor((usableW - ICON_W) / MIN_COL_GAP) + 1, MAX_COLS);
    const rows = Math.max(1, Math.ceil(count / cols));

    const colGap = cols > 1
        ? clamp(MIN_COL_GAP, (usableW - ICON_W) / (cols - 1), COL_GAP)
        : 0;

    const usableH = Math.max(ICON_H, h - NAVBAR_H - DOCK_H - ORIGIN_Y);
    const rowGap = rows > 1
        ? clamp(MIN_ROW_GAP, (usableH - ICON_H) / (rows - 1), ROW_GAP)
        : ROW_GAP;

    return {cols, colGap, rowGap, maxX: Math.max(8, w - ICON_W - 8)};
};

const homeStyle = (project, index, grid) => {
    const col = index % grid.cols;
    const row = Math.floor(index / grid.cols);
    const id = Number(project.id) || index;
    // Jitter shrinks with the spacing so tightly packed icons never nudge
    // their labels into a neighbour's.
    const swayX = clamp(0, (grid.colGap - ICON_W) / 2, 15);
    const swayY = clamp(0, (grid.rowGap - ICON_H) / 2, 13);
    const jitterX = (((id * 37) % 30) / 15 - 1) * swayX; // -1..~1 of the sway
    const jitterY = (((id * 53) % 26) / 13 - 1) * swayY;
    return {
        left: `${clamp(8, ORIGIN_X + col * grid.colGap + jitterX, grid.maxX)}px`,
        top: `${Math.max(8, ORIGIN_Y + row * grid.rowGap + jitterY)}px`,
    };
};

const Home = () => {
    const {setActiveLocation} = useLocationStore();
    const {openWindow} = useWindowStore();
    const grid = buildGrid(useViewport(), projects.length);

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
            {projects.map((project, index) => {
                const types = typeList(project.project_type)
                return (
                    <li key={project.id}
                        className={clsx("group folder")}
                        style={homeStyle(project, index, grid)}
                    >
                        <span className="folder-ico" onClick={() => handleOpenProjectFinder(project)}>
                            {project.iconOnFolder && project.appIcon ? (
                                <span className="folder-stack">
                                    <img src={project.folderImg || "/images/folder.png"} alt="" className="folder-bg"/>
                                    <img src={project.appIcon} alt={project.name} className="folder-logo"/>
                                </span>
                            ) : (
                                <img src={project.appIcon || "/images/folder.png"} alt={project.name}
                                     className={types.includes('mob_app') ? 'mob' : undefined}
                                />
                            )}
                            {types.length > 0 && (
                                <span className="folder-badges">
                                    {types.map((t) => {
                                        const {Icon, bg} = TYPE_META[t]
                                        return (
                                            <span key={t} className="folder-badge" style={{background: bg}}>
                                                <Icon size={11}/>
                                            </span>
                                        )
                                    })}
                                </span>
                            )}
                        </span>
                        <p>{project.name}</p>
                    </li>
                )
            })}
        </ul>
    </section>
}
export default Home
