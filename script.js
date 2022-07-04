const changer = document.getElementById('changer')

changer.addEventListener('change', () => {
  document.body.classList.toggle('light')
  document.getElementById('sky').classList.toggle('light')
  //if you want to add a div just set div id and add it here.
})