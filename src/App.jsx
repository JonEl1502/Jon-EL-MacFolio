// External
import {Draggable} from 'gsap/Draggable';
import gsap from "gsap";

// Internal
import {Navbar, Welcome, Dock, Home} from '#components'
import {Terminal, Safari, Resume, Finder, Text, ImageViewer, Contact, Gallery} from "#windows";

// GSAP
gsap.registerPlugin(Draggable)
// Render
const App = () => {
    return (<main>
            <Navbar/>
            <Welcome/>
            <Dock/>

            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <Text/>
            <ImageViewer/>
            <Contact/>
            <Gallery/>
            <Home/>
        </main>)
}
export default App
