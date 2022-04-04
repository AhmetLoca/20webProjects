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


/*Ornek-1*/
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium'
];
console.log(materials.map(material => material.length));

/*
console.log(materials.map(function (material){
    return material.length
}))
*/

/*Ornek-2*/
function topla(a1, b1) {
    return a1 + b1
}

const toplaArrow = (a1,b1) => a1 + b1

console.log(topla(1,4))
console.log(toplaArrow(1,4))

/*Ornek-3*/
const toplaArrow2 = (a1,b1) => {
    return {
        firstNumber: a1,
        secondNumber: b1,
        total: a1 + b1
    }
}
console.log(toplaArrow2(1,4))

/*
Ornek-3'e eşit / Advanced syntax

const toplaArrow2 = (a1,b1) => ({
        firstNumber: a1,
        secondNumber: b1,
        total: a1 + b1    
})

console.log(toplaArrow2(1,4))

*/

/*
Does not have its own bindings this or super, and should not be 
used as methods.
*/
document.querySelector('h3').addEventListener('click', function(){
    this.classList.toggle('active')
})

/*
Yukarıdaki kodadaki fonksiyonu arrow function'a çevirseydim çalışmazdı.

document.querySelector('h3').addEventListener('click', () => {
    this.classList.toggle('active')
})

this, bir window objesi ve kendisine ait bir this'i yok.
*/



/*
Does not have new.target keyword.

const Test = () => {
    if(!new.target) {
        throw 'Test new olmadan başlatılamaz!'
    }
}

const test = new Test()

//Hata verecektir.
*/

/*
Not suitable for call, apply and bind methods, which
generally rely on establishing a scope.

Can not be used as constructors.

Can not use yield, within its body.

*/