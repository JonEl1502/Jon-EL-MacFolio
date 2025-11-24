import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Gallery = () => {
    const { openWindow } = useWindowStore();
    const images = [
        { id: 1, src: "/images/gal1.png", alt: "Gallery 1" },
        { id: 2, src: "/images/gal2.png", alt: "Gallery 2" },
        { id: 3, src: "/images/gal3.png", alt: "Gallery 3" },
        { id: 4, src: "/images/gal4.png", alt: "Gallery 4" },
    ];

    const handleImageClick = (image) => {
        openWindow("imgfile", { src: image.src, title: image.alt });
    };

    return (
        <div className="flex flex-col w-[700px] h-[500px]">
            <div id="window-header">
                <WindowControls target="photos" />
                <h2>Gallery</h2>
            </div>

            <div className="bg-white flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-2 gap-4">
                    {images.map((image) => (
                        <div 
                            key={image.id} 
                            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                            onClick={() => handleImageClick(image)}
                        >
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const GalleryWindow = WindowWrapper(Gallery, "photos");

export default GalleryWindow;
