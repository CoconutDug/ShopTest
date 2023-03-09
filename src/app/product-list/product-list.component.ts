import { Component } from '@angular/core';

import { products,Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  totalShares = 0;
  lastProductNotified= '';
  share() {
    window.alert(`The product has been shared!`);
  }
  
  onNotify(p:Product) {
    window.alert(`You will be notified when the product: ${p.name} goes on sale`);
  }

  updateShares(last: string) {
    this.lastProductNotified = last;
    this.totalShares++;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/