let scoreCounter = document.getElementById('scoreCounter');

const deviceAgent = navigator.userAgent.toLowerCase();
const agentID = deviceAgent.match(/iphone|ipad|ipod/);
if (agentID) {
    minerBtn.addEventListener('touchstart', () => {
        if (labirinthGame.classList.contains('game-block') || paintGame.classList.contains('game-block')) {
            labirinthGame.classList.remove('game-block');
            paintGame.classList.remove('game-block');
        }
        minerGame.classList.add('game-block');
    });
    paintBtn.addEventListener('touchstart', () => {
        if (minerGame.classList.contains('game-block') || labirinthGame.classList.contains('game-block')) {
            minerGame.classList.remove('game-block');
            labirinthGame.classList.remove('game-block');
        }
        paintGame.classList.add("game-block")
    })
    labirinthBtn.addEventListener('touchstart', () => {
        if (minerGame.classList.contains('game-block') || paintGame.classList.contains('game-block')) {
            minerGame.classList.remove('game-block');
            paintGame.classList.remove('game-block');
        }
        labirinthGame.classList.add("game-block")
    })
};