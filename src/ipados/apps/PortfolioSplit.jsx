import {useState} from 'react'

import {homeApps} from '#android/apps.js'
import ProjectApp from '#android/apps/ProjectApp.jsx'

// The iPad take on the Portfolio app: a persistent sidebar of projects next to
// a detail pane, instead of the phone's drill-down list. Collapses to a
// stacked layout on narrow screens (see .ios-split in ipados.css).
const PortfolioSplit = () => {
    const projects = homeApps.filter((a) => a.kind === 'project')
    const [selected, setSelected] = useState(projects[0]?.id)
    const active = projects.find((p) => p.id === selected)

    return (
        <div className="ios-split">
            <aside className="ios-split-sidebar">
                <h2>Projects</h2>
                <ul>
                    {projects.map((p) => (
                        <li key={p.id}>
                            <button
                                type="button"
                                className={p.id === selected ? 'is-selected' : ''}
                                onClick={() => setSelected(p.id)}>
                                <img src={p.icon} alt="" loading="lazy"/>
                                <span>
                                    <strong>{p.name}</strong>
                                    {p.data?.url && <em>{new URL(p.data.url).hostname}</em>}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            <div className="ios-split-detail">
                {active
                    ? <ProjectApp data={active.data}/>
                    : <div className="aos-app-empty">Pick a project</div>}
            </div>
        </div>
    )
}

export default PortfolioSplit
