let theresult = document.getElementById("theresult");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let number4 = document.getElementById("number4");
let number5 = document.getElementById("number5");
let number6 = document.getElementById("number6");
let number7 = document.getElementById("number7");
let number8 = document.getElementById("number8");
let number9 = document.getElementById("number9");
let number0 = document.getElementById("number0");
let thesum = document.getElementById("thesum");
let thesub = document.getElementById("thesub");
let multi = document.getElementById("multi");
let reset = document.getElementById("reset");
let theEqual = document.getElementById("theEqual");
let thedivision = document.getElementById("thedivision");

number1.addEventListener("click", () => thediplayscreen("1"));
number2.addEventListener("click", () => thediplayscreen("2"));
number3.addEventListener("click", () => thediplayscreen("3"));
number4.addEventListener("click", () => thediplayscreen("4"));
number5.addEventListener("click", () => thediplayscreen("5"));
number6.addEventListener("click", () => thediplayscreen("6"));
number7.addEventListener("click", () => thediplayscreen("7"));
number8.addEventListener("click", () => thediplayscreen("8"));
number9.addEventListener("click", () => thediplayscreen("9"));
number0.addEventListener("click", () => thediplayscreen("0"));
thesum.addEventListener("click", () => thediplayscreen("+"));
thesub.addEventListener("click", () => thediplayscreen("-"));
multi.addEventListener("click", () => thediplayscreen("*"));
thedivision.addEventListener("click", () => thediplayscreen("/"));
theEqual.addEventListener("click", calculate);
reset.addEventListener("click", cleardisply);

function thediplayscreen(input) {
  theresult.value += input;
}

function cleardisply() {
  theresult.value = "";
}

function calculate() {
  try {
    theresult.value = eval(theresult.value);
  } catch (e) {
    theresult.value = "Error";
  }
}