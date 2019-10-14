import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://localhost:3000/products";
  constructor(private httpClient: HttpClient) { }

  addProduct(product: any){
    return this.httpClient.post(this.url,{
        "name": product.name,
        "description": product.description,
        "barcode": product.barcode,
        "image": product.image
    })
  }
}
