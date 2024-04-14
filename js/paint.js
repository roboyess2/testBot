const paintGame = document.querySelector('.paint');
const paintBtn = document.getElementById('paint');

function openPaint() {
    if (minerGame.classList.contains('game-block') || labirinthGame.classList.contains('game-block')) {
        minerGame.classList.remove('game-block');
        labirinthGame.classList.remove('game-block');
    }
    paintGame.classList.add("game-block")
    overlayEl.classList.remove('block');
    headerNav.classList.remove('active');
}

// paintBtn.addEventListener('click', () => {
//     if (minerGame.classList.contains('game-block') || labirinthGame.classList.contains('game-block')) {
//         minerGame.classList.remove('game-block');
//         labirinthGame.classList.remove('game-block');
//     }
//     paintGame.classList.add("game-block")
// })