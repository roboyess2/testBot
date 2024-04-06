"use strict";
const minerBtn = document.getElementById("miner");
const minerGame = document.querySelector('.miner');
let scoreCounter = document.getElementById('scoreCounter');
const minerCoin = document.getElementById('minerBtn');

minerCoin.addEventListener('click', () => {
    scoreCounter.dataset.score++;
    scoreCounter.textContent = scoreCounter.dataset.score;
})

minerBtn.addEventListener('click', () => {
    minerGame.classList.add('game-block');
});

document.addEventListener('DOMContentLoaded', () => {
    minerGame.classList.add('game-block')
})

