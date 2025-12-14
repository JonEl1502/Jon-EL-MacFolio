import React from 'react';
import useWindowStore from "#store/window.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import ImageViewer from "#windows/ImageViewer.jsx";

// Create wrapped components outside of render
const wrappedComponents = new Map();

const DynamicWindows = () => {
    const { windows } = useWindowStore();

    // Find all dynamic image windows (those starting with 'imgfile_')
    const imageWindows = Object.entries(windows).filter(([key, window]) => 
        key.startsWith('imgfile_') && key !== 'imgfile' && window.isOpen
    );

    return (
        <>
            {imageWindows.map(([windowKey]) => {
                // Get or create wrapped component
                if (!wrappedComponents.has(windowKey)) {
                    wrappedComponents.set(windowKey, WindowWrapper(ImageViewer, windowKey));
                }
                const WrappedImageViewer = wrappedComponents.get(windowKey);
                return <WrappedImageViewer key={windowKey} windowKey={windowKey} />;
            })}
        </>
    );
};

export default DynamicWindows;