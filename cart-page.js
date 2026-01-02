// ================================
// CART PAGE LOGIC
// ================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartItemsDiv = document.getElementById("cartItems");
let totalDiv = document.getElementById("total");

function renderCart() {
    cartItemsDiv.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
        totalDiv.innerText = "";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price;

        cartItemsDiv.innerHTML += `
            <div class="product-card">
                <img src="${item.image}">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    totalDiv.innerText = "Total: $" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

renderCart();
