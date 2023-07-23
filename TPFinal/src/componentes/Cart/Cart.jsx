import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);
    

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>Tu carrito está vacío</h2>
                <Link to="/"> <h3> Volver al inicio </h3> </Link>
            </>
        )
    }
    return (
        <div className="cart">
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h2 className="cart-total">Total: $ {total} </h2>
            <h2 className="cart-total"> Cantidad Total de Productos : {cantidadTotal}  </h2>
            <button onClick={() => vaciarCarrito()} className="cart-item2" > Vaciar Carrito </button>
            <Link to="/checkout" className="cart-checkout-button"> Finalizar Compra </Link>
            
        </div>
        
    )
}

export default Cart