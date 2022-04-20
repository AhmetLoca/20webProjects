/* Elimde bir ürün listesi olacak. Herbir ürün için bir kart yerleştireceğim. */ 
const products = [
    {  
       id : 1,
       name : 'Domates',
       photoPath : 'domates.jpg',
       price : 3.99,
       unit : 'Kg',
       quantity: 0
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

let basket =[];

createProducts();
listenToButtonClicks();


function listenToButtonClicks(){
    //#products elemanına click listener ekle
    let productsElement = document.querySelector('#products');
    productsElement.addEventListener('click', event => {
        let type;
        //Hangi butona tıklandığını algıla
        if(event.target.classList.contains('decrease-button')){
            type = "decrease";
        }
        else if(event.target.classList.contains('increase-button')){
            type = "increase";
        }
        //Sepeti güncelle
        let productElement = event.target.closest('.product');
        updateBasketItem(type, productElement);
    });

}


    function updateBasketItem(type, productElement){
        let itemElement;
        let item = basket.find(item => item.product.id == productElement.dataset.productId);


         //Ekli olan satırı güncelle
         if(item){
         let itemElements = [...document.querySelectorAll('#basket table tbody tr')];
                
         itemElement = itemElements.find(i => i.dataset.productId == item.product.id);
         }

        //Eğer işlem arttirma ise:
        if(type == "increase"){
            //Eğer ilk kez ekleniyorsa:
            if(!item){
                //İtem objesini oluştur
                let product = products.find(p => p.id == productElement.dataset.productId)
                item = {
                    name : product.name,
                    quantity : 1,
                    cost : product.price,
                    product : product
                };
                basket.push(item);
                //Sepete yeni satır ekle
                let itemTemplate = document.querySelector('#basket-item-template').content.
                querySelector('tr');

                itemElement = itemTemplate.cloneNode(true);

               
                let totalElement = document.querySelector('#basket .total');
                totalElement.parentElement.insertBefore(itemElement, totalElement);
            

                itemElement.dataset.productId = product.id;

            
            }
            //Sepette zaten varsa:
            else{
                //item objesini güncelle
                item.quantity++;
                item.cost = item.quantity * item.product.price;


               
            }
           
           
        }
        
        //Eğer işlem azaltma ise:
        else{
             //Eğer sepette eklenmemişte, bir şey yapma
            if(!item){
                return;
            }

            //Sepetteki sayıyı azalt
            item.quantity--;

            //Eğer sayı 0 olursa, sepetten ürünü sil
            if(item.quantity == 0){
                let index = basket.indexOf(item);
                basket.splice(index, 1);

                itemElement.remove();
            }
            //Eğer sayı 0 değilse, sepetteki ürünü güncelle
            else{
                item.cost = item.quantity * item.product.price;
            }

        }
         //Satır değerlerini güncelle
         let nameElement = itemElement.querySelector('.item-name');
         nameElement.innerText = item.name;  

         let quantityElement = itemElement.querySelector('.item-quantity');
         quantityElement.innerText = item.quantity + ' ' + item.product.unit; 

         let costElement = itemElement.querySelector('.item-cost');
         costElement.innerText = item.cost.toFixed(2) + ' TL'; 


           
        
         //Ürün kartındaki sayıyı güncelle
        let productQuantityElement = productElement.querySelector('.quantity');
        productQuantityElement.innerText = item.quantity || '-';


        //Toplam tutarı güncelle
        updateTotalPrice();


    }

    function updateTotalPrice(){
        //Sepetteki tüm ürünlerin tutarlarını topla
        let total = 0;
        for(let item of basket){
            total +=item.cost;
        }


        //Arayüzü güncelle
        document.querySelector('#total-value').innerText = total.toFixed(2) + ' TL';
        

    }




function createProducts(){
    //Template(şablon)'i bul.
    /*
    document:
    Web arayüzünde gördüğünüz sayfaya karşılık geliyor.
    Sayfanın üzerinde yer bir elemana tek tek ulaşmanızı sağlıyor.
    */

    /*
    h1 elemanını ekledik, tablo ekledik, divler ekledik. Bunların hepsi
    javascript tarafında dom sayesinde birer obje olarak gösteriliyor.
    herbiri bir class'tan oluşturulmuş obje instance'ları. Onların üzerinde
    kendi property'leri ve fonksiyonları var. Bunları kullanarak işlemlerimizi
    yapıyoruz.
    */

    //html koduna karşılık geldiği için 'Element' metnini ekledik. Karışmaması için.
   let productElement = document.querySelector('#product-template').content.
   querySelector('.product');


    //Herbir ürün için:
    for(let product of products){
        //Şablondan kopya oluştur
        let newElement = productElement.cloneNode(true);

        //Kopyanın içine ürün detaylarını gir
        let imageElement = newElement.querySelector('img');
        imageElement.src = "./images/" + product.photoPath;

        let nameElement = newElement.querySelector('.product-name');
        nameElement.innerText = product.name;

        let priceElement = newElement.querySelector('.product-price');
        priceElement.innerText = product.price + 'TL';

        let quantityElement = newElement.querySelector('.quantity');
        quantityElement.innerText = '-';


        newElement.dataset.productId = product.id;



        //Kopyayı web sayfasına ekle
        let productsElement = document.querySelector('#products');
        productsElement.append(newElement);
    }
}

/*
Eskiden getById ve getByClassName vardı.Ardından querySelector eklendi.
Şu an çok daha rahat bir şekilde sorgu yapabiliyoruz.
*/

/*
Eventler.
Kullanıcının butona tıklamasını nasıl algılayabilirim?
JavaScript bunları bize eventler olarak sunuyor. 
Ve bunları yakalamamız için bazı listener'lar eklememizi sağlıyor.
*/