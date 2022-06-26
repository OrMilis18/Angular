import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Event from '../Event';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-edit-detalis',
  templateUrl: './edit-detalis.component.html',
  styleUrls: ['./edit-detalis.component.css']
})
export class EditDetalisComponent implements OnInit {

  event: Event | undefined;

  constructor(
    private route: ActivatedRoute, 
    private eventService : EventsService, 
    private location: Location) { }

  ngOnInit(): void {
    this.getEvent();
  }

 getEvent(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.eventService.getEvent(id).subscribe(event => this.event = event);
  }

  goBack(): void{
    this.location.back();
  }

}
