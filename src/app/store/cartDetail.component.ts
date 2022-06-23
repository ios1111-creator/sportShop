import {Component} from "@angular/core";
import {CartModel} from "../model/cart.model";

@Component({
  templateUrl:"cartDeatail.component.html"
})
export class CartDetailComponent{
constructor(public cart: CartModel) {
}
}
