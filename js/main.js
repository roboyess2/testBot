'use strict';

const menuBtn = document.getElementById('menuBtn');
const headerNav = document.querySelector('.header__nav');
const overlayEl = document.querySelector('.overlay');

menuBtn.addEventListener('click', () => {
    headerNav.classList.toggle('active');
    overlayEl.classList.toggle('block')
})