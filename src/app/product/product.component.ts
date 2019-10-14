import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductService } from './../product.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router: Router,private productService : ProductService) { }

  product : any = {};
  ngOnInit() {
  }

  addProduct(){
    this.productService.addProduct(this.product)
      .subscribe(res => console.log(res));
  }

  moveToHome(){

    this.router.navigate(['/home']);
  }
}
