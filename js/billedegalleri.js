const billeder = [{img:"img/aqua/aqua_1.webp", alt:"teltet Aqua set udefra"}, {img:"img/aqua/aqua_2.webp", alt:"indersiden af teltet Aqua"}, {img:"img/aqua/aqua_3.webp", alt:"træerne udenfor teltet Aqua"}];

let prikviser = document.getElementById("carousel_prikker");
let billedeviser = document.getElementById("carousel_billede");

for (let i = 0; i < billeder.length; i++) {
     prikviser.innerHTML += "<div class='carousel_prik'></div>";
    billedeviser.innerHTML += "<img class='carousel_billede fade' src="+billeder[i].img+" alt="+billeder[i].alt+">";
}

const slides = document.getElementsByClassName("carousel_billede");
const prikker = document.getElementsByClassName("carousel_prik");

//Start: vist første billede og gør første prik aktiv

let billedenummer = 0;

for(let i= 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[0].style.display = "block";
prikker[0]. classList.toggle("active");

// Pile 
function gaFrem() {
    slides[billedenummer].style.display = "none";
    prikker[billedenummer].classList.toggle("active");
    if (billedenummer < slides.length -1) {
        billedenummer++;   //gå et frem 
    } else {
        billedenummer = 0; // hvis vi er ved sidste - start forfra
    }
    skiftbillede(billedenummer);
}

function gaTilbage() {
    slides[billedenummer].style.display = "none";
    prikker[billedenummer].classList.toggle("active");
    if (billedenummer > 0) {
        billedenummer--;     //gå et tilbage 
    } else {
        billedenummer = slides.length - 1; //hvis vi er ved første - gå til sidste 
}
skiftbillede(billedenummer);
}

function skiftbillede(x) {
    slides[x].style.display = "block";
    prikker[x].classList.toggle("active");

}





