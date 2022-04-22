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
//         product : ,
//         name : 'Domates',
//         quantity : 3,
//         cost : 30
//     }
// ];  Buna benzer bir obje yapısını oluşturmam gerekiyor. Ve bunun içinde ilgili elemanları sorgulamam gerekiyor.

/*Ek bilgi 
Eğer sayfa yenilendiği zaman sepetin silinmemesini istiyorsak basket objesini 'local Storage'ta tutabiliriz. */



let basket = [];


//sepet fonksiyonu.
/*
artı butonuna tıkladığımız zaman sepete eklemeyi nasıl yapacağız?
Eventler.

Kullanıcının butona tıklamasını nasıl algılayabilirim? 
JS bunları bize eventler olarak sunuyor. Ve bunu yakalamak içinde bazı listener'lar eklememizi sağlıyor. 



Bu butonların üzerine tıklama eventlerini dinlemesi için 
bir callback tanımlayacağız ve kullanıcı tıkladıkça bizim fonksiyonumuz çalışmış olacak.



JS'in sağladığı birçok event var. 
Fare eventleri(fare tekerini kaydırmak, sağ tıklamak, hareket eventi vs), 
klavye eventleri(tuşa basıldı ve parmak tuştan çekilde şeklinde iki parçaya bölebiliyoruz.)
sayfa boyutunun değiştirilmesiyle ilgili event'ler var. 
Sayfa içeriğinin kaydırılması: scroll eventi.


Biz click event'ini kullanacağız.



// let buttonElement = document.querySelector('button'); //sayfadaki ilk butonu seçecek.
// buttonElement.addEventListener('click', (event) => console.log(event)); 
//        click event'i olduğunda döndürdüğü parametreleri bana verecek. En çok target değerini kullanıyoruz.
// Target: hangi elemanın tıklandığını bana gösteriyor.


Butona click event'i eklemek için önce butonu seçmem gerekiyor.
<button class="decrease-button btn btn-sm btn-danger">-</button> class="dreacre-button" ile butonu seçiyorum.
*/

/*
Buradaki tüm butonların hepsini getirip her birine EventListener eklemem gerekiyor. 
!! Bu şekilde yapabilirsiniz ama bu genellikle tercih edilen bir şey değil.
Aynı ya da benzer işlemleri yapan butonlara bir eventListener eklemek istiyorsanız 
çok sayıda eventListener'in sayfanızda eklenmesine ve performans kaybına neden olacaktır.

Onun yerine event propagation denilen bir özellikten faydalanıyorsunuz ve tek bir yerde tüm eventleri 
topluca dinleyebiliyorsunuz.

event Propagation nedir?

html'de elemanlar iç içe yazılıyor.
 Yani artı butonu bir kutunun içinde. O kutu kartın içinde. O kart büyük bir div'in içinde..
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

    /*bunu nereye ekleyeceğim?
    Tüm ürünleri içerecek herhangi bir yere ekleyebilirim.
    tüm ürünler "products" id'li kutunun içindeydi <div id="products" class="col-sm-7">.
    Oraya ekleyelim. Yani kutuya ekliyorum.
    */


    //#products elemanına click listener ekle 
    let productsElement = document.querySelector('#products');
    productsElement.addEventListener('click', event => {
        let type;
        
        //Hangi butona tıklandığını algıla
        /*hangi butona tıkladığını nasıl algılayacağım? event'in üzerindeki target değerini kullanabiliriz.target, neye tıklandıysa bize onu veriyordu.
              
              tıklanıldığı zaman eksiye mi artıya mı tıklandığını algılamam gerekiyor.
              Peki - ve + yi nasıl ayırt ederim? html'deki butonlara class ekleyeceğim.
              eksi için decrease-button. Artı için increase-button. 
              decrease-button ve increase-button'ı kullanarak hangi butona tıklandığını kontrol edeceğim. */

            /*target html elemanına karşılık geliyor. ben bu target'i yazdırırsam butonunun kodunu bana
            yazdırmış olacak. 
            Bunun üzerinde css classlarına ulaşmak için classList property'sini kullanacağız. 
            classList içerisinde bizim elemanımız var mıyı kontrol etmek için contains'i kullandık.*/
        
        /*eventListener'i butona değil kartın kendisine ekliyoruz o yüzden ayrı ayrı if else if'i sorgulamam gerekiyor.*/    
        if(event.target.classList.contains('decrease-button')){
            type = "decrease"; //type değişkenine 'decrease' değerini atadık. bunu ileride kullanacağım.
        }
        else if(event.target.classList.contains('increase-button')){
            type = "increase"; //type değişkenine 'increase' değerini atadık. bunu ileride kullanacağım.
        }


        //sepeti güncelle
            /*sepeti güncelleme işlemi kendi başına apayrı bir işlem onun için bir fonksiyon yazalım. */
        /*
        Ben hangi kartın içindeki butona tıkladıysam ilgili product elemanına ulaşmak istiyorum. 
        Onu nasıl bulabilirim? 
        productElement dediğimiz şey kartın kendisi. 
        JavaScript içerisinde closest() fonksiyonu var.Onu kullanabilirim. 
        product class'ına sahip elemana ulaşarak bunu yapabilirim.
        */

        /*productsElement'i içerisine yazmamızın sebebi: 
            herhangi bir kartın herhangi bir butonuna tıkladığım zaman(artı ve eksiden biri)
            bu kartla ilgili bilgileri görebiliyoruz. Niye? Tıkladığım butona yakın olan
            ya da bu butonu içeren product class'ina sahip elemanı seçtiğim için. 
        */
                                 //closest'ı querySelector gibi düşünebilirsiniz.
        let productElement = event.target.closest('.product'); 
     
                            /*bu productElement'in üzerinde dataSet'in üzerine productId değeri var.
                             yani ilgili elemanın id'sine oradan ulaşabilirim.*/
        updateBasketItem(type,productElement);

        /*Aslında burada product elemanının kendisini geçmemize gerek yok da ama
        product elemanının içerisindeki sayıyı da güncellememiz gerekiyor. 
        Normalde ben sadece product objesini geçmek istiyordum ama ortadaki 
        sayıyı da güncellememiz gerektiği için product elemanının kendisini geçiyim dedim. Onun üzerinde
        ilgili elemanı bulmaya çalışacağım.*/
    });
}



                 //type: ürünün içerisinde artı mı eksi mi ye tıklandığının bilgisi geliyor.
                 //productElement: hangi product elemanına tıklandığının bilgisi.closest fonksiyonu ile buluyoruz
