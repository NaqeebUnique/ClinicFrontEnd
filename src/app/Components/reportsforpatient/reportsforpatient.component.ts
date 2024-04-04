import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { Doctor, Report } from '../../Models/app.model';
import { CommonModule } from '@angular/common';
import { DoctorHttpService } from '../../Services/DoctorHttp.service';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { AddReportComponent } from '../addreport/addreport.component';


@Component({
  selector: 'app-reportsforpatient',
  standalone: true,
  imports: [AdddoctorComponent, RouterModule, CommonModule, AddReportComponent],
  templateUrl: './reportsforpatient.component.html',
  styleUrl: './reportsforpatient.component.css'
})
export class ReportsforpatientComponent {

  report:Report;
  reports:Array<Report>;
  message:string;
  columns:Array<string>
  newReport: Report | undefined;
  doctors: Array<Doctor>;
  patientid:number;

  constructor(private serv:DoctorHttpService, private router: Router, private serv1:AdminHttpService){
    this.report = new Report(0,0,0,'');
    this.reports=new Array<Report>();
    this.message = '';
    this.columns = Object.keys(this.report);
    this.doctors = new Array<Doctor>();
    this.patientid = 1;
  }
  ngOnInit(): void {
    this.serv.getReport("").subscribe({
      next: (response) => {
        this.reports = response.records;
        this.reports = this.reports.filter(report => report.patientID === this.patientid);
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    }) 
    this.serv1.getDoctors("").subscribe({
      next: (response) => {
        this.doctors = response.records;
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    }) }

   getDoctorName(did:number):string
   {     
    const doctor = this.doctors.find(doctor => doctor.doctorID === did);
      return doctor ? `${doctor.firstName} ${doctor.lastName}` : '';
}
}
