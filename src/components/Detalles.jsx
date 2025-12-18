import coches from "../coches.json"

function Detalles() {
    return (
        <div>
            {coches.map((coche, index) => (
                <div key={index}>
                    <h2>{coche.nombre}</h2>
                    <p>{coche.descripcion}</p>
                    <p>Precio desde: {coche.precio_desde}</p>
                </div>
            ))}
        </div>
    )
}

export default Detalles