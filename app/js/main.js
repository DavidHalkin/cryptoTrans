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


let oCount = document.querySelector("div[countdown]");
if ($(oCount).length) {
	oCount.innerText = oCount.countValue = +oCount.getAttribute("countdown");
	oCount.countRatio = 360 / oCount.countValue;
	oCount.countColor = 100 / oCount.countValue;
	oCount.countLight = oCount.countValue / 20;
	oCount.countTimer = setInterval(fCountdown.bind(oCount), 1000);

	function fCountdown() {
		let nCount = this.countValue;
		if (nCount > 0) {
			nCount--;
			this.innerText = this.countValue = nCount;
			this.style.setProperty("--deg", 361 - nCount * this.countRatio);
			// this.style.setProperty("--col", `hsla(${nCount * this.countColor}, 100%, ${50 - nCount / this.countLight}%, 1)`);
		} else {
			clearInterval(this.countTimer);
			// console.log("Complete " + this.getAttribute('countdown'));
		}
	}
}