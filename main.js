const screen1 = document.querySelector(".screen1") //como pega tags html (seletor)
const screen2 = document.querySelector(".screen2")
const imgClick = document.querySelector("#firstImg")
const btnAgain = document.querySelector("#secondImg")

function handleClick() {
  toggleScreen()
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function buttonAgain() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

imgClick.addEventListener('click', handleClick())
btnAgain.addEventListener('click', buttonAgain)