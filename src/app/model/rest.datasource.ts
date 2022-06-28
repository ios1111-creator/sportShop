import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "./product";
import {OrderModel} from "./order.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable({providedIn: "root"})
export class RestDatasource {
  baseUrl: string;
  auth_token: null | undefined;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products");
  }

  saveOrder(order: OrderModel): Observable<OrderModel> {
    return this.http.post<OrderModel>(this.baseUrl + "orders", order)
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + "login", {
      name: user,
      password: pass
    }).pipe(map(response => {
      this.auth_token = response.success ? response.token : null;
      return response.success
    }));

  }

  saveProduct(product: Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl + "products",product,this.getOptions());
  }

  private getOptions(){
    return {
      headers : new HttpHeaders({
        "Authorization": `Bearer<${this.auth_token}>`
      })
    }
  }
}
