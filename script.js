
//audio 
setTimeout(function(){
  document.getElementById("sfx").volume = 0.3;
  document.getElementById("sfx").play();
  console.log('your audio is started just now');
}, 2600)


const pressed = () => {
    document.getElementById("press").volume = 0.1;
    document.getElementById("press").play();
}

// Steps:
// 1. Get element (buttons) wuth class "number".
// 2. Add click event & run  "updateScreen" function when a button is clicked
// 3. Update value atribute of <input> element in calculator-screen with "updateScreen" function.

const numbers = document.querySelectorAll(".number");
//console.log(numbers);

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
        pressed();
        console.log("angka")
    })
})

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number
};

//Store number and operators to do calculations.
//Calculating: 2 numbers dan 1 operator

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0"

//In function “inputNumber”, pass the number clicked to currentNumber. 

const inputNumber = (number) => {
   //currentNumber += number; //to allow more than 2 digit input
    //to prevent the number from being started with 0
    if (currentNumber === "0") {
        currentNumber = number;
        //console.log(currentNumber);
    } else {
        currentNumber += number;
        //console.log(currentNumber);
    }

}

//add event to operator

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        pressed();
    })
})

// inputOperator function will 1. Pass the value in currentNumber to prevNumber.
// 2. Pass an operator to calculationOperator as an argument.
// 3. empty currentNumber.

//Update prevNumber variable only when operator button is clicked first.

const inputOperator = (operator) => {
    if (calculationOperator === "") {
    prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "";
}

//percentage

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
    inputOperator(event.target.value);
})

//calculation

//1. get element =
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
    pressed();
    console.log("sama dengan")
})

//definition calculation function

const calculate = () => {

    let result = "";

    switch(calculationOperator) {

        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            console.log("tambah")
            break;

        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            console.log("kurang")
            break;

        case "*":
            result =  parseFloat(prevNumber) * parseFloat(currentNumber);
            console.log("kali")
            break;

        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            console.log("bagi")
            break;

        case "%":
            result = parseFloat(prevNumber) / 100;
            console.log("persen")
            break;

        default:
            return;
    }

    currentNumber = result; //to display it on screen
    calculationOperator = "";  
}

//Tombol AC

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
    pressed();
    //console.log("AC button is pressed")
})

const clearAll = () => {
    prevNumber = "";
    calculationOperator = "";
    currentNumber = "0";
}

const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return;
    }
    currentNumber += dot;
}

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
    pressed();
})

//flip effect

const calculatorPage = document.querySelector('.calculator');
const creditPage = document.querySelector('.credit');
const backBtn = document.querySelector('#back');
const creditBtn = document.querySelector('#credit-btn');

creditBtn.addEventListener('click', function() {
    creditPage.style.transform = "perspective( 2000px ) rotateY( 0deg )";
    calculatorPage.style.transform = "perspective( 2000px ) rotateY( -180deg )";
    console.log('flip');
});

backBtn.addEventListener('click', function() {
    calculatorPage.style.transform = "perspective( 2000px ) rotateY( 0deg )";
    creditPage.style.transform = "perspective( 2000px ) rotateY( 180deg )";
    console.log('flip');
});
