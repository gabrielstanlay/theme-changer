const changer = document.getElementById('changer')

changer.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})