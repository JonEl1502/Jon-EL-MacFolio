// External
import {Draggable} from 'gsap/Draggable';
import gsap from "gsap";

// Internal
import {Navbar, Welcome, Dock} from '#components'
import Terminal from "#windows/Terminal.jsx";
import Safari from "#windows/Safari.jsx";
import Resume from "#windows/Resume.jsx";
import Finder from "#windows/Finder.jsx";
import Text from "#windows/Text.jsx";
import ImageViewer from "#windows/ImageViewer.jsx";
import Contact from "#windows/Contact.jsx";

// GSAP
gsap.registerPlugin(Draggable)
// Render
const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text />
            <ImageViewer />
            <Contact />
        </main>
    )
}
export default App
