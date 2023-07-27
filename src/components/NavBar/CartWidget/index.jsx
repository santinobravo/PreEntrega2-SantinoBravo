import cart from "../../../assets/icons/cart.png"
import "./style.css"

function CartWidget (){
    return(
        <div className="cart">
            <img src={cart} alt="cart" className="cartIcon" />
            <p>0</p>
        </div>
    )
}
export default CartWidget; 