import products from "./products.json" assert { type: "json" }; 
 
const main = document.querySelector("main"); 

for (let i = 0; i < products.length; i++) { 
  const product = document.createElement("div"); 
  product.classList.add('product') 
  product.innerHTML = 
  ` 
  <img src='images/${products[i].image}'>  
  <p> 
    ${products[i].name} 
  </p> 
   
  <p> 
    $${products[i].price}  
  </p>  
 
  <button class='btn-add' data-id='${products[i].id}'> 
  ${products[i].button} 
  </button> 
` 
 
 
  main.append(product); 
}; 



 
const aside = document.querySelector("aside");  

document.querySelectorAll('.btn-add').forEach(btn => {    
      btn.addEventListener('click', buy); 
    
}) 





 
function buy(event) { 
  let id = event.target.dataset.id; 
      for (let i = 0; i < products.length; i++) { 
        if (id == products[i].id) { 
          let element = products[i]; 
          const product = document.createElement("div"); 
          product.classList.add('card') 
          product.innerHTML = 
                "<div class='cart-boxes'>"+
                  "<div class='description'>"+
                    "<img src='images/" + 
                      element.image +  
                    "' >" + 
                  "</div>"+
                  "<div class='information'>"+
                    "<p class='name'>"+ 
                    element.name + 
                    "</p>"+ 
                    "<p class='priceItem'>"+ 
                    element.price + "$" + 
                    "</p>" +
                  "</div>"+
                
            
                  "<div class='btn-dec_inc'>"+
                    "<button class='decrease decbtn'>" +
                        element.buttondec + 
                    "</button>"+
                      "<input type='text' class='display' readonly='' value='0'>"+
                    "<button class='increase incbtn'>" +
                        element.buttoninc + 
                    "</button>"+
                  "</div>"+

                  "<div class='remove-trash'>"+
                    "<i class='fa fa-trash remove'></i>"+
                  "</div>"
               "</div>"
     
          
          aside.append(product); 
          let remove = document.querySelectorAll(".remove");
          remove = remove[remove.length - 1]
          remove.addEventListener("click", (e) => {
              e.target.parentNode.parentNode.remove()
              
          });
          


            let DecBtn = document.querySelectorAll(".decbtn");
            let Incbtn = document.querySelectorAll(".incbtn");
            let display = document.querySelectorAll(".display");

            

              DecBtn = DecBtn[DecBtn.length - 1]
              display = display[display.length - 1]

              DecBtn.addEventListener("click", () => {
              display.value = parseInt(display.value) + 1;
              });

              Incbtn = Incbtn[Incbtn.length - 1] 
              display.value = 1
              Incbtn.addEventListener("click", () => {
                if(display.value <= 1){
                display.value = 1;
                }else{
                display.value = parseInt(display.value) - 1;
                }

              });

              


            
            
              
              
          break; 
          
        }

       
        
         
      } ;

      
      
        
      

};



let addBtn = document.querySelector('.shopping');
addBtn.addEventListener("click", function(){
  aside.style.display = "block"
});



// add to card onclick

//      function updatetotal(){
          //   let cartContent = document.getElementsByClassName('card')[0];
          //   let cartBoxes = cartContent.getElementsByClassName('cart-boxes')
          //   let total = 0
          //   for(let i = 0; i < cartBoxes.length; i++){
          //     let cartBox = cartBoxes[i]
          //     let cartPrice = cartBox.getElementsByClassName('priceItem')[0]
          //     let quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
          //     let price = parseFloat(cartPrice.innerText.replace("$", ""));
          //     let quantity = quantityElement.value;
          //     total = total + (price * quantity);
          //     total = Math.round(total * 100) / 100;
          
          //     document.getElementsByClassName('total-price')[0].innerText = " $" + total;
          //   }
          // }

          // function quantityChanged(event){
          //   let input  = event.target
          //   if(isNaN(input.value) || input.value <= 0) {
          //     input.value = 1;
          //   };
          //   updatetotal();
            
            
          // }
          // let quantityDisplay = document.getElementsByClassName('cart-quantity');
          // for(let i = 0; i < quantityDisplay.length; i++){
          //   let input = quantityDisplay[i]
          //   input.addEventListener('change', quantityChanged)
          // }
