/*
reduce azalmak, küçülmek.

dizideki tüm ögelerimizi bir işlevden geçiriyor.
ve diziyi sonunda tek bir değere düşürüyor.
*/

const numbers = [1, 2, 3, 5]

let total = 0
numbers.forEach(number => total += number )
                       //total = total + number

console.log(total)






/*******************************/
/*with reduce*/

//acc:accumulate              number : o an işlem yaptığımız değerimiz
let total2 = numbers.reduce(function(acc,number){
     return acc + number  //total += number gibi.
},5) //initial value:5

console.log(total2)


/************************************** */

/*Sepetimin toplam tutarını öğrenmek istiyorum.*/

const basket = [
     {
          name: "iPhone 8",
          price: 7000
     },
     {
          name:"Apple Macbook Pro",
          price:14000
     },
     {
          name:"Harman/Kardon",
          price:2500
     }
]


let sum = basket.reduce((acc,item) => acc + item.price, 0)
                                                     //initial value:0
console.log(sum)

/******************************************/
/*Bu dizide aynı isimden kaç kere geçiyor?*/
const names = ['Tayfun','Mehmet','Ahmet','Gökhan','Tayfun','Ahmet','Gökhan']

let countedNames = names.reduce((allNames, name) => {
     if (name in allNames){
          allNames[name]++  //Olanın değerini arttırıyoruz.
     }else {
          allNames[name] = 1 //İlk önce burası çalışacak. Sonra if kısmı çalışacak.
     }
     return allNames
}, {})
//initial value : empty object

console.log(countedNames)



/************************************************** */

const products = [
     {
          name: "NT1-a COndenser Mikrofon",
          brand:"Rode"
     },
     {
          name: "iPhone XS",
          brand:"Apple"
     },
     {
          name: "SmartLAv Plus+ Yaka mikrofonu",
          brand:"Rode"
     },
     {
          name: "M-AUDIO Keystation 61",
          brand: "M-Audio"
     }
]
/*Bu ürünleri markalarına göre gruplamak istiyorum.*/
const groupBy = (array, property) => {
     return array.reduce((acc, product) => {
          let key = product[property]
          if(!acc[key]){
               acc[key] = []
          }
          acc[key].push(product)
          return acc
     }, {})
}
console.log(groupBy(products, 'brand'))


/**********************************************/

const posts = [
     {
          title: "Post 1",
          tags: ["php","css"]
     },
     {
          title: "Post 2",
          tags: ["javascript","html5"]
     },
     {
          title:"Post 3",
          tags: ["html5","json"]
     }
]

/*post değişkenimdeki bütün etiketlerimi almak istiyorum.*/

const allTags = posts.reduce((acc,post) => [...acc, ...post.tags],[])
                                                       //initial value

/*
const result = allTags.reduce((acc, item) => {
     if(!acc.includes(item)){
          acc.push(item)
     }
     return acc
}, [])
console.log(result)
*/

console.log([...new Set(allTags)])


/************************************** */


const numbers2 = [-5, 6, 2, 0]
/*
console.log(
     numbers2.filter(number => number > 0).map(number => number * 2)
)
*/

console.log(
numbers2.reduce((acc,number) => {
     if(number > 0){
          acc.push(number * 2)
     }
     return acc
},[])
)