import {useEffect, useRef, useState} from 'react'
import {CloudSun} from 'lucide-react'

import {homeApps} from '#android/apps.js'
import AppIcon from '#android/AppIcon.jsx'
// import PullToRefresh from '#android/PullToRefresh.jsx'

// Row 1 = three "intro" system apps; row 2 = three named project apps.
const PAGE_ONE_IDS = [
    'about', 'articles', 'skills',
    'project-12', 'project-11', 'project-9', // MossBets · Crystal Vets · WOAdvocates
]

const formatTime = (d) =>
    d.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false})
const formatDate = (d) =>
    d.toLocaleDateString([], {weekday: 'long', month: 'short', day: 'numeric'})

// Drag a widget around inside its parent. Position is stored as a delta from
// the widget's CSS placement so the same hook works for both the top-left-
// anchored clock and the bottom-right-anchored weather card.
const useDraggable = () => {
    const ref = useRef(null)
    const dragRef = useRef(null)
    const [delta, setDelta] = useState({x: 0, y: 0})

    const clampDelta = (dx, dy) => {
        const el = ref.current
        const parent = el?.parentElement
        if (!el || !parent) return {x: dx, y: dy}
        const r  = el.getBoundingClientRect()
        const pr = parent.getBoundingClientRect()
        const baseLeft = r.left - pr.left - delta.x
        const baseTop  = r.top  - pr.top  - delta.y
        const minDx = -baseLeft
        const maxDx = pr.width  - baseLeft - r.width
        const minDy = -baseTop
        const maxDy = pr.height - baseTop  - r.height
        return {
            x: Math.max(minDx, Math.min(maxDx, dx)),
            y: Math.max(minDy, Math.min(maxDy, dy)),
        }
    }

    const onPointerDown = (e) => {
        e.stopPropagation()
        dragRef.current = {sx: e.clientX, sy: e.clientY, dx: delta.x, dy: delta.y}
        e.currentTarget.setPointerCapture?.(e.pointerId)
    }
    const onPointerMove = (e) => {
        if (!dragRef.current) return
        e.stopPropagation()
        const dx = dragRef.current.dx + (e.clientX - dragRef.current.sx)
        const dy = dragRef.current.dy + (e.clientY - dragRef.current.sy)
        setDelta(clampDelta(dx, dy))
    }
    const onPointerUp = (e) => {
        if (dragRef.current) {
            try { e.currentTarget.releasePointerCapture?.(e.pointerId) } catch { /* noop */ }
        }
        dragRef.current = null
    }
    const stopTouch = (e) => e.stopPropagation()

    return {
        ref,
        style: {transform: `translate(${delta.x}px, ${delta.y}px)`},
        handlers: {
            onPointerDown, onPointerMove,
            onPointerUp, onPointerCancel: onPointerUp,
            onTouchStart: stopTouch, onTouchMove: stopTouch,
        },
    }
}

const ClockWidget = () => {
    const [now, setNow] = useState(() => new Date())
    const drag = useDraggable()

    useEffect(() => {
        const t = setInterval(() => setNow(new Date()), 30_000)
        return () => clearInterval(t)
    }, [])

    return (
        <div ref={drag.ref}
             className="aos-clock-widget aos-draggable"
             style={drag.style}
             {...drag.handlers}>
            <div className="aos-clock-time">{formatTime(now)}</div>
            <div className="aos-clock-date">{formatDate(now)}</div>
        </div>
    )
}

const WeatherWidget = () => {
    const drag = useDraggable()
    return (
        <div ref={drag.ref}
             className="aos-weather-widget aos-draggable"
             style={drag.style}
             {...drag.handlers}>
            <CloudSun size={32} strokeWidth={1.6}/>
            <div className="aos-weather-main">
                <div className="aos-weather-temp">24°</div>
                <div className="aos-weather-meta">Nairobi · Partly cloudy</div>
            </div>
        </div>
    )
}

const PageDots = ({page, count, onPick}) => (
    <div className="aos-page-dots">
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

const PAGE_COUNT = 2
const SWIPE_LOCK_THRESHOLD = 10   // px finger travel before we commit to h/v
const SWIPE_RUBBER_BAND    = 0.3  // resistance past the first/last page

const HomeScreen = () => {
    const [page, setPage] = useState(0)
    const [dragX, setDragX] = useState(0)
    const [dragging, setDragging] = useState(false)
    const startRef = useRef(null)

    const page1 = pickApps(PAGE_ONE_IDS)
    const onPage1 = new Set(PAGE_ONE_IDS)
    const page2 = homeApps.filter((a) => !onPage1.has(a.id))

    const onTouchStart = (e) => {
        // Draggable widgets (clock, weather) own their own gesture.
        if (e.target.closest?.('.aos-draggable')) return
        const t = e.touches[0]
        startRef.current = {
            x: t.clientX,
            y: t.clientY,
            locked: null, // 'h' once we commit to horizontal pager, 'v' to let vertical scroll happen
            width: e.currentTarget.clientWidth || 1,
        }
    }
    const onTouchMove = (e) => {
        const s = startRef.current
        if (!s) return
        const t = e.touches[0]
        const dx = t.clientX - s.x
        const dy = t.clientY - s.y
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
    const onTouchEnd = (e) => {
        const s = startRef.current
        startRef.current = null
        if (!s || s.locked !== 'h') {
            setDragging(false)
            setDragX(0)
            return
        }
        const t = e.changedTouches?.[0]
        const dx = t ? t.clientX - s.x : 0
        const threshold = Math.max(50, s.width * 0.18)
        let next = page
        if (dx <= -threshold && page < PAGE_COUNT - 1) next = page + 1
        else if (dx >= threshold && page > 0) next = page - 1
        setPage(next)
        setDragX(0)
        setDragging(false)
    }

    const strip = {
        transform: `translateX(calc(${-page * (100 / PAGE_COUNT)}% + ${dragX}px))`,
        transition: dragging ? 'none' : 'transform 0.32s cubic-bezier(0.2, 0.7, 0.2, 1)',
    }

    return (
        <div className="aos-home"
             onTouchStart={onTouchStart}
             onTouchMove={onTouchMove}
             onTouchEnd={onTouchEnd}
             onTouchCancel={onTouchEnd}>
            <div className="aos-pager-strip" style={strip}>
                <section className="aos-page aos-page-1">
                    <div className="aos-page-scroll">
                        <div className="aos-widgets">
                            <ClockWidget/>
                            <WeatherWidget/>
                        </div>
                        <div className="aos-app-grid aos-app-grid-3">
                            {page1.map((a) => <AppIcon key={a.id} app={a}/>)}
                        </div>
                        <p className="aos-page-hint">Swipe left for more apps</p>
                    </div>
                </section>
                <section className="aos-page aos-page-2">
                    <div className="aos-page-scroll">
                        <div className="aos-app-grid">
                            {page2.map((a) => <AppIcon key={a.id} app={a}/>)}
                        </div>
                    </div>
                </section>
            </div>
            <PageDots page={page} count={PAGE_COUNT} onPick={setPage}/>
        </div>
    )
}

export default HomeScreen
