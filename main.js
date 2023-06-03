const screen1 = document.querySelector(".screen1") //como pega tags html (seletor)
const screen2 = document.querySelector(".screen2")
const firstImg = document.querySelector("#firstImg")
const secondImg = document.querySelector("#secondImg")

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

firstImg.addEventListener('click', handleClick())
secondImg.addEventListener('click', buttonAgain)
