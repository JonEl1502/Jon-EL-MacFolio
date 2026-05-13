import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

// One app open at a time — no real stack. Any back press while an app is open
// returns home; you re-enter via the dock or grid. This keeps the history
// shallow (at most one in-app entry) so the browser back button never has to
// chew through five entries to leave a screen.

const useAndroidStore = create(
    immer((set, get) => ({
        current: null,   // null = home; otherwise {kind, data, launchRect}
        toast: null,

        openApp: (kind, data = null, launchRect = null) => {
            const wasInApp = !!get().current
            if (typeof window !== 'undefined') {
                const method = wasInApp ? 'replaceState' : 'pushState'
                window.history[method]({aos: kind}, '')
            }
            set((s) => { s.current = {kind, data, launchRect} })
        },

        // Called by the popstate listener after a browser back press. Never
        // call from UI — use goBack() so history stays in lockstep.
        _clearCurrent: () => set((s) => { s.current = null }),

        goBack: () => {
            if (!get().current) return
            if (typeof window !== 'undefined') window.history.back()
        },

        setToast: (msg) => set((s) => { s.toast = msg }),
        clearToast: () => set((s) => { s.toast = null }),
    })),
)

export default useAndroidStore
