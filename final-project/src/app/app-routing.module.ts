import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ResidentsComponent } from './residents/residents.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "residents", component: ResidentsComponent},
  {path: "events", component: EventsComponent},
  {path: "employees", component: EmployeesComponent},
  {path: "business", component: BusinessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
