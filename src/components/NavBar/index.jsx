import "./style.css"
import CartWidget from "./CartWidget";
import Logo from "./Logo"

function NavBar() {
    return <nav className="navBar">
        <Logo />
        <div>
            <button>Inicio</button>
            <button>Nosotros</button>
            <button>Contacto</button>
            <button>Productos</button>
        </div>
        <CartWidget />
    </nav>;
}
export default NavBar;
