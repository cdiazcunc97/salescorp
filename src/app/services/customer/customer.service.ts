import { Injectable } from '@angular/core';
import {UnitOfWorkService} from '../unitOfWork/unit-of-work.service';
import {Observable} from 'rxjs';
import {ICustomerViewModel} from '../../models/ICustomerViewModel';
import {AppConstans} from '../../utils/AppConstans';
import {Paginator} from '../../models/Paginator';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly baseUrlCustomer: string = '';
  constructor(private unitOfWork: UnitOfWorkService, private appConstans: AppConstans) {
    this.baseUrlCustomer = this.appConstans.baseURL + 'clientes/';
  }

  getCustomersPaginate(page ?, itemsPerPage ?): Observable<Paginator<ICustomerViewModel>> {
    if(page > 0 && itemsPerPage > 0)
      return this.unitOfWork.getQueryable<Paginator<ICustomerViewModel>>(this.appConstans.baseURL + 'clientes?page=' + page + '&limit=' + itemsPerPage);
    else
      return this.unitOfWork.getQueryable<Paginator<ICustomerViewModel>>(this.baseUrlCustomer);
  }

  getCustomerById(idCustomer): Observable<ICustomerViewModel> {
      return this.unitOfWork.getById<ICustomerViewModel>(this.baseUrlCustomer + idCustomer);
  }

  createCustomer(customer: ICustomerViewModel): Observable<ICustomerViewModel> {
    return this.unitOfWork.create<ICustomerViewModel>(this.baseUrlCustomer, customer);
  }

  updateCustomer(idCustomer, customer: ICustomerViewModel): Observable<ICustomerViewModel> {
    return this.unitOfWork.update<ICustomerViewModel>(this.baseUrlCustomer + idCustomer, customer);
  }

  deleteCustomer(idCustomer): Observable<boolean>{
    return this.unitOfWork.delete(this.baseUrlCustomer + idCustomer);
  }
}
