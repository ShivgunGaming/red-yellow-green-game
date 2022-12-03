console.log('hello')

let titleDiv = document.getElementById('title')

console.log('before: ', titleDiv.innerText)

let message = 'Baby! Listen to him! NOT NOW, NOT NOW NOT NOW!'

titleDiv.innerText = "Baby"

console.log('after: ', titleDiv.innerText)

titleDiv.innerHTML = `<p>${message}</p>`

titleDiv.style.color = 'chocolate'

//FROM HERE

let redBox = document.getElementById('red')
let yellowBox = document.getElementById('yellow')
let greenBox = document.getElementById('green')

//redBox.onclick = () => console.log('you clicked red')
//yellowBox.onclick = () => console.log('you clicked yellow')
//greenBox.onclick = () => console.log('you clicked green')

const buttons = document.querySelectorAll('.colorButton')

//console.log(buttons[1].value)

//for Each
const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }

buttons.forEach(button => {
  button.onclick = () => {
    timesClicked[button.value] += 1
    button.innerText = timesClicked[button.value]
    //console.log(button.value)
  }
})

const clearScores = () => {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  buttons.forEach(button => button.innerText = '')
}

const clearGameBtn = document.getElementById("clear-game")

clearGameBtn.onclick = () => clearScores()
