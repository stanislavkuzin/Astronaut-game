'use strict';

const perFrame = (event) => {
  frameId = requestAnimationFrame(() => {
    perFrame(event);
  });
  switch(event.keyCode) {
    case 65: {
      arrPlayer[0].runLeft();
      break;
    }
    case 68: {
      arrPlayer[0].runRight();
      break;
    }
  }
}

function down(event) {
  if (frameId) { return; }
  frameId = requestAnimationFrame(() => {
    perFrame(event);
  })
}

document.addEventListener('keydown', down);

function up() {
  cancelAnimationFrame(frameId);
  frameId = null;
}

document.addEventListener('keyup', up);

