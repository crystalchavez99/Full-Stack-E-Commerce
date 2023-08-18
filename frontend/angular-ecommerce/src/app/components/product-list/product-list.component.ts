import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../common/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  // inject our ProductService
  constructor(private productService: ProductService) { }

  // Similar to @PostConstruct
  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(){
    // throw new Error("Method not implemented");
    // method is invoked once you subscribe
    this.productService.getProductList().subscribe(
      data =>{
        // assign results to product array
        this.products = data;
      }
    )
  }

}
