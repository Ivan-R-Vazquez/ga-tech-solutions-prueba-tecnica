import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Product } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class ShopCartService {
  private cartShopStore: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);

  readonly cartShop$: Observable<Product[]> = this.cartShopStore.asObservable();

  constructor(private http: HttpClient) {}

  getShopCart() {
    return this.http
      .get<Product[]>('assets/mockups/cart.json')
      .pipe(tap((cart) => this.cartShopStore.next(cart)));
  }

  addProduct(newProduct: Product) {
    const products = this.cartShopStore.getValue();
    const newProducts = products.map((product) => ({ ...product }));
    const indexProduct = newProducts.findIndex(
      (product) => product.id === newProduct.id
    );
    if (indexProduct >= 0) {
      newProducts[indexProduct].quantity = newProduct.quantity;
    } else {
      newProducts.push(newProduct);
    }
    return of(newProducts).pipe(
      tap((products) => this.cartShopStore.next(products))
    );
  }

  removeProduct(newProduct: Product) {
    const products = this.cartShopStore.getValue();
    const newProducts = products.map((product) => ({ ...product }));
    const indexProduct = newProducts.findIndex(
      (product) => product.id === newProduct.id
    );
    if (indexProduct >= 0) {
      if (newProduct.quantity === 0) {
        newProducts.splice(indexProduct, 1);
      } else {
        newProducts[indexProduct].quantity = newProduct.quantity;
      }
    } else {
      console.error("This product doesn't exist");
    }
    return of(newProducts).pipe(
      tap((products) => this.cartShopStore.next(products))
    );
  }

  removeCart() {
    return of([]).pipe(tap((cart) => this.cartShopStore.next(cart)));
  }
}
