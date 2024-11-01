const {
  active,
  none,
  show
} = {
  active: 'active',
  none: 'd-none',
  show: 'show'
}

const svgSaleHeader = document.querySelector('.svg-sale-header');

setTimeout(() => {
  svgSaleHeader.classList.add('start-anim')
}, 3000)


const swiper = new Swiper('.extreme-img', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // breakpoints: {
  //   992: {
  //     slidesPerView: 4,
  //     spaceBetween: 30,
  //   },
  //   0: {
  //     slidesPerView: 1, // 1 սլայդ մոբայլում
  //     spaceBetween: 30, // Կամ ցանկացած ցանկալի տարածություն
  //   },
  // },
});