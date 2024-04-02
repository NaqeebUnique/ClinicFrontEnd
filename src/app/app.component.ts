import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewpatientsComponent } from './viewpatients/viewpatients.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { LoginComponent } from './login/login.component';
import { AppointmentsComponent } from './appointments/appointments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ViewpatientsComponent, AddpatientComponent, DatagridComponent, LoginComponent, AppointmentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clinicapp';
}
