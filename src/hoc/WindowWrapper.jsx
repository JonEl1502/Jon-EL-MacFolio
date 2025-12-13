// External imports
import React, {useLayoutEffect, useRef} from 'react'
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";

// Internal imports
import useWindowStore from "#store/window.js";
import {useGSAP} from "@gsap/react";

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const {focusWindow, windows} = useWindowStore();
        const windowState = windows[windowKey] || { isOpen: false, zIndex: 1000, data: null };
        const {isOpen, zIndex, data} = windowState;
        const ref = useRef(null);

        // GSAP Hook for animation
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = "block"

            gsap.fromTo(
                el,
                {scale: 0.8, opacity: 0, y: 40},
                {scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out"},
            );

        }, [isOpen])

        //GSAP Hook for draggable
        useGSAP(() => {
            const el = ref.current;
            if (!el) return;

            // Draggable (destructure  instance so as cleanup
            const [instance] = Draggable.create(el, {
                onPress: () => focusWindow(windowKey)
            });
            // Cleanup function
            return () => instance.kill();
        }, []);


        // Focus window
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            el.style.display = isOpen ? "block" : "none"
        }, [isOpen]);

        const getWindowSize = () => {
            if (windowKey === 'imgfile') return 'w-[800px] h-[600px]';
            if (windowKey === 'finder') return 'w-[900px] h-[600px]';
            return '';
        };
        
        return <section id={windowKey} ref={ref} style={{zIndex: zIndex}} className={`absolute ${getWindowSize()}`}>
            <Component {...props} {...(data || {})} />
        </section>
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`

    return Wrapped;
}
export default WindowWrapper
