import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { EMPLOYEES } from './dummy-data-employees';
import Employee from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployees(): Observable<Employee[]>{
    const employees = of(EMPLOYEES);
    return of(EMPLOYEES);
  }

  getEmployee(id: number): Observable<Employee> {
    const employee = EMPLOYEES.find(e => e.Id === id)!;
    return of(employee);
  }
}
