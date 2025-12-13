import React, {useState} from 'react';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const ImageViewer = ({ src, title, images = [], currentIndex: initialIndex = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const imageList = images.length > 0 ? images : [{ src, title }];
    const currentImage = imageList[currentIndex];

    return (
        <div className="image-viewer-window bg-white w-full h-full flex flex-col">
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2 className="overflow-hidden whitespace-nowrap overflow-ellipsis">{currentImage.title || 'Image'}</h2>
                {imageList.length > 1 && (
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => setCurrentIndex(prev => prev > 0 ? prev - 1 : imageList.length - 1)}
                            className="cursor-pointer">
                            <ChevronLeft className="icon"/>
                        </button>
                        <span className="text-sm">{currentIndex + 1} / {imageList.length}</span>
                        <button 
                            onClick={() => setCurrentIndex(prev => prev < imageList.length - 1 ? prev + 1 : 0)}
                            className="cursor-pointer">
                            <ChevronRight className="icon"/>
                        </button>
                    </div>
                )}
            </div>
            <div className="flex flex-1 items-center justify-center p-2 bg-gray-100">
                <img src={currentImage.src} alt={currentImage.title || 'Image'} className="max-h-[95%] max-w-[95%] object-contain" />
            </div>
        </div>
    );
};
const ImageViewerWindow =WindowWrapper(ImageViewer, "imgfile");

export default ImageViewerWindow;
