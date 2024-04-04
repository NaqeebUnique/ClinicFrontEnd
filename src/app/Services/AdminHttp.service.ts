import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponse, Appointment, Bill, Doctor, Patient, Visit } from '../Models/app.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminHttpService {

  private url:string;

constructor(private http:HttpClient) {

  this.url='https://localhost:7270/'
 }


  getAppointment(token:any):Observable<APIResponse<Appointment>>{
    let response:Observable<APIResponse<Appointment>>;
    //from here we are calling the API
    response=this.http.get<APIResponse<Appointment>>(`${this.url}api/Admin/GetAppoinments`,{
      headers:{
        'AUTHORIZATION':`Bearer ${token}`
      }
    });

    return response;
  }

  getAppointmentById(id:number,token:any):Observable<APIResponse<Appointment>> {
    let response:Observable<APIResponse<Appointment>>;
    response = this.http.get<APIResponse<Appointment>>(`${this.url}api/Admin/GetAppoinment/${id}`,{
      headers:{
        'AUTHORIZATION':`Bearer ${token}`
      }
    });
    return response;
 }

 postAppointment(app:Appointment,token:any):Observable<APIResponse<Appointment>> {
  let response:Observable<APIResponse<Appointment>>;
  response = this.http.post<APIResponse<Appointment>>(`${this.url}api/Admin/PostAppoinment`, app, {
    headers: {
      'Content-Type':'application/json',
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}
putAppointment(id:number,app:Appointment,token:any):Observable<APIResponse<Appointment>> {
  let response:Observable<APIResponse<Appointment>>;
  response = this.http.put<APIResponse<Appointment>>(`${this.url}api/Admin/PutAppointment/${id}`, app, {
    headers: {
      'Content-Type':'application/json',
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}

deleteAppointment(id:number,token:any):Observable<APIResponse<Appointment>> {
  let response:Observable<APIResponse<Appointment>>;
  response = this.http.delete<APIResponse<Appointment>>(`${this.url}api/Admin/DeleteAppoinment/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}

// getDoctors(token:any):Observable<APIResponse<Doctor>>{
//   let response:Observable<APIResponse<Doctor>>;
//   //from here we are calling the API
//   response=this.http.get<APIResponse<Doctor>>(`${this.url}api/Admin/GetDoctors`,{
//     headers:{
//       'AUTHORIZATION':`Bearer ${token}`
//     }
//   });

//   return response;
// }
getDoctors(token: any): Observable<APIResponse<Doctor>> {

  console.log(token);
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjVjOWU0NzRkLWM4NjktNDUwZi05Y2YyLWU5Mzc4NmNjYTliNyIsInJvbGUiOiJBZG1pbmlzdHJhdG9yIiwibmJmIjoxNzEyMTQyMTIwLCJleHAiOjE3MTIxNDMzMjAsImlhdCI6MTcxMjE0MjEyMH0.F-TrkPQMF2oUIOfXw8tIcrHMgwrVpBq177L6hhTXWZY`
  });

  return this.http.get<APIResponse<Doctor>>(`${this.url}api/Admin/GetDoctors`, { headers });
}

getDoctorById(id:number,token:any):Observable<APIResponse<Doctor>> {
  let response:Observable<APIResponse<Doctor>>;

  response = this.http.get<APIResponse<Doctor>>(`${this.url}api/Admin/GetDoctor/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}

postDoctor(app:Doctor,token:any):Observable<APIResponse<Doctor>> {
let response:Observable<APIResponse<Doctor>>;
response = this.http.post<APIResponse<Doctor>>(`${this.url}api/Admin/PostDoctors`, app, {
  headers: {
    'Content-Type':'application/json',
    'AUTHORIZATION':`Bearer ${token}`
  }
});
return response;
}
putDoctor(id:number,app:Doctor,token:any):Observable<APIResponse<Doctor>> {
let response:Observable<APIResponse<Doctor>>;
response = this.http.put<APIResponse<Doctor>>(`${this.url}api/Admin/PutDoctors/${id}`, app, {
  headers: {
    'Content-Type':'application/json',
    'AUTHORIZATION':`Bearer ${token}`
  }
});
return response;
}

deleteDoctor(id:number,token:any):Observable<APIResponse<Doctor>> {
let response:Observable<APIResponse<Doctor>>;
response = this.http.delete<APIResponse<Doctor>>(`${this.url}api/Admin/DeleteDoctors/${id}`,{
  headers:{
    'AUTHORIZATION':`Bearer ${token}`
  }
});
return response;
}

getPatients(token:any):Observable<APIResponse<Patient>>{
  let response:Observable<APIResponse<Patient>>;
  //from here we are calling the API
  response=this.http.get<APIResponse<Patient>>(`${this.url}api/Admin/GetPatients`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });

  return response;
}

getPatientById(id:number,token:any):Observable<APIResponse<Patient>> {
  let response:Observable<APIResponse<Patient>>;
  response = this.http.get<APIResponse<Patient>>(`${this.url}api/Admin/GetPatient/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}

postPatient(app:Patient,token:any):Observable<APIResponse<Patient>> {
let response:Observable<APIResponse<Patient>>;
response = this.http.post<APIResponse<Patient>>(`${this.url}api/Admin/PostPatient`, app, {
  headers: {
    'Content-Type':'application/json',
    'AUTHORIZATION':`Bearer ${token}`
  }
});
return response;
}
putPatient(id:number,app:Patient,token:any):Observable<APIResponse<Patient>> {
let response:Observable<APIResponse<Patient>>;
response = this.http.put<APIResponse<Patient>>(`${this.url}api/Admin/PutPatient/${id}`, app, {
  headers: {
    'Content-Type':'application/json',
    'AUTHORIZATION':`Bearer ${token}`
  }
});
return response;
}

deletePatient(id:number,token:any):Observable<APIResponse<Patient>> {
let response:Observable<APIResponse<Patient>>;
response = this.http.delete<APIResponse<Patient>>(`${this.url}api/Admin/DeletePatient/${id}`,{
  headers:{
    'AUTHORIZATION':`Bearer ${token}`
  }
});
return response;
}


getDIById(id:number,token:any):Observable<APIResponse<Patient>> {
  let response:Observable<APIResponse<Patient>>;
  response = this.http.get<APIResponse<Patient>>(`${this.url}api/Admin/GetDI/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}



getVisits(token:any):Observable<APIResponse<Visit>>{
  let response:Observable<APIResponse<Visit>>;
  //from here we are calling the API
  response=this.http.get<APIResponse<Visit>>(`${this.url}api/Admin/GetVisits`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });

  return response;
}

getVisitById(id:number,token:any):Observable<APIResponse<Visit>> {
  let response:Observable<APIResponse<Visit>>;
  response = this.http.get<APIResponse<Visit>>(`${this.url}api/Admin/GetVisit/${id}`,{
    headers:{
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
}

postBill(app:Bill,token:any):Observable<APIResponse<Bill>> {
  let response:Observable<APIResponse<Bill>>;
  response = this.http.post<APIResponse<Bill>>(`${this.url}api/Admin/PostBill`, app, {
    headers: {
      'Content-Type':'application/json',
      'AUTHORIZATION':`Bearer ${token}`
    }
  });
  return response;
  }

  getBills(token:any):Observable<APIResponse<Bill>>{
    let response:Observable<APIResponse<Bill>>;
    //from here we are calling the API
    response=this.http.get<APIResponse<Bill>>(`${this.url}api/Admin/GetBills`,{
      headers:{
        'AUTHORIZATION':`Bearer ${token}`
      }
    });
  
    return response;
  }


}
