let data = [];
let min = 10;
let max = 99;
let pagesize = 10;

function generateData(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(generateValue(min, max));
    }
    return arr;
}

function generateValue(min, max) {
    return `d_${Math.floor(Math.random()*(max-min+1) + min)}`;
}

function buildPaging(index, pagesize, data) {
    let ul = document.getElementById("paging");
    ul.innerHTML = "";
    let pageNumbers = Math.ceil(data.length / pagesize);
    for (let i = 0; i < pageNumbers; i++) {
        ul.innerHTML += `<li><a href='javascript:;' ${(i == index ? "class='active'" :'')} onclick='paginate(${i}, ${pagesize})'>${i+1}</a></li>`;
    }
}

function paginate(index, pagesize) {
    // buildPaging(index, pagesize, data);
    // showData(index, pagesize, data);
    search(index);
}

function showData(index, pagesize, data) {
    let shown = data.slice((index) * pagesize, (index + 1) * pagesize);
    let tbdata = document.getElementById("tbData");
    tbdata.innerHTML = '';
    shown.forEach(function(v, i) {
        tbdata.innerHTML += `<tr>
                                <td>${i+1}</td>
                                <td>${v}</td>
                            </tr>`
    });
}

function changePageSize(el) {
    // buildPaging(0, el.value, data);
    // showData(0, el.value, data);
    search(0);
}

function search(index) {
    let keyword = document.getElementById("search").value;
    let result = data.filter(e => { return find(keyword, e); });
    let pagesize = document.getElementById('pagesize').value;
    buildPaging(index, pagesize, result);
    showData(index, pagesize, result);
}

function find(keyword, value) {
    return value.indexOf(keyword) != -1;
}

function init() {
    data = generateData(43);
    // buildPaging(0, pagesize, data);
    // showData(0, pagesize, data);
    search(0);
}

function ready() {
    init();
}

ready();