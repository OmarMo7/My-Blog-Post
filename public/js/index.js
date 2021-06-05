var userLogin = localStorage.getItem('username')
var userPass = localStorage.getItem('password')
var login = document.querySelector('#loginButton')
var logout = document.querySelector('#logoutButton')
var edit = document.querySelectorAll('#Edit')
var newButton = document.querySelectorAll('#new')
var submit = document.querySelectorAll('#submit')
if (userLogin != null && userPass != null && userLogin == "omar" && userPass == "oooooo7") {
  edit.forEach(element => { element.setAttribute('style', 'display:inline-block') })
  newButton.forEach(element => { element.setAttribute('style', 'display:inline-block') })
  submit.forEach(element => { element.setAttribute('style', 'display:inline-block') })
  login.setAttribute('style', 'display:none')
  logout.setAttribute('style', 'display:inline')
}
else {
  edit.forEach(element => { element.setAttribute('style', 'display:none') })
  newButton.forEach(element => { element.setAttribute('style', 'display:none') })
  submit.forEach(element => { element.setAttribute('style', 'display:none') })
  login.setAttribute('style', 'display:inline')
  logout.setAttribute('style', 'display:none')
}

function refreshPage() {
  window.location.reload();
}

logout.addEventListener('click', () => {
  localStorage.removeItem('username')
  localStorage.removeItem('password')
  refreshPage()
})

console.log(userLogin)
console.log(userPass)