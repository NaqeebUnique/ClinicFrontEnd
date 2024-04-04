import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { Bill, Patient } from '../../Models/app.model';
import { CommonModule } from '@angular/common';
import { DoctorHttpService } from '../../Services/DoctorHttp.service';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { AddReportComponent } from '../addreport/addreport.component';

@Component({
  selector: 'app-billsforpatient',
  standalone: true,
  imports: [AdddoctorComponent, RouterModule, CommonModule, AddReportComponent],
  templateUrl: './billsforpatient.component.html',
  styleUrl: './billsforpatient.component.css'
})
export class BillsforpatientComponent {

  bill:Bill;
  bills:Array<Bill>;
  message:string;
  columns:Array<string>
  newReport: Report | undefined;
  patients: Array<Patient>
  patientid: number;

  constructor(private serv:DoctorHttpService, private router: Router, private serv1:AdminHttpService){
    this.bills=new Array<Bill>();
    this.bill = new Bill(0,0,0,0,0,new Date());
    this.message = '';
    this.columns = Object.keys(this.bills);
    this.patients = new Array<Patient>();
    this.patientid = 1;
  }
  ngOnInit(): void {
    this.serv.getBills("").subscribe({  
      next: (response) => {
        this.bills = response.records;
        this.message = response.Message;
        this.bills = this.bills.filter(bill => bill.patientID === this.patientid);
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
      })
 }

 getPatientName(pid:number):string
 {  const patient = this.patients.find(patient => patient.patientID === pid);
     return patient ? `${patient.firstName} ${patient.lastName}` : '';
}

}
