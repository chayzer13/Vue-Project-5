import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-new-launches',
  imports: [ProductCardComponent],
  templateUrl: './new-launches.component.html',
  styleUrl: './new-launches.component.scss'
})
export class NewLaunchesComponent {

}
