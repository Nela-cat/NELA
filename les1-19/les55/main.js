let name = document.getElementById("name")
let card_name = document.getElementById("card_name")


let date = document.getElementById("date")
let card_month = document.getElementById("card_month")


let number = document.getElementById("number")
let card_number = document.getElementById("card_number")


name.addEventListener("keyup", setName)

date.addEventListener("mouseup", setData)

number.addEventListener("keyup", setNumber) /*событие*/


function isNum(num) {
    return !/[^.[0-9, " "]]*/.test(num)
}



function setName(x) {
    x.preventDefault
    card_name.innerHTML = name.value
}

function setData(x) {
    x.preventDefault
    card_month.innerHTML = date.options[date.selectedIndex].value
}

function setNumber(x) {
    x.preventDefault
    if (isNum(number.value)) {
        card_number.innerHTML = number.value
    } else {
        alert("Допускаются только цифры")
    }
    discover(number.value)
}