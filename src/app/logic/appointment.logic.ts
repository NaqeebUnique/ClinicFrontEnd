import { findIndex } from "rxjs";
import { Appointment } from "../models/appointment.model";

export class AppointmentLogic {
  private Appointments: Array<Appointment>;

  constructor(){
    this.Appointments = new Array<Appointment>();
    this.Appointments.push(new Appointment('A1', 'P1', '20/01/2024', '4pm-5pm', 'D1'))
    this.Appointments.push(new Appointment('A2', 'P2', '22/01/2024', '4pm-5pm', 'D2'))
}

  getAppointments():Array<Appointment>{
    return this.Appointments;
  }
  addAppointment(apt:Appointment):Array<Appointment>{
    apt.AppointmentID =  "A" + (this.Appointments.length + 1)
    this.Appointments.push(apt);
    console.log(this.Appointments)
    return this.Appointments;
  }
  deleteAppointment(apt:Appointment):Array<Appointment>
  {
    const index = this.Appointments.indexOf(apt)
    if (index!==-1)
    {
      this.Appointments.splice(index, 1);
    }
    else
    {
      console.log("No Appointment to delete.");
    }
    return this.Appointments;
  }

}
