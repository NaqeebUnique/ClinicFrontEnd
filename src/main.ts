import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AddpatientComponent } from './app/Components/addpatient/addpatient.component';
import { AddappointmentComponent } from './app/Components/addappointment/addappointment.component';
import { AddprescriptionComponent } from './app/Components/addprescription/addprescription.component';
import { ViewPrescriptionsComponent } from './app/Components/ViewPrescriptions/ViewPrescriptions.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
