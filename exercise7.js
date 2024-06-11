//input: mảng số nguyên, ng dùng nhập 1 số nguyên bất kỳ, hàm (arr,number)
//output: 1 cặp số trong mảng có tổng bằng input
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let input = parseInt(prompt("nhập vào 1 số nguyên bất kỳ"))
function sum(arr, numb) {
    let a
    let b
    let result = []
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > numb || arr[i] == numb) {
            continue
        } else if (arr[i] < numb) {
            for (j = i + 1; j <= arr.length; j++) {
                if (arr[i] + arr[j] > numb || arr[i] + arr[j] < numb) {
                    continue
                } else if (arr[i] + arr[j] == numb) {
                    a = arr[i]
                    b = arr[j]
                }

            }
        }

    }
    result.push(a, b)
    return result
}

console.log(`Tổng ${input} = ${sum(numbers, input).join(' + ')}`);
