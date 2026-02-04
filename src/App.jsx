import { useState } from "react"

import Counter from "./components/Counter"
import { Saludo, Ejemplo } from "./components/SimpleComponents"
import FruitList from "./components/FruitList"

function App(){

  const nombre = "Sunny"

  const frutas = ["Manzana", "Plátano", "Naranja"] //Estas listas normalmente vienen de una API

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
