// ================================
// CHECKOUT PAGE LOGIC
// ================================

function placeOrder(event) {
    event.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("❌ Your cart is empty!");
        return;
    }

    // Clear cart after order
    localStorage.removeItem("cart");

    document.getElementById("success").innerText =
        "🎉 Order placed successfully! Thank you for shopping with GlamNest.";
}
