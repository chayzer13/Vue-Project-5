import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-top-sellers',
  imports: [ProductCardComponent],
  templateUrl: './top-sellers.component.html',
  styleUrl: './top-sellers.component.scss'
})
export class TopSellersComponent {

}
