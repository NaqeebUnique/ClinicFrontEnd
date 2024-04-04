import { Component } from '@angular/core';
import { Doctor, Patient } from '../../Models/app.model';
import { Router, RouterModule } from '@angular/router';
import { AdddoctorComponent } from '../adddoctor/adddoctor.component';
import { Appointment } from '../../Models/app.model';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointmentfordoctor',
  standalone: true,
  imports: [AdddoctorComponent, RouterModule, CommonModule],
  templateUrl: './appointmentfordoctor.component.html',
  styleUrl: './appointmentfordoctor.component.css'
})
export class AppointmentfordoctorComponent {

  appointment:Appointment;
  appointments:Array<Appointment>;
  message:string;
  columns:Array<string>
  newAppointment: Appointment | undefined;
  id: number;
  patients: Array<Patient>;

  constructor(private serv:AdminHttpService, private router: Router){
    this.appointment = new Appointment(0,0,new Date(),'', 0);
    this.appointments=new Array<Appointment>;
    this.message = '';
    this.columns = Object.keys(this.appointment);
    this.id = 1;
    this.patients= new Array<Patient>();
  }
  ngOnInit(): void {
    this.serv.getAppointment("").subscribe({
      next: (response) => {
        this.appointments = response.records;
        this.appointments = this.appointments.filter(appointment => appointment.doctorId === this.id);
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })
    
    this.serv.getPatients("").subscribe({
      next: (response) => {
        this.patients = response.records;
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    }) 
  }

  getPatientName(pid:number):string
  {  const patient = this.patients.find(patient => patient.patientID === pid);
      return patient ? `${patient.firstName} ${patient.lastName}` : '';
}
  }



