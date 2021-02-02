let data = [];
let size = 43;
let min = 5;
let max = 8;
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generateString() {
    let length = Math.floor(Math.random() * 4 + 5);
    let fristChar = upperCase[Math.floor(Math.random() * 26)];
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

function showStudents(pagenumber, list) {
    let pagesize = parseInt(document.getElementById('pagesize').value);
    let tbStd = document.getElementById('tbStudents');
    tbStd.innerHTML = '';
    let result = list.slice((pagenumber - 1) * pagesize, pagesize * pagenumber)
    result.forEach(function(v, i) {
        tbStd.innerHTML += `
                            <tr>
                                    <td>${list.indexOf(v) + 1}</td>
                                    <td>${v}</td>
                                </tr>
                            `;
    })
}

function initPaging(pagenumber, list) {
    let pagesize = parseInt(document.getElementById('pagesize').value);
    let size = list.length;
    let pages = Math.ceil(size / pagesize);
    let root = document.getElementById('paging');
    root.innerHTML = '';
    for (let i = 0; i < pages; i++) {
        root.innerHTML += `<li><button class="${((pagenumber-1) == i ? 'active' : '')}" onclick="paging(this)">${i+1}</button></li>`
    }
}

function paging(el) {
    let pagenumber = parseInt(el.innerText);
    search(pagenumber);
}

function changePageSize() {
    search(1);
}

function search(pagenumber) {
    let keyword = document.getElementById("keyword").value;
    let result = data.filter(e => { return find(e, keyword) });
    showStudents(pagenumber, result);
    initPaging(pagenumber, result);
}

function find(str, kw) {
    return str.toLowerCase().indexOf(kw.toLowerCase()) != -1;
}

function find2(obj, kw) {
    return find(obj.fn, kw) || find(obj.address, kw);
}

function init() {
    data = generateStudents(size);
    showStudents(1, data);
    initPaging(1, data);
}

function ready() {
    init();
}

ready();