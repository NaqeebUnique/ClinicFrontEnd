import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Report, Visit } from '../../Models/app.model'; 
import { TimeSlots } from '../../Models/app.constants';
import { Router, RouterModule } from '@angular/router';
import { ViewdoctorsComponent } from '../viewdoctors/viewdoctors.component';
import { Doctor } from '../../Models/app.model';
import { Patient } from '../../Models/app.model';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { DoctorHttpService } from '../../Services/DoctorHttp.service';
import { Bill } from '../../Models/app.model';

@Component({
  selector: 'app-addreport',
  standalone: true,
  imports: [FormsModule, RouterModule, ViewdoctorsComponent],
  templateUrl: './addreport.component.html',
  styleUrl: './addreport.component.css'
})
export class AddReportComponent {

  @Output() ReportAdded: EventEmitter<Report> = new EventEmitter<Report>();


  Report:Report;
  Reports:Array<Report>;
  timeslots : Array<string>;
  columns:Array<string>;
  doctors: Array<Doctor>;
  patients: Array<Patient>;
  message:string;
  doctorid:number;
  bill: Bill;
  patient: Patient;
  visit: Visit;


  constructor(private serv:DoctorHttpService, private router: Router, private serv1:AdminHttpService){
    this.Report = new Report(0, 0, 0, '');
    this.columns = Object.keys(this.Report);
    this.timeslots = TimeSlots;
    this.Reports = new Array<Report>();
    this.doctors = new Array<Doctor>();
    this.patients = new Array<Patient>();
    this.message = '';
    this.doctorid = 1;
    this.bill = new Bill(0,0,0,0,0, new Date())
    this.patient = new Patient(0,'','', new Date(), '', '', '', '', '', '', '')
    this.visit = new Visit(0, 0, new Date(), 0,0, 0 );

  }
  ngOnInit(): void {
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

  clear():void {
    this.Report = new Report(0, 0, 0, '');
  }
  save():void 
  {
    if (
      this.Report.patientID &&
      this.Report.diagnosis
    ) 
    {

      this.Report.dId = 1;
      this.serv.postReport(this.Report,"").subscribe({
        next: (response) => {
          this.Report = response.record;
          this.message = response.Message;
        },
        error: (error) => {
          this.message = `Error: ${error}`;
        }
      })

      this.bill.consultingCharge = 500;
      this.bill.patientID = this.Report.patientID;
      this.bill.dateOfVisit = new Date();

      this.serv1.getPatientById(this.Report.patientID,"").subscribe({
        next: (response) => {
          this.message = response.Message;

          if (response.record.insurance.toLowerCase() === 'individual') {

            this.bill.insuranceCoverage = this.bill.consultingCharge * 0.05;
            this.bill.totalCharge = this.bill.consultingCharge - this.bill.insuranceCoverage;
            this.serv1.postBill(this.bill, "").subscribe({
              next: (response) => {
                this.bill = response.record;
                this.visit.pId = this.Report.patientID;
                this.visit.doctorId = this.Report.dId;
                this.visit.dateofVisit = new Date();
                this.visit.billId = this.bill.billID;
                this.visit.reportID = this.Report.reportID;
          
                this.serv.postVisit(this.visit,"").subscribe({
                  next: (response) => {
                    this.visit = response.record;
                    console.log(response.record)
                    this.message = response.Message;
                  },
                  error: (error) => {
                    this.message = `Error: ${error}`;
                  }
                })
                this.message = response.Message;
              },
              error: (error) => {
                this.message = `Error: ${error}`;
              }
            })

          }
          else if (response.record.insurance.toLowerCase() === 'senior citizen') {
            this.bill.insuranceCoverage = this.bill.consultingCharge * 0.1;
            this.bill.totalCharge = this.bill.consultingCharge - this.bill.insuranceCoverage;
            this.serv1.postBill(this.bill, "").subscribe({
              next: (response) => {
                this.bill = response.record;
                this.visit.pId = this.Report.patientID;
                this.visit.doctorId = this.Report.dId;
                this.visit.dateofVisit = new Date();
                this.visit.billId = this.bill.billID;
                this.visit.reportID = this.Report.reportID;
          
                this.serv.postVisit(this.visit,"").subscribe({
                  next: (response) => {
                    this.visit = response.record;
                    console.log(response.record)
                    this.message = response.Message;
                  },
                  error: (error) => {
                    this.message = `Error: ${error}`;
                  }
                })
                this.message = response.Message;
              },
              error: (error) => {
                this.message = `Error: ${error}`;
              }
            })
          }
          else {
            this.bill.insuranceCoverage = 0;
            this.bill.totalCharge = this.bill.consultingCharge - this.bill.insuranceCoverage;
            this.serv1.postBill(this.bill, "").subscribe({
              next: (response) => {

                console.log("bill posted: "+response.record);
                this.bill = response.record; 
                this.visit.pId = this.Report.patientID;
                this.visit.doctorId = this.Report.dId;
                this.visit.dateofVisit = new Date();
                this.visit.billId = this.bill.billID;
                this.visit.reportID = this.Report.reportID;
          
                this.serv.postVisit(this.visit,"").subscribe({
                  next: (response) => {
                    this.visit = response.record;
                    console.log(response.record)
                    this.message = response.Message;
                  },
                  error: (error) => {
                    this.message = `Error: ${error}`;
                  }
                })
                this.message = response.Message;
              },
              error: (error) => {
                this.message = `Error: ${error}`;
              }
            })
          }

        },
        error: (error) => {
          this.message = `Error: ${error}`;
        }
      })

      this.router.navigate(['/viewreports']);
      this.clear();
    } 
    
    else 
    {
      alert('Please fill in all fields.');
    }
  }
}
