import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductRepository} from "./product.repository";
import {StaticDataSource} from "./static.datasource";
import {CartModel} from "./cart.model";
import {OrderModel} from './order.model';
import {OrderRepository} from "./order.repository";
import {RestDatasource} from "./rest.datasource";
import { AuthService } from './auth.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductRepository,
    CartModel,
    OrderModel,
    OrderRepository,
    {provide: StaticDataSource, useClass: RestDatasource},
    RestDatasource,
    AuthService
  ]
})
export class ModelModule {
}
