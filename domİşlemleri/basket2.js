const products = [
    {  
       id : 1, /* Veritabanı gibi bir yerden veri geliyorsa üzerinde id olacaktır. */
       name : 'Domates',
       photoPath : 'domates.jpg',
       price : 3.99,
       unit : 'Kg', /* Ürünün birimi var. */
       quantity: 0 /* Kaç tane seçildiğinin bilgisi var.*/
    },
    {  
        id : 2,
        name : 'Çipura',
        photoPath : 'cipura.jpg',
        price : 14,
        unit : 'Adet',
        quantity: 0
     },
     {  
        id : 3,
        name : 'Sek Süt 1L',
        photoPath : 'sekSut.jpg',
        price : 8.2,
        unit : 'Adet',
        quantity: 0
     },
     {  
        id : 4,
        name : 'Pastavilla Burgu Makarna 500G',
        photoPath : 'pastaVillaMakarna.jpg',
        price : 5.25,
        unit : 'Adet',
        quantity: 0
     },
     {  
        id : 5,
        name : 'Coca-Cola Zero Sugar 1 L',
        photoPath : 'cocaCola.jpg',
        price : 4.95,
        unit : 'Adet',
        quantity: 0
     },
     {  
        id : 6,
        name : 'Solo Havlu 12\'Li',
        photoPath : 'soloHavlu.jpg',
        price : 43.5,
        unit : 'Adet',
        quantity: 0
     },
];


// let basket = [
//     {
//         name : 'Domates',
//         quantity : 3,
//         cost : 30
//     }
// ];  Buna benzer bir obje yapısını oluşturmam gerekiyor. Ve bunun içinde ilgili elemanları sorgulamam gerekiyor.
/*Eğer sayfa yenilendiği zaman sepetin silinmemesini istiyorsak basket objesini 'local Storage'ta tutabiliriz. */



let basket = [];


//sepet fonksiyonu.
/*
artı butonuna tıkladığımız zaman sepete eklemeyi nasıl yapacağız?
Eventler.
Kullanıcının butona tıklamasını nasıl algılayabilirim? JS bunları bize eventler olarak sunuyor.
Ve bunu yakalamak içinde bazı listener'lar eklememizi sağlıyor. 

Bu butonların üzerine tıklama eventlerini dinlemesi için 
bir callback tanımlayacağız ve kullanıcı tıkladıkça bizim fonksiyonumuz çalışmış olacak.

JS'in sağladığı birçok event var. Fare eventleri(fare tekerini kaydırmak, sağ tıklamak, hareket eventi vs), 
klavye eventleri(tuşa basıldı ve parmak tuştan çekilde şeklinde iki parçaya bölebiliyoruz.)
sayfa boyutunun değiştirilmesiyle ilgili event'ler var. Sayfa içeriğinin kaydırılması: scroll eventi.

Biz click event'ini kullanacağız.

Butona click event'i eklemek için önce butonu seçmem gerekiyor.
<button class="decrease-button btn btn-sm btn-danger">-</button> class="dreacre-button" ile butonu seçiyorum.
*/

// let buttonElement = document.querySelector('button'); //ilk butonu seçecek.
// buttonElement.addEventListener('click', (event) => console.log(event)); 
//           click event'i olduğunda döndürdüğü parametreleri bana verecek. En çok target değerini kullanıyoruz.
// Target: hangi elemanın tıklandığını bana gösteriyor.

/*
Buradaki tüm butonların hepsini getirip her birine EventListener eklemem gerekiyor. 
Bu şekilde yapabilirsiniz ama bu genellikle tercih edilen bir şey değil.
Aynı ya da benzer işlemleri yapan butonlara bir eventListener eklemek istiyorsanız 
çok sayıda eventListener'in sayfanızda eklenmesine ve performans kaybına neden olur.
Onun yerine event propagation denilen bir özellikten faydalanıyorsunuz ve tek bir yerde tüm eventleri 
topluca dinleyebiliyorsunuz.

event Propagation nedir?

html'de elemanlar iç içe yazılıyor. Yani artı butonu bir kutunun içinde. 
O kutu kartın içinde. O kart büyük bir div'in içinde..
eventListener varsa en içten başlayarak dışarıya doğru çağıracaktır.
siz bir yere tıkladığınız zaman orada bir event oluşuyor
bu event o elemandan başlayıp üstündeki herbir elemana yayılıyor.
Ve siz o event'i üstteki elemanlarla da dinleyebiliyorsunuz.
Bu en üsteki body'e çıkana kadar bu şekilde devam ediyor ve daha sonra
sonlanıyor.

bu sadece click değil tüm event'ler için geçerli.

event propagation özelliğinden faydalanarak tek bir eventListener ekleyeceğim.
*/

listenToButtonClicks();

