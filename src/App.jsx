import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Users from "./pages/Users"
import Fruits from "./pages/Fruits"

function App(){
 
  return(
    <>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/fruits">Frutas</Link> |{" "}
        <Link to="/users">Usuarios</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/users" element={<Users />} />
      </Routes>

    </>
  )
}


export default App
