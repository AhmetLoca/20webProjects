/*
Async ifadesini sadece fonksiyonlarda kullanıyoruz.
Bir fonksiyon tanımlanırken ya normal fonksiyon ya da
async olarak tanımlanabilir.

Biliyorsunuz ki JavaScript'e her şey asenkron olarak
çalışıyor. 
Yani bir işlemin başlaması için başka bir işlemin
bitmesine ihtiyaç YOK.

Fakat bazı durumlarda senkron çalışan kod yazmamız gerekiyor.

Bir fonksiyonun başına async yazarsanız otomatik olarak
o fonksiyonu promise dönüştürmüş oluyorsunuz.
*/

//async function hello() {
    //return new Promise(resolve => resolve('hello world'))
    //return 'hello word'
//}

//İç içe .then yazmaktan kurtulmak için await devreye giriyor.
//Await sadece async function'larda çalışır !!
//const text = hello()
//console.log(text)

document.querySelector('button').addEventListener('click', async () => {
    const result = await Notification.requestPermission()
    console.log(result)
})