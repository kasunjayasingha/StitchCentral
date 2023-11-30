import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from 'src/app/service/auth.service';
import {ValidationHandlerService} from 'src/app/service/validation-handler/validation-handler.service';
import Swal from 'sweetalert2';
import {CustomerDTO} from "../../DTO/customerDTO";
import {CustomerService} from 'src/app/service/customer.service';
import {MessageService} from "primeng/api";
import {Toast} from 'primeng/toast';
import {AppointmentsDTO} from "../../DTO/AppointmentsDTO";
import {ClientSampleDTO} from 'src/app/DTO/clientSampleDTO';
import {AppoinmentService} from "../../service/appoinment.service";
import {FileHandleModel} from "../../DTO/file.handle.model";
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  isDisabled = false;

  // customerform: FormGroup;
  submittedCustomer = false;
  submittedAppoinment: boolean = false;
  displayAppointment: boolean = false;
  date: Date | undefined

  appoinmentform = this.formBuilder.group({
    type: [null, Validators.required],
    description: [null, Validators.required],
    appointment_date: [null, Validators.required],
    // client_sample: [null, Validators.required],
  });

  customerform = this.formBuilder.group({
    first_name: [{value: '', disabled: this.isDisabled}, Validators.required],
    last_name: [{value: '', disabled: this.isDisabled}, Validators.required],
    address: [{value: '', disabled: this.isDisabled}, Validators.required],
    city: [{value: '', disabled: this.isDisabled}, Validators.required],
    // postal_code: [null, Validators.required],
    university: [{value: '', disabled: this.isDisabled}],
    company: [{value: '', disabled: this.isDisabled}],
    club: [{value: '', disabled: this.isDisabled}],
    phone_number: [null, [Validators.required, Validators.pattern(this.validationHandlerService.mobileNumberWithCountryCodeValidation())]],
    email: [null, [Validators.required, Validators.pattern(this.validationHandlerService.emailValidation())]],

  });


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

  fileHandle: FileHandleModel = {
    file: new File([], ''),
    appointment_id: 0
  }

  formData: FormData = new FormData();

  appointmentInfo = new AppointmentsDTO(0,
    0,
    new Date(),
    '',
    '',
    '',
    new ClientSampleDTO(0, '', '', '', '', 0, new Date(), new Date()),
    new CustomerDTO(0, '', '', '', '', 0, '', '', '', '', 0, '', '', new Date(), new Date()),
    this.formData
  );
  appoinmentId = 0;
  isfileSelected = false;


  constructor(
    private formBuilder: FormBuilder,
    private validationHandlerService: ValidationHandlerService,
    private authService: AuthService,
    private customerService: CustomerService,
    private messageService: MessageService,
    private appoinmentService: AppoinmentService,
    private sanitizer: DomSanitizer,
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

  get f2() {
    return this.appoinmentform.controls;
  }

  ngOnInit(): void {
    // this.customerInfo = new CustomerDTO(0, '', '', '', '', 0, '', '', '', '', 0, '', new Date(), new Date());
    if (sessionStorage.getItem('USER')) {
      this.customerInfo = JSON.parse(sessionStorage.getItem('USER')!)[0] ?? JSON.parse(sessionStorage.getItem('USER')!);
      this.isDisabled = true;
    }
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
        this.displayAppointment = true;
        this.submittedCustomer = false;
        console.log("success");
      }
    }

  }

  onAppoinmentSubmit() {
    this.submittedAppoinment = true;
    console.log(this.appoinmentform.value);
    if (this.appoinmentform.invalid) {
      console.log("invalid");
      return;
    } else {
      if (!(sessionStorage.getItem('USER'))) {
        console.log("1");
        this.customerInfo.customer_type = 'GUEST';
        this.customerService.SAVE_CUSTOMER(this.customerInfo).subscribe((data) => {
          console.log("2");
          this.appointmentInfo.customer.customer_type = 'GUEST';

          if (data.success == false) {
            console.log("3");
            const dataMessageArray = data.message.split(' ');
            if (dataMessageArray.includes('Customer') && dataMessageArray.includes('already')
              && dataMessageArray.includes('exists')) {
              console.log("4");
              console.log("Customer already exists");
              this.appointmentInfo.customer.email = dataMessageArray[3];
              this.appoinmentAPI();
            }
          } else if (data.success == true) {
            console.log("5");
            this.appointmentInfo.customer.email = this.customerInfo.email;
            console.log("New GUEST Customer saved");
            this.appoinmentAPI();

          } else {
            console.log("6");

            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Customer Registration Failed',
            });
          }
        });
      } else {
        console.log("7");
        this.appointmentInfo.customer.email = this.customerInfo.email;
        this.appointmentInfo.customer.customer_type = 'REGULAR';
        this.appoinmentAPI();
      }


    }

  }

  appoinmentAPI() {
    console.log("Appoinment----" + JSON.stringify(this.appointmentInfo));
    this.appointmentInfo.status = 'PENDING';

    this.appoinmentService.SAVE_APPOINMENT(this.appointmentInfo).subscribe((data) => {
      if (data.success == true) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Appointment Created',
        });

        if (this.appointmentInfo.file != null || this.appointmentInfo.file != undefined) {
          console.log("form data " + JSON.stringify(this.appointmentInfo.file));
          console.log("file selected");
          const dataMessageArray = data.message.split(' ');
          this.appoinmentId = dataMessageArray[1];
          console.log("appoinmentId " + this.appoinmentId);

          this.appoinmentService.SAVE_APPONMENT_SAMPLE(this.appointmentInfo).subscribe((data) => {
            if (data.success == true) {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Appointment Created',
              });
              // this.messageService.add({severity: 'success', summary: 'Success', detail: 'Appointment Created'});
              this.submittedAppoinment = false;
              this.displayAppointment = false;
              this.customerform.reset();
              this.appoinmentform.reset();
              this.customerInfo = new CustomerDTO(0, '', '', '', '', 0, '', '', '', '', 0, '', '', new Date(), new Date());
              this.appointmentInfo = new AppointmentsDTO(0, 0, new Date(), '', '', '', new ClientSampleDTO(0, '', '', '', '', 0, new Date(), new Date()), new CustomerDTO(0, '', '', '', '', 0, '', '', '', '', 0, '', '', new Date(), new Date()),
                this.formData
              );
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Appointment Creation Failed',
              });
            }
          });
        }

        // this.messageService.add({severity: 'success', summary: 'Success', detail: 'Appointment Created'});
        this.submittedAppoinment = false;
        this.displayAppointment = false;
        this.customerform.reset();
        this.appoinmentform.reset();
        this.customerInfo = new CustomerDTO(0, '', '', '', '', 0, '', '', '', '', 0, '', '', new Date(), new Date());
        this.appointmentInfo = new AppointmentsDTO(0, 0, new Date(), '', '', '', new ClientSampleDTO(0, '', '', '', '', 0, new Date(), new Date()), new CustomerDTO(0, '', '', '', '', 0, '', '', '', '', 0, '', '', new Date(), new Date()),
          this.formData
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Appointment Creation Failed',
        });
      }
    });


  }

  onCustomerBack() {
    this.displayAppointment = !this.displayAppointment;
  }

  // prepareFormData(appointmentInfo: AppointmentsDTO) {
  //   const formData = new FormData();
  //   formData.append(
  //     'file',
  //     appointmentInfo.file.file,
  //
  //     // appointmentInfo.file.file.name
  //   );
  //   formData.append('appointmentId', appointmentInfo.file.appointment_id.toString());
  //   // formData.append('appointmentId', appointmentInfo.id.toString());
  //   // const jsonBlob = new Blob([JSON.stringify(appointmentInfo)], {type: 'application/json'});
  //   // formData.append('appointmentInfo', jsonBlob, 'appointmentInfo.json');
  //   console.log("form data " + JSON.stringify(formData));
  //   return formData;
  // }

  onSelectedChange(event: any) {
    console.log("dd-------- " + event.data);
    if (event.target.files[0]) {
      console.log("dd-------- " + event.target.files[0].name);
      this.isfileSelected = true;

      const file = event.target.files[0];

      const formData = new FormData();
      formData.append("appointmentId", this.customerInfo.email);
      formData.append("file", file);


      // Assuming appointmentInfo is an instance of AppointmentsDTO
      this.appointmentInfo.file = formData;
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
