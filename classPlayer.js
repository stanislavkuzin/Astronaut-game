'use strict';

let arrPlayer = [];

class Player {
    constructor() {
        this.position = {
            x: 360,
            y: 400
        }

        const image = new Image();
        image.src = './img/player.png';

        this.image = image;
        this.width = 80;
        this.height = 100;
      
      arrPlayer.push(this);
    }

  draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
  }
  
  clear() {
    ctx.clearRect(0, 0, 800, 500);
  }
  
  runRight() {
    if (this.position.x > canvas.width - this.width) {
      this.draw();
      this.position.x = 0;
      this.position.y = canvas.height - this.height;
      ctx.clearRect(canvas.width - this.width, this.position.y, this.width, this.height);
    } else {
      ctx.clearRect(this.position.x - stepPlayer, this.position.y, this.width, this.height);
      this.draw();
      this.position.x += stepPlayer;
    }
  }
  
  runLeft() {
    if (this.position.x < 0) {
      this.draw();
      this.position.x = canvas.width - this.width;
      this.position.y = canvas.height - this.height;
      ctx.clearRect(0, canvas.height - this.height, this.width, this.height);
    } else {
      ctx.clearRect(this.position.x + stepPlayer, this.position.y, this.width, this.height);
      this.draw();
      this.position.x -= stepPlayer;
    }
  }
}