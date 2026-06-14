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
                Full-stack engineer based in Nairobi with 12+ years building mobile
                and web products end-to-end — native Android (Kotlin/Java), Flutter,
                React and Vue, backed by Node.js, Phalcon PHP and Go. My work spans
                fintech, gaming, transport and enterprise systems, with a focus on
                UI/UX, performance, and secure API integrations.
            </p>
            <p>
                On this site you can browse my projects and expertise, scan my
                timeline, read my articles, see my stack, or grab my résumé. The whole
                thing adapts to your device — this is the Android-style mobile view;
                open it on a computer (or go to <code>/desktop</code>) for the full
                macOS-style desktop experience.
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
