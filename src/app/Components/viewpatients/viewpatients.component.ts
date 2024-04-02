import { Component, Input, OnInit } from '@angular/core';
import { DatagridComponent } from '../datagrid/datagrid.component';
import { Patient } from '../../Models/app.model';
import { RouterModule } from '@angular/router';
import { AddpatientComponent } from '../addpatient/addpatient.component';
import { ViewdoctorsComponent } from '../viewdoctors/viewdoctors.component';
import { PatientHttpService } from '../../Services/PatientHttp.service';
import { AdminHttpService } from '../../Services/AdminHttp.service';


@Component({
  selector: 'app-viewpatients',
  standalone: true,
  imports: [DatagridComponent, AddpatientComponent, RouterModule, ViewdoctorsComponent],
  templateUrl: './viewpatients.component.html',
  styleUrl: './viewpatients.component.css'
})
export class ViewpatientsComponent implements OnInit{

  patient:Patient;
  patients:Array<Patient>;

  columns:Array<string>
  newPatient: Patient | undefined;
  message:string;

  constructor(private serv:AdminHttpService){
    this.patient = new Patient(0,'','',new Date(), '','','','','','','',);
    this.patients=new Array<Patient>
    this.columns = Object.keys(this.patient);
    this.checkForNewPatient();
    this.message="";


  }
  ngOnInit(): void {
    this.serv.getPatients("").subscribe({
      next: (response) => {
        this.patients = response.records;
        console.log(response);
        console.log(response.records);
        console.log(this.patients);

        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })
  }

  checkForNewPatient(): void {
    this.newPatient = history.state.newPatient;
    if (this.newPatient) {
      this.patients.push(this.newPatient);
    }
  }

   onRowDelete(row:Patient):void
   {
    //this.patients = this.logic.deletePatient(row);
   }


}
