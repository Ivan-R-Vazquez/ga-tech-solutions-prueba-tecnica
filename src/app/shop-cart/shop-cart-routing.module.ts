import { RouterModule, Routes } from '@angular/router';
import { ShopCartComponent } from './shop-cart.component';
import { NgModule } from '@angular/core';

const shopRoutes: Routes = [{ path: '', component: ShopCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(shopRoutes)],
  exports: [RouterModule],
})
export class ShopCartRoutingModule {}
