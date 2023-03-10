import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core';

import { Product } from "./products";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) { }
  addToCart = (item: Product) => this.items.push(item);
  getItems = () => this.items;
  clearCart = () => {
    this.items = [];
    return this.items
  }

  getShippingPrices = () => {
    return this.http.get<{ type: string, price: number }[]>("/assets/shipping.json");
  }
}
