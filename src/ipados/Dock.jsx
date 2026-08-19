import useShellStore from '#android/store.js'
import {dockApps, allApps} from '#android/apps.js'
import AppIcon from '#ipados/AppIcon.jsx'

// iPadOS dock: pinned apps on the left, a hairline divider, then the most
// recently opened apps on the right. It hides while an app is open and peeks
// back on a swipe up from the home indicator (or a hover near the bottom).
const pinnedKinds = new Set(dockApps.map((a) => a.kind))

const Dock = ({onHoldPeek, onReleasePeek}) => {
    const {current, recents} = useShellStore()
    const activeKind = current?.kind

    // Recents exclude the pinned apps (they already have a slot) and are
    // resolved back to a registry entry so the tile keeps its icon/palette.
    const recentApps = recents
        .filter((r) => !pinnedKinds.has(r.kind))
        .map((r) => allApps.find((a) => a.kind === r.kind && (!r.name || a.name === r.name)))
        .filter(Boolean)
        .slice(0, 3)

    const isActive = (app) =>
        activeKind === app.kind &&
        (app.kind !== 'project' || current?.data?.name === app.data?.name)

    const slot = (app, key) => (
        <div key={key} className={`ios-dock-slot${isActive(app) ? ' is-active' : ''}`}>
            <AppIcon app={app} hideLabel/>
        </div>
    )

    return (
        <div className="ios-dock-bar">
            <div className="ios-dock"
                 onPointerEnter={onHoldPeek}
                 onPointerLeave={onReleasePeek}>
                {dockApps.map((app) => slot(app, app.id))}
                {recentApps.length > 0 && <span className="ios-dock-divider"/>}
                {recentApps.map((app) => slot(app, `recent-${app.id}`))}
            </div>
        </div>
    )
}

export default Dock
