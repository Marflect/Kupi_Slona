//Star
/*const itemList = document.querySelectorAll('.item');
const itemArray = Array.prototype.slice.call(itemList)

itemArray.forEach(item => 
    item.addEventListener('click', ()=> 
item.parentNode.dataset.totalValue = item.dataset.itemValue
)
);
*/
//Korsina
const totalPrice = document.getElementById("totalprice")
const ACTION = {PLUS: "plus", MINUS:"minus"}
const getItemSubtotalPrice = (input) =>  Number (input.value) * Number(input.dataset.price);
const irin = () =>{
    let totalCost = 0;
    
   
    [...document.querySelectorAll(".basket_item")].forEach((basketItem) => {  
       totalCost =  getItemSubtotalPrice(basketItem.querySelector(".input"));
    });
    mefedron.textContent = totalCost;
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
    basketItem.querySelector(".align_middle_suptotal").textContent = `${getItemSubtotalPrice(input)}$`; 
};

 document.getElementById("root").addEventListener ( "click", (event) => { 
    if (event.target.classList.contains("btn-minus")) {
      const input = event.target.closest(".basket_item").querySelector(".input");
  if(Number(input.value)!== 0  ){
    caluculateSeparateItem
    (event.target.closest(".basket_item"), 
    ACTION.MINUS
    )};
  }
    if (event.target.classList.contains("btn-plus"))  
    {caluculateSeparateItem(event.target.closest(".basket_item"), ACTION.PLUS )};
  } )

  
