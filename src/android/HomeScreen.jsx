import {homeApps} from '#android/apps.js'
import AppIcon from '#android/AppIcon.jsx'

const HomeScreen = () => (
    <div className="aos-home">
        <div className="aos-app-grid">
            {homeApps.map((app) => <AppIcon key={app.id} app={app}/>)}
        </div>
    </div>
)

export default HomeScreen
