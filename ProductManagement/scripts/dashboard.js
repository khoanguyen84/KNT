var products = ["Sony Xperia", "IP 6s", "IP 7s", "IP 10"];

function showProduct() {
    let tbProduct = document.getElementById("tbProduct");
    tbProduct.innerHTML = "";
    products.forEach(function(v, i) {
        tbProduct.innerHTML += `
                                <tr>
                                    <td>
                                        ${v}
                                    </td>
                                    <td>
                                        <a href="javascript:;" class="btn btn-success" onclick='editProduct(${i})'>Edit</a>
                                        <a href="" class="btn btn-danger">Remove</a>
                                    </td>
                                </tr>`
    })
    document.getElementById("productCount").innerHTML = `${products.length} products`;
}

function reset() {
    document.getElementById("productName").value = "";
}

function isNullOrEmpty(str) {
    if (str == null)
        return true;
    if (str.trim() == "")
        return true;
    return false;
    // return str == null || str == "";
}

function isExistProduct(pn) {
    for (let item of products) {
        if (item.toLowerCase() == pn.toLowerCase()) {
            return products.indexOf(item);
        }
    }
    return -1;
}

function format(str) {
    // str = str.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
    // return str;
    str = str.trim();
    let arr = str.split("");
    for (let i = 0; i < arr.length - 1; i++) {
        while (arr[i] == " " && arr[i + 1] == " ") {
            arr.splice(i, 1);
        }
    }
    return arr.join("");
}

function addProduct() {
    let productName = document.getElementById("productName").value;
    if (isNullOrEmpty(productName)) {
        alert("Product name is required.");
    } else {
        productName = format(productName);
        if (isExistProduct(productName) != -1) {
            alert(`Product name ${productName} is exist`);
        } else {
            products.push(productName);
            showProduct();
        }
    }
    reset();
}

function editProduct(id) {
    let newPN = prompt("Enter new product name: ");
    if (isNullOrEmpty(newPN)) {
        alert("Product name is required.");
    } else {
        newPN = format(newPN);
        let pos = isExistProduct(newPN)
        if (pos != -1 && pos != id) {
            alert(`Product name ${newPN} is exist`);
        } else {
            products[id] = newPN;
            showProduct();
        }
    }
}

function documentReady() {
    showProduct();
}

documentReady();