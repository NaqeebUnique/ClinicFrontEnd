import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Doctor } from '../../Models/app.model';
import { RouterModule } from '@angular/router';
import { ViewdoctorsComponent } from '../viewdoctors/viewdoctors.component';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-docgrid',
  standalone: true,
  imports: [FormsModule, ViewdoctorsComponent, RouterModule],
  templateUrl: './docgrid.component.html',
  styleUrl: './docgrid.component.css'
})

export class DocgridComponent implements OnInit {

  @Input() columns: Array<any>;
  @Input() data:Array<Doctor>;
  @Input() CanDelete: boolean;
  @Input() CanRestore: boolean;
  @Input() searchDoctorId: string;
  @Output() rowDeleted: EventEmitter<any>;
  message:string;

  isChecked: boolean;
  token:any;

  role = sessionStorage.getItem("role");

  constructor(private serv:AdminHttpService) {
    this.columns=new Array<any>();
    this.data=Array<Doctor>();
    this.CanDelete = false;
    this.CanRestore = false;
    this.rowDeleted = new EventEmitter<any>();
    this.isChecked = false;
    this.searchDoctorId = '';
    this.message="";
    this.token=sessionStorage.getItem("token");
  }

  ngOnInit(): void {
    const role = sessionStorage.getItem('role');

    if (role === 'Administrator') {
      const token = sessionStorage.getItem('token');

      this.serv.getDoctors(token).subscribe({
        next: (response) => {
          this.data = response.records;
          console.log(this.data);
          this.message = response.Message;
        },
        error: (error) => {
          this.message = `Error: ${error}`;
        }
      });
    } else {
      this.message = "Unauthorized access!";
    }
  }


  ToggleDelete(){
    this.CanDelete = !this.CanDelete
  }

  ToggleRestore(){
    this.CanRestore = !this.CanRestore
  }

  deleteRow(row: any) {
    this.serv.deleteDoctor(row, "").subscribe({
      next: (response) => {
        console.log(row);
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    });
  }

  RestoreData() {
    this.searchDoctorId='';
  }

  search() {
      //this.data = this.data.filter(prd => prd.DoctorID.toLowerCase().includes(this.searchDoctorId.toLowerCase()));
  }
}
