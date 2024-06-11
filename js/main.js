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


// Ciclo per carosello dx
const boxDx = document.getElementById("right_box")

for (i = 0; i < imgArrey.length; i++){
    itemImg = imgArrey[i];
    // Creazione div contenitore diretto immagini
    let newDiv = document.createElement("div");
    // Stampa di immagine a ogni giro
    newDiv.innerHTML += `<img src="${itemImg}" alt="img${i}">`;
    newDiv.className = "box_img_dx";
    boxDx.append(newDiv);
}

// Selezione di tutte le img all'interno del carosello
const itemsArrey = document.getElementsByClassName("box_carosel");
// Selezione di tutte le img all'interno del box dx
const itemsBoxDx = document.getElementsByClassName("box_img_dx")
console.log(itemsBoxDx[2])

// Prima immagine visibile
let activeItem = 0;
itemsArrey[activeItem].classList.add("active");
// Prima immagine oscuprata
itemsBoxDx[activeItem].classList.add("opacity")

// bottone click 
let btnCaroselNext = document.getElementById("my_btn_next");
btnCaroselNext.addEventListener("click",
    () => {
        if (activeItem < imgArrey.length -1){
            itemsBoxDx[activeItem].classList.remove("opacity")
            itemsArrey[activeItem].classList.remove("active")
            activeItem++;
            itemsArrey[activeItem].classList.add("active")
            itemsBoxDx[activeItem].classList.add("opacity")
        } else {
            // Carosello infinito
            itemsBoxDx[activeItem].classList.remove("opacity")
            itemsArrey[activeItem].classList.remove("active")
            activeItem = 0
            itemsArrey[activeItem].classList.add("active")
            itemsBoxDx[activeItem].classList.add("opacity")
        }
    }
)

// bottone click indietro
let btnCaroselPrev = document.getElementById("my_btn_prev");
btnCaroselPrev.addEventListener("click",
    () => {
        if (activeItem === 0){
            itemsBoxDx[activeItem].classList.remove("opacity")
            itemsArrey[activeItem].classList.remove("active")
            activeItem = imgArrey.length -1
            itemsArrey[activeItem].classList.add("active")
            itemsBoxDx[activeItem].classList.add("opacity")
        } else { 
            // Carosello infinito
            itemsBoxDx[activeItem].classList.remove("opacity")
            itemsArrey[activeItem].classList.remove("active")
            activeItem--;
            itemsArrey[activeItem].classList.add("active")
            itemsBoxDx[activeItem].classList.add("opacity")
        }
    }
)







