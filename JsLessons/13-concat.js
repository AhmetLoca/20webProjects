/*
.concat():
2 veya daha fazla diziyi birleştirip tek bir dizi
haline getiriyor.

*/

const array1 = ['a','b','c']
const array2 = ['d','e','f']

const newArray = array1.concat(array2, 'g','h')

console.log(newArray)

const numbers = [[1,2],[3,4]]
console.log(numbers.concat([[5,6]]))