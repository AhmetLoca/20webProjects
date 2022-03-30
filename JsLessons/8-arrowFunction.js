function sayHello(name){
    return `hello ${name}`
}

//Arrow Function
const sayHello2 = (name) => {
    return `hi ! ${name}`
}

/*
Tek bir parametre gönderiyorsa parantezlere 
ihtiyacımız yok.

const sayHello2 = name => `hello2 ${name}`
console.log(sayHello2('Astronomi'))

*/

const sayHello3 = (name, surname) => `hello ! ${name} ${surname}` 


console.log(sayHello('Ahmet'))
console.log(sayHello2('Astronomi'))
console.log(sayHello3('Tayfun', 'Erbilen'))



//Curly Brackets -> {}
//Backtick       -> (`)