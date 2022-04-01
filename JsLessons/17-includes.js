/*
.includes('',index)

.includes('mehmet',3)
mehmet'i aramaya 3. index'ten başlasın.
*/

const numbers = [1,2,3,4,5]
console.log(numbers.includes(4))

/******************/
const addNumber = number => {
    if(!numbers.includes(number)){
       numbers.push(number)
    }
}
addNumber(5)
addNumber(6)

console.log(numbers)