//input: nhập 1 String và 1 character, tạo 1 hàm có tham số (str, char) đếm đc số lần ký tự xuất hiện trong chuỗi
//output: in kết quả 

let mystr = prompt("Nhập vào 1 chuỗi bất kỳ")
let word = prompt("Nhập vào 1 ký tự bất kỳ")

function duplicate(str, keyword) {
    let result = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == keyword) {
            result++
        }
    }
    return result
}

console.log("duplicate times:", duplicate(mystr, word));