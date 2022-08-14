'use strict';
// menu
let menuBtn = document.querySelector('.menu-wrapper');
let menu = document.querySelector('.nav_part');
let body = document.querySelector('body');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('animate');
	menu.classList.toggle('opened');
	body.classList.toggle('overflow');
});

// $(document).ready(function () {

// });