import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {throwError} from "rxjs";
import {HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {MessageService} from "primeng/api";
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  isLogout: boolean = false;

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {
  }

  handleError(err: HttpErrorResponse) {
    // console.log("Begin", err);
    if (err.error instanceof ProgressEvent) {
      // Network Error
    } else if (err.error instanceof ErrorEvent) {
      console.log('An error occurred: ' + err.error.message);
    } else {
      if (err.status === 400) {
        console.log('An error occurred: ' + err.error.message);
      } else if (err.status === 301) {
        console.log('You will be logged out.');
        console.log('An error occurred: ' + err.error.message)
      } else if (err.status === 401) {
        console.log('You will be logged out.');
      } else if (err.status === 403) {
        console.log('An error occurred: ' + err.error.message);
      } else if (err.status === 404) {
        console.log('An error occurred: ' + err.error.message);
      } else if (err.status === 500) {
        const output = err.error.message;
        const tokenExpireMessageArray = output.split(' ');
        if (tokenExpireMessageArray.includes('JWT') && tokenExpireMessageArray.includes('expired')
          && tokenExpireMessageArray.includes('at')) {
          // this.isSessionExpired = true;
          // this.logOut('Your Seesion is expired, please login again');

        } else {
          console.log('An error occurred: ' + err.error.message);
        }
      } else {
        console.log('ELSE An error occurred: ' + err.error.message);
      }
    }
    return throwError(err);
  }

  getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict'
    });

  }

  getHeadersForMultiPart(): HttpHeaders {
    const boundary = Math.random().toString().substr(2);
    return new HttpHeaders({
      'Content-Type': `multipart/form-data; boundary=${boundary}`,
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
      'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict'
    });


  }

  reloadPage() {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/reload']);
    this.router.navigate(['']);
  }

  isLogoutTrue(): boolean {
    return this.isLogout;
  }

  logOut() {
    sessionStorage.clear();
    localStorage.clear();

    Swal.fire({
      icon: 'info',
      title: 'Logout',
      text: 'You are logout successfully!',
      confirmButtonText: 'Ok',
    });
    // this.reloadPage();
    this.router.navigate(['']);
    this.isLogout = true;
  }
}
