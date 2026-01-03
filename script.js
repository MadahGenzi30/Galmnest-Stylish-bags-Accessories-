// ================================
// ADD TO CART + CART COUNT
// ================================

// Get cart from localStorage
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Update cart count in navbar
function updateCartCount() {
    let cart = getCart();
    let countElement = document.getElementById("cart-count");
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

// Add product to cart
function addToCart(name, price, image) {
    let cart = getCart();

    cart.push({
        name: name,
        price: price,
        image: image
    });

    saveCart(cart);
    updateCartCount();

    alert("✅ Item added to cart!");
}
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let countElement = document.getElementById("cart-count");
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

// Load cart count when page loads
document.addEventListener("DOMContentLoaded", updateCartCount);

const slidesWrapper = document.querySelector(".slides-wrapper");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentIndex = 0;
const totalSlides = slides.length;
let slideInterval;

// Function to go to a specific slide
function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

// Next and Previous slide functions
function nextSlide() {
    goToSlide(currentIndex + 1);
}

function prevSlide() {
    goToSlide(currentIndex - 1);
}

// Auto slide
function startSlideShow() {
    slideInterval = setInterval(nextSlide, 3000); // change every 3 seconds
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

// Event listeners for arrows
if (next) {
    next.addEventListener("click", () => {
        nextSlide();
        stopSlideShow();
        startSlideShow();
    });
}

if (prev) {
    prev.addEventListener("click", () => {
        prevSlide();
        stopSlideShow();
        startSlideShow();
    });
}

// Initialize slideshow after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    if (slides.length > 0) {
        goToSlide(0);
        startSlideShow();
    }
});
// ===== Contact Message 5 Character Alert =====
const contactMessage = document.getElementById("contact-message");

contactMessage.addEventListener("input", () => {
    if (contactMessage.value.length >= 5) {
        alert("⚠️ You cannot enter more than 5 characters in this field.");
    }
});

