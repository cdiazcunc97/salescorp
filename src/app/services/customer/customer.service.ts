import { Injectable } from '@angular/core';
import {UnitOfWorkService} from '../unitOfWork/unit-of-work.service';
import {Observable} from 'rxjs';
import {ICustomerViewModel} from '../../models/ICustomerViewModel';
import {AppConstans} from '../../utils/AppConstans';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly baseUrlCustomer: string = '';
  constructor(private unitOfWork: UnitOfWorkService, private appConstans: AppConstans) {
    this.baseUrlCustomer = this.appConstans.baseURL + 'clientes/';
  }

  getCustomersPaginate(): Observable<ICustomerViewModel[]> {
    return this.unitOfWork.getQueryable<ICustomerViewModel[]>(this.baseUrlCustomer);
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
