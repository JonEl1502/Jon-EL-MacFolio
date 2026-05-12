import {homeApps} from '#android/apps.js'
import AppIcon from '#android/AppIcon.jsx'
import PullToRefresh from '#android/PullToRefresh.jsx'

const HomeScreen = () => (
    <div className="aos-home">
        <PullToRefresh className="aos-home-scroll">
            <div className="aos-app-grid">
                {homeApps.map((app) => <AppIcon key={app.id} app={app}/>)}
            </div>
        </PullToRefresh>
    </div>
)

export default HomeScreen
