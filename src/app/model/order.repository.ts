import {Injectable} from "@angular/core";
import {OrderModel} from "./order.model";
import {StaticDataSource} from "./static.datasource";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OrderRepository {
  private orders: OrderModel[] = [];

  constructor(private dataSource: StaticDataSource) {

  }

  getOrders(): OrderModel[] {
    return this.orders;
  }

  saveOrder(order: OrderModel): Observable<OrderModel> {
    return this.dataSource.saveOrder(order);
  }
}
