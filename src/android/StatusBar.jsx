import {useEffect, useState} from 'react'
import {Wifi, BatteryFull, Signal} from 'lucide-react'

const formatTime = (d) =>
    d.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: false})

const StatusBar = () => {
    const [now, setNow] = useState(() => new Date())
    useEffect(() => {
        const t = setInterval(() => setNow(new Date()), 30_000)
        return () => clearInterval(t)
    }, [])

    return (
        <div className="aos-statusbar">
            <span className="aos-clock">{formatTime(now)}</span>
            <span className="aos-status-icons">
                <Signal size={14} strokeWidth={2.5}/>
                <Wifi size={14} strokeWidth={2.5}/>
                <BatteryFull size={16} strokeWidth={2.5}/>
            </span>
        </div>
    )
}

export default StatusBar
