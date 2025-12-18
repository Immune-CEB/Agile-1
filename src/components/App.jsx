import "../css/App.css"
import Header from "./Header"

function App() {

  return (
    <>
    <Header />
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
    </>
  )
}

export default App
