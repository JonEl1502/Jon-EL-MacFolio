import {useState} from 'react'
import {ExternalLink, X} from 'lucide-react'
import {otherWorks} from '#constants'

const OtherWorksApp = () => {
    const [active, setActive] = useState(null)

    return (
        <div className="aos-otherworks">
            {otherWorks.map((work) => (
                <article key={work.id} className="aos-ow-card">
                    <h3>{work.name}</h3>
                    {work.blurb && <p className="aos-ow-blurb">{work.blurb}</p>}

                    {work.url && (
                        <a className="aos-cta" href={work.url} target="_blank" rel="noreferrer">
                            Visit <ExternalLink size={14}/>
                        </a>
                    )}

                    {(work.readme || []).map((para, i) => (
                        <p key={i} className="aos-ow-readme">{para}</p>
                    ))}

                    {work.screenshots?.length > 0 && (
                        <div className="aos-ow-shots">
                            {work.screenshots.map((src) => (
                                <button key={src} type="button" onClick={() => setActive(src)}>
                                    <img src={src} alt="" loading="lazy"/>
                                </button>
                            ))}
                        </div>
                    )}
                </article>
            ))}

            {active && (
                <div className="aos-lightbox" onClick={() => setActive(null)}>
                    <button type="button" aria-label="Close" className="aos-lightbox-close">
                        <X size={22}/>
                    </button>
                    <img src={active} alt=""/>
                </div>
            )}
        </div>
    )
}

export default OtherWorksApp
