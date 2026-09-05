import {useRef, useState} from 'react'

import {homeApps} from '#android/apps.js'
import AppIcon from '#ipados/AppIcon.jsx'
import {ClockWidget, WeatherWidget, FeaturedWidget} from '#ipados/Widgets.jsx'

// Page 1 mirrors the Android shell's "intro" set: three system apps plus three
// flagship projects. Everything else flows onto page 2.
const PAGE_ONE_IDS = [
    'about', 'articles', 'skills',
    'project-12', 'project-11', 'project-9', // MossBets · SanaPets · WOAdvocates
]
const FEATURED_ID = 'project-12'

const PAGE_COUNT = 2
const SWIPE_LOCK_THRESHOLD = 10   // px of travel before we commit to h/v
const SWIPE_RUBBER_BAND    = 0.3  // resistance past the first/last page

const PageDots = ({page, count, onPick}) => (
    <div className="ios-page-dots">
        {Array.from({length: count}).map((_, i) => (
            <button key={i}
                    type="button"
                    className={i === page ? 'active' : ''}
                    aria-label={`Page ${i + 1}`}
                    aria-current={i === page ? 'page' : undefined}
                    onClick={() => onPick(i)}/>
        ))}
    </div>
)

const pickApps = (ids) =>
    ids.map((id) => homeApps.find((a) => a.id === id)).filter(Boolean)

const HomeScreen = ({onOpenSearch}) => {
    const [page, setPage] = useState(0)
    const [dragX, setDragX] = useState(0)
    const [dragging, setDragging] = useState(false)
    const startRef = useRef(null)

    const page1 = pickApps(PAGE_ONE_IDS)
    const onPage1 = new Set(PAGE_ONE_IDS)
    const page2 = homeApps.filter((a) => !onPage1.has(a.id))

    // Pointer events so the pager works under both a finger and a trackpad
    // (handy when the iPad layout is opened on a desktop at /ipad).
    const onPointerDown = (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return
        startRef.current = {
            x: e.clientX,
            y: e.clientY,
            locked: null,   // 'h' → our pager owns it; 'v' → let the list scroll
            width: e.currentTarget.clientWidth || 1,
        }
    }
    const onPointerMove = (e) => {
        const s = startRef.current
        if (!s) return
        const dx = e.clientX - s.x
        const dy = e.clientY - s.y
        if (s.locked === null) {
            if (Math.abs(dx) < SWIPE_LOCK_THRESHOLD && Math.abs(dy) < SWIPE_LOCK_THRESHOLD) return
            s.locked = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v'
            if (s.locked === 'h') setDragging(true)
        }
        if (s.locked !== 'h') return
        // Rubber-band past the first/last page so the edges feel bounded.
        let useDx = dx
        if ((page === 0 && dx > 0) || (page === PAGE_COUNT - 1 && dx < 0)) {
            useDx = dx * SWIPE_RUBBER_BAND
        }
        setDragX(useDx)
    }
    const endDrag = (e) => {
        const s = startRef.current
        startRef.current = null
        setDragging(false)
        setDragX(0)
        if (!s || s.locked !== 'h') return
        const dx = (e?.clientX ?? s.x) - s.x
        const threshold = Math.max(60, s.width * 0.15)
        if (dx <= -threshold && page < PAGE_COUNT - 1) setPage(page + 1)
        else if (dx >= threshold && page > 0) setPage(page - 1)
    }

    const strip = {
        transform: `translateX(calc(${-page * (100 / PAGE_COUNT)}% + ${dragX}px))`,
        transition: dragging ? 'none' : 'transform 0.36s cubic-bezier(0.2, 0.8, 0.2, 1)',
    }

    return (
        <div className="ios-home">
            <div className="ios-pager"
                 onPointerDown={onPointerDown}
                 onPointerMove={onPointerMove}
                 onPointerUp={endDrag}
                 onPointerCancel={endDrag}
                 onPointerLeave={endDrag}>
                <div className="ios-pager-strip" style={strip}>
                    <section className="ios-page">
                        <div className="ios-page-scroll ios-page-one">
                            <div className="ios-widget-col">
                                <ClockWidget/>
                                <WeatherWidget/>
                                <FeaturedWidget appId={FEATURED_ID}/>
                            </div>
                            <div className="ios-grid ios-grid-narrow">
                                {page1.map((a) => <AppIcon key={a.id} app={a}/>)}
                            </div>
                        </div>
                    </section>
                    <section className="ios-page">
                        <div className="ios-page-scroll">
                            <div className="ios-grid">
                                {page2.map((a) => <AppIcon key={a.id} app={a}/>)}
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="ios-home-footer">
                <PageDots page={page} count={PAGE_COUNT} onPick={setPage}/>
                <button type="button" className="ios-search-pill" onClick={onOpenSearch}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default HomeScreen
