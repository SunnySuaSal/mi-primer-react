//Las funciones flechas que ves, son simplemente otra forma de escribir funciones en JavaScript

function sumar(x){
  return x + 1
}

//es lo mismo que 

const sumar = (x) => {
  return x + 1
}

//y puedes escribirlo en una sola expresion

const sumar = x => x + 1

//En React se usan mucho porque te permiten definir una función sin llamarla.
//Indicando más bien la funcion que debe ejecutarse en caso de que un evento ocurra.
//por ejemplo, si escribireras
//<button onClick={setContador(contador + 1)}>
//se ejecutaría inmediatamente, no en el evento de click
//
//es pir esto que 
//<button onClick={()=>setContador(contador + 1)} es la version correcta
//define la función, pero sólo la llama en caso del evento.
