
let myarray = ["a", "ab", "hello"];
function checkmax(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > max.length) {
            max = array[i];
        }
    }
    return max;
}

console.log("max la", checkmax(myarray));