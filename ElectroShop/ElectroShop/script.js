
const storeName = "ElectroShop";
const storeDescription = "Electronics online store";
const currency = "USD";
let numberOfAvailableProducts = 3;
const isStoreOpen = true;


const productNames = ["Laptop", "Phone", "Headphones", "Keyboard", "Mouse"];
const productDetails = ["Laptop", 650, true];

const products = [
    { name: "Laptop", description: "Core i5, 8GB RAM", price: 650 },
    { name: "Headphones", description: "Wireless Bluetooth headphones", price: 75 },
    { name: "Keyboard", description: "Mechanical gaming keyboard", price: 45 }
];
numberOfAvailableProducts = products.length;

if (isStoreOpen) {
    console.log("Store is Open");
}
else {
    console.log("Store is Closed");
}
const productPrice = products[0].price;
if (productPrice > 500) {
    console.log("Expensive Product");
}
else if (productPrice >= 100) {
    console.log("Medium Price");
}
else {
    console.log("Affordable Product");
}
for (const name of productNames) {
    
    console.log(name);
}
let count = 0;
for (const product of products) {

    if (product.price > 100) {
        count++;
    }
}
console.log("Products over 100:", count);

function calculateDiscount(price, discount) {

    return price - (price * discount / 100);
}
function checkProductAvailability(quantity) {

    return quantity > 0 ? "In Stock" : "Out of Stock";
}
function displayStoreMessage(message) {

    console.log(message);
}

function displayProductInfo(name, price, description, productCurrency = "USD") {

    console.log("Name:", name);
    console.log("Price:", price, productCurrency);
    if (description) {
        console.log("Description:", description);
    }
}

function calculateTotalPrice(...prices) {

    let total = 0;
    for (const price of prices) {
        total += price;
    }
    return total;
}

console.log("Discounted price:", calculateDiscount(200, 10));
console.log(checkProductAvailability(5));

displayStoreMessage("Welcome to ElectroShop!");
displayProductInfo("Laptop", 650, "Core i5, 8GB RAM");

console.log("Total price:", calculateTotalPrice(100, 200, 50, 150));
console.log("Available products:", numberOfAvailableProducts);
console.log("Example multi-type array:", productDetails);


document.getElementById("storeName").textContent = storeName;
document.getElementById("storeDescription").textContent = storeDescription;
document.getElementById("storeStatus").textContent = isStoreOpen ? "Store is Open" : "Store is Closed";


function loadProducts() {
    const container = document.getElementById("products");
    container.innerHTML = "";

    for (const product of products) {

        const item = document.createElement("div");
        item.className = "product";
        item.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><p>Price: ${product.price} ${currency}</p>`;
        container.appendChild(item);

    }
}
document.getElementById("loadButton").addEventListener("click", loadProducts);
