import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/cart';
import { ShopCartService } from '../../services/shop-cart.service';

@Component({
  selector: 'app-shop-cart-item',
  templateUrl: './shop-cart-item.component.html',
  styleUrls: ['./shop-cart-item.component.scss'],
})
export class ShopCartItemComponent implements OnInit {
  @Input() product: Product;
  total: number;

  constructor(private shopCartService: ShopCartService) {}

  ngOnInit(): void {
    this.total = this.product.price_without_tax * this.product.quantity;
  }

  onAddProduct() {
    const newProduct = { ...this.product };
    newProduct.quantity++;
    this.shopCartService.addProduct(newProduct).subscribe();
  }

  onRemoveProduct() {
    const newProduct = { ...this.product };
    newProduct.quantity--;
    this.shopCartService.removeProduct(newProduct).subscribe();
  }
}
