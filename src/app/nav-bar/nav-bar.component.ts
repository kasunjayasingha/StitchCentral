import {Component, OnInit} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {ConfigService} from "../service/config.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  faBars = faBars;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faLocationDot = faLocationDot;
  faFacebook = faFacebookF;
  faWhatsapp = faWhatsapp;
  isUserLogin: boolean = false;

  constructor(
    private config: ConfigService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('USER')) {

      this.isUserLogin = true;

    }
  }

  checkSession() {
    if (sessionStorage.getItem('USER')) {

      this.isUserLogin = true;

    } else {
      this.router.navigate(['/login']);
      this.isUserLogin = false;

    }
  }

  logout() {
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: 'Are really want to logout?',
      confirmButtonText: 'Yes',
      showCancelButton: true,
      allowOutsideClick: false,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.config.logOut();
        this.isUserLogin = false;
      }
    })


  }

}
