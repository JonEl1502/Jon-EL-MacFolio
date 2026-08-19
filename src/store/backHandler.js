import {useEffect} from 'react'
import useShellStore from '#android/store.js'

const SENTINEL = {shell: 'home-trap'}

// Hook the browser back button / system back gesture into the touch shells'
// nav stack, and implement the "press back again to leave" pattern on the
// home screen. Shared by the Android and iPadOS shells — only the toast copy
// differs.
//
// `exitLabel` is rendered as `${exitLabel} · ${secondsLeft}`; pass null to let
// the first back press from home leave the site immediately.
const useBackHandler = (exitLabel = 'Press back again to exit') => {
    useEffect(() => {
        // Push a sentinel so the first back press from home has a state to
        // consume before falling off the end of history.
        window.history.pushState(SENTINEL, '')

        let canExit = false
        let exitTimer
        let countdownTimer

        const reset = () => {
            canExit = false
            clearTimeout(exitTimer)
            clearInterval(countdownTimer)
            useShellStore.getState().clearToast()
        }

        const onPop = () => {
            const store = useShellStore.getState()

            if (store.current) {
                // Any back press while an app is open returns straight home.
                store._clearCurrent()
                return
            }

            if (canExit || !exitLabel) {
                // Second back press inside the window — let the browser proceed.
                reset()
                return
            }

            // First back from home: trap, re-push sentinel, show a 3-second
            // countdown toast (2 → 1) confirming the next back leaves.
            window.history.pushState(SENTINEL, '')
            canExit = true

            let n = 2
            store.setToast(`${exitLabel} · ${n}`)
            clearInterval(countdownTimer)
            countdownTimer = setInterval(() => {
                n -= 1
                if (n > 0) {
                    useShellStore.getState().setToast(`${exitLabel} · ${n}`)
                }
            }, 1500)

            clearTimeout(exitTimer)
            exitTimer = setTimeout(reset, 3000)
        }

        window.addEventListener('popstate', onPop)
        return () => {
            window.removeEventListener('popstate', onPop)
            reset()
        }
    }, [exitLabel])
}

export default useBackHandler
