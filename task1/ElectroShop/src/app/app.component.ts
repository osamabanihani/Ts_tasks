import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Store information
  storeName: string = 'ElectroShop';
  storeDescription: string = 'Your favorite electronics store';
  storeAddress: string = 'Amman, Jordan';
  isStoreOpen: boolean = true;
  currency: string = 'USD';

  // Products
  productNames: string[] = ['Laptop', 'Smartphone', 'Headphones', 'Smart Watch', 'Keyboard'];
  productPrices: number[] = [750, 450, 80, 120, 45];

  featuredProduct = {
    name: 'Laptop',
    price: 750,
    description: 'High-performance laptop'
  };

  storeStatus: string = '';
  discountPercentage: number = 10;
  finalPrice: number = 0;

  totalProducts: number = 0;
  highestPrice: number = 0;
  lowestPrice: number = 0;
  totalValue: number = 0;

  constructor() {
    // Is the store open?
    if (this.isStoreOpen) {
      this.storeStatus = 'We Are Open';
    } else {
      this.storeStatus = 'We Are Closed';
    }

    // Calculate the discount
    if (this.discountPercentage > 0) {
      this.finalPrice = this.featuredProduct.price -
        (this.featuredProduct.price * this.discountPercentage / 100);
    } else {
      this.finalPrice = this.featuredProduct.price;
    }

    // Find total, highest price, and lowest price
    this.highestPrice = this.productPrices[0];
    this.lowestPrice = this.productPrices[0];

    for (let i = 0; i < this.productPrices.length; i++) {
      this.totalProducts++;
      this.totalValue = this.totalValue + this.productPrices[i];

      if (this.productPrices[i] > this.highestPrice) {
        this.highestPrice = this.productPrices[i];
      }

      if (this.productPrices[i] < this.lowestPrice) {
        this.lowestPrice = this.productPrices[i];
      }
    }
  }
}
