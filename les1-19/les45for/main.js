//1
// let x = 1
//  for(x = 1; x < 101; x++){
//     console.log(x)
//  }



//2
// let x = 100
//  for(x = 100; x > 101; x--){
//     console.log(x)
//  }



//3
// let x = 2
//  for(x = 2 ; x < 101 ; x += 2){
//     document.write( x + "  " )
//     console.log(x)
//  }



//4
// let arr = []
// for(i = 0 ; i < 10 ; i++){
//    arr[i] = "x"
// }
// console.log(arr)
// document.write(arr)



//5
// let arr = []
// for(i = 1 ; i < 11 ; i++){
//    arr.push(i)
// }
// console.log(arr)
// document.write(arr) 




//6
// let arr = []
// for(i = 0 ; i < 10 ; i++){
//    arr.push(Math.random().toFixed(2))
// }
// console.log(arr)
// document.write(arr)  




//7
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
//  for(i = 0; i < 8; i++){
//     if(arr[i] == 5){
//       alert("есть")
//     }
//  }



// //8
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  a = 0
//  for(i = 0; i < 10; i++){
//     a += arr[i]
//  }
//  console.log(a)


//9
let arr = [1, 2, 3, 4, 5, 6, 7]
a = 0
for (i = 0; i < 7; i++) {
    a = a += arr[i] / 7
}
console.log(a)