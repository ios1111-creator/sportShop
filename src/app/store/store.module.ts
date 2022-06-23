import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreComponent} from "./store.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CartDetailComponent} from "./cartDetail.component";
import {CheckoutComponent} from "./checkout.component";
import {RouterModule} from "@angular/router";
import {StoreFirstGuard} from "../store-first.guard";
import {CartSummaryComponent} from "./cartSummary.component";
import {CounterDirective} from "./counter.directive";


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
    RouterModule.forRoot([
      {
        path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]
      },
      {
        path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard]
      },
      {
        path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]
      },
      {
        path: "**", redirectTo: "/store"
      }
    ])
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
