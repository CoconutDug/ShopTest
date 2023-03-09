import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Product, products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(item: Product) {
    this.cartService.addToCart(item);
    window.alert(`The product ${item.name}: has been added to the cart`);
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdParams = Number(routeParams.get("productId"));
    this.product = products.find((p) => p.id == productIdParams);
  }
}
