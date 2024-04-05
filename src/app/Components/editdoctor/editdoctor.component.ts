import { Speciality } from './../../Models/app.constants';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../Models/app.model';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Insurance } from '../../Models/app.constants';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-editdoctor',
  standalone:true,
  imports: [RouterModule, FormsModule],
  templateUrl: './editdoctor.component.html',
  styleUrls: ['./editdoctor.component.css']
})
export class EditdoctorComponent implements OnInit {

  doctor:Doctor;
  speciality : Array<string>;

  message:string;


  constructor(private serv:AdminHttpService,private router:Router, private act:ActivatedRoute){
    this.doctor = new Doctor(0,'','','','',0);

    this.speciality = Speciality;
    this.message="";
  }

  ngOnInit(): void {
    this.act.params.subscribe((params)=>{
      this.doctor.doctorID = params['id'];

      this.serv.getDoctorById(this.doctor.doctorID, "").subscribe({
        next: (response) => {
          this.doctor = response.record;
          this.message = response.Message;
        },
        error: (error) => {
          this.message = `Error: ${error}`;
        }
      })
    })
  }

  clear():void {
    this.doctor = new Doctor(0,'','','','',0);
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
      this.serv.putDoctor(this.doctor.doctorID, this.doctor, "").subscribe({
        next: (response) => {

          this.message = response.Message;
        },
        error: (error) => {
          this.message = `Error: ${error}`;
        }
      })
      this.router.navigate(['/viewdoctors'], { state: { newDoctor: this.doctor} });
      this.clear();
    }

    else
    {
      alert('Please fill in all fields.');
    }
  }

}
