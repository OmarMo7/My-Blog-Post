var back = document.getElementById('back')
back.addEventListener('click', () => {
  var name = document.getElementById('name')
  var password = document.getElementById('password')

  name.removeAttribute('required')
  password.removeAttribute('required')
  console.log(name)
  console.log(password)
})