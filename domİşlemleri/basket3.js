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
     }
];

let basket = [];

listenToButtonClicks();
function listenToButtonClicks(){

    let productsElement = document.querySelector('#products');
    productsElement.addEventListener('click', event => {
        let type;
        
        if(event.target.classList.contains('decrease-button')){
            type = "decrease"; 
        }
        else if(event.target.classList.contains('increase-button')){
            type = "increase"; 
        }

        let productElement = event.target.closest('.product'); 
     
        updateBasketItem(type,productElement);
    });
}

function updateBasketItem(type,productElement){
    let itemElement;

     let item = basket.find(item => item.product.id == productElement.dataSet.productId); 
     
     if(item){
            let itemElements = [...document.querySelectorAll('#basket table tbody tr')];

            itemElement = itemElements.find(i => i.dataSet.productId == item.product.id);
        }

    if(type == 'increase'){

        if(!item) {
            let product = products.find(p => p.id == productElement.dataSet.productId);
            item = {
                name : product.name,
                quantity : 1,
                cost : product.price,
                product : product
            };
            basket.push(item);
        
            let itemTemplate = document.querySelector('#basket-item-template').content.querySelector('tr');

            itemElement = itemTemplate.cloneNode(true);
  
            let totalElement = document.querySelector('#basket .total');
            totalElement.parentElement.insertBefore(itemElement, totalElement);

            itemElement.dataSet.productId = product.id;

        }
        else {

            item.quantity++;
            item.cost = item.quantity * item.product.price;
        }

    }

    else{

        if(!item){
            return;
        }

        item.quantity--;

        if(item.quantity == 0){
            let index = basket.indexOf(item);
            basket.splice(index, 1);

            itemElement.remove();
        }

        else{
           item.cost = item.quantity * item.product.price;
        }

    }

        let nameElement = itemElement.querySelector('.item-name');
        nameElement.innerText = item.name;        

        let quantityElement = itemElement.querySelector('.item-quantity');
        quantityElement.innerText = item.quantity + ' ' + item.product.unit;

        let costElement = itemElement.querySelector('.item-cost');
        costElement.innerText = item.cost.toFixed(2) + ' TL';
                                
     let productQuantityElement = productElement.querySelector('.quantity');
     productQuantityElement.innerText = item.quantity ||  '-';

        updateTotalPrice();
 }

 function updateTotalPrice() {
     
    let total = 0;
    for(let item of baskets){
        total += item.cost;
    }

     document.querySelector('#total-value').innerText = total.toFixed(2) + ' TL';
 }

createProducts();

function createProducts() {

    let productElement = document.querySelector('#product-template').content.querySelector('.product');
   
     for(let product of products) { 
        let newElement =  productElement.cloneNode(true); 
          let imageElement = newElement.querySelector('img');.

          imageElement.src = "./images/" + product.photoPath; 

          let nameElement = newElement.querySelector('.product-name');

        nameElement.innerText = product.name;


        let priceElement = newElement.querySelector('.product-price');
        priceElement.innerText = product.price + ' TL';

        let quantityElement = newElement.querySelector('quantity');
        quantityElement.innerText = '-';

        newElement.dataSet.productId = product.id; 


        let productsElement = document.querySelector('#products'); 
        productsElement.append(newElement);
    }
}