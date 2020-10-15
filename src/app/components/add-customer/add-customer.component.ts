import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer = {
    firstName: '',
    lastName: '',
    mobileNo: ''
  };
  submitted = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  saveCustomer(): void {
    const data = {
      firstName: this.customer.firstName,
      lastName: this.customer.lastName,
      mobileNo: this.customer.mobileNo
    };

    this.customerService.create(data).subscribe(
      Response => {
        console.log(Response);
        this.submitted = true;

      },
      error => {
        console.log(error);

      }
    );
  }
  newCustomer(): void {
    this.submitted = false;
    this.customer = {
      firstName: '',
      lastName: '',
      mobileNo: ''
    };
  }
}
