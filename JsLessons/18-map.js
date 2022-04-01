/*

Dizideki bütü elemanları bir işlemden geçirmemizi
sağlıyor. 
Geriye dizi ögesini değiştirerek dönderebiliyoruz.
Ya da yeni eklemeler yapabiliyoruz.

*/


/*Map kullanmadan yaptıgımız*/

const numbers = [1,4,9]

numbers.forEach((number, index) => {
    numbers[index] =number *3;
})

console.log(numbers)

/********************************* */

/*Map metodu kullanarak*/

const numbers2 = [1, 5, 9]
const result = numbers2.map((number) => number * 5
)

console.log(result)



/*map'in objelerde kullanımı*/

const users = [
    {
        name:'Tayfun',
        surname:'Erbilen',
        age:27
    },
    {
        name:'Mehmet',
        surname:'Seven',
        age:27
    }
]

const date = new Date()
const result2 = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        yearOfBirth: date.getFullYear() - user.age
    }
})

console.log(users) //Normalde olan
console.log(result2) //Manipule ettiğimiz


/*todos ornegi*/

const todos = [
    {
        id:1,
        name:'Todo 1',
        completed:false
    },
    {
        id:2,
        name:'Todo 2',
        completed:false
    }
]

console.log(todos.map(todo => {
    if(todo.id === 2){
        todo.completed = true;
    }
    return todo;
}))


