import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, Appointment, Prescription, Report, Visit } from '../Models/app.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorHttpService {

private url:string;

constructor(private http:HttpClient) {

  this.url='https://localhost:7270/'
 }

 getReport(token:any):Observable<APIResponse<Report>>{
  let response:Observable<APIResponse<Report>>;
  //from here we are calling the API
  response=this.http.get<APIResponse<Report>>(`${this.url}api/Doctor/GetReports`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });

  return response;
}

getReportById(id:number,token:any):Observable<APIResponse<Report>> {
  let response:Observable<APIResponse<Report>>;
  response = this.http.get<APIResponse<Report>>(`${this.url}api/Doctor/GetReport/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}

postReport(app:Report,token:any):Observable<APIResponse<Report>> {
let response:Observable<APIResponse<Report>>;
response = this.http.post<APIResponse<Report>>(`${this.url}api/Doctor/PostReport`, app, {
  headers: {
    'Content-Type':'application/json',
    'AUTHORIZATION':`Bearer ${token}`
  }
});
return response;
}
putReport(id:number,app:Report,token:any):Observable<APIResponse<Report>> {
let response:Observable<APIResponse<Report>>;
response = this.http.put<APIResponse<Report>>(`${this.url}api/Doctor/PutReport/${id}`, app, {
  headers: {
    'Content-Type':'application/json',
    'AUTHORIZATION':`Bearer ${token}`
  }
});
return response;
}

deleteReport(id:number,token:any):Observable<APIResponse<Report>> {
let response:Observable<APIResponse<Report>>;
response = this.http.delete<APIResponse<Report>>(`${this.url}api/Doctor/DeleteReport/${id}`,{
  headers:{
    'AUTHORIZATION':`Bearer ${token}`
  }
});
return response;
}

getPrescription(token:any):Observable<APIResponse<Prescription>>{
  let response:Observable<APIResponse<Prescription>>;
  //from here we are calling the API
  response=this.http.get<APIResponse<Prescription>>(`${this.url}api/Doctor/GetPres`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });

  return response;
}

getPrescriptionById(id:number,token:any):Observable<APIResponse<Prescription>> {
  let response:Observable<APIResponse<Prescription>>;
  response = this.http.get<APIResponse<Prescription>>(`${this.url}api/Doctor/DeletePre/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}

postPrescription(app:Prescription,token:any):Observable<APIResponse<Prescription>> {
let response:Observable<APIResponse<Prescription>>;
response = this.http.post<APIResponse<Prescription>>(`${this.url}api/Doctor/PostPre`, app, {
  headers: {
    'Content-Type':'application/json',
    'AUTHORIZATION':`Bearer ${token}`
  }
});
return response;
}
putPrescription(id:number,app:Prescription,token:any):Observable<APIResponse<Prescription>> {
let response:Observable<APIResponse<Prescription>>;
response = this.http.put<APIResponse<Prescription>>(`${this.url}api/Doctor/PutPre/${id}`, app, {
  headers: {
    'Content-Type':'application/json',
    'AUTHORIZATION':`Bearer ${token}`
  }
});
return response;
}

deletePrescription(id:number,token:any):Observable<APIResponse<Prescription>> {
let response:Observable<APIResponse<Prescription>>;
response = this.http.delete<APIResponse<Prescription>>(`${this.url}api/Doctor/DeletePre/${id}`,{
  headers:{
    'AUTHORIZATION':`Bearer ${token}`
  }
});
return response;
}

getDocAppById(id:number,token:any):Observable<APIResponse<Appointment>> {
  let response:Observable<APIResponse<Appointment>>;
  response = this.http.get<APIResponse<Appointment>>(`${this.url}api/Doctor/GetAppointmentModel/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}

getDocVisitsById(id:number,token:any):Observable<APIResponse<Visit>> {
  let response:Observable<APIResponse<Visit>>;
  response = this.http.get<APIResponse<Visit>>(`${this.url}api/Doctor/GetVisits/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}

getDocIncomeById(id:number,token:any):Observable<APIResponse<Visit>> {
  let response:Observable<APIResponse<Visit>>;
  response = this.http.get<APIResponse<Visit>>(`${this.url}api/Doctor/GetIncomeDetials/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}
}
