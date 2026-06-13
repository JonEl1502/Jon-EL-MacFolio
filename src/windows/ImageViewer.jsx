import React from 'react';
import {ChevronLeft, ChevronRight} from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";
import useWindowStore from "#store/window.js";

const ImageViewer = ({ windowKey = "imgfile" }) => {
    const { windows, setWindowData } = useWindowStore();
    const data = windows[windowKey]?.data;

    // Two shapes are supported: a single image ({src, title}) or a gallery
    // ({gallery: [{src, title}], index}) which enables next/prev cycling.
    const gallery = Array.isArray(data?.gallery) ? data.gallery : null;
    const idx = data?.index ?? 0;
    const current = gallery ? gallery[idx] : data;

    if (!current || !current.src) {
        return (
            <div className="flex items-center justify-center h-full bg-gray-100">
                <p className="text-gray-500">No image to display</p>
            </div>
        );
    }

    const many = gallery && gallery.length > 1;
    const go = (delta) =>
        setWindowData(windowKey, { index: (idx + delta + gallery.length) % gallery.length });

    return (
        <>
            <div id="window-header">
                <WindowControls target={windowKey} />
                <span className="text-sm font-medium">
                    {current.title || 'Image Viewer'}{many ? `  (${idx + 1}/${gallery.length})` : ''}
                </span>
            </div>
            <div className="relative bg-white flex items-center justify-center h-full p-4">
                <img
                    src={current.src}
                    alt={current.title || 'Image'}
                    className="max-w-full max-h-full object-contain"
                />
                {many && (
                    <>
                        <button
                            type="button"
                            onClick={() => go(-1)}
                            aria-label="Previous image"
                            className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            type="button"
                            onClick={() => go(1)}
                            aria-label="Next image"
                            className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}
            </div>
        </>
    );
};

export default ImageViewer;
