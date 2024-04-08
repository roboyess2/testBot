"use strict";


const minerBtn = document.getElementById("miner");
const minerGame = document.querySelector('.miner');
const minerCoin = document.getElementById('minerBtn');

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

const handleClick = () => {
    if (labirinthGame.classList.contains('game-block') || paintGame.classList.contains('game-block')) {
        labirinthGame.classList.remove('game-block');
        paintGame.classList.remove('game-block');
    }
    minerGame.classList.add('game-block');
};

if (isIOS) {
    minerBtn.addEventListener('touchstart', handleClick);
} else {
    minerBtn.addEventListener('click', handleClick);
}

minerCoin.addEventListener('click', () => {
    scoreCounter.dataset.score++;
    scoreCounter.textContent = scoreCounter.dataset.score;
});

document.addEventListener('DOMContentLoaded', () => {
    minerGame.classList.add('game-block')
});

