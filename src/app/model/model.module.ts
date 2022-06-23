import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRepository} from "./product.repository";
import {StaticDataSource} from "./static.datasource";
import {CartModel} from "./cart.model";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ProductRepository,
    StaticDataSource,
    CartModel
  ]
})
export class ModelModule { }
