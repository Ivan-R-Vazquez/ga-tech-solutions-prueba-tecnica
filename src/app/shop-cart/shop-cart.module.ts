import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCartComponent } from './shop-cart.component';
import { ShopCartRoutingModule } from './shop-cart-routing.module';
import { ShopCartItemComponent } from './components/shop-cart-item/shop-cart-item.component';

@NgModule({
  declarations: [ShopCartComponent, ShopCartItemComponent],
  imports: [CommonModule, ShopCartRoutingModule],
})
export class ShopCartModule {}
