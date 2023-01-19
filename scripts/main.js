const range = document.querySelector(".range");
const num = document.querySelector(".num");

range.addEventListener("input", numUpdate);

function numUpdate(e) {
  num.value = range.value;
}

function getNum() {
  console.log(range.value);
}
