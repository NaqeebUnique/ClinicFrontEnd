import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Appointment } from '../../Models/app.model';
import { TimeSlots } from '../../Models/app.constants';
import { Router, RouterModule } from '@angular/router';
import { ViewdoctorsComponent } from '../viewdoctors/viewdoctors.component';
import { Doctor } from '../../Models/app.model';
import { Patient } from '../../Models/app.model';
import { AdminHttpService } from '../../Services/AdminHttp.service';


@Component({
  selector: 'app-addappointment',
  standalone: true,
  imports: [FormsModule, RouterModule, ViewdoctorsComponent],
  templateUrl: './addappointment.component.html',
  styleUrl: './addappointment.component.css'
})
export class AddappointmentComponent implements OnInit{

  @Output() appointmentAdded: EventEmitter<Appointment> = new EventEmitter<Appointment>();


  appointment:Appointment;
  appointments:Array<Appointment>;
  timeslots : Array<string>;
  columns:Array<string>;
  doctors: Array<Doctor>;
  patients: Array<Patient>;
  message:string;


  constructor(private serv:AdminHttpService, private router: Router){
    this.appointment = new Appointment(0, 0, new Date(),'', 0);
    this.columns = Object.keys(this.appointment);
    this.timeslots = TimeSlots;
    this.appointments = new Array<Appointment>();
    this.doctors = new Array<Doctor>();
    this.patients = new Array<Patient>();
    this.message = '';
  }
  ngOnInit(): void {
    this.serv.getPatients("").subscribe({
      next: (response) => {
        this.patients = response.records;
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })

    this.serv.getDoctors("").subscribe({
      next: (response) => {
        this.doctors = response.records;
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })
}

  clear():void {
    this.appointment = new Appointment(0, 0, new Date(),'', 0);
  }
  save():void
  {
    if (
      this.appointment.date &&
      this.appointment.doctorId &&
      this.appointment.patientId&&
      this.appointment.timeSlot
    )
    {
      this.serv.postAppointment(this.appointment, "").subscribe({
        next: (response) => {

          console.log(this.appointment);
          this.message = response.Message;
        },
        error: (error) => {
          this.message = `Error: ${error}`;
        }
      })
      this.router.navigate(['/appointments'], { state: { newAppointment: this.appointment } });
      this.clear();
    }

    else
    {
      alert('Please fill in all fields.');
    }
  }
}
