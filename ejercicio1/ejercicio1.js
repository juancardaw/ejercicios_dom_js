// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const showme = document.querySelector(".showme");
console.log(showme);


// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1Pillado = document.querySelector("#pillado");
console.log(h1Pillado)


// 1.3 Usa querySelector para mostrar por consola todos los p
const todosH1 = document.querySelectorAll("p");
console.log(todosH1);


// 1.4 Usa querySelector para mostrar por consola todos los elementos con 
// 	la clase.pokemon
const pokemon = document.querySelectorAll(".pokemon");
console.log(pokemon);


// 1.5 Usa querySelector para mostrar por consola todos los elementos con 
// el atributo data-function="testMe".
const dataTodos = document.querySelectorAll('[data-function="testMe"]');
console.log(dataTodos);


// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
const dataUnico = document.querySelector('[data-function="testMe"]:nth-of-type(3)');
console.log(dataUnico);