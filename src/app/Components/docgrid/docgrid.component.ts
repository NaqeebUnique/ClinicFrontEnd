import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../../Models/app.model';
//import { DoctorLogic } from '../logic/doctor.logic';
import { RouterModule } from '@angular/router';
import { ViewdoctorsComponent } from '../viewdoctors/viewdoctors.component';

@Component({
  selector: 'app-docgrid',
  standalone: true,
  imports: [FormsModule, ViewdoctorsComponent, RouterModule],
  templateUrl: './docgrid.component.html',
  styleUrl: './docgrid.component.css'
})

export class DocgridComponent {

  @Input() columns: Array<any>;
  @Input() data:Array<Doctor>;
  @Input() CanDelete: boolean;
  @Input() CanRestore: boolean;
  @Input() searchDoctorId: string;
  @Output() rowDeleted: EventEmitter<any>;

  isChecked: boolean;
  //logic: DoctorLogic;

  constructor() {
    this.columns=new Array<any>();
    this.data=Array<Doctor>();
    this.CanDelete = false;
    this.CanRestore = false;
    this.rowDeleted = new EventEmitter<any>();
    this.isChecked = false;
    this.searchDoctorId = '';
    //this.logic = new DoctorLogic();
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
    //this.data = this.logic.getDoctors();
    this.searchDoctorId='';
  }

  search() {
      //this.data = this.data.filter(prd => prd.DoctorID.toLowerCase().includes(this.searchDoctorId.toLowerCase()));
  }
}