function updateBasketItem(type,productElement){
    let itemElement;

     //item: basket bilgisi idi.
     let item = basket.find(item => item.product.id == productElement.dataSet.productId); 
     //iki blokta da erişmek için burada koyduk.
   
     if(item){
    //Ekli olan satırı güncelle
            //spread operatörü ile array'e dönüştürdük.
            let itemElements = [...document.querySelectorAll('#basket table tbody tr')];

            itemElement = itemElements.find(i => i.dataSet.productId == item.product.id);
        }


     /*birincisi ben arttırma işlemi mi yapıyorum? Azaltma işlemi mi yapıyorum? */
    //Eğer işlem arttırma ise:
    if(type == 'increase'){
        /*basket içerisinde ilgili kayıt var mı diye bakıyım. Ve varsa da onu bulayım.*/
        
            /*benim aradığım product'ta eşitse bunu döndür. */

            /*products array'inin içerisindeki objelerin id'sine nereden ulaşacağım?
            product elemanının üzerinde benim bu yerleştirdiğim objeyle ilgili bir bilgiyi tutmam gerekiyor
            
            bunun için html'de data attribute'u dediğimiz JavaScript dom'da da dataSet olarak geçen bir
            özellik var onun kullanabiliriz. 
            Yani kısaca html elemanlarının üstünde kendi istediğimiz bir veriyi saklamamızı sağlıyor.
            Her türlü değeri saklayamıyorsunuz sadece string saklayabiliyoruz. Arayüzdeki elemanları
            createProducts() fonksiyonu ile oluşturuyorduk. O elemanları oluştururken onun üzerine ilgili
            data'yı da ekleyelim.*/

           
        //Eğer ilk kez ekleniyorsa:
        /*bu item var mı yok mu ona bakmam gerekiyor.Eğer bu item yoksa demek ki ben ilk kez ekleyeceğim. 
        eğer bu item halihazırda varsa demek ki sepete eklenmiştir.*/
        if(!item) {
            //İtem objesini oluştur.
            let product = products.find(p => p.id == productElement.dataSet.productId);
            item = {
                name : product.name,
                quantity : 1,
                cost : product.price,
                product : product
            };
            //hazır bunu oluşturmuşken listemize pushlayalım.
            basket.push(item);

        /*Sepetin içinde var mı yok mu kontrol edelim. O zaman sepetteki kayıtları product'taki
        kayıtlarla eşleştirmem lazım. basket array'inin içindeki 'product' özelliği products array'inin
        içindeki objelerden bir tanesini içeriyor olacak. */
        


        /*eklemeye çalıştığım ürün için sepette bir kayıt var mı? bakmam gerekiyor. Peki hangi
        ürünü eklemeye çalışıyorum? Onun bilgisini almam lazım. Bunu da productElement ile alıyorum.
        productElement dediğimiz şey kartın kendisi olacak. Ben hangi kartın içindeki butona tıkladıysam
        ilgili product elemanına ulaşmak istiyorum. Onun için de closest() fonksiyonunu kullanacağım.*/
        
        
            //Sepete yeni satır ekle
            let itemTemplate = document.querySelector('#basket-item-template').content.querySelector('tr');

            itemElement = itemTemplate.cloneNode(true);
  
            //Sayfaya ekleyelim.
            /*total class'ına sahip elemandan önceye yerleştir. Before fonksiyonunu kullanabiliriz. */
            let totalElement = document.querySelector('#basket .total');
            totalElement.parentElement.insertBefore(itemElement, totalElement);


            //dataSet ekleyelim.

            itemElement.dataSet.productId = product.id;

        }
            /*yani sıfırdan bire çıkartıyorsam sepete yeni bir kayıt eklemem gerekiyor. 
            Products için bir array'ın içinde objeleri tanımlamıştık. 
            Şimdi de sepet için bir array oluşturmam gerekiyor. bu basket içinde sepetteki ürünleri 
            tutacağım.*/
        
            /*Şu an eklemeye çalıştığım ürün için sepette bir kayıt var mı diye bakmam gerekiyor. 
            Peki hangi ürünü eklemeye çalışıyorum? 
            Onun bilgisini almam lazım. 
            updateBasketItem içine product bilgisini koymam gerekiyor. */

        //Sepette zaten varsa:
        else {

            //item objesini güncelle
            item.quantity++;
            item.cost = item.quantity * item.product.price;


            /*html elemanını bulmak için benim item'i ya da product kaydını bir şekilde html'deki
            ilgili elemanla eşleştirmem gerekiyor. 
            Bunu eşleştirmek için daha öncesinde dataSet kullanmıştık.
            O zaman burada da dataSet kullanmam gerekiyor. Sepetteki herbir satır içinde dataSet üzerine
            product.id şeklinde bir değer ekleyebilirim. */

           
        }

    }












    //Eğer işlem azaltma ise:
    else{
        /*halihazırda hiçbir eleman yoksa bunu -1 yapmasın. */
        //Eğer sepete eklenmemişse, bir şey yapma (yani buradan çıkacağız)
        if(!item){
            return;
        }

        //Sepetteki sayıyı azalt
        item.quantity--;

        //Eğer sayı 0 olursa, sepetten ürünü sil
            /*Bunu 2 yerde yapmam gerekiyor. hem js kodunda hem de arayüz kısmında */
        if(item.quantity == 0){
            let index = basket.indexOf(item);
            basket.splice(index, 1);


            //Arayüz kısmından silme.
            itemElement.remove();

        }


        //Eğer sayı 0 değilse, sepetteki ürünü güncelle
        else{
           item.cost = item.quantity * item.product.price;
        }

    }

    //Sepet değerini güncelle
        /*if ve else dışında çünkü item olsa da olmasa da kodlar çalıştırılmış olacak */
        let nameElement = itemElement.querySelector('.item-name');
        nameElement.innerText = item.name;        

        let quantityElement = itemElement.querySelector('.item-quantity');
        quantityElement.innerText = item.quantity + ' ' + item.product.unit;

        let costElement = itemElement.querySelector('.item-cost');
        costElement.innerText = item.cost.toFixed(2) + ' TL';
                                //virgülden sonraki 2 basamağı gösterecek.

     //Ürün kartındaki sayıyı güncelle
     let productQuantityElement = productElement.querySelector('.quantity');
     productQuantityElement.innerText = item.quantity ||  '-';

    //Toplam tutarı güncelle (en aşağıda toplam tutarı gösteriyorum. çünkü arttırma ve azaltma için ortak.)
        updateTotalPrice();
 }











 

 function updateTotalPrice() {
     //sepetteki tüm ürünlerin tutarlarını topla
    let total = 0; /*sıfır değerini vermeseydik toplama işlemini yaparken null verirdi. 
                    çünkü undefined ile bir sayıyı toplama çalışıyor.*/
    for(let item of baskets){
        total += item.cost;
    }

     //Arayüzü güncelle
     document.querySelector('#total-value').innerText = total.toFixed(2) + ' TL';
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

        //dataSet ekleyelim. üzerine rastgele veri saklamamızı sağlayan şey dataSet.
        /*productId şeklinde bir property tutacağım. o da şuanki product'imizin id'si olsun.
        product.id */

        newElement.dataSet.productId = product.id; //productId'de string olarak tutuyor.




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