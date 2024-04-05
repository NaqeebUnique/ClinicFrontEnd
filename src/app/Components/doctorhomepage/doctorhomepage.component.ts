import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ViewreportsComponent } from '../viewreports/viewreports.component';


@Component({
  selector: 'app-doctorhomepage',
  standalone: true,
  imports: [ViewreportsComponent, RouterModule],
  templateUrl: './doctorhomepage.component.html',
  styleUrl: './doctorhomepage.component.css'
})
export class DoctorhomepageComponent {

  constructor(private router: Router){}

  logout():void{
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}
