// Steps:
// 1. Ambil element button dengan class number.
// 2. Tambah click event & jalankan function "updateScreen" saat tombol diklik.
// 3. Perbarui atribut nilai dari element <input> di dalam calculator-screen dengan function "updateScreen".


const numbers = document.querySelectorAll(".number");
//console.log(numbers);

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number
};


//Untuk kalkulasi: 2 angka dan 1 operator