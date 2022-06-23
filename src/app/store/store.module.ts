import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterDirective } from './counter.directive';
import {StoreComponent} from "./store.component";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    CounterDirective,
    StoreComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,

  ],
  exports: [
    CounterDirective,
    StoreComponent
  ]
})
export class StoreModule { }
