/*
-Export ve default export
-Çoklu Export{}
-Export as ile isimlendirme
-import
-import as ile isimlendirme
-import * kullanımı
     -Buna bağlı olarak default exportun kullanımı
-dinamik import
     -ihtiyaç halinde tanımlama
     -önceden tanımlama
     -Async/Await kullanımı

ES6 ile birlikte standart hale gelmiş dil 
seviyesinde bir modül sistemimiz var.

Öncesinde ( webpack gibi araçlarla ) 'da bunları yapıyordur.

     */

import {hello, sayHi} from "./7-utils.js";

/*default yoksa bu süslü parantezler içerisinde alacağım*/


console.log(sayHi('ahmet'))

