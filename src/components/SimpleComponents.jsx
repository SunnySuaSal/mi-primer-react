function Saludo(){
  return(
    <p>Esto es un componente. Saludos!</p>
  )
}

function Ejemplo(props) {
  return (
    <h2>
      Usando props, se que tu nombre de usuario es {props.nombre}
    </h2>
  )
}

export { Saludo, Ejemplo }
