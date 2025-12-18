import "../css/App.css"
import coches from "../coches.json"
import Header from "./Header"
import { Route, Routes } from "react-router-dom"
import Login from "./Login"

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>
      <label for="inputTipo">Tipo: </label>
      <select name="" id="inputTipo">
        <option value="">Nada</option>
        <option value="SUV">SUV</option>
        <option value="Berlina">Berlina</option>
        <option value="Tourin">Touring</option>
        <option value="Gran Coupé">Gran Coupé</option>
        <option value="Compacto">Compacto</option>
        <option value="Monovolumen">Monovolumen</option>
        <option value="Cabrio">Cabrio</option>
      </select>

      <label className="grid">
      {coches.map((coche, index) => (
        <section className="card" key={index}>
          <img src={coche.imagenes[0]} alt={coche.nombre} />
          <h3 className="name">{coche.nombre}</h3>
          <p className="precio">{coche.precio_desde}</p>
          <p className="categoria">{coche.categoria}</p>
        </section>
      ))}
    </label>
    </>
  )
}

export default App
