'use strict';

const labirinthBtn = document.getElementById("labirinth");
const labirinthGame = document.querySelector(".labirinth");

labirinthBtn.addEventListener("click", () => {
    labirinthGame.classList.add("game-block")
})

let secretNumber;
let maxNumber = 2;
let attempts = 1;
let level = 1;
let maxNumberEl = document.getElementById("maxNumber");
let startBonus = 10;
maxNumberEl.dataset.value = maxNumber;
maxNumberEl.innerText = maxNumberEl.dataset.value
console.log(maxNumberEl.dataset.value);

let messageEl = document.getElementById("message");

function generateSecretNumber() {
    secretNumber = Math.floor(Math.random() * maxNumber) + 1;
    console.log(secretNumber)
}

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", function () {
    let guess = parseInt(document.getElementById("labirinthGuess").value);
    if (guess === secretNumber) {
        messageEl.innerText = `Поздравляем! Вы угадали число ${secretNumber}`;
        if (level < 5) {
            scoreCounter.dataset.score = Number(scoreCounter.dataset.score) + startBonus * level;
            scoreCounter.textContent = scoreCounter.dataset.score;
            level++;
            attempts += 2;
            maxNumber += 10;
            messageEl.innerText += `\nПереходите на уровень ${level}`;
            maxNumberEl.dataset.value = maxNumber;
            maxNumberEl.innerText = maxNumberEl.dataset.value
            document.getElementById("labirinthGuess").value = "";
            generateSecretNumber();
        } else {
            scoreCounter.dataset.score = Number(scoreCounter.dataset.score) + startBonus * level;
            scoreCounter.textContent = scoreCounter.dataset.score;
            messageEl.innerText += "\nВы прошли все уровни!";
        }
    } else {
        attempts--;
        if (attempts === 0) {
            messageEl.innerText = "Вы использовали все попытки, попробуйте снова через 10 секунд";
            document.getElementById("labirinthGuess").disabled = true;
            setTimeout(resetGame, 10000); // 10 секунд в миллисекундах
        } else {
            messageEl.innerText = `Неверно! У вас осталось ${attempts} попыток`;
        }
    }
});

function resetGame() {
    document.getElementById("labirinth__game-guessInput").disabled = false;
    messageEl.innerText = "";
    attempts = 3;
    maxNumber = 2;
    level = 1;
    maxNumberEl.dataset.value = 2;
    maxNumberEl.innerText = maxNumberEl.dataset.value;
    generateSecretNumber();
}

generateSecretNumber();