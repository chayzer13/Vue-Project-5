import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { TopSellersComponent } from './components/top-sellers/top-sellers.component';
import { TrendingEarphonesComponent } from './components/trending-earphones/trending-earphones.component';
import { NewLaunchesComponent } from './components/new-launches/new-launches.component';
import { AirdropBannerComponent } from './components/airdrop-banner/airdrop-banner.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ProductSectionComponent,
    FooterComponent,
    HeroBannerComponent,
    FeaturedProductsComponent,
    TopSellersComponent,
    TrendingEarphonesComponent,
    NewLaunchesComponent,
    AirdropBannerComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopper';
  topSellers = [
    { name: 'Boat Rockerz 333', price: 20, image: 'assets/rockerz333.png', rating: 4.5, reviews: 120, discount: 60 },
    { name: 'Boat kerz 234', price: 40, image: 'assets/kerz234.png', rating: 4.7, reviews: 90, discount: 0 },
    { name: 'Boat Rockerz 323', price: 30, image: 'assets/rockerz323.png', rating: 4.2, reviews: 75, discount: 40 }
  ];
}
