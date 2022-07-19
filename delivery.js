
//delivery modal
const delivery = document.getElementById("myMenu");
const button = document.getElementById("dimas");



button.onclick = function() {
  delivery.style.display = "block";
}

penis.onclick = function() {
  delivery.style.display = "none";
}
window.onclick = function(event) {
    delivery.style.display = "none";
 
} 
function myFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("dimas");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

//shoping cart logic from lisiy

const totalPrice = document.getElementById("totalprice")
const ACTION = {PLUS: "plus", MINUS:"minus"}
const getItemSubtotalPrice = (input) =>  Number (input.value) * Number(input.dataset.price);
const irin = () =>{
    let totalCost = 0;
    
   
    [...document.querySelectorAll(".shoping-cart__item")].forEach((basketItem) => {  
       totalCost =  getItemSubtotalPrice(basketItem.querySelector(".input"));
    });
    totalPrice.textContent = totalCost;
    totalPrice.dataset.value = totalCost;
    };
 
  irin()
  
 const caluculateSeparateItem = (basketItem,action) =>{
    const input = basketItem.querySelector(".input");  
   
 switch (action){   
    case ACTION.PLUS: 
    input.value++; 
    totalPrice.textContent = Number(totalPrice.dataset.value) + Number(input.dataset.price);
    totalPrice.dataset.value = Number(totalPrice.dataset.value) + Number(input.dataset.price);
    break;

    case ACTION.MINUS:
  
    input.value--; 
    totalPrice.textContent = Number(totalPrice.dataset.value) - Number(input.dataset.price);
    totalPrice.dataset.value = Number(totalPrice.dataset.value) - Number(input.dataset.price);
    break;
  }
    basketItem.querySelector(".shoping-cart__cost__pilosos").textContent = `${getItemSubtotalPrice(input)}$`; 
};

 document.getElementById("cart").addEventListener ( "click", (event) => { 
    if (event.target.classList.contains("shoping-cart__total__minus")) {
      const input = event.target.closest(".shoping-cart__item").querySelector(".input");
  if(Number(input.value)!== 0  ){
    caluculateSeparateItem
    (event.target.closest(".shoping-cart__item"), 
    ACTION.MINUS
    )};
  }
    if (event.target.classList.contains("shoping-cart__total__plus"))  
    {caluculateSeparateItem(event.target.closest(".shoping-cart__item"), ACTION.PLUS )};
  } )

  