import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../services/customer/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ICustomerViewModel} from '../../../models/ICustomerViewModel';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {

  singupForm: FormGroup;
  public isLoading: boolean = true;
  constructor(private _builderForm: FormBuilder, private customerService: CustomerService, private router: Router, private routerActive: ActivatedRoute) { }

  ngOnInit() {
    let idCliente = parseInt(this.routerActive.snapshot.paramMap.get('idCliente'))
    this.customerService.getCustomerById(idCliente).subscribe(customer => {
      this.setCustomerInForm(customer);
      this.isLoading = false;
    });
  }

  setCustomerInForm(customer: ICustomerViewModel){
    this.singupForm = this._builderForm.group({
      idCliente: customer.idCliente,
      estadoCliente: customer.estadoCliente,
      dni: [customer.dni, Validators.compose([Validators.maxLength(8), Validators.minLength(8), Validators.required])],
      nombres: [customer.nombres, Validators.required],
      apellidoPaterno: [customer.apellidoPaterno, Validators.required],
      apellidoMaterno: [customer.apellidoMaterno, Validators.required]
    });
  }

}
