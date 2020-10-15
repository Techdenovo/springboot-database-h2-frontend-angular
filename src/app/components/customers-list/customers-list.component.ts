import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
  customers: any;
  currentCustomer = null;
  currentIndex = -1;
  firstName = '';
  lastName = '';

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  retrieveCustomers(): void {
    this.customerService.getAll()
      .subscribe(
        data => {
          this.customers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  setActiveCustomer(customer, index): void {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }

  removeAllCustomers(): void {
    this.customerService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCustomers();
        },
        error => {
          console.log(error);
        });
  }

}
