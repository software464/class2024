const canvas = document.getElementById("theCanvas");
const bouncer = document.getElementById("bounce");
const colorInput = document.getElementById("color");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let placerX=50;



bouncer.addEventListener('click',()=>{
    const b=new ball(placerX+=75,50,colorInput.value);
    balls.push(b);

});
const balls = [];
class ball {
    constructor(x, y, color) {
        this.color = color;
        this.x = x;
        this.y = y;

    }

    dx = 1;
    dy = 1;
    radius = 50;
    startingAngle = 0;
    endingAngle = Math.PI * 2;

    bounce() {
        console.log("ball bouncing");
        context.fillStyle = this.color;
        context.arc(this.x, this.y, this.radius, this.startingAngle, this.endingAngle);

        context.fill();
        this.x += this.dx;
        this.y += this.dy;
        if (this.x > window.innerWidth - this.radius || this.x < this.radius) {
            this.dx = -this.dx;
        }
        if (this.y > window.innerHeight - this.radius || this.y < this.radius) {
            this.dy = -this.dy;
        }

    }

}


const b1 = new ball(50, 50, "red");
balls.push(b1);





setInterval(() => {//

    context.clearRect(0, 0, canvas.width, canvas.height);


    balls.forEach(ball => {
        context.beginPath();
        ball.bounce();



    });
    context.fill();

}, 1);







