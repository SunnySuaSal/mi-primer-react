import { Saludo, Ejemplo } from "../components/SimpleComponents"
import Counter from "../components/Counter"

function Home(){
  const nombre = "Sunnyy"
  return (
  <>
    <h1>Home</h1>
    <p>Bienvenido a la app</p>
    <p>Así es, estoy usando React Router</p>
    <h1>Hola, mi nombre es {nombre}</h1>
      <Saludo />
      <Ejemplo nombre="UsuarioJeje" />

      <Counter />

  </>
  )
}

export default Home
