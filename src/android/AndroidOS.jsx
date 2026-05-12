import StatusBar  from '#android/StatusBar.jsx'
import NavBar     from '#android/NavBar.jsx'
import HomeScreen from '#android/HomeScreen.jsx'
import AppFrame   from '#android/AppFrame.jsx'

import '#android/android.css'

const AndroidOS = () => (
    <div className="aos">
        <div className="aos-wallpaper"/>

        <StatusBar/>
        <HomeScreen/>
        <AppFrame/>
        <NavBar/>
    </div>
)

export default AndroidOS
