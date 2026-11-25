import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnChanges {
  // Information comes from the parent
  @Input() productName = '';
  @Input() productDescription = '';
  @Input() productPrice = 0;
  @Input() isAvailable = false;

  @Output() addProduct = new EventEmitter<{ name: string; quantity: number }>();

  quantity = signal(1);

  increase() {
    this.quantity.update(value => value + 1);
  }

  decrease() {
    this.quantity.update(value => Math.max(1, value - 1));
  }

  addToCart() {
    this.addProduct.emit({ name: this.productName, quantity: this.quantity() });
  }

  ngOnChanges(changes: SimpleChanges) {
    // Start at 1 when the user selects another product
    if (changes['productName'] && !changes['productName'].firstChange) {
      this.quantity.set(1);
    }
  }
}
