import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Patient } from '../models/patient.model';
import { PatientLogic } from '../logic/patient.logic';
import { BloodType, Gender, Insurance } from '../models/constants';
import { Router } from '@angular/router';


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
  private logic:PatientLogic;


  constructor(private router: Router){
    this.patient = new Patient('','','','', '','','','','','','',);
    this.patients = new Array<Patient>();
    this.logic = new PatientLogic();
    this.patients = this.logic.getPatients();
    this.columns = new Array<string>();
    this.columns = Object.keys(this.patient);
    this.bloodtype = BloodType;
    this.insurance = Insurance;
    this.gender = Gender;
  }

  clear():void {
    this.patient = new Patient('','','', '','','','','','','','',);
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
      this.patients = this.logic.addPatient(this.patient);
      this.router.navigate(['/viewpatients'], { state: { newPatient: this.patient } });
      this.clear();
    } 
    
    else 
    {
      alert('Please fill in all fields.');
    }
  }
}
