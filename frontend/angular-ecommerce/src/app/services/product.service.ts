import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8080/api/products";


  // performs HTTP Requests
  constructor(private httpClient: HttpClient) { }

  // returns an observable, maps json data from spring data rest to product array
  getProductList(): Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.products)
    )
  }
}

// unwraps json from spring data rest _embedded entry
interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
