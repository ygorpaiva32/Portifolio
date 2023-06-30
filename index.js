let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




let header = document.getElementById('header')

addEventListener('scroll', ()=> {
  if(scrollY >= 295){
    header.style.background = "#191919"
  }else{
    header.style.background = "transparent"
  }
})

function menuShow(){
  let mobile = document.querySelector(".mobile-menu")
  if(mobile.classList.contains('open')){
    mobile.classList.remove('open')
    document.querySelector('.icon').src = "./svg/menu_white_36dp.svg"
  }else{
    mobile.classList.add('open')
    document.querySelector('.icon').src = "./svg/close_white_36dp.svg"
  }
}

