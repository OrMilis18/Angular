import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { EVENTS } from './dummy-data-events';
import Event from './Event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents(): Observable<Event[]>{
    const events = of(EVENTS);
    return of(EVENTS);
  }

  getEvent(id: number): Observable<Event> {
    const event = EVENTS.find(e => e.id === id)!;
    return of(event);
  }

}
