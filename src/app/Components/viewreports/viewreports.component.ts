import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { Doctor, Patient, Report } from '../../Models/app.model';
import { CommonModule } from '@angular/common';
import { DoctorHttpService } from '../../Services/DoctorHttp.service';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { AddReportComponent } from '../addreport/addreport.component';

@Component({
  selector: 'app-viewreports',
  standalone: true,
  imports: [AdddoctorComponent, RouterModule, CommonModule, AddReportComponent],
  templateUrl: './viewreports.component.html',
  styleUrl: './viewreports.component.css'
})
export class ViewreportsComponent {

  report:Report;
  reports:Array<Report>;
  message:string;
  columns:Array<string>
  newReport: Report | undefined;
  patients: Array<Patient>;
  doctorid: number;

  constructor(private serv:DoctorHttpService, private router: Router, private serv1:AdminHttpService){
    this.report = new Report(0,0,0,'');
    this.reports=new Array<Report>();
    this.message = '';
    this.columns = Object.keys(this.report);
    this.patients = new Array<Patient>();
    this.doctorid = 1;
  }
  ngOnInit(): void {
    this.serv.getReport("").subscribe({
      next: (response) => {
        this.reports = response.records;
        this.reports = this.reports.filter(rp => rp.dId === this.doctorid);
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    }) 
    this.serv1.getPatients("").subscribe({
      next: (response) => {
        this.patients = response.records;
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    }) }


   onReportDelete(rpt:Report):void
   {
    this.serv.deleteReport(rpt.reportID, "").subscribe({
      next: (response) => {
        const index = this.reports.findIndex(a => a.reportID === rpt.reportID);
        this.reports.splice(index, 1);
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
}
