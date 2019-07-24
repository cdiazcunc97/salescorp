import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ApplicationComponent } from './components/application/application.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {CustomerService} from './services/customer/customer.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaginatorComponent } from './components/generics/paginator/paginator.component';
import { SalesComponent } from './components/sales/sales.component';
import { IndexSalesComponent } from './components/sales/index-sales/index-sales.component';
import { CreateSalesComponent } from './components/sales/create-sales/create-sales.component';

@NgModule({
  declarations: [
    ApplicationComponent,
    NavbarComponent,
    routingComponents,
    PaginatorComponent,
    SalesComponent,
    IndexSalesComponent,
    CreateSalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [ApplicationComponent]
})
export class AppModule { }
