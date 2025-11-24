//
import {clsx} from "clsx";
import {useGSAP} from "@gsap/react";
import {Draggable} from "gsap/Draggable";

// Internal
import {locations} from '#constants'
import useWindowStore from "#store/window.js";
import useLocationStore from "#store/location.js";

const projects = locations.work.children ?? [];
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
                    <li key={project.id} className={clsx("group folder", project.windowPosition)}>
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
