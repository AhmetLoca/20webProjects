let book = {
    title : "1984", 
    publishDate : 1949,
    author: "George Orwell"
};
                 //property 
// console.log(book.publishDate);

// book.author = "Ahmet";
// console.log(book.author);

// console.log(book);


// let prop = "publishDate";
// console.log(book[prop]);

/*
Neden erişiriz?
Dinamik olarak erişmek istiyorsak.
Bir döngünün içine tek tek yazdırmak istiyorsak bunu kullanmamız gerekiyor.
*/

/*
Objeleri nasıl dögüye sokabiliriz?

döngü : for in

Şu ana kadar gördüğümüz for döngüleriyle döngüye sokamayız. Çünkü 
bunların bir index'i yok. Onun yerine property'leri var. Property'ileri
almamız gerekiyor onun içinde javascript'e kullanacağımız döngü 

for in


for in döngüsü ile içerideki anahtarları alacağız.(property'lere aynı
zamanda anahtarda denilebiliyor.)


*/

// for(let prop in book){
//     console.log(prop, book[prop]);
// }



// for(let i=1; i<=10; i++){  //i: satırlar
//     let row = [];
//     for(let j = 1; j <=10; j++ ){ //j: sutünlar
//         row[j-1] = i*j;
//     }
//     console.log(row);
// }


//Primitif değerler değer ile atanır

/*
primitif değer neydi? sayı,boolean değerler

*/

// let a = 5;
// let b = a;

// console.log(a,b);
// a= 10;
// console.log(a,b);


// /*
// stringler javascript'te kompozit bir eleman değil
// primitif değer oldugu için  onlar üzerinde bir değişiklik yaparsak
// yukarıdakine benzer sonuc elde edeceğiz.
// */

// let x = "abc";
// let y = x;

// console.log(x,y);

// x += "def";

// console.log(x,y);


//Kompozit değerler referans ile atanır.

// let a = [1,2,3];  
// let b = a;

// console.log(a,b);

// a[0]=5;


// console.log(a,b);


let a = [1,2,3,4];
let b = [...a]; //=[1,2,3]


console.log(a,b);

a[0]=5;

console.log(a,b);