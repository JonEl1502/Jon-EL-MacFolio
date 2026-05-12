import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'

// Navigation stack model:
//   stack = []                                → home screen
//   stack = [{kind, data}]                    → one app open
//   stack = [{kind: 'system-portfolio'}, {kind: 'project', data}] → drilled in
//
// Pressing back pops the top entry. The popstate listener (installed by
// AndroidOS on mount) drives all pops so the browser history and our React
// state stay in lockstep. UI buttons (header back arrow, system nav gesture)
// also route through history.back() rather than touching the store directly.

const useAndroidStore = create(
    immer((set, get) => ({
        stack: [],
        toast: null,

        openApp: (kind, data = null, launchRect = null) => {
            if (typeof window !== 'undefined') {
                window.history.pushState({aos: kind, t: Date.now()}, '')
            }
            set((s) => {
                s.stack.push({kind, data, launchRect})
            })
        },

        // Called by the popstate listener — never call directly from UI; use
        // goBack() so the browser history stays consistent.
        _popOne: () => set((s) => { s.stack.pop() }),

        // From the app header back arrow / programmatic back.
        goBack: () => {
            if (get().stack.length === 0) return
            if (typeof window !== 'undefined') window.history.back()
        },

        setToast: (msg) => set((s) => { s.toast = msg }),
        clearToast: () => set((s) => { s.toast = null }),
    })),
)

export default useAndroidStore
