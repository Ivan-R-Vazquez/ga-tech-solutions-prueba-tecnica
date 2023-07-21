import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideCardNumber',
})
export class HideCardNumberPipe implements PipeTransform {
  transform(cardNumber: string): string {
    if (cardNumber) {
      const numberLength = cardNumber.length;
      if (numberLength < 12) {
        return '*'.repeat(numberLength);
      } else {
        return '*'.repeat(12) + cardNumber.slice(12);
      }
    }

    return cardNumber;
  }
}
