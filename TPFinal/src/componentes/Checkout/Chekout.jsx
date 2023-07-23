import { useState, useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { db } from "../../service/config"
import { collection, addDoc } from 'firebase/firestore'
import './Checkout.css'

const Chekout = () => { const { carrito, vaciarCarrito, cantidadTotal, total } = useContext(CarritoContext);
const [nombre, setNombre] = useState("");
const [apellido, setApellido] = useState("");
const [telefono, setTelefono] = useState("");
const [email, setEmail] = useState("");
const [emailConfirmacion, setEmailConfirmacion] = useState("");
const [error, setError] = useState("");
const [orderId, setOrdenId] = useState("");



const manejadorFormulario = (e) => {
    e.preventDefault();

    
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
        setError("Complete todos los campos");
        return;
    }

    
    if (email !== emailConfirmacion) {
        setError("Confirme nuevamente su em@il");
        return;
    }

    
    const orden = {
        items: carrito.map(producto => ({
            id: producto.item.id,
            nombre: producto.item.nombre,
            cantidad: producto.cantidad
        })),
        total: cantidadTotal,
        nombre,
        apellido,
        telefono,
        email,
        fecha: new Date()
    };

    addDoc(collection(db, "ordenes"), orden)
             .then(docRef => {
                 setOrdenId(docRef.id);
                 vaciarCarrito();
             })
             .catch(error => {
                 console.log("Error al crear la orden", error);
                 setError("Error al crear la orden");
             })

}
return (
    <div>
        <h2>Confirmación de compra</h2>
        <form onSubmit={manejadorFormulario} className="formulario">
            {carrito.map(producto => (
                <div key={producto.item.id}>
                    <p>
                        {producto.item.nombre} x {producto.cantidad}
                    </p>
                    <p>Precio por unidad $ {producto.item.precio} </p>

                    <p>Subtotal $ {producto.item.precio * producto.cantidad} </p>
                    
                    
                    <hr />
                    <p>Total $ {total} </p>
                </div>
            ))}
            <hr />

            <div className="form-group">
                <label htmlFor="nombre"> Nombre </label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor=""> Apellido </label>
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor=""> Telefono </label>
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor=""> Email </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor=""> Email Confirmación </label>
                <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
            </div>

            {
                error && <p style={{ color: "red" }}> {error} </p>
            }

            <button type="submit" className="botonFinalizar"> Finalizar Compra </button>
        </form>
        {
            orderId && (
                <strong className="ordenId">Muchas gracias de utilizar nuestros servicios de compra OnLine! Tu órden de compra es {orderId} </strong>
            )
        }


    </div>
)
}
export default Chekout