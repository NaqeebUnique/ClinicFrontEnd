import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../../Models/app.model';
import { BloodType, Gender, Insurance, Speciality } from '../../Models/app.constants';
import { Router } from '@angular/router';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { AppUser, UserRole } from '../../Models/app.security.model';
import { SecurityHttpService } from '../../Services/securityHttp.service';


@Component({
  selector: 'app-adddoctor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adddoctor.component.html',
  styleUrl: './adddoctor.component.css'
})
export class AdddoctorComponent {

  @Output() doctorAdded: EventEmitter<Doctor> = new EventEmitter<Doctor>();


  doctor:Doctor;
  doctors:Array<Doctor>;
  speciality : Array<string>;
  columns:Array<string>;
  message:string;
  docuser:AppUser;
  docrole: UserRole;



  constructor(private serv:AdminHttpService,private router: Router, private secserv:SecurityHttpService){
    this.doctor = new Doctor(0,'','','', '',0);
    this.doctors=new Array<Doctor>;
    this.columns = Object.keys(this.doctor);
    this.speciality = Speciality;
    this.message="";
    this.docuser = new AppUser('','','');
    this.docrole = new UserRole('','');
  }

  clear():void {
    this.doctor = new Doctor(0,'','', '','',0);
  }
  save():void
  {
    if (
      this.doctor.firstName &&
      this.doctor.lastName &&
      this.doctor.email &&
      this.doctor.speciality&&
      this.doctor.salary
    )
    {
      const token=sessionStorage.getItem("token")
      const role =sessionStorage.getItem("role")

      this.serv.postDoctor(this.doctor, "").subscribe({
        next: (response) => {
          
          this.doctor = response.record;

          this.docuser.Email = this.doctor.email;  
          this.docuser.Password = "Patient@123";
          this.docuser.ConfirmPassowrd = "Patient@123";
          this.secserv.registerUser(this.docuser).subscribe({
            next: (response) => {
              this.docuser = response.AppUser;
              console.log("patient created")
              alert("Patient User Created.\n Username: "+this.doctor.email+"\n Password:"+" Patient@123")

              this.docrole.Email = this.doctor.email;
              this.docrole.RoleName = 'Doctor';

              this.secserv.assignRole(this.docrole).subscribe({
                next: (response) => {
                  response.UserRole = this.docrole;
                  console.log("patient assigned role")
                },
                error: (error) => {
                  this.message = `Error: ${error}`;
                }
              })

            },
            error: (error) => {
              this.message = `Error: ${error}`;
            }
          })

          this.message = response.Message;
        },
        error: (error) => {
          this.message = `Error: ${error}`;
        }
      })
      this.router.navigate(['/viewdoctors'], { state: { newDoctor: this.doctor } });
      this.clear();
    }

    else
    {
      alert('Please fill in all fields.');
    }
  }
}
