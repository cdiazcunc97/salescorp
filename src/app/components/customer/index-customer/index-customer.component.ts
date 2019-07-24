import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../../services/customer/customer.service';
import {ICustomerViewModel} from '../../../models/ICustomerViewModel';
import {Paginator} from '../../../models/Paginator';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-index-customer',
  templateUrl: './index-customer.component.html',
  styleUrls: ['./index-customer.component.css']
})
export class IndexCustomerComponent implements OnInit {

  public isLoading: boolean = true;
  public paginator: Paginator<ICustomerViewModel>;
  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const queryParams = this.activatedRoute.snapshot.queryParams
    const page = queryParams.page || 1;
    const limit = queryParams.limit || 5;
    this.customerService.getCustomersPaginate(page, limit).subscribe(paginator => {
      this.paginator = paginator;
      this.isLoading = false;
    });
  }

  deleteCustomer(idCliente){
    this.customerService.deleteCustomer(parseInt(idCliente)).subscribe( data => {
      document.getElementById('customer-' + idCliente).remove();
      this.ngOnInit();
    });
  }

  changePage(page, limit, state){
    if(state){
      this.paginator.items = [];
      this.isLoading = true;
      this.customerService.getCustomersPaginate(page, limit).subscribe(paginator => {
        this.paginator = paginator;
        this.isLoading = false;
      });
    }

  }

}
