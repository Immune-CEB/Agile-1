import { useState } from "react"
import "../css/App.css"
import coches from "../coches.json"
import Header from "./Header"

function App() {

  const [newCoches, changeCoches] = useState(coches)

  function handleChange(ev) {
    if (ev.target.value === "") {
      changeCoches(coches)
    }
    else {
      const filteredCoches = coches.filter(coche => (coche.categoria === ev.target.value))
      changeCoches(filteredCoches)
    }
  }
  return (
    <>
      <Header />
      <label for="inputTipo">Tipo: </label>
      <select name="" id="inputTipo" onChange={handleChange} >
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
        {newCoches.map((coche, index) => (
          <section className="card" key={index}>
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
