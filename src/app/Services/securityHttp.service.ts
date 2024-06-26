import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppUser, LoginUser, RoleInfo, SecurityResponse, UserRole } from '../Models/app.security.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SecurityHttpService {

  url:string;

constructor(private http:HttpClient) {

  this.url='https://localhost:7270/'
 }

 registerUser(user:AppUser):Observable<SecurityResponse>{
  let response:Observable<SecurityResponse>;

  response=this.http.post<SecurityResponse>(`${this.url}api/Security/register/Register`,
  user,{
    headers:{
      'Content-Type': 'application/json'
    }
  });
  return response;

 }

 assignRole(user:UserRole):Observable<SecurityResponse>{
  let response:Observable<SecurityResponse>;

  response=this.http.post<SecurityResponse>(`${this.url}api/Security/approveuser`,
  user,{
    headers:{
      'Content-Type': 'application/json'
    }
  });
  return response;
 }

 //To authenticate user
 authenticateUser(user:LoginUser):Observable<SecurityResponse> {
  let response:Observable<SecurityResponse>;
  response = this.http.post<SecurityResponse>(`${this.url}api/Security/authorization`,
       user, {
         headers: {
            'Content-Type': 'application/json'
         }
       });
  return response;
}

//To create new role
newRole(user:RoleInfo):Observable<SecurityResponse> {
let response:Observable<SecurityResponse>;
response = this.http.post<SecurityResponse>(`${this.url}api/Security/newrole`,
     user, {
       headers: {
          'Content-Type': 'application/json'
       }
     });
return response;
}

logout(): Observable<SecurityResponse> {
  return this.http.post<SecurityResponse>(`${this.url}api/Security/logout`, {}, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
}
