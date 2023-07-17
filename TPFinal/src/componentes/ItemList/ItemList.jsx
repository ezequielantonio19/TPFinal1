import Item from "../Item/Item"
import './ItemList.css'


const ItemList = ({envases}) => {
  return (
    <div className="envasesHome">
        {envases.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList