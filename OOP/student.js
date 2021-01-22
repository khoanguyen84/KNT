// function Student(fn, ad, pn, a, e, s1, s2, s3) {
//     this.fullName = fn;
//     this.address = ad;
//     this.phoneNumber = pn;
//     this.age = a;
//     this.email = e;
//     this.score1 = s1;
//     this.score2 = s2;
//     this.score3 = s3;

//     this.getAveScore = function() {
//         return (this.score1 + this.score2 + this.score3) / 3;
//     }
// }

class Student {
    constructor(fn, ad, pn, a, e, s1, s2, s3) {
        this.fullName = fn;
        this.address = ad;
        this.phoneNumber = pn;
        this.age = a;
        this.email = e;
        this.score1 = s1;
        this.score2 = s2;
        this.score3 = s3;
    }
    getAveScore() {
        return (this.score1 + this.score2 + this.score3) / 3;
    }
}

let std1 = new Student("C", "Huế", "113", 18, "a@gmail.com", 5.6, 7.8, 6.5);
let std2 = new Student("A", "Huế", "113", 18, "b@gmail.com", 6.6, 9.8, 6.5);
let std3 = new Student("B", "Huế", "113", 18, "b@gmail.com", 7.6, 7.8, 4.5);

let students = [std1, std2, std3];

let test = students.sort(function(a, b) {
    if (a.fullName > b.fullName)
        return 1;
    if (a.fullName < b.fullName)
        return -1;
    return 0;
})

function showData() {
    let tbody = document.getElementsByTagName("table")[0].children[1];
    students.forEach(function(v, i) {
        tbody.innerHTML += `<tr>
                                <td>${v.fullName}</td>
                                <td>${v.address}</td>
                                <td>${v.phoneNumber}</td>
                                <td>${v.age}</td>
                                <td>${v.email}</td>
                                <td>${v.score1}</td>
                                <td>${v.score1}</td>
                                <td>${v.score3}</td>
                                <td>${v.getAveScore().toFixed(2)}</td>
                            </tr>`
    })
}

showData();