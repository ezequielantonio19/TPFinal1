import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"

    return (
        <div>
            <img className='carrito' src={imgCarrito} alt="Carrito" />
            <strong> 100 </strong>
        </div>

    )
}

export default CartWidget