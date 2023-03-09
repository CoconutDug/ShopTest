export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  number_shares: number;
}

export const products:Product[] = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    number_shares:0
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    number_shares:0
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    number_shares:0
  },
  {
    id: 4,
    name: 'Phone Expensive',
    price: 900,
    description: '',
    number_shares:0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/