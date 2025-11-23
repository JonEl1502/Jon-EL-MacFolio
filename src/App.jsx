// External
import {Draggable} from 'gsap/Draggable';
import gsap from "gsap";

// Internal
import {Navbar, Welcome, Dock} from '#components'
import Terminal from "#windows/Terminal.jsx";


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
        </main>
    )
}
export default App
