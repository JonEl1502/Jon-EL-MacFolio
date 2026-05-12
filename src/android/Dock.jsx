import useAndroidStore from '#android/store.js'
import {dockApps} from '#android/apps.js'
import AppIcon from '#android/AppIcon.jsx'

const Dock = () => {
    const {openAppId} = useAndroidStore()

    return (
        <div className="aos-dock-bar">
            <div className="aos-dock">
                {dockApps.map((app) => (
                    <div
                        key={app.id}
                        className={`aos-dock-slot${openAppId === app.kind ? ' is-active' : ''}`}>
                        <AppIcon app={app}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dock
