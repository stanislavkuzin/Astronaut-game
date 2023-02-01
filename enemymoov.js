'use strict';

let bombsId;
let time = 500;

function animEnemy() {
    arrEnemy.forEach((enemy) => {
        enemy.update();
        if (enemy.position.y > 450) {
            audio.vzryv.play();
            arrEnemy[0].clear();
            arrEnemy.shift();
            pow(enemy.position.x - stepEnemy, enemy.position.y);
            resultScore(-2);

        } else if ((enemy.position.y < 450 && (enemy.position.y > 350)) &&
            (enemy.position.x > arrPlayer[0].position.x - 50 && arrPlayer[0].position.x > enemy.position.x - 50 || enemy.position.x < arrPlayer[0].position.x + 50 && arrPlayer[0].position.x < enemy.position.x + 50)) {
            music.pause();
            audio.vzryv.play();
            cancelAnimationFrame(frameId);
            frameId = null;
            cancelAnimationFrame(enemyId);
            enemyId = null;
            cancelAnimationFrame(fireId);
            fireId = null;
            document.removeEventListener('keydown', down);
            body.removeEventListener('keydown', huk);
            clearInterval(bombsId);
            score = 0;
            arrPlayer[0].clear();
            arrPlayer.length = 0;
            arrEnemy.length = 0;
            arrShot.splice(0,arrShot.length);;
            pow(enemy.position.x - stepPlayer, enemy.position.y + player.height / 2);
            setTimeout(() => audio.gameover.play(), 500);
            setTimeout(() => buttonback.style.display = 'flex', 1000);
            setTimeout(() => buttongame.style.display = 'flex', 1000);
        }
    });
    enemyId = requestAnimationFrame(animEnemy);
}

