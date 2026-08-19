import {useEffect, useState} from 'react'
import {Wifi, BatteryFull} from 'lucide-react'

// iPadOS puts the date and time on the left, radios and battery on the right.
const formatDate = (d) =>
    d.toLocaleDateString([], {weekday: 'short', month: 'short', day: 'numeric'})
const formatTime = (d) =>
    d.toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'})

const StatusBar = () => {
    const [now, setNow] = useState(() => new Date())
    useEffect(() => {
        const t = setInterval(() => setNow(new Date()), 30_000)
        return () => clearInterval(t)
    }, [])

    return (
        <div className="ios-statusbar">
            <span className="ios-status-left">
                <span className="ios-status-date">{formatDate(now)}</span>
                <span className="ios-status-time">{formatTime(now)}</span>
            </span>
            <span className="ios-status-right">
                <Wifi size={15} strokeWidth={2.4}/>
                <span className="ios-battery-pct">87%</span>
                <BatteryFull size={19} strokeWidth={2}/>
            </span>
        </div>
    )
}

export default StatusBar
