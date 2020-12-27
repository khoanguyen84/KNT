let number1 = 9,
    number2 = 8,
    number3 = 7;
let aveScore = 7.8;
if (number1 > number2) {
    document.write(`Max is ${number1}`);
} else {
    document.write(`Max is ${number2}`);
}
document.write(`<br>`);
document.write(`Max is ${(number1 > number2 ? number1 : number2)}`);
document.write(`<br>`);

if (number1 > number2) {
    document.write(`${number1} > ${number2}`);
}

document.write(`<br>`);
if (number1 > number2) {
    if (number1 > number3) {
        document.write(`Max is ${number1}`);
    } else {
        document.write(`Max is ${number3}`);
    }
} else {
    if (number2 > number3) {
        document.write(`Max is ${number2}`);
    } else {
        document.write(`Max is ${number3}`);
    }
}
document.write(`<br>`);
document.write(`Max is ${(number1 > number2 && number1 > number3 ? number1 : (number2 > number3 ? number2 : number3))}`);
document.write(`<br>`);
if (aveScore >= 9) {
    document.write(`Xuất săc`);
} else if (aveScore >= 8) {
    document.write(`Giỏi`);
} else if (aveScore >= 7) {
    document.write(`Khá`);
} else if (aveScore >= 5) {
    document.write(`TB`);
} else {
    document.write(`Yếu`);
}

document.write(`<br>`);


if (aveScore >= 9) {
    document.write(`Xuất săc`);
} else {
    if (aveScore >= 8) {
        document.write(`Giỏi`);
    } else {
        if (aveScore >= 7) {
            document.write(`Khá`);
        } else {
            if (aveScore >= 5) {
                document.write(`TB`);
            } else {
                document.write(`Yếu`);
            }
        }
    }
}
document.write(`<br>`);
switch ((aveScore >= 9 ? 'xs' : (aveScore >= 8 ? 'g' : (aveScore >= 7 ? 'k' : (aveScore >= 5 ? 'tb' : 'y'))))) {
    case 'xs':
        {
            document.write(`Xuất săc`);
            break;
        }
    case 'g':
        {
            document.write(`Giỏi`);
            break;
        }
    case 'k':
        {
            document.write(`Khá`);
            break;
        }
    case 'tb':
        {
            document.write(`Trung bình`);
            break;
        }
    case 'y':
        {
            document.write(`Yếu`);
            break;
        }
    default:
        {
            document.write(`Điểm không hợp lệ`);
        }

}
document.write(`<br>`);

switch (Math.floor(aveScore)) {
    case 10:
    case 9:
        {
            document.write(`Xuất săc`);
            break;
        }
    case 8:
        {
            document.write(`Xuất săc`);
            break;
        }
    case 7:
    case 6:
        {
            document.write(`KHá`);
            break;
        }
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        {
            document.write(`Xuất săc`);
            break;
        }
    default:
        {
            document.write(`tháng ${month} không hợp lệ`);
        }

}
let month = 6;
document.write(`<br>`);
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        {
            document.write(`tháng ${month} có 31 ngày`);
            break;
        }
    case 2:
        {
            document.write(`tháng ${month} có 28 hoặc 29 ngày`);
            break;
        }
    case 4:
    case 6:
    case 9:
    case 11:
        {
            document.write(`tháng ${month} có 30 ngày`);
            break;
        }
    default:
        {
            document.write(`tháng ${month} không hợp lệ`);
        }
}


function Process() {
    let data = document.getElementsByTagName("input");
    let a = parseFloat(data[0].value);
    let b = parseFloat(data[1].value);
    let c = parseFloat(data[2].value);
    let result = document.getElementById("result");
    let delta = b ** 2 - 4 * a * c;
    if (delta > 0) {
        result.innerHTML = "phường trình có 2 nghiệm: ";
        result.innerHTML += `x1 = ${(-b - Math.sqrt(delta)/(2*a))} | `;
        result.innerHTML += `x2 = ${(-b + Math.sqrt(delta)/(2*a))}`;
    } else if (delta == 0) {
        result.innerHTML = "phường trình có nghiệm kép: ";
        result.innerHTML += `x1 = ${-b/(2*a)}`;
    } else {
        result.innerHTML = "phường trình vô nghiệm";
    }
}

function checkNumber() {
    let number = document.getElementById("number").value;
    let show = document.getElementById("show");
    if (isNaN(number)) {
        show.value = `${number} is not a number`;
    } else if (!Number.isInteger(parseFloat(number))) {
        show.value = `${number} is not a interger`;
    } else if (number <= 0 || number >= 1000) {
        show.value = `${number} is out of range`;
    } else {
        let power = number.toString().length;
        switch (power) {
            case 1:
                {
                    show.value = `${number} is a special number`;
                    break;
                }
            case 2:
                {
                    let n1 = number % 10;
                    let n2 = Math.floor(number / 10);
                    if (n1 ** power + n2 ** power === number) {
                        show.value = `${number} is a special number`;
                    } else {
                        show.value = `${number} is not a special number`;
                    }
                    break;
                }
            case 3:
                {
                    let tnumber = number;
                    let n1 = tnumber % 10;
                    tnumber = Math.floor(tnumber / 10);
                    let n2 = tnumber % 10;
                    let n3 = Math.floor(tnumber / 10);
                    if (n1 ** power + n2 ** power + n3 ** power == number) {
                        show.value = `${number} is a special number`;
                    } else {
                        show.value = `${number} is not a special number`;
                    }
                    break;
                }
            default:
                {
                    show.value = `invalid number`;
                }
        }
    }
}