import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'shop-cart' },
  {
    path: 'shop-cart',
    loadChildren: () =>
      import('./shop-cart/shop-cart.module').then((m) => m.ShopCartModule),
  },
  {
    path: 'credit-card',
    loadChildren: () =>
      import('./credit-card/credit-card.module').then(
        (m) => m.CreditCardModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'shop-cart' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
