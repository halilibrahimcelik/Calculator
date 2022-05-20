//öncelikle functionları yazıcaz
//toplama çıkarma çarpma bölme
//eşitleme tuşu functionları harekete geçirecek
//!yüzdelik yeri hesaplama
//AC sıfırlama

const equalBtn = document.getElementById("=");
const addBtn = document.getElementById("+");
const extractBtn = document.getElementById("-");
const divideBtn = document.getElementById("division");
const multipleBtn = document.getElementById("x");
const clearBtn = document.getElementById("AC");
console.log(equalBtn, addBtn, extractBtn, divideBtn, clearBtn, multipleBtn);

const previousNumberElement = document.querySelector("[data-previous-num]");
const currentNumberElement = document.querySelector("[data-current-num]");
console.log(currentNumberElement);

class Calculator {
  constructor(prevNumber, curNumber) {
    this.previousNumberElement = prevNumber;
    this.currentNumberElement = curNumber;
    this.clearAll();
  }

  clearAll() {
    this.currentNumber = "";
    this.previousNumber = "";
    this.operation = undefined;
  }
  delete() {}

  //displaying calculation number
  appendNum(number) {
    if (number === "." && this.currentNumber.includes(".")) return;
    this.currentNumber = this.currentNumber.toString() + number.toString();
  }

  //choose calculation operation
  chooseOperation(operation) {
    if (this.currentNumber === "") return;
    //!burada combination of calculation logic'ı yazıyoruz.
    //!with belowed  validation  we check  both curent and previousNumbers are valid  or not
    if (this.previousNumber !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousNumber = this.currentNumber;
    this.currentNumber = "";
  }

  //gives one single value
  compute() {
    let total;
    let prevNum = parseFloat(this.previousNumber);
    let curNum = parseFloat(this.currentNumber);
    if (isNaN(prevNum) || isNaN(curNum)) return;

    if (this.operation === "+") {
      total = prevNum + curNum;
    } else if (this.operation === "-") {
      total = prevNum - curNum;
    } else if (this.operation === "*") {
      total = prevNum * curNum;
    } else if (this.operation === "÷") {
      total = prevNum / curNum;
    } else return;

    console.log(prevNum, curNum, this.operation);
    this.currentNumber = total;
    this.operation = undefined;
    this.previousNumber = "";
  }

  updateOperation() {
    this.currentNumberElement.innerText = this.currentNumber;
    this.previousNumberElement.innerText = this.previousNumber;
  }
}

const calculator = new Calculator(previousNumberElement, currentNumberElement);

const allNums = document.querySelectorAll(".num");

allNums.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNum(button.innerText);
    calculator.updateOperation();
  });
});

addBtn.addEventListener("click", (event) => {
  calculator.chooseOperation(event.innerText);
  calculator.updateOperation();
});
divideBtn.addEventListener("click", (event) => {
  calculator.chooseOperation(event.innerText);
  calculator.updateOperation();
});
extractBtn.addEventListener("click", (event) => {
  calculator.chooseOperation(event.innerText);
  calculator.updateOperation();
});
multipleBtn.addEventListener("click", (event) => {
  calculator.chooseOperation(event.innerText);
  calculator.updateOperation();
});

equalBtn.addEventListener("click", (event) => {
  calculator.compute();
  calculator.updateOperation();
});

const x = ("1213243" + 33333) / 3;
console.log(parseInt(x));
