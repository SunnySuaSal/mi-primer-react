import { useState } from "react"

function Counter(){
  const [contador, setContador] = useState(0)

  return(
    <>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
    </>
  )

}

export default Counter
