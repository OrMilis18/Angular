import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDetalisComponent } from './edit-detalis/edit-detalis.component';

const routes: Routes = [
  {path:"events/:id", component: EditDetalisComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
