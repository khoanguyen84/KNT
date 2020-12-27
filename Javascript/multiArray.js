let matrix = [
    [1, 2, 3, 4],
    [2, 3],
    [5, 6, 7, 8, 9]
]


let M = [];
let rows = 5;
let cols = 5;
let total = 0;
for (let i = 0; i < rows; i++) {
    let A = [];
    for (let j = 0; j < cols; j++) {
        A[j] = Math.floor(Math.random() * 5);
    }
    M[i] = A;
}
document.write('<br><hr>');

for (let i = 0; i < rows; i++) {
    let A = [];
    for (let j = 0; j < cols; j++) {
        document.write(`${M[i][j]} `);
    }
    document.write('<br>');
}
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        if (i == 0 || j == 0 || i == (rows - 1) || j == (cols - 1)) {
            total += M[i][j];
        }
    }
}
document.write(`<br>total = ${total}`);

let table = "<table border=1>";
for (let i = 1; i <= 9; i++) {
    table += "<tr>";
    for (let j = 2; j <= 9; j++) {
        table += `<td>${j} x ${i} = ${i*j}</td>`;
    }
    table += "</tr>";
}
document.write(table);