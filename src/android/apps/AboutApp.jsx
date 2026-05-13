import {useState} from 'react'
import {X} from 'lucide-react'

const AVATAR = '/images/jonel-1.jpg'

const AboutApp = () => {
    const [open, setOpen] = useState(false)

    return (
        <article className="aos-about">
            <button
                type="button"
                className="aos-avatar-btn"
                onClick={() => setOpen(true)}
                aria-label="Open profile picture"
            >
                <img src={AVATAR} alt="" className="aos-avatar aos-avatar-lg"/>
            </button>
            <h2>Hi, I'm John</h2>
            <p>
                Full-stack engineer based in Nairobi. I build polished web and mobile
                products end-to-end — from API and database design to interactive
                front-end experiences. Recent work spans e-commerce platforms,
                hydroponic farming dashboards, and veterinary practice software.
            </p>
            <p>
                On this site you can browse my projects, read my articles, see my
                stack, or grab my résumé. You're currently in the Android-style
                phone UI — switch to <code>/desktop</code> for the full
                macOS-style experience.
            </p>

            {open && (
                <div className="aos-lightbox" onClick={() => setOpen(false)}>
                    <button type="button" aria-label="Close" className="aos-lightbox-close">
                        <X size={22}/>
                    </button>
                    <img src={AVATAR} alt=""/>
                </div>
            )}
        </article>
    )
}

export default AboutApp
