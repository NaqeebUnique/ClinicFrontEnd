import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../../Models/app.model';
import { BloodType, Gender, Insurance, Speciality } from '../../Models/app.constants';
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



  constructor(private router: Router){
    this.doctor = new Doctor(0,'','','', '','');
    this.doctors=new Array<Doctor>;
    this.columns = Object.keys(this.doctor);
    this.speciality = Speciality;
  }

  clear():void {
    this.doctor = new Doctor(0,'','', '','','');
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
      
      this.router.navigate(['/viewdoctors'], { state: { newDoctor: this.doctor } });
      this.clear();
    }

    else
    {
      alert('Please fill in all fields.');
    }
  }
}
