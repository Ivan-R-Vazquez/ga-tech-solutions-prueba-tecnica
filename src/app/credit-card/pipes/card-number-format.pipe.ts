import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumberFormat',
})
export class CardNumberFormatPipe implements PipeTransform {
  transform(cardNumber: string): string {
    if (cardNumber) {
      return cardNumber.match(/.{1,4}/g).join(' ');
    }

    return cardNumber;
  }
}
