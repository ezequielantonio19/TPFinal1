import './ItemDetail.css'

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className='contenedorItem'>
            <h2>{nombre}</h2>
            <img src={img} alt={nombre} />
            <h3>${precio}</h3>
            <h3>Código de producto: {id}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus provident, tempore quod minus nam eum incidunt obcaecati cumque delectus! Eveniet, ratione odit enim ipsum quo dicta sit eligendi? Odio!
            </p>


            



        </div>
    )
}

export default ItemDetail