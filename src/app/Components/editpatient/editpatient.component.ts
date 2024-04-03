import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../Models/app.model';

import { BloodType, Gender, Insurance } from '../../Models/app.constants';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AdminHttpService } from '../../Services/AdminHttp.service';

@Component({
  selector: 'app-editpatient',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './editpatient.component.html',
  styleUrl: './editpatient.component.css'
})

export class EditpatientComponent implements OnInit{

  patient:Patient;
  gender: Array<string>;
  bloodtype : Array<string>;
  insurance : Array<string>;

  message:string;


  constructor(private serv:AdminHttpService,private router: Router, private act:ActivatedRoute){
    this.patient = new Patient(0,'','',new Date(), '','','','','','','',);

    this.bloodtype = BloodType;
    this.insurance = Insurance;
    this.gender = Gender;
    this.message="";
  }

  ngOnInit(): void {
    this.act.params.subscribe((params)=>{
      this.patient.patientID = params['id'];

      this.serv.getPatientById(this.patient.patientID, "").subscribe({
        next: (response) => { 
          this.patient = response.record;
          this.message = response.Message;
        },
        error: (error) => {
          this.message = `Error: ${error}`;
        }
      })
    })
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
      this.serv.putPatient(this.patient.patientID, this.patient, "").subscribe({
        next: (response) => {
          this.patient = response.record;
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
