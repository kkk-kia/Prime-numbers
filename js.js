var from = document.getElementById("from");
var to = document.getElementById("to");
var btn = document.getElementById("btn");
var answer = document.getElementById("answer");
var divPixel = document.getElementById("divPixel")
var divInput = document.getElementById("divInput")

var avalNumber = []

btn.addEventListener("click", giveToUser);


function giveToUser() {
  answer.innerHTML = ""
  avalNumber = [];

  if (from.value <= 2) {
    avalNumber.push(2)
  }
  if (from.value <= 3) {
    avalNumber.push(3)
  }

  for (var i = 1; i < to.value; i++) {
    var x = (6 * i) - 1
    var y = (6 * i) + 1

    if (y >= from.value && y <= to.value) {
      avalNumber.push(x)
      avalNumber.push(y)
    } else {
      if (x >= from.value && y <= to.value) {
        avalNumber.push(x)
      }
      break
    }
  }


  // for (i = 0; i < avalNumber.length; i++) {
  //   answer.innerHTML += avalNumber[i] + ", "
  // }

  pixelMade()
}


function pixelMade() {
  divInput.style.display = "none"
  divPixel.style.gridTemplateColumns = "repeat" + "(" + window.innerWidth + ",1px)"
  divPixel.style.gridTemplateRows = "repeat" + "(" + window.innerHeight + ",1px)"

  for (i = 0; i < avalNumber.length; i++) {
    var pixel = document.createElement("div")
    var row = 1
    var column = avalNumber[i]
    while (column > window.innerWidth) {
      column -= window.innerWidth
      row += 1
    }
    divPixel.appendChild(pixel)
    pixel.style.width = "1px"
    pixel.style.height = "1px"
    pixel.style.gridColumnStart = column
    pixel.style.gridRowStart = row
    pixel.style.backgroundColor = "red"
  }
}