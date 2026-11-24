import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    {
        "name": "Laptop",
        "description": "High-performance laptop",
        "price": 750,
        "image": "images/laptop.svg",
        "available": true
    },
    {
        "name": "Smartphone",
        "description": "Latest smartphone",
        "price": 450,
        "image": "images/phone.svg",
        "available": true
    },
    {
        "name": "Headphones",
        "description": "Wireless headphones",
        "price": 80,
        "image": "images/headphones.svg",
        "available": true
    },
    {
        "name": "Smart Watch",
        "description": "Smart fitness watch",
        "price": 120,
        "image": "images/watch.svg",
        "available": true
    },
    {
        "name": "Keyboard",
        "description": "Mechanical keyboard",
        "price": 45,
        "image": "images/keyboard.svg",
        "available": false
    }
];

  buyProduct(name: string) {
    alert("You selected " + name);
  }
}
