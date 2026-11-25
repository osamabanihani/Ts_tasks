import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  @Input() productName = '';
  @Input() productPrice = 0;
  @Input() quantity = 0;
}
