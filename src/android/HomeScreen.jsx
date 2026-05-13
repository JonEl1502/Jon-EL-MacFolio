import {useEffect, useRef, useState} from 'react'
import {CloudSun} from 'lucide-react'

import {homeApps} from '#android/apps.js'
import AppIcon from '#android/AppIcon.jsx'
import PullToRefresh from '#android/PullToRefresh.jsx'

// Row 1 = three "intro" system apps; row 2 = three named project apps.
const PAGE_ONE_IDS = [
    'about', 'articles', 'skills',
    'project-12', 'project-11', 'project-9', // MossBets · Crystal Vets · WOAdvocates
]
const SWIPE_THRESHOLD = 60

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

const HomeScreen = () => {
    const [page, setPage] = useState(0)
    const [dragX, setDragX] = useState(0)
    const startRef = useRef(null)
    const lockRef = useRef(null) // 'h' | 'v' | null

    const page1 = pickApps(PAGE_ONE_IDS)
    const onPage1 = new Set(PAGE_ONE_IDS)
    const page2 = homeApps.filter((a) => !onPage1.has(a.id))

    // Pointer-based pager: works with mouse, touch, and pen. We don't capture
    // the pointer until horizontal motion clears the lock threshold, so taps
    // on app icons still produce normal click events.
    const onPointerDown = (e) => {
        // Widgets and dots own their own pointer events; ignore left-mouse only.
        if (e.target.closest?.('.aos-draggable, .aos-page-dots')) return
        if (e.pointerType === 'mouse' && e.button !== 0) return
        startRef.current = {x: e.clientX, y: e.clientY, id: e.pointerId}
        lockRef.current = null
    }
    const onPointerMove = (e) => {
        if (!startRef.current) return
        const dx = e.clientX - startRef.current.x
        const dy = e.clientY - startRef.current.y
        if (!lockRef.current && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
            lockRef.current = Math.abs(dx) > Math.abs(dy) ? 'h' : 'v'
            if (lockRef.current === 'h') {
                try { e.currentTarget.setPointerCapture?.(startRef.current.id) } catch { /* noop */ }
            }
        }
        if (lockRef.current !== 'h') return
        const atLead  = page === 0 && dx > 0
        const atTrail = page === 1 && dx < 0
        setDragX((atLead || atTrail) ? dx * 0.35 : dx)
    }
    const onPointerUp = (e) => {
        if (lockRef.current === 'h') {
            if (dragX < -SWIPE_THRESHOLD && page < 1) setPage(1)
            else if (dragX > SWIPE_THRESHOLD && page > 0) setPage(0)
        }
        if (startRef.current?.id != null) {
            try { e.currentTarget.releasePointerCapture?.(startRef.current.id) } catch { /* noop */ }
        }
        startRef.current = null
        lockRef.current = null
        setDragX(0)
    }

    const strip = {
        transform: `translateX(calc(${-page * 50}% + ${dragX}px))`,
        transition: dragX === 0
            ? 'transform 0.28s cubic-bezier(0.2, 0.7, 0.2, 1)'
            : 'none',
    }

    return (
        <div className="aos-home"
             onPointerDown={onPointerDown}
             onPointerMove={onPointerMove}
             onPointerUp={onPointerUp}
             onPointerCancel={onPointerUp}>
            <div className="aos-pager-strip" style={strip}>
                <section className="aos-page aos-page-1">
                    <div className="aos-widgets">
                        <ClockWidget/>
                        <WeatherWidget/>
                    </div>
                    <div className="aos-app-grid aos-app-grid-3">
                        {page1.map((a) => <AppIcon key={a.id} app={a}/>)}
                    </div>
                </section>
                <section className="aos-page aos-page-2">
                    <PullToRefresh className="aos-page-scroll">
                        <div className="aos-app-grid">
                            {page2.map((a) => <AppIcon key={a.id} app={a}/>)}
                        </div>
                    </PullToRefresh>
                </section>
            </div>
            <PageDots page={page} count={2} onPick={setPage}/>
        </div>
    )
}

export default HomeScreen
