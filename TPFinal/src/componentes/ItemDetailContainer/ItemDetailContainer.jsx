import { useState, useEffect } from "react"

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {getDoc, doc} from "firebase/firestore";
import { db } from '../../service/config';

const ItemDetailContainer = () => {

  const [envase, setEnvase] = useState (null);

  const {idItem} = useParams(); 



  useEffect( ()=> {
    const nuevoDoc = doc(db, "Inventario", idItem);

    getDoc(nuevoDoc)
        .then(res => {
            const data = res.data();
            const nuevoProducto = {id:res.id, ...data};
            setEnvase(nuevoProducto);
        })
        .catch(error => console.log(error))
}, [idItem])

  
  return (
    <div> <ItemDetail  {...envase} /></div>
  )
}

export default ItemDetailContainer