const btnMenu =  document.querySelector('#btn-menu')
const card =  document.querySelector('.card')

btnMenu.addEventListener('click', () => {
  card.classList.toggle('active')
})