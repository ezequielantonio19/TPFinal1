import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState (0);

    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        console.log("Productos agregados" + cantidad);
    }

    return (
        <div className='contenedorItem'>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <h3>${precio}</h3>
            <h3>Código de producto: {id}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus provident, tempore quod minus nam eum incidunt obcaecati cumque delectus! Eveniet, ratione odit enim ipsum quo dicta sit eligendi? Odio!
            </p>

            {
                agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }


            



        </div>
    )
}

export default ItemDetail