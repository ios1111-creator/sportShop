import {Component} from "@angular/core";
import {CartModel} from "../model/cart.model";

@Component({
  selector: "app-cart-summary",

  templateUrl: "cartSummary.component.html"
})
export class CartSummaryComponent {
  constructor(public cart: CartModel) {
  }
}
