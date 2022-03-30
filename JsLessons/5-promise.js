/*
Promise' i kullanım amacı: bir işlem bittiğinde
bir sonraki işlemi yaptırmak için kullanırız.

-new Promise()
     -then() -> chaining
     -catch()-> chaining
     -finally()

-Promise.all().        -> hepsi resolve olursa
-Promise.race().       -> ilk sonuçlanan(resolve ya da reject)
-Promise.allSettled(). -> hepsi tamamlandığında
-Promise.any()         -> ilk resolve olan

En sık promise fetch API'nın da kullanılıyor.
Ne zaman fetch işlemi biterse o zaman dönen data'yı alabiliyoruz.

*/


/*

Callback : bir işlem bittikten sonra çağrılan fonksiyon.


Callback hell
*/

/*İŞTE BU CALLBACK HELL !   
const box = document.querySelector('.box')

setTimeout( () => {
    box.classList.add('bigger')
    setTimeout( () => {
        box.classList.add('circle')
        setTimeout( () => {
            box.classList.add('move')
            setTimeout( () => {
                box.classList.add('colored')
                setTimeout( () => {
                    box.classList.remove('colored')
                    setTimeout(() => {
                        box.classList.remove('move');
                        setTimeout( () => {
                            box.classList.remove('circle');
                            setTimeout( () => {
                                box.classList.remove('bigger');
                            },1500)
                        },1500)
                    }, 1500)
                },1500)
            })
        },1500)
    },1500)
},1500)
*/

/*
Promise'in methodlari:
.then()  -> Resolve olursa then çalışıyor.
.catch() -> Hataları catch ile yakalıyoruz. Yani reject() çalışıyor.
.finally()
*/ 

/*
            //çalıştırabileceğimiz callback'lerimiz: resolve ve reject.
new Promise((resolve, reject) => {
    //işlem bitmiş ve başarılı ise
    resolve({
        name: 'Ahmet',
        surname: 'Loca'
    })

    //işlem hatalı ise
    reject('Reddedildi.')
})

/*
then'de datayı yakaladık diyelim. Data'mıza bir işlem daha yaptık ve geriye
döndürdük. Bir sonraki .then'de döndürdüğüm data'yı da alıyor olacağım.

CHAİNİNG işlemi yapabilirim. Aynı şey catch() içinde geçerli.

*/
/*
.then(data => {
    data.web = 'https://ahmetloca.com'
    return data
})
  .then(data => console.log(data))

.catch(data => {
    console.log(data)
})

.finally(() => console.log('hele şükür bitti !'))
*/


/*
function wait(ms){
    return new Promise(function(resolve){
        return setTimeout(resolve, ms)
    })
}
*/


const box = document.querySelector('.box')
const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

wait(1500)
    .then(() => console.log('An animation start.'))
.then(() => {
    box.classList.add('bigger')
    return wait(1500)
})

.then(() => {
    box.classList.add('circle')
    return wait(1500)
})

.then(() => {
    box.classList.add('move')
    return wait(1500)
})

.then(() => {
    box.classList.add('colored')
    return wait(1500)
})

.then(() => {
    box.classList.remove('colored')
    return wait(1500)
})

.then(() => {
    box.classList.remove('move')
    return wait(1500)
})

.then(() => {
    box.classList.remove('circle')
    return wait(1500)
})

.then(() => {
    box.classList.remove('bigger')
    return wait(1500)
})
.finally(() => console.log('The animation finish.'))

/*Bu sayede callback hell'den kurtulmuş olduk.*/


/*
Promise.all(). -> Bütün promise'ler resolve olursa çalışıyor.

Promise.race(). -> İlk sonuçlayan promise varsa çalıştırıyor. Resolve veya reject olmuş önemli değil.

Promise.allSettled(). -> Hepsi tamamlandığında çalışıyor.

Promise.any(). -> İlk RESOLVE olduğunda çalışıyor.
*/


const prom1 = new Promise(resolve => setTimeout(resolve, 1000, 'ahmet loca'))
const prom2 = new Promise(resolve => setTimeout(resolve, 800, 'prototurk.com'))
const prom3 = new Promise((resolve,reject) => setTimeout(reject, 500, 'ahmetloca.com'))

// Promise.all([prom1, prom2, prom3])
//      .then(([data1, data2, data3 ]) => console.log(data1))
//      .catch(err => console.log(err))




// Promise.race([prom1, prom2, prom3])
//     .then(response => console.log(response)) //800 milisaniye olduğu için proturk.com yazacak.
//     .catch(err => console.log(err))



Promise.allSettled([prom1, prom2, prom3])
    .then(response => console.log(response))


    /*
    SUMMURİZE:
        Bir promise ya resolve ya da reject olabilir.
        Resolve olmuşsa .then blocklarıyla bunu yakalayıp bir sonraki then block'una da chaining 
        yaparak o data'yı geri dönderebilirim.

        Reject olmuşsa catch'te yakalabilirim. Aynı şekilde chaining işlemini burada da yapabilirim.

        .finally() ile de en son çalıştırmak istediğim kod block'unu çalıştırabilirim.

        all,race,allSettled ve any ile de bazı aksiyonlar alabiliyorum.
    
    
    */