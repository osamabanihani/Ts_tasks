// Part 1: Variables
const storeName: string = "ElectroShop";
const storeDescription: string = "Electronics online store";
const currency: string = "USD";
let numberOfAvailableProducts: number = 3;
const isStoreOpen: boolean = true;

// Part 3: Arrays
const productNames: string[] = ["Laptop", "Phone", "Headphones", "Keyboard", "Mouse"];
const productDetails: (string | number | boolean)[] = ["Laptop", 650, true];

// Main task: Exactly 3 products
const products: { name: string; description: string; price: number }[] = [
    { name: "Laptop", description: "Core i5, 8GB RAM", price: 650 },
    { name: "Headphones", description: "Wireless Bluetooth headphones", price: 75 },
    { name: "Keyboard", description: "Mechanical gaming keyboard", price: 45 }
];

numberOfAvailableProducts = products.length;

// Part 4: Conditions and loops
if (isStoreOpen) {
    console.log("Store is Open");
} else {
    console.log("Store is Closed");
}

const productPrice: number = products[0].price;
if (productPrice > 500) {
    console.log("Expensive Product");
} else if (productPrice >= 100) {
    console.log("Medium Price");
} else {
    console.log("Affordable Product");
}

for (const name of productNames) {
    console.log(name);
}

let count: number = 0;
for (const product of products) {
    if (product.price > 100) {
        count++;
    }
}
console.log("Products over 100:", count);

// Part 5: Functions
function calculateDiscount(price: number, discount: number): number {
    return price - (price * discount / 100);
}

function checkProductAvailability(quantity: number): string {
    return quantity > 0 ? "In Stock" : "Out of Stock";
}

function displayStoreMessage(message: string): void {
    console.log(message);
}

// Part 6: Optional and default parameters
function displayProductInfo(name: string, price: number, description?: string, productCurrency: string = "USD"): void {
    console.log("Name:", name);
    console.log("Price:", price, productCurrency);
    if (description) {
        console.log("Description:", description);
    }
}

// Part 7: Rest parameters
function calculateTotalPrice(...prices: number[]): number {
    let total: number = 0;
    for (const price of prices) {
        total += price;
    }
    return total;
}

// Test the functions in the console
console.log("Discounted price:", calculateDiscount(200, 10));
console.log(checkProductAvailability(5));
displayStoreMessage("Welcome to ElectroShop!");
displayProductInfo("Laptop", 650, "Core i5, 8GB RAM");
console.log("Total price:", calculateTotalPrice(100, 200, 50, 150));
console.log("Available products:", numberOfAvailableProducts);
console.log("Example multi-type array:", productDetails);

// Display the store information
(document.getElementById("storeName") as HTMLElement).textContent = storeName;
(document.getElementById("storeDescription") as HTMLElement).textContent = storeDescription;
(document.getElementById("storeStatus") as HTMLElement).textContent = isStoreOpen ? "Store is Open" : "Store is Closed";

// Main requirement: Products appear only after clicking the button
function loadProducts(): void {
    const container = document.getElementById("products") as HTMLElement;
    container.innerHTML = "";

    for (const product of products) {
        const item = document.createElement("div");
        item.className = "product";
        item.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p><p>Price: ${product.price} ${currency}</p>`;
        container.appendChild(item);
    }
}

(document.getElementById("loadButton") as HTMLElement).addEventListener("click", loadProducts);
