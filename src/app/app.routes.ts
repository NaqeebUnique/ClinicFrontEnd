import { Routes } from '@angular/router';
import { ViewpatientsComponent } from './Components/viewpatients/viewpatients.component';
import { AddpatientComponent } from './Components/addpatient/addpatient.component';
import { LoginComponent } from './Components/login/login.component';
import { ViewdoctorsComponent } from './Components/viewdoctors/viewdoctors.component';
import { AdddoctorComponent } from './Components/adddoctor/adddoctor.component';
import { AdminhomepageComponent } from './Components/adminhomepage/adminhomepage.component';
import { AppointmentsComponent } from './Components/appointments/appointments.component';
import { AddappointmentComponent } from './Components/addappointment/addappointment.component';
import { EditpatientComponent } from './Components/editpatient/editpatient.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'adminhomepage', component: AdminhomepageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'viewpatients', component: ViewpatientsComponent },
  { path: 'addpatient', component: AddpatientComponent },
  { path: 'viewdoctors', component: ViewdoctorsComponent },
  { path: 'adddoctor', component: AdddoctorComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'addappointment', component: AddappointmentComponent},
  { path: 'editpatient/:id', component: EditpatientComponent},
  { path: 'addappointment', component: AddappointmentComponent}
];

