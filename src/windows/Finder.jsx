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
    const {openWindow, focusWindow, windows, openImages} = useWindowStore();
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
            // Open one viewer per folder, holding all of that folder's images so
            // the user can page next/prev through them.
            const imgs = (activeLocation?.children || []).filter(
                (c) => c.fileType === "img" && c.imageUrl
            );
            const index = Math.max(0, imgs.findIndex((c) => c.id === item.id));
            const gallery = imgs.map((c) => ({ src: c.imageUrl, title: c.name }));
            openImages(`imgfile_folder_${activeLocation?.id ?? "x"}`, gallery, index);
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
                {/* Ensure 'Work' appears in favorites and positioned above About Me */}
                {renderList('Favorite', [locations.work, ...Object.values(locations).filter(l => l.type !== 'work')])}

                {renderList('My Projects', locations.workhome.children)}
            </div>

            <ul className="content">
                {((activeLocation?.type === 'work') ? locations.workhome.children : activeLocation?.children)?.map((item) => (
                    <li key={item.id}
                        className="folder-item cursor-pointer"
                        onClick={() => {
                            openItem(item);
                        }}
                    >
                        <img src={item.icon}
                             alt={item.name}
                             className="pointer-events-none"
                        />
                        <p className="text-sm text-teal-600 pointer-events-none">{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    </>
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
