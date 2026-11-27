import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnChanges {
  // Parent -> Child, using @Input.
  @Input() productKey = 'laptop';
  @Input() productName = '';
  @Input() productDescription = '';
  @Input() productPrice = 0;
  @Input() isAvailable = true;
  @Input() productImage = '';

  // Day 2 property is still displayed.
  discountPercentage = 0;

  // Day 3: quantity is a Signal, starting at 1.
  quantity = signal(1);

  // Child -> Parent, using @Output and EventEmitter.
  @Output() addToCart = new EventEmitter<{ name: string; quantity: number }>();
  @Output() productUpdated = new EventEmitter<{ name: string; description: string; price: number }>();

  ngOnChanges(changes: SimpleChanges) {
    // Reset only when switching products, not when editing the fields.
    if (changes['productKey'] && !changes['productKey'].firstChange) {
      this.quantity.set(1);
    }
  }

  increaseQuantity() {
    this.quantity.update(value => value + 1);
  }

  decreaseQuantity() {
    this.quantity.update(value => Math.max(1, value - 1));
  }

  addProductToCart() {
    if (this.isAvailable) {
      this.addToCart.emit({ name: this.productName, quantity: this.quantity() });
    }
  }

  notifyProductChanged() {
    this.productUpdated.emit({
      name: this.productName,
      description: this.productDescription,
      price: Number(this.productPrice) || 0
    });
  }
}
