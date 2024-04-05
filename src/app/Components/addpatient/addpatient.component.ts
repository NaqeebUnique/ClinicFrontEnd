import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../Models/app.model';

import { BloodType, Gender, Insurance } from '../../Models/app.constants';
import { Router } from '@angular/router';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { Session } from 'inspector';
import { SecurityHttpService } from '../../Services/securityHttp.service';
import { AppUser, UserRole } from '../../Models/app.security.model';


@Component({
  selector: 'app-addpatient',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addpatient.component.html',
  styleUrl: './addpatient.component.css'
})
export class AddpatientComponent{

  @Output() patientAdded: EventEmitter<Patient> = new EventEmitter<Patient>();
  @ViewChild('formContainer') formContainer: any;

  patient:Patient;
  patients:Array<Patient>;
  gender: Array<string>;
  bloodtype : Array<string>;
  insurance : Array<string>;
  columns:Array<string>;
  message:string;
  token:any;
  patuser:AppUser;
  patrole:UserRole;


  constructor(private serv:AdminHttpService,private router: Router, private secserv:SecurityHttpService){
    this.patient = new Patient(0,'','',new Date(), '','','','','','','',);
    this.patients = new Array<Patient>();   
    this.columns = new Array<string>();
    this.columns = Object.keys(this.patient);
    this.bloodtype = BloodType;
    this.insurance = Insurance;
    this.gender = Gender;
    this.message="";
    this.token=sessionStorage.getItem("token");
    this.patuser = new AppUser('','','');
    this.patrole = new UserRole('','');
  }

  clear():void {
    this.patient = new Patient(0,'','', new Date(),'','','','','','','',);
  }
  save():void
  {
    if (
      this.patient.firstName &&
      this.patient.lastName &&
      this.patient.dob &&
      this.patient.address&&
      this.patient.bloodType&&
      this.patient.contact&&
      this.patient.emergencyContact&&
      this.patient.gender&&
      this.patient.insurance
    )
    {
      this.serv.postPatient(this.patient, this.token).subscribe({
        next: (response) => {
          this.patient = response.record;
          
          this.patuser.Email = this.patient.email;  
          this.patuser.Password = "Patient@123";
          this.patuser.ConfirmPassowrd = "Patient@123";
          this.secserv.registerUser(this.patuser).subscribe({
            next: (response) => {
              this.patuser = response.AppUser;
              console.log("patient created")
              alert("Patient User Created.\n Username: "+this.patient.email+"\n Password:"+" Patient@123")

              this.patrole.Email = this.patient.email;
              this.patrole.RoleName = 'Patient';

              this.secserv.assignRole(this.patrole).subscribe({
                next: (response) => {
                  response.UserRole = this.patrole;
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
      this.router.navigate(['/viewpatients']);
      this.clear();
    }

    else
    {
      alert('Please fill in all fields.');
    }
  }
  
}
