import {useSyncExternalStore} from 'react'
import DesktopOS from '#desktop/DesktopOS.jsx'
import AndroidOS from '#android/AndroidOS.jsx'

// Anything with a coarse-pointer primary input (phones + tablets, including
// iPad Pro in landscape) lands on the Android UI. Narrow windows ≤ 1024px also
// get it so the mobile layout is accessible from any browser size.
const MOBILE_MEDIA = '(pointer: coarse), (max-width: 1024px)'

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
