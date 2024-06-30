let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
});


let header = document.getElementById('header')
let navbar = document.getElementsByClassName('test')
let title = document.getElementById('titlenav')

        
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.style.background = '#5EE03D';
        title.style.color='#30362F';
        for (let i = 0; i < navbar.length; i++) {
            navbar[i].style.color = '#30362F';
        }
    } else {
        header.style.background = 'transparent'
        title.style.color='#fff';
        for (let i = 0; i < navbar.length; i++) {
            navbar[i].style.color = '#fff';
        }
    }
})