import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DoctorHttpService } from '../../Services/DoctorHttp.service';
import { AdminHttpService } from '../../Services/AdminHttp.service';
import { Doctor, Report } from '../../Models/app.model';

@Component({
  selector: 'app-doctorincome',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './doctorincome.component.html',
  styleUrl: './doctorincome.component.css'
})
export class DoctorincomeComponent implements OnInit{

  dailyIncome: number;
  monthlyIncome: number;
  quarterlyIncome: number;
  yearlyIncome: number;
  id: number;
  message: string;
  reports: Array<Report>;
  doctor: Doctor;
  commission: number;
  salary: number;


  constructor(private serv:AdminHttpService, private serv1:DoctorHttpService) {
    this.monthlyIncome = 0;
    this.dailyIncome = 0;
    this.quarterlyIncome = 0;
    this.yearlyIncome = 0;
    this.id = 1;
    this.message = '';
    this.reports = new Array<Report>();
    this.doctor = new Doctor(0, '', '', '', '', 0);
    this.commission = 0;
    this.salary = 0;
  }

  ngOnInit(): void {
    this.id =1;
    this.serv1.getReport("").subscribe({
      next: (response) => {
        this.reports = response.records;
        const numberOfReports = this.reports.filter(report => report.dId === 1).length;
        this.commission = numberOfReports * 25;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })

    this.serv.getDoctorById(this.id, "").subscribe({
      next: (response) => {
        this.doctor = response.record;
        this.salary = response.record.salary;
        this.monthlyIncome = response.record.salary + this.commission;
        this.dailyIncome = this.monthlyIncome / 22;
        this.quarterlyIncome = this.monthlyIncome * 3;
        this.yearlyIncome = this.monthlyIncome * 12;
      },
      error: (error) => {
        this.message = `Error: ${error}`;
      }
    })    
  }



}
