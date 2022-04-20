let inputs = [10,"topla", 5, "çarp", 2, "çikar", 6];
let number1 = inputs[0];

    //topla elemanından başladı
for(let i = 1; i < inputs.length; i += 2){



//ilk sayıyı al

//İşlem al : topla, çıkar, çarp, böl
let operation = inputs[i];
//ikinci sayıyı al
let number2 = inputs[i = i+1];


let result;

//Eğer işlem toplama ise:
if(operation == "topla"){
    //iki sayıyı topla
    result = number1 + number2;
}

//Eğer işlem çıkarma ise:
else if(operation =="çikar"){
    //iki sayıyı çıkar
    result = number1 - number2;
}
//Eğer işlem çarpma ise:
else if(operation =="çarp"){
    //iki sayıyı çarp
    result = number1 * number2;
}
//Eğer işlem bölme ise:
else if(operation == "böl"){
//Eğer ikinci sayı 0 ise:
    if(number2 == 0){
    //Hata göster
        result = "Sifira bölünemez.";
    }
    else{
    //Değilse:     (ASIL ULAŞMAK İSTEDİĞİMİZ ŞEY DEĞİLSE KISMINDA)
        //ilk sayıyı ikinci sayıya böl
        result = number1 / number2;
    }
}
else if(operation == "faktöriyel"){
    //4! = 4*3*2*1
    //acc -> 1,  i = 4
    //acc -> 4,  i = 3
    //acc -> 12, i = 2
    //acc -> 24, i = 1
    //acc -> 24

    let acc = 4;
    for(let i = number1; i>1; i--){
        acc = acc * i;
    }
    result = acc;
} 

else{
    result = "Geçersiz işlem";
}
}

console.log(result);

//Sonucu göster

/*
String escape karakter: \

Eğer escape karakterini bir karakterin önüne koyarsanız
artık bunun özel bir anlam ifade etmediğini normal
düz bir karakter olarak basılması gerektiğini 
söylemiş oluyoruz.



Sabitler : const

Sabit değerlere daha sonradan atama yapılamaz.

ÖRN:
const myConstantNumber = 12;
console.log(myConstantNumber);

myConstantNumber = 15; //WRONG

*/                               

// watch n 1 node calculator.js


let temp = 1;

if(temp <= 0){
    console.log("strict");
}
else if(temp <= 100){
    console.log("fluid");
}
else {
    console.log("gas");
}



// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

/*
ilk önce sayacımı tanımladım. (i=1)
daha sonra sayacımın kontrolunu yapıyorum. (i<=10)
ve son olarak döngünün içinde bu değeri arttırmam gerekiyor.(i++)

Bu 3 süreç standart ifadeler olduğu için for yapısı bu 3 süreci
tek bir satırda sağlıyor. for(initial; check; counter;)
*/

// for(init; check; counter){
     //code
// }

// for(let a=1; a<=10; a++){
//     console.log(a);
// }


let b = 0;
while(true){
    console.log(b);
    b++;
    if(b > 5){
        break;
    }
}


let c = 0;
while(c < 10){
    c++;
    if(c % 2 == 0){
        continue;  //Bu sayı çift ise bunu atlıyorum.
    }
    console.log(c);
}


/*
Yani break döngüyü tamamen sonlandırıyor.
Continue'dan sonraki kodların çalıştırılmasını engelliyor.
Yani "console.log(c);" atlanıyor. Ve bir sonraki kod döngüsüne giriyor.
*/


//Diğer kontrol yapıları: switch, do while

/*
do while ifadesi yanlışsa bile kodun bir kez
çalıştırılmasını sağlıyor.
*/
do{
    //code
}
while(expression);

