import { Component, OnInit } from '@angular/core';
import Employee from './Employee';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];
  
  constructor(private service:EmployeesService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void{
    this.service.getEmployees().subscribe(employees => this.employees = employees);
  }

}
