import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentsRoutingModule } from './residents-routing.module';
import { ResidentDetailComponent } from './resident-detail/resident-detail.component';


@NgModule({
  declarations: [
    ResidentDetailComponent
  ],
  imports: [
    CommonModule,
    ResidentsRoutingModule
  ]
})
export class ResidentsModule { }
