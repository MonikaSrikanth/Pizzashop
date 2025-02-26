document.addEventListener("DOMContentLoaded",() =>{
    window.pizzaList = [
        {name:"Margherita",price:100,image:"Images/margharita.jpg",quantity:0},
        {name:"Sweet-corn",price:200,image:"Images/sweetcorn.jpg",quantity:0},
        {name:"Veggie-loaded",price:400,image:'Images/Veggie.jpg',quantity:0},
        {name:"Tomato",price:300,image:'Images/tomato.jpg',quantity:0},
        {name:"Cheese-burst",price:500,image:'Images/cheeseburst.jpg',quantity:0},
        {name:"Italian-Pizza",price:700,image:'Images/italian.jpg',quantity:0}
    ];

    const pizzaContainer = document.getElementById("pizza-list");

    pizzaList.forEach((pizza, index) => {
        const pizzaItem = document.createElement("div");
        pizzaItem.classList.add("pizza-item");
        pizzaItem.innerHTML = `
                                <h3>${pizza.name}</h3>
                                <img src="${pizza.image}" alt="${pizza.name}">
                                <p>Price:${pizza.price}</p>
                                <button onclick="increasequantity('${index}')">+</button>
                                <span id ="quantity-${index}">0</span>
                                <button onclick="decreasequantity('${index}')">-</button>`;
                                pizzaContainer.appendChild(pizzaItem);

    });
});
window.increasequantity = (index) =>{
    pizzaList[index].quantity++;
    document.getElementById(`quantity-${index}`).innerText = pizzaList[index].quantity;
    updatecart();
}
window.decreasequantity = (index) =>{
    if(pizzaList[index].quantity > 0){
        pizzaList[index].quantity--;
        document.getElementById(`quantity-${index}`).innerText = pizzaList[index].quantity;
        updatecart();
    }
}
window.updatecart = () =>{
    const cartContainer = document.getElementById("cart");
    const totalpriceElement = document.getElementById("total-price");

    cartContainer.innerHTML="";
    let totalprice = 0;

    const carttable = document.createElement("table");
    carttable.classList.add("cart-table")
    carttable.innerHTML = `
    <thead>
        <tr>
            <th>Pizza Name</th>
            <th>Quantity</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody id="cart-body"></tbody>`;
    const cartBody = carttable.querySelector("#cart-body");
    pizzaList.forEach((pizza)=>{
        if(pizza.quantity > 0 ){
            const Totalitem = pizza.quantity * Number(pizza.price);
            totalprice += Totalitem;
            const cartRow= document.createElement("tr");
            cartRow.innerHTML = `
                                <td class="cart-data"><strong>${pizza.name}</td>
                                <td class="cart-data">${pizza.quantity}</td>
                                <td class="cart-data">Rs.${Totalitem}</td>`;
            cartBody.appendChild(cartRow);
        }
    });
    cartContainer.appendChild(carttable);
    const totalPriceElement = document.createElement("p");
    totalPriceElement.id = "total-price";
    totalPriceElement.innerText = `Total: Rs.${totalprice}`;
    cartContainer.appendChild(totalPriceElement);
}
document.getElementById("place-order").addEventListener("click",() => {
    if(pizzaList.some(pizza => pizza.quantity > 0)){
        alert("Thanks for placing order");
    }else{
        alert("Your cart is empty");
    }
})
console.log("js is working");