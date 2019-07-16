import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../services/customer/customer.service';
import {ICustomerViewModel} from '../../../models/ICustomerViewModel';

@Component({
  selector: 'app-index-customer',
  templateUrl: './index-customer.component.html',
  styleUrls: ['./index-customer.component.css']
})
export class IndexCustomerComponent implements OnInit {

  public isLoading: boolean = true;
  public customers: ICustomerViewModel[] = [];
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersPaginate().subscribe(customers => {
      this.customers = customers;
      this.isLoading = false;
    });
  }

  deleteCustomer(idCliente){
    this.customerService.deleteCustomer(parseInt(idCliente)).subscribe( data => {
      document.getElementById('customer-' + idCliente).remove();
      this.ngOnInit();
    });
  }

}
