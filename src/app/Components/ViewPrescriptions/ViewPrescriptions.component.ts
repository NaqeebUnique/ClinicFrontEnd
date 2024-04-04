import { Component, OnInit } from '@angular/core';
import { Prescription } from '../../Models/app.model';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { Router, RouterModule } from '@angular/router';
import { DoctorHttpService } from '../../Services/DoctorHttp.service';
import { CommonModule } from '@angular/common';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';

@Component({
  selector: 'app-ViewPrescriptions',
  standalone: true,
  imports: [AdddoctorComponent, RouterModule,CommonModule],
  templateUrl: './ViewPrescriptions.component.html',
  styleUrls: ['./ViewPrescriptions.component.css']
})
export class ViewPrescriptionsComponent implements OnInit {

  prescription:Prescription;
  prescriptions:Array<Prescription>;
  message:string;
  columns:Array<string>
  newPrescription: Prescription | undefined;

  constructor(private serv:AdminHttpService, private router: Router,private serv1:DoctorHttpService){
    this.prescription = new Prescription(0,'',0);
    this.prescriptions=new Array<Prescription>;
    this.message = '';
    this.columns = Object.keys(this.prescription);
  }
  ngOnInit(): void {
    this.serv1.getPrescription("").subscribe({
      next: (response) => {
        this.prescriptions = response.records;
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })  }


   onPrescriptionDelete(apt:Prescription):void
   {
    this.serv1.deletePrescription(apt.priId, "").subscribe({
      next: (response) => {
        const index = this.prescriptions.findIndex(a => a.priId === apt.priId);
        this.prescriptions.splice(index, 1);
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })
   }

}
