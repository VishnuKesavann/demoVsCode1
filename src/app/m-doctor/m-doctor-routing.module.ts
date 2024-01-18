import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDocComponent } from './Doctor/add-doc/add-doc.component';


const routes: Routes = [
  {
    path: 'add-doc', component: AddDocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MDoctorRoutingModule { }
