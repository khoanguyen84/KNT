// let size = 0;
// do {
//     size = Number(prompt('enter size: '));
// }
// while (isNaN(size) || !Number.isInteger(size))

// let arr = [];
// for (let i = 0; i < size; i++) {
//     arr[i] = Math.floor(Math.random() * 81 + 10);
// }

// document.write(arr.join('-'));
// document.write('<br>');


// // let totalArr = arr.reduce(function(total, v, i) {
// //                     return total += v;
// //                 });
// let totalArr = arr.reduce(myReduce);

// function myReduce(total, v, i, arr) {
//     return total += v;
// }
// document.write(totalArr);

function enterNumber(smg) {
    let number = 0;
    do {
        number = Number(prompt(`${smg}:`));
    }
    while (isNaN(number) || !Number.isInteger(number))
    return number;
}

function generateArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return arr;
}

function printArray(arr, separator) {
    return `<br> ${arr.join(separator)}`;
}

function totalArray(arr) {
    return arr.reduce(function(total, v, i) {
        return total += v;
    })
}

function main() {
    let size = enterNumber('enter size');
    let arr = generateArray(size, 10, 90);
    let arr2 = generateArray(100, 20, 80);
    document.write(printArray(arr, '-'));
    document.write(printArray(arr2, ','));
    document.write(`<br>total of array: ${totalArray(arr)}`);

    let number1 = enterNumber('enter number 1');
    let number2 = enterNumber('enter number 2');
    document.write(`<br>${number1 + number2}`);
}

main();