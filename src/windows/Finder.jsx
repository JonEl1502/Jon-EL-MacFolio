// External imports
import React from 'react'
import {Search} from "lucide-react";
import {clsx} from "clsx";

// Internal imports
import useWindowStore from "#store/window.js";
import useLocationStore from "#store/location.js";
import {locations} from "#constants/index.js";
import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";

const Finder = () => {
    const {openWindow, focusWindow, windows} = useWindowStore();
    const {activeLocation, setActiveLocation} = useLocationStore();

    // Simple UI render reuse
    const renderList = (name, items) => (
        <div>
            <h3>{name}</h3>
            <ul>
                {items.map(item => (
                    <li key={item.id}
                        className={clsx(item.id === activeLocation.id ? "active" : "not-active")}
                        onClick={() =>
                            setActiveLocation(item)}
                    >
                        <img src={item.icon}
                             className="w-4"
                             alt={item.name}
                        />

                        <p className="text-sm font-medium truncate">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );

    //
    const openItem = (item) => {
        if (item.fileType === "pdf") return openWindow("resume");
        if (item.fileType === "txt") return openWindow("txtfile", item);
        if (item.kind === "folder") return setActiveLocation(item);
        if (["fig", "url"].includes(item.fileType) && item.href) return window.open(item.href, "_blank");
        if (item.fileType === "img" && item.imageUrl) {
            // Check if image is already open
            const existingWindow = Object.entries(windows).find(([key, window]) => 
                key.startsWith(`imgfile_${item.id}_`) && window.isOpen
            );
            
            if (existingWindow) {
                // Focus existing window instead of opening new one
                focusWindow(existingWindow[0]);
                return;
            }
            
            const uniqueWindowKey = `imgfile_${item.id}_${Date.now()}`;
            openWindow(uniqueWindowKey, {
                src: item.imageUrl,
                title: item.name
            });
        }
    };

    // Render
    return <>
        <div id="window-header">
            <WindowControls target="finder"/>
            <Search className="icon"/>
        </div>

        <div className="bg-white flex h-full">
            <div className="sidebar">
                {renderList('Favorite', Object.values(locations))}

                {renderList('My Projects', locations.work.children)}
            </div>

            <ul className="content">
                {activeLocation?.children?.map((item) => (
                    <li key={item.id}
                        className={item.position}
                        onClick={() =>
                            openItem(item)}
                    >
                        <img src={item.icon}
                             alt={item.name}
                        />
                        <p className="text-sm text-teal-600">{item.name}</p>
                    </li>

                ))}
            </ul>
        </div>
    </>
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
