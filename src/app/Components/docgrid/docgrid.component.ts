import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Doctor } from '../../Models/app.model';
import { Router, RouterModule } from '@angular/router';
import { ViewdoctorsComponent } from '../viewdoctors/viewdoctors.component';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { Token } from '@angular/compiler';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-docgrid',
  standalone: true,
  imports: [FormsModule, ViewdoctorsComponent, RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './docgrid.component.html',
  styleUrl: './docgrid.component.css'
})

export class DocgridComponent implements OnInit {

  columns: Array<any>;
  @Input() data:Array<Doctor>;
  CanDelete: boolean;
  CanEdit: boolean;
  @Input() CanRestore: boolean;
  @Input() searchDoctorId: string;
  @Output() rowDeleted: EventEmitter<any>;
  isChecked: boolean;
  message:string;
  filteredData: Array<Doctor>;
  searchInput: FormControl;
  nameInput: FormControl;
  originalData: Array<any>;


  role = sessionStorage.getItem("role");

  constructor(private serv:AdminHttpService, private router: Router) {
    this.columns=["Doctor ID", "First Name","Last Name", "Speciality", "Email", "Salary"];
    this.data=Array<Doctor>();
    this.CanDelete = false;
    this.CanEdit = false;
    this.CanRestore = false;
    this.rowDeleted = new EventEmitter<any>();
    this.isChecked = false;
    this.searchDoctorId = '';
    this.message="";
    this.filteredData = new Array<Doctor>();
    this.searchInput = new FormControl();
    this.nameInput = new FormControl();
    this.originalData = new Array<any>();

  }

  ngOnInit(): void {
    this.serv.getDoctors("").subscribe({
      next: (response) => {
        this.data = response.records;
        this.originalData = response.records;
        this.filteredData = this.originalData.slice();
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })


      this.nameInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => {
        this.filterName(searchTerm);
      });
  }

  filterName(searchTerm: string) {
    if (searchTerm.trim() === '') {
      this.filteredData = this.originalData.slice();
    } else {
      this.filteredData = this.originalData.filter(doctor =>
        doctor.firstName.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
        doctor.lastName.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
    }
    this.data = this.filteredData;
  }

  ToggleDelete(){
  this.CanDelete = !this.CanDelete}

  ToggleEdit(){
    this.CanEdit = !this.CanEdit}

  deleteRow(row: Doctor) {
    this.serv.deleteDoctor(row.doctorID, "").subscribe({
      next: (response) => {
        const index = this.data.findIndex(doctor => doctor.doctorID === row.doctorID);
        this.data.splice(index, 1);
        this.message = response.Message;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })
  }

  navigateToEdit(id: number)
  {
    this.router.navigate(['/editdoctor', id]);
  }
}
