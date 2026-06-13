import {Draggable} from 'gsap/Draggable';
import gsap from "gsap";

import {Navbar, Welcome, Dock, Home, DynamicWindows} from '#components'
import {Terminal, Safari, Resume, Finder, Text, Contact, Gallery, Expertise, Timeline, OtherWorks} from "#windows";

gsap.registerPlugin(Draggable)

const DesktopOS = () => (
    <main>
        <Navbar/>
        <Welcome/>
        <Dock/>

        <Terminal/>
        <Safari/>
        <Resume/>
        <Finder/>
        <Text/>
        <Contact/>
        <Gallery/>
        <Expertise/>
        <Timeline/>
        <OtherWorks/>
        <DynamicWindows/>
        <Home/>
    </main>
)

export default DesktopOS
