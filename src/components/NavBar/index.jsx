import "../../App.css"
import CartWidget from "./CartWidget";
import Logo from "./Logo"
import { Link } from "react-router-dom";

function NavBar() {
    return <nav className="navBar">
        <Link to="/"><Logo /></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Productos</Link></li>
            <li><Link className="menu-link" to="/productos/Hamburguesas">Hamburguesas</Link></li>
            <li><Link className="menu-link" to="/productos/Papas">Papas Fritas</Link></li>
            <li><Link className="menu-link" to="/productos/Lomitos">Lomitos</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
        </ul>
        <CartWidget />
    </nav>;
}
export default NavBar;
