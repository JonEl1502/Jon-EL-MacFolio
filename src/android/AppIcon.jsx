import {useRef} from 'react'
import useAndroidStore from '#android/store.js'
import {TYPE_META} from '#constants/projectTypes.js'

const AppIcon = ({app}) => {
    const ref = useRef(null)
    const {openApp} = useAndroidStore()
    const [c1, c2] = app.palette || ['#444', '#222']
    const types = app.types || []

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
                {types.length > 0 && (
                    <span className="aos-app-icon-badges">
                        {types.map((t) => {
                            const {Icon, bg} = TYPE_META[t]
                            return (
                                <span key={t} className="aos-app-icon-badge" style={{background: bg}}>
                                    <Icon size={9}/>
                                </span>
                            )
                        })}
                    </span>
                )}
            </span>
            <span className="aos-app-icon-label">{app.name}</span>
        </button>
    )
}

export default AppIcon
