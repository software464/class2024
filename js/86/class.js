(function () {
    'use strict';
    let intervalID;
    let speed = 500;

    const SNAKE_SIZE = 64;
    const audio = document.querySelector('#audio');
    const goAudio = document.querySelector('#go');

    const theCanvas = document.querySelector('#theCanvas');
    const context = theCanvas.getContext('2d');

    function resizeCanvas() {
        theCanvas.width = window.innerWidth - (window.innerWidth % SNAKE_SIZE);
        theCanvas.height = window.innerHeight - (window.innerHeight % SNAKE_SIZE);

    }

    window.addEventListener('resize', resizeCanvas);

    resizeCanvas();
    let score = 0;
    let direction = 'ArrowRight';
    let appleX = createAppleX();
    let appleY = createAppleY();

    let snakeX = SNAKE_SIZE;
    let snakeY = 0;
    const apple = document.createElement('img');
    const snakeHead = document.createElement('img');
    snakeHead.src = 'images/snakeHead.png';
    snakeHead.id = "snake";
    function startGame() {
        intervalID = setInterval(() => {
            console.log(direction);
            context.clearRect(0, 0, theCanvas.width, theCanvas.height);
            if ((snakeX > theCanvas.width || snakeX < 0) || (snakeY > theCanvas.height || snakeY < 0)) {


                context.fillText(` Game Over :( Your score  ${score}`, 50, 20);
                //goAudio.play();

                clearIinterval(intervalID);



            }

            context.fillText(`your score  ${score}`, 50, 20);
            ////end game

            switch (direction) {
                case 'ArrowRight':
                    snakeX += SNAKE_SIZE;
                    break;
                case 'ArrowLeft':
                    snakeX -= SNAKE_SIZE;
                    break;
                case 'ArrowUp':
                    snakeY -= SNAKE_SIZE;
                    break;
                case 'ArrowDown':
                    snakeY += SNAKE_SIZE;
                    break;
            }

            context.drawImage(snakeHead, snakeX, snakeY);

            ///manage apple
            appleManager(appleX, appleY);

            console.log(appleX, snakeX);
        }, speed);

    }
    snakeHead.onload = () => {
        apple.src = 'images/apple.jpeg';
        startGame();



    };

    function appleManager() {
        if (snakeX === appleX && snakeY === appleY) {
            console.log("making sound");
            audio.play();
            score++;
            appleX = createAppleX();
            appleY = createAppleY();
            speed -= 25;
            clearInterval(intervalID);
            startGame(speed);
            // context.drawImage(apple, appleX, appleY);


        } else {
            context.drawImage(apple, appleX, appleY);





        }


    }

    function createAppleX() {
        let x;
        do {
            x = SNAKE_SIZE * Math.floor(Math.random() * 19);

        } while (x > window.innerWidth - (window.innerWidth % SNAKE_SIZE));
        return x;
    }
    function createAppleY() {
        let y;
        do {
            y = SNAKE_SIZE * Math.floor(Math.random() * 19);

        } while (y > window.innerHeight - (window.innerHeight % SNAKE_SIZE)
        );
        return y;
    }
    document.addEventListener('keydown', e => {
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'ArrowDown':
                direction = e.key;
        }
    });
}());