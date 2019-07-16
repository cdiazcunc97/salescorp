import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ICustomerViewModel} from '../../../models/ICustomerViewModel';
import {CustomerService} from '../../../services/customer/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  singupForm: FormGroup;
  public isLoading = false;
  constructor(private _builderForm: FormBuilder, private customerService: CustomerService, private router: Router) {
    this.singupForm = this._builderForm.group({
      idCliente: 0,
      estadoCliente: 'ACTIVO',
      dni: ['', Validators.compose([Validators.maxLength(8), Validators.minLength(8), Validators.required])],
      nombres: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  save(values: FormGroup){
    this.isLoading = true;
    let customer: ICustomerViewModel = values.value;
    this.customerService.createCustomer(customer).subscribe(data => {
      this.router.navigateByUrl('/customers');
      this.isLoading = false;
    });

  }

}
