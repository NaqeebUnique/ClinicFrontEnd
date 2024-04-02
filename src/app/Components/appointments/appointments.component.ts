import { Component, Input } from '@angular/core';
import { Doctor } from '../../Models/app.model';
import { RouterModule } from '@angular/router';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { Appointment } from '../../Models/app.model';


@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [AdddoctorComponent, RouterModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {

  appointment:Appointment;
  appointments:Array<Appointment>;

  columns:Array<string>
  newAppointment: Appointment | undefined;

  constructor(){
    this.appointment = new Appointment(0,0,new Date(),'', 0);
    this.appointments=new Array<Appointment>;

    this.columns = Object.keys(this.appointment);
    this.checkForNewAppointment();
  }

  checkForNewAppointment(): void {
    this.newAppointment = history.state.newAppointment;
    if (this.newAppointment) {
      this.appointments.push(this.newAppointment);
    }
  }

   onAppointmentDelete(row:Appointment):void
   {
    //this.appointments = this.logic.deleteAppointment(row);
   }
}
