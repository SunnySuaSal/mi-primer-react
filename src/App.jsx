import { useState } from "react"

import Counter from "./components/Counter"
import { Saludo, Ejemplo } from "./components/SimpleComponents"
import FruitList from "./components/FruitList"

function App(){

  const nombre = "Sunny"

  const [frutas, setFrutas] = useState([
    "Manzana",
    "Platano",
    "Naranja"
  ])

  const [nuevaFruta, setNuevaFruta] = useState("")

  const frutasDin = [ //Si la lista va a ser dinamica, React te pide un key para identificar los elementos
    {id: 1, nombre: "Durazno"},
    {id: 2, nombre: "Sandía"},
    {id: 3, nombre: "Melón"}
  ]

  return(
    <>
      <h1>Hola, mi nombre es {nombre}</h1>
      <Saludo />
      <Ejemplo nombre="UsuarioJeje" />

      <Counter />


      <input 
        type="text" 
        value={nuevaFruta}
        onChange={(evento) => setNuevaFruta(evento.target.value)}
        placeholder="Nueva fruta"
      />
      <button
        onClick={() => {
          if(nuevaFruta.trim() === "") return
          setFrutas([...frutas, nuevaFruta])
          setNuevaFruta("")
        }}
      >
        Agregar fruta
      </button>

      <FruitList
        items={frutas}
        getKey={(fruta) => fruta}
        renderItem={(fruta) => fruta}
      />

      <FruitList
        items={frutasDin}
        getKey={(fruta) => fruta.id}
        renderItem={(fruta) => fruta.nombre}
      />

    </>
  )
}


export default App
