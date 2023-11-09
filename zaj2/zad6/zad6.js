function palindrom(str) {
    let str1 = str.split("").reverse().join("");
    if (str === str1) {
        return true;
    } else {
        return false;
    }
}

console.log(palindrom("kajak"));