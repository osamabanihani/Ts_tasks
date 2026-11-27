import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  storeName = 'ElectroShop';
  welcomeMessage = 'Welcome to our store!';
  slogan = 'Everything You Need in One Place';
}
