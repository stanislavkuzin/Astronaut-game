'use strict';

function moveShot() {
    arrShot.forEach((shot) => {
        shot.update();
        if (shot.position.y < 0 - shot.height) {
            arrShot.shift();
        }
        for (let i = 0; i < arrEnemy.length; i += 1) {
            if ((shot.position.y < arrEnemy[i].position.y + arrEnemy[i].height) && (shot.position.x + shot.width > arrEnemy[i].position.x && arrEnemy[i].position.x + arrEnemy[i].width > shot.position.x)) {
                audio.vzryvpetardy.play();
                arrPositionExplosion.push(arrEnemy[i].position.x)
                arrPositionExplosion.push(arrEnemy[i].position.y)
                arrEnemy.splice(i, 1);
                ctx.clearRect(arrPositionExplosion[0], arrPositionExplosion[1] - stepEnemy, 60, 60);
                pow(arrPositionExplosion[0], arrPositionExplosion[1]);
                arrPositionExplosion.length = 0; 
                resultScore(5);
            }
        }
    });
    fireId = requestAnimationFrame(moveShot);
}
