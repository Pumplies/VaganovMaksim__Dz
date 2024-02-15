let a = ''
let b = ''
let op = ''
let arrNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
const arrOperators = ['x', '+', '/', '-']
const numbers = document.querySelector('.keys')
const vivod = document.querySelector('.unit')
const oper = document.querySelector('.operators')
const ravno = document.querySelector('.equals-to')
const del = document.querySelector(".delete");
let result = ''



numbers.onclick = (e) => {
    if (arrNumbers.includes(e.target.textContent)) {
        if (op == '' && b == '') {
            a = a + e.target.textContent
        }
       

        else {
            b = b + e.target.textContent
        }


    }
    vivod.textContent = a + op + b;
}

oper.onclick = (e) => {
    if (arrOperators.includes(e.target.textContent)) {
        op = e.target.textContent
    }

    vivod.textContent = a + op + b
}
ravno.onclick = (e) => {

    switch (op) {
        case "+":
            result = Number(a) + Number(b);
            break;
        case "-":
            result = Number(a) - Number(b);
            break;
        case "x":
            result = Number(a) * Number(b);
            break;
        case "/":
            if (b !== 0) {
                result = Number(a) / Number(b);
            } else {
                result = "На ноль делить нельзя";
            }
            break;
        default:
            result = "Введите пример";
            break;
    }
    vivod.textContent = result;

    a = result.toString();
    b = "";
    op = "";
};
del.onclick = (e) => {
    if (b !== "") {
        b = b.slice(0, -1);
    } else if (op !== "") {
        op = "";
    } else {
        a = a.slice(0, -1);
    }
    vivod.textContent = a + op + b
};