function listenToButtonClicks(){

    /*bunu nereye ekleyeceğim? Tüm ürünleri içerecek herhangi bir yere ekleyebilirim.
    tüm ürünler "products" id'li kutunun içindeydi. Oraya ekleyelim.<div id="products" class="col-sm-7">
    */

    //#products elemanına click listener ekle
    let productsElement = document.querySelector('#products');
    productsElement.addEventListener('click', event => {
        let type;
        /*tıklamaya gelindiği zaman eksiye mi artıya mı tıklandığını algılamam gerekiyor.*/
        /*(event'in üzerindeki target değerini kulanabiliriz. 
        Peki - ve + yi nasıl ayırt ederim?class ekleyeceğim.)
         decrease-button and increase-button
        */
        
        //Hangi butona tıklandığını algıla
       
         //css classlarına ulaşmak için classList property'sini kullandık. 
         //classList içerisinde bizim elemanımız var mıyı kontrol etmek için contains'i kullandık.
        if(event.target.classList.contains('decrease-button')){
            type = "decrease";
        }
        else if(event.target.classList.contains('increase-button')){
            type = "increase";
        }


        //sepeti güncelle
         
                                 //closest'ı querySelector gibi düşünebilirsiniz.
        let productElement = event.target.closest('.product');
        /*sepeti güncelleme işlemi kendi başına apayrı bir işlem onun için bir fonksiyon yazalım. */
        updateBasketItem(type,productElement);

        /*Aslında burada product elemanının kendisini geçmemize gerek yok da ama product elemanının içerisindeki 
        sayıyı da güncellememiz gerekiyor. Normalde ben sadece product objesini geçmek istiyordum ama ortadaki 
        sayıyı da güncellememiz gerektiği için product elemanının kendisini geçiyim dedim. */
    });
}

                /*productElement dediğimiz şey kartın kendisi. Yani butonların içinde bulunduğu product kartı elemanına ihtiyacım var.
                 kartların içerisinden butonlara tıklıyoruz. Ben hangi kartın içindeki butona tıkladıysam ilgili product
                 elemanına ulaşmak istiyorum. Onu nasıl bulabilirim? JavaScript içerisinde closest() fonksiyonu var.
                 Onu kullanabilirim. product class'ına sahip elemana ulaşarak bunu yapabilirim.
                 
                 Event'in içinden target'a ulaşabiliyorum. Onun içinde barındaran product class'ına sahip elemana ulaşmam
                 gerekiyor.
                 */

                 //bu fonksiyonda hangi product elemanına tıklandığının bilgisi geliyor
function updateBasketItem(type,productElement){

    /*birincisi ben arttırma işlemimi yapıyorum? azaltma işlemimi yapıyorum? Bu yüzden type'i parametre olarak alsın. */
    
    //Eğer işlem arttırma ise: (sıfırdan bire çıkartıyorsam sepete yeni bir kayıt eklemem gerekiyor.)
    if(type == 'increase'){
        //Eğer ilk kez ekleniyorsa: (ürünler için bir array tanımlamıştım şimdi sepet için bir array oluşturmam gerekiyor.)
        /*Şu an eklemeye çalıştığım ürün için sepette bir kayıt var mı diye bakmam gerekiyor. Peki hangi ürünü eklemeye
        çalışıyorum? Onun bilgisini almam lazım. updateBasketItem içine product bilgisini koymam gerekiyor. */
           //Sepete yeni satır ekle

        //Sepette zaten varsa:
            //Ekli olan satırı güncelle
    }

    //Eğer işlem azaltma ise:
        /*halihazırda hiçbir eleman yoksa bunu -1 yapmasın. */
        //Eğer sepete eklenmemişse, bir şey yapma (yani buradan çıkacağız)

        //Sepetteki sayıyı azalt

        //Eğer sayı 0 olursa, sepetten ürünü sil

        //Eğer sayı 0 değilse, sepetteki ürünü güncelle
    
    
    //Toplam tutarı güncelle(en aşağıda toplam tutarı gösteriyorum.)

    }













/* Ürünleri görmek için template'i seçip göstermem gerekiyor. bunun içinde bir fonksiyon oluşturuyorum. */
createProducts();

