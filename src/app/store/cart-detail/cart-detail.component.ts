import {Component} from "@angular/core";
import {CartModel} from "../../model/cart.model";

@Component({
  templateUrl: "cart-detail.component.html"
})
export class CartDetailComponent {
  constructor(public cart: CartModel) {
  }
}
