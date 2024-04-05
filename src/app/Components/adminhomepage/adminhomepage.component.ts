import { Component } from '@angular/core';
import { ViewdoctorsComponent } from '../viewdoctors/viewdoctors.component';
import { ViewpatientsComponent } from '../viewpatients/viewpatients.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AppointmentsComponent } from '../appointments/appointments.component';

@Component({
  selector: 'app-adminhomepage',
  standalone: true,
  imports: [ViewdoctorsComponent, ViewpatientsComponent, RouterModule, AppointmentsComponent],
  templateUrl: './adminhomepage.component.html',
  styleUrl: './adminhomepage.component.css'
})
export class AdminhomepageComponent {

constructor(private router: Router){}

  logout():void{
    sessionStorage.clear();
    this.router.navigate(['/login']);

  }


}
