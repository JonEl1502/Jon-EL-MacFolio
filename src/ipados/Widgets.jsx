import {useEffect, useState} from 'react'
import {CloudSun, ArrowUpRight} from 'lucide-react'

import useShellStore from '#android/store.js'
import {homeApps} from '#android/apps.js'

const formatTime = (d) =>
    d.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'})
const formatDate = (d) =>
    d.toLocaleDateString([], {weekday: 'long', month: 'long', day: 'numeric'})

export const ClockWidget = () => {
    const [now, setNow] = useState(() => new Date())
    useEffect(() => {
        const t = setInterval(() => setNow(new Date()), 30_000)
        return () => clearInterval(t)
    }, [])

    return (
        <div className="ios-widget ios-widget-clock">
            <div className="ios-widget-day">{formatDate(now)}</div>
            <div className="ios-widget-time">{formatTime(now)}</div>
            <div className="ios-widget-sub">Nairobi · GMT+3</div>
        </div>
    )
}

export const WeatherWidget = () => (
    <div className="ios-widget ios-widget-weather">
        <div className="ios-widget-label">Nairobi</div>
        <div className="ios-weather-row">
            <CloudSun size={38} strokeWidth={1.5}/>
            <span className="ios-weather-temp">24°</span>
        </div>
        <div className="ios-widget-sub">Partly cloudy · H:26° L:14°</div>
    </div>
)

// "Featured" widget — a live tile for one project that opens its app on tap.
export const FeaturedWidget = ({appId}) => {
    const {openApp} = useShellStore()
    const app = homeApps.find((a) => a.id === appId) || homeApps.find((a) => a.kind === 'project')
    if (!app) return null

    const shot = app.data?.screenshots?.[0] || app.icon

    return (
        <button
            type="button"
            className="ios-widget ios-widget-featured"
            onClick={() => openApp(app.kind, app.data || null)}>
            <img src={shot} alt="" loading="lazy"/>
            <span className="ios-widget-featured-meta">
                <span className="ios-widget-label">Featured work</span>
                <span className="ios-widget-featured-name">
                    {app.name} <ArrowUpRight size={15}/>
                </span>
            </span>
        </button>
    )
}
