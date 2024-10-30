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
