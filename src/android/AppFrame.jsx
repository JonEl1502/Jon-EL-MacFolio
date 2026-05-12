import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import {ArrowLeft} from 'lucide-react'
import useAndroidStore from '#android/store.js'

import ProjectApp  from '#android/apps/ProjectApp.jsx'
import ResumeApp   from '#android/apps/ResumeApp.jsx'
import ContactApp  from '#android/apps/ContactApp.jsx'
import GalleryApp  from '#android/apps/GalleryApp.jsx'
import ArticlesApp from '#android/apps/ArticlesApp.jsx'
import SkillsApp   from '#android/apps/SkillsApp.jsx'
import PortfolioApp from '#android/apps/PortfolioApp.jsx'
import AboutApp    from '#android/apps/AboutApp.jsx'
import SocialsApp  from '#android/apps/SocialsApp.jsx'

const APPS = {
    'project':           ProjectApp,
    'system-resume':     ResumeApp,
    'system-contact':    ContactApp,
    'system-gallery':    GalleryApp,
    'system-articles':   ArticlesApp,
    'system-skills':     SkillsApp,
    'system-portfolio':  PortfolioApp,
    'system-about':      AboutApp,
    'system-socials':    SocialsApp,
}

const TITLES = {
    'system-resume':    'Resume',
    'system-contact':   'Contact',
    'system-gallery':   'Gallery',
    'system-articles':  'Articles',
    'system-skills':    'Skills',
    'system-portfolio': 'Portfolio',
    'system-about':     'About Me',
    'system-socials':   'Socials',
}

const AppFrame = () => {
    const {openAppId, appData, launchRect, closeApp} = useAndroidStore()
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el || !openAppId) return

        const vw = window.innerWidth
        const vh = window.innerHeight

        // If we know where the icon was tapped, expand from there. Otherwise
        // do a simple zoom-in from center.
        if (launchRect) {
            const sx = launchRect.w / vw
            const sy = launchRect.h / vh
            const tx = launchRect.x + launchRect.w / 2 - vw / 2
            const ty = launchRect.y + launchRect.h / 2 - vh / 2
            gsap.fromTo(el,
                {x: tx, y: ty, scaleX: sx, scaleY: sy, opacity: 0, borderRadius: '28px'},
                {x: 0, y: 0, scaleX: 1, scaleY: 1, opacity: 1, borderRadius: '0px',
                    duration: 0.32, ease: 'power3.out'})
        } else {
            gsap.fromTo(el, {scale: 0.92, opacity: 0}, {scale: 1, opacity: 1, duration: 0.22, ease: 'power2.out'})
        }
    }, [openAppId, launchRect])

    if (!openAppId) return null

    const Component = APPS[openAppId]
    const title = TITLES[openAppId] || appData?.name || ''

    return (
        <section className="aos-app-frame" ref={ref}>
            <header className="aos-app-header">
                <button type="button" className="aos-app-back" onClick={closeApp} aria-label="Back">
                    <ArrowLeft size={20}/>
                </button>
                <h1 className="aos-app-title">{title}</h1>
                <span className="aos-app-header-spacer"/>
            </header>

            <div className="aos-app-body">
                {Component
                    ? <Component data={appData}/>
                    : <div className="aos-app-empty">Coming soon</div>}
            </div>
        </section>
    )
}

export default AppFrame
