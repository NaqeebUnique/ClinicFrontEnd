import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Doctor } from '../../Models/app.model';
import { Router, RouterModule } from '@angular/router';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { Appointment } from '../../Models/app.model';
import { AdminHttpService } from '../../Services/AdminHttp.service';


@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [AdddoctorComponent, RouterModule,CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {

  appointment:Appointment;
  appointments:Array<Appointment>;
  message:string;
  columns:Array<string>
  newAppointment: Appointment | undefined;

  constructor(private serv:AdminHttpService, private router: Router){
    this.appointment = new Appointment(0,0,new Date(),'', 0);
    this.appointments=new Array<Appointment>;
    this.message = '';
    this.columns = Object.keys(this.appointment);
  }
  ngOnInit(): void {
    this.serv.getAppointment("").subscribe({
      next: (response) => {
        this.appointments = response.records;
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })  }


   onAppointmentDelete(apt:Appointment):void
   {
    this.serv.deleteAppointment(apt.appoinmentId, "").subscribe({
      next: (response) => {
        const index = this.appointments.findIndex(a => a.appoinmentId === apt.appoinmentId);
        this.appointments.splice(index, 1);
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })
   }
}
