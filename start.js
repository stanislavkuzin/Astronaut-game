'use strict';

function startGame() {
    music = new Audio(arrMusic[Math.floor(Math.random() * 2)]);
    music.play();
    music.loop = true;
    music.volume = '0.2';
    box.style.display = 'flex';
    const player = new Player();
    player.draw();;
    moveShot();
    canvas.style.backgroundImage = `url(${arrArena[Math.floor(Math.random() * 9)]})`;
    scor.textContent = `Score: ${score}`;
    bombsId = setInterval(() => new Enemy(), time);
    document.addEventListener('keydown', down);
    document.addEventListener('keyup', up);
    body.addEventListener('keydown', huk);
}
