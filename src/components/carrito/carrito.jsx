import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
    <div className="container">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <p>Precio unit: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <div className="container-button">
                <button className="vaciar-carrito" onClick={handleVaciar}>Vaciar</button>
                <Link className="finalizar-compra" >Finalizar compra</Link>
                </div>
            </> :
            <h2>El carrito está vacío.😔 </h2>
        }
        
    </div>
    )
}

export default Carrito