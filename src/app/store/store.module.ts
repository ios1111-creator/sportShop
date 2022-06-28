import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from "./store.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {StoreFirstGuard} from "../store-first.guard";
import {CounterDirective} from "./counter.directive";
import {CartDetailComponent} from "./cart-detail/cart-detail.component";
import {CartSummaryComponent} from "./cart-summary/cart-summary.component";
import {CheckoutComponent} from "./checkout/checkout.component";


@NgModule({

  declarations: [
    CounterDirective,
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
  ],
  exports: [
    CounterDirective,
    StoreComponent
  ],
  providers: [
    StoreFirstGuard
  ]
})
export class StoreModule {
}
