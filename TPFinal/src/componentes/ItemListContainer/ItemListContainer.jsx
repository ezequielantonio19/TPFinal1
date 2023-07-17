import { useState, useEffect } from 'react'
import { getEnvases, getCategoria } from '../../asyncmock'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({ greeting }) => {

  const [envases, setEnvases] = useState([]);
  const {idCategoria} = useParams();


  useEffect(() => {
    const funcionEnvases = idCategoria ? getCategoria : getEnvases;

    funcionEnvases(idCategoria)
      .then(res => setEnvases(res))
      .catch(error => console.log(error))
   
  }, [idCategoria])

  return (
     <> <h2>
         {greeting} 
         </h2> 

        <ItemList className={"contenedorHome"} envases={envases}/>
        </> 
        )
}

export default ItemListContainer