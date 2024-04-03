import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../../Models/app.model';
import { BloodType, Gender, Insurance, Speciality } from '../../Models/app.constants';
import { Router } from '@angular/router';
import { AdminHttpService } from '../../Services/AdminHttp.service';


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



  constructor(private serv:AdminHttpService,private router: Router){
    this.doctor = new Doctor(0,'','','', '','');
    this.doctors=new Array<Doctor>;
    this.columns = Object.keys(this.doctor);
    this.speciality = Speciality;
    this.message="";
  }

  clear():void {
    this.doctor = new Doctor(0,'','', '','','');
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

          console.log(this.doctor);
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
