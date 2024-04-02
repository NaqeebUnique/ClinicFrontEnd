import { Routes } from '@angular/router';
import { ViewpatientsComponent } from './viewpatients/viewpatients.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { LoginComponent } from './login/login.component';
import { ViewdoctorsComponent } from './viewdoctors/viewdoctors.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AppointmentsComponent } from './appointments/appointments.component';

export const routes: Routes = [
  { path: '', redirectTo: '/adminhomepage', pathMatch: 'full' },
  { path: 'adminhomepage', component: AdminhomepageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'viewpatients', component: ViewpatientsComponent },
  { path: 'addpatient', component: AddpatientComponent },
  { path: 'viewdoctors', component: ViewdoctorsComponent },
  { path: 'adddoctor', component: AdddoctorComponent },
  { path: 'appointments', component: AppointmentsComponent }
];

