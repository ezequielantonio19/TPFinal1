import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);
    

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito</h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }
    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h2>Total: $ {total} </h2>
            <h2> Cantidad Total de Productos : {cantidadTotal}  </h2>
            <button onClick={() => vaciarCarrito()} > Vaciar Carrito </button>
            <Link to="/checkout"> Finalizar Compra </Link>
            
        </div>
        
    )
}

export default Cart