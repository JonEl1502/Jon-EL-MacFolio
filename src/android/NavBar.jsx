import useAndroidStore from '#android/store.js'

const TABS = [
    {label: 'Projects', kind: 'system-portfolio'},
    {label: 'Contact',  kind: 'system-contact'},
    {label: 'Resume',   kind: 'system-resume'},
]

const NavBar = () => {
    const {openAppId, openApp} = useAndroidStore()

    return (
        <nav className="aos-navbar" aria-label="Primary navigation">
            {TABS.map((tab) => (
                <button
                    key={tab.kind}
                    type="button"
                    className={`aos-nav-tab${openAppId === tab.kind ? ' is-active' : ''}`}
                    onClick={() => openApp(tab.kind, null)}>
                    {tab.label}
                </button>
            ))}
        </nav>
    )
}

export default NavBar
