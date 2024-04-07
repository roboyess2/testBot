'use strict';

const menuBtn = document.getElementById('menuBtn');
const headerNav = document.querySelector('.header__nav');
const overlayEl = document.querySelector('.overlay');


menuBtn.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    overlayEl.classList.toggle('block');
})

overlayEl.addEventListener('click', () => {
    if (headerNav.classList.contains('active') && overlayEl.classList.contains('block')) {
        overlayEl.classList.remove('block');
        headerNav.classList.remove('active');
    }
})

function save() {
    localStorage.setItem("coins", coins);
    localStorage.setItem("clickcoin", clickcoin);
}
if (localStorage.getItem("coins") == null) {
    var coins = 0;
} else {
    var coins = parseInt(localStorage.getItem("coins"));
}
if (localStorage.getItem("clickcoin") == null) {
    var clickcoin = 1;
} else {
    var clickcoin = parseInt(localStorage.getItem("clickcoin"));
}

// Функционал для кнопки майнера(чтобы у Серёги открылся)

const deviceAgent = navigator.userAgent.toLowerCase();
const agentID = deviceAgent.match(/iphone|ipad|ipod/);
if (agentID) {
    console.log(true)
    menuBtn.addEventListener('touchstart', () => {
        headerNav.classList.toggle('active');
        overlayEl.classList.toggle('block');
    })
};
console.log(deviceAgent)
