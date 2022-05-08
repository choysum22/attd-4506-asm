// clock
var clockElement = document.getElementById("clock");
function clock() {
  clockElement.textContent = new Date().toLocaleString("en-US");
}

setInterval(clock, 1000);
