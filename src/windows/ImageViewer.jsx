import React from 'react';
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const ImageViewer = ({ windowKey = "imgfile" }) => {
    const { windows } = useWindowStore();
    const data = windows[windowKey]?.data;

    if (!data || !data.src) {
        return (
            <div className="flex items-center justify-center h-full bg-gray-100">
                <p className="text-gray-500">No image to display</p>
            </div>
        );
    }

    return (
        <>
            <div id="window-header">
                <WindowControls target={windowKey} />
                <span className="text-sm font-medium">{data.title || 'Image Viewer'}</span>
            </div>
            <div className="bg-white flex items-center justify-center h-full p-4">
                <img 
                    src={data.src} 
                    alt={data.title || 'Image'}
                    className="max-w-full max-h-full object-contain"
                />
            </div>
        </>
    );
};

export default ImageViewer;
