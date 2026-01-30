//Vamos a ver la funcion map de JavaScript
//
//map es una funcion de los arreglos
//map toma un arreglo y crea otro arreglo del mismo tamaño
//transformando cada elemento

//ejemplo simple:

const numeros = [1, 2, 3]
const dobles = numeros.map(n => n * 2)
//[2, 4, 6]

//No modifica el original
//Devuelve un nuevo arreglo

//Modelo mental
//[ A, B, C ]
//   ↓  ↓  ↓
//[ f(A), f(B), f(C) ]

//Viene perfecto para React, para pasar JSX. Mira el ejemplo en App.jsx
