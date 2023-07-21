import { Component, OnInit } from '@angular/core';
import { ShopCartService } from './services/shop-cart.service';
import { Product } from './models/cart';

@Component({
  selector: 'app-shop',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss'],
})
export class ShopCartComponent implements OnInit {
  cart: Product[] = [];
  subTotal: number = 0;
  shippingFees: number = 0;
  taxes: number = 0;
  total: number = 0;

  constructor(private shopCartService: ShopCartService) {}

  ngOnInit(): void {
    this.shopCartService.cartShop$.subscribe((cart) => {
      this.cart = cart;
      this.subTotal = 0;
      this.shippingFees = 0;
      this.taxes = 0;
      this.total = 0;
      cart.forEach((product) => {
        this.subTotal += product.price_without_tax * product.quantity;
        this.shippingFees += product.shipping_fee * product.quantity;
        this.taxes += product.tax * product.quantity;
      });
      this.total = this.subTotal + this.shippingFees + this.taxes;
    });
  }

  onRemoveCart() {
    this.shopCartService.removeAllCart().subscribe();
  }
}
