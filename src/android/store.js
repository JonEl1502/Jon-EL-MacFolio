import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

// Only one app is "open" at a time on a phone — much simpler than the desktop's
// stacked-window model. We also track a small launch-origin rect so the open
// animation can scale up from where the user tapped.
const useAndroidStore = create(
    immer((set) => ({
        openAppId: null,
        appData: null,
        launchRect: null,

        openApp: (id, data = null, rect = null) =>
            set((s) => {
                s.openAppId = id
                s.appData = data
                s.launchRect = rect
            }),

        closeApp: () =>
            set((s) => {
                s.openAppId = null
                s.appData = null
                s.launchRect = null
            }),
    })),
)

export default useAndroidStore
