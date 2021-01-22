class Phone {
    constructor(name, b, s) {
        this.memory = [];
        this.battery = b;
        this.name = name;
        this.status = s;
    }

    sendMessage(smg, reciver) {
        this.battery.decrementEnegy();
        this.memory.push(new Message(smg, _sent));
        reciver.memory.push(new Message(smg, _inbox));
    }
    status() {
        return this.battery.getEnegy() > 0;
    }
    showBattery() {
        return `${this.battery.getEnegy()}%`;
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

class Message {
    constructor(msg, type) {
        this.message = msg;
        this.type = type;
    }
}

let ip6Battery = new Battery(10);
let ip6 = new Phone("IP6", ip6Battery, true);

let nokiaBattery = new Battery(10);
let nokia = new Phone("Nokia", nokiaBattery, true);

let table = document.getElementsByTagName("tbody")[0];
let tr1 = table.children[0];
let tr2 = table.children[1];
let tr3 = table.children[2];
let tr4 = table.children[3];
const _ip6 = 1;
const _nokia = 2;
const _sent = 1;
const _inbox = 2;

function showMessage() {
    tr4.children[0].innerHTML = `<ul style='list-style:none;'>`;
    for (let msg of ip6.memory) {
        tr4.children[0].innerHTML += `<li class="${msg.type == _sent ? 'sent':'inbox'}">${msg.message}</li>`;
    }
    tr4.children[0].innerHTML += `</ul>`;

    tr4.children[1].innerHTML = `<ul style='list-style:none;'>`;
    for (let msg of nokia.memory) {
        tr4.children[1].innerHTML += `<li class="${msg.type == _sent ? 'sent':'inbox'}">${msg.message}</li>`;
    }
    tr4.children[1].innerHTML += `</ul>`;
}

function storeMemory(device) {
    if (device == _ip6) {

    }
    if (device == _nokia) {

    }
}

function send(device) {
    if (device == _ip6) {
        let msg = tr3.children[0].children[0].value;
        ip6.sendMessage(msg, nokia);
        showBattery(_ip6);
        reset(_ip6);
    }
    if (device == _nokia) {
        let msg = tr3.children[2].children[0].value;
        nokia.sendMessage(msg, ip6);
        showBattery(_nokia);
        reset(_nokia);
    }
    showMessage();
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
    showMessage();
}

ready();