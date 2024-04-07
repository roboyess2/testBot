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

// Функционал для кнопки майнера(чтобы у Серёги открылся)


