import { Component, OnInit } from '@angular/core';
import { ViewpatientsComponent } from '../viewpatients/viewpatients.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Patient } from '../../Models/app.model';
import { RouterModule, Router } from '@angular/router';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { EditpatientComponent } from '../editpatient/editpatient.component';
import { DoctorHttpService } from '../../Services/DoctorHttp.service';

@Component({
  selector: 'app-viewpatientfordoctor',
  standalone: true,
  imports: [FormsModule, ViewpatientsComponent, RouterModule, CommonModule, ReactiveFormsModule, EditpatientComponent],
  templateUrl: './viewpatientfordoctor.component.html',
  styleUrl: './viewpatientfordoctor.component.css'
})

export class ViewpatientsfordoctorComponent implements OnInit{

  columns: Array<any>;
  data:Array<Patient>;
  CanRestore: boolean;
  searchPatientId: string;
  message:string;
  nameInput: FormControl;
  originalData: Array<any>;
  doctorid: number;



  constructor(private serv:AdminHttpService, private router: Router, private serv1:DoctorHttpService) {
    this.columns=["Patient ID",	"First Name",	"Last Name", 	"Date of Birth", 	"Contact Number", 	"Email Address",	"Home Address", "Gender",	"Blood Type",	"Emergency Contact", "Insurance Policy"];
    this.data=Array<Patient>();
    this.CanRestore = false;
    this.searchPatientId = '';
    this.message="";
    this.nameInput = new FormControl();
    this.originalData = new Array<any>();
    this.doctorid = 1; 

  }

  ngOnInit(): void {
    this.serv.getPatients("").subscribe({
      next: (response) => {
        this.data = response.records;
        this.originalData = response.records;
        this.filterPatientsByDoctorId(1);
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })

    this.serv1.getReport("").subscribe({
      next: (response) => {
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })

  }



  filterPatientsByDoctorId(doctorId: number): void {
    this.serv1.getReport('').subscribe({
      next: (response) => {
        const reportsWithDoctorId = response.records.filter(report => report.dId === doctorId);
        const patientIds = reportsWithDoctorId.map(report => report.patientID);
        this.data = this.originalData.filter(patient => patientIds.includes(patient.patientID));
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    });
  }

}

