/*
.every( , , ) -> 3 değer alır. .every(number,index,array)
Hepsinin koşula uyması gerekiyor.

*/
const array1 = [2,4,6,8,10]

const check1 = (number) => {
    return number >=2
}

const result1 = array1.every(check1)
console.log(result1)

/*---------------------------*/
const array2 = [2,4,6,7,10]

const result2 = array2.every((number, index, arr) => {
    console.log(index, arr)
    return number % 2 === 0
})

console.log(result2)


/*********************/

const users = [
    {
        name:'Tayfun',
        age:27
    },
    {
        name:'Mehmet',
        age:27
    },
    {
        name:'Gökhan',
        age:32
    }
]

console.log(users.every((user) => user.age === 27))
