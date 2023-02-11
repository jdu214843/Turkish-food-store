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
  btn.addEventListener('click', buy) 
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
                    "<p class='name'>"+ 
                    element.name + 
                    "</p>"+ 
                    "<p>"+ 
                    element.price + "$" + 
                    "</p>" +
                "</div>"+
                "<div class='btn-dec_inc'>"+
                    "<button>" +
                        element.buttondec + 
                    "</button>"+
                    "<input type='number' disabled>"+
                    "<button>" +
                        element.buttoninc + 
                    "</button>"+
                "</div>"+
                "<div class='remove-trash'>"+
                    "<i class='fa fa-trash remove'></i>"+
                "</div>"
           
         
          aside.append(product); 

          let remove = document.querySelectorAll(".remove");
            remove = remove[remove.length - 1]
            remove.addEventListener("click", (e) => {
                e.target.parentNode.parentNode.remove()
            })
          break; 
        } 
         
      } 
}

// add to card onclick










    
        












