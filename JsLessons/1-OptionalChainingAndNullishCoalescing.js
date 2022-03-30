/*
Optional Chaining(?.):

Chaining işlemini optional hale getiriyor.

 Chaining yaptığımız işlemde herhangi bir
property ya da çalıştırdığımız bir
fonksiyon yoksa script'imiz hata veriyor.

-> Bunu genelde müdahale edemediğimiz kodlarda kullanırız.

->  Script'in çalışmaya devam etmesi için kullanılır.
*/

const user = {
        name: 'ahmet',
        cat:{
           name:'boncuk'
        }
    }

console.log(user?.dog?.name);
/*optional chaining yaptık.*/
console.log("Is the code running?")
 

function sayHello(msg, callback) {
        console.log('Message', msg)
        callback?.()
}

sayHello('Ahmet Loca')
sayHello('Mehmet', () => console.log('callback run !'))

/*
     Nullish coalescing(??):
     (??) is logical operator that returns its right-hand side operand when its
     left-hand side operand is null or undefined.
     And otherwise returns its left-hand side operand.

const foo = null ?? 'default string';
console.log(foo);
//expected output: 'default string'

const baz = 0 ?? 42;
console.log(baz);
//expected output: 0

Bunu optional changing ile çok sık kullanıyoruz.
Çünkü kod hata vermemek için undefined dönüyor. 
Nullish coalescing'de sol taraf null ise sağ taraftaki işlemi çalıştırıyor.
*/


const user2 = {
        name: 'ahmet',
        cat: {
          name: 'pasa'
        },
        dog: {
          name: 'monti'
        }
}

console.log('Kopek adi', user2?.dog?.name ?? 'Bilinmiyor')

/*
Eğer data'nız dengesizse bunları kullan.
*/