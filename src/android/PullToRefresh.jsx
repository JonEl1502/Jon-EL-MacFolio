import {useEffect, useRef, useState} from 'react'
import {RotateCw} from 'lucide-react'

const THRESHOLD = 70   // px past which release triggers a refresh
const MAX_PULL  = 120  // visual cap on how far the indicator travels
const DAMPING   = 0.5  // rubber-band feel: half the finger distance

const PullToRefresh = ({children, onRefresh, className = ''}) => {
    const scrollRef = useRef(null)
    const startYRef = useRef(null)
    const [pull, setPull] = useState(0)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        const onTouchStart = (e) => {
            if (refreshing) return
            if (el.scrollTop > 0) return
            startYRef.current = e.touches[0].clientY
        }

        const onTouchMove = (e) => {
            if (startYRef.current === null || refreshing) return
            if (el.scrollTop > 0) {
                startYRef.current = null
                setPull(0)
                return
            }
            const dy = e.touches[0].clientY - startYRef.current
            if (dy <= 0) {
                setPull(0)
                return
            }
            // Prevent the page from doing a native overscroll while we own the gesture.
            e.preventDefault()
            setPull(Math.min(MAX_PULL, dy * DAMPING))
        }

        const onTouchEnd = () => {
            if (startYRef.current === null) return
            startYRef.current = null
            if (pull >= THRESHOLD) {
                setPull(THRESHOLD)
                setRefreshing(true)
                const result = onRefresh ? onRefresh() : window.location.reload()
                Promise.resolve(result)
                    .catch(() => {})
                    .finally(() => {
                        setRefreshing(false)
                        setPull(0)
                    })
            } else {
                setPull(0)
            }
        }

        el.addEventListener('touchstart', onTouchStart, {passive: true})
        el.addEventListener('touchmove',  onTouchMove,  {passive: false})
        el.addEventListener('touchend',   onTouchEnd)
        el.addEventListener('touchcancel', onTouchEnd)
        return () => {
            el.removeEventListener('touchstart', onTouchStart)
            el.removeEventListener('touchmove',  onTouchMove)
            el.removeEventListener('touchend',   onTouchEnd)
            el.removeEventListener('touchcancel', onTouchEnd)
        }
    }, [pull, refreshing, onRefresh])

    const indicatorOpacity = pull > 8 || refreshing ? 1 : 0
    const indicatorY = Math.max(-30, pull - 50)
    const indicatorRotate = refreshing ? 0 : pull * 4

    return (
        <div ref={scrollRef} className={`aos-ptr ${className}`}>
            <div
                className="aos-ptr-indicator"
                style={{
                    opacity: indicatorOpacity,
                    transform: `translate(-50%, ${indicatorY}px) rotate(${indicatorRotate}deg)`,
                }}>
                <RotateCw size={20} className={refreshing ? 'aos-spin' : ''}/>
            </div>
            <div
                className="aos-ptr-inner"
                style={{
                    transform: `translateY(${pull}px)`,
                    transition: pull === 0 ? 'transform 0.18s ease' : 'none',
                }}>
                {children}
            </div>
        </div>
    )
}

export default PullToRefresh
