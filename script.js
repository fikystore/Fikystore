document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    let cartItems = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartItems++;
            cartCount.textContent = cartItems;
            button.innerText = "✅ Ditambahkan!";
            setTimeout(() => button.innerText = "Tambah ke Keranjang", 2000);
        });
    });
});
