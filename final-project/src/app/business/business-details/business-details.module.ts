import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessDetailsRoutingModule } from './business-details-routing.module';
import { EditDetailsComponent } from './edit-details/edit-details.component';


@NgModule({
  declarations: [
    EditDetailsComponent
  ],
  imports: [
    CommonModule,
    BusinessDetailsRoutingModule
  ]
})
export class BusinessDetailsModule { }
