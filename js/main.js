// CAROSELLO IMMAGINI

const container = document.getElementById("container_carosel")
// Creazione arrey
const imgArrey = ["img/01.webp","img/02.webp","img/03.webp","img/04.webp","img/05.webp"]
console.log(imgArrey)
// Estrapolazione signole immagini tramite ciclo
for (i = 0; i < imgArrey.length; i++){
    itemImg = imgArrey[i]
    let newDiv = document.createElement("div")
    newDiv.innerHTML += `<img src="${itemImg}" alt="img${i}">`
    newDiv.className = "box_carosel"
    container.append(newDiv)

}

// 