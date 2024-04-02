import { Component, Input } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { DoctorLogic } from '../logic/doctor.logic';
import { RouterModule } from '@angular/router';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { DocgridComponent } from '../docgrid/docgrid.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewdoctors',
  standalone: true,
  imports: [DocgridComponent, AdddoctorComponent, RouterModule],
  templateUrl: './viewdoctors.component.html',
  styleUrl: './viewdoctors.component.css'
})
export class ViewdoctorsComponent {

  doctor:Doctor;
  doctors:Array<Doctor>;
  private logic:DoctorLogic;
  columns:Array<string>
  newDoctor: Doctor | undefined; 

  constructor(){
    this.doctor = new Doctor('','','','', '','');
    this.logic = new DoctorLogic();
    this.doctors = this.logic.getDoctors();
    this.columns = Object.keys(this.doctor);
    this.checkForNewDoctor();
  }

  checkForNewDoctor(): void {
    this.newDoctor = history.state.newDoctor;
    if (this.newDoctor) {
      this.doctors.push(this.newDoctor);
    }
  }
  
   onRowDelete(row:Doctor):void
   {
    this.doctors = this.logic.deleteDoctor(row);
   }


}
