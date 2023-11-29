import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {CustomerService} from "../../service/customer.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ValidationHandlerService} from "../../service/validation-handler/validation-handler.service";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {LoginReqestDTO} from "../../DTO/LoginReqestDTO";
import Swal from "sweetalert2";
import {ConfigService} from "../../service/config.service";

@Component({
  selector: 'client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {
  submittedLogin = false;

  LoginReqestDTO = new LoginReqestDTO('', '', '');

  loginForm = this.formBuilder.group({
    email: [null, [Validators.required, Validators.pattern(this.validationHandlerService.emailValidation())]],
    password: [null, Validators.required],
  });

  constructor(
    private authService: AuthService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private validationHandlerService: ValidationHandlerService,
    private messageService: MessageService,
    private route: Router,
    private config: ConfigService,
  ) {
  }

  get f1() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
  }

  onLogin() {
    this.submittedLogin = true;
    if (this.loginForm.invalid) {
      console.log("invalid");
      return;
    }
    this.authService.LOGIN(this.LoginReqestDTO).subscribe((res) => {
      if (res != null) {
        console.log(JSON.stringify(res));
        sessionStorage.setItem('USER', JSON.stringify(res));
        this.config.reloadPage();

        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Login Successfully!',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid Credentials!',
        })
        this.loginForm.reset();
      }
    });

  }


}
