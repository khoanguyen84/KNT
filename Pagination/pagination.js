let data = [];
let size = 43;
let min = 5;
let max = 8;
let pagesize = 10;
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generateString() {
    let length = Math.floor(Math.random() * 4 + 5);
    let fristChar = upperCase[Math.floor(Math.random() * 26 + 1)];
    let theRestChars = lowerCase.substr(Math.floor(Math.random() * (26 - length) + 2), length - 1);
    return `${fristChar}${theRestChars}`;
}

function generateFullName() {
    return `${generateString()} ${generateString()}`;
}

function generateStudents(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(generateFullName());
    }
    return arr;
}

function showStudents(pagenumber, pagesize) {
    let tbStd = document.getElementById('tbStudents');
    tbStd.innerHTML = '';
    let resut = data.slice((pagenumber - 1) * pagesize, pagesize * pagenumber)
    resut.forEach(function(v, i) {
        tbStd.innerHTML += `
                            <tr>
                                    <td>${data.indexOf(v) + 1}</td>
                                    <td>${v}</td>
                                </tr>
                            `;
    })
}

function initPaging(pagenumber, pagesize) {
    let pages = Math.ceil(size / pagesize);
    let root = document.getElementById('paging');
    root.innerHTML = '';
    for (let i = 0; i < pages; i++) {
        root.innerHTML += `<li><button class="${((pagenumber-1) == i ? 'active' : '')}" onclick="paging(this)">${i+1}</button></li>`
    }
}

function paging(el) {
    let pagenumber = parseInt(el.innerText);
    showStudents(pagenumber, pagesize);
    initPaging(pagenumber, pagesize);
}

function init() {
    data = generateStudents(size);
    showStudents(1, pagesize);
    initPaging(1, pagesize);
}

function ready() {
    init();
}

ready();