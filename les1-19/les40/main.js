// let a = prompt(" a=")
// switch(a){
//     case 1 : alert("aga") 
//     break;
//     case 2 : alert("aga")
// defoult : 
// alert("net")
// }






// 1
// let a = Number(prompt(" введите а "))
// if (a > 0) {
//     alert(a + 1)
// } else {
//     alert(+a)
// }

let a = Number(prompt(" введите а "))
switch (a) {
    case a > 0:
        alert(a + 1);
        break;
    case a < 0:
        alert(a);
        break;
    default:
        alert("Нет таких значений");
}









//2
// let a =Number (prompt(" введите а ") )
// if ( a > 0 ){
//     alert( + (a + 1 ))
// }else {
//     alert(+ (a - 2))
// }






//3
// let a =Number (prompt(" введите а ") )
// if ( a > 0 ){
//     alert( + (a + 1 ))
// }
// else if ( a == 0){
//     alert(+( a + 10))
// }
// else {
//     alert(+ (a -2))
// }






//4
// let a = Number(prompt("введ чис"))
//     b = Number(prompt("введ чис"))
//     c = Number(prompt("введ чис"))
// if( a > 0 && b < 0 && c > 0){ alert("3")
// }
//     else if(a > 0 && b < 0 && c < 0){
//         alert("1")
//     }
//     else if (a > 0 && b > 0 && c < 0){
//         alert("2")
//     }
//     else if (a < 0 && b > 0 && c < 0){
//         alert("1")
//     }
//     else if (a < 0 && b < 0 && c < 0){
//         alert("0")
//     }
//     else if (a > 0 && b > 0 && c > 0){
//         alert("3")
//     }
//     else if (a < 0 && b > 0 && c > 0){
//         alert("2")
//     }
//     else if (a < 0 && b < 0 && c > 0){
//         alert("1")
//     }
//     console.log(a)






//5
//let a = Number(prompt("введ чис"))
//     b = Number(prompt("введ чис"))
//     c = Number(prompt("введ чис"))
// if( a > 0 && b < 0 && c > 0){ alert("3")
// }
//     else if(a > 0 && b < 0 && c < 0){
//         alert("2")
//     }
//     else if (a > 0 && b > 0 && c < 0){
//         alert("1")
//     }
//     else if (a < 0 && b > 0 && c < 0){
//         alert("2")
//     }
//     else if (a < 0 && b < 0 && c < 0){
//         alert("3")
//     }
//     else if (a > 0 && b > 0 && c > 0){
//         alert("0")
//     }
//     else if (a < 0 && b > 0 && c > 0){
//         alert("1")
//     }
//     else if (a < 0 && b < 0 && c > 0){
//         alert("2")
//     }
//     console.log(a)





//6
// let a = Number(prompt("введ чис  a "))
//      b = Number(prompt("введ чис  b"))
//      if( a>b ){
//          alert(a)
//      }else if ( b>a){
//          alert(b)
//      }



//7
// let a = Number(prompt("введ чис  a "))
// b = Number(prompt("введ чис  b"))
// if (a < b) {
//     alert("1")
// } else if (b < a) {
//     alert("2")
// }







//8
// let a = Number(prompt("введ чис  a "))
// b = Number(prompt("введ чис  b"))
// if (a > b) {
//     alert(a)
//     alert(b)
// } else if (b > a) {
//     alert(b)
//     alert(a)

// }



//9
// let a = Number(prompt("введ чис  a "))
// b = Number(prompt("введ чис  b"))
// if (a >= b) {
//     alert("a= " + b)
//     alert("b= " + a)
// } else {
//     alert("a= " + a)
//     alert("b= " + b)
// }




//10
// let a = Number(prompt("введ чис  a "))
// b = Number(prompt("введ чис  b"))
// if (a > b || a < b) {
//     alert("a= " + (a + b))
//     alert("b= " + (a + b))
// } else {
//     alert("a= 0 ")
//     alert("b= 0")
// }



//11
// let a = Number(prompt("введ чис  a "))
// b = Number(prompt("введ чис  b"))
// if (a < b) {
//     alert("a= " + b)
//     alert("b= " + b)
// } else if (b < a) {
//     alert("a= " + a)
//     alert("b= " + a)
// } else {
//     alert("a= 0 ")
//     alert("b= 0")
// }





















//12
// let a = Number(prompt("введ чис  a "))
// b = Number(prompt("введ чис  b"))
// c = Number(prompt("введ чис  c"))
// if (a > b && c) {
//     alert("a   " + a)
// } else if (b > a && c) {
//     alert("b   " + b)
// } else if (c > a && b) {
//     alert("c   " + c)
// }






//13
// let a = Number(prompt("введ чис  a "))
// b = Number(prompt("введ чис  b"))
// c = Number(prompt("введ чис  c"))
// if (a > b && a < c) {
//     alert("a   " + a)
// } else if (b > a && b < c) {
//     alert("b   " + b)
// } else if (c > b && c < b) {
//     alert("c   " + c)
// }



//14
// let a = Number(prompt("введ чис  a "))
// b = Number(prompt("введ чис  b"))
// c = Number(prompt("введ чис  c"))
// if (a < b && a < c) {
//     alert(a)
// } else if (b < a && b < c) {
//     alert(b)
// } else if (c < a && c < b) {
//     alert(b)
// }
// if (a > b && a > c) {
//     alert(a)
// } else if (b > a && b > c) {
//     alert(b)
// } else if (c > a && c > b) {
//     alert(b)
// }












//15
// let a = Number(prompt("введ чис  a "))
// b = Number(prompt("введ чис  b"))
// c = Number(prompt("введ чис  c"))
// if (a < b && a < c) {
//     alert(b + c)
// } else if (b < a && b < c) {
//     alert(a + c)
// } else {
//     alert(a + b)
// } 



// //16
// let a = Number(prompt("введ чис  a "))
// b = Number(prompt("введ чис  b"))
// c = Number(prompt("введ чис  c"))
// if (a > b && b > c || a < b && b < c) {
//     alert(a * 2)
//     alert(b * 2)
//     alert(c * 2)
// } else {
//     alert(a *= -1)
//     alert(b *= -1)
//     alert(c *= -1)


// }









// let a = Number(prompt("a=2+2"))

// switch (a) {
//     case 3:
//         alert('Маловато');
//         break;
//     case 4:
//         alert('В точку!');
//         break;
//     case 5:
//         alert('Перебор');
//         break;
//     default:
//         alert("Нет таких значений");
// }



// l = 'r';

// switch (l) {

//     case 'r':

//         a = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

//         break;

//     case 'e':

//         a = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

//         break;

// }

// alert(a);