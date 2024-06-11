//input: 1 mảng nhiều chuỗi + 1 chuỗi bất kỳ, hàm (array,str)
//output: tất cả các phần tử trong mảng có chứa chuỗi

let fruits = ["apple", "orange", "mango", "coconut", "banana"]
let input = "mango"
function check(arr, str) {
    let index = arr.indexOf(str)
    let result = arr[index]

    return result
}
console.log("result:", check(fruits, input));