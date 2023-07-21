import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'shop-cart' },
  {
    path: 'shop-cart',
    loadChildren: () =>
      import('./shop-cart/shop-cart.module').then(
        (m) => m.ShopCartModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'shop-cart' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
