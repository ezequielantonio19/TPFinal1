import { useState, useEffect } from 'react'
//import { getEnvases, getCategoria } from '../../asyncmock'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import { collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../service/config'

const ItemListContainer = ({ greeting }) => {

  const [envases, setEnvases] = useState([]);
  const {idCategoria} = useParams();

  useEffect( () => {
    const misProductos = idCategoria ? query(collection(db, "Inventario"),where("idCat", "==", idCategoria)) : collection(db, "Inventario");

    getDocs(misProductos)
        .then( res => {
            const nuevosProductos = res.docs.map( doc => {
                const data = doc.data();
                return {id: doc.id, ...data}
            })
            setEnvases(nuevosProductos);
        })
        .catch(error => console.log(error))
}, [idCategoria])


 // useEffect(() => {
   // const funcionEnvases = idCategoria ? getCategoria : getEnvases;

    //funcionEnvases(idCategoria)
      //.then(res => setEnvases(res))
      //.catch(error => console.log(error))
   
 // }, [idCategoria])

  return (
     <> <h2>
         {greeting} 
         </h2> 

        <ItemList className={"contenedorHome"} envases={envases}/>
        </> 
        )
}

export default ItemListContainer