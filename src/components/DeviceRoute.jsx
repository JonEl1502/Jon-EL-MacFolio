import {useSyncExternalStore} from 'react'
import DesktopOS from '#desktop/DesktopOS.jsx'
import AndroidOS from '#android/AndroidOS.jsx'
import IpadOS from '#ipados/IpadOS.jsx'

// Anything with a coarse-pointer primary input (phones + tablets) gets a touch
// shell. Narrow windows ≤ 1024px also get one so the mobile layout is
// reachable from any browser size.
const MOBILE_MEDIA = '(pointer: coarse), (max-width: 1024px)'

const subscribe = (cb) => {
    const mql = window.matchMedia(MOBILE_MEDIA)
    mql.addEventListener('change', cb)
    return () => mql.removeEventListener('change', cb)
}
const getSnapshot = () => window.matchMedia(MOBILE_MEDIA).matches
const getServerSnapshot = () => false

// Which touch shell: iPhones/iPads get the iPadOS one, everything else the
// Android one. iPadOS 13+ reports a Macintosh UA, so a Mac-looking client with
// a touchscreen is an iPad.
const isAppleTouch = () => {
    if (typeof navigator === 'undefined') return false
    const ua = navigator.userAgent || ''
    if (/iPad|iPhone|iPod/.test(ua)) return true
    return /Macintosh/.test(ua) && (navigator.maxTouchPoints || 0) > 1
}

const DeviceRoute = () => {
    const isMobile = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
    if (!isMobile) return <DesktopOS/>
    return isAppleTouch() ? <IpadOS/> : <AndroidOS/>
}

export default DeviceRoute
