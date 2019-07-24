import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexCustomerComponent} from './components/customer/index-customer/index-customer.component';
import {CreateCustomerComponent} from './components/customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './components/customer/edit-customer/edit-customer.component';
import {DetailCustomerComponent} from './components/customer/detail-customer/detail-customer.component';
import {IndexProductComponent} from './components/product/index-product/index-product.component';
import {CreateProductComponent} from './components/product/create-product/create-product.component';
import {EditProductComponent} from './components/product/edit-product/edit-product.component';
import {DetailProductComponent} from './components/product/detail-product/detail-product.component';

const routes: Routes = [
  { path: 'customers', component: IndexCustomerComponent },
  { path: 'customers/create', component: CreateCustomerComponent,  },
  { path: 'customers/edit/:idCliente', component: EditCustomerComponent },
  { path: 'customers/detail/:idCliente', component: DetailCustomerComponent },
  { path: 'products', component: IndexProductComponent },
  { path: 'products/create', component: CreateProductComponent },
  { path: 'products/edit/:idProducto', component: EditProductComponent },
  { path: 'products/detail/:idProducto', component: DetailProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  IndexCustomerComponent,
  CreateCustomerComponent,
  EditCustomerComponent,
  DetailCustomerComponent,
  IndexProductComponent,
  CreateProductComponent,
  EditProductComponent,
  DetailProductComponent
];
