import {Injectable} from '@angular/core';
import {AUTENTICATION_URL_API} from "../API_URL.const";
import {HttpClient} from '@angular/common/http';
import {LoginReqestDTO} from "../DTO/LoginReqestDTO";
import {ConfigService} from "./config.service";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private configService: ConfigService
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

  async checkOnlyEmailExists(email: string) {
    return new Promise((resolve, reject) => {
      let response: string;
      const promise = this.http.get(AUTENTICATION_URL_API.CHEACK_EMAIL.ONLY_EMAIL + email).toPromise();
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

  LOGIN(loginReqestDTO: LoginReqestDTO) {
    return this.http.post<any>(AUTENTICATION_URL_API.LOGIN.LOGIN, loginReqestDTO, {headers: this.configService.getHeaders()});
  }


}
