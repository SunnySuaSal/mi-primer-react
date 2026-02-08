import { useState } from "react"
import FruitList from "../components/FruitList"

function Fruits(){
  const [frutas, setFrutas] = useState([
    { id: 1, nombre: "Durazno" },
    { id: 2, nombre: "Sandía" },
    { id: 3, nombre: "Melón" }
  ])

  const [nuevaFruta, setNuevaFruta] = useState("")
  const [nextId, setNextId] = useState(4)

  const agregarFruta = () => {
    if(nuevaFruta.trim() === "") return

    setFrutas([
      ...frutas,
      {id: nextId, nombre: nuevaFruta}
    ])

    setNextId(nextId + 1)
    setNuevaFruta("")
  }

  const eliminarFruta = (id) => {
    setFrutas(frutas.filter(fruta => fruta.id !== id))
  }

  return (
    <>
      <h1>Lista dinámica de frutas</h1>
      
      <input
        type="text"
        value={nuevaFruta}
        onChange={(evento) => setNuevaFruta(evento.target.value)}
        placeholder="Nueva fruta"
      />

      <button onClick={agregarFruta}>
        Agregar fruta
      </button>

      <FruitList 
        items={frutas}
        getKey={(fruta) => fruta.id}
        renderItem={(fruta) => (
        <>
          {fruta.nombre}
          <button onClick={() => eliminarFruta(fruta.id)}>
            Eliminar
          </button>
        </>
        )}
      />
    </>
  )

}

export default Fruits
