import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { AddpatientComponent } from './app/Components/addpatient/addpatient.component';
import { AddappointmentComponent } from './app/Components/addappointment/addappointment.component';
import { AddprescriptionComponent } from './app/Components/addprescription/addprescription.component';
import { ViewPrescriptionsComponent } from './app/Components/ViewPrescriptions/ViewPrescriptions.component';
import { LoginComponent } from './app/Components/login/login.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
