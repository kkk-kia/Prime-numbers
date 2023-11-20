var from = document.getElementById("from");
var to = document.getElementById("to");
var btn = document.getElementById("btn");
var answer = document.getElementById("answer");
var divPixel = document.getElementById("divPixel")
var divInput = document.getElementById("divInput")

var avalNumber = [2];


makeAvalNumber();

btn.addEventListener("click", giveToUser);

function makeAvalNumber() {
  for (var i = 3; i <= 100; i += 2) {
    var q = true;
    for (var k = 0; k < avalNumber.length; k++) {
      if (i % avalNumber[k] == 0) {
        q = false;
      }
    }
    if (q == true) {
      avalNumber.push(i);
    }
  }
}

function giveToUser() {
  answer.innerHTML = "";
  for (i = 0; i < avalNumber.length; i++) {
    if (avalNumber[i] >= from.value && avalNumber[i] <= to.value) {
      answer.innerHTML += avalNumber[i] + ", ";
    }
  }
}