import { Component, signal } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductDetailsComponent, ShoppingCartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Parent Signals for product information
  productName = signal('Laptop');
  productDescription = signal('Dell Laptop, Core i7, 16GB RAM');
  productPrice = signal(850);
  isAvailable = signal(true);

  // Information received from ProductDetailsComponent
  cartName = '';
  cartPrice = 0;
  cartQuantity = 0;

  addToCart(product: { name: string; quantity: number }) {
    this.cartName = product.name;
    this.cartPrice = this.productPrice();
    this.cartQuantity = product.quantity;
  }

  showLaptop() {
    this.productName.set('Laptop');
    this.productDescription.set('Dell Laptop, Core i7, 16GB RAM');
    this.productPrice.set(850);
    this.isAvailable.set(true);
  }

  showHeadphones() {
    // Same child component works with another product
    this.productName.set('Wireless Headphones');
    this.productDescription.set('Bluetooth Headphones');
    this.productPrice.set(120);
    this.isAvailable.set(true);
  }
}
