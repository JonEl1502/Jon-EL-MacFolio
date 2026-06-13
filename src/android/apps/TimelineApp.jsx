import {timeline} from '#constants'

const TimelineApp = () => (
    <ol className="aos-timeline">
        {timeline.map((item) => (
            <li key={item.id} className="aos-timeline-item">
                <span className="aos-timeline-dot" aria-hidden="true"/>
                <div className="aos-timeline-body">
                    <span className="aos-timeline-period">{item.period}</span>
                    <h3>{item.role}</h3>
                    <span className="aos-timeline-org">{item.org}</span>
                    <p>{item.summary}</p>
                </div>
            </li>
        ))}
    </ol>
)

export default TimelineApp
