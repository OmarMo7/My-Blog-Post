/** Create posts */
createMediumPost = () => {
  var row = document.createElement('div')
  var column = document.createElement('div')
  var contianer = document.querySelector('.container')
  for (let i = 0; i < 4; i++) {
    var description = document.createElement('div')
    var img = document.createElement('img')
    description.classList.add('description')
    if (i == 0) {
      description.textContent = `1- الحل بسيط جدا .. لو انت شغال على فاير فوكس خش على صفحة ال extenstion اول
                  حاجة`
      img.src = "../../public/img/extension.jpg"
      img.id = "1"
      img.alt = "Open the extension panel in Firefox"
    }
    else if (i == 1) {
      description.textContent = `2- بعدين اكتب BrowsecVPN على بانل السيرش`
      img.src = "../../public/img/search.jpg"
      img.id = "2"
      img.alt = "Search for BrowsecVPN"
    }
    else if (i == 2) {
      description.textContent = `3- اطلع فوق يمين وضيف ال add-on`
      img.src = "../../public/img/added.jpg"
      img.id = "3"
      img.alt = "Add the extension from store"
    }
    else if (i == 3) {
      description.textContent = `4- مبروك! .. كده تقدر تتصفح أى معلومات تحب تعرفها دلوقتى ف Medium`
      img.src = "../../public/img/booom.jpg"
      img.id = "4"
      img.alt = "HORRAY!"
    }
    column.appendChild(description)
    column.appendChild(img)
  }
  row.appendChild(column)
  column.classList.add('column')
  row.classList.add('row')
  contianer.appendChild(row)
}

/** Adjusting when to show each post */
const div = document.querySelector('.container h1')
if (div.innerText == "حل مشكلة ميديام") {
  createMediumPost()
}