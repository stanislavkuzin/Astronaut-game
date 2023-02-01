'use strict';

let arrArena = ['./img/arena1.jpg', './img/arena2.jpg', './img/arena3.jpg', './img/arena4.jpg', './img/arena5.jpg', './img/arena6.jpg', './img/arena7.jpg', './img/arena8.jpg', './img/arena9.jpg'];
let arrBg = ['./img/bg1.jpg', './img/bg2.jpg', './img/bg3.jpg', './img/bg4.jpg'];
let arrMusic = ['./audio/neon-gaming.mp3', './audio/stranger-things.mp3'];

let score = 0;
const body = document.body;
let music;

const game = new Game();
const ctx = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 800;
box.style.display = 'none';

const stepPlayer = 5;
const stepEnemy = 3;
const stepFire = 1;
let frameId = null;
let enemyId = null;
let arrEnemy = [];

const player = new Player();
setTimeout(() => player.draw(), 50);

animEnemy();

function resultScore(step) {
    score += step;
    if (localStorage.getItem('bestResult') === null) {
    bestscore.textContent = 'Best Score: 0';
    } else {
    bestscore.textContent = `Best Score: ${localStorage.getItem('bestResult')}`;
    }
    scor.textContent = `Score: ${score}`;
    if (score > localStorage.getItem('bestResult')) {
        localStorage.setItem('bestResult', `${score}`);
    }
    if (
        (score >= 100 && score <= 105) ||
        (score >= 200 && score <= 205) ||
        (score >= 300 && score <= 305) ||
        (score >= 400 && score <= 405) ||
        (score >= 500 && score <= 505) ||
        (score >= 600 && score <= 605) ||
        (score >= 700 && score <= 705) ||
        (score >= 800 && score <= 805) ||
        (score >= 900 && score <= 905)) {
        audio.points100.play();
    }
}

function huk(event) {
  if (event.keyCode === 32) {
      audio.laser1.play();
      new Shot();
  }
}

body.addEventListener('keydown', huk);

function pow(x,y) {
    ctx.drawImage(booh, x, y);
    setTimeout(() => ctx.clearRect(x, y, 50, 50), 100);
}

if (localStorage.getItem('bestResult') === null) {
    bestscore.textContent = 'Best Score: 0';
}

function backmenu() {
    audio.buttonclick.play();
    box.style.display = 'none';
    buttonback.style.display = 'none';
    buttongame.style.display = 'none';
    new Menu();
    button.addEventListener('click', start);
    clearBut.addEventListener('click', clearScore);
}

buttonback.addEventListener('click', backmenu);

function newgame() {
    audio.buttonclick.play();
    buttonback.style.display = 'none';
    buttongame.style.display = 'none';
    startGame();
}

buttongame.addEventListener('click', newgame);





