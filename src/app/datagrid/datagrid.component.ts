import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ViewpatientsComponent } from '../viewpatients/viewpatients.component';
import { FormsModule } from '@angular/forms';
import { Patient } from '../models/patient.model';
import { PatientLogic } from '../logic/patient.logic';
import { RouterModule } from '@angular/router';
 
@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [FormsModule, ViewpatientsComponent, RouterModule],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})

export class DatagridComponent {
 
  @Input() columns: Array<any>;
  @Input() data:Array<Patient>;
  @Input() CanDelete: boolean;
  @Input() CanRestore: boolean;
  @Input() searchPatientId: string;
  @Output() rowDeleted: EventEmitter<any>;
  isChecked: boolean;
  logic: PatientLogic;

  constructor() {
    this.columns=new Array<any>();
    this.data=Array<Patient>();
    this.CanDelete = false;
    this.CanRestore = false;
    this.rowDeleted = new EventEmitter<any>();
    this.isChecked = false;
    this.searchPatientId = '';
    this.logic = new PatientLogic();
  }

  ToggleDelete(){
  this.CanDelete = !this.CanDelete}

  ToggleRestore(){
    this.CanRestore = !this.CanRestore}
 
  deleteRow(row: any) {
    const index = this.data.indexOf(row);
    if (index !== -1) {
      this.data.splice(index, 1);
      this.rowDeleted.emit(row);
    }
  } 

  RestoreData()
  {
    this.data = this.logic.getPatients();
    this.searchPatientId='';
  }

  search() {
      this.data = this.data.filter(prd => prd.PatientID.toLowerCase().includes(this.searchPatientId.toLowerCase()));
  }
}