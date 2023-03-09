import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
  @Output() notifyLast = new EventEmitter<string>();

  updateLast() {
    this.notifyLast.emit(this.product.name);
  }
}
