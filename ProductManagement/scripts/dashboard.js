// var products = ["Sony Xperia", "IP 6s", "IP 7s", "IP 10"];
var products = [];
if (window.localStorage.getItem("products") != null) {
    products = JSON.parse(window.localStorage.getItem("products"));
} else {
    window.localStorage.setItem("products", JSON.stringify(["Sony Xperia", "IP 6s", "IP 7s", "IP 10"]));
}

function showProduct() {
    let tbProduct = document.getElementById("tbProduct");
    tbProduct.innerHTML = "";
    products.forEach(function(v, i) {
        tbProduct.innerHTML += `
                                <tr id="tr_${i}">
                                    <td>
                                        ${v}
                                    </td>
                                    <td>
                                        <a href="javascript:;" class="btn btn-warning" onclick='inlineEditProduct(${i})'>Inline Edit</a>
                                        <a href="javascript:;" class="btn btn-danger d-none" onclick='inlineEdit(${i})'>Inline Update</a>
                                        <a href="javascript:;" class="btn btn-success" onclick='editProduct(${i})'>Edit</a>
                                        <a href="javascript:;" class="btn btn-success" onclick='getProduct(${i})'>Modify</a>
                                        <a href="javascript:;" class="btn btn-danger" onclick='remove(${i})'>Remove</a>
                                    </td>
                                </tr>`
    })
    document.getElementById("productCount").innerHTML = `${products.length} products`;
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
        let productId = parseInt(document.getElementById("productId").value);
        //add new product
        if (productId == -1) {
            if (isExistProduct(productName) != -1) {
                alert(`Product name ${productName} is exist`);
            } else {
                products.push(productName);
                window.localStorage.setItem("products", JSON.stringify(products));
                reset();
            }
        }
        //update product by id
        else {
            let pos = isExistProduct(productName)
            if (pos != -1 && pos != productId) {
                alert(`Product name ${productName} is exist`);
            } else {
                products[productId] = productName;
                window.localStorage.setItem("products", JSON.stringify(products));
                reset();
            }
        }
        showProduct();
    }
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

function getProduct(id) {
    let productName = products[id];
    let addEditForm = document.getElementsByClassName("add-product")[0];
    addEditForm.children[0].value = productName;
    addEditForm.children[1].text = "Update";
    addEditForm.children[2].classList.remove('d-none');
    document.getElementById("productId").value = id;
    document.getElementById("form-title").innerHTML = "Update Product";
}

function reset() {
    let addEditForm = document.getElementsByClassName("add-product")[0];
    addEditForm.children[0].value = "";
    addEditForm.children[1].text = "Add";
    addEditForm.children[2].classList.add('d-none');
    document.getElementById("productId").value = -1;
    document.getElementById("form-title").innerHTML = "Add New Product";
}

function inlineEditProduct(id) {
    let tr = document.getElementById(`tr_${id}`);
    let data = tr.children[0].innerText;
    tr.children[0].innerHTML = `<input type="text" id="pn_${id}" value="${data}"/> <a href='javascript:;' onclick="inlineReset(${id})"><i style="color:red" class="fa fa-times"></i></a>`;
    tr.children[1].children[0].classList.add('d-none');
    tr.children[1].children[1].classList.remove('d-none');
    let pnInupt = document.getElementById(`pn_${id}`);
    pnInupt.focus();
    pnInupt.setSelectionRange(pnInupt.value.length, pnInupt.value.length);
}

function inlineReset(id) {
    let tr = document.getElementById(`tr_${id}`);
    let oldData = products[id];
    tr.children[0].innerHTML = oldData;
    tr.children[1].children[0].classList.remove('d-none');
    tr.children[1].children[1].classList.add('d-none');
}

function inlineEdit(id) {
    let productName = document.getElementById(`pn_${id}`).value;
    let pos = isExistProduct(productName)
    if (pos != -1 && pos != productId) {
        alert(`Product name ${productName} is exist`);
    } else {
        products[id] = productName;
        window.localStorage.setItem("products", JSON.stringify(products));
        inlineReset(id)
    }
}

function remove(id) {
    if (id < 0 || id >= products.length) {
        // alert(`Can not found id = ${id}`);
        showMessage(`Can not found id = ${id}`, 0);
    } else {
        let confirmed = window.confirm('Are you sure remove this product?');
        if (confirmed) {
            products.splice(id, 1);
            window.localStorage.setItem("products", JSON.stringify(products));
            showMessage(`Product has been removed success.`, 1);
            showProduct();
        }
    }
}

function showMessage(msg, status) {
    let msgArea = document.getElementById('message');
    let message = msgArea.children[0];
    message.innerText = msg;
    msgArea.className = "";
    msgArea.classList.add('row');
    switch (status) {
        //error
        case 0:
            {
                msgArea.classList.add('error');
                break;
            }
            //success
        case 1:
            {
                msgArea.classList.add('success');
                break;
            }
    }
    autoCloseMessage();
}

function closeMessage() {
    let msgArea = document.getElementById('message');
    msgArea.classList.add('d-none');
}

function autoCloseMessage() {
    setTimeout(() => {
        closeMessage();
    }, 10000);
}

function documentReady() {
    showProduct();
}

documentReady();