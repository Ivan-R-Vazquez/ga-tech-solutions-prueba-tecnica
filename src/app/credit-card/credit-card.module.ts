import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardComponent } from './credit-card.component';
import { CreditCardRoutingModule } from './credit-card-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// Credit Card Components
import { CardComponent } from './components/card/card.component';

// Credit Card Pipes
import { HideCardNumberPipe } from './pipes/card-number.pipe';
import { CardNumberFormatPipe } from './pipes/card-number-format.pipe';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    CreditCardComponent,
    CardComponent,
    HideCardNumberPipe,
    CardNumberFormatPipe,
    ModalComponent,
  ],
  imports: [CommonModule, CreditCardRoutingModule, ReactiveFormsModule],
})
export class CreditCardModule {}
