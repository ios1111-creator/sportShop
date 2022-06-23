import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from "./store/store.module";
import {NgModule} from "@angular/core";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
