import useAndroidStore from '#android/store.js'
import {homeApps} from '#android/apps.js'

const PortfolioApp = () => {
    const {openApp} = useAndroidStore()
    const projects = homeApps.filter((a) => a.kind === 'project')

    return (
        <ul className="aos-portfolio">
            {projects.map((p) => (
                <li key={p.id}>
                    <button type="button" onClick={() => openApp(p.kind, p.data)}>
                        <img src={p.icon} alt="" loading="lazy"/>
                        <div>
                            <h3>{p.name}</h3>
                            {p.data?.url && <span className="aos-portfolio-url">{new URL(p.data.url).hostname}</span>}
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default PortfolioApp
