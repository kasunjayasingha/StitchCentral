import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {CustomerService} from "../../service/customer.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidationHandlerService} from "../../service/validation-handler/validation-handler.service";
import {CustomerDTO} from "../../DTO/customerDTO";
import {MessageService} from "primeng/api";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  submittedSignUp = false;
  confirmPasswords: any;
  isPasswordsMatch = false;

  customerInfo = new CustomerDTO(0,
    '',
    '',
    '',
    '',
    0,
    '',
    '',
    '',
    '',
    0,
    '',
    '',
    new Date(),
    new Date());

  signUpForm = this.formBuilder.group({
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
    password: ['', [Validators.required, Validators.minLength(6)]],
    // confirmPassword: ['', Validators.required],
  });

  constructor(
    private authService: AuthService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private validationHandlerService: ValidationHandlerService,
    private messageService: MessageService,
    private route: Router,
  ) {
  }

  get f1() {
    return this.signUpForm.controls;
  }

  ngOnInit(): void {
  }

  onSignUp() {
    this.submittedSignUp = true;
    if (this.signUpForm.invalid) {

      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill all required fields'
      });
      return;
    } else {
      this.customerInfo.customer_type = 'REGULAR';
      this.customerService.SAVE_CUSTOMER(this.customerInfo).subscribe(response => {
        if (response.success === true) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Successfully Registered',
            confirmButtonText: 'OK',
            allowOutsideClick: false,

          });
          this.route.navigate(['login']);
        } else if (response.success === false && response.message === 'Customer already exists ' + this.customerInfo.email) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Customer details update successfully',
            // confirmButtonText: 'OK',
            // allowOutsideClick: false,
          });
          this.route.navigate(['login']);

        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Something went wrong',

          });
        }

        this.signUpForm.reset();
        this.submittedSignUp = false;
        this.customerInfo = new CustomerDTO(0, '', '', '', '', 0, '', '', '', '', 0, '', '', new Date(), new Date());
      });
    }

  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

}
