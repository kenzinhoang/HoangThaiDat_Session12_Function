//input: chuỗi khai báo, chuỗi nhập, hàm kiểm tra ký tự chuỗi nhập có trong chuỗi khai báo k
//output: từ chuỗi khai báo có thể tạo ra chuỗi được nhập -> true/false

let str = "abcdef123"
let input = prompt("nhập vào chuỗi bất kỳ")
function check(str, keyword) {
    for (let index = 0; index < keyword.length; index++) {
        if (!str.includes(keyword.charAt(index).toString())) {
            return false
        }
        /*   for (let i = 0; i < str.length; i++) {
               if (str[i] == keyword) {
                   temp = true
                   //console.log(temp)
                   break
               } else {
                   for (let j = 0; j < keyword.length; j++) {
                       if (str[i] == keyword[j]) {
                           paraKeys.push(str[i])
                           //console.log(str[i]);
                           //console.log(temp)
                       }
                   }
               }
           }*/
    }
    return true
}

console.log("result:", check(str, input));