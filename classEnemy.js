'use strict';

let arrImgEnemy = ['./img/enemy1.png','./img/enemy2.png','./img/enemy3.png','./img/enemy4.png','./img/enemy5.png','./img/enemy6.png','./img/enemy7.png','./img/enemy8.png','./img/enemy9.png','./img/enemy10.png','./img/enemy11.png','./img/enemy12.png','./img/enemy13.png','./img/enemy14.png','./img/enemy15.png','./img/enemy16.png','./img/enemy17.png','./img/enemy18.png']

class Enemy {
    constructor(img) {
        this.position = {
            x: Math.floor(Math.random() * 750),
            y: -50
        }

        const image = new Image();
        image.src = arrImgEnemy[Math.floor(Math.random() * 18)];

        this.image = image;
        this.width = 60;
        this.height = 60;

        arrEnemy.push(this);
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    clear() {
        ctx.clearRect(this.position.x, this.position.y - stepEnemy, this.width, this.height);
    }

    update() {
        ctx.clearRect(this.position.x, this.position.y - stepEnemy, this.width, this.height);
        this.draw();
        this.position.y += stepEnemy;
    }
}

