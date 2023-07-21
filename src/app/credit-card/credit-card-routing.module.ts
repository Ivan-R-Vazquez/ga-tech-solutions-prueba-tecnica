import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Credit Card Components
import { CreditCardComponent } from './credit-card.component';

const creditCardRoutes: Routes = [{ path: '', component: CreditCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(creditCardRoutes)],
  exports: [RouterModule],
})
export class CreditCardRoutingModule {}
