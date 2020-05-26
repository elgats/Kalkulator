// Steps:
// 1. Ambil element button dengan class number.
// 2. Tambah click event & jalankan function "updateScreen" saat tombol diklik.
// 3. Perbarui atribut nilai dari element <input> di dalam calculator-screen dengan function "updateScreen".

const pressed = () => {
    document.getElementById("press").volume = 0.1;
    document.getElementById("press").play();
}

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

//Menyimpan angka-angka dan operator untuk melakukan kalkulasi.
//Untuk kalkulasi: 2 angka dan 1 operator

let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0"

//Didalam function “inputNumber”, berikan angka yang di klik ke currentNumber. 

const inputNumber = (number) => {
   //currentNumber += number; //cara mengaktifkan peng-input-an lebih dari 2 digit angkaß 
    //supaya tidak bisa diawali dengan 0
    if (currentNumber === "0") {
        currentNumber = number;
        //console.log(currentNumber);
    } else {
        currentNumber += number;
        //console.log(currentNumber);
    }

}

//add event ke operator

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
        pressed();
    })
})

// function inputOperator akan 1. Memberikan nilai yang tersimpan di currentNumber ke prevNumber.
// 2. Berikan operator ke calculationOperator sebagai suatu argument.
// 3. Kosongkan currentNumber.

//perbarui variable prevNumber hanya saat tombol operator diklik terlebih dahulu.

const inputOperator = (operator) => {
    if (calculationOperator === "") {
    prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = "";
}

//persentase

const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
    inputOperator(event.target.value);
})

//kalkulasi

//1. ambil elemen =
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
    pressed();
    console.log("sama dengan")
})

//definisi function calculation

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

    currentNumber = result; //supaya tampil di layar
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



