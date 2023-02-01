'use strict';

class Menu {
    constructor() {
        this.menu = document.createElement('section');
        this.menu.setAttribute('id', 'menu');
        body.append(this.menu);
        this.button = document.createElement('div');
        this.button.setAttribute('id', 'button');
        this.button.classList.add('but');
        this.button.textContent = 'Start';
        this.menu.append(this.button);
        this.info = document.createElement('div');
        this.info.setAttribute('id', 'info');
        this.info.classList.add('startinfo');
        this.info.textContent = 'This is an astronaut game. You have to fight off various space objects. For one killed object you get 5 points. If the object reaches your edge of the field, you lose 2 points. If the object hits you then the game is over.';
        this.menu.append(this.info);
        this.control = document.createElement('div');
        this.control.setAttribute('id', 'control');
        this.control.classList.add('startinfo');
        this.control.textContent = 'A - run to the left, D - run to the right, space - shooting.';
        this.menu.append(this.control);
        this.skills = document.createElement('div');
        this.skills.setAttribute('id', 'skills');
        this.skills.classList.add('startinfo');
        this.skills.textContent = `Best Score: ${localStorage.getItem('bestResult')}`;
        this.menu.append(this.skills);
        this.clear = document.createElement('div');
        this.clear.setAttribute('id', 'clearBut');
        this.clear.classList.add('but');
        this.clear.textContent = 'Clear score';
        this.menu.append(this.clear);
        this.astr = document.createElement('img');
        this.astr.setAttribute('id', 'astr');
        this.astr.setAttribute('src', './img/player.png');
        this.menu.append(this.astr);
    }
}

new Menu();

function start() {
    audio.buttonclick.play();
    menu.remove();
    box.style.backgroundImage = `url(${arrBg[Math.floor(Math.random() * 4)]})`;
    startGame();
}

button.addEventListener('click', start);

function clearScore() {
    audio.buttonclick.play();
    localStorage.clear();
    skills.textContent = 'Best Score: 0';
}

clearBut.addEventListener('click', clearScore);

if (localStorage.length === 0) {
    skills.textContent = 'Best Score: 0';
} 