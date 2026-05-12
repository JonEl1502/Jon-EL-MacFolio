import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

import DesktopOS from '#desktop/DesktopOS.jsx'
import AndroidOS from '#android/AndroidOS.jsx'
import DeviceRoute from '#components/DeviceRoute.jsx'

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<DeviceRoute/>}/>
            <Route path="/desktop" element={<DesktopOS/>}/>
            <Route path="/android" element={<AndroidOS/>}/>
            {/* iOS coming later — fall back to Android for now so phones still work */}
            <Route path="/ios" element={<AndroidOS/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    </BrowserRouter>
)

export default App
