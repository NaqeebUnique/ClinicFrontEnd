import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../models/doctor.model';
import { DoctorLogic } from '../logic/doctor.logic';
import { BloodType, Gender, Insurance, Speciality } from '../models/constants';
import { Router } from '@angular/router';


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
  private logic:DoctorLogic;


  constructor(private router: Router){
    this.doctor = new Doctor('','','','', '','');
    this.logic = new DoctorLogic();
    this.doctors = this.logic.getDoctors();
    this.columns = Object.keys(this.doctor);
    this.speciality = Speciality;
  }

  clear():void {
    this.doctor = new Doctor('','','', '','','');
  }
  save():void 
  {
    if (
      this.doctor.FirstName &&
      this.doctor.LastName &&
      this.doctor.Email &&
      this.doctor.Speciality&&
      this.doctor.Salary
    ) 
    {
      this.doctors = this.logic.addDoctor(this.doctor);
      this.router.navigate(['/viewdoctors'], { state: { newDoctor: this.doctor } });
      this.clear();
    } 
    
    else 
    {
      alert('Please fill in all fields.');
    }
  }
}
