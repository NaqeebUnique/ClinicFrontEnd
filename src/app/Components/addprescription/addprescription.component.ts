import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Doctor, Patient, Prescription } from '../../Models/app.model';
import { DoctorHttpService } from '../../Services/DoctorHttp.service';
import { Router, RouterModule } from '@angular/router';
import { TimeSlots } from '../../Models/app.constants';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addprescription',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './addprescription.component.html',
  styleUrls: ['./addprescription.component.css']
})
export class AddprescriptionComponent implements OnInit {

  @Output() appointmentAdded: EventEmitter<Prescription> = new EventEmitter<Prescription>();


  prescription:Prescription;
  prescriptions:Array<Prescription>;
  timeslots : Array<string>;
  columns:Array<string>;
  doctors: Array<Doctor>;
  patients: Array<Patient>;
  message:string;


  constructor(private serv:DoctorHttpService, private router: Router,private serv1:AdminHttpService){
    this.prescription = new Prescription(0,'',0,0);
    this.columns = Object.keys(this.prescription);
    this.timeslots = TimeSlots;
    this.prescriptions = new Array<Prescription>();
    this.doctors = new Array<Doctor>();
    this.patients = new Array<Patient>();
    this.message = '';
    this.prescription.docId = 1;
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
    this.prescription = new Prescription(0,'',0,0);
  }
  save():void
  {
    if (
      this.prescription.medicine &&
      this.prescription.patientId

    )
    {
      this.serv.postPrescription(this.prescription, "").subscribe({
        next: (response) => {

          console.log(this.prescription);
          this.message = response.Message;
        },
        error: (error) => {
          this.message = `Error: ${error}`;
        }
      })
      this.router.navigate(['/viewprescriptions'], { state: { newAppointment: this.prescription } });
      this.clear();
    }

    else
    {
      alert('Please fill in all fields.');
    }
  }

}
