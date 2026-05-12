import StatusBar  from '#android/StatusBar.jsx'
import HomeScreen from '#android/HomeScreen.jsx'
import AppFrame   from '#android/AppFrame.jsx'
import Dock       from '#android/Dock.jsx'

import '#android/android.css'

const AndroidOS = () => (
    <div className="aos">
        <div className="aos-wallpaper"/>

        <StatusBar/>
        <HomeScreen/>
        <AppFrame/>
        <Dock/>
    </div>
)

export default AndroidOS
