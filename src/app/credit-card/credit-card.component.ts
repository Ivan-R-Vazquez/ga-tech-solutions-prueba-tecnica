import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent implements OnInit {
  creditCardForm: FormGroup;

  cardNameHolderError: boolean = false;
  cardNumberError: boolean = false;
  cardExpirationError: boolean = false;
  cardCVVError: boolean = false;

  openModal: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.creditCardForm = this.fb.group({
      holderName: this.fb.control('', [Validators.required]),
      cardNumber: this.fb.control('', [
        Validators.required,
        Validators.pattern(
          /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}(?:2131|1800|35\d{3})\d{11})$/gm
        ),
      ]),
      cardExpiration: this.fb.control('', [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/),
      ]),
      cardCVV: this.fb.control('', [
        Validators.required,
        Validators.pattern(/^\d{3}$/g),
      ]),
    });
  }

  onSubmit() {
    if (!this.creditCardForm.valid) {
      this.cardNameHolderError = !this.onControlIsValid('holderName');

      this.cardNumberError = !this.onControlIsValid('cardNumber');

      this.cardExpirationError = !this.onControlIsValid('cardExpiration');

      this.cardCVVError = !this.onControlIsValid('cardCVV');

      return;
    }

    this.openModal = true;
  }

  onCancel() {
    this.creditCardForm.reset();
  }

  onCheckControlValidity(controlName: string) {
    if (controlName === 'holderName') {
      this.cardNameHolderError = !this.onControlIsValid(controlName);
    } else if (controlName === 'cardNumber') {
      this.cardNumberError = !this.onControlIsValid(controlName);
    } else if (controlName === 'cardExpiration') {
      this.cardExpirationError = !this.onControlIsValid(controlName);
    } else if (controlName === 'cardCVV') {
      this.cardCVVError = !this.onControlIsValid(controlName);
    }
  }

  private onControlIsValid(controlName: string): boolean {
    return this.creditCardForm.get(controlName).valid;
  }
}
