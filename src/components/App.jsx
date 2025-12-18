import "../css/App.css"
import Header from "./Header"
import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Filtro from "./Filtro"

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Filtro />} />
      </Routes>

    </>
  )
}

export default App
