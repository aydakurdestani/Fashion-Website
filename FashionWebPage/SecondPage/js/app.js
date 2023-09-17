var counterElement = document.getElementById("counter");
var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
var likeButton = document.getElementById("Like");
var svgIcon = document.getElementById("svgIcon");
var counterWishlist=document.getElementById("counterWishlist");
var productNumber=document.getElementById("productNumber");
var ProductPrice=document.getElementById("ProductPrice");
var TheMainProduct=document.getElementById("TheMainProduct");
var AddTo=document.getElementById("AddTo");
const seeAllsimiilar = document.querySelector('.see-allsimilar');
var newSvgCode = `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>`;
let counterValue = 1; 
let counterValue2 = 0;
let countervalue3=0; 
var valueProductPrice ;
var valueTheMainProduct ;
var FinallPrice;

seeAllsimiilar.addEventListener('click', function () {
    itemsGroup2.classList.remove('d-none');
  });
likeButton.addEventListener("click", () => {
    svgIcon.innerHTML = newSvgCode;
    counterValue2++;
    updateCounterWishList();
});

function updateproductNumber(){
    productNumber.textContent=countervalue3;
}
function updateCounterWishList(){
    counterWishlist.textContent=counterValue2 + " item";
}
function updatePrice(){
  
     ProductPrice.textContent=FinallPrice;
}

function updateCounter() {
    counterElement.textContent = counterValue;
}
incrementButton.addEventListener("click", () => {
    counterValue++;
    updateCounter();
});

decrementButton.addEventListener("click", () => {
    if (counterValue > 1) {
        counterValue--;
        updateCounter();
    }
});
AddTo.addEventListener("click",()=>{
    countervalue3++;
    valueProductPrice = parseFloat(ProductPrice.innerHTML.replace(/[^0-9.-]+/g,"")); // remove non-numeric characters
    valueTheMainProduct = parseFloat(TheMainProduct.innerHTML.replace(/[^0-9.-]+/g,"")); // remove non-numeric characters
    if (!isNaN(valueProductPrice) && !isNaN(valueTheMainProduct)) {
         FinallPrice = valueProductPrice + valueTheMainProduct;
      } 
    updateproductNumber();
    updatePrice();
});