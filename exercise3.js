let str = " hello world     123 456       7890";
function characters(str) {
    str = str.split(" ").join("").length
    return str
}
console.log("characters in string without space", characters(str));