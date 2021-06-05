var back = document.getElementById('back')
var login = document.getElementById('submitLogin')
var username = document.getElementById('name')
var password = document.getElementById('password')
console.log(username)
console.log(password)

back.addEventListener('click', () => {
  if (username != null && password != null) {
    username.value = null
    password.value = null
  }
  username.removeAttribute('required')
  password.removeAttribute('required')
})

login.addEventListener('click', () => {
  console.log('login')
  localStorage.setItem('username', username.value)
  localStorage.setItem('password', password.value)
})


username.value = localStorage.getItem('username')
password.value = localStorage.getItem('password')