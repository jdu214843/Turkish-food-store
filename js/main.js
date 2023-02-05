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
   "<button>" +
        products[i].button +
   "</button>"

  main.append(product);
}
// start styles

// end styles
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

let valueCount

// add btn start

document.querySelector(".add-btn").addEventListener("click", function(){
    valueCount = document.getElementById("counter").value;
    valueCount++;

    document.getElementById("counter").value = valueCount

    if(valueCount > 1){
        document.querySelector(".minus-btn").removeAttribute("disabled");
        document.querySelector(".minus-btn").classList.remove("disabled");
    }
})

// add btn end
document.querySelector(".minus-btn").addEventListener("click", function(){
    valueCount = document.getElementById("counter").value;
    valueCount--;

    document.getElementById("counter").value = valueCount

    if(valueCount == 1){
        document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
    }
});





