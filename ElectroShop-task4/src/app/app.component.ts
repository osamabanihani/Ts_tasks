import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Day 3: the parent stores product information using Signals.
  productName = signal('Laptop');
  productDescription = signal('Dell Laptop, Core i7, 16GB RAM');
  productPrice = signal(850);
  isAvailable = signal(true);
  productImage = signal('images/laptop.svg');
  selectedProduct = signal('laptop');

  // Data passed from AppComponent to ShoppingCartComponent.
  cartProductName = '';
  cartProductPrice = 0;
  cartQuantity = 0;

  // Receives data emitted by the child through @Output.
  onAddToCart(item: { name: string; quantity: number }) {
    this.cartProductName = item.name;
    this.cartProductPrice = this.productPrice();
    this.cartQuantity = item.quantity;
  }

  // Keeps the Day 2 product editing (ngModel) working.
  onProductUpdated(product: { name: string; description: string; price: number }) {
    this.productName.set(product.name);
    this.productDescription.set(product.description);
    this.productPrice.set(product.price);
  }

  showLaptop() {
    this.selectedProduct.set('laptop');
    this.productName.set('Laptop');
    this.productDescription.set('Dell Laptop, Core i7, 16GB RAM');
    this.productPrice.set(850);
    this.isAvailable.set(true);
    this.productImage.set('images/laptop.svg');
  }

  // Day 3 Part 6: Same ProductDetailsComponent, different Signals.
  showHeadphones() {
    this.selectedProduct.set('headphones');
    this.productName.set('Wireless Headphones');
    this.productDescription.set('Bluetooth Headphones');
    this.productPrice.set(120);
    this.isAvailable.set(true);
    this.productImage.set('images/headphones.svg');
  }
}
