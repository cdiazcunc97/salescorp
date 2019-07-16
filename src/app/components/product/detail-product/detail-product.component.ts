import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IProductViewModel} from '../../../models/IProductViewModel';
import {ProductService} from '../../../services/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  singupForm: FormGroup;
  imgURL: any;
  public product: IProductViewModel;
  public isLoading: boolean = true;
  constructor(private _builderForm: FormBuilder, private productService: ProductService, private router: Router, private routerActive: ActivatedRoute) { }

  ngOnInit() {
    let idProducto = parseInt(this.routerActive.snapshot.paramMap.get('idProducto'))
    this.productService.getProductById(idProducto).subscribe(product => {
      this.setProductInForm(product);
      this.isLoading = false;
    });
  }

  setProductInForm(product: IProductViewModel){
    this.singupForm = this._builderForm.group({
      idProducto: product.idProducto,
      descripcion: [product.descripcion, Validators.compose([Validators.maxLength(1000), Validators.minLength(20), Validators.required])],
      precio: [product.precio, Validators.compose([Validators.required, Validators.pattern('^[0-9]+([.][0-9]+)?$')])],
      stock: [product.stock, Validators.compose([Validators.required, Validators.pattern('^[1-9]+([,][0-9]+)?$')])]
    });
    this.imgURL = product.foto;
  }

}
