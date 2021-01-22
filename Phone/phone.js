class Phone {
    constructor(name, b, s) {
        this.inbox = [];
        this.sent = [];
        this.battery = b;
        this.name = name;
        this.status = s;
    }

    // useBattery(b) {
    //     this.battery = b;
    // }
    sendMessage(smg, device) {
        this.battery.decrementEnegy();
        this.sent.push(smg);
        device.inbox.push(smg);
    }
    status() {
        return this.battery.getEnegy() > 0;
    }
    showBattery() {
        return `${this.battery.getEnegy()}%`;
    }

    showInbox() {
        return this.inbox.join("-");
    }
    showSent() {
        return this.sent.join("-");
    }

    getStatus() {
        return this.status;
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }
}

class Battery {
    constructor(e) {
        this.enegy = e;
    }
    decrementEnegy() {
        this.enegy > 0 ? this.enegy -= 1 : 0;
    }
    getEnegy() {
        return this.enegy;
    }
}
let ip6Battery = new Battery(10);
let ip6 = new Phone("IP6", ip6Battery, true);
ip6.inbox = ["aaaaaaaaaaa", "bbbbbbb", "cccccccccc"];
ip6.sent = ["1111111", "2222222222"];

let nokiaBattery = new Battery(10);
let nokia = new Phone("Nokia", nokiaBattery, true);
nokia.inbox = ["kkkkkkkk", "gggggggg", "uuuuuuuuu"];

let table = document.getElementsByTagName("tbody")[0];
let tr1 = table.children[0];
let tr2 = table.children[1];
let tr3 = table.children[2];
let tr4 = table.children[3];
const _ip6 = 1;
const _nokia = 2;


function showMessage(device) {
    if (device == _ip6) {
        tr4.children[0].innerHTML = `<ul>`;
        for (let msg of ip6.inbox) {
            tr4.children[0].innerHTML += `<li style='text-align:left;'>${msg}</li>`;
        }
        for (let msg of ip6.sent) {
            tr4.children[0].innerHTML += `<li style='text-align:right;'>${msg}</li>`;
        }
        tr4.children[0].innerHTML += `</ul>`;
    }
    if (device == _nokia) {
        tr4.children[1].innerHTML = `<ul>`;
        for (let msg of nokia.inbox) {
            tr4.children[1].innerHTML += `<li>${msg}</li>`;
        }
        tr4.children[1].innerHTML += `</ul>`;
    }
}

function send(device) {
    if (device == _ip6) {
        let msg = tr3.children[0].children[0].value;
        ip6.sendMessage(msg, nokia);
        showMessage(_nokia);
        showBattery(_ip6);
        reset(_ip6);
    }
    if (device == _nokia) {
        let msg = tr3.children[2].children[0].value;
        nokia.sendMessage(msg, ip6);
        showMessage(_ip6);
        showBattery(_nokia);
        reset(_nokia);
    }
}

function showBattery(device) {
    if (device == _ip6) {
        tr1.children[0].innerHTML = ip6.showBattery();
    }
    if (device == _nokia) {
        tr1.children[1].innerHTML = nokia.showBattery();
    }

}

function reset(device) {
    if (device == _ip6) {
        tr3.children[0].children[0].value = '';
    }
    if (device == _nokia) {
        tr3.children[2].children[0].value = ''
    }
}

function init() {
    showBattery(_ip6);
    showBattery(_nokia);
    tr2.children[0].children[0].innerHTML = ip6.name;
    tr2.children[2].children[0].innerHTML = nokia.name;
}

function power(device) {
    if (device == _ip6) {
        if (ip6.getStatus()) {
            ip6.turnOff();
            turnOff(_ip6);
        } else {
            ip6.turnOn();
            turnOn(_ip6);
        }
    }
    if (device == _nokia) {
        if (nokia.getStatus()) {
            nokia.turnOff();
            turnOff(_nokia);
        } else {
            nokia.turnOn();
            turnOn(_nokia);
        }
    }
}

function turnOn(device) {
    if (device == _ip6) {
        tr2.children[1].children[0].innerHTML = "Off";
        tr3.children[0].children[0].removeAttribute("disabled");
        tr3.children[1].children[0].removeAttribute("disabled");
    }
    if (device == _nokia) {
        tr2.children[3].children[0].innerHTML = "Off";
        tr3.children[2].children[0].removeAttribute("disabled");
        tr3.children[3].children[0].removeAttribute("disabled");
    }
}

function turnOff(device) {
    if (device == _ip6) {
        tr2.children[1].children[0].innerHTML = "On";
        tr3.children[0].children[0].setAttribute("disabled", true);
        tr3.children[1].children[0].setAttribute("disabled", true);
    }
    if (device == _nokia) {
        tr2.children[3].children[0].innerHTML = "On";
        tr3.children[2].children[0].setAttribute("disabled", true);
        tr3.children[3].children[0].setAttribute("disabled", true);
    }
}

function ready() {
    init();
    showMessage(_ip6);
    showMessage(_nokia);
}

ready();