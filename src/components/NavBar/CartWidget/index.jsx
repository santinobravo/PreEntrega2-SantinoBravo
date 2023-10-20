import cart from "../../../assets/icons/cart.png"
import "../../../App.css"
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext';
import { useContext } from "react";

function CartWidget (){

    const { cantidadEnCarrito } = useContext(CartContext);

    return(
        <div className="cart">
            <Link className="menu-link" to={"/carrito"}>
            <img src={cart} alt="cart" className="cartIcon" />
            <span>{cantidadEnCarrito()}</span>
            </Link>
        </div>
        
    )
}
export default CartWidget; 