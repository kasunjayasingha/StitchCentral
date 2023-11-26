import {ClientSampleDTO} from "./clientSampleDTO";
import {CustomerDTO} from "./customerDTO";
import {FileHandleModel} from "./file.handle.model";

export class AppointmentsDTO {
  id: number;
  customer_Id: number;
  appointment_date: Date;
  type: string;
  status: string;
  description: string;
  client_sample: ClientSampleDTO;
  customer: CustomerDTO;
  file: FileHandleModel;


  constructor(id: number, customer_Id: number, appointment_date: Date, type: string,
              status: string, description: string, client_sample: ClientSampleDTO, customer: CustomerDTO, file: FileHandleModel) {
    this.id = id;
    this.customer_Id = customer_Id;
    this.appointment_date = appointment_date;
    this.type = type;
    this.status = status;
    this.description = description;
    this.client_sample = client_sample;
    this.customer = customer;
    this.file = file;
  }

}

