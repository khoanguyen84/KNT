// class Student {
//     constructor(firstName, lastName, age, score) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.score = score;
//     }
// }

// class Employee {
//     constructor(firstName, lastName, age, salary) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.salary = salary;
//     }
// }

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    showInfo() {
        return `${this.firstName} ${this.lastName}, ${this.age}`;
    }

    static slogen() {
        return "still breath still alive";
    }
}

class Student extends Person {
    constructor(fn, ln, a, s) {
        super(fn, ln, a);
        this.score = s;
    }
    showInfo() {
        return `${super.showInfo()}, ${this.score}`;
    }
}

class Employee extends Person {
    constructor(fn, ln, a, w) {
            super(fn, ln, a);
            this.workHours = w;
            this.salary = () => { return this.workHours * 50000 };
        }
        // setSalary() {
        //     this.salary = this.workHours * 50000;
        // }
    getSalary() {
        return this.salary();
    }
}