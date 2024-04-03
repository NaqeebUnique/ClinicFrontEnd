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
export class ViewpatientsComponent{

  patient:Patient;
  patients:Array<Patient>;

  columns:Array<string>
  newPatient: Patient | undefined;
  message:string;

  constructor(private serv:AdminHttpService){
    this.patient = new Patient(0,'','',new Date(), '','','','','','','',);
    this.patients=new Array<Patient>
    this.columns = ["Patient ID", "First Name", "Last Name", "Date of Birth", "Contact Number", "Email Address", "Home Address", "Gender", "Blood Type", "Emergency Contact", "Insurance Policy"];
    this.message="";


  }

   onRowDelete(row:Patient):void
   {
    //this.patients = this.logic.deletePatient(row);
   }


}
