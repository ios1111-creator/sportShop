import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from "./store/store.module";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
