var from = document.getElementById("from");
var to = document.getElementById("to");
var btn = document.getElementById("btn");
var answer = document.getElementById("answer");
var divPixel = document.getElementById("divPixel")
var divInput = document.getElementById("divInput")


btn.addEventListener("click", giveToUser);


function giveToUser() {
  answer.innerHTML = ""

  var avalNumber = [];
  if (from.value <= 2) {
    avalNumber.push(2)
  }
  if (from.value <= 3) {
    avalNumber.push(3)
  }

  for (var i = 1; i < to.value; i++) {
    var x = (6 * i) - 1
    var y = (6 * i) + 1
    if (x >= from.value && x <= to.value) {
      avalNumber.push(x)
    }
    if (y >= from.value && y <= to.value) {
      avalNumber.push(y)
    }
    if (x > to.value) {
      break
    }
  }


  for (i = 0; i < avalNumber.length; i++) {
    answer.innerHTML += avalNumber[i] + ", "
  }
}