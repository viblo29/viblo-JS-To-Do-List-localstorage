const inputBox = document.getElementById(`input-box`)
const listContainer = document.getElementById(`list-container`)

function addTask() {
  if(inputBox.value === ``){
    alert(`You must write something!`)
  } else {
    let li = document.createElement(`li`)
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let delBtn = document.createElement(`button`)
    delBtn.innerHTML = `DELETE`
    delBtn.className = `delBtn`
    li.appendChild(delBtn)
  }
  inputBox.value = ``
  saveData()
}

listContainer.addEventListener(`click`, function (e) {
  if (e.target.tagName === `LI`) {
    e.target.classList.toggle(`checked`)
    saveData()
  } else if (e.target.tagName === `BUTTON`) {
    e.target.parentElement.remove()
    saveData()
  }
}, false)

function saveData() {
  localStorage.setItem(`data`, listContainer.innerHTML)
}
function loadData() {
  listContainer.innerHTML = localStorage.getItem(`data`)
}
loadData()