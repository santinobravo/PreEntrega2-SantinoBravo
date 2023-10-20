import "./App.css"
import NavBar from "./components/NavBar";
import Contacto from "./components/contacto";
import ItemDetailContainer from "./components/itemDetailContainer";
import ItemListContainer from "./components/itemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/carrito/carrito";
import Checkout from "./components/checkout/index";

function App(){
  return (
  <div className="main">
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
    </BrowserRouter>
    </CartProvider>
  </div>
  );
}

export default App;