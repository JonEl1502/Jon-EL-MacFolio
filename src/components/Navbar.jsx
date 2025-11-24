// External imports
import dayjs from "dayjs";
// Internal imports
import {navIcons, navLinks} from '#constants'
import useWindowStore from "#store/window.js";


const Navbar = () => {
    const {openWindow} = useWindowStore();

    return <nav>
        <div>
            <img src="/icons/atom.svg" alt="logo"/>
            <p className="font-bold">Jon-EL's Macfolio</p>
            <ul>
                {navLinks.map(({id, name, type}) => (
                    <li key={id} onClick={() => openWindow(type)}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {navIcons.map(({id, img}) => (
                    <li key={id}>
                        <img src={img} className="icon-hover" alt={`icon-${id}`}/>
                    </li>
                ))}
            </ul>

            <time> {dayjs().format("ddd MMM D h:mm A")} </time>
        </div>
    </nav>
}
export default Navbar
