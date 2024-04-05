import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Doctor, Patient, Visit } from '../../Models/app.model';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { DoctorHttpService } from '../../Services/DoctorHttp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visits',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './visits.component.html',
  styleUrl: './visits.component.css'
})
export class VisitsComponent implements OnInit{

  visits: Array<Visit>;
  message: string;
  columns: Array<string>;
  patients: Array<Patient>;
  doctors: Array<Doctor>;

  constructor(private serv:AdminHttpService, private router: Router,private serv1:DoctorHttpService)
  {
    this.visits = new Array<Visit>();
    this.message = '';
    this.columns = ["Visit ID", "Patient", "Doctor", "Date of Visit", "Report ID", "Bill ID"];
    this.patients = new Array<Patient>();
    this. doctors = new Array<Doctor>();

  }

  ngOnInit(): void {

    this.serv.getVisits("").subscribe({
      next: (response) => {
        this.visits = response.records;
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })

    this.serv.getPatients("").subscribe({
      next: (response) => {
        this.patients = response.records;
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })

    this.serv.getDoctors("").subscribe({
      next: (response) => {
        this.doctors = response.records;
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })

  }
  
  getPatientname(pid:number):string
  {     
   const patient = this.patients.find(patient => patient.patientID === pid);
     return patient ? `${patient.firstName} ${patient.lastName}` : '';
}

getDoctorname(did:number):string
{     
 const doctor = this.doctors.find(doctor => doctor.doctorID === did);
   return doctor ? `${doctor.firstName} ${doctor.lastName}` : '';
}

}
