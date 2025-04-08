document.addEventListener("DOMContentLoaded", () => {
    const productsContainer = document.getElementById("products-container");

    const products = [
        { name: "Hot Coffee", price: "$1.99" },
        { name: "Slurpee", price: "$0.99" },
        { name: "Snack Pack", price: "$2.49" }
    ];

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productDiv.style.border = "1px solid #ddd";
        productDiv.style.padding = "10px";
        productDiv.style.margin = "10px";
        productDiv.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        productsContainer.appendChild(productDiv);
    });
});
