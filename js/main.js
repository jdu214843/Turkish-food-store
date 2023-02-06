import products from "./products.json" assert { type: "json" };

const main = document.querySelector("main");

for (let i = 0; i < products.length; i++) {
    const product = document.createElement("div");
    product.classList.add('door');
    product.innerHTML =
    "<img src='images/" +
        products[i].image +
    "' >" +
    "<p>"+
        products[i].name +
    "</p>"+
    "<p>" +
        products[i].price + "$" +
   "</p>"+
   "<button class='btn-add'>" +
        products[i].button +
   "</button>"

   main.append(product);
}

// add to card onclick


const RemoveCarditem = document.getElementsByClassName("fa-trash");
    for(let i = 0; i < RemoveCarditem.length; i++){
        let button = RemoveCarditem[i]
        button.addEventListener("click", function(click){
            let btnCliked = click.target
            btnCliked.parentElement.parentElement.remove()
            totalUpdate()
        })
       
    }
    
        












