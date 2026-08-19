import {useCallback, useEffect, useRef, useState} from 'react'

import StatusBar  from '#ipados/StatusBar.jsx'
import HomeScreen from '#ipados/HomeScreen.jsx'
import AppWindow  from '#ipados/AppWindow.jsx'
import Dock       from '#ipados/Dock.jsx'
import Spotlight  from '#ipados/Spotlight.jsx'
import Toast      from '#android/Toast.jsx'
import useShellStore  from '#android/store.js'
import useBackHandler from '#store/backHandler.js'

import '#android/android.css'   // shared app-content styles
import '#ipados/ipados.css'

const PEEK_MIN  = 12    // px of upward travel that reveals the hidden dock
const HOME_MIN  = 44    // px that goes all the way home
const PEEK_HOLD = 3500  // ms the peeked dock stays out

// The bar at the bottom of every modern iPad: a short swipe up reveals the
// dock, a longer one (or a tap, while an app is open) goes home.
const HomeIndicator = ({onPeek, onHoldPeek, onReleasePeek}) => {
    const {current, goBack} = useShellStore()
    const startY = useRef(null)

    const onPointerDown = (e) => { startY.current = e.clientY }
    const onPointerUp = (e) => {
        const y = startY.current
        startY.current = null
        if (y === null) return
        const travel = y - e.clientY
        if (travel >= HOME_MIN) {
            if (current) goBack()
        } else if (travel >= PEEK_MIN) {
            onPeek()
        }
    }

    return (
        <div className="ios-home-indicator-zone"
             onPointerDown={onPointerDown}
             onPointerUp={onPointerUp}
             onPointerCancel={() => { startY.current = null }}
             onPointerEnter={onHoldPeek}
             onPointerLeave={onReleasePeek}>
            <button
                type="button"
                className="ios-home-indicator"
                aria-label="Go home"
                onClick={() => current && goBack()}/>
        </div>
    )
}

const IpadOS = () => {
    useBackHandler('Press back again to leave')
    const [searchOpen, setSearchOpen] = useState(false)
    const [peek, setPeek] = useState(false)
    const peekTimer = useRef(null)
    const {current, goBack} = useShellStore()

    const stopPeekTimer = () => {
        clearTimeout(peekTimer.current)
        peekTimer.current = null
    }
    // Reveal the dock and start (or restart) the auto-hide countdown.
    const showPeek = useCallback(() => {
        setPeek(true)
        stopPeekTimer()
        peekTimer.current = setTimeout(() => setPeek(false), PEEK_HOLD)
    }, [])
    // Pointer resting on the dock keeps it out until the pointer leaves.
    const holdPeek = useCallback(() => {
        setPeek(true)
        stopPeekTimer()
    }, [])
    const releasePeek = useCallback(() => { showPeek() }, [showPeek])

    useEffect(() => stopPeekTimer, [])
    useEffect(() => { if (!current) setPeek(false) }, [current])

    // Hardware-keyboard shortcuts — an iPad with a Magic Keyboard, or anyone
    // opening /ipad on a desktop.
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') {
                if (searchOpen) setSearchOpen(false)
                else if (useShellStore.getState().current) goBack()
                return
            }
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setSearchOpen(true)
            }
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [searchOpen, goBack])

    return (
        <div className={`ios${current ? ' in-app' : ''}${peek ? ' dock-peek' : ''}`}>
            <div className="ios-wallpaper"/>

            <StatusBar/>
            <HomeScreen onOpenSearch={() => setSearchOpen(true)}/>
            <AppWindow/>
            <Dock onHoldPeek={holdPeek} onReleasePeek={releasePeek}/>
            <HomeIndicator onPeek={showPeek} onHoldPeek={holdPeek} onReleasePeek={releasePeek}/>
            <Toast/>

            {searchOpen && <Spotlight onClose={() => setSearchOpen(false)}/>}
        </div>
    )
}

export default IpadOS
