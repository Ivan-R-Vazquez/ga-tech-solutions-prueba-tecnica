import { Component, OnInit } from '@angular/core';
import { ShopCartService } from './shop-cart/services/shop-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private shopCartService: ShopCartService) {}

  ngOnInit(): void {
    this.shopCartService.getShopCart().subscribe();
  }
}
