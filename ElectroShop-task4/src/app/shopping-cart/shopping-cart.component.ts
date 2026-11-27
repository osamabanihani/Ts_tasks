import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  // The AppComponent passes the selected product to the cart.
  @Input() productName = '';
  @Input() productPrice = 0;
  @Input() quantity = 0;

  get totalPrice() {
    return this.productPrice * this.quantity;
  }
}
