'use strict';
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("main__games-labirinth-btn").addEventListener("click", function () {
        window.location.href = "html/labirinth.html";
    });
});
let secretNumber;
let maxNumber = 10;
let attempts = 1;
let level = 1;

function generateSecretNumber() {
    secretNumber = Math.floor(Math.random() * maxNumber) + 1;
}

document.getElementById("checkButton").addEventListener("click", function() {
    let guess = parseInt(document.getElementById("labirinth__game-guessInput").value);
    if (guess === secretNumber) {
        document.getElementById("message").innerText = `Поздравляем! Вы угадали число ${secretNumber}`;
        if (level < 5) {
            level++;
            attempts += 2;
            maxNumber *= 10;
            document.getElementById("message").innerText += `\nПереходите на уровень ${level}`;
            document.getElementById("maxNumber").innerText = maxNumber;
            document.getElementById("labirinth__game-guessInput").value = "";
            generateSecretNumber();
        } else {
            document.getElementById("message").innerText += "\nВы прошли все уровни!";
        }
    } else {
        attempts--;
        if (attempts === 0) {
            document.getElementById("message").innerText = "Вы использовали все попытки, попробуйте снова через 5 минут";
            document.getElementById("labirinth__game-guessInput").disabled = true;
            setTimeout(resetGame, 300000); // 5 минут в миллисекундах
        } else {
            document.getElementById("message").innerText = `Неверно! У вас осталось ${attempts} попыток`;
        }
    }
});

function resetGame() {
    document.getElementById("labirinth__game-guessInput").disabled = false;
    document.getElementById("message").innerText = "";
    attempts = 1;
    maxNumber = 10;
    level = 1;
    document.getElementById("maxNumber").innerText = maxNumber;
    generateSecretNumber();
}

generateSecretNumber();