import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productName = 'Laptop';
  productDescription = 'High-performance laptop';
  productPrice = 750;
  productImage = 'images/laptop.svg';
  quantity = 1;
  isAvailable = true;
  discountPercentage = 0;

  increaseQuantity() { this.quantity++; }
  decreaseQuantity() { if (this.quantity > 1) this.quantity--; }
}
