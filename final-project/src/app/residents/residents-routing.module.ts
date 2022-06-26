import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidentDetailComponent } from './resident-detail/resident-detail.component';

const routes: Routes = [
  {path:"residents/:id", component: ResidentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentsRoutingModule { }
