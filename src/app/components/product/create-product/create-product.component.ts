import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductService} from '../../../services/product/product.service';
import {IProductViewModel} from '../../../models/IProductViewModel';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  singupForm: FormGroup;
  public imagePath;
  imgURL: any;
  public message: string;
  public isLoading: boolean = false;

  constructor(private _builderForm: FormBuilder, private productService: ProductService, private router: Router) {
    this.singupForm = this._builderForm.group({
      idProducto: 0,
      descripcion: ['', Validators.compose([Validators.maxLength(1000), Validators.minLength(20), Validators.required])],
      precio: [0.0, Validators.compose([Validators.required, Validators.pattern('^[0-9]+([.][0-9]+)?$')])],
      stock: [0.0, Validators.compose([Validators.required, Validators.pattern('^[1-9]+([,][0-9]+)?$')])]
    });
  }

  ngOnInit() {
  }

  preview(files: FileList) {
    if (files.length === 0)
      return;
    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Archivo incorrecto.";
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

  save(values: FormGroup){
    this.isLoading = true;
    let product: IProductViewModel = values.value;
    product.precio = parseFloat(values.value.precio);
    product.stock = parseFloat(values.value.stock);
    product.foto = this.imgURL;
    this.productService.createProduct(product).subscribe(product => {
      this.router.navigateByUrl('/products');
      this.isLoading = false;
    });
  }

}
