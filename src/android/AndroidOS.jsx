import {useEffect} from 'react'

import StatusBar  from '#android/StatusBar.jsx'
import HomeScreen from '#android/HomeScreen.jsx'
import AppFrame   from '#android/AppFrame.jsx'
import Dock       from '#android/Dock.jsx'
import Toast      from '#android/Toast.jsx'
import useAndroidStore from '#android/store.js'

import '#android/android.css'

const SENTINEL = {aos: 'home-trap'}

// Hook the browser back button / system back gesture into our nav stack, and
// implement the Android "press back again to exit" pattern on the home screen.
const useBackHandler = () => {
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
            useAndroidStore.getState().clearToast()
        }

        const onPop = () => {
            const store = useAndroidStore.getState()

            if (store.stack.length > 0) {
                store._popOne()
                return
            }

            if (canExit) {
                // Second back press inside the window — let the browser proceed.
                reset()
                return
            }

            // First back from home: trap, re-push sentinel, show a 3-second
            // countdown toast (2 → 1) confirming the next back exits.
            window.history.pushState(SENTINEL, '')
            canExit = true

            let n = 2
            store.setToast(`Press back again to exit · ${n}`)
            clearInterval(countdownTimer)
            countdownTimer = setInterval(() => {
                n -= 1
                if (n > 0) {
                    useAndroidStore.getState().setToast(`Press back again to exit · ${n}`)
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
    }, [])
}

const AndroidOS = () => {
    useBackHandler()
    return (
        <div className="aos">
            <div className="aos-wallpaper"/>

            <StatusBar/>
            <HomeScreen/>
            <AppFrame/>
            <Dock/>
            <Toast/>
        </div>
    )
}

export default AndroidOS
