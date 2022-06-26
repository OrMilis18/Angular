import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResidentsComponent } from './residents/residents.component';
import { EventsComponent } from './events/events.component';
import { EmployeesComponent } from './employees/employees.component';
import { BusinessComponent } from './business/business.component';
import { ResidentsModule } from './residents/residents.module';
import { EventsModule } from './events/events.module';
import { EmployeesModule } from './employees/employees.module';
import { BusinessModule } from './business/business.module';
import { ResidentDetailsModule } from './residents/resident-detail/resident-details.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResidentsComponent,
    EventsComponent,
    EmployeesComponent,
    BusinessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ResidentsModule,
    EventsModule,
    EmployeesModule,
    BusinessModule,
    ResidentDetailsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
