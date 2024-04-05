import { Component, OnInit } from '@angular/core';
import { Prescription } from '../../Models/app.model';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { Router, RouterModule } from '@angular/router';
import { DoctorHttpService } from '../../Services/DoctorHttp.service';
import { CommonModule } from '@angular/common';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';

@Component({
  selector: 'app-prescriptionforpatient',
  standalone: true,
  imports: [AdddoctorComponent, RouterModule,CommonModule],
  templateUrl: './prescriptionforpatient.component.html',
  styleUrl: './prescriptionforpatient.component.css'
})
export class PrescriptionforpatientComponent {

  prescription:Prescription;
  prescriptions:Array<Prescription>;
  message:string;
  columns:Array<string>
  newPrescription: Prescription | undefined;
  id: number;
  date: Date;

  constructor(private serv:AdminHttpService, private router: Router,private serv1:DoctorHttpService){
    this.prescription = new Prescription(0,'',0,0);
    this.prescriptions=new Array<Prescription>;
    this.message = '';
    this.columns = Object.keys(this.prescription);
    this.id = 2;
    this.date = new Date();
  }
  ngOnInit(): void {
    this.serv1.getPrescription("").subscribe({
      next: (response) => {
        this.prescriptions = response.records;
        this.prescriptions = this.prescriptions.filter(pr => pr.patientId === this.id);
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })  }

}
