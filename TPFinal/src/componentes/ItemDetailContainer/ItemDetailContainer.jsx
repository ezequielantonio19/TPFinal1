import { useState, useEffect } from "react"
import { getEnvase } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [envase, setEnvase] = useState (null);

  const {idItem} = useParams(); 

  useEffect (() =>{
    getEnvase(idItem)
    .then(res => setEnvase(res))
    .catch (error => console.log(error))

  }, [idItem]
  )
  return (
    <div> <ItemDetail  {...envase} /></div>
  )
}

export default ItemDetailContainer