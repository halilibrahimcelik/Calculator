//öncelikle functionları yazıcaz
//toplama çıkarma çarpma bölme
//eşitleme tuşu functionları harekete geçirecek
//!yüzdelik yeri hesaplama
//AC sıfırlama

const number0 = document.getElementById("0");
const number1 = document.getElementById("1").getAttribute("data-value");
const number2 = document.getElementById("2").getAttribute("data-value");
const number3 = document.getElementById("3");
const number4 = document.getElementById("4");
const number5 = document.getElementById("5");
const number6 = document.getElementById("6");
const number7 = document.getElementById("7");
const number8 = document.getElementById("8");
const number9 = document.getElementById("9");

const equalBtn = document.getElementById("=");
const multipleBtn = document.getElementById("+");
const extractBtn = document.getElementById("-");
const DivideSign = document.getElementById("division");
const clearBtn = document.getElementById("AC");

console.log(number1, number2);

function addNumber() {
  return number1 + number2;
}

multipleBtn.addEventListener("click", addNumber);
