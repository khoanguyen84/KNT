// for (let i = 1; i <= 20; i++) {
//     document.write(`${i}<br>`);
// }

// for (let i = 20; i > 0; i--) {
//     document.write(`${i}<br>`);
// }

// let i = 1;
// for (; i <= 20;) {
//     document.write(`${i}<br>`);
//     i += 1;
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write(`${i}<br>`);
//     }
// }

// for (let i = 2; i <= 20; i += 2) {
//     document.write(`${i}<br>`);
// }
// let count = 0;
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 == 0 && count < 5) {
//         count++;
//         document.write(`${i}<br>`);
//     }
// }

// let count = 0;
// for (let i = 1; i <= 20 && count < 5; i++) {
//     if (i % 2 == 0) {
//         count++;
//         document.write(`${i}<br>`);
//     }
// }

// for (let i = 1, count = 0; i <= 20 && count < 5; i++) {
//     if (i % 2 == 0) {
//         count++;
//         document.write(`${i}<br>`);
//     }
// }
// for (let i = 2, count = 0; i <= 20 && count < 5; i += 2) {
//     count++;
//     document.write(`${i}<br>`);
// }
// for (let i = 2, count = 0; i <= 20; i += 2) {
//     count++;
//     document.write(`${i}<br>`);
//     if (count == 5) {
//         break;
//     }
// }

// for (let i = 1, count = 0; i <= 20; i++) {
//     if (i % 2 != 0)
//         continue;
//     count++;
//     document.write(`${i}<br>`);
//     if (count == 5) {
//         break;
//     }
// }
// for (let i = 100; i >= 5; i -= 5) {
//     document.write(`${100 -i + 5}<br>`);
// }

// let i = 101;
// while (i <= 100) {
//     document.write(`${i}<br>`);
//     i++;
// }

// let i = 101;
// do {
//     document.write(`${i}<br>`);
//     i++;
// }
// while (i <= 100);

// let number = 0;
// do {
//     number = Number(prompt('enter number: '));

// }
// while (isNaN(number) || !Number.isSafeInteger(number))

// let number = Number(prompt('enter number: '));
// while (isNaN(number) || !Number.isSafeInteger(number)) {
//     number = Number(prompt('enter number: '));
// }
// let number = Number(prompt('enter number: '));
// for (var count = 0; isNaN(number) || !Number.isSafeInteger(number);) {
//     number = Number(prompt('enter number: '));
//     count++
// }

// document.write(count);

//nesting loop (các vòng lặp lồng nhau)
// for (let i = 0; i < 15; i++) {
//     // for (let j = 0; j < 25; j++) {
//     //     document.write('*');
//     // }

//     // let j = 0;
//     // do {
//     //     document.write('*');
//     //     j++;
//     // }
//     // while (j < 25)
//     // let j = 0;
//     // while (j < 25) {
//     //     document.write('*');
//     //     j++;
//     // }
//     // document.write('<br>');
// }

// let i = 0;
// do {
//     // let j = 0;
//     // while (j < 25) {
//     //     document.write('*');
//     //     j++;
//     // }
//     // document.write('<br>');
//     // i++;
//     // for (let j = 0; j < 25; j++) {
//     //     document.write('x');
//     // }
//     // document.write('<br>');
//     // i++;
// }
// while (i < 15)

// let n = 6;
// let m = 6;
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         if (j <= i) {
//             document.write('*');
//         } else {
//             document.write(' ');
//         }
//     }
//     document.write('<br>');
// }
// document.write('<br>');
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         if (j < i) {
//             document.write('');
//         } else {
//             document.write('*');
//         }
//     }
//     document.write('<br>');
// }

// document.write('<br>');
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         if (j < i) {
//             document.write('&nbsp;&nbsp;');
//         } else {
//             document.write('*');
//         }
//     }
//     document.write('<br>');
// }
// document.write('<br>');
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         if (j < (n - i - 1)) {
//             document.write('&nbsp;&nbsp;');
//         } else {
//             document.write('*');
//         }
//     }
//     document.write('<br>');
// }
// document.write('<br>');
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         if (j < (m - i - 1)) {
//             document.write('&nbsp;&nbsp;');
//         } else {
//             document.write('*');
//             for (let k = 0; k < (m - j - 1); k++) {
//                 document.write('*');
//             }
//         }
//     }
//     document.write('<br>');
// }

let n = 6;
let m = 6;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (j <= i) {
            document.write('*');
        } else {
            document.write('');
        }
    }
    document.write('<br>');
}
document.write('<br>');
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (j < i) {
            document.write('');
        } else {
            document.write('*');
        }
    }
    document.write('<br>');
}
document.write('<br>');
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (j >= (m - i - 1)) {
            document.write('*');
        } else {
            document.write('&nbsp;&nbsp;');
        }
    }
    document.write('<br>');
}
document.write('<br>');
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (j < i) {
            document.write('&nbsp;&nbsp');
        } else {
            document.write('*');
        }
    }
    document.write('<br>');
}