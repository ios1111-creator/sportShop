import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from "./store/store.module";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {StoreComponent} from "./store/store.component";
import {StoreFirstGuard} from "./store-first.guard";
import {HttpClientModule} from "@angular/common/http";
import {CartDetailComponent} from "./store/cart-detail/cart-detail.component";
import {CheckoutComponent} from "./store/checkout/checkout.component";

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    StoreModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]
      },
      {
        path: "cart", component: CartDetailComponent, canActivate: []
      },
      {
        path: "checkout", component: CheckoutComponent, canActivate: []
      },
      {
        path: "admin", loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule), canActivate: []
      },
      {
        path: "**", redirectTo: "/store"
      }
    ])
  ],


  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
