function sum(n1, n2) {
    console.log(n1 + n2);
}

//validation
function total(n1, n2) {
    //validation 
    return n1 + n2;
}


function division(n1, n2) {
    if (n2 == 0) {
        return undefined;
    }
    return n1 / n2;
}

function swap(n1, n2) {
    let t = n1;
    n1 = n2;
    n2 = t;
    console.log(`n1: ${n1}, n2: ${n2}`);
}

let n1 = 5;
let n2 = 7;
console.log(`n1: ${n1}, n2: ${n2}`);
// debugger;
swap(n1, n2);
console.log(`n1: ${n1}, n2: ${n2}`);


// cho phép người dùng nhập vào 1 giá trị số nguyên
// sinh một mảng gồm các số nguyên từ 10 đến 90, với kích cỡ của mảng là giá trị mà người dùng nhập ở tren
// hiển thị mảng trên
// tính tổng các giá trị trong mảng