import { Component, Input } from '@angular/core';
import { DatagridComponent } from '../datagrid/datagrid.component';
import { Patient } from '../models/patient.model';
import { PatientLogic } from '../logic/patient.logic';
import { RouterModule } from '@angular/router';
import { AddpatientComponent } from '../addpatient/addpatient.component';
import { ViewdoctorsComponent } from '../viewdoctors/viewdoctors.component';


@Component({
  selector: 'app-viewpatients',
  standalone: true,
  imports: [DatagridComponent, AddpatientComponent, RouterModule, ViewdoctorsComponent],
  templateUrl: './viewpatients.component.html',
  styleUrl: './viewpatients.component.css'
})
export class ViewpatientsComponent {

  patient:Patient;
  patients:Array<Patient>;
  private logic:PatientLogic;
  columns:Array<string>
  newPatient: Patient | undefined; 

  constructor(){
    this.patient = new Patient('','','','', '','','','','','','',);
    this.logic = new PatientLogic();
    this.patients = this.logic.getPatients();
    this.columns = Object.keys(this.patient);
    this.checkForNewPatient();
  }

  checkForNewPatient(): void {
    this.newPatient = history.state.newPatient;
    if (this.newPatient) {
      this.patients.push(this.newPatient);
    }
  }
  
   onRowDelete(row:Patient):void
   {
    this.patients = this.logic.deletePatient(row);
   }


}
