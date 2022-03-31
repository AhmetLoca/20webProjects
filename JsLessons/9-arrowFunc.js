var obj = {
    num:100
}

//setting "num" on window to show how it gets picked up.
window.num=2020;

//A simple traditional function to operate on "this"
var add = function (a,b,c) {
    console.log(this)
    return this.num + a + b + c;
    //this'im object'i temsil ediyoR!
}

//cal
var result = add.call(obj, 1, 2, 3)//establishing the scope as "obj"
console.log(result) //result 106

//apply
const arr = [1, 2, 3]
var result = add.apply(obj,arr)//establishing the scope as "obj"
console.log(result) //result 106

//bind 
var result = add //establishing the scope as "window"
console.log(result(1,2,3)) //result 2026

/*
Arrow Function'lı örneği

var obj = {
    num:100
}

//Setting "num" on window to show how it gets picked up.
window.num = 2020; //yikes !

//Arrow Function

var add = (a,b,c) =>  this.num + a + b + c; 
//this'im arrow function'da window objesini temsil ediyoR !

//call
console.log(add.call(obj,1,2,3)) //result 106

//apply
const arr = [1,2,3]
console.log(add.apply(obj, arr)) //result 2026


//bind 
const bound = add.bind(obj)
console.log(bound(1,2,3)) //result 2026

*/