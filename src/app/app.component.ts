import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewpatientsComponent } from './Components/viewpatients/viewpatients.component';
import { DatagridComponent } from './Components/datagrid/datagrid.component';
import { AddpatientComponent } from './Components/addpatient/addpatient.component';
import { LoginComponent } from './Components/login/login.component';
import { AppointmentsComponent } from './Components/appointments/appointments.component';
import { ViewreportsComponent } from './Components/viewreports/viewreports.component';
import { AddReportComponent } from './Components/addreport/addreport.component';
import { VisitsComponent } from './Components/visits/visits.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VisitsComponent, ViewpatientsComponent, AddpatientComponent, DatagridComponent, LoginComponent, AppointmentsComponent, ViewreportsComponent, AddReportComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clinicapp';
}
