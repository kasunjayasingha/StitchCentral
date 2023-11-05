import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from 'src/app/service/auth.service';
import {ValidationHandlerService} from 'src/app/service/validation-handler/validation-handler.service';
import Swal from 'sweetalert2';
import {CustomerDTO} from "../../DTO/customerDTO";
import {CustomerService} from 'src/app/service/customer.service';
import {MessageService} from "primeng/api";
import {Toast} from 'primeng/toast';


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  // customerform: FormGroup;
  submittedCustomer = false;
  displayAppointment: boolean = false;


  customerform = this.formBuilder.group({
    first_name: [null, Validators.required],
    last_name: [null, Validators.required],
    address: [null, Validators.required],
    city: [null, Validators.required],
    // postal_code: [null, Validators.required],
    university: [''],
    company: [''],
    club: [''],
    phone_number: [null, [Validators.required, Validators.pattern(this.validationHandlerService.mobileNumberWithCountryCodeValidation())]],
    email: [null, [Validators.required, Validators.pattern(this.validationHandlerService.emailValidation())]],

  });
  customerInfo = new CustomerDTO(0, '', '', '', '', 0, '', '', '', '', 0, '', '', new Date(), new Date());

  constructor(
    private formBuilder: FormBuilder,
    private validationHandlerService: ValidationHandlerService,
    private authService: AuthService,
    private customerService: CustomerService,
    private messageService: MessageService,
  ) {
    // this.customerform = this.formBuilder.group({
    //   first_name: [''],
    //   last_name: [''],
    //   address: [''],
    //   city: [''],
    //   postal_code: [''],
    //   university: [''],
    //   company: [''],
    //   club: [''],
    //   phone_number: [''],
    //   email: [''],
    // });
    // this.customerform = new FormGroup({
    //   first_name: new FormControl('', Validators.required),
    //   last_name: new FormControl('', Validators.required),
    //   address: new FormControl('', Validators.required),
    //   city: new FormControl('', Validators.required),
    //   postal_code: new FormControl('', Validators.required),
    //   university: new FormControl(''),
    //   company: new FormControl(''),
    //   club: new FormControl(''),
    //   phone_number: new FormControl('', [Validators.required, Validators.pattern(this.validationHandlerService.mobileNumberWithCountryCodeValidation())]),
    //   email: new FormControl('', [Validators.required, Validators.pattern(this.validationHandlerService.emailValidation())]),
    // });
  }

  get f1() {
    return this.customerform.controls;
  }

  ngOnInit(): void {
    // this.customerInfo = new CustomerDTO(0, '', '', '', '', 0, '', '', '', '', 0, '', new Date(), new Date());
    this.reactiveForm();
  }

  reactiveForm() {

  }

  async onCustomerSubmit() {
    this.submittedCustomer = true;
    console.log(this.customerform.value);
    if (this.customerform.invalid) {
      console.log("invalid");
      return;
    } else {
      console.log("Customer----" + JSON.stringify(this.customerInfo));
      let result_email = await this.authService.checkEmailExists(this.customerInfo.email);
      if (result_email == true) {
        this.EMAIL_REJECTED();
        return;
      } else {
        if (!sessionStorage.getItem('CUSTOMER_TYPE')) {
          this.customerInfo.customer_type = 'GUEST';
          this.customerService.SAVE_CUSTOMER(this.customerInfo).subscribe((data) => {

            if (data.scusess == true) {
              this.displayAppointment = true;
            } else {

              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: 'Customer Registration Failed',
              });
            }
          });
        }
        this.displayAppointment = true;
        this.submittedCustomer = false;
        console.log("success");
      }
    }

  }


  EMAIL_REJECTED() {
    Swal.fire({
      icon: 'warning',
      title: 'This email already has pending appointment',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }

}
