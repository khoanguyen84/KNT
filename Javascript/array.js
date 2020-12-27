let arr = [];
let size = 20;

for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 100 + 1);

    // [min, max] -> rand()*(max - min + 1) + min
    // Math.floar(Math.random()*(max-min+1) + min)
    //[1, 100]
    // Math.floar(Math.random()*(100-1+1) + 1)
    //[20,80]
    // Math.floar(Math.random()*(80-20+1) + 20)
}


// for (let i = 0; i < size; i++) {
//     document.write(`${arr[i]}, `);
// }
// document.write(`<br>`);

// for (let index in arr) {
//     document.write(`${arr[index]}, `);
// }

// document.write(`<br>`);

// for (let item of arr) {
//     // document.write(`${arr.indexOf(item)}, `);
//     document.write(`${item}, `);
// }
// document.write(`<br>`);
// arr.forEach(function(v, i) {
//     document.write(`${i}, `);
// })


// for in
// for of
// foreach


let arr1 = [1, 2, 3, 4, 5];
let str = '1,2,3,4,5';
document.write(arr1.toString());
document.write("<br>");
document.write(arr1.join(' '));

arr1.sort(function(a, b) {
    return a - b;
})


arr1.map(function(v, i) {
    return v * 2;
}, arr1);

function multiple2(v, i, arr) {
    return v * 2;
}


arr1.map(multiple2);



arr1.filter(function(v, i) {
    return v >= 2 && v <= 4;
})


arr1.reduce(function(total, v, i) {
    return total += v;
})

arr1.every(function(v, i) { return v >= 4; })


arr1.indexOf(4, 5)