// Nav bar functionality 
const hamburger = document.querySelector('.hamburger');
const hamburger_icon = hamburger.querySelector('span');
const mobile_menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
	hamburger_icon.innerText = hamburger_icon.innerText === 'menu' 
		? 'close'
		: 'menu';
	
	mobile_menu.classList.toggle('is-open');
});

//Splash page intro
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span,idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx+1) * 400);
        })
    });

    setTimeout( () => {
        logoSpan.forEach((span,idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 50);
        })
    }, 2000);

    setTimeout(() => {
        intro.style.top = '-100vh';
    }, 2300);
});

//detail page product image carasel
let productImg = document.getElementById("ProductImg");
let smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function() {
    productImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
    productImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
    productImg.src = smallImg[2].src;  
}
smallImg[3].onclick = function() {
    productImg.src = smallImg[3].src;    
}
