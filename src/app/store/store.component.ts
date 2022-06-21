import {Component, OnInit} from '@angular/core';
import {ProductRepository} from "../model/product.repository";
import {Product} from "../model/product";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private repository: ProductRepository) {
  }

  ngOnInit(): void {
  }

  get products(): Product[] {
    return this.repository.getProducts()
  }

  get categories(): (string | undefined)[] {
    return this.repository.getCategories();
  }
}
