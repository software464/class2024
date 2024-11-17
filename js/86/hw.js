const canvas = document.getElementById("theCanvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
const snakeHead = document.createElement('img');
snakeHead.src = "images/snakeHead.png";
snakeHead.onload=drawImg;
let SNAKE_SIZE=64;
let x=0;
let y=0;
function drawImg() {
    context.drawImage(snakeHead, 0, 0);

}

///setting x and y off "direction" in the keys event listener   


///switch statement 




