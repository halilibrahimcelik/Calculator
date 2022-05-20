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
const operatorElement = document.querySelector(".operator");

class Calculator {
  constructor(prevNumber, curNumber, curOperation) {
    this.previousNumberElement = prevNumber;
    this.currentNumberElement = curNumber;

    this.curOperationElement = curOperation;
    this.clearAll();
  }

  clearAll() {
    this.currentNumber = "";
    this.previousNumber = "";

    this.curOperationEl = "";
    this.operation = undefined;

    if (currentNumberElement.innerText > 0) {
      return (currentNumberElement.innerText = 0);
    }
  }

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
    this.curOperationEl = operation;
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
    } else if (this.operation == "x") {
      total = prevNum * curNum;
    } else if (this.operation == "÷") {
      total = prevNum / curNum;
    } else return;
    console.log(total, curNum, this.operation);

    this.currentNumber = total;
    this.operation = undefined;
    this.previousNumber = "";
  }

  updateOperation() {
    this.currentNumberElement.innerText = this.currentNumber;
    this.previousNumberElement.innerText = this.previousNumber;
    this.curOperationElement.innerText = this.curOperationEl;
  }
}

const calculator = new Calculator(
  previousNumberElement,
  currentNumberElement,
  operatorElement
);

const allNums = document.querySelectorAll(".num");
const operationBtns = document.querySelectorAll(".orange");

allNums.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNum(button.innerText);
    calculator.updateOperation();
  });
});
operationBtns.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateOperation();
    if (previousNumberElement) {
      operatorElement.style.display = "block";
    }
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

  if (previousNumberElement) {
    operatorElement.style.display = "none";
  } else if (previousNumberElement) {
    return (operatorElement.style.display = "block");
  }
});

if ((previousNumberElement.innerText = " ")) {
  operatorElement.style.display = "block";
} else {
  operatorElement.style.display = "none";
}
console.log(clearBtn);

clearBtn.addEventListener("click", () => {
  calculator.clearAll();
});
