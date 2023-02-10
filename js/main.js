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
   "<button class='btn-add'>1" +
        products[i].button +
   "</button>"

   main.append(product);
};



const aside = document.querySelector("aside");

for (let i = 0; i < products.length; i++) {
    const product = document.createElement("div");
    product.classList.add('card');
    product.innerHTML =
    "<img src='images/" +
    products[i].image +
    "' >" +
    "<div class='item-card1'>"+
        "<p class='title'>"+
            products[i].name +
        "</p>"+
         "<p>" +
            products[i].price + "$" +
        "</p>"+
    "</div>"+
    "<div class='item-card2'>"+
    "<button class='btn-add'>" +
            products[i].buttonadd +
        "</button>"+
        "<input class='display'>"+
        "<button class='btn-add'>" +
            products[i].buttonminus +
        "</button>"+
    "</div>"+
    "<div class='item-card3'>"+
        "<i class='fa fa-trash'>"+
        "</i>"+
    "</div>"
   
   aside.append(product);
};

// add to card onclick


const RemoveCarditem = document.getElementsByClassName("fa-trash");
    for(let i = 0; i < RemoveCarditem.length; i++){
        let button = RemoveCarditem[i]
        button.addEventListener("click", function(click){
            let btnCliked = click.target
            btnCliked.parentElement.parentElement.remove()
            // totalUpdate()
        });
        
    };

// const none = document.querySelector("aside");
//     none.style.display = "none";
//     const AddCard = document.getElementById("btn-adds");
//     AddCard.addEventListener("click", function(){
//         none.style.display = "block"
//         setInterval(() => {
//             none.style.display = "none"
//         }, 5000);
//     })

const addToCard = document.querySelectorAll(".btn-add");
    addToCard.forEach(btn => {
        btn.addEventListener("click", (e) => {
            
        })
    })






    
        












