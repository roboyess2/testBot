"use strict";
const minerBtn = document.getElementById("miner");
const minerGame = document.querySelector('.miner');
const minerCoin = document.getElementById('minerBtn');

minerCoin.addEventListener('click', (event) => {
    
    if (event.target === minerCoin) {
        scoreCounter.dataset.score++;
        scoreCounter.textContent = scoreCounter.dataset.score;
    }
});


if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    minerBtn.addEventListener('touchstart', (event) => {
       
        if (event.target === minerBtn) {
            if (labirinthGame.classList.contains('game-block') || paintGame.classList.contains('game-block')) {
                labirinthGame.classList.remove('game-block');
                paintGame.classList.remove('game-block');
            }
            minerGame.classList.add('game-block');
        }
    });
} else {
    minerBtn.addEventListener('click', () => {
        if (labirinthGame.classList.contains('game-block') || paintGame.classList.contains('game-block')) {
            labirinthGame.classList.remove('game-block');
            paintGame.classList.remove('game-block');
        }
        minerGame.classList.add('game-block');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    minerGame.classList.add('game-block')
});
