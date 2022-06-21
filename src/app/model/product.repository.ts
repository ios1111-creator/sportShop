import {Injectable} from "@angular/core";
import {Product} from "./product";
import {StaticDataSource} from "./static.datasource";

@Injectable({providedIn: 'root'})
export class ProductRepository {
  private products: Product[] = [];
  private categories: (string | undefined)[] = [];

  constructor(private dataSource: StaticDataSource) {
    dataSource.getProducts().subscribe(data => {
      this.products = data;
      this.categories = data.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) == index).sort();

    });
  }

  getProducts(category: any = null): Product[] {
    return this.products.filter(p => category == null || category == p.category);
  }

  getProduct(id: number): Product | undefined {
    return this.products.find(p => p.id == id);
  }

  getCategories(): (string | undefined)[] {
    return this.categories;
  }
}
