"use strict";
const minerBtn = document.getElementById("miner");
const minerGame = document.querySelector('.miner');
const minerCoin = document.getElementById('minerBtn');

minerCoin.addEventListener('click', () => {
    scoreCounter.dataset.score++;
    scoreCounter.textContent = scoreCounter.dataset.score;
})

minerBtn.addEventListener('click', () => {
    if (labirinthGame.classList.contains('game-block') || paintGame.classList.contains('game-block')) {
        labirinthGame.classList.remove('game-block');
        paintGame.classList.remove('game-block');
    }
    minerGame.classList.add('game-block');
});

document.addEventListener('DOMContentLoaded', () => {
    minerGame.classList.add('game-block')
})

