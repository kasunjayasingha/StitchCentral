import {Component, OnInit} from '@angular/core';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, Validators} from "@angular/forms";
import {ValidationHandlerService} from "../../service/validation-handler/validation-handler.service";
import {AuthService} from "../../service/auth.service";
import {CustomerService} from "../../service/customer.service";
import {MessageService} from "primeng/api";
import Swal from "sweetalert2";

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;

  submitted = false;
  contactUsForm = this.formBuilder.group({
    firstName: [null, Validators.required],
    lastName: [null],
    email: [null, [Validators.required, Validators.pattern(this.validationHandlerService.emailValidation())]],
    message: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private validationHandlerService: ValidationHandlerService,
    private authService: AuthService,
    private customerService: CustomerService,
    private messageService: MessageService,
  ) {
  }

  get f1() {
    return this.contactUsForm.controls;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactUsForm.invalid) {
      return;
    } else {
      // console.log(this.contactUsForm.value);
      const formData = new FormData();
      formData.append('name', this.contactUsForm.value.firstName + ' ' + this.contactUsForm.value.lastName);
      formData.append('email', this.contactUsForm.value.email + '');
      formData.append('message', this.contactUsForm.value.message + '');
      console.log(formData);
      this.customerService.SAVE_CONTACTUS(formData).subscribe((res: any) => {
        if (res.success === true) {
          console.log(res);
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your message has been sent successfully!',
            confirmButtonText: 'Ok',
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
              this.submitted = false;
              this.contactUsForm.reset();
            }
          });
          // this.submitted = false;
          // this.contactUsForm.reset();
        } else {
        }
      }, (error: any) => {
        console.log(error);
      });
    }
  }

}
