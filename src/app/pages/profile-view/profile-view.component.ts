import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {CustomerService} from "../../service/customer.service";
import {ValidationHandlerService} from "../../service/validation-handler/validation-handler.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {CustomerDTO} from "../../DTO/customerDTO";
import Swal from "sweetalert2";
import {ConfigService} from "../../service/config.service";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  // signUpForm = new FormGroup({
  //   first_name: new FormControl(null, Validators.required),
  //   last_name: new FormControl(null, Validators.required),
  //   address: new FormControl(null, Validators.required),
  //   city: new FormControl(null, Validators.required),
  //   phone_number: new FormControl(null, [Validators.required, Validators.pattern(this.validationHandlerService.mobileNumberWithCountryCodeValidation())]),
  //   email: new FormControl(null, [Validators.required, Validators.pattern(this.validationHandlerService.emailValidation())]),
  //   password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  // });


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

  notEditable = true;
  submitEditForm = false;
  signUpForm = this.formBuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    address: ['', Validators.required],
    phone_number: ['', [Validators.required, Validators.pattern(this.validationHandlerService.mobileNumberWithCountryCodeValidation())]],
    email: ['', [Validators.required, Validators.pattern(this.validationHandlerService.emailValidation())]],
    password: ['', [Validators.minLength(6)]],
  });

  constructor(
    private authService: AuthService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private validationHandlerService: ValidationHandlerService,
    private messageService: MessageService,
    private route: Router,
    private configService: ConfigService
  ) {
  }

  get f1() {
    return this.signUpForm.controls;
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('USER')) {
      this.customerInfo = JSON.parse(sessionStorage.getItem('USER')!);
    }

  }

  reactiveForm() {

  }

  canEdit() {
    this.notEditable = !this.notEditable;
    this.customerInfo = JSON.parse(sessionStorage.getItem('USER')!);
    this.customerInfo.password = '';
    // this.reactiveForm();
  }

  submit() {
    console.log(this.signUpForm.value);
    this.submitEditForm = true;

    if (this.signUpForm.invalid) {
      console.log('invalid');
      return;

    } else {
      console.log('valid');
      this.customerService.UPDATE_CUSTOMER(this.customerInfo).subscribe((res) => {
        if (res.success == true) {
          console.log(JSON.stringify(res));
          if (this.customerInfo.password != '') {
            this.configService.logOut();
          }
          this.customerInfo.password = '';
          sessionStorage.setItem('USER', JSON.stringify(this.customerInfo));
          this.notEditable = !this.notEditable;
          this.submitEditForm = false;
          Swal.fire({
            title: 'Success!',
            text: 'Profile Updated Successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
          });

        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Profile Updated Failed!',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      });
    }
  }

  cancel() {
    this.notEditable = !this.notEditable;

  }


}
