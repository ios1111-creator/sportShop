import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRepository} from "./product.repository";
import {StaticDataSource} from "./static.datasource";
import {CartModel} from "./cart.model";
import { OrderModel } from './order.model';
import {OrderRepository} from "./order.repository";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductRepository,
    StaticDataSource,
    CartModel,
    OrderModel,
    OrderRepository
  ]
})
export class ModelModule { }
