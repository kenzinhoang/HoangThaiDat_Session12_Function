let numberA = parseInt(prompt("Nhập số ngẫu nhiên A"));
let numberB = parseInt(prompt("Nhập số ngẫu nhiên B"));
let numberC = parseInt(prompt("Nhập số ngẫu nhiên C"));

function even(number) {
    if (number % 2 === 0) {
        return "Số chẵn";
    } else {
        return "Số lẻ";
    }
}

console.log("Số A là", even(numberA));
console.log("Số B là", even(numberB));
console.log("Số C là", even(numberC));