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
import { ViewreportsComponent } from './Components/viewreports/viewreports.component';
import { AddReportComponent } from './Components/addreport/addreport.component';
import { DoctorhomepageComponent } from './Components/doctorhomepage/doctorhomepage.component';
import { DoctorincomeComponent } from './Components/doctorincome/doctorincome.component';
import { ViewpatientsfordoctorComponent } from './Components/viewpatientfordoctor/viewpatientfordoctor.component';
import { AppointmentfordoctorComponent } from './Components/appointmentfordoctor/appointmentfordoctor.component';
import { ViewbillsComponent } from './Components/viewbills/viewbills.component';
import { BillsforpatientComponent } from './Components/billsforpatient/billsforpatient.component';
import { ReportsforpatientComponent } from './Components/reportsforpatient/reportsforpatient.component';
import { AppointmentforpatientComponent } from './Components/appointmentforpatient/appointmentforpatient.component';
import { adminAuthGuardGuard } from './admin-auth-guard.guard';
import { EditdoctorComponent } from './Components/editdoctor/editdoctor.component';
import { ViewPrescriptionsComponent } from './Components/ViewPrescriptions/ViewPrescriptions.component';
import { AddprescriptionComponent } from './Components/addprescription/addprescription.component';
import { PrescriptionforpatientComponent } from './Components/prescriptionforpatient/prescriptionforpatient.component';
import { VisitsComponent } from './Components/visits/visits.component';
import { PatienthomepageComponent } from './Components/patienthomepage/patienthomepage.component';

export const routes: Routes = [
  { path: '', redirectTo: '/patienthomepage', pathMatch: 'full' },
  { path: 'adminhomepage', component: AdminhomepageComponent},
  { path: 'doctorhomepage', component: DoctorhomepageComponent},
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'adminhomepage', component: AdminhomepageComponent, canActivate: [adminAuthGuardGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'viewpatients', component: ViewpatientsComponent },
  { path: 'addpatient', component: AddpatientComponent },
  { path: 'viewdoctors', component: ViewdoctorsComponent },
  { path: 'adddoctor', component: AdddoctorComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'addappointment', component: AddappointmentComponent},
  { path: 'editpatient/:id', component: EditpatientComponent},
  { path: 'viewreports', component: ViewreportsComponent},
  { path: 'addreport', component: AddReportComponent},
  { path: 'doctorincome', component: DoctorincomeComponent},
  { path: 'viewpatientsfordoctor', component: ViewpatientsfordoctorComponent},
  { path: 'appointmentsfordoctor', component: AppointmentfordoctorComponent},
  { path: 'viewbills', component: ViewbillsComponent},
  { path: 'billsforpatient', component: BillsforpatientComponent},
  { path: 'reportsforpatient', component: ReportsforpatientComponent},
  { path: 'appointmentforpatients', component: AppointmentforpatientComponent},
  { path: 'editdoctor/:id', component: EditdoctorComponent},
  { path: 'addappointment', component: AddappointmentComponent},
  { path: 'viewprescriptions', component: ViewPrescriptionsComponent},
  { path: 'addprescriptions', component: AddprescriptionComponent},
  { path: 'prescriptionforpatient', component: PrescriptionforpatientComponent},
  { path: 'visits', component: VisitsComponent},
  { path: 'patienthomepage', component: PatienthomepageComponent}

];

