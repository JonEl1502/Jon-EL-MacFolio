import {useRef} from 'react'
import useAndroidStore from '#android/store.js'

const AppIcon = ({app}) => {
    const ref = useRef(null)
    const {openApp} = useAndroidStore()
    const [c1, c2] = app.palette || ['#444', '#222']

    const handleTap = () => {
        const rect = ref.current?.getBoundingClientRect()
        openApp(app.kind, app.data || null,
            rect ? {x: rect.left, y: rect.top, w: rect.width, h: rect.height} : null)
    }

    const tileClass = `aos-app-icon-tile${app.iconFit === 'cover' ? ' aos-app-icon-tile-cover' : ''}`

    return (
        <button ref={ref} type="button" className="aos-app-icon" onClick={handleTap}>
            <span
                className={tileClass}
                style={{background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`}}>
                <img src={app.icon} alt="" draggable="false"/>
            </span>
            <span className="aos-app-icon-label">{app.name}</span>
        </button>
    )
}

export default AppIcon
