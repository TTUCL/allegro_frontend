function isHappyNumber(number) {
    let sum = 0;
    let num = number;
    while (sum != 1) {
        sum = 0;
        while (num > 0) {
            sum += Math.pow(num % 10, 2);
            num = Math.floor(num / 10);
        }
        num = sum;
        if (sum == 4) {
            return false;
        }
    }
    return true;
}

console.log(isHappyNumber(20));