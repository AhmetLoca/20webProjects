/*
(3 dots syntax(...))
spread -> objeyi veya diziyi yay. (spread=yaymak)

rest -> package. 
Yayılmış elemanları alıp bir array'e aktarıyor.

Quick Reference:
A function definition can have only one ...restParam.
-> The rest parameter must be the last parameter 
in the function definition.

foo(...one, ...two, ...three)  WRONG
foo(...wrong, arg2, arg3)      WRONG
foo(arg1, arg2, ...correct)    TRUE

The arguments object is not a real array, 
while rest parameters are Array.
restParam, array olduğu için 
sort,map,forEach or pop kullanabiliriz.

Birden fazla spread kullanabiliriz. 
Birden fazla rest KULLANAMAYIZ.
*/

// const user = ['Ahmet','Mehmet', 'Gökhan','Tayfun','Oğuzhan']

// function getName(name1, name2, ...otherNames) {
//     console.log(name1)
//     console.log(name2)
//     console.log(otherNames)
// }

//getName(user[0],user[1],user[2])  === getName(...user)
//getName(...user)

const user = {
    name:'Tayfun',
    surname:'Erbilen'
}

const newUser = {
    ...user,
    surname:'Çelik'
}

//newUser.surname = 'Çelik'
console.log(user)
console.log(newUser)

// *****************************

// Bu ornegi cok sık kullanıyoruz.
function request(opts = {}) {
    const options = {
        error:true,
        success:true,
        ...opts
    }
    console.log(options)
}

request({
    error:false
})

request({
    success:false
})

request()

// ***********************
const numbers = [1, 2, 3, 4]
console.log([0, ...numbers, 5])  //Burada array'i kopyaladık.

// *************************

const titles =document.querySelectorAll('h3');
//NodeList'ten array'e dönüştürelim.

[...titles].map(title => console.log(title))
