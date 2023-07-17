import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import CartWidget from "./componentes/CartWidget/CartWidget"
import Home from "./componentes/Home/Home"
import './App.css'


const App = () => {
  return (
    <div className="contenedorGral">

      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
            
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>} />
          <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h2>Esta sección aún no está disponible</h2>}/>
        </Routes>


        
      </BrowserRouter>
    </div>
  )
}

export default App
