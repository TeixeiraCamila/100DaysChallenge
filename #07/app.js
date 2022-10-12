const btnMenu =  document.querySelector('#btn-menu')
const card =  document.querySelector('.card')

btnMenu.addEventListener('click', () => {
  card.classList.toggle('active')
})

const btnSearch =  document.querySelector('#btn-search')
const searchBox =  document.querySelector('.search-box')

btnSearch.addEventListener('click', () => {
  searchBox.classList.toggle('active')
})
