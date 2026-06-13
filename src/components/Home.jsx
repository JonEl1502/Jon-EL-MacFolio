//
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
const COLS = 6;
const COL_GAP = 220;   // px between columns
const ROW_GAP = 175;   // px between rows
const ORIGIN_X = 40;
const ORIGIN_Y = 36;

const homeStyle = (project, index) => {
    const col = index % COLS;
    const row = Math.floor(index / COLS);
    const id = Number(project.id) || index;
    const jitterX = ((id * 37) % 30) - 15; // -15..14
    const jitterY = ((id * 53) % 26) - 13; // -13..12
    return {
        left: `${ORIGIN_X + col * COL_GAP + jitterX}px`,
        top: `${ORIGIN_Y + row * ROW_GAP + jitterY}px`,
    };
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
            {projects.map((project, index) => {
                const types = typeList(project.project_type)
                return (
                    <li key={project.id}
                        className={clsx("group folder")}
                        style={homeStyle(project, index)}
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
