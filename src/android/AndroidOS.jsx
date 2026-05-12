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
        let toastTimer

        const onPop = () => {
            const store = useAndroidStore.getState()

            if (store.stack.length > 0) {
                store._popOne()
                return
            }

            if (canExit) {
                // Second back press inside the window — let the browser proceed.
                canExit = false
                clearTimeout(exitTimer)
                return
            }

            // First back from home: trap the user, re-push sentinel, show toast.
            window.history.pushState(SENTINEL, '')
            store.setToast('Press back again to exit')
            clearTimeout(toastTimer)
            toastTimer = setTimeout(() => useAndroidStore.getState().clearToast(), 2000)
            canExit = true
            clearTimeout(exitTimer)
            exitTimer = setTimeout(() => { canExit = false }, 2000)
        }

        window.addEventListener('popstate', onPop)
        return () => {
            window.removeEventListener('popstate', onPop)
            clearTimeout(toastTimer)
            clearTimeout(exitTimer)
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
