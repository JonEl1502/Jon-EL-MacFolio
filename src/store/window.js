import {create} from "zustand";
import {immer} from "zustand/middleware/immer";

// Internal imports
import {INITIAL_Z_INDEX, WINDOW_CONFIG} from "#constants"

const useWindowStore = create(
    immer((set) => ({
        windows: WINDOW_CONFIG,
        nextZIndex: INITIAL_Z_INDEX + 1,

        //
        openWindow: (windowKey, data = null) =>
            set((state) => {
                if (!state.windows[windowKey]) {
                    state.windows[windowKey] = {
                        isOpen: false,
                        zIndex: INITIAL_Z_INDEX,
                        data: null,
                    };
                }
                const win = state.windows[windowKey];
                if (win.isOpen) return;
                win.isOpen = true;
                win.zIndex = state.nextZIndex;
                win.data = data ?? win.data;
                state.nextZIndex++;
                // Optional: Reset zIndex if it gets too large
                if (state.nextZIndex > 10000) {
                    state.nextZIndex = INITIAL_Z_INDEX + 1;
                }
            }),

        //
        closeWindow: (windowKey) =>
            set((state) => {
                if (state.windows[windowKey]) {
                    const win = state.windows[windowKey];
                    win.isOpen = false;
                    win.zIndex = INITIAL_Z_INDEX;
                    win.data = null;
                }
            }),

        //
        focusWindow: (windowKey) =>
            set((state) => {
                if (state.windows[windowKey]) {
                    const win = state.windows[windowKey];
                    win.zIndex = state.nextZIndex;
                    state.nextZIndex++;
                }
            }),

    })),
);

export default useWindowStore;