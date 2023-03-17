let text = document.getElementById("text");
let one = document.getElementById("one");
let two = document.getElementById("two");

text.oninput = function () {
  two.innerHTML = this.value.trim("").length;
  one.innerHTML = this.value.split(" ").filter(function (ele) {
    return ele != "";
  }).length;
};