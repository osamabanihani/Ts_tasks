# ElectroShop — Angular Day 1 + Day 2 + Day 3

This is **a continuation of the same ElectroShop-Day2 project**, not a new, separate application.

## How to run

1. Extract the ZIP and open the `ElectroShop-Day3-Continuation` folder in VS Code.
2. Open the VS Code terminal inside that folder.
3. Run:

   ```bash
   npm install
   npm start
   ```

4. Open http://localhost:4200 in your browser.

## What's still here from Day 2?

- Header, Navbar, Product List, Product Details, Footer.
- 5 original products, Buy Now buttons and disabled unavailable products.
- Interpolation, property binding, event binding, and `[(ngModel)]` for editing details.

## What's added in Day 3?

- `AppComponent` (parent) has Signals: `productName`, `productDescription`, `productPrice`, `isAvailable`.
- `ProductDetailsComponent` is now **standalone** and gets data from the parent using `@Input()`.
- `quantity = signal(1)` and `.update()` for + / −; quantity never goes below 1.
- `@Output()` and `EventEmitter` send name + quantity on **Add to Cart**.
- `ShoppingCartComponent` is **standalone**, receives name, price and quantity with `@Input()` and displays their total.
- Buttons switch between **Laptop ($850)** and **Wireless Headphones ($120)** to test reuse of the same component.
- Cart and details are part of the original Day 2 page.

Note: Day 2's product list still displays its original five prices (Laptop $750 etc.); Day 3's details demo has Laptop $850 as specified in the new task.

## Component communication

`AppComponent (Signals)` → `@Input()` → `ProductDetailsComponent`

`ProductDetailsComponent` → `@Output()` → `AppComponent` → `@Input()` → `ShoppingCartComponent`

For simplicity, the cart shows the **most recently added product** (as in the assignment mockup).
