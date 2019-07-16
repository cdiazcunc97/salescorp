import { Component, OnInit } from '@angular/core';
import {IProductViewModel} from '../../../models/IProductViewModel';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-index-product',
  templateUrl: './index-product.component.html',
  styleUrls: ['./index-product.component.css']
})
export class IndexProductComponent implements OnInit {

  public isLoading: boolean = true;
  public products: IProductViewModel[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsPaginate().subscribe(products => {
      this.products = products;
      this.isLoading = false;
    });
  }

  deleteProduct(idProducto){
    this.productService.deleteProduct(parseInt(idProducto)).subscribe( data => {
      document.getElementById('product-' + idProducto).remove();
      this.ngOnInit();
    });
  }

}
