const paintGame = document.querySelector('.paint');

const paintBtn = document.getElementById('paint');

paintBtn.addEventListener('click', () => {
    if (minerGame.classList.contains('game-block') || labirinthGame.classList.contains('game-block')) {
        minerGame.classList.remove('game-block');
        labirinthGame.classList.remove('game-block');
    }
    paintGame.classList.add("game-block")
})