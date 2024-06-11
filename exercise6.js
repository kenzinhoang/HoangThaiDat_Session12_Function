//input: chuỗi bất kỳ
//input: fn: -> input là string -> return : String && tất cả các chữ cái đầu viết hoa
//output: in String vs tất cả các chữ cái đầu viết hoa




function example(str) {
    let arr = str.split(' ')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toLocaleUpperCase() + arr[i].slice(1)
    }
    return arr.join(" ");
}
let myarray = "chào tất cả mọi người";
console.log(example(myarray))




// function upper(example) {
//     let output = []
//     for (let i = 0; i < example.length; i++) {
//         example[i].charAt(0)

//     }

//     return output;
// }

// let mystring = "banana"
// mystring = mystring.charAt(0).toUpperCase()
// console.log(mystring)
// console.log(upper(mystring));
