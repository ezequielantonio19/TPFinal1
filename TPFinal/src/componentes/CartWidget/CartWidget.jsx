import './CartWidget.css'
import { useContext,  } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
    



const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
    const {cantidadTotal} = useContext(CarritoContext);

    return (
        <div>
            <Link to="/cart">
            <img className='carrito' src={imgCarrito} alt="Carrito" />
            {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>
        </div>

    )
}

export default CartWidget