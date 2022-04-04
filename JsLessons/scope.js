//scope = kapsam
//var   -> function scope -> global scope
//let   -> block scope({},())
//const -> block scope

/*
2015'ten önce sadece 'var' vardı. ( variable )

ES6 ile birlikte let ve const geldi.

let -> mutable -> değişebilir
const -> immutable -> değişemez
(yani ben const ile oluşturduğum bir değere yeni
    bir değer atayamam.)

*/

const x        //WRONG   Dogrusu -> const x = 'deneme'
 x = 'deneme'
 console.log(x)  
 
 let y
 y ='deneme'
 console.log(y)  //TRUE


 /*********** */

 var a = 5
 if(true) {
     let a = 10
     console.log(a)
 }
console.log(a)
//10 , 5