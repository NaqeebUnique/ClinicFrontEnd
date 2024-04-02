import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { AddpatientComponent } from './app/Components/addpatient/addpatient.component';

const bootstrap = () => bootstrapApplication(AddpatientComponent, config);

export default bootstrap;
