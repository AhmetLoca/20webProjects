/*
find(user,index,array) metodu.

Dizi içinde belirlediğimiz koşula uygun olan
ilk elemanı seçiyor. Eğer koşula uygun bir 
eleman bulamazsa geriye undefined döndürüyor.
*/


const numbers = [5, 12, 8, 130, 44]

console.log(numbers.find(number => number >10))
//10'dan büyük olan ilk elemanı döndürecek.


const users = [
    {
        id:1,
        name:'Tayfun'
    },
    {
        id:2,
        name:'Mehmet'
    },
    {
        id:3,
        name:'Ahmet'
    }
]
       //user objemin hepsine eşit
console.log(users.find(user => user.id === 2))

/*
const foundUser = users.find(function(user){
    return user.id === 2
})
console.log(foundUser)
*/