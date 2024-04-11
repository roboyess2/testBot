'use strict';

const labirinthBtn = document.getElementById("labirinth");
const labirinthGame = document.querySelector(".labirinth");

function openLabirinth() {
    if (minerGame.classList.contains('game-block') || paintGame.classList.contains('game-block')) {
        minerGame.classList.remove('game-block');
        paintGame.classList.remove('game-block');
    }
    labirinthGame.classList.add("game-block")
    overlayEl.classList.remove('block');
    headerNav.classList.remove('active');
}

let secretNumber;
let maxNumber = 2;
let attempts = 3;
let level = 1;
let levelEl = document.querySelector('.level');
levelEl.textContent = 'Уровень 1';
let maxNumberEl = document.getElementById("maxNumber");
let startBonus = 10;
maxNumberEl.dataset.value = maxNumber;
maxNumberEl.innerText = maxNumberEl.dataset.value

let messageEl = document.getElementById("message");
let labirinthGuess = document.getElementById("labirinthGuess");

function generateSecretNumber() {
    secretNumber = Math.floor(Math.random() * maxNumber) + level;
    console.log(secretNumber)
}

function updateInputRange() {
    labirinthGuess.min = 1;
    labirinthGuess.max = maxNumber;
}

function levelIncrease() {
    level++;
    attempts += 1;
    maxNumber += 3;
    updateInputRange();
}
let messageShown = false; // Дополнительная переменная для отслеживания отображения сообщения

checkButton.addEventListener("click", function () {
    let guess = parseInt(labirinthGuess.value);
    if (isNaN(guess) || guess < 1 || guess > maxNumber) {
        messageEl.innerText = `Пожалуйста, введите число от 1 до ${maxNumber}`;
        return;
    }
    if (guess === secretNumber) {
        messageEl.innerText = `Поздравляем! Вы угадали число ${secretNumber}`;
        if (level < 5) {
            increaseScore(startBonus, level);
            levelIncrease();
            levelEl.innerText = `Уровень ${level}`;
            maxNumberEl.dataset.value = maxNumber;
            maxNumberEl.innerText = maxNumberEl.dataset.value
            labirinthGuess.value = "";
            generateSecretNumber();
        } else {
            labirinthGuess.disabled = true;
            increaseScore(startBonus, level);
            messageEl.innerText += "\nВы прошли все уровни!";
            setTimeout(resetGame, 3000);
        }
    } else {
        attempts--;
        if (attempts === 0 && !messageShown) { // Проверка, было ли уже показано сообщение
            messageEl.innerText = "Вы использовали все попытки, попробуйте снова через 10 секунд";
            labirinthGuess.disabled = true;
            messageShown = true; // Устанавливаем флаг, что сообщение было показано
            setTimeout(function() {
                messageShown = false; // После таймера сбрасываем флаг
                resetGame(); // Вызываем функцию resetGame после истечения таймера
            }, 10000);
        } else if (attempts > 0) { // Показываем сообщение только если есть еще попытки
            messageEl.innerText = `Неверно! У вас осталось ${attempts} попыток`;
        }
    }
});
function resetGame() {
    labirinthGuess.disabled = false;
    labirinthGuess.value = "";
    messageEl.innerText = "";
    levelEl.textContent = 'Уровень 1';
    attempts = 3;
    maxNumber = 2;
    level = 1;
    maxNumberEl.dataset.value = 2;
    maxNumberEl.innerText = maxNumberEl.dataset.value;
    generateSecretNumber();
    updateInputRange();
}

function increaseScore(startBonus, level) {
    scoreCounter.dataset.score = Number(scoreCounter.dataset.score) + startBonus * level;
    scoreCounter.textContent = scoreCounter.dataset.score;
    ratingProgress.value = scoreCounter.dataset.score;
    checkLeague(scoreCounter.dataset.score)
}

generateSecretNumber();
updateInputRange();