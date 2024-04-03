import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../Models/app.model';

import { BloodType, Gender, Insurance } from '../../Models/app.constants';
import { Router } from '@angular/router';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { Session } from 'inspector';


@Component({
  selector: 'app-addpatient',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addpatient.component.html',
  styleUrl: './addpatient.component.css'
})
export class AddpatientComponent {

  @Output() patientAdded: EventEmitter<Patient> = new EventEmitter<Patient>();


  patient:Patient;
  patients:Array<Patient>;
  gender: Array<string>;
  bloodtype : Array<string>;
  insurance : Array<string>;
  columns:Array<string>;

  message:string;
  token:any;


  constructor(private serv:AdminHttpService,private router: Router){
    this.patient = new Patient(0,'','',new Date(), '','','','','','','',);
    this.patients = new Array<Patient>();


    this.columns = new Array<string>();
    this.columns = Object.keys(this.patient);
    this.bloodtype = BloodType;
    this.insurance = Insurance;
    this.gender = Gender;
    this.message="";
    this.token=sessionStorage.getItem("token");
  }

  clear():void {
    this.patient = new Patient(0,'','', new Date(),'','','','','','','',);
  }
  save():void
  {
    if (
      this.patient.FirstName &&
      this.patient.LastName &&
      this.patient.DOB &&
      this.patient.Address&&
      this.patient.BloodType&&
      this.patient.Contact&&
      this.patient.EmergencyContact&&
      this.patient.Gender&&
      this.patient.Insurance
    )
    {
      this.serv.postPatient(this.patient, this.token).subscribe({
        next: (response) => {

          console.log(this.patient);
          this.message = response.Message;
        },
        error: (error) => {
          this.message = `Error: ${error}`;
        }
      })
      this.router.navigate(['/viewpatients'], { state: { newPatient: this.patient } });
      this.clear();
    }

    else
    {
      alert('Please fill in all fields.');
    }
  }
}
