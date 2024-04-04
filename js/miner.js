"use strict";

const scoreCounter = document.getElementById('scoreCounter');
const gameCoin = document.getElementById('minerBtn');

gameCoin.addEventListener('click', () => {
    scoreCounter.dataset.score++;
    scoreCounter.textContent = scoreCounter.dataset.score;
})