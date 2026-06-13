import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";
import {expertise} from "#constants/index.js";

const Expertise = () => {
    const {openImages} = useWindowStore();

    return (
        <div className="flex flex-col w-[640px] h-[520px]">
            <div id="window-header">
                <WindowControls target="expertise"/>
                <h2 className="flex-1 text-center text-sm font-bold">Expertise</h2>
            </div>

            <div className="flex-1 overflow-y-auto bg-white p-6">
                <div className="grid grid-cols-2 gap-4">
                    {expertise.map((item) => {
                        const hasShots = item.screenshots?.length > 0;
                        const galleryFor = () => item.screenshots.map((s) => ({src: s, title: item.title}));
                        const openAt = (i) => openImages(`imgfile_exp_${item.id}`, galleryFor(), i);
                        const openFirst = () => hasShots && openAt(0);
                        return (
                            <div
                                key={item.id}
                                onClick={openFirst}
                                className={`rounded-xl border border-gray-100 bg-gray-50 p-5 shadow-sm transition-shadow hover:shadow-md ${hasShots ? "cursor-pointer" : ""}`}
                            >
                                <h3 className="mb-2 text-base font-bold text-gray-900">{item.title}</h3>
                                <p className="text-sm leading-relaxed text-gray-600">{item.blurb}</p>

                                {hasShots && (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {item.screenshots.map((src, i) => (
                                            <button
                                                key={src}
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openAt(i);
                                                }}
                                                className="overflow-hidden rounded-md shadow-sm transition-transform hover:scale-105"
                                            >
                                                <img src={src} alt="" loading="lazy" className="h-16 w-24 object-cover"/>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

const ExpertiseWindow = WindowWrapper(Expertise, "expertise");

export default ExpertiseWindow;
