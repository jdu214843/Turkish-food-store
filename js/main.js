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
                "<div class='description'>"+
                    "<img src='images/" + 
                    element.image +  
                    "' >" + 
                "</div>"+
                "<div class='information'>"+
                    "<p class='name'>"+ 
                    element.name + 
                    "</p>"+ 
                    "<p>"+ 
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
                      "<input type='text' class='total' readonly='' value='0'>"+
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
            let totalScrenn = document.querySelectorAll(".total");

                
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
        
              totalScrenn = totalScrenn[totalScrenn.length - 1]
              totalScrenn.value = element.price + "$"

              DecBtn.addEventListener("click", () => {
                totalScrenn.value = parseInt(totalScrenn.value) + element.price + "$";
              });

              totalScrenn.value = element.price + "$"
              Incbtn.addEventListener("click", () => {
                if ((parseInt(totalScrenn.value) - element.price) > 0) {
                  totalScrenn.value = parseInt(totalScrenn.value) - element.price + "$";
                }
               
              });  
              if (id == products[i].id) { 
                let Showtotal = document.querySelector(".totalscreen");
                Showtotal.value = element.price + "$"
                DecBtn.addEventListener("click", (e) => {
                  Showtotal.value = parseInt(totalScrenn.value) + "$"
                })
                Incbtn.addEventListener("click", (e) => {
                  if ((parseInt(Showtotal.value) - element.price) > 0) {
                    Showtotal.value = parseInt(Showtotal.value) - element.price + "$";
                  }
                });
              }
              
          break; 
          
        }
        
         
      } ;

      
      
        
      

};







// add to card onclick