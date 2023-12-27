import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigService} from "./config.service";
import {CustomerDTO} from "../DTO/customerDTO";
import {APPIONMENT_URL_API, NEW_USER_REGISTRATSION_URL_API} from "../API_URL.const";
import {AppointmentsDTO} from "../DTO/AppointmentsDTO";
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class AppoinmentService {

  constructor(
    private http: HttpClient,
    private ConfigService: ConfigService,
    private messageService: MessageService,
  ) {
  }

  SAVE_APPOINMENT(appoinment: AppointmentsDTO) {
    return this.http.post<any>(APPIONMENT_URL_API.ADDAPPOINMENT, appoinment, {headers: this.ConfigService.getHeaders()});
  }

  SAVE_APPONMENT_SAMPLE(appoinment: AppointmentsDTO) {
    return this.http.post<any>(APPIONMENT_URL_API.ADDAPPOINMENT_WITH_SAMPLE, appoinment.file);
  }

  GET_APPOINMENT(email: string) {
    return this.http.get<any>(APPIONMENT_URL_API.GETAPPOINMENT + email, {headers: this.ConfigService.getHeaders()});
  }

  UPDATE_APPOINMENT(appoinment: AppointmentsDTO) {
    return this.http.put<any>(APPIONMENT_URL_API.UPDATEAPPOINMENT, appoinment, {headers: this.ConfigService.getHeaders()});
  }

  DELETE_APPOINMENT(email: string) {
    return this.http.delete<any>(APPIONMENT_URL_API.DELETEAPPOINMENT + email, {headers: this.ConfigService.getHeaders()});
  }


}
