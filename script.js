const numbers = document.querySelectorAll(".number");
//console.log(numbers);

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.value)
    })
})