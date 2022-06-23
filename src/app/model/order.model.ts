import {Injectable} from "@angular/core";
import {CartModel} from "./cart.model";

@Injectable({
  providedIn: "root"
})
export class OrderModel {
  public id: number | null | undefined;
  public name: string | null | undefined;
  public address: string | null | undefined
  public city: string | undefined | null;
  public state: string | undefined | null;
  public zip: string | undefined | null;
  public country: string | undefined | null;
  public shipped: boolean = false;

  constructor(public cart: CartModel) {

  }

  clear() {
    this.id = null;
    this.name = this.address = this.city = null;
    this.state = this.zip = this.country = null;
    this.shipped = false;
    this.cart.clear();
  }
}
