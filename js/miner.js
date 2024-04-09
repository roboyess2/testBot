"use strict";
const minerBtn = document.getElementById("miner");
const minerGame = document.querySelector('.miner');
const minerCoin = document.getElementById('minerBtn');

minerCoin.addEventListener('click', (event) => {

    if (event.target === minerCoin) {
        scoreCounter.dataset.score++;
        scoreCounter.textContent = scoreCounter.dataset.score;
        ratingProgress.value = scoreCounter.dataset.score;
        checkLeague(scoreCounter.dataset.score)
    }
});

function openMiner() {
    if (labirinthGame.classList.contains('game-block') || paintGame.classList.contains('game-block')) {
        labirinthGame.classList.remove('game-block');
        paintGame.classList.remove('game-block');
    }
    minerGame.classList.add('game-block');
    overlayEl.classList.remove('block');
    headerNav.classList.remove('active');
}

// if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
//     minerBtn.addEventListener('touchstart', (event) => {

//         if (event.target === minerBtn) {
//             if (labirinthGame.classList.contains('game-block') || paintGame.classList.contains('game-block')) {
//                 labirinthGame.classList.remove('game-block');
//                 paintGame.classList.remove('game-block');
//             }
//             minerGame.classList.add('game-block');
//         }
//     });
// } else {
//     minerBtn.addEventListener('click', () => {
//         if (labirinthGame.classList.contains('game-block') || paintGame.classList.contains('game-block')) {
//             labirinthGame.classList.remove('game-block');
//             paintGame.classList.remove('game-block');
//         }
//         minerGame.classList.add('game-block');
//     });
// }

document.addEventListener('DOMContentLoaded', () => {
    minerGame.classList.add('game-block')
});


