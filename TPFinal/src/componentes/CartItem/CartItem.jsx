import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import ItemCount from "../ItemCount/ItemCount";
import './CartItem.css'

const CartItem = ({ item, cantidad, }) => {
    const { eliminarProducto } = useContext(CarritoContext);

    

    return (
        <div className="cart-item" key={item.id}>
            <h4> {item.nombre} </h4>
            <p> Cantidad: {cantidad} </p>
            <p> Precio Unitario: $ {item.precio}  </p>
            <p> SubTotal: $ {cantidad * item.precio}</p>
            <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
            <hr />
        </div>
    )
}

export default CartItem