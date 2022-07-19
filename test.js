
  
//shoping cart modal
const modal = document.getElementById("cart");
const btn = document.getElementById("button");
const article = document.getElementsByClassName("shoping-cart__close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

article.onclick = function() {
  modal.style.display = "none";
}
//window.onclick = function(event) {
//  if (event.target == ) {
//    modal.style.display = "none";
//  } 
// } 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("main__slide__container__item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
 } 


 let slaveIndex = 1;
 showSlaves(slaveIndex);
 
 function plusSlaves(n) {
   showSlaves(slaveIndex += n);
 }
 
 function currentSlave(n) {
   showSlaves(slaveIndex = n);
 }
 
 function showSlaves(n) {
   let i;
   let slaves = document.getElementsByClassName("main__section-new-product__container__item");
   if (n > slaves.length) {slaveIndex = 1}
   if (n < 1) {slaveIndex = slaves.length}
   for (i = 0; i < slaves.length; i++) {
     slaves[i].style.display = "none";
   }
 
   slaves[slaveIndex-1].style.display = "block";
   setTimeout(showSlides, 6000);
  } 


  //slider 3 
  let slavek = 1;
showSlaveks(slavek);

function plusSlavek(n) {
  showSlaveks(slavek += n);
}

function currentSlavek(n) {
  showSlaveks(slavek= n);
}

function showSlaveks(n) {
  let i;
  let slaviks = document.getElementsByClassName("main__section-pluses");
  let imaggge = document.getElementsByClassName("main__section-pluses__container__plus");
  if (n > slaviks.length) {slavek = 1}
  if (n < 1) {slavek= slaviks.length}
  for (i = 0; i < slaviks.length; i++) {
    slaviks[i].style.display = "none";
  }
 for (i = 0; i < imaggge.length; i++) {
    imaggge[i].className = imaggge[i].className.replace(" active", "");
  }
  slaviks[(slavek -1) ].style.display = "block";
  imaggge[slavek-1].className += " active";
} 
//modal category
const windoww = document.getElementById("category");
const buttonn = document.getElementById("but");



buttonn.onmouseenter = function() {
  windoww.style.display = "block";
}
buttonn.onmouseleave = function() {
  windoww.style.display = "none";
}
windoww.onmouseenter = function(event) {
  if (event.target == windoww) {
    windoww.style.display = "block";
  }
} 
windoww.onmouseleave = function(event) {
  if (event.target == windoww) {
    windoww.style.display = "none";
  }
 return windoww
} 
//modal category 2 
const windowww = document.getElementById("category2");
const buttonnn = document.getElementById("butt");



buttonnn.onmouseenter = function() {
  windowww.style.display = "block";
}
buttonnn.onmouseleave = function() {
  windowww.style.display = "none";
}
windowww.onmouseenter = function(event) {
  if (event.target == windowww) {
    windowww.style.display = "block";
  }
} 

windowww.onmouseleave = function(event) {
  if (event.target == windowww) {
    windowww.style.display = "none";
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
      const item = document.querySelectorAll(".shoping-cart__item")
  if(Number(input.value)!== 0  ){
    caluculateSeparateItem
    (event.target.closest(".shoping-cart__item"), 
    ACTION.MINUS
    )};
    if(Number(input.value) == 0  ){
      item.style.display = 'none'}
 }
    if (event.target.classList.contains("shoping-cart__total__plus"))  
    {caluculateSeparateItem(event.target.closest(".shoping-cart__item"), ACTION.PLUS )};
  } )

// Move pilosos in shoping-cart

const buttonPlusItem = document.getElementById('beeebra');
const itemOne = document.getElementById("pilososone")

buttonPlusItem.onclick = function(){
    itemOne.style.display = 'block'
}

const bbuttonPlusItem = document.getElementById('beeebraa');
const itemTwo = document.getElementById("pilosostwo")

bbuttonPlusItem.onclick = function(){
    itemTwo.style.display = 'block'
}
const itemThree = document.getElementById("pilososthree")

const bbbuttonPlusItem = document.getElementById('beeebraaa');
bbbuttonPlusItem.onclick = function(){
    itemThree.style.display = 'block'
}

const itemFour = document.getElementById("pilososfour")

const bbbbuttonPlusItem = document.getElementById('beeebraaaa');
bbbbuttonPlusItem.onclick = function(){
    itemFour.style.display = 'block'
}

const itemFive = document.getElementById("pilososfive")

const bbbbbuttonPlusItem = document.getElementById('beeebraaaaa');
bbbbbuttonPlusItem.onclick = function(){
    itemFive.style.display = 'block'
}

const itemSix = document.getElementById("pilosossix")

const bbbbbbuttonPlusItem = document.getElementById('beeebraaaaaa');
bbbbbbuttonPlusItem.onclick = function(){
    itemSix.style.display = 'block'
}

//delete pilosos from cart



const removeButton = document.getElementById('remove');
const itemOneDelete = document.getElementById("pilososone")

removeButton.onclick = function(){
  if(itemOneDelete === 0){
    itemOneDelete.style.display = 'none'}
  }
// создать рекурсию 