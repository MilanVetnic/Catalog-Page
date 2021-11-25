// Header 
let menuTog = document.querySelector('.menuToggle');
let nav = document.querySelector('.innerLeftMenu');
let navLeft = document.querySelector('.nav-left');
let navRight = document.querySelector('.navRight');
let navLinks = Array.from(document.querySelectorAll('.nav-links'));
let contact = document.querySelector('.contact');
let logo = document.querySelector('.logo');

menuTog.addEventListener('click', () => {
    menuTog.classList.toggle('active');
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');
    logo.classList.toggle('active');
    nav.classList.toggle('active');

    if (!menuTog.classList.contains.active) {
        navRight.addEventListener('click', () => {
            menuTog.classList.remove('active');
            nav.classList.remove('active');
            navRight.classList.remove('active');
            navLeft.classList.remove('active');
            logo.classList.remove('active');
        })
    }

    if (menuTog.classList.contains('active')) {
        setTimeout(() => {
            navRight.classList.add('active');
        }, 100)

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
            setTimeout(() => {
                navLinks[i].classList.add('active')
            }, i * 600)
        }
        setTimeout(() => {
            contact.classList.add('active');
        }, 700);
    }
});