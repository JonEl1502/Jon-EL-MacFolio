import {useState} from 'react'
import {X} from 'lucide-react'
import {expertise} from '#constants'

const ExpertiseApp = () => {
    const [active, setActive] = useState(null)

    return (
        <div className="aos-expertise">
            {expertise.map((item) => (
                <section key={item.id} className="aos-expertise-card">
                    <h3>{item.title}</h3>
                    <p>{item.blurb}</p>

                    {item.screenshots?.length > 0 && (
                        <div className="aos-ow-shots">
                            {item.screenshots.map((src) => (
                                <button key={src} type="button" onClick={() => setActive(src)}>
                                    <img src={src} alt="" loading="lazy"/>
                                </button>
                            ))}
                        </div>
                    )}
                </section>
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

export default ExpertiseApp
