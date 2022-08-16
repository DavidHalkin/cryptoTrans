'use strict';
// menu

let menuBtn = document.querySelector('.menu-wrapper');
let menu = document.querySelector('.nav_part');
let body = document.querySelector('body');

if ($(".menu-wrapper").length) {
	menuBtn.addEventListener('click', function () {
		menuBtn.classList.toggle('animate');
		menu.classList.toggle('opened');
		body.classList.toggle('overflow');
	});
}

$(function () {
	jcf.replaceAll();
});
// $(document).ready(function () {

// });