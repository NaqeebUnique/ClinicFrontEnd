import { Component, Input } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { RouterModule } from '@angular/router';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { Appointment } from '../models/appointment.model';
import { AppointmentLogic } from '../logic/appointment.logic';

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
  private logic:AppointmentLogic;
  columns:Array<string>
  newAppointment: Appointment | undefined; 

  constructor(){
    this.appointment = new Appointment('','','','', '');
    this.logic = new AppointmentLogic();
    this.appointments = this.logic.getAppointments();
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
    this.appointments = this.logic.deleteAppointment(row);
   }
}
