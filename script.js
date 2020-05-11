// Steps:
// 1. Ambil element button dengan class number.
// 2. Tambah click event & jalankan function "updateScreen" saat tombol diklik.
// 3. Perbarui atribut nilai dari element <input> di dalam calculator-screen dengan function "updateScreen".


const numbers = document.querySelectorAll(".number");
//console.log(numbers);

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber)
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
        console.log(currentNumber);
    } else {
        currentNumber += number;
        console.log(currentNumber);
    }

}

//add event ke operator

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

// function inputOperator akan 1. Memberikan nilai yang tersimpan di currentNumber ke prevNumber.
// 2. Berikan operator ke calculationOperator sebagai suatu argument.
// 3. Kosongkan currentNumber.

const inputOperator = (operator) => {
    prevNumber = currentNumber;
    calculationOperator = operator;
    currentNumver = "";
}