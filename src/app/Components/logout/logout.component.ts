import { Component, OnInit } from '@angular/core';
import { SecurityHttpService } from '../../Services/securityHttp.service';
import { Router } from '@angular/router';
import { Doctor } from '../../Models/app.model';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  doctor:Doctor;
  doctorid:number;

  constructor(private securityService: SecurityHttpService, private router: Router) {

    this.doctor=new Doctor(0,'','','','',0);
    this.doctorid=parseInt(sessionStorage.getItem("userId") || "0", 10);

    this.doctor.doctorID=this.doctorid;
  }

  ngOnInit() {
    this.logout();
  }

  logout(): void {
   sessionStorage.clear();
  }

}

