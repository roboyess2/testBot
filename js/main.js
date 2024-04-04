'use strict';

const menuBtn = document.getElementById('menuBtn');
const headerNav = document.querySelector('.header__nav');

menuBtn.addEventListener('click', () => {
    headerNav.classList.toggle('active');
})