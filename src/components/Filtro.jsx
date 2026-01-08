import React, { useState } from 'react'
import coches from "../coches.json"

function Filtro() {
  const [newCoches, changeCoches] = useState(coches)

  function handleChange(ev) {
    const valor = ev.target.value
    if (valor === "") {
      changeCoches(coches)
    } else {
      const filteredCoches = coches.filter(coche => coche.categoria === valor)
      changeCoches(filteredCoches)
    }
  }

  return (
    <>
      <div className="filter-section">
        <label htmlFor="inputTipo">Filtrar por tipo:</label>
        <select id="inputTipo" onChange={handleChange}>
          <option value="">Todos los modelos</option>
          <option value="SUV">SUV</option>
          <option value="Berlina">Berlina</option>
          <option value="Touring">Touring</option>
          <option value="Gran Coupé">Gran Coupé</option>
          <option value="Compacto">Compacto</option>
          <option value="Monovolumen">Monovolumen</option>
          <option value="Cabrio">Cabrio</option>
        </select>
      </div>

      <div className="grid">
        {newCoches.map((coche, index) => (
          <section className="card" key={index}>
            <img src={coche.imagenes[0]} alt={coche.nombre} />
            <h3 className="name">{coche.nombre}</h3>
            <p className="precio">{coche.precio_desde}</p>
            <p className="categoria">{coche.categoria}</p>
          </section>
        ))}
      </div>
    </>
  )
}

export default Filtro