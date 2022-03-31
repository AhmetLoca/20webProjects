var obj = {
    count : 10,
    doSomethingLater : function (){
        setTimeout(function(){ //the function executes on the window scope
            this.count++;
            console.log(this.count);
        }, 300);
    }
}

obj.doSomethingLater();

/*
eger dogru çalışmasını istersem bind(obj)'i eklemem lazım.

var obj = {
    count : 10,
    doSomethingLater : function (){
        setTimeout(function(){ //the function executes on the window scope
            this.count++;
            console.log(this.count);
        }.bind(obj), 300);
    }
}
*/

/*arrow function*/

var obj = {
    count : 10,
    doSomethingLater : function(){
        setTimeout( () => {
            this.count++;
            console.log(this.count);
        },300);
    }
}

obj.doSomethingLater();
/*
Burada bind işlemi yapmadığım halde nasıl ulaştım?
bu sefer nasıl this'im window'u temsil etmiyor?
Burada scope kavramı var. Eğer arrow function içerisinde
siz this'e ulaşmaya çalışıyorsanız en yakınındaki this'i 
size getirmeye çalışıyor.
Bu mantıkla da buradaki en yakınındaki this'imiz 
obj olduğu için bunu this olarak kabul ediyor.

Yani burada bind etmeye ihtiyacımız yok zaten o objeyi
temsil ediyor.

ARROW FUNCTİON'DA THİS YOK. GELENEKSEL FONKSİYONDA VAR.
*/