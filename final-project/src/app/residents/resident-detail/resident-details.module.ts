import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

import { ResidentDetailsRoutingModule } from './resident-details-routing.module';
import { EditDetailsComponent } from './edit-details/edit-details.component';


@NgModule({
  declarations: [
    EditDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ResidentDetailsRoutingModule
  ]
})
export class ResidentDetailsModule { }
