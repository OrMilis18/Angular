import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDetailsComponent } from './edit-details/edit-details.component';

const routes: Routes = [
  {path:"resident/edit/:id", component: EditDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentDetailsRoutingModule { }
