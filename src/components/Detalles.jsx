import coches from "../coches.json"

function Detalles() {
    return (
        <div>
            {coches.map((coche, index) => (
                <div key={index}>
                    <h2>{coche.nombre} - {coche.precio_desde}</h2>
                    <p>{coche.categoria}</p>
                    <p>{coche.descripcion}</p>
                    <p>Especificaciones: {coche.especificaciones}</p>
                    <p>Equipamentos: {coche.equipamientos}</p>
                    <p>{coche.imagenes}</p>
                </div>
            ))}
        </div>
    )
}

export default Detalles