import {useRef} from 'react'
import useShellStore from '#android/store.js'
import {TYPE_META} from '#constants/projectTypes.js'

// iOS home-screen icon: squircle tile, label underneath, press-scale feedback.
const AppIcon = ({app, hideLabel = false}) => {
    const ref = useRef(null)
    const {openApp} = useShellStore()
    const [c1, c2] = app.palette || ['#4c4c58', '#2a2a33']
    const types = app.types || []

    const handleTap = () => {
        const rect = ref.current?.getBoundingClientRect()
        openApp(app.kind, app.data || null,
            rect ? {x: rect.left, y: rect.top, w: rect.width, h: rect.height} : null)
    }

    const tileClass = `ios-icon-tile${app.iconFit === 'cover' ? ' ios-icon-tile-cover' : ''}`

    return (
        <button ref={ref} type="button" className="ios-icon" onClick={handleTap} title={app.name}>
            <span
                className={tileClass}
                style={{background: `linear-gradient(160deg, ${c1} 0%, ${c2} 100%)`}}>
                <img src={app.icon} alt="" draggable="false" loading="lazy"/>
                {types.length > 0 && (
                    <span className="ios-icon-badges">
                        {types.map((t) => {
                            const {Icon, bg} = TYPE_META[t]
                            return (
                                <span key={t} className="ios-icon-badge" style={{background: bg}}>
                                    <Icon size={10}/>
                                </span>
                            )
                        })}
                    </span>
                )}
            </span>
            {!hideLabel && <span className="ios-icon-label">{app.name}</span>}
        </button>
    )
}

export default AppIcon
