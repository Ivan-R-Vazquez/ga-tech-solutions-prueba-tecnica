import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Shop Cart Components
import { ShopCartComponent } from './shop-cart.component';

const shopRoutes: Routes = [{ path: '', component: ShopCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(shopRoutes)],
  exports: [RouterModule],
})
export class ShopCartRoutingModule {}
