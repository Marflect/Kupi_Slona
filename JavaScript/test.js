
  
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
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
 
} 

//cart plus minus
(function() {

  (function quantityProducts() {
    let minus = document.getElementsByClassName ("shoping-cart__total__minus");
    let plus = document.getElementsByClassName ("shoping-cart__total__plus");
    let num = document.getElementsByClassName ("shoping-cart__value");

    minus.click(minusss);
    plus.click(plusss);

    function minusss() {
      if (num.val() > 1) {
        num.val(+num.val() - 1);
      }
    }

    function plusss() {
      num.val(+num.val() + 1);
    }
  })();

});


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

