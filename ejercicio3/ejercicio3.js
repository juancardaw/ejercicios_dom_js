// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("lu");

for(const paises of countries) {
    const li = document.createElement("li");
    li.textContent = paises;
    ul.appendChild(li);
    document.body.appendChild(ul);
};


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminarElemento = document.querySelectorAll(".fn-remove-me");

eliminarElemento.forEach(eliminar => {
    eliminar.parentNode.removeChild(eliminar);
});


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const classDiv = document.querySelector('[data-function="printHere"]');
const ulListCoches = document.createElement("ul");

for(const coches of cars){
    const liListCoches = document.createElement("li");
    liListCoches.textContent = coches;
    ulListCoches.appendChild(liListCoches);
};

classDiv.appendChild(ulListCoches);



// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title 1', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title 2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title 3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title 4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title 5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for(const paises2 of countries2){
    const divPais = document.createElement("div");
    divPais.classList.add("listaPaises", "divClassEliminar");
    const tituloH4 = document.createElement("h4");
    const img = document.createElement("img");

    tituloH4.textContent = paises2.title;
    divPais.appendChild(tituloH4);
    img.src = paises2.imgUrl;
    divPais.appendChild(img);

    document.body.appendChild(divPais)
};


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// elemento de la serie de divs.
const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Elimina Div Lista";

botonEliminar.addEventListener("click", () => {
    const divEliminar = document.querySelectorAll("div.listaPaises");
    const ultimoElemento = divEliminar[divEliminar.length -1]

    if(ultimoElemento) {
        ultimoElemento.remove();
    };
});

document.body.appendChild(botonEliminar);


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// divs que elimine ese mismo elemento del html.
const eliminarDivInd = document.querySelectorAll('div.divClassEliminar');

eliminarDivInd.forEach(divEliminar => {
    const botonInd = document.createElement("button");
    botonInd.textContent = "Eliminar este div";

    botonInd.addEventListener ("click", () => {
        divEliminar.remove();    
    });

    divEliminar.appendChild(botonInd);
});




















