import {ExternalLink} from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";
import {otherWorks} from "#constants/index.js";

const OtherWorks = () => {
    const {openImages} = useWindowStore();

    return (
        <div className="flex flex-col w-[680px] h-[560px]">
            <div id="window-header">
                <WindowControls target="otherworks"/>
                <h2 className="flex-1 text-center text-sm font-bold">Other Works</h2>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto bg-white p-6">
                {otherWorks.map((work) => (
                    <article
                        key={work.id}
                        className="rounded-xl border border-gray-100 bg-gray-50 p-5 shadow-sm"
                    >
                        <h3 className="text-base font-bold text-gray-900">{work.name}</h3>
                        {work.blurb && <p className="mb-2 text-sm text-gray-500">{work.blurb}</p>}

                        {work.url && (
                            <a
                                href={work.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mb-2 inline-flex items-center gap-1 text-sm font-medium text-sky-600 hover:underline"
                            >
                                Visit <ExternalLink size={14}/>
                            </a>
                        )}

                        {(work.readme || []).map((para, i) => (
                            <p key={i} className="mb-2 text-sm leading-relaxed text-gray-600">{para}</p>
                        ))}

                        {work.screenshots?.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-3">
                                {work.screenshots.map((src, i) => (
                                    <button
                                        key={src}
                                        type="button"
                                        onClick={() => openImages(
                                            `imgfile_ow_${work.id}`,
                                            work.screenshots.map((s) => ({src: s, title: work.name})),
                                            i,
                                        )}
                                        className="overflow-hidden rounded-lg shadow-sm transition-transform hover:scale-105"
                                    >
                                        <img src={src} alt="" loading="lazy" className="h-24 w-32 object-cover"/>
                                    </button>
                                ))}
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
};

const OtherWorksWindow = WindowWrapper(OtherWorks, "otherworks");

export default OtherWorksWindow;
