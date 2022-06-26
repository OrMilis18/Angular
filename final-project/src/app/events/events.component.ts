import { Component, OnInit } from '@angular/core';
import Event from './Event';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];
  
  constructor(private service:EventsService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void{
    this.service.getEvents().subscribe(events => this.events = events);
  }
}
