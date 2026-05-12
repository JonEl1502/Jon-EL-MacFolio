import {useSyncExternalStore} from 'react'
import DesktopOS from '#desktop/DesktopOS.jsx'
import AndroidOS from '#android/AndroidOS.jsx'

// Match: anything ≤ 768px wide, OR a coarse pointer (touchscreen primary input).
// We trust this over UA sniffing — a small browser window on a laptop should still
// get the desktop UI unless it's actually narrow.
const MOBILE_MEDIA = '(max-width: 768px), (pointer: coarse) and (max-width: 1024px)'

const subscribe = (cb) => {
    const mql = window.matchMedia(MOBILE_MEDIA)
    mql.addEventListener('change', cb)
    return () => mql.removeEventListener('change', cb)
}
const getSnapshot = () => window.matchMedia(MOBILE_MEDIA).matches
const getServerSnapshot = () => false

const DeviceRoute = () => {
    const isMobile = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
    return isMobile ? <AndroidOS/> : <DesktopOS/>
}

export default DeviceRoute
