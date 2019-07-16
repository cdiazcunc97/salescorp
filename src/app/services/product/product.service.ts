import { Injectable } from '@angular/core';
import {UnitOfWorkService} from '../unitOfWork/unit-of-work.service';
import {AppConstans} from '../../utils/AppConstans';
import {Observable} from 'rxjs';
import {IProductViewModel} from '../../models/IProductViewModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly baseUrlProduct: string = '';
  constructor(private unitOfWork: UnitOfWorkService, private appConstans: AppConstans) {
    this.baseUrlProduct = this.appConstans.baseURL + 'productos/';
  }

  getProductsPaginate(): Observable<IProductViewModel[]> {
    return this.unitOfWork.getQueryable<IProductViewModel[]>(this.baseUrlProduct);
  }

  getProductById(idProduct): Observable<IProductViewModel> {
    return this.unitOfWork.getById<IProductViewModel>(this.baseUrlProduct + idProduct);
  }

  createProduct(product: IProductViewModel): Observable<IProductViewModel> {
    return this.unitOfWork.create<IProductViewModel>(this.baseUrlProduct, product);
  }

  updateProduct(idProduct, product: IProductViewModel): Observable<IProductViewModel> {
    return this.unitOfWork.update<IProductViewModel>(this.baseUrlProduct + idProduct, product);
  }

  deleteProduct(idProduct): Observable<boolean>{
    return this.unitOfWork.delete(this.baseUrlProduct + idProduct);
  }
}
