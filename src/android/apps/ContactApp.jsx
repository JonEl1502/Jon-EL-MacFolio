import {Mail, Phone, MapPin, ExternalLink} from 'lucide-react'
import {socials} from '#constants'

const ContactApp = () => (
    <div className="aos-contact">
        <div className="aos-contact-card">
            <img src="/images/jonel-1.jpg" alt="John Kabiu Mwaura" className="aos-avatar"/>
            <h2>John Kabiu Mwaura</h2>
            <p className="aos-role">Full-stack engineer · Nairobi, Kenya</p>
        </div>

        <ul className="aos-contact-list">
            <li><a href="mailto:kabiujm@gmail.com"><Mail size={18}/><span>kabiujm@gmail.com</span></a></li>
            <li><MapPin size={18}/><span>Nairobi, Kenya</span></li>
        </ul>

        <h3>Find me online</h3>
        <ul className="aos-socials">
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
    </div>
)

export default ContactApp
