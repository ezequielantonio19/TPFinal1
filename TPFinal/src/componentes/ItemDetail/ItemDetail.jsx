import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

    const [agregarCantidad, setAgregarCantidad] = useState (0);

    const {agregarProducto} = useContext(CarritoContext);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        
        const item = {id, nombre, precio};
        agregarProducto(item, cantidad);
    }

    return (
        <div className='contenedorItem'>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <h3>${precio}</h3>
            <h3>Código de producto: {id}</h3>
            <p>{descripcion}
            </p>

            {
                agregarCantidad > 0 ? (<Link to="/cart" className='terminarCompra'> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }


            



        </div>
    )
}

export default ItemDetail