import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {CustomerDTO} from "../DTO/customerDTO";
import {NEW_USER_REGISTRATSION_URL_API} from "../API_URL.const";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "Content-Type": "application/json",
  //   })
  // };

  constructor(
    private http: HttpClient,
    private ConfigService: ConfigService
  ) {
  }

  SAVE_CUSTOMER(client: CustomerDTO) {
    return this.http.post<any>(NEW_USER_REGISTRATSION_URL_API.REGISTER, client, {headers: this.ConfigService.getHeaders()});
  }

  GET_CUSTOMER(email: string) {
    return this.http.get<any>(NEW_USER_REGISTRATSION_URL_API.GET_CUSTOMER + email, {headers: this.ConfigService.getHeaders()});
  }
}
