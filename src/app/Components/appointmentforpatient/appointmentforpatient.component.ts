import { Component } from '@angular/core';
import { Doctor, Patient } from '../../Models/app.model';
import { Router, RouterModule } from '@angular/router';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { Appointment } from '../../Models/app.model';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointmentforpatient',
  standalone: true,
  imports: [AdddoctorComponent, RouterModule, CommonModule],
  templateUrl: './appointmentforpatient.component.html',
  styleUrl: './appointmentforpatient.component.css'
})
export class AppointmentforpatientComponent {
  appointment:Appointment;
  appointments:Array<Appointment>;
  message:string;
  columns:Array<string>
  newAppointment: Appointment | undefined;
  id: number;
  doctors: Array<Doctor>;

  constructor(private serv:AdminHttpService, private router: Router){
    this.appointment = new Appointment(0,0,new Date(),'', 0);
    this.appointments=new Array<Appointment>;
    this.message = '';
    this.columns = Object.keys(this.appointment);
    this.id = 1;
    this.doctors= new Array<Doctor>();
  }
  ngOnInit(): void {
    this.serv.getAppointment("").subscribe({
      next: (response) => {
        this.appointments = response.records;
        this.appointments = this.appointments.filter(appointment => appointment.patientId === this.id);
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

  getDoctorName(did:number):string
  {  const doctor = this.doctors.find(doctor => doctor.doctorID === did);
      return doctor ? `${doctor.firstName} ${doctor.lastName}` : '';
}
  }



