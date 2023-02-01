'use strict';

let fireId = null;
let arrShot = [];
let arrPositionExplosion = [];

class Shot {
    constructor() {
        this.position = {
            x: arrPlayer[0].position.x + arrPlayer[0].width / 3,
            y: canvas.height - arrPlayer[0].height * 1.7    
        }
        
        this.step = 5;

        const image = new Image();
        image.src = './img/hit.png';

        this.image = image;
        this.width = 15;
        this.height = 30;
        
        arrShot.push(this);
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    clear() {
        ctx.clearRect(this.position.x, this.position.y + this.step, this.width, this.height);
    }

    update() {
        ctx.clearRect(this.position.x, this.position.y + this.step, this.width, this.height);
        this.draw();
        this.position.y -= this.step;
    }
}

