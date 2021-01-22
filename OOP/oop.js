// object
// let khoa = {};
// khoa.firstName = "Khoa";
// khoa.lastName = "Nguyễn";
// khoa.age = 18;

// khoa.printInfo = function() {
//     return `Fullname: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
// }


// let nhat = {
//     firstName: "Nhat",
//     lastName: "Bui",
//     age: 18,
//     printInfo: function() {
//         return `Fullname: ${this.firstName} ${this.lastName}, Age: ${this.age}`;
//     }
// }

//class
//contructor
//getter and setter
function Employee(fn, ln, a) {
    let email;
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;

    this.getEmail = function() {
        return email;
    }

    this.setEmail = function(e) {
        email = e;
    }

    this.printInfo = function() {
        return `Fullname: ${this.firstName} ${this.lastName}, Age: ${this.age}, Email: ${email}`;
    }
}


// let trung = new Employee();
// trung.firstName = "Trung";
// trung.lastName = "Nguyễn";
// trung.age = 18;

let khoa = new Employee("Khoa", "Nguyễn", 18);
let nhat = new Employee("Nhất", "Bùi", 18);
let trung = new Employee("Trung", "Nguyễn", 17);

let employees = [khoa, nhat, trung];

// for (let i = 0; i < employees.length; i++) {
//     document.write(`${employees[i].printInfo()} <br>`);
// }

// for (let emp of employees) {
//     if (emp.age >= 18) {
//         document.write(`${emp.printInfo()} <br>`);
//     }
// }

function Rectangle(w, h) {
    this.width = w;
    this.height = h;

    this.getArea = function() {
        return w * h;
    }

    this.getPrimeter = function() {
        return (w + h) * 2;
    }
}

//tạo 1 class có tên là Student
// có các thuộc tính:
// fullName,
// address,
// phoneNumber,
// age,
// email
// có các phương thức
// showInfo() hiển thị thông tin của từng Student

// tạo 3 object từ class Student
// hiển thị 3 object lên trên 1 bảng