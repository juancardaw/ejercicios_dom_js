// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const boton = document.createElement("button");
const click = document.querySelector("input.click")
boton.id = "btnToClick";
boton.textContent = "boton"
document.body.appendChild(boton);

boton.addEventListener("click", () => {
    console.log("El valor input con la clase click bro es: ", click.value );
});



// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focus = document.querySelector("input.focus");

focus.addEventListener("focus", () => {
   console.log("El valor del input con la clase focus bro es: ", focus.value);
});


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValue = document.querySelector("input.value");

inputValue.addEventListener("input", () => {
    console.log("El valor del input con la clase Value bro es: ", inputValue.value);
});


// 1.4 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
// que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];


const ul = document.createElement("ul");

// albums.forEach(albunes => {CODIGO QUE HE PUESTO ABAJO});   FORMA DE HACELRO CON FOREACH

for(const albunes of albums) {
    const li = document.createElement("li");
    li.textContent = albunes;
    ul.appendChild(li); 
};

document.body.appendChild(ul);
