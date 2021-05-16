var back = document.getElementById('back')
back.addEventListener('click', () => {
  var name = document.getElementById('name')
  var password = document.getElementById('password')

  name.value = null
  password.value = null

  name.removeAttribute('required')
  password.removeAttribute('required')
  console.log(name)
  console.log(password)
})