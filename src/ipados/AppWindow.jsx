import {useEffect, useRef} from 'react'
import gsap from 'gsap'
import {ChevronLeft, ExternalLink} from 'lucide-react'

import useShellStore from '#android/store.js'

import ProjectApp     from '#android/apps/ProjectApp.jsx'
import ResumeApp      from '#android/apps/ResumeApp.jsx'
import ContactApp     from '#android/apps/ContactApp.jsx'
import GalleryApp     from '#android/apps/GalleryApp.jsx'
import ArticlesApp    from '#android/apps/ArticlesApp.jsx'
import SkillsApp      from '#android/apps/SkillsApp.jsx'
import AboutApp       from '#android/apps/AboutApp.jsx'
import SocialsApp     from '#android/apps/SocialsApp.jsx'
import ExpertiseApp   from '#android/apps/ExpertiseApp.jsx'
import TimelineApp    from '#android/apps/TimelineApp.jsx'
import OtherWorksApp  from '#android/apps/OtherWorksApp.jsx'
import PortfolioSplit from '#ipados/apps/PortfolioSplit.jsx'

// Same content components as the Android shell — only the chrome around them
// is iPad-specific. Portfolio is the exception: it gets a split view.
const APPS = {
    'project':           ProjectApp,
    'system-resume':     ResumeApp,
    'system-contact':    ContactApp,
    'system-gallery':    GalleryApp,
    'system-articles':   ArticlesApp,
    'system-skills':     SkillsApp,
    'system-portfolio':  PortfolioSplit,
    'system-about':      AboutApp,
    'system-socials':    SocialsApp,
    'system-expertise':  ExpertiseApp,
    'system-timeline':   TimelineApp,
    'system-otherworks': OtherWorksApp,
}

const TITLES = {
    'system-resume':     'Resume',
    'system-contact':    'Contact',
    'system-gallery':    'Photos',
    'system-articles':   'Articles',
    'system-skills':     'Skills',
    'system-portfolio':  'Projects',
    'system-about':      'About Me',
    'system-socials':    'Socials',
    'system-expertise':  'Expertise',
    'system-timeline':   'Timeline',
    'system-otherworks': 'Other Works',
}

const EDGE_ZONE  = 28   // px from the left edge that starts a back swipe
const EDGE_COMMIT = 70  // px of travel that commits to going back

const AppWindow = () => {
    const {current, goBack} = useShellStore()
    const ref = useRef(null)
    const edgeRef = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el || !current) return

        const vw = window.innerWidth
        const vh = window.innerHeight
        const rect = current.launchRect

        if (rect) {
            // Grow out of the tapped icon, iOS-style.
            const sx = rect.w / vw
            const sy = rect.h / vh
            const tx = rect.x + rect.w / 2 - vw / 2
            const ty = rect.y + rect.h / 2 - vh / 2
            gsap.fromTo(el,
                {x: tx, y: ty, scaleX: sx, scaleY: sy, opacity: 0, borderRadius: '26%'},
                {x: 0, y: 0, scaleX: 1, scaleY: 1, opacity: 1, borderRadius: '0%',
                    duration: 0.38, ease: 'power3.out'})
        } else {
            gsap.fromTo(el, {scale: 0.97, opacity: 0}, {scale: 1, opacity: 1, duration: 0.2, ease: 'power2.out'})
        }
    }, [current?.kind, current?.data?.name])

    // Swipe in from the left edge to go back, like iPadOS.
    const onPointerDown = (e) => {
        edgeRef.current = e.clientX <= EDGE_ZONE ? {x: e.clientX, y: e.clientY} : null
    }
    const onPointerMove = (e) => {
        const s = edgeRef.current
        if (!s) return
        const dx = e.clientX - s.x
        const dy = Math.abs(e.clientY - s.y)
        if (dx > EDGE_COMMIT && dx > dy) {
            edgeRef.current = null
            goBack()
        }
    }
    const clearEdge = () => { edgeRef.current = null }

    if (!current) return null

    const Component = APPS[current.kind]
    const title = TITLES[current.kind] || current.data?.name || ''
    const liveUrl = current.kind === 'project' ? current.data?.url : null

    return (
        <section className="ios-app-frame"
                 ref={ref}
                 onPointerDown={onPointerDown}
                 onPointerMove={onPointerMove}
                 onPointerUp={clearEdge}
                 onPointerCancel={clearEdge}>
            <header className="ios-nav">
                <button type="button" className="ios-nav-back" onClick={goBack}>
                    <ChevronLeft size={22}/> <span>Home</span>
                </button>
                <h1 className="ios-nav-title">{title}</h1>
                <div className="ios-nav-actions">
                    {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noreferrer" aria-label="Open live site">
                            <ExternalLink size={18}/>
                        </a>
                    )}
                </div>
            </header>

            <div className="ios-app-body aos-app-body">
                {Component
                    ? <Component data={current.data} shell="ipados"/>
                    : <div className="aos-app-empty">Coming soon</div>}
            </div>
        </section>
    )
}

export default AppWindow
