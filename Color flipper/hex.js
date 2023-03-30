const hexValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const clickMe = document.querySelector(".btn");
const span = document.querySelector(".span");

clickMe.addEventListener("click", changeColor)

function changeColor(){
    let hex = "#";
    for(let i=0; i<6; i++) {
        const randomNumber = getRandomNumber();
        hex += hexValue[randomNumber];
    }
    document.body.style.backgroundColor = hex;
    span.textContent= hex;
}

function getRandomNumber(){
    return Math.floor(Math.random() * hexValue.length)
}

