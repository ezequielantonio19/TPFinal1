import { Link } from "react-router-dom"
import "./Item.css"


const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardEnvase'>
        <img className="imgProducto" src={img} alt={nombre} />
        <h3>{nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>Código de producto: {id}</p> 
        <Link to= {`/Item/${id}`}> Ver más </Link>
    </div>
  )
}

export default Item