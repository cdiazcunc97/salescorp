import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IProductViewModel} from '../../../models/IProductViewModel';
import {ProductService} from '../../../services/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ICustomerViewModel} from '../../../models/ICustomerViewModel';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  singupForm: FormGroup;
  public imagePath;
  imgURL: any;
  public message: string;
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

  preview(files: FileList) {
    if (files.length === 0)
      return;
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    let reader = new FileReader();
    this.imagePath = files;
    let image = files[0];
    reader.readAsDataURL(image);
    reader.onload = (event) => {
      this.imgURL = reader.result;
    }
  }

  update(values){
    this.isLoading = true;
    let idProducto = parseInt(this.routerActive.snapshot.paramMap.get('idProducto'));
    let product: IProductViewModel = values.value;
    product.precio = parseFloat(values.value.precio);
    product.stock = parseFloat(values.value.stock);
    product.foto = this.imgURL;
    this.productService.updateProduct(idProducto, product).subscribe(product => {
      this.router.navigateByUrl('/products');
      this.isLoading = false;
    });
  }

}
