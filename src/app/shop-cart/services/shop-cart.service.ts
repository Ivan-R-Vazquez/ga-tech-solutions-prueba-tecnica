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

  private get productsCopy() {
    const products = this.cartShopStore.getValue();
    return products.map((product) => ({ ...product }));
  }

  getShopCart() {
    return this.http
      .get<Product[]>('assets/mockups/cart.json')
      .pipe(tap((cart) => this.cartShopStore.next(cart)));
  }

  addProduct(newProduct: Product) {
    const newProducts = this.productsCopy;
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
    const newProducts = this.productsCopy;
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

  removeOneFromCart(id: string) {
    const newProducts = this.productsCopy;
    const indexProduct = newProducts.findIndex((product) => product.id === id);
    if (indexProduct >= 0) {
      newProducts.splice(indexProduct, 1);
    } else {
      console.error("This product doesn't exist");
    }
    return of(newProducts).pipe(
      tap((products) => this.cartShopStore.next(products))
    );
  }

  removeAllCart() {
    return of([]).pipe(tap((cart) => this.cartShopStore.next(cart)));
  }
}
