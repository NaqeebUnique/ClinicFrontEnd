import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, Appointment, Bill, Patient, Prescription, Report } from '../Models/app.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientHttpService {

  private url:string;

constructor(private http:HttpClient) {

  this.url='https://localhost:7270/'
 }

 getPatientAppById(id:number,token:any):Observable<APIResponse<Appointment>> {
  let response:Observable<APIResponse<Appointment>>;
  response = this.http.get<APIResponse<Appointment>>(`${this.url}api/Patient/GetAppointments/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}

getPatientDetailById(id:number,token:any):Observable<APIResponse<Patient>> {
  let response:Observable<APIResponse<Patient>>;
  response = this.http.get<APIResponse<Patient>>(`${this.url}api/Patient/GetPatient/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}

getPatientReportsById(id:number,token:any):Observable<APIResponse<Report>> {
  let response:Observable<APIResponse<Report>>;
  response = this.http.get<APIResponse<Report>>(`${this.url}api/Patient/GetReports/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}

getPatientBillsById(id:number,token:any):Observable<APIResponse<Bill>> {
  let response:Observable<APIResponse<Bill>>;
  response = this.http.get<APIResponse<Bill>>(`${this.url}api/Patient/GetBills/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}
getPatientPresById(id:number,token:any):Observable<APIResponse<Prescription>> {
  let response:Observable<APIResponse<Prescription>>;
  response = this.http.get<APIResponse<Prescription>>(`${this.url}api/Patient/GetPrescription/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}
}
