import {useEffect, useMemo, useRef, useState} from 'react'
import {Search, X} from 'lucide-react'

import useShellStore from '#android/store.js'
import {allApps} from '#android/apps.js'

// Spotlight-style search sheet: filter every app (system + project) by name
// and open it. Enter opens the top hit, Escape dismisses.
const Spotlight = ({onClose}) => {
    const [q, setQ] = useState('')
    const {openApp} = useShellStore()
    const inputRef = useRef(null)

    useEffect(() => { inputRef.current?.focus() }, [])

    const results = useMemo(() => {
        const needle = q.trim().toLowerCase()
        const pool = allApps.filter((a, i, arr) =>
            arr.findIndex((b) => b.kind === a.kind && b.name === a.name) === i)
        if (!needle) return pool.slice(0, 8)
        return pool.filter((a) => a.name.toLowerCase().includes(needle)).slice(0, 10)
    }, [q])

    const launch = (app) => {
        openApp(app.kind, app.data || null)
        onClose()
    }

    const onKeyDown = (e) => {
        if (e.key === 'Escape') onClose()
        if (e.key === 'Enter' && results[0]) launch(results[0])
    }

    return (
        <div className="ios-spotlight" onPointerDown={onClose}>
            <div className="ios-spotlight-sheet"
                 onPointerDown={(e) => e.stopPropagation()}
                 onKeyDown={onKeyDown}>
                <div className="ios-spotlight-field">
                    <Search size={18}/>
                    <input
                        ref={inputRef}
                        value={q}
                        placeholder="Search apps and projects"
                        onChange={(e) => setQ(e.target.value)}
                    />
                    <button type="button" aria-label="Close search" onClick={onClose}>
                        <X size={16}/>
                    </button>
                </div>

                <ul className="ios-spotlight-results">
                    {results.map((app) => (
                        <li key={`${app.kind}-${app.name}`}>
                            <button type="button" onClick={() => launch(app)}>
                                <img src={app.icon} alt="" loading="lazy"/>
                                <span>{app.name}</span>
                            </button>
                        </li>
                    ))}
                    {results.length === 0 && <li className="ios-spotlight-empty">No results</li>}
                </ul>
            </div>
        </div>
    )
}

export default Spotlight
