
function check() {
  const name = document.getElementById("name").nodeValue
  const password = document.getElementById("password").nodeValue
  // document.getElementById("submit").addEventListener('submit',check)
  const div = document.querySelectorAll('.card-body .card')
  if ((name == null || password == null)) {
    for (int = 0; i < div.length; i++) {
      let editButton = div[i].childNodes[9]
      let deleteButton = div[i].childNodes[9]
      div[i].removeChild(editButton)
      div[i].removeChild(deleteButton)
    }
  }
}

module.exports = check