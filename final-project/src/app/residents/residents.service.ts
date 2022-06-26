import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RESIDENTS } from './dummy-data-residents';
import Resident from './Resident';


@Injectable({
  providedIn: 'root'
})
export class ResidentsService {

  constructor() { }

  getResidents(): Observable<Resident[]>{
    const residents = of(RESIDENTS);
    return of(RESIDENTS);
  }

  getResident(id: number | string): Observable<Resident> {
    const resident = RESIDENTS.find(r => r.Id === id)!;
    return of(resident);
  }

}
