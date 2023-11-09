//Stworzyć funkcję sum zwracającą pojedynczą liczbę, która jest sumą wszystkich podanych liczb do funkcji.
function sum(args) {
    var sum = 0;
    for (var i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

console.log(sum([3, 7, 5]));