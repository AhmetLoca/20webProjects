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



new Promise((resolve, reject) => {
    //işlem bitmiş ve başarılı ise
    resolve()

    //işlem hatalı ise
    reject()
})