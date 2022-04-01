/*
No binding of arguments

Arrow functions do not have their own arguments object.
Thus, in this example, arguments is a reference
to the arguments of the enclosing scope.

*/

function hello(name, surname){
    console.log(arguments)
}

hello('tayfun','erbilen')

/*
Eğer bu arrow function olsa idi:


const hello = (name, surname) => {
    console.log(arguments)

}
Böyle bir arguments' a ulaşamayacaktım.
*/

/****************** */



/*
Arrow functions cannot be used as constructors and
will throw an error when used with new.

var Foo = () => {};
var foo = new Foo(); //TypeError: Foo is not a constructor

*/

/*
Use of prototype property

Arrow function do not have a prototype property.

var Foo = () => {};
console.log(Foo.prototype); //undefined.


*/




/*
Parsing order
-------------------
let callback;

callback = callback || function() {}; //ok

callback = callback || () => {};
//SyntaxError: invalid arrow-function arguments

callback = callback || (() => {}); //ok
*/




/*
this is an Immediately Invoked Function Expression

(() => 'foobar')();
//Returns 'foobar'

--------------

(() => {
    console.log('hello')
})


*/


/*
const names = ['Ahmet','Mehmet','Tayfun]

console.log(names.map(name => name + '-Instructor'))
//return: ['Ahmet - Instructor', 'Mehmet - Instructor', 'Tayfun - Instructor']

*/


/*
const users = [
    {
        name:'Tayfun',
        age:28,
        skills: ['php','css]
    },
    {
        name:'Mehmet',
        age:29,
        skills:['Js','nodeJs','css']
    }
]
console.log(users.filter(user => user.skills.includes('php')))

UZUN VERSİYONU

console.log(users.filter(function(user){
   return user.skills.includes('php')
}))

*/
