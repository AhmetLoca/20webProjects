/*
.filter() metotu dizideki ögelerimizi filtrelememizi 
sağlıyor.

*/

const numbers = [12, 5, 8, 138, 44]

console.log(numbers.filter(number => number > 100))

/***********************************/ 

const names = ['tayfun','ahmet','eCe','<3<3<','buket','mehmet']

console.log(names.filter(name => name.length <= 5))
console.log(names.filter(name => name.includes('bu')))

const search = (keyword, array) => array.filter(item => item.toLowerCase().includes(keyword.toLowerCase()))

console.log(search('Ce',names))


/**************************************/

const users = [
    {
        name:"Tayfun",
        age:27
    },
    {
        name:"Mehmet",
        age:27
    },
    {
        name:"Gökhan",
        age:32
    }
]

console.log(users.filter(user => user.age > 27))