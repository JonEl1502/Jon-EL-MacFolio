import WindowControls from "#components/WindowControls.jsx";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {timeline} from "#constants/index.js";

const Timeline = () => {
    return (
        <div className="flex flex-col w-[620px] h-[540px]">
            <div id="window-header">
                <WindowControls target="timeline"/>
                <h2 className="flex-1 text-center text-sm font-bold">Timeline</h2>
            </div>

            <div className="flex-1 overflow-y-auto bg-white p-8">
                <ol className="relative border-l-2 border-gray-200 pl-8">
                    {timeline.map((item) => (
                        <li key={item.id} className="mb-8 last:mb-0">
                            <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-[3px] border-white bg-gradient-to-br from-violet-500 to-sky-400"/>
                            <span className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                                {item.period}
                            </span>
                            <h3 className="mt-0.5 text-base font-bold text-gray-900">{item.role}</h3>
                            <span className="text-sm text-gray-500">{item.org}</span>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.summary}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

const TimelineWindow = WindowWrapper(Timeline, "timeline");

export default TimelineWindow;
