'use strict';

class Game {
    constructor() {
        this.box = document.createElement('section');
        this.box.setAttribute('id', 'box');
        body.append(this.box);
        this.game = document.createElement('canvas');
        this.game.setAttribute('id', 'canvas');
        this.box.append(this.game);
        this.scor = document.createElement('span');
        this.scor.setAttribute('id', 'scor');
        this.scor.classList.add('startinfo');
        this.scor.textContent = 'Score: 0';
        this.box.append(this.scor);
        this.buttonBack = document.createElement('div');
        this.buttonBack.setAttribute('id', 'buttonback');
        this.buttonBack.classList.add('but');
        this.buttonBack.textContent = 'Back';
        this.box.append(this.buttonBack);
        this.buttonGame = document.createElement('div');
        this.buttonGame.setAttribute('id', 'buttongame');
        this.buttonGame.classList.add('but');
        this.buttonGame.textContent = 'Game';
        this.box.append(this.buttonGame);
        this.best = document.createElement('span');
        this.best.setAttribute('id', 'bestscore');
        this.best.classList.add('startinfo');
        this.best.textContent = `Best Score: ${localStorage.getItem('bestResult')}`;
        this.box.append(this.best);
        this.booh = document.createElement('img');
        this.booh.setAttribute('id', 'booh');
        this.booh.setAttribute('src', './img/booh.png');
        body.append(this.booh);
    }
}