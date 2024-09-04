// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const nuevoDiv = document.createElement("div");

console.log(nuevoDiv);
document.body.appendChild(nuevoDiv)



// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const nuevoDiv2 = document.createElement("div");
const parf = document.createElement("p");

nuevoDiv2.appendChild(parf);
document.body.appendChild(nuevoDiv2)
console.log(nuevoDiv2)



// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
// 	loop con javascript.
const nuevoDiv3 = document.createElement("div");
const parrafosNumber = 6;

for(i = 0; i < parrafosNumber; i++){
    const parf6 = document.createElement("p");
    nuevoDiv3.appendChild(parf6);
};

document.body.appendChild(nuevoDiv3)
console.log(nuevoDiv3);

// Otra forma de hacerlo
const nuevoDiv33 = document.createElement("div");

for(i = 0; i < 6; i++) {
    const parf66 = document.createElement("p");
    nuevoDiv33.appendChild(parf66);
};

document.body.appendChild(nuevoDiv3)
console.log(nuevoDiv33);



// 2.4 Inserta dinamicamente con javascript en un html una p con el 
// 	texto 'Soy dinámico!'.
const parfDinamico = document.createElement("p");

parfDinamico.innerText = "Soy dinamico!";
document.body.appendChild(parfDinamico)
console.log(parfDinamico);




// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector(".fn-insert-here");

h2.innerText = "Wubba Lubba dub dud";




// 2.6 Basandote en el siguiente array crea una lista ul > li con 
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");

for(const app of apps) {
    const li = document.createElement("li");
    li.textContent = app;
    ul.appendChild(li);
    document.body.appendChild(ul);
};




// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const borrar = document.querySelectorAll(".fn-remove-me");

borrar.forEach(borrarNodos => {
    borrarNodos.parentNode.removeChild(borrarNodos);
});




// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const pDivs = document.createElement("p");
const divPdivs = document.querySelector("div");

pDivs.textContent = "Voy en medio!";
divPdivs.appendChild(pDivs);


// Otra forma de hacerlo creando clases en los DIV
const pDivs2 = document.createElement("p");
pDivs2.textContent = "Voy en medio 2!";

const primerDiv = document.querySelector(".primerDiv");
const segundoDiv = document.querySelector(".segundoDiv");

if(primerDiv && segundoDiv) {
    primerDiv.parentNode.insertBefore(pDivs2, segundoDiv);
};




// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
// 	.fn-insert-here

const divDentro = document.querySelectorAll(".fn-insert-here");

divDentro.forEach(elementoDivP => {
    if(elementoDivP.tagName === "DIV"){
        const pDivDentro = document.createElement("p");
        pDivDentro.textContent = "Voy dentro";
        elementoDivP.appendChild(pDivDentro);
    };
});