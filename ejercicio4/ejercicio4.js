// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
const boton = document.createElement("button");
boton.id = "btnToClick";
boton.textContent = "boton"
document.body.appendChild(boton);

boton.addEventListener("click", () => {
    console.log("El valor del click es: ", event);
});



// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focus = document.querySelector("input.focus");

focus.addEventListener("focus", () => {
   console.log("El valor del focus bro es: ", event);
});


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const input = document.querySelector("input.value");

input.addEventListener("input", () => {
    console.log("El valor del input bro es: ", event);
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
