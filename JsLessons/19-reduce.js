/*
reduce azalmak, küçülmek.

dizideki tüm ögelerimizi bir işlevden geçiriyor.
ve diziyi sonunda tek bir değere düşürüyor.
*/

const numbers = [1, 2, 3, 5]

let total = 0
numbers.forEach(number => total += number )
                       //total = total + number

console.log(total)

/*******************************/
/*with reduce*/

//acc:accumulate
let total2 = numbers.reduce(function(acc,number){
     return acc + number
},5)

console.log(total2)