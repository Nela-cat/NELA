//ищет истинные

// let bool = 1 || 0
// let bol = 1 || 1
// let bl = 0 || 1
// let b = 0 || 0
// alert(b)
// alert(bol)
// alert(bool)
// alert(bl)


// let x = prompt("работа магазина")
// if (x < 10 || x > 18) {
//     alert("не  работает")
// } else {
//     alert("работает")
// }




// амперсант
// ищет лож

// let bool = 1 && 1
// let bol = 0 && 1
// let bl = 1 && 0
// let b = 0 && 0
// alert(bool)
// alert(bol)
// alert(bl)
// alert(b)


// alert(1 && 0)
// alert(1 && 5)

// alert(null && 5)

// alert(1 && "str")



// alert(1 && 2 && null && 3)


// alert(a && b || c && d)



// let x = !1
// let w = !0
// alert(x)
// alert(w)


// alert(!!"sirop")
// alert(!"sirop")


// alert(!!null)




// alert(alert(1) && 2 || alert(3))



// амперсанты выше по разряду как умночения поэтому он первый
// alert(null || 2 && 3 || 4)


// let x = prompt(" кто ты ?")
// if (x && "оператор") {
//     alert("ваши действия не заг")
// } else if (x && " админ ") {
//     let q = prompt(" введите пароль")
//     if (!"отмена") {
//         alert("действия")
//     } else if (q || 222) {
//         alert("привет")
//     } else("не верный пароль")
// } else {
//     alert("я вас не знаю")
// }






// let x = prompt(" Кто ты?")
// if (x == "админ") {
//     let f = prompt("Пароль?")
//     if (f == 111) {
//         alert("Приветствую Вас!")
//     } else if (f != 111) {
//         alert("Неверный пароль")
//     }


// } else if (x != "админ" && "22") {
//     alert("Я вас не знаю")

// } else {
//     alert("Отмена")
//     alert("Ваши действия не зарег. на этом сайте")
// }





// let x = prompt(" Кто ты?")

// if (!x == "а") {
//     alert("Я вас не узнаю")

// } else if (c == "админ") {
//     let t = prompt("введите пароль")
//     console.log(t)
//     if (t == 111) {
//         alert("прив")
//     }

// }





let x = prompt("Кто ты?");

if (x == "админ") {

    let p = prompt("Пароль?");

    if (p == "111") {
        alert("Здравствуйте!");
    } else if (p == "отмена" || p == "  ") {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }

} else if (x == "отмена" || x == " ") {
    alert("Ваши действия не зарегестрированы на этом сайте");
} else {
    alert("Я вас не знаю");
}