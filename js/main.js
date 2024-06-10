// CAROSELLO IMMAGINI

const container = document.getElementById("container_carosel");
// Creazione arrey
const imgArrey = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]
console.log(imgArrey);


// Estrapolazione signole immagini tramite ciclo
for (i = 0; i < imgArrey.length; i++){
    itemImg = imgArrey[i];
    // Creazione div contenitore diretto immagini
    let newDiv = document.createElement("div");
    // Stampa di immagine a ogni giro
    newDiv.innerHTML += `<img src="${itemImg}" alt="img${i}">`;
    newDiv.className = "box_carosel";
    container.append(newDiv);
}

// Selezione di tutte le img all'interno del carosello
const itemsArrey = document.getElementsByClassName("box_carosel");

// Prima immagine visibile
let activeItem = 0;
itemsArrey[activeItem].classList.add("active");

// bottone click 
let btnCarosel = document.getElementById("my_btn_next");
btnCarosel.addEventListener("click",
    () => {
        if (activeItem < imgArrey.length -1){
            itemsArrey[activeItem].classList.remove("active")
            activeItem++;
            itemsArrey[activeItem].classList.add("active")
        } else {
            // Carosello infinito
            itemsArrey[activeItem].classList.remove("active")
            activeItem = 0
            itemsArrey[activeItem].classList.add("active")
        }
    }
)
