import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../Models/app.model';

import { BloodType, Gender, Insurance } from '../../Models/app.constants';
import { Router } from '@angular/router';
import { AdminHttpService } from '../../Services/AdminHttp.service';


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
  valid: boolean;
  message:string;


  constructor(private serv:AdminHttpService,private router: Router){
    this.patient = new Patient(0,'','',new Date(), '','','','','','','',);
    this.patients = new Array<Patient>();   
    this.columns = new Array<string>();
    this.columns = Object.keys(this.patient);
    this.bloodtype = BloodType;
    this.insurance = Insurance;
    this.gender = Gender;
    this.message="";
    this.valid = true;
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
      this.serv.postPatient(this.patient, "").subscribe({
        next: (response) => {

          console.log(this.patient);
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
