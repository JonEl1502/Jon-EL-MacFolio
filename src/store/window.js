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

                // Center on screen the first time the window opens (or any time
                // its position hasn't been set yet). Subsequent opens preserve
                // wherever the user last dragged it to.
                if (!win.position) {
                    const sizes = {
                        finder:  { w: 900, h: 600 },
                        imgfile: { w: 720, h: 400 },
                    };
                    const prefix = windowKey.startsWith('imgfile_') ? 'imgfile' : windowKey;
                    const { w, h } = sizes[prefix] || { w: 700, h: 500 };

                    const vw = typeof window !== 'undefined' ? window.innerWidth  : 1280;
                    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;

                    let cx = Math.max(0, Math.round((vw - w) / 2));
                    let cy = Math.max(28, Math.round((vh - h) / 2)); // leave room for top menubar

                    if (windowKey.startsWith('imgfile_')) {
                        const openImageWindows = Object.keys(state.windows)
                            .filter(key => key.startsWith('imgfile_') && state.windows[key].isOpen)
                            .length;
                        cx += openImageWindows * 30;
                        cy += openImageWindows * 30;
                    }
                    win.position = { x: cx, y: cy };
                }

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
                try {
                    if (state.windows[windowKey]) {
                        const win = state.windows[windowKey];
                        win.isOpen = false;
                        win.zIndex = INITIAL_Z_INDEX;
                        win.data = null;
                    }
                } catch (error) {
                    console.error('Error closing window:', error);
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