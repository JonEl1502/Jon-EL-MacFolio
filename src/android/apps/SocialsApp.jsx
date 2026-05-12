import {ExternalLink} from 'lucide-react'
import {socials} from '#constants'

const SocialsApp = () => (
    <ul className="aos-socials aos-socials-list">
        {socials.map((s) => (
            <li key={s.id}>
                <a href={s.link} target="_blank" rel="noreferrer" style={{background: s.bg}}>
                    <img src={s.icon} alt=""/>
                    <span>{s.text}</span>
                    <ExternalLink size={14}/>
                </a>
            </li>
        ))}
    </ul>
)

export default SocialsApp
