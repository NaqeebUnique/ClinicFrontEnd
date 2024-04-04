import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ViewpatientsComponent } from '../viewpatients/viewpatients.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Patient } from '../../Models/app.model';
import { RouterModule, Router } from '@angular/router';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { EditpatientComponent } from '../editpatient/editpatient.component';

@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [FormsModule, ViewpatientsComponent, RouterModule, CommonModule, ReactiveFormsModule, EditpatientComponent],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.css'
})

export class DatagridComponent implements OnInit{

  @Input() columns: Array<any>;
  @Input() data:Array<Patient>;
  CanDelete: boolean;
  CanEdit: boolean;
  @Input() CanRestore: boolean;
  @Input() searchPatientId: string;
  @Output() rowDeleted: EventEmitter<any>;
  isChecked: boolean;
  message:string;
  filteredData: Array<Patient>;
  searchInput: FormControl;
  nameInput: FormControl;
  originalData: Array<any>;



  constructor(private serv:AdminHttpService, private router: Router) {
    this.columns=new Array<any>();
    this.data=Array<Patient>();
    this.CanDelete = false;
    this.CanEdit = false;
    this.CanRestore = false;
    this.rowDeleted = new EventEmitter<any>();
    this.isChecked = false;
    this.searchPatientId = '';
    this.message="";
    this.filteredData = new Array<Patient>();
    this.searchInput = new FormControl();//
    this.nameInput = new FormControl();//
    this.originalData = new Array<any>();//

  }

  ngOnInit(): void {
    this.serv.getPatients("").subscribe({
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

    this.searchInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => {
        this.filterData(searchTerm);
      });

      this.nameInput.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(searchTerm => {
        this.filterName(searchTerm);
      });
  }

  filterData(searchTerm: string) {
    if (searchTerm.trim() === '') {
      this.filteredData = this.originalData.slice();
    } else {
      this.filteredData = this.originalData.filter(patient =>
        patient.patientID.toString().includes(searchTerm.trim())
      );
    }
    this.data = this.filteredData;
  }

  filterName(searchTerm: string) {
    if (searchTerm.trim() === '') {
      this.filteredData = this.originalData.slice();
    } else {
      this.filteredData = this.originalData.filter(patient =>
        patient.firstName.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
        patient.lastName.toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
    }
    this.data = this.filteredData;
  }

  ToggleDelete(){
  this.CanDelete = !this.CanDelete}

  ToggleEdit(){
    this.CanEdit = !this.CanEdit}

  deleteRow(row: any) {
    this.serv.deletePatient(row.patientID, "").subscribe({
      next: (response) => {
        const index = this.data.findIndex(patient => patient.patientID === row.patientID);
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
    this.router.navigate(['/editpatient', id]);
  }



}

