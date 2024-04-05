import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { LoginUser } from '../../Models/app.security.model';
import { SecurityHttpService } from '../../Services/securityHttp.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authUser:LoginUser;
  message:string;
  email:string;
  password:string;

constructor(private serv:SecurityHttpService,private router: Router){

  this.authUser=new LoginUser('','');
  this.message='';
  this.email='';
  this.password='';
}

  login() {
    this.authUser.Email=this.email;
    this.authUser.Password=this.password;

    this.serv.authenticateUser(this.authUser).subscribe({
      next:(response)=>{
          //Store the token in 'session storage'
           sessionStorage.setItem('token',response.token);
           sessionStorage.setItem('role',response.roles);
           sessionStorage.setItem('isLoggedIn',response.isLoggedIn);
           sessionStorage.setItem('userId',response.userId)
           this.message=response.message;
      },
      error:(error)=>{
        this.message=`Error: ${error}`;
      }
    })

    if(sessionStorage.getItem("role")=="Administrator"){
      this.router.navigate(['/adminhomepage'])
    }

      if(sessionStorage.getItem("role")=="Doctor"){
      this.router.navigate(['/doctorhomepage'])
      }
  }
}
