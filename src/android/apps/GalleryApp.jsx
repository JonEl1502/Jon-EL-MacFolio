import {useState} from 'react'
import {gallery} from '#constants'
import {X} from 'lucide-react'

const GalleryApp = () => {
    const [active, setActive] = useState(null)

    return (
        <div className="aos-gallery">
            <div className="aos-gallery-grid">
                {gallery.map((g) => (
                    <button key={g.id} type="button" onClick={() => setActive(g.img)}>
                        <img src={g.img} alt="" loading="lazy"/>
                    </button>
                ))}
            </div>

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

export default GalleryApp
