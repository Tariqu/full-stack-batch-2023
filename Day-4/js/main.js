let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

let sum = document.getElementById('addBtn');

// click event
sum.addEventListener("click", () => {
    let total = parseInt(num1.value) + parseInt(num2.value);
    console.log(total);
    alert(total)
})
// dbClick event
sum.addEventListener("dblclick", () => {

})

// arithmatic operation
// *, -, /, %