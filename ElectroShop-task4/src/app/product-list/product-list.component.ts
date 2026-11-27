import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Laptop', price: 850, category: 'Electronics', isAvailable: true, discount: 15, image: 'images/laptop.svg' },
    { id: 2, name: 'Smartphone', price: 450, category: 'Electronics', isAvailable: true, discount: 0, image: 'images/phone.svg' },
    { id: 3, name: 'Headphones', price: 120, category: 'Accessories', isAvailable: false, discount: 10, image: 'images/headphones.svg' },
    { id: 4, name: 'Smart Watch', price: 180, category: 'Accessories', isAvailable: true, discount: 20, image: 'images/watch.svg' },
    { id: 5, name: 'Tablet', price: 300, category: 'Electronics', isAvailable: false, discount: 5, image: 'images/tablet.svg' },
    { id: 6, name: 'Keyboard', price: 65, category: 'Accessories', isAvailable: true, discount: 0, image: 'images/keyboard.svg' },
    { id: 7, name: 'Gaming Mouse', price: 45, category: 'Accessories', isAvailable: true, discount: 10, image: 'images/mouse.svg' },
    { id: 8, name: 'Monitor', price: 220, category: 'Electronics', isAvailable: false, discount: 0, image: 'images/monitor.svg' },
  ];

  orderStatus = 'Pending';
  selectedCategory = 'All Products';

  buyProduct(name: string) {
    alert('You selected ' + name);
  }
}