function createProducts() {
//kodun çalışma mantığı
    //Template'i bul. (template'i id sayesinde bulduk(id="producut-template").) 
 
    //Benim template elemanına ihtiyacım yok. div class="products" 'a ihtiyacım var.
    //content: template'in içeriği
    
    let productElement = document.querySelector('#product-template').content.querySelector('.product');
    //template'i bulduk ve bir değişkene atadık.Bu bir html elemantı. O yüzden 'Element' kelimesini yazdık.

    /*document: Web tarayıcısında çalıştırıyorsanız document adında bir değişken elinizde olacak.
    document, web arayüzde gördüğünüz şeylere karşılık geliyor.Sayfa içerisindeki herbir elemana tek tek ulaşmanızı sağlıyor. 
    h1,div,table bunların hepsi js tarafından dom sayesinde birer obje olarak gösteriliyor.
    herbiri classtan oluşturulmuş obje instance'ları.Onların üzerinde kendi propertyleri ve fonksiyonları var. Bunları kullanarak işlemlerimizi yapıyoruz.

                ayrıca document üzerinde sorgulamalar yapabiliyoruz. 
                ( document.querySelector() ) CSS'deki secici mantığıyla aynı(class:. ve id:# ).
                */
    
     //Herbir product için:
     for(let product of products) { //products değişkeni içerisinde yer alan objelerin herbiri için.
        //Template'ten kopya oluştur.
        //bir elemandan kopya oluşturmak istiyorsanız 'cloneNode' fonksiyonunu kullanıyorsunuz.
        let newElement =  productElement.cloneNode(true); //İçerisine parametre olarak true geçiyorum.

        /*kod yazarken bir normal objelerimiz ve normal değişkenlerimiz var. Bir de arayüzdeki HTML
        elemanlarına karşılık gelen değişkenlerimiz oluyor. Bunlar kolaylıkla birbirine karışabilir.
        Bunların birbirine karışmaması için isimlendirme conseption'ı kullanabilirsiniz.
        Mesela eğer html elemanına karşılık geliyorsa değişkenlerin sonuna 'Element' yazıyorum. */


        //Kopyanın içine ürün detaylarını gir.

        //let image = querySelector('img'); 
        /*!!!Böyle bir kod çalışmayacak çünkü bu sayfa içerisindeki ilk img elemanını
          bulup bana döndürür. Ben ilk 'img' elemanını değil yeni oluşturduğum ilk img elemanını bulmasını istiyorum. 
          Hem yeni oluşturduğumuz 'newElement' sayfanın içine eklenmedi. Onun için document bunu bulamaz.
          O yüzden querySelector document üzerinde değil yeni oluşturduğum newElement üzerinden querySelector yaparak
          kopyanın detaylarını girmem gerekiyor.
        */
          let imageElement = newElement.querySelector('img');//Yeni oluşturulan 'img'i bulmuş olacak.

          //img elemanını buldum. Bu img'in 'src' değerini ayarlamam gerekiyor.
          imageElement.src = "./images/" + product.photoPath; //bulunduğum klasör üzerindeki product üzerindeki photoPath'ı bul.
                                    //bu değeri 'images/' ile birleştir ve photoPath ismine sahip olan görseli 'src' kısmına yerleştir.


          //class= "product-name", class'lar sadece CSS için değil sıklıkla DOM işlemleri içinde kullanılabiliyor.

          let nameElement = newElement.querySelector('.product-name');
          
          /*benim bu sefer içindeki metni değiştirmem gerekiyor.
          İçindeki metni değiştirmek için kullanabileceğiniz iki şey var. 
            birincisi innerText property'sini ayarlamak. Bunu ayarladığınız zaman içindeki metni ayarlıyor.
            ikincisi  innerHTML kullanmak. Bu html kodu yerleştirmemizi sağlıyor. Örneğin:
            nameElement.innerHTML = "<div>asd</div>";
            biz birincisini kullanacağız.
            */

        nameElement.innerText = product.name;


        let priceElement = newElement.querySelector('.product-price');
        //priceElement'in html kodunu ayarlayacağız.
        priceElement.innerText = product.price + ' TL';


        /*İlk başta ürünlerin hiçbirisi seçili olmayacak. O yüzden miktarı '-' olarak göstereceğim. */
        let quantityElement = newElement.querySelector('quantity');
        quantityElement.innerText = '-';



        //Kopyayı web sayfasına ekle.

        /*Elemanlarımızı dinamik olarak içindeki şeyleri değiştirdik. Peki sayfaya nasıl ekleyeceğiz?
        Bunu nereye eklemek istiyoruz önce ona bakmamız lazım.
        <div class="col-sm-7"> elemanımız içerisine ekleyebiliriz.Bunun için buna bir id ekleyeceğim.
        <div id="products" class="col-sm-7">

        */
        let productsElement = document.querySelector('#products'); //products id'sini seçtik.
        productsElement.append(newElement);

        /*bu products id'yi div'imin içine ekle dediğim zaman içindeki h1 ve template'in sonuna ekleyecek. Yani
        </template>'in alt kısmına eklemiş olacak.*/

    }
}






/*
Eskiden sadece getById ve getByClassName vardı ve bir şeye ulaşmak istiyorsanız bunları kullanarak 
ulaşmanız gerekiyordu.
Ardından querySelector eklendi ve şu an çok daha rahat bir şekilde sorgu yapabiliyoruz.
*/