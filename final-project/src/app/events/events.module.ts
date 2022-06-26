import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";


import { EventsRoutingModule } from './events-routing.module';
import { EditDetalisComponent } from './edit-detalis/edit-detalis.component';


@NgModule({
  declarations: [
    EditDetalisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
