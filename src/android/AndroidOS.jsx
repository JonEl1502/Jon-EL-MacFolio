import StatusBar  from '#android/StatusBar.jsx'
import HomeScreen from '#android/HomeScreen.jsx'
import AppFrame   from '#android/AppFrame.jsx'
import Dock       from '#android/Dock.jsx'
import Toast      from '#android/Toast.jsx'
import useBackHandler from '#store/backHandler.js'

import '#android/android.css'

const AndroidOS = () => {
    useBackHandler('Press back again to exit')
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
