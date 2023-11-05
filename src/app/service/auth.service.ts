import {Injectable} from '@angular/core';
import {AUTENTICATION_URL_API} from "../API_URL.const";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) {
  }


  async checkEmailExists(email: string) {
    return new Promise((resolve, reject) => {
      let response: string;
      const promise = this.http.get(AUTENTICATION_URL_API.CHEACK_EMAIL.EMAIL + email).toPromise();
      promise.then((data) => {
        console.log('Promise resolved with: ' + data);
        // @ts-ignore
        response = data.success == true;
        resolve(response);
      }).catch((error) => {
        console.log('Promise rejected with ' + JSON.stringify(error));
        reject('Not a good response 500');
        // this.toastr.error(' Upload Failed');
      });
    });
  }
}
