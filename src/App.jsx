import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import DesktopOS from '#desktop/DesktopOS.jsx'
import AndroidOS from '#android/AndroidOS.jsx'
import IpadOS from '#ipados/IpadOS.jsx'
import DeviceRoute from '#components/DeviceRoute.jsx'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<DeviceRoute/>}/>
            <Route path="/desktop" element={<DesktopOS/>}/>
            <Route path="/android" element={<AndroidOS/>}/>
            {/* Same iPadOS shell for both — it adapts down to phone widths. */}
            <Route path="/ios" element={<IpadOS/>}/>
            <Route path="/ipad" element={<IpadOS/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    </BrowserRouter>
)

export default App
