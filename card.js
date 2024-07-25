const btnCart=document.querySelector('.card-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('.cart-close');

btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active')
})

btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active')
})

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
    loadContent();
}

function loadContent(){
    //remove Food Item from cart
    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn)=>{
        btn.addEventListener('click',removeItem);
    });

    //product item change event
    let qtyElements=document.querySelectorAll('.cart-quatity');
    qtyElements.forEach((input)=>{
        input.addEventListener('change',changeQty);
    });

    //product cart
    let cartBtn=document.querySelectorAll('.add-cart');
    cartBtn.forEach((btn)=>{
        btn.addEventListener('click',addCart);
    });

    updateTotal();

}

//remove Item
function removeItem(){
    if(confirm('Are Your Sure To Remove')){
        let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
        itemList=itemList.filter(el=>el.title!=title);
        loadContent();
    this.parentElement.remove();
    }
}

//change quantity
function changeQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
    loadContent();
}

let itemList=[];

//Add cart
function addCart(){
   var food=this.parentElement;
   let title=food.querySelector('.food-title').innerHTML;
   let price=food.querySelector('.food-price').innerHTML;
   let imgSrc=food.querySelector('.food-img').src;
//    console.log(title,price,imgSrc);

let newproduct={title,price,imgSrc}
//check product already exist in cart
if(itemList.find((el)=>el.title==newproduct.title))
    {
        alert("product already in cart")
        return
    }else{
        itemList.push(newproduct)
    }

let newProductElement= createCartProduct(title,price,imgSrc);
let cartBasket= document.querySelector('.cart-content');
let element=document.createElement('div');
element.innerHTML=newProductElement;
cartBasket.append(element);
loadContent()

}

function createCartProduct(title,price,imgSrc){
   return`
   <div class="cart-box">
   <img src="${imgSrc}" class="cart-img" alt="">
<div class="detail-box">
   <div class="cart-food-title">${title}</div>
  <div class="price-box">
     <div class="cart-price">${price}</div>
     <div class="cart-amt">${price}</div>
  </div>
  <input type="number" value="1" class="cart-quatity">
</div>
<ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
   `

}
function updateTotal(){
   const cartItems=document.querySelectorAll('.cart-box');
   const totalvalue=document.querySelector('.total-price');

   let total =0;
   cartItems.forEach(product=>{
    let priceElement=product.querySelector('.cart-price')
    let price=parseFloat(priceElement.innerHTML.replace("Rs.",""));
    let qty=product.querySelector('.cart-quatity').value;
    total+=(price*qty);
    product.querySelector('.cart-amt').innerHTML="Rs."+price*qty;
   });
   totalvalue.innerHTML="Rs."+total;

   //add product count in cart icon
   const cartCount=document.querySelector('.card-count');
   let count=itemList.length;
   cartCount.innerHTML=count;

   if(count==0){
    cartCount.style.display='none';
   }else{
    cartCount.style.display='block';
   }
}