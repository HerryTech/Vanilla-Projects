const simple =[
    "red", "rgb(192, 192, 192)", "#800000", "olive", "hsl(60°, 100%, 50%)",
    "rgb(0, 255, 0)", "#008000", "aqua", "rgb(0, 128, 128)", "hsl(240, 100%, 50%)", "#FF00FF"
];

const clickMe = document.querySelector(".btn");
const span = document.querySelector(".span");

clickMe.addEventListener("click", changeColor)

function changeColor(){
        let randomNumber = getRandomNumber()
        document.body.style.backgroundColor = simple[randomNumber];
        span.textContent= simple[randomNumber];       
}

function getRandomNumber(){
    return Math.floor(Math.random() * simple.length)
}
