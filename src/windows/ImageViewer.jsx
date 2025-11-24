import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const ImageViewer = ({ src, title }) => {
    return (
        <div className="image-viewer-window bg-white w-full h-full flex flex-col">
            <div id="window-header">
                <WindowControls target="imgfile" />
                <h2 className="overflow-hidden whitespace-nowrap overflow-ellipsis">{title}</h2>
            </div>
            <div className="flex flex-1 items-center justify-center p-4 bg-gray-100">
                <img src={src} alt={title} className="max-h-full max-w-full object-contain" />
            </div>
        </div>
    );
};
const ImageViewerWindow =WindowWrapper(ImageViewer, "imgfile");

export default ImageViewerWindow;